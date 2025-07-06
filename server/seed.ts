import { db } from './db';
import { categories, products } from '@shared/schema';

async function seedDatabase() {
  console.log('Starting database seeding...');

  try {
    // Seed categories
    const categoryData = [
      {
        name: 'Food',
        slug: 'food',
        description: 'Premium pet food and nutrition',
        imageUrl: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300'
      },
      {
        name: 'Toys',
        slug: 'toys',
        description: 'Fun and engaging toys for pets',
        imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300'
      },
      {
        name: 'Beds',
        slug: 'beds',
        description: 'Comfortable beds and sleeping accessories',
        imageUrl: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300'
      },
      {
        name: 'Bowls',
        slug: 'bowls',
        description: 'Food and water bowls',
        imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300'
      },
      {
        name: 'Treats',
        slug: 'treats',
        description: 'Delicious treats and snacks',
        imageUrl: 'https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300'
      },
      {
        name: 'Health Care',
        slug: 'health-care',
        description: 'Health and grooming products',
        imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300'
      },
      {
        name: 'Furniture',
        slug: 'furniture',
        description: 'Pet furniture and climbing trees',
        imageUrl: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300'
      },
      {
        name: 'Clothing',
        slug: 'clothing',
        description: 'Pet clothing and accessories',
        imageUrl: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300'
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
        price: '32.99',
        originalPrice: '41.99',
        categoryId: insertedCategories.find(c => c.slug === 'food')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 50,
        isFeatured: true,
        tags: ['organic', 'premium', 'dog', 'nutrition']
      },
      {
        name: 'Grain-Free Cat Food',
        slug: 'grain-free-cat-food',
        description: 'Specially formulated grain-free cat food for sensitive stomachs.',
        price: '28.99',
        categoryId: insertedCategories.find(c => c.slug === 'food')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 35,
        tags: ['grain-free', 'cat', 'sensitive-stomach']
      },
      // Toy products
      {
        name: 'Interactive Cat Toy Set',
        slug: 'interactive-cat-toy-set',
        description: 'Engaging toy set with multiple interactive elements to keep cats entertained.',
        price: '15.99',
        categoryId: insertedCategories.find(c => c.slug === 'toys')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 75,
        isFeatured: true,
        tags: ['interactive', 'cat', 'entertainment']
      },
      {
        name: 'Rope Toy for Dogs',
        slug: 'rope-toy-dogs',
        description: 'Durable rope toy perfect for playing tug-of-war and cleaning teeth.',
        price: '8.99',
        categoryId: insertedCategories.find(c => c.slug === 'toys')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 100,
        tags: ['rope', 'dog', 'durable', 'dental']
      },
      // Bed products
      {
        name: 'Luxury Orthopedic Pet Bed',
        slug: 'luxury-orthopedic-pet-bed',
        description: 'Memory foam pet bed designed for joint support and maximum comfort.',
        price: '89.99',
        categoryId: insertedCategories.find(c => c.slug === 'beds')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 25,
        isFeatured: true,
        tags: ['orthopedic', 'memory-foam', 'luxury', 'comfort']
      },
      {
        name: 'Cozy Cat Cave Bed',
        slug: 'cozy-cat-cave-bed',
        description: 'Enclosed cave-style bed that provides security and warmth for cats.',
        price: '34.99',
        categoryId: insertedCategories.find(c => c.slug === 'beds')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 40,
        tags: ['cave', 'cat', 'cozy', 'enclosed']
      },
      // Bowl products
      {
        name: 'Stainless Steel Pet Bowl Set',
        slug: 'stainless-steel-pet-bowl-set',
        description: 'Set of two stainless steel bowls with non-slip base.',
        price: '24.99',
        categoryId: insertedCategories.find(c => c.slug === 'bowls')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 60,
        tags: ['stainless-steel', 'non-slip', 'set', 'durable']
      },
      {
        name: 'Elevated Feeder Station',
        slug: 'elevated-feeder-station',
        description: 'Raised feeding station to promote better digestion and posture.',
        price: '49.99',
        categoryId: insertedCategories.find(c => c.slug === 'bowls')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 30,
        tags: ['elevated', 'digestion', 'posture', 'health']
      },
      // Treat products
      {
        name: 'Premium Gourmet Treats',
        slug: 'premium-gourmet-treats',
        description: 'All-natural gourmet treats made with high-quality ingredients.',
        price: '12.99',
        originalPrice: '15.99',
        categoryId: insertedCategories.find(c => c.slug === 'treats')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 80,
        isFeatured: true,
        tags: ['gourmet', 'natural', 'premium', 'treats']
      },
      {
        name: 'Training Reward Treats',
        slug: 'training-reward-treats',
        description: 'Small, soft treats perfect for training sessions and rewards.',
        price: '9.99',
        categoryId: insertedCategories.find(c => c.slug === 'treats')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 120,
        tags: ['training', 'small', 'soft', 'rewards']
      },
      // Health Care products
      {
        name: 'Professional Grooming Kit',
        slug: 'professional-grooming-kit',
        description: 'Complete grooming kit with brushes, nail clippers, and shampoo.',
        price: '45.99',
        categoryId: insertedCategories.find(c => c.slug === 'health-care')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 45,
        tags: ['grooming', 'professional', 'complete', 'kit']
      },
      {
        name: 'Dental Chew Toys',
        slug: 'dental-chew-toys',
        description: 'Specially designed chew toys to promote dental health.',
        price: '18.99',
        categoryId: insertedCategories.find(c => c.slug === 'health-care')!.id,
        imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        stock: 65,
        tags: ['dental', 'chew', 'health', 'teeth']
      }
    ];

    const insertedProducts = await db.insert(products).values(productData).returning();
    console.log(`Seeded ${insertedProducts.length} products`);

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run the seed function if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

export { seedDatabase };
