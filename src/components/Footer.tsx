import React, { useState } from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import PrivacyPolicyOverlay from './PrivacyPolicyOverlay';

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-primary/10 to-eco-green/5 border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xl font-bold gradient-text">Blancosy</span>
              </div>
              <p className="text-muted-foreground">
                Turning waste into wealth, empowering communities across Kenya through 
                sustainable waste management and eco-friendly products.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                  <Facebook className="h-4 w-4 text-primary" />
                </a>
                <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                  <Twitter className="h-4 w-4 text-primary" />
                </a>
                <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                  <Instagram className="h-4 w-4 text-primary" />
                </a>
                <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('impact')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Impact
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <nav className="space-y-3">
                <div className="text-muted-foreground">Waste Recycling</div>
                <div className="text-muted-foreground">Paper Waste Processing</div>
                <div className="text-muted-foreground">River Cleanup</div>
                <div className="text-muted-foreground">Ecomakaa Production</div>
                <div className="text-muted-foreground">ECO-JIKO Stoves</div>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">info@blancosy.co.ke</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">+254 XXX XXX XXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Nairobi, Kenya</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="eco-card bg-white/50 border-primary/20">
                <h4 className="font-semibold mb-2">Stay Updated</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get the latest news about our sustainability initiatives.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary min-w-0"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 Blancosy Ltd. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <button 
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </button>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Overlay */}
      <PrivacyPolicyOverlay 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </>
  );
};

export default Footer;