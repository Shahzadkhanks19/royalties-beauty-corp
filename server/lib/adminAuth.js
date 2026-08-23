import crypto from "node:crypto";

const COOKIE_NAME = "rbcorp_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must be configured with at least 32 characters.");
  }
  return value;
}

function encode(value) {
  return Buffer.from(value).toString("base64url");
}

function decode(value) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(payload) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}

function safeEqual(left, right) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function credentialsAreValid(email, password) {
  const expectedEmail = String(process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const expectedPassword = String(process.env.ADMIN_PASSWORD || "");
  const suppliedEmail = String(email || "").trim().toLowerCase();
  const suppliedPassword = String(password || "");

  if (!expectedEmail || !expectedPassword || !suppliedEmail || !suppliedPassword) return false;

  const emailOk = safeEqual(
    crypto.createHash("sha256").update(suppliedEmail).digest("hex"),
    crypto.createHash("sha256").update(expectedEmail).digest("hex"),
  );
  const passwordOk = safeEqual(
    crypto.createHash("sha256").update(suppliedPassword).digest("hex"),
    crypto.createHash("sha256").update(expectedPassword).digest("hex"),
  );

  return emailOk && passwordOk;
}

export function createSessionToken() {
  const payload = JSON.stringify({
    sub: "rbcorp-admin",
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  });
  const encoded = encode(payload);
  return `${encoded}.${sign(encoded)}`;
}

export function verifySessionToken(token) {
  if (!token || !token.includes(".")) return false;
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature || !safeEqual(sign(encoded), signature)) return false;

  try {
    const payload = JSON.parse(decode(encoded));
    return payload.sub === "rbcorp-admin" && Number(payload.exp) > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function readCookie(req, name = COOKIE_NAME) {
  const header = req.headers.cookie || "";
  const match = header.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : "";
}

export function requireAdmin(req, res, next) {
  try {
    if (!verifySessionToken(readCookie(req))) {
      return res.status(401).json({ ok: false, message: "Admin authentication required." });
    }
    return next();
  } catch {
    return res.status(503).json({ ok: false, message: "Admin authentication is not configured." });
  }
}

export function sessionCookie(token) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${SESSION_TTL_SECONDS}; SameSite=Strict${secure}`;
}

export function clearSessionCookie() {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${COOKIE_NAME}=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict${secure}`;
}
