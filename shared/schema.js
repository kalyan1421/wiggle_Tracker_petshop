import {
  sqliteTable,
  text,
  integer,
  real,
  blob,
  index,
} from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// Session storage table (required for Replit Auth)
export const sessions = sqliteTable(
  "sessions",
  {
    sid: text("sid").primaryKey(),
    sess: text("sess").notNull(), // JSON as text
    expire: integer("expire").notNull(), // timestamp as integer
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table (required for Replit Auth)
export const users = sqliteTable("users", {
  id: text("id").primaryKey().notNull(),
  email: text("email").unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  profileImageUrl: text("profile_image_url"),
  createdAt: integer("created_at"), // timestamp as integer
  updatedAt: integer("updated_at"), // timestamp as integer
});

// Categories table
export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  imageUrl: text("image_url"),
  createdAt: integer("created_at"), // timestamp as integer
});

// Products table
export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  price: real("price").notNull(),
  originalPrice: real("original_price"),
  categoryId: integer("category_id").references(() => categories.id),
  imageUrl: text("image_url"),
  images: text("images"), // JSON as text
  stock: integer("stock").default(0),
  isActive: integer("is_active").default(1), // boolean as integer
  isFeatured: integer("is_featured").default(0), // boolean as integer
  tags: text("tags"), // JSON as text
  createdAt: integer("created_at"), // timestamp as integer
  updatedAt: integer("updated_at"), // timestamp as integer
});

// Reviews table
export const reviews = sqliteTable("reviews", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  productId: integer("product_id").references(() => products.id),
  userId: text("user_id").references(() => users.id),
  rating: integer("rating").notNull(),
  title: text("title"),
  comment: text("comment"),
  isVerified: integer("is_verified").default(0), // boolean as integer
  createdAt: integer("created_at"), // timestamp as integer
});

// Orders table
export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").references(() => users.id),
  status: text("status").default("pending"),
  total: real("total").notNull(),
  shippingAddress: text("shipping_address"), // JSON as text
  createdAt: integer("created_at"), // timestamp as integer
  updatedAt: integer("updated_at"), // timestamp as integer
});

// Order items table
export const orderItems = sqliteTable("order_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  orderId: integer("order_id").references(() => orders.id),
  productId: integer("product_id").references(() => products.id),
  quantity: integer("quantity").notNull(),
  price: real("price").notNull(),
});

// Cart items table
export const cartItems = sqliteTable("cart_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").references(() => users.id),
  productId: integer("product_id").references(() => products.id),
  quantity: integer("quantity").notNull(),
  createdAt: integer("created_at"), // timestamp as integer
  updatedAt: integer("updated_at"), // timestamp as integer
});

// Wishlist table
export const wishlist = sqliteTable("wishlist", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").references(() => users.id),
  productId: integer("product_id").references(() => products.id),
  createdAt: integer("created_at"), // timestamp as integer
});

// Blog posts table
export const blogPosts = sqliteTable("blog_posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  imageUrl: text("image_url"),
  authorId: text("author_id").references(() => users.id),
  isPublished: integer("is_published").default(0), // boolean as integer
  tags: text("tags"), // JSON as text
  createdAt: integer("created_at"), // timestamp as integer
  updatedAt: integer("updated_at"), // timestamp as integer
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  reviews: many(reviews),
  orders: many(orders),
  cartItems: many(cartItems),
  wishlist: many(wishlist),
  blogPosts: many(blogPosts),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  reviews: many(reviews),
  orderItems: many(orderItems),
  cartItems: many(cartItems),
  wishlist: many(wishlist),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  product: one(products, {
    fields: [reviews.productId],
    references: [products.id],
  }),
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
  }),
}));

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  items: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
  product: one(products, {
    fields: [orderItems.productId],
    references: [products.id],
  }),
}));

export const cartItemsRelations = relations(cartItems, ({ one }) => ({
  user: one(users, {
    fields: [cartItems.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [cartItems.productId],
    references: [products.id],
  }),
}));

export const wishlistRelations = relations(wishlist, ({ one }) => ({
  user: one(users, {
    fields: [wishlist.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [wishlist.productId],
    references: [products.id],
  }),
}));

export const blogPostsRelations = relations(blogPosts, ({ one }) => ({
  author: one(users, {
    fields: [blogPosts.authorId],
    references: [users.id],
  }),
})); 