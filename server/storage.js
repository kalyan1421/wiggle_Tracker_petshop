import { db } from "./db.js";
import { 
  users, 
  categories, 
  products, 
  reviews, 
  cartItems, 
  wishlist, 
  orders, 
  orderItems, 
  blogPosts 
} from "../shared/schema.js";
import { 
  eq, 
  and, 
  desc, 
  asc, 
  ilike, 
  count, 
  sql 
} from "drizzle-orm";

export class DatabaseStorage {
  // User operations
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData) {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Category operations
  async getCategories() {
    return await db.select().from(categories).orderBy(asc(categories.name));
  }

  async getCategoryBySlug(slug) {
    const [category] = await db.select().from(categories).where(eq(categories.slug, slug));
    return category;
  }

  async createCategory(category) {
    const [newCategory] = await db.insert(categories).values(category).returning();
    return newCategory;
  }

  // Product operations
  async getProducts(options = {}) {
    const conditions = [eq(products.isActive, true)];
    
    if (options.categoryId) {
      conditions.push(eq(products.categoryId, options.categoryId));
    }

    if (options.search) {
      conditions.push(ilike(products.name, `%${options.search}%`));
    }

    if (options.featured) {
      conditions.push(eq(products.isFeatured, true));
    }

    let query = db.select().from(products).where(and(...conditions)).orderBy(desc(products.createdAt));

    if (options.limit) {
      query = query.limit(options.limit);
    }

    if (options.offset) {
      query = query.offset(options.offset);
    }

    const countQuery = db.select({ count: count() }).from(products).where(and(...conditions));

    const [productResults, countResult] = await Promise.all([
      query,
      countQuery,
    ]);

    return {
      products: productResults,
      total: countResult[0]?.count || 0,
    };
  }

  async getProductById(id) {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async getProductBySlug(slug) {
    const [product] = await db.select().from(products).where(eq(products.slug, slug));
    return product;
  }

  async createProduct(product) {
    const [newProduct] = await db.insert(products).values(product).returning();
    return newProduct;
  }

  async updateProduct(id, updates) {
    const [updatedProduct] = await db
      .update(products)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(products.id, id))
      .returning();
    return updatedProduct;
  }

  // Cart operations
  async getCartItems(userId) {
    return await db
      .select()
      .from(cartItems)
      .where(eq(cartItems.userId, userId))
      .orderBy(desc(cartItems.createdAt));
  }

  async addToCart(item) {
    const [newItem] = await db.insert(cartItems).values(item).returning();
    return newItem;
  }

  async updateCartItem(id, quantity) {
    const [updatedItem] = await db
      .update(cartItems)
      .set({ quantity, updatedAt: new Date() })
      .where(eq(cartItems.id, id))
      .returning();
    return updatedItem;
  }

  async removeFromCart(id) {
    await db.delete(cartItems).where(eq(cartItems.id, id));
  }

  async clearCart(userId) {
    await db.delete(cartItems).where(eq(cartItems.userId, userId));
  }
}

export const storage = new DatabaseStorage();
