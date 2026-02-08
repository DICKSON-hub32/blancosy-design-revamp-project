// src/components/RVMSection.tsx
import React from "react";
import { Brain, Zap, Leaf, DollarSign, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import rvmImage from "@/assets/rvm.jpg";

const RVMSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Recognition",
      description:
        "Advanced computer vision identifies and sorts different types of recyclable materials automatically."
    },
    {
      icon: Zap,
      title: "Energy Generation",
      description:
        "Convert organic waste into clean, renewable energy through our proprietary bioengineering process."
    },
    {
      icon: Leaf,
      title: "Nutrient Recovery",
      description:
        "Transform food waste into high-quality soil nutrients and organic fertilizers."
    },
    {
      icon: DollarSign,
      title: "Instant Rewards",
      description:
        "Receive immediate compensation for your recyclables through mobile money or reward points."
    },
    {
      icon: Globe,
      title: "Blockchain Traceability",
      description:
        "ESG and carbon credit tracking for transparent waste management."
    }
  ];

  return (
    <section id="rvm" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Title – centered at the top, spans full width */}
          <div className="lg:col-span-2 text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Reverse Vending <span className="gradient-text">Machine</span>
            </h2>
          </div>

          {/* Left Column - Image */}
          <div className="relative flex flex-col">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl flex-1 min-h-[500px] lg:min-h-0">
              <img
                src={rvmImage}
                alt="Reverse Vending Machine"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-muted-foreground">
                Our state-of-the-art Reverse Vending Machines use advanced AI
                and bioengineering to process recyclable materials efficiently.
                Track waste by type and volume with blockchain-powered ESG and
                carbon credit traceability.
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
              {/* <Button asChild size="lg" className="eco-button">
                <Link to="/contact">
                  Contact Support <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RVMSection;
