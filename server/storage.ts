import {
  users,
  categories,
  products,
  reviews,
  orders,
  orderItems,
  cartItems,
  wishlist,
  blogPosts,
  type User,
  type UpsertUser,
  type Category,
  type InsertCategory,
  type Product,
  type InsertProduct,
  type Review,
  type InsertReview,
  type Order,
  type InsertOrder,
  type CartItem,
  type InsertCartItem,
  type WishlistItem,
  type InsertWishlistItem,
  type BlogPost,
  type InsertBlogPost,
} from "@shared/schema";
import { db } from "./db.js";
import { eq, desc, asc, and, ilike, count, sql } from "drizzle-orm";

export interface IStorage {
  // User operations (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Category operations
  getCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // Product operations
  getProducts(options?: {
    categoryId?: number;
    search?: string;
    featured?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<{ products: Product[]; total: number }>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, updates: Partial<InsertProduct>): Promise<Product>;
  
  // Review operations
  getProductReviews(productId: number): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  getProductRating(productId: number): Promise<{ average: number; count: number }>;
  
  // Cart operations
  getCartItems(userId: string): Promise<CartItem[]>;
  addToCart(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem>;
  removeFromCart(id: number): Promise<void>;
  clearCart(userId: string): Promise<void>;
  
  // Wishlist operations
  getWishlist(userId: string): Promise<WishlistItem[]>;
  addToWishlist(item: InsertWishlistItem): Promise<WishlistItem>;
  removeFromWishlist(userId: string, productId: number): Promise<void>;
  
  // Order operations
  createOrder(order: InsertOrder, items: { productId: number; quantity: number; price: string }[]): Promise<Order>;
  getUserOrders(userId: string): Promise<Order[]>;
  getOrderById(id: number): Promise<Order | undefined>;
  
  // Blog operations
  getBlogPosts(options?: { limit?: number; offset?: number }): Promise<{ posts: BlogPost[]; total: number }>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
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
  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories).orderBy(asc(categories.name));
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.slug, slug));
    return category;
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const [newCategory] = await db.insert(categories).values(category).returning();
    return newCategory;
  }

  // Product operations
  async getProducts(options: {
    categoryId?: number;
    search?: string;
    featured?: boolean;
    limit?: number;
    offset?: number;
  } = {}): Promise<{ products: Product[]; total: number }> {
    // Build where conditions
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

    // Build main query
    let query = db.select().from(products).where(and(...conditions)).orderBy(desc(products.createdAt));

    if (options.limit) {
      query = query.limit(options.limit);
    }

    if (options.offset) {
      query = query.offset(options.offset);
    }

    // Build count query
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

  async getProductById(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.slug, slug));
    return product;
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [newProduct] = await db.insert(products).values(product).returning();
    return newProduct;
  }

  async updateProduct(id: number, updates: Partial<InsertProduct>): Promise<Product> {
    const [updatedProduct] = await db
      .update(products)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(products.id, id))
      .returning();
    return updatedProduct;
  }

  // Review operations
  async getProductReviews(productId: number): Promise<Review[]> {
    return await db
      .select()
      .from(reviews)
      .where(eq(reviews.productId, productId))
      .orderBy(desc(reviews.createdAt));
  }

  async createReview(review: InsertReview): Promise<Review> {
    const [newReview] = await db.insert(reviews).values(review).returning();
    return newReview;
  }

  async getProductRating(productId: number): Promise<{ average: number; count: number }> {
    const [result] = await db
      .select({
        average: sql`avg(${reviews.rating})`,
        count: count(),
      })
      .from(reviews)
      .where(eq(reviews.productId, productId));

    return {
      average: parseFloat(result.average?.toString() || '0'),
      count: result.count,
    };
  }

  // Cart operations
  async getCartItems(userId: string): Promise<CartItem[]> {
    return await db
      .select()
      .from(cartItems)
      .where(eq(cartItems.userId, userId))
      .orderBy(desc(cartItems.createdAt));
  }

  async addToCart(item: InsertCartItem): Promise<CartItem> {
    // Check if item already exists
    const [existingItem] = await db
      .select()
      .from(cartItems)
      .where(and(eq(cartItems.userId, item.userId), eq(cartItems.productId, item.productId)));

    if (existingItem) {
      // Update quantity
      const [updatedItem] = await db
        .update(cartItems)
        .set({ quantity: existingItem.quantity + item.quantity, updatedAt: new Date() })
        .where(eq(cartItems.id, existingItem.id))
        .returning();
      return updatedItem;
    } else {
      // Create new item
      const [newItem] = await db.insert(cartItems).values(item).returning();
      return newItem;
    }
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem> {
    const [updatedItem] = await db
      .update(cartItems)
      .set({ quantity, updatedAt: new Date() })
      .where(eq(cartItems.id, id))
      .returning();
    return updatedItem;
  }

  async removeFromCart(id: number): Promise<void> {
    await db.delete(cartItems).where(eq(cartItems.id, id));
  }

  async clearCart(userId: string): Promise<void> {
    await db.delete(cartItems).where(eq(cartItems.userId, userId));
  }

  // Wishlist operations
  async getWishlist(userId: string): Promise<WishlistItem[]> {
    return await db
      .select()
      .from(wishlist)
      .where(eq(wishlist.userId, userId))
      .orderBy(desc(wishlist.createdAt));
  }

  async addToWishlist(item: InsertWishlistItem): Promise<WishlistItem> {
    const [newItem] = await db.insert(wishlist).values(item).returning();
    return newItem;
  }

  async removeFromWishlist(userId: string, productId: number): Promise<void> {
    await db
      .delete(wishlist)
      .where(and(eq(wishlist.userId, userId), eq(wishlist.productId, productId)));
  }

  // Order operations
  async createOrder(
    order: InsertOrder,
    items: { productId: number; quantity: number; price: string }[]
  ): Promise<Order> {
    const [newOrder] = await db.insert(orders).values(order).returning();
    
    // Insert order items
    await db.insert(orderItems).values(
      items.map(item => ({
        orderId: newOrder.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      }))
    );

    return newOrder;
  }

  async getUserOrders(userId: string): Promise<Order[]> {
    return await db
      .select()
      .from(orders)
      .where(eq(orders.userId, userId))
      .orderBy(desc(orders.createdAt));
  }

  async getOrderById(id: number): Promise<Order | undefined> {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order;
  }

  // Blog operations
  async getBlogPosts(options: { limit?: number; offset?: number } = {}): Promise<{ posts: BlogPost[]; total: number }> {
    let query = db.select().from(blogPosts).where(eq(blogPosts.isPublished, true));
    let countQuery = db.select({ count: count() }).from(blogPosts).where(eq(blogPosts.isPublished, true));

    query = query.orderBy(desc(blogPosts.createdAt));

    if (options.limit) {
      query = query.limit(options.limit);
    }

    if (options.offset) {
      query = query.offset(options.offset);
    }

    const [postResults, countResult] = await Promise.all([
      query.execute(),
      countQuery.execute(),
    ]);

    return {
      posts: postResults,
      total: countResult[0]?.count || 0,
    };
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(and(eq(blogPosts.slug, slug), eq(blogPosts.isPublished, true)));
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }
}

export const storage = new DatabaseStorage();
