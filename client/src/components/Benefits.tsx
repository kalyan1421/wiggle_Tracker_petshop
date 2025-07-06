import React from 'react';
import { Truck, Gift, Award, Home, Shield, Heart } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Wide Range, Free Delivery",
      description: "Over 10,000 products with free shipping on orders over $50"
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: "Save More With Rewards",
      description: "Earn points on every purchase and get exclusive member discounts"
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Helping You Choose the Best",
      description: "Expert advice and reviews to help you find the perfect products"
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Delivered To Your Door",
      description: "Fast, reliable delivery right to your doorstep"
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "100% Protected By PayPal",
      description: "Secure payments and buyer protection guaranteed"
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Making Pet Parenting Easy",
      description: "Everything you need to keep your pets happy and healthy"
    }
  ];

  return (
    <section className="py-16 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
