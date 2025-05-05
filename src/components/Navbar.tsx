
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gold-gradient">PromoterKit</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/tools" className="text-gray-300 hover:text-gold transition-colors">Tools</Link>
            <a href="#features" className="text-gray-300 hover:text-gold transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-gold transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">Testimonials</a>
            <a href="#faqs" className="text-gray-300 hover:text-gold transition-colors">FAQ</a>
            <Link to="/blog" className="text-gray-300 hover:text-gold transition-colors">Blog</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="link" className="text-gray-300 hover:text-gold">Login</Button>
            <Button className="button-gold">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-gold"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/tools" 
                className="text-gray-300 hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <a 
                href="#features" 
                className="text-gray-300 hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-300 hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-300 hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#faqs" 
                className="text-gray-300 hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Link 
                to="/blog" 
                className="text-gray-300 hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-4 flex flex-col space-y-4">
                <Button variant="link" className="justify-start text-gray-300 hover:text-gold">Login</Button>
                <Button className="button-gold w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
