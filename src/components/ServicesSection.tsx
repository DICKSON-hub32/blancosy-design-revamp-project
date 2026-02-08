// src/components/ServicesSection.tsx (Updated services from Slide 5)
import React from "react";
import {
  Recycle,
  FileText,
  Waves,
  Package,
  Globe,
  Box,
  ArrowRight
} from "lucide-react";
import ecoProductsImage from "@/assets/eco-products.jpg";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Recycle,
      title: "Logistics",
      description:
        "Waste transport & management with AI-powered route optimization.",
      color: "eco-green"
    },
    {
      icon: FileText,
      title: "Data",
      description: "Corporate & regulatory dashboards for ESG reporting.",
      color: "eco-blue"
    },
    {
      icon: Package,
      title: "Eco-Products",
      description: "Eco-makaa briquettes & jikos manufacturing.",
      color: "eco-brown"
    },
    {
      icon: Box,
      title: "Materials",
      description: "Plastic pellets resale from recycled waste.",
      color: "eco-yellow"
    },
    {
      icon: Globe,
      title: "Credits",
      description:
        "Carbon credit monetization through blockchain traceability.",
      color: "eco-green"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive sustainable solutions transforming waste into valuable
            resources while empowering communities across Kenya.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="eco-card group">
                <div
                  className={`p-3 bg-${service.color}/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`h-8 w-8 text-${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                {/* <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div> */}
              </div>
            );
          })}
        </div>
        {/* Featured Products Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 text-center">
            <h3 className="text-3xl md:text-4xl font-bold inline-block">
              Our <span className="gradient-text">Eco Products</span>
            </h3>
          </div>
          <div className="space-y-8">
            <div className="space-y-8">
              {/* Ecomakaa */}
              <div className="eco-card bg-eco-green/5 border-eco-green/20">
                <h4 className="text-xl font-semibold mb-2 text-eco-green">
                  Ecomakaa
                </h4>
                <p className="text-muted-foreground">
                  A revolutionary charcoal alternative made from recycled waste
                  paper. Burns cleaner, lasts longer, and produces significantly
                  less smoke than traditional charcoal.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• 80% less smoke than traditional charcoal</li>
                  <li>• Made from 100% recycled paper waste</li>
                  <li>• Longer burning time</li>
                  <li>• Affordable and sustainable</li>
                </ul>
              </div>
              {/* Eco-Jiko */}
              <div className="eco-card bg-eco-green/5 border-eco-green/20">
                <h4 className="text-xl font-semibold mb-2 text-eco-green">
                  Eco-Jiko
                </h4>
                <p className="text-muted-foreground">
                  An energy-efficient cooking stove specifically designed to
                  maximize the performance of Ecomakaa while reducing fuel
                  consumption.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• 50% more fuel efficient</li>
                  <li>• Optimized for Ecomakaa</li>
                  <li>• Durable and easy to use</li>
                  <li>• Reduces cooking time</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="relative mb-5">
            <div className="relative mt-5 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={ecoProductsImage}
                alt="Eco-friendly products by Blancosy"
                className="w-full h-[530px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute top-8 right-8 eco-card bg-white p-4 text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Eco-Friendly</div>
            </div>
            <div className="absolute bottom-8 left-8 eco-card bg-white p-4 text-center">
              <div className="text-2xl font-bold text-primary">50%</div>
              <div className="text-sm text-muted-foreground">
                More Efficient
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
