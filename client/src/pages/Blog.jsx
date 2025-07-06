import React from 'react';
import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { BlogPost } from '@shared/schema';

export default function Blog() {
  const { slug } = useParams();
  const isDetailPage = !!slug;

  const { data: blogData, isLoading: blogLoading } = useQuery({
    queryKey: isDetailPage ? [`/api/blog/${slug}`] : ['/api/blog', { limit: 12 }],
    enabled: true,
  });

  // If it's a detail page, blogData is a single post, otherwise it's { posts, total }
  const post = isDetailPage ? blogData : null;
  const posts = isDetailPage ? [] : (blogData?.posts || []);

  // Fallback blog posts for listing page
  const fallbackPosts = [
    {
      id: 1,
      title: "Complete Guide to Pet Nutrition",
      excerpt: "Learn about essential nutrients your pets need for optimal health and wellness. This comprehensive guide covers everything from choosing the right food to understanding nutritional labels.",
      content: "Pet nutrition is one of the most important aspects of caring for your furry friends...",
      imageUrl: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      slug: "complete-guide-pet-nutrition",
      createdAt: "2024-12-15",
      tags: ["Pet Care", "Nutrition"],
      authorId: "admin"
    },
    {
      id: 2,
      title: "Essential Dog Training Tips",
      excerpt: "Master the basics of dog training with these proven techniques from professional trainers. From basic commands to advanced tricks.",
      content: "Training your dog is essential for a harmonious relationship...",
      imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      slug: "essential-dog-training-tips",
      createdAt: "2024-12-12",
      tags: ["Training", "Dogs"],
      authorId: "admin"
    },
    {
      id: 3,
      title: "Pet Grooming at Home",
      excerpt: "Keep your pets looking and feeling their best with these simple grooming techniques you can do at home.",
      content: "Regular grooming is important for your pet's health...",
      imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      slug: "pet-grooming-at-home",
      createdAt: "2024-12-10",
      tags: ["Grooming", "Pet Care"],
      authorId: "admin"
    },
    {
      id: 4,
      title: "Choosing the Right Pet Bed",
      excerpt: "A comfortable bed is essential for your pet's rest and overall well-being. Here's how to choose the perfect one.",
      content: "Just like humans, pets need quality sleep...",
      imageUrl: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      slug: "choosing-right-pet-bed",
      createdAt: "2024-12-08",
      tags: ["Comfort", "Pet Care"],
      authorId: "admin"
    },
    {
      id: 5,
      title: "Fun Indoor Activities for Pets",
      excerpt: "Rainy day? No problem! Keep your pets entertained with these creative indoor activities and games.",
      content: "Bad weather shouldn't stop your pet from having fun...",
      imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      slug: "fun-indoor-activities-pets",
      createdAt: "2024-12-05",
      tags: ["Activities", "Entertainment"],
      authorId: "admin"
    },
    {
      id: 6,
      title: "Pet Health Warning Signs",
      excerpt: "Learn to recognize the early warning signs that your pet may need veterinary attention. Early detection saves lives.",
      content: "Being able to recognize when your pet isn't feeling well...",
      imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      slug: "pet-health-warning-signs",
      createdAt: "2024-12-03",
      tags: ["Health", "Veterinary"],
      authorId: "admin"
    }
  ];

  if (blogLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          {isDetailPage ? (
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-8 w-1/4 mb-4" />
              <Skeleton className="h-64 w-full mb-8" />
              <Skeleton className="h-6 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ) : (
            <div>
              <Skeleton className="h-8 w-1/4 mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }

  if (isDetailPage) {
    // Find fallback post if no data from API
    const displayPost = post || fallbackPosts.find(p => p.slug === slug);
    
    if (!displayPost) {
      return (
        <div className="min-h-screen bg-white">
          <Header />
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h1>
              <Link href="/blog">
                <Button>Back to Blog</Button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            {/* Article Header */}
            <article>
              <header className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {displayPost.tags?.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {displayPost.title}
                </h1>
                
                <div className="flex items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Wiggle Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(displayPost.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {displayPost.imageUrl && (
                  <img
                    src={displayPost.imageUrl}
                    alt={displayPost.title}
                    className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
                  />
                )}
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {displayPost.excerpt}
                </p>
                
                <div className="text-gray-800 leading-relaxed space-y-6">
                  {/* This would typically be markdown content rendered as HTML */}
                  <p>
                    Pet care is an essential responsibility that requires dedication, knowledge, and love. 
                    Whether you're a first-time pet owner or an experienced caregiver, there's always something 
                    new to learn about keeping your furry friends healthy and happy.
                  </p>
                  
                  <p>
                    In this comprehensive guide, we'll explore the fundamental aspects of pet care, from 
                    nutrition and exercise to grooming and health monitoring. Our goal is to provide you 
                    with practical, actionable advice that you can implement immediately.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
                  
                  <ul className="list-disc list-inside space-y-2">
                    <li>Regular veterinary check-ups are crucial for early detection of health issues</li>
                    <li>A balanced diet tailored to your pet's age and breed is fundamental</li>
                    <li>Daily exercise and mental stimulation keep pets physically and emotionally healthy</li>
                    <li>Consistent grooming routines prevent many common health problems</li>
                    <li>Understanding your pet's behavior helps build a stronger bond</li>
                  </ul>

                  <p>
                    Remember, every pet is unique, and what works for one may not work for another. 
                    Always consult with your veterinarian for personalized advice, especially when 
                    introducing new foods, supplements, or exercise routines.
                  </p>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fallbackPosts
                  .filter(p => p.slug !== slug)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <img
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          className="w-full h-32 object-cover"
                        />
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-lg mb-2">{relatedPost.title}</h4>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Blog listing page
  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pet Care Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, tips, and insights to help you provide the best care for your beloved pets
          </p>
        </div>

        {/* Featured Post */}
        {displayPosts.length > 0 && (
          <div className="mb-16">
            <Link href={`/blog/${displayPosts[0].slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <img
                    src={displayPosts[0].imageUrl}
                    alt={displayPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex gap-2 mb-4">
                      {displayPosts[0].tags?.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {displayPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {displayPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(displayPosts[0].createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.slice(1).map((post: any) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags?.slice(0, 2).map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-orange-600">
            Load More Articles
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
