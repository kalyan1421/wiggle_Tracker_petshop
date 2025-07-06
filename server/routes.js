import { createServer } from "http";
import { storage } from "./storage.js";
import { setupAuth } from "./replitAuth.js";

export async function registerRoutes(app) {
  const server = createServer(app);

  // Setup authentication
  await setupAuth(app);

  // Basic API routes
  app.get("/api/products", async (req, res) => {
    try {
      const { categoryId, search, featured, limit = 20, offset = 0 } = req.query;
      const result = await storage.getProducts({
        categoryId: categoryId ? parseInt(categoryId) : undefined,
        search,
        featured: featured === 'true',
        limit: parseInt(limit),
        offset: parseInt(offset),
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProductById(parseInt(req.params.id));
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/cart", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const items = await storage.getCartItems(req.user.id);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/cart", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const item = await storage.addToCart({
        ...req.body,
        userId: req.user.id,
      });
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put("/api/cart/:id", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const { quantity } = req.body;
      const item = await storage.updateCartItem(parseInt(req.params.id), quantity);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete("/api/cart/:id", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      await storage.removeFromCart(parseInt(req.params.id));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return server;
}
