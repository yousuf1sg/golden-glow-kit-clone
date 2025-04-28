
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "PromoKit completely changed how I handle demo submissions. I'm able to process twice as many tracks in half the time.",
    author: "DJ Beatmaster",
    role: "Record Label Owner",
    avatar: "/placeholder.svg"
  },
  {
    content: "The organization features are incredible. I can easily filter submissions by genre, quality, and even set custom tags.",
    author: "Sarah Johnson",
    role: "Music Blogger",
    avatar: "/placeholder.svg"
  },
  {
    content: "The analytics give me exactly what I need to understand which submissions are performing best with my audience.",
    author: "Michael Rodriguez",
    role: "Playlist Curator",
    avatar: "/placeholder.svg"
  },
  {
    content: "Being able to collaborate with my team on submissions has streamlined our entire editorial process.",
    author: "Emma Chen",
    role: "Radio Program Director",
    avatar: "/placeholder.svg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient gold-glow">What Our Users Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by music promoters, labels, and curators worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-dark-card rounded-lg p-6 border border-gold/10 card-hover"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gold/20">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div>
                  <div className="text-gold font-medium">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
