import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { connectDatabase } from "./config/db.js";

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

app.use("/api", (_req, res) => {
  res.status(404).json({ ok: false, message: "API route not found." });
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ ok: false, message: "Internal server error." });
});

export default app;
