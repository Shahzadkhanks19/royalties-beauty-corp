import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { connectDatabase } from "./config/db.js";
import { clearSessionCookie, createSessionToken, credentialsAreValid, requireAdmin, sessionCookie } from "./lib/adminAuth.js";
import ContactInquiry from "./models/ContactInquiry.js";

const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin(origin, callback) {
      const allowedOrigins = [
        process.env.CLIENT_ORIGIN,
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
      ].filter(Boolean);

      if (!origin || process.env.NODE_ENV !== "production" || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false, limit: "1mb" }));

app.get("/api/health", async (_req, res) => {
  const response = {
    ok: true,
    service: "royalties-beauty-corp-api",
    environment: process.env.NODE_ENV || "development",
    database: "not-configured",
    timestamp: new Date().toISOString(),
  };

  if (process.env.MONGODB_URI) {
    try {
      await connectDatabase();
      response.database = "connected";
    } catch {
      response.ok = false;
      response.database = "unavailable";
      return res.status(503).json(response);
    }
  }

  return res.status(200).json(response);
});

app.post("/api/contact", async (req, res) => {
  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim().toLowerCase();
  const phone = String(req.body?.phone || "").trim();
  const organization = String(req.body?.organization || "").trim();
  const inquiryType = String(req.body?.inquiryType || "").trim();
  const message = String(req.body?.message || "").trim();
  const allowedInquiryTypes = ["Group inquiry", "Partnership", "Media & insights", "Business opportunity", "Other"];

  if (name.length < 2 || name.length > 80) return res.status(400).json({ ok: false, message: "Please enter a valid name." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) return res.status(400).json({ ok: false, message: "Please enter a valid email address." });
  if (phone.length > 30 || organization.length > 120) return res.status(400).json({ ok: false, message: "One or more fields are too long." });
  if (!allowedInquiryTypes.includes(inquiryType)) return res.status(400).json({ ok: false, message: "Please choose a valid inquiry type." });
  if (message.length < 10 || message.length > 3000) return res.status(400).json({ ok: false, message: "Please enter a message between 10 and 3000 characters." });
  if (!process.env.MONGODB_URI) return res.status(503).json({ ok: false, message: "Contact submissions are not configured yet." });

  try {
    await connectDatabase();
    await ContactInquiry.create({ name, email, phone, organization, inquiryType, message });
    return res.status(201).json({ ok: true, message: "Your inquiry has been received." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: "We could not submit your inquiry right now." });
  }
});

app.post("/api/admin/login", (req, res) => {
  try {
    if (!credentialsAreValid(req.body?.email, req.body?.password)) {
      return res.status(401).json({ ok: false, message: "Invalid admin credentials." });
    }
    res.setHeader("Set-Cookie", sessionCookie(createSessionToken()));
    return res.status(200).json({ ok: true, admin: { email: String(process.env.ADMIN_EMAIL || "").trim().toLowerCase() } });
  } catch (error) {
    console.error(error);
    return res.status(503).json({ ok: false, message: "Admin authentication is not configured." });
  }
});

app.post("/api/admin/logout", (_req, res) => {
  res.setHeader("Set-Cookie", clearSessionCookie());
  return res.status(200).json({ ok: true });
});

app.get("/api/admin/me", requireAdmin, (_req, res) => {
  return res.status(200).json({ ok: true, admin: { email: String(process.env.ADMIN_EMAIL || "").trim().toLowerCase() } });
});

app.get("/api/admin/contact-inquiries", requireAdmin, async (req, res) => {
  if (!process.env.MONGODB_URI) return res.status(503).json({ ok: false, message: "Database is not configured." });
  try {
    await connectDatabase();
    const status = String(req.query.status || "all");
    const search = String(req.query.search || "").trim();
    const filter = {};
    if (["new", "read", "replied"].includes(status)) filter.status = status;
    if (search) {
      const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      filter.$or = ["name", "email", "organization", "inquiryType", "message"].map((field) => ({ [field]: { $regex: escaped, $options: "i" } }));
    }
    const [items, newCount] = await Promise.all([
      ContactInquiry.find(filter).sort({ createdAt: -1 }).lean(),
      ContactInquiry.countDocuments({ status: "new" }),
    ]);
    return res.status(200).json({ ok: true, items, newCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: "Unable to load contact inquiries." });
  }
});

app.patch("/api/admin/contact-inquiries/:id", requireAdmin, async (req, res) => {
  const status = String(req.body?.status || "");
  if (!["new", "read", "replied"].includes(status)) return res.status(400).json({ ok: false, message: "Invalid inquiry status." });
  try {
    await connectDatabase();
    const item = await ContactInquiry.findByIdAndUpdate(req.params.id, { status }, { new: true, runValidators: true }).lean();
    if (!item) return res.status(404).json({ ok: false, message: "Inquiry not found." });
    return res.status(200).json({ ok: true, item });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: "Unable to update the inquiry." });
  }
});

app.delete("/api/admin/contact-inquiries/:id", requireAdmin, async (req, res) => {
  try {
    await connectDatabase();
    const item = await ContactInquiry.findByIdAndDelete(req.params.id).lean();
    if (!item) return res.status(404).json({ ok: false, message: "Inquiry not found." });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: "Unable to delete the inquiry." });
  }
});

app.use("/api", (_req, res) => {
  res.status(404).json({ ok: false, message: "API route not found." });
});

app.use((error, _req, res, next) => {
  void next;
  console.error(error);
  res.status(500).json({ ok: false, message: "Internal server error." });
});

export default app;
