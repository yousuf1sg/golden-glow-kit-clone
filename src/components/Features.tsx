
import React from 'react';
import { Bot, MessageSquare, BarChart3, Users, Globe, ShieldCheck } from 'lucide-react';

const featuresList = [
  {
    icon: <Bot className="w-10 h-10 text-gold" />,
    title: "AI Content Creation",
    description: "Generate high-quality marketing copy, blog posts, and social media content with advanced AI."
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-gold" />,
    title: "Social Media Assistant",
    description: "Schedule posts, analyze engagement, and generate content ideas for all your social platforms."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-gold" />,
    title: "Analytics Dashboard",
    description: "Track performance metrics across all your marketing campaigns with detailed insights."
  },
  {
    icon: <Users className="w-10 h-10 text-gold" />,
    title: "Team Collaboration",
    description: "Invite team members to collaborate on marketing projects and content creation."
  },
  {
    icon: <Globe className="w-10 h-10 text-gold" />,
    title: "Multi-Platform Publishing",
    description: "Publish content directly to all your social media platforms and websites."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-gold" />,
    title: "Secure Data Management",
    description: "All your marketing data is securely stored and protected with enterprise-grade security."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient gold-glow">Powerful AI Tools</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to streamline your digital marketing and content creation workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark-card rounded-lg p-6 border border-gold/10 card-hover"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-gold text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
