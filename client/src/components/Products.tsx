import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Product } from '@shared/schema';

export default function Products() {
  const [activeTab, setActiveTab] = useState('all');
  
  const { data: productsData, isLoading } = useQuery({
    queryKey: ['/api/products', { featured: activeTab === 'featured', limit: 8 }],
  });

  const products = productsData?.products || [];

  const tabs = [
    { id: 'all', label: 'All Items' },
    { id: 'sales', label: 'Sales' },
    { id: 'featured', label: 'Featured' },
    { id: 'best-seller', label: 'Best Seller' },
  ];

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trending This Week</h2>
            <p className="text-gray-600">Most popular products our customers love</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trending This Week</h2>
          <p className="text-gray-600">Most popular products our customers love</p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-4 py-2 rounded-md font-medium ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button size="lg" className="bg-primary text-white hover:bg-orange-600">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
}
