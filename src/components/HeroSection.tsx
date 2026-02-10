// src/components/HeroSection.tsx
/** @jsxImportSource react */
import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom"; // ← add useLocation
import heroImage from "@/assets/hero-recycling.jpg";

const HeroSection: React.FC = () => {
  const location = useLocation();

  // Reuse the same scroll logic as in Header.tsx
  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      // Already on home → smooth scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // On another page → redirect to home + scroll to section
      window.location.href = `/#${sectionId}`;
    }
  };

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
                  Turning Waste into Wealth Through Tech and Financial Inclusion
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Partner with Us → now scrolls to contact */}
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl"
                onClick={() => scrollToSection("contact")}
              >
                Partner with Us <ArrowRight className="ml-2 h-5 w-5" />
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
                <div className="text-4xl font-bold text-white">5,000+</div>
                <div className="text-white/80">Tons Recycled Yearly</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">KSh 2M+</div>
                <div className="text-white/80">Monthly Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">216</div>
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
