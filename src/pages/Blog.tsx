
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
    title: "10 Tips for Better Music Promotion",
    excerpt: "Learn the best strategies to promote your music in today's digital landscape and stand out from the crowd.",
    date: "April 25, 2025",
    author: "Alex Johnson",
    category: "Music Marketing",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "How to Organize Your Music Submissions Effectively",
    excerpt: "A comprehensive guide to managing the flood of music submissions without losing your mind.",
    date: "April 18, 2025",
    author: "Samantha Lee",
    category: "Workflow",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Building Relationships with Artists: A Label's Guide",
    excerpt: "Discover how to create lasting and mutually beneficial relationships with the artists you work with.",
    date: "April 10, 2025",
    author: "Marcus Chen",
    category: "Industry Tips",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "The Future of Music Distribution in 2025",
    excerpt: "Exploring the evolving landscape of music distribution and what it means for artists and labels.",
    date: "April 5, 2025",
    author: "Jordan Smith",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Maximizing Your Reach with PromoKit's Analytics",
    excerpt: "Learn how to use data-driven insights to improve your music promotion strategies.",
    date: "March 28, 2025",
    author: "Taylor Rodriguez",
    category: "PromoKit Features",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "From Submission to Playlist: The Journey of a Track",
    excerpt: "Follow the path a track takes from initial submission to getting featured on popular playlists.",
    date: "March 20, 2025",
    author: "Jamie Wilson",
    category: "Playlisting",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop"
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
              <span className="gold-gradient gold-glow">PromoKit Blog</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Insights, tips, and news from the music promotion industry to help you streamline your workflow
              and maximize your impact.
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
