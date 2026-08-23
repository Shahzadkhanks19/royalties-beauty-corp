import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { connectDatabase } from "./config/db.js";
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

  if (name.length < 2 || name.length > 80) {
    return res.status(400).json({ ok: false, message: "Please enter a valid name." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    return res.status(400).json({ ok: false, message: "Please enter a valid email address." });
  }

  if (phone.length > 30 || organization.length > 120) {
    return res.status(400).json({ ok: false, message: "One or more fields are too long." });
  }

  if (!allowedInquiryTypes.includes(inquiryType)) {
    return res.status(400).json({ ok: false, message: "Please choose a valid inquiry type." });
  }

  if (message.length < 10 || message.length > 3000) {
    return res.status(400).json({ ok: false, message: "Please enter a message between 10 and 3000 characters." });
  }

  if (!process.env.MONGODB_URI) {
    return res.status(503).json({ ok: false, message: "Contact submissions are not configured yet." });
  }

  try {
    await connectDatabase();
    await ContactInquiry.create({ name, email, phone, organization, inquiryType, message });
    return res.status(201).json({ ok: true, message: "Your inquiry has been received." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: "We could not submit your inquiry right now." });
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
