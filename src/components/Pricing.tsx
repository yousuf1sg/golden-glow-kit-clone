
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$15",
    period: "per month",
    description: "Perfect for individuals just getting started",
    features: [
      "Up to 100 submissions/month",
      "Basic analytics",
      "Custom submission form",
      "Email notifications",
      "1 user account"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For growing promoters and small labels",
    features: [
      "Up to 500 submissions/month",
      "Advanced analytics",
      "Custom branding",
      "API access",
      "Collaborative review",
      "5 team members",
      "Priority support"
    ],
    cta: "Try Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For established labels and promotion networks",
    features: [
      "Unlimited submissions",
      "Custom integration",
      "Dedicated account manager",
      "White-label solution",
      "Advanced reporting",
      "Unlimited team members",
      "24/7 premium support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient gold-glow">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for your workflow and scale as you grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-dark-card rounded-lg p-6 border ${
                plan.popular 
                  ? "border-gold shadow-[0_0_15px_rgba(245,203,92,0.2)]" 
                  : "border-gold/10"
              } flex flex-col h-full card-hover`}
            >
              {plan.popular && (
                <div className="bg-gold text-black text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-gold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              
              <div className="mb-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-gold mr-2 h-5 w-5 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className={`w-full ${
                  plan.popular ? "button-gold" : "button-outline"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
