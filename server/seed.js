import { db } from './db.js';
import { categories, products } from '../shared/schema.js';

async function seedDatabase() {
  console.log('Starting database seeding...');

  try {
    const now = Date.now();
    
    // Seed categories
    const categoryData = [
      {
        name: 'Food',
        slug: 'food',
        description: 'Premium pet food and nutrition',
        imageUrl: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        createdAt: now
      },
      {
        name: 'Toys',
        slug: 'toys',
        description: 'Fun and engaging toys for pets',
        imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        createdAt: now
      },
      {
        name: 'Beds',
        slug: 'beds',
        description: 'Comfortable beds and sleeping accessories',
        imageUrl: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        createdAt: now
      },
      {
        name: 'Bowls',
        slug: 'bowls',
        description: 'Food and water bowls',
        imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        createdAt: now
      },
      {
        name: 'Treats',
        slug: 'treats',
        description: 'Delicious treats and snacks',
        imageUrl: 'https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        createdAt: now
      },
      {
        name: 'Health Care',
        slug: 'health-care',
        description: 'Health and grooming products',
        imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        createdAt: now
      }
    ];

    const insertedCategories = await db.insert(categories).values(categoryData).returning();
    console.log(`Seeded ${insertedCategories.length} categories`);

    // Seed products
    const productData = [
      // Food products
      {
        name: 'Premium Organic Dog Food',
        slug: 'premium-organic-dog-food',
        description: 'High-quality organic dog food made with real meat and vegetables for optimal nutrition.',
        price: 32.99,
        originalPrice: 41.99,
        categoryId: insertedCategories.find(c => c.slug === 'food').id,
        imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 50,
        isFeatured: 1,
        tags: JSON.stringify(['organic', 'premium', 'dog', 'nutrition']),
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Grain-Free Cat Food',
        slug: 'grain-free-cat-food',
        description: 'Specially formulated grain-free cat food for sensitive stomachs.',
        price: 28.99,
        categoryId: insertedCategories.find(c => c.slug === 'food').id,
        imageUrl: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 35,
        tags: JSON.stringify(['grain-free', 'cat', 'sensitive-stomach']),
        createdAt: now,
        updatedAt: now
      },
      // Toy products
      {
        name: 'Interactive Cat Toy Set',
        slug: 'interactive-cat-toy-set',
        description: 'Engaging toy set with multiple interactive elements to keep cats entertained.',
        price: 15.99,
        categoryId: insertedCategories.find(c => c.slug === 'toys').id,
        imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 75,
        isFeatured: 1,
        tags: JSON.stringify(['interactive', 'cat', 'entertainment']),
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Rope Toy for Dogs',
        slug: 'rope-toy-dogs',
        description: 'Durable rope toy perfect for playing tug-of-war and cleaning teeth.',
        price: 8.99,
        categoryId: insertedCategories.find(c => c.slug === 'toys').id,
        imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 100,
        tags: JSON.stringify(['rope', 'dog', 'durable', 'dental']),
        createdAt: now,
        updatedAt: now
      },
      // Bed products
      {
        name: 'Luxury Orthopedic Pet Bed',
        slug: 'luxury-orthopedic-pet-bed',
        description: 'Memory foam pet bed designed for joint support and maximum comfort.',
        price: 89.99,
        categoryId: insertedCategories.find(c => c.slug === 'beds').id,
        imageUrl: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 25,
        isFeatured: 1,
        tags: JSON.stringify(['orthopedic', 'memory-foam', 'luxury', 'comfort']),
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Cozy Cat Cave Bed',
        slug: 'cozy-cat-cave-bed',
        description: 'Enclosed cave-style bed that provides security and warmth for cats.',
        price: 34.99,
        categoryId: insertedCategories.find(c => c.slug === 'beds').id,
        imageUrl: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 40,
        tags: JSON.stringify(['cave', 'cat', 'cozy', 'enclosed']),
        createdAt: now,
        updatedAt: now
      },
      // Bowl products
      {
        name: 'Stainless Steel Pet Bowl Set',
        slug: 'stainless-steel-pet-bowl-set',
        description: 'Set of two stainless steel bowls with non-slip base.',
        price: 24.99,
        categoryId: insertedCategories.find(c => c.slug === 'bowls').id,
        imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 60,
        tags: JSON.stringify(['stainless-steel', 'non-slip', 'set', 'durable']),
        createdAt: now,
        updatedAt: now
      },
      // Treats
      {
        name: 'Premium Gourmet Treats',
        slug: 'premium-gourmet-treats',
        description: 'All-natural gourmet treats made with high-quality ingredients.',
        price: 12.99,
        originalPrice: 15.99,
        categoryId: insertedCategories.find(c => c.slug === 'treats').id,
        imageUrl: 'https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 80,
        isFeatured: 1,
        tags: JSON.stringify(['gourmet', 'natural', 'premium', 'treats']),
        createdAt: now,
        updatedAt: now
      },
      // Health Care
      {
        name: 'Professional Grooming Kit',
        slug: 'professional-grooming-kit',
        description: 'Complete grooming kit with brushes, nail clippers, and shampoo.',
        price: 45.99,
        categoryId: insertedCategories.find(c => c.slug === 'health-care').id,
        imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 45,
        tags: JSON.stringify(['grooming', 'professional', 'complete', 'kit']),
        createdAt: now,
        updatedAt: now
      }
    ];

    const insertedProducts = await db.insert(products).values(productData).returning();
    console.log(`Seeded ${insertedProducts.length} products`);
    
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 