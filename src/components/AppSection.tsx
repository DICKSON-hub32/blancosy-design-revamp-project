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
    <section
      id="app"
      className="py-20 bg-gradient-to-br from-background to-eco-green-light"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Smart Recycling <span className="gradient-text">App</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our innovative mobile application connects users with the
                circular economy, making recycling rewarding and accessible.
                Track your environmental impact, earn rewards for sustainable
                actions, and join a community of eco-conscious individuals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="eco-button">
              <a href="https://play.google.com/store">
                Get it on Google Play
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={appImage}
                alt="Smart Recycling App"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
