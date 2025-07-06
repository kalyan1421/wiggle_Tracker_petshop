import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const { isAuthenticated, user } = useAuth();
  const { total } = useCart();
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const categories = [
    { name: 'Food', slug: 'food' },
    { name: 'Toys', slug: 'toys' },
    { name: 'Beds', slug: 'beds' },
    { name: 'Bowls', slug: 'bowls' },
    { name: 'Treats', slug: 'treats' },
    { name: 'Health Care', slug: 'health-care' },
    { name: 'Furniture', slug: 'furniture' },
    { name: 'Clothing', slug: 'clothing' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📧 support@wiggle.com</span>
            <span>📞 1-800-PET-CARE</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-accent">Track Order</a>
            <a href="#" className="hover:text-accent">Help</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              🐾 Wiggle
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8 hidden lg:block">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search for pet supplies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="p-4">
                  <form onSubmit={handleSearch} className="relative">
                    <Input
                      type="text"
                      placeholder="Search for pet supplies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-4 pr-12 py-3"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  </form>
                </SheetContent>
              </Sheet>
            </div>

            {/* Wishlist */}
            <Link href="/wishlist" className="flex items-center space-x-1 text-gray-700 hover:text-primary">
              <Heart className="h-5 w-5" />
              <span className="hidden md:inline">Wishlist</span>
              <Badge variant="secondary" className="bg-primary text-white">3</Badge>
            </Link>

            {/* Account */}
            {isAuthenticated ? (
              <Link href="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Account</span>
              </Link>
            ) : (
              <a href="/api/login" className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Login</span>
              </a>
            )}

            {/* Cart */}
            <Link href="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-primary relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
              {total > 0 && (
                <Badge variant="secondary" className="bg-primary text-white">
                  {total}
                </Badge>
              )}
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/products?category=${category.slug}`}
                        className="text-gray-700 hover:text-primary font-medium py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t border-gray-200 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products?category=${category.slug}`}
                  className="text-gray-700 hover:text-primary font-medium"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Free shipping over $50</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
