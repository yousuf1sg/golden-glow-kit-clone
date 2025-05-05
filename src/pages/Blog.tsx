
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 AI Marketing Strategies That Actually Work",
    excerpt: "Discover proven AI-powered marketing strategies that can dramatically improve your campaign performance and ROI.",
    date: "April 25, 2025",
    author: "Alex Johnson",
    category: "AI Marketing",
    image: "https://images.unsplash.com/photo-1671726203454-88bf62cd8d68?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "How to Create Effective Content with AI Tools",
    excerpt: "A comprehensive guide to leveraging AI content generators while maintaining brand voice and audience engagement.",
    date: "April 18, 2025",
    author: "Samantha Lee",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Building Customer Relationships with AI Personalization",
    excerpt: "Learn how to use AI to create personalized marketing experiences that resonate with individual customers.",
    date: "April 10, 2025",
    author: "Marcus Chen",
    category: "Customer Engagement",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "The Future of Digital Marketing in 2025",
    excerpt: "Exploring emerging AI trends in digital marketing and how they're reshaping strategies for brands worldwide.",
    date: "April 5, 2025",
    author: "Jordan Smith",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Maximizing Your Campaign Reach with PromoterKit's Analytics",
    excerpt: "Learn how to use data-driven insights from PromoterKit to optimize your marketing campaigns.",
    date: "March 28, 2025",
    author: "Taylor Rodriguez",
    category: "PromoterKit Features",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "From Draft to Campaign: The AI-Powered Marketing Workflow",
    excerpt: "Follow the path your campaign takes from initial concept to fully deployed marketing assets using AI tools.",
    date: "March 20, 2025",
    author: "Jamie Wilson",
    category: "Workflow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1470&auto=format&fit=crop"
  }
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-dark-card rounded-lg overflow-hidden border border-gold/10 shadow-lg hover:shadow-[0_0_15px_rgba(245,203,92,0.2)] transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gold px-2 py-1 rounded-full bg-gold/10">
            {post.category}
          </span>
          <span className="text-xs text-gray-400">{post.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">By {post.author}</span>
          <Link to={`/blog/${post.id}`}>
            <Button variant="link" className="text-gold hover:text-gold-light">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-gradient gold-glow">PromoterKit Blog</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Insights, tips, and strategies for leveraging AI to enhance your marketing campaigns,
              optimize your workflow, and maximize your business impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="button-gold">Load More Articles</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
