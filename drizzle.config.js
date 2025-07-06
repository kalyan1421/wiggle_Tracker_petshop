import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

const isSQLite = process.env.DATABASE_URL.startsWith('file:');

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.js",
  dialect: isSQLite ? "sqlite" : "postgresql",
  dbCredentials: isSQLite 
    ? { url: process.env.DATABASE_URL.replace('file:', '') }
    : { url: process.env.DATABASE_URL },
}); 