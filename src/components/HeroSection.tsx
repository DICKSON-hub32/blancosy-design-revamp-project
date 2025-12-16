// src/components/HeroSection.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-recycling.jpg";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Waste to wealth in Nairobi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="gradient-text block">
                  Turning Waste into Wealth
                </span>
                {/* Through Tech & Innovation*/}
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Link to="/contact">
                  Partner with Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 bg-transparent text-white hover:bg-white/10 border-white px-8 py-6 text-lg"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            {/* Updated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">10,000+</div>
                <div className="text-white/80">Tons Recycled Yearly</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">KSh 2M</div>
                <div className="text-white/80">Monthly Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">200+</div>
                <div className="text-white/80">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">30,000+</div>
                <div className="text-white/80">Tons CO₂ Prevented</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
