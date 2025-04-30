
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

// Sample blog post data with full content
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Better Music Promotion",
    excerpt: "Learn the best strategies to promote your music in today's digital landscape and stand out from the crowd.",
    content: `
      <p>As a music promoter, your success relies on your ability to get music in front of the right audience. In today's digital landscape, this can be both easier and more challenging than ever before. Here are our top 10 tips to elevate your music promotion strategy:</p>
      
      <h3>1. Know Your Audience Deeply</h3>
      <p>Understanding exactly who you're trying to reach is fundamental. Create detailed listener personas based on demographics, listening habits, and platform preferences.</p>
      
      <h3>2. Consistency is Key</h3>
      <p>Regular content schedules help build audience expectations and engagement. Whether it's weekly features, monthly playlists, or daily social media posts, stick to a consistent schedule.</p>
      
      <h3>3. Leverage Data Analytics</h3>
      <p>Use analytics tools to track performance across platforms. This data can reveal which strategies are working and which need refinement.</p>
      
      <h3>4. Build Genuine Relationships</h3>
      <p>The music industry thrives on connections. Invest time in building authentic relationships with artists, labels, and other promoters.</p>
      
      <h3>5. Optimize for Each Platform</h3>
      <p>Each platform has its own best practices and audience expectations. Tailor your promotion strategies specifically for each platform rather than using a one-size-fits-all approach.</p>
      
      <h3>6. Tell Compelling Stories</h3>
      <p>People connect with stories. Share the narratives behind the music, whether it's the artist's journey, the inspiration behind a track, or the impact of the music on listeners.</p>
      
      <h3>7. Embrace Video Content</h3>
      <p>Video continues to dominate engagement across platforms. Invest in quality video content that showcases artists and their music in compelling ways.</p>
      
      <h3>8. Streamline Your Workflow</h3>
      <p>Use tools like PromoKit to manage submissions efficiently, allowing you to focus on curation and promotion rather than administration.</p>
      
      <h3>9. Encourage User-Generated Content</h3>
      <p>Some of the most effective promotion comes from fans themselves. Create opportunities and incentives for users to share their experiences with the music.</p>
      
      <h3>10. Stay Authentic</h3>
      <p>In an industry often criticized for being calculating, authenticity stands out. Only promote music you genuinely believe in, and be transparent in your communications with both artists and audiences.</p>
      
      <p>Implementing these strategies will help you cut through the noise and effectively showcase the music that deserves to be heard. Remember that successful promotion is about building long-term relationships and engagement, not just short-term plays or downloads.</p>
    `,
    date: "April 25, 2025",
    author: "Alex Johnson",
    category: "Music Marketing",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "How to Organize Your Music Submissions Effectively",
    excerpt: "A comprehensive guide to managing the flood of music submissions without losing your mind.",
    content: `
      <p>As your reputation as a curator, label, or blogger grows, so does the number of submissions landing in your inbox. Without an effective system in place, managing these submissions can quickly become overwhelming. Here's how to organize your music submissions effectively:</p>
      
      <h3>Implement a Structured Submission Process</h3>
      <p>Create clear guidelines for submissions and use a dedicated submission platform (like PromoKit) to ensure you receive all the information you need in a consistent format. This might include genre tags, artist information, release dates, and press materials.</p>
      
      <h3>Categorize and Prioritize</h3>
      <p>Develop a system for categorizing submissions by genre, quality, release timeline, or any other factors relevant to your workflow. This allows you to prioritize reviewing submissions that align with your current needs or interests.</p>
      
      <h3>Schedule Regular Review Sessions</h3>
      <p>Rather than letting submissions pile up, schedule dedicated time blocks for reviewing music. This helps prevent backlog and ensures artists receive timely responses.</p>
      
      <h3>Utilize Technology</h3>
      <p>Take advantage of tools designed specifically for music submission management. These can help automate responses, organize feedback, and track your decisions over time.</p>
      
      <h3>Create Standard Response Templates</h3>
      <p>While personalized feedback is ideal, it's not always practical. Develop thoughtful response templates for common scenarios to help manage your time while still providing value to submitters.</p>
      
      <h3>Track Your Decision-Making</h3>
      <p>Maintain records of what you've accepted, rejected, and why. This helps maintain consistency in your curation and provides valuable data on your preferences over time.</p>
      
      <h3>Establish Boundaries</h3>
      <p>Set clear expectations regarding response times, feedback detail, and which communication channels you use for submissions. These boundaries help manage submitters' expectations and protect your time.</p>
      
      <p>Implementing these strategies will help transform your submission management from a source of stress into a streamlined, efficient process. The result? More time actually engaging with the music you love, and more capacity to give meaningful attention to promising submissions.</p>
    `,
    date: "April 18, 2025",
    author: "Samantha Lee",
    category: "Workflow",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Building Relationships with Artists: A Label's Guide",
    excerpt: "Discover how to create lasting and mutually beneficial relationships with the artists you work with.",
    content: "Full content for post 3 would go here...",
    date: "April 10, 2025",
    author: "Marcus Chen",
    category: "Industry Tips",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "The Future of Music Distribution in 2025",
    excerpt: "Exploring the evolving landscape of music distribution and what it means for artists and labels.",
    content: "Full content for post 4 would go here...",
    date: "April 5, 2025",
    author: "Jordan Smith",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Maximizing Your Reach with PromoKit's Analytics",
    excerpt: "Learn how to use data-driven insights to improve your music promotion strategies.",
    content: "Full content for post 5 would go here...",
    date: "March 28, 2025",
    author: "Taylor Rodriguez",
    category: "PromoKit Features",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "From Submission to Playlist: The Journey of a Track",
    excerpt: "Follow the path a track takes from initial submission to getting featured on popular playlists.",
    content: "Full content for post 6 would go here...",
    date: "March 20, 2025",
    author: "Jamie Wilson",
    category: "Playlisting",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop"
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '1');
  
  const post = blogPostsData.find(post => post.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-dark">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Post not found</h1>
            <Link to="/blog">
              <Button className="button-gold">Return to Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-gold hover:text-gold-light mb-6">
            <ChevronLeft size={20} />
            <span>Back to Blog</span>
          </Link>
          
          <div className="max-w-4xl mx-auto bg-dark-card rounded-lg overflow-hidden border border-gold/10 shadow-lg">
            <div className="h-64 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <span className="text-sm text-gold px-3 py-1 rounded-full bg-gold/10 mb-2">
                  {post.category}
                </span>
                <span className="text-sm text-gray-400 mb-2">{post.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{post.title}</h1>
              <p className="text-lg text-gray-300 mb-6 italic">{post.excerpt}</p>
              
              <div className="border-t border-gold/10 pt-4 mb-8">
                <p className="text-gray-400">By {post.author}</p>
              </div>
              
              <div className="prose prose-invert prose-gold max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              <div className="mt-12 pt-6 border-t border-gold/10">
                <h3 className="text-xl font-bold mb-4 text-white">Share this article</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                    Twitter
                  </Button>
                  <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                    Facebook
                  </Button>
                  <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPostsData.filter(p => p.id !== postId).slice(0, 2).map(relatedPost => (
                <div key={relatedPost.id} className="bg-dark-card rounded-lg overflow-hidden border border-gold/10 shadow-lg flex">
                  <div className="w-1/3">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h4 className="text-lg font-bold mb-1 text-white">{relatedPost.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{relatedPost.date}</p>
                    <Link to={`/blog/${relatedPost.id}`}>
                      <Button variant="link" className="text-gold hover:text-gold-light p-0">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
