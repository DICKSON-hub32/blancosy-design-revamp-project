import React from 'react';
import { Recycle, FileText, Waves, Package, ArrowRight } from 'lucide-react';
import ecoProductsImage from '@/assets/eco-products.jpg';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Recycle,
      title: "Waste Recycling",
      description: "Comprehensive waste collection and recycling services for communities and businesses.",
      color: "eco-green"
    },
    {
      icon: FileText,
      title: "Paper Waste Processing",
      description: "Specialized paper waste collection and transformation into valuable resources.",
      color: "eco-blue"
    },
    {
      icon: Waves,
      title: "River Cleanup",
      description: "Environmental restoration programs focusing on waterway conservation and cleanup.",
      color: "eco-yellow"
    },
    {
      icon: Package,
      title: "Eco Products",
      description: "Manufacturing of Ecomakaa charcoal alternative and ECO-JIKO energy-efficient stoves.",
      color: "eco-brown"
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
            Comprehensive sustainable solutions transforming waste into valuable resources while empowering communities across Kenya.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="eco-card group">
                <div className={`p-3 bg-${service.color}/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 text-${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Products Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Our <span className="gradient-text">Eco Products</span>
            </h3>
            
            <div className="space-y-6">
              {/* Ecomakaa */}
              <div className="eco-card bg-eco-green/5 border-eco-green/20">
                <h4 className="text-xl font-semibold mb-2 text-eco-green">Ecomakaa</h4>
                <p className="text-muted-foreground">
                  A revolutionary charcoal alternative made from recycled waste paper. Burns cleaner, 
                  lasts longer, and produces significantly less smoke than traditional charcoal.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• 80% less smoke than traditional charcoal</li>
                  <li>• Made from 100% recycled paper waste</li>
                  <li>• Longer burning time</li>
                  <li>• Affordable and sustainable</li>
                </ul>
              </div>

              {/* ECO-JIKO */}
              <div className="eco-card bg-eco-blue/5 border-eco-blue/20">
                <h4 className="text-xl font-semibold mb-2 text-eco-blue">ECO-JIKO</h4>
                <p className="text-muted-foreground">
                  An energy-efficient cooking stove specifically designed to maximize the 
                  performance of Ecomakaa while reducing fuel consumption.
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
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={ecoProductsImage}
                alt="Eco-friendly products by Blancosy"
                className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
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
              <div className="text-sm text-muted-foreground">More Efficient</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;