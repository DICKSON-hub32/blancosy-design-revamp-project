import React from "react";
import {
  Users,
  Recycle,
  Leaf,
  Trash,
  Utensils,
  Link,
  Venus,
  Zap,
  Flame,
  Award
} from "lucide-react";

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      icon: Users,
      title: "Youth Unemployment",
      description: "Creating green jobs to empower young people in Kenya."
    },
    {
      icon: Recycle,
      title: "Low Recycling Rates",
      description:
        "Increasing recycling through accessible and rewarding systems."
    },
    {
      icon: Leaf,
      title: "Environmental Degradation",
      description: "Protecting ecosystems by reducing waste pollution."
    },
    {
      icon: Trash,
      title: "Solid Waste Pollution",
      description:
        "Transforming waste into valuable resources with innovative technology."
    },
    {
      icon: Utensils,
      title: "Food Waste Mismanagement",
      description: "Converting food waste into nutrients and energy."
    },
    {
      icon: Link,
      title: "Lack of Circular Economy Systems",
      description: "Promoting sustainable practices through a circular economy."
    },
    {
      icon: Venus,
      title: "Gender Disparities in Green Jobs Access",
      description: "Ensuring inclusive opportunities in the green economy."
    },
    {
      icon: Zap,
      title: "Limited Access to Clean, Affordable Energy",
      description: "Providing eco-friendly energy solutions like Eco-Makaa."
    },
    {
      icon: Flame,
      title: "Overreliance on Non-Renewable Resources",
      description: "Offering sustainable alternatives to traditional fuels."
    },
    {
      icon: Award,
      title: "Lack of Incentive for Waste Sorting & Recycling",
      description:
        "Rewarding sustainable actions through our Smart Recycling App."
    }
  ];

  return (
    <section id="problems" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Problems We Seek to <span className="gradient-text">Solve</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Addressing critical environmental and social challenges through
            innovative recycling solutions.
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
