
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bot, MessageSquare, BarChart3, PencilRuler, Image, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const toolsList = [
  {
    icon: <Bot className="w-12 h-12 text-gold mb-4" />,
    title: "AI Content Writer",
    description: "Generate blog posts, marketing copy, and social media content with advanced AI technology.",
    buttonText: "Try Tool",
    popular: true
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-gold mb-4" />,
    title: "Social Media Assistant",
    description: "Schedule posts, analyze engagement, and generate captions for all your social platforms.",
    buttonText: "Try Tool",
    popular: false
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-gold mb-4" />,
    title: "SEO Analyzer",
    description: "Get AI-powered SEO recommendations to improve your content's search engine ranking.",
    buttonText: "Try Tool",
    popular: true
  },
  {
    icon: <PencilRuler className="w-12 h-12 text-gold mb-4" />,
    title: "Ad Copy Generator",
    description: "Create high-converting ad copy for Google, Facebook, and other platforms in seconds.",
    buttonText: "Try Tool",
    popular: false
  },
  {
    icon: <Image className="w-12 h-12 text-gold mb-4" />,
    title: "Image Generator",
    description: "Create custom images for your marketing campaigns with our AI image generation tool.",
    buttonText: "Try Tool",
    popular: false
  },
  {
    icon: <Video className="w-12 h-12 text-gold mb-4" />,
    title: "Video Script Writer",
    description: "Generate engaging video scripts for YouTube, TikTok, Instagram and other platforms.",
    buttonText: "Try Tool",
    popular: true
  }
];

const Tools: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="gold-gradient gold-glow text-4xl md:text-5xl font-bold mb-6">
              AI Marketing Tools
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover our collection of powerful AI tools designed to enhance your digital marketing strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsList.map((tool, index) => (
              <div 
                key={index} 
                className={`bg-dark-card rounded-lg p-8 border ${tool.popular ? 'border-gold/40' : 'border-gold/10'} card-hover relative`}
              >
                {tool.popular && (
                  <span className="absolute top-4 right-4 bg-gold text-black text-xs font-bold px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="flex flex-col items-center text-center">
                  {tool.icon}
                  <h3 className="text-gold text-xl font-semibold mb-3">{tool.title}</h3>
                  <p className="text-gray-300 mb-6">{tool.description}</p>
                  <Button className="button-gold w-full mt-auto">{tool.buttonText}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
