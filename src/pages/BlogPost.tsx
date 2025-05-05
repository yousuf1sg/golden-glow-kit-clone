
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
    title: "10 AI Marketing Strategies That Actually Work",
    excerpt: "Discover proven AI-powered marketing strategies that can dramatically improve your campaign performance and ROI.",
    content: `
      <p>AI is transforming digital marketing in profound ways, but not all AI strategies are created equal. Here are ten proven approaches that deliver real results:</p>
      
      <h3>1. Hyper-Personalized Customer Journeys</h3>
      <p>Use AI to analyze customer behavior and create deeply personalized marketing journeys that adapt in real-time based on individual actions, preferences, and engagement patterns.</p>
      
      <h3>2. Smart Content Creation</h3>
      <p>Implement AI content generators, but with human oversight to ensure brand voice consistency. Combine AI efficiency with human creativity for content that resonates authentically.</p>
      
      <h3>3. Predictive Analytics for Campaign Optimization</h3>
      <p>Leverage AI-powered predictive models to anticipate which campaign elements will perform best with specific audience segments before full deployment.</p>
      
      <h3>4. Conversational Marketing with Advanced Chatbots</h3>
      <p>Deploy AI chatbots that go beyond basic FAQs to provide personalized recommendations, qualify leads, and handle complex customer interactions seamlessly.</p>
      
      <h3>5. Dynamic Pricing Optimization</h3>
      <p>Use AI algorithms to adjust pricing strategies in real-time based on demand, competition, customer behavior, and market conditions to maximize revenue and conversion.</p>
      
      <h3>6. Visual and Voice Search Optimization</h3>
      <p>Adapt your SEO strategy for AI-powered visual and voice search capabilities, which are rapidly gaining prominence across platforms and devices.</p>
      
      <h3>7. Sentiment Analysis for Brand Management</h3>
      <p>Monitor brand perception across social media and review platforms with AI tools that analyze sentiment and alert you to emerging reputation issues before they escalate.</p>
      
      <h3>8. Streamlined Workflow with PromoterKit</h3>
      <p>Use integrated AI marketing platforms like PromoterKit to manage campaigns efficiently, allowing you to focus on strategy rather than repetitive tasks.</p>
      
      <h3>9. Predictive Lead Scoring</h3>
      <p>Apply machine learning models to score leads based on their likelihood to convert, helping your sales team prioritize their efforts for maximum impact.</p>
      
      <h3>10. Cross-Channel Attribution Modeling</h3>
      <p>Deploy AI to accurately attribute conversions across multiple marketing channels, gaining clarity on which touchpoints truly drive customer decisions.</p>
      
      <p>Implementing these strategies requires thoughtful planning and execution. Start by identifying which approaches align best with your current business objectives and gradually expand your AI marketing toolkit as you build expertise and see results.</p>
    `,
    date: "April 25, 2025",
    author: "Alex Johnson",
    category: "AI Marketing",
    image: "https://images.unsplash.com/photo-1671726203454-88bf62cd8d68?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "How to Create Effective Content with AI Tools",
    excerpt: "A comprehensive guide to leveraging AI content generators while maintaining brand voice and audience engagement.",
    content: `
      <p>AI content generation tools have revolutionized how marketers create and distribute content, but using them effectively requires strategy and expertise. Here's your guide to creating content that resonates with audiences while leveraging AI assistance:</p>
      
      <h3>Understanding AI Content Tool Capabilities</h3>
      <p>Modern AI writing tools can generate blog posts, social media content, email campaigns, and more. However, their greatest strength lies not in replacing human creativity but in enhancing and accelerating it.</p>
      
      <h3>Maintaining Your Brand Voice</h3>
      <p>The key to effective AI content is proper prompting and editing. Train your AI tools with examples of your brand's voice, provide detailed context for each piece, and always review the output to ensure it authentically represents your brand.</p>
      
      <h3>Creating Comprehensive Content Briefs</h3>
      <p>The quality of AI output directly correlates with the quality of your input. Develop detailed briefs including target audience, key messaging points, preferred tone, and specific calls to action to guide the AI effectively.</p>
      
      <h3>Human Review and Enhancement</h3>
      <p>AI-generated content should be a starting point, not the finished product. Establish an editorial workflow where human marketers review, refine, and enhance the AI output, adding unique insights, brand-specific nuances, and emotional intelligence.</p>
      
      <h3>SEO Integration</h3>
      <p>Combine AI content generation with SEO tools to create content that's both engaging and discoverable. Use PromoterKit's integrated SEO features to identify opportunities and optimize your AI-generated content accordingly.</p>
      
      <h3>Content Distribution Strategy</h3>
      <p>AI can help identify the optimal channels, timing, and formats for your content distribution. Analyze performance data to continuously refine your approach and maximize engagement.</p>
      
      <h3>Ethical Considerations</h3>
      <p>Transparency about AI involvement in content creation builds trust. Consider your disclosure approach and ensure your AI tools are trained on ethically sourced data that respects intellectual property.</p>
      
      <p>By thoughtfully implementing these strategies, you can harness the efficiency of AI content tools while maintaining the authentic connection with your audience that drives true marketing success. The goal isn't to replace human creativity but to augment it, freeing your team to focus on strategic thinking and creative direction.</p>
    `,
    date: "April 18, 2025",
    author: "Samantha Lee",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Building Customer Relationships with AI Personalization",
    excerpt: "Learn how to use AI to create personalized marketing experiences that resonate with individual customers.",
    content: "Full content for AI personalization post would go here...",
    date: "April 10, 2025",
    author: "Marcus Chen",
    category: "Customer Engagement",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "The Future of Digital Marketing in 2025",
    excerpt: "Exploring emerging AI trends in digital marketing and how they're reshaping strategies for brands worldwide.",
    content: "Full content for digital marketing trends post would go here...",
    date: "April 5, 2025",
    author: "Jordan Smith",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Maximizing Your Campaign Reach with PromoterKit's Analytics",
    excerpt: "Learn how to use data-driven insights from PromoterKit to optimize your marketing campaigns.",
    content: "Full content for PromoterKit analytics post would go here...",
    date: "March 28, 2025",
    author: "Taylor Rodriguez",
    category: "PromoterKit Features",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "From Draft to Campaign: The AI-Powered Marketing Workflow",
    excerpt: "Follow the path your campaign takes from initial concept to fully deployed marketing assets using AI tools.",
    content: "Full content for AI marketing workflow post would go here...",
    date: "March 20, 2025",
    author: "Jamie Wilson",
    category: "Workflow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1470&auto=format&fit=crop"
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
