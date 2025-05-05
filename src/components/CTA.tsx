
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-dark-card via-dark-lighter to-dark-card rounded-lg p-8 md:p-16 border border-gold/20 shadow-[0_0_30px_rgba(245,203,92,0.1)] max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gold-gradient gold-glow">Ready to Transform Your Marketing Strategy?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of marketers who are enhancing their digital presence
              and growing their audience with PromoterKit's AI tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="button-gold text-lg px-8 py-6">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="button-outline text-lg px-8 py-6">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
