import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BlogPost } from '@shared/schema';

export default function Blog() {
  const { data: blogData, isLoading } = useQuery({
    queryKey: ['/api/blog', { limit: 3 }],
  });

  const posts = blogData?.posts || [];

  if (isLoading) {
    return (
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pet Care Tips & Articles</h2>
            <p className="text-gray-600">Expert advice to keep your pets healthy and happy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-24 mb-3" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Fallback blog posts if no data
  const fallbackPosts = [
    {
      id: 1,
      title: "Complete Guide to Pet Nutrition",
      excerpt: "Learn about essential nutrients your pets need for optimal health and wellness.",
      imageUrl: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      slug: "complete-guide-pet-nutrition",
      createdAt: "2024-12-15",
      tags: ["Pet Care"]
    },
    {
      id: 2,
      title: "Essential Dog Training Tips",
      excerpt: "Master the basics of dog training with these proven techniques from professional trainers.",
      imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      slug: "essential-dog-training-tips",
      createdAt: "2024-12-12",
      tags: ["Training"]
    },
    {
      id: 3,
      title: "Pet Grooming at Home",
      excerpt: "Keep your pets looking and feeling their best with these simple grooming techniques.",
      imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      slug: "pet-grooming-at-home",
      createdAt: "2024-12-10",
      tags: ["Grooming"]
    }
  ];

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <section className="py-16 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pet Care Tips & Articles</h2>
          <p className="text-gray-600">Expert advice to keep your pets healthy and happy</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post: any) => (
            <Card key={post.id} className="bg-white hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.tags?.[0] || 'Pet Care'}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:text-orange-600 transition-colors">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
