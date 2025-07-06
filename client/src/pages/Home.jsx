import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-teal-500">
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  Wiggle
                </span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-teal-500 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-teal-500 font-medium">Categories</a>
              <a href="#" className="text-gray-700 hover:text-teal-500 font-medium">Shop</a>
              <a href="#" className="text-gray-700 hover:text-teal-500 font-medium">Clinic</a>
              <a href="#" className="text-gray-700 hover:text-teal-500 font-medium">Pharmacy</a>
              <a href="#" className="text-gray-700 hover:text-teal-500 font-medium">Community</a>
            </nav>

            {/* Search Bar */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <button className="absolute right-2 top-1.5 p-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
              </div>

              {/* User Actions */}
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-teal-500 transition-colors">
                  <User className="h-6 w-6" />
                </button>
                <button className="p-2 text-gray-600 hover:text-teal-500 transition-colors relative">
                  <Heart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </button>
                <button className="p-2 text-gray-600 hover:text-teal-500 transition-colors relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </button>
                <span className="text-gray-700 font-medium">₹0.00</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
                  Get 10% Discount
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Feeding Your
                <br />
                <span className="text-gray-800">Adult Cat</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Your cat will be in optimal condition if fed with the right products
              </p>
              
              <div className="pt-4">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Gray cat eating from a metal bowl"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full blur-xl opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-orange-500"></button>
        </div>
      </main>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-teal-300 to-blue-300 rounded-full blur-3xl opacity-20"></div>
      </div>
    </div>
  );
};

export default Home; 