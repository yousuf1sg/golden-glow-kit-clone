
import React from 'react';
import { Music, Inbox, BarChart3, Users, Globe, ShieldCheck } from 'lucide-react';

const featuresList = [
  {
    icon: <Music className="w-10 h-10 text-gold" />,
    title: "Submission Portal",
    description: "Custom-branded portal for artists to send you their music directly."
  },
  {
    icon: <Inbox className="w-10 h-10 text-gold" />,
    title: "Organize Tracks",
    description: "Sort, filter, and organize all your music submissions in one place."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-gold" />,
    title: "Analytics Dashboard",
    description: "Get insights into your submission activity and engagement metrics."
  },
  {
    icon: <Users className="w-10 h-10 text-gold" />,
    title: "Team Collaboration",
    description: "Invite team members to collaborate on reviewing submissions."
  },
  {
    icon: <Globe className="w-10 h-10 text-gold" />,
    title: "Multi-Platform Sharing",
    description: "Easily share selected tracks across all your platforms."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-gold" />,
    title: "Secure Storage",
    description: "All your music submissions are securely stored and backed up."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient gold-glow">Powerful Features</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to streamline your music submission and promotion workflow
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
