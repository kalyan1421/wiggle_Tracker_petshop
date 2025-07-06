import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Categories from '@/components/Categories';
import Offers from '@/components/Offers';
import Products from '@/components/Products';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Categories />
      <Offers />
      <Products />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
