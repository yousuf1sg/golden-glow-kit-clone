
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="gold-gradient gold-glow text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            Streamline Your Music Promotion Workflow
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
            The all-in-one platform for music tastemakers to collect, organize, 
            and share new music submissions from artists and labels.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="button-gold text-lg px-8 py-6">
              Start For Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="button-outline text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-gold/20 to-gold/30 rounded-lg blur-md"></div>
            <div className="relative bg-dark-card rounded-lg border border-gold/30 overflow-hidden shadow-[0_0_15px_rgba(245,203,92,0.2)] max-w-4xl mx-auto">
              <div className="w-full h-full bg-dark-lighter shimmer-effect">
                <div className="w-full aspect-video">
                  <div className="flex flex-col h-full items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                      <span className="text-gold text-xl">▶</span>
                    </div>
                    <p className="text-gold text-lg font-medium">Dashboard Preview</p>
                    <p className="text-gray-400 text-sm mt-2">Platform interface visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
