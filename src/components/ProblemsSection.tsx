// src/components/ProblemsSection.tsx
import React from "react";
import {
  Users,
  Recycle,
  Leaf,
  Trash,
  Link,
  Venus,
  Banknote,
  Zap,
  Flame
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
    <section
      id="problems"
      className="grain relative overflow-hidden bg-ink py-24 text-white md:py-36"
    >
      {/* Soft light from the top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full bg-petrol/60 blur-[120px]"
      />
      <div className="wrap">
        <h2 className="display display-lg rv">
          Challenges We <span className="hl">Address</span>
        </h2>
        <p
          className="statement rv mt-10 max-w-5xl text-white/90 md:mt-14"
          style={{ "--d": "120ms" } as React.CSSProperties}
        >
          What if waste activities could be properly recorded, rewarded and
          financed?
        </p>

        <div className="mt-16 grid border-l border-t border-white/15 sm:grid-cols-2 md:mt-24 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="rv group relative border-b border-r border-white/15 p-8 transition-colors duration-500 hover:bg-white/[0.04] md:p-10"
              style={{ "--d": `${(index % 3) * 90}ms` } as React.CSSProperties}
            >
              <problem.icon className="h-7 w-7 text-leaf transition-transform duration-500 group-hover:-translate-y-1" />
              <h3 className="display display-sm mt-10 md:mt-14">{problem.title}</h3>
              <p className="mt-4 text-white/65">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
