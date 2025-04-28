
import React from 'react';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gold-gradient">PromoKit</span>
            </a>
            <p className="text-gray-400 mb-4">
              The all-in-one platform for music tastemakers to collect, organize, 
              and share music submissions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PromoKit. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
