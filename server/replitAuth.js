import session from "express-session";
import MemoryStore from "memorystore";

const MemoryStoreSession = MemoryStore(session);

export async function setupAuth(app) {
  // Basic session setup
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "your-secret-key",
      resave: false,
      saveUninitialized: false,
      store: new MemoryStoreSession({
        checkPeriod: 86400000, // prune expired entries every 24h
      }),
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
    })
  );

  // Mock authentication middleware for development
  app.use((req, res, next) => {
    // For development, create a mock user
    if (!req.user) {
      req.user = {
        id: "mock-user-id",
        name: "Mock User",
        email: "mock@example.com"
      };
    }
    next();
  });
}

export function isAuthenticated(req, res, next) {
  if (req.user) {
    return next();
  }
  res.status(401).json({ error: "Unauthorized" });
}
