import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-accent py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Making Pet
              <br />
              <span className="text-yellow-200">Parenting Easy</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Everything your furry friend needs, delivered to your door with love and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Shop Now
                </Button>
              </Link>
              <Link href="/blog">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Happy golden retriever with pet toys"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating Promotion Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-bold shadow-lg">
              Save 15%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
