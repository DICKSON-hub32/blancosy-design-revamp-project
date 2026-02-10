// src/components/ServicesSection.tsx (Updated services from Slide 5)
import React from "react";
import {
  Recycle,
  FileText,
  Waves,
  Package,
  Globe,
  CheckCircle,
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
      title: "Loans",
      description:
        "Digitizing waste collection and building the financial layer for circular economy.",
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
            We digitize recyclable materials at the point of collection,
            creating verified records that unlock payments, incentives, and
            trusted data.
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
        {/* Featured Products Section */}
        <div className="mt-16">
          {/* Centered Title */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our <span className="gradient-text">Eco Products</span>
            </h3>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Sustainable alternatives designed to reduce environmental impact
              while delivering performance and affordability.
            </p>
          </div>

          {/* Three product blocks – each with text + image side-by-side */}
          <div className="space-y-6 lg:space-y-8">
            {/* Product 1: Ecomakaa */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Text */}
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-eco-green">Eco-makaa</h4>
                <p className="text-muted-foreground leading-relaxed">
                  A revolutionary charcoal alternative made from recycled waste
                  paper. Burns cleaner, lasts longer, and produces significantly
                  less smoke than traditional charcoal.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    80% less smoke than traditional charcoal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Made from 100% recycled paper waste
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Longer burning time
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Affordable and sustainable
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group h-[200px] lg:h-[220px]">
                <img
                  src="/eco-makaa.jpeg"
                  alt="Ecomakaa charcoal briquettes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="text-base font-bold drop-shadow-lg">
                    Eco-makaa
                  </h4>
                </div>
                {/* Floating Stats */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <div className="eco-card bg-white/90 p-2 text-center backdrop-blur-sm shadow-md">
                    <div className="text-lg font-bold text-primary">100%</div>
                    <div className="text-[10px] text-muted-foreground">
                      Eco-Friendly
                    </div>
                  </div>
                  <div className="eco-card bg-white/90 p-2 text-center backdrop-blur-sm shadow-md">
                    <div className="text-lg font-bold text-primary">50%</div>
                    <div className="text-[10px] text-muted-foreground">
                      More Efficient
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2: Eco-Jiko */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Text */}
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-eco-blue">Eco-Jiko</h4>
                <p className="text-muted-foreground leading-relaxed">
                  An energy-efficient cooking stove optimized for Ecomakaa,
                  reducing fuel use while providing clean, fast cooking.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    50% more fuel efficient
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Perfectly optimized for Ecomakaa
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Durable & easy to use
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Reduces cooking time
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group h-[200px] lg:h-[220px]">
                <img
                  src="/eco-jiko.jpeg"
                  alt="Eco-Jiko energy-efficient stove"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="text-base font-bold drop-shadow-lg">
                    Eco-Jiko
                  </h4>
                </div>
                {/* Floating Stats */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <div className="eco-card bg-white/90 p-2 text-center backdrop-blur-sm shadow-md">
                    <div className="text-lg font-bold text-primary">100%</div>
                    <div className="text-[10px] text-muted-foreground">
                      Eco-Friendly
                    </div>
                  </div>
                  <div className="eco-card bg-white/90 p-2 text-center backdrop-blur-sm shadow-md">
                    <div className="text-lg font-bold text-primary">50%</div>
                    <div className="text-[10px] text-muted-foreground">
                      More Efficient
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3: Plastic Pellets */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Text */}
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-eco-yellow">
                  Plastic Pellets
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  High-quality recycled plastic pellets produced from collected
                  and processed waste plastics. Ideal for manufacturing new
                  products and closing the loop in the circular economy.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Made from post-consumer recycled plastics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Consistent size and quality for industrial use
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Reduces need for virgin plastic production
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Supports local manufacturing & job creation
                  </li>
                </ul>
              </div>

              {/* Image + Floating Stats */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group h-[200px] lg:h-[220px]">
                <img
                  src="/pellets.jpeg"
                  alt="Recycled plastic pellets"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="text-base font-bold drop-shadow-lg">
                    Plastic Pellets
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
