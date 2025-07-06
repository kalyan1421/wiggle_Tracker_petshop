import { drizzle } from 'drizzle-orm/better-sqlite3';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-serverless';
import { Pool, neonConfig } from '@neondatabase/serverless';
import Database from 'better-sqlite3';
import ws from "ws";
import * as schema from "../shared/schema.js";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

let db;

if (process.env.DATABASE_URL.startsWith('file:')) {
  // SQLite configuration
  const sqlite = new Database(process.env.DATABASE_URL.replace('file:', ''));
  db = drizzle(sqlite, { schema });
} else {
  // Neon PostgreSQL configuration
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzleNeon({ client: pool, schema });
}

export { db }; 