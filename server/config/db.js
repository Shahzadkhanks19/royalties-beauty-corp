import mongoose from "mongoose";

let connectionPromise;

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured.");
  }

  connectionPromise ??= mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 8000,
  });

  await connectionPromise;
  return mongoose.connection;
}
