import React from 'react';
import { ArrowRight, Recycle, Leaf, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-recycling.jpg';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Waste recycling community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Turning
                <span className="gradient-text block">Waste into Wealth</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Empowering Kenyan communities through sustainable waste management and eco-friendly products.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10,000+</div>
                <div className="text-white/80 text-sm">Tons Recycled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-white/80 text-sm">Jobs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80 text-sm">Communities</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 animate-slide-in">
            <div className="grid grid-cols-2 gap-4">
              {/* Waste Recycling Card */}
              <div className="eco-card bg-white/10 backdrop-blur-md border-white/20 text-white">
                <div className="p-2 bg-eco-green/20 rounded-lg w-fit mb-3">
                  <Recycle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Waste Recycling</h3>
                <p className="text-sm text-white/80">Converting waste materials into valuable resources</p>
              </div>

              {/* Eco Products Card */}
              <div className="eco-card bg-white/10 backdrop-blur-md border-white/20 text-white">
                <div className="p-2 bg-eco-yellow/20 rounded-lg w-fit mb-3">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Eco Products</h3>
                <p className="text-sm text-white/80">Sustainable Ecomakaa charcoal and ECO-JIKO stoves</p>
              </div>

              {/* Community Impact Card */}
              <div className="eco-card bg-white/10 backdrop-blur-md border-white/20 text-white col-span-2">
                <div className="p-2 bg-eco-blue/20 rounded-lg w-fit mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Community Empowerment</h3>
                <p className="text-sm text-white/80">Creating jobs and environmental awareness across Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;