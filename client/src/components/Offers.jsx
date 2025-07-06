import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Offers() {
  return (
    <section className="py-16 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Offers On Pet</h2>
          <p className="text-gray-600">Special deals and promotions for your furry friends</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Shipping Offer */}
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <div className="text-3xl font-bold mb-2">30%</div>
              <p className="text-sm opacity-90 mb-4">Sale Off</p>
              <Link href="/products">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Shop Now
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* Best Seller Dog Shirt */}
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <img
                src="https://pixabay.com/get/g9aabeebf3783f2583230f036929b5682c0318bded9380bfaa67595e66a518bbd381d614ec992af58c3232dd114203a6d493416fb8f15a48c73575c59d5fc53da_1280.jpg"
                alt="Dog wearing trendy clothing"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="text-center">
                <div className="text-primary font-bold text-lg mb-1">
                  $79.99 <span className="text-gray-400 line-through text-sm">$99.00</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Best Seller Dog Shirt</h3>
                <p className="text-sm text-gray-600">Everything for your pet.</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Food Pet Offer */}
          <Card className="bg-gradient-to-br from-secondary to-green-600 text-white text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🍖</div>
              <h3 className="text-xl font-bold mb-2">Food Pet</h3>
              <p className="text-sm opacity-90 mb-2">Up to 20% off</p>
              <p className="text-sm opacity-90 mb-4">Only on Sunday!</p>
              <Link href="/products?category=food">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Shop Now
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* Gift for Pets */}
          <Card className="bg-gradient-to-br from-accent to-yellow-500 text-white text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🎁</div>
              <div className="text-3xl font-bold mb-2">15%</div>
              <h3 className="text-lg font-bold mb-2">Discount Off Gift for Pets</h3>
              <p className="text-sm opacity-90">Use Code: SAVE15</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
