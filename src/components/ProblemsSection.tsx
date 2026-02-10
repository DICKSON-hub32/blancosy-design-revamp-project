// src/components/ProblemsSection.tsx (Updated with challenges from Slides 3 and 9)
import React from "react";
import {
  Users,
  Recycle,
  Leaf,
  Trash,
  Utensils,
  Link,
  Venus,
  Banknote,
  Zap,
  Flame,
  Award
} from "lucide-react";

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      icon: Trash,
      title: "200M+ Tons of Waste Yearly in Africa",
      description:
        "Massive waste generation in urban areas like Nairobi (60% share)."
    },
    {
      icon: Recycle,
      title: "70% Waste Uncollected",
      description: "Leading to pollution, disease, and health hazards."
    },
    {
      icon: Leaf,
      title: "Climate Impact",
      description: "Waste contributes to greenhouse gas emissions."
    },
    {
      icon: Users,
      title: "Financial Exclusion",
      description:
        "Informal collectors lack access to banking and financial services."
    },
    {
      icon: Link,
      title: "Data Gap",
      description: "No transparency in waste management logistics."
    },
    {
      icon: Zap,
      title: "Inconsistent Market Demand",
      description: "Seasonality of customers affecting operations."
    },
    {
      icon: Banknote,
      title: "Limited Access to Finance",
      description: "High technology costs and funding challenges."
    },
    {
      icon: Venus,
      title: "Infrastructure Gaps",
      description: "Scaling issues due to poor infrastructure."
    },
    {
      icon: Flame,
      title: "Competing Priorities",
      description: "Misaligned strategies in the sector."
    }
  ];

  return (
    <section id="problems" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Challenges We <span className="gradient-text">Address</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            What if waste activities could be properly recorded, rewarded and
            financed?
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="eco-card p-6 bg-white/50 border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <problem.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
              </div>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
