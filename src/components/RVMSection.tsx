import React from "react";
import { Brain, Zap, Leaf, DollarSign, ArrowRight } from "lucide-react";
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
    }
  ];

  return (
    <section id="rvm" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={rvmImage}
                alt="Reverse Vending Machine"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Reverse Vending <span className="gradient-text">Machine</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our state-of-the-art Reverse Vending Machines use advanced AI
                and bioengineering to process recyclable materials efficiently.
                The REEMS system integrated within each RVM transforms waste
                into valuable resources.
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
              <Link to="/contact">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RVMSection;
