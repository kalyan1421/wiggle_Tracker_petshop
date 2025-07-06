import fs from "fs";
import path from "path";
import { createServer } from "vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function setupVite(app, server) {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "spa",
    root: resolve(__dirname, "..", "client"),
  });

  app.use(vite.ssrFixStacktrace);
  app.use(vite.middlewares);
  return vite;
}

export function serveStatic(app) {
  const clientPath = resolve(__dirname, "..", "client", "dist");
  
  if (!fs.existsSync(clientPath)) {
    throw new Error(
      `Could not find the build directory: ${clientPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(clientPath));

  // fall through to index.html if the file doesn't exist
  app.get("*", (req, res) => {
    res.sendFile(resolve(clientPath, "index.html"));
  });
}

export function log(message) {
  console.log(message);
}
