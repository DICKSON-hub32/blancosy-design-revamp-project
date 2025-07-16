import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold gradient-text">Blancosy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <a 
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </a>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <a 
                href="/gallery"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Gallery
              </a>
              <a 
                href="/blog"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Blog
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="eco-button"
              >
                Get Involved
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <a 
                  href="/about"
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
                <a 
                  href="/gallery"
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </a>
                <a 
                  href="/blog"
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="eco-button mt-3 self-start"
                >
                  Get Involved
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;