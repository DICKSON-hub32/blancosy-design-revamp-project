// src/components/AppSection.tsx
import React from "react";
import { Target, MapPin, BarChart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import appImage from "@/assets/app-screenshot.png";

const AppSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Reward System",
      description:
        "Earn points for every item recycled and redeem them for valuable rewards and discounts."
    },
    {
      icon: MapPin,
      title: "Location Finder",
      description:
        "Find the nearest RVM stations and recycling centers with real-time availability updates."
    },
    {
      icon: BarChart,
      title: "Impact Tracking",
      description:
        "Monitor your environmental contribution with detailed analytics and sustainability metrics."
    },
    {
      icon: Users,
      title: "Community Hub",
      description:
        "Connect with like-minded individuals and participate in local environmental initiatives."
    }
  ];

  return (
    <section id="app" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Title – centered at the top, spans full width */}
          <div className="lg:col-span-2 text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Smart Recycling <span className="gradient-text">App</span>
            </h2>
          </div>

          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-muted-foreground">
                Our innovative mobile application connects users with the
                circular economy, making recycling rewarding and accessible.
                Track your environmental impact, earn rewards for sustainable
                actions, and join a community of eco-conscious individuals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 flex-grow">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Button asChild size="lg" className="eco-button">
                <a
                  href="https://play.google.com/store/apps/details?id=com.blancosyltd.blancosy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get it on Google Play <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex flex-col">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl flex-1 min-h-[500px] lg:min-h-0">
              <img
                src={appImage}
                alt="Smart Recycling App Screenshot"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
