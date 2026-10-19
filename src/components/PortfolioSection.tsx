// src/components/PortfolioSection.tsx
import React from "react";
import { Recycle, Users, Globe } from "lucide-react";

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      icon: Recycle,
      title: "Waste Recycled",
      description: "Plastic, paper, and metal waste diverted from landfills.",
      type: "Accomplishment",
      since: "Yearly",
      impact: "Environmental"
    },
    {
      icon: Users,
      title: "Green Jobs Created",
      description: "Empowering youth and women through sustainable employment.",
      type: "Impact",
      year: "Ongoing",
      impact: "Social"
    },
    {
      icon: Globe,
      title: "Growing Client Base",
      description:
        "Serving communities, businesses, and organizations across Kenya.",
      type: "Traction",
      since: "Current"
    }
  ];

  return (
    <section id="portfolio" className="bg-background py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="display display-lg rv lg:col-span-7">
            Our <span className="hl">Achievements</span>
          </h2>
          <p
            className="lede rv text-muted-foreground lg:col-span-5"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            Discover the milestones that define our journey toward a sustainable
            Kenya.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[3px] border border-ink/15 bg-ink/15 md:mt-20 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="rv group flex flex-col bg-white p-8 transition-colors duration-500 hover:bg-bone md:p-10"
              style={{ "--d": `${index * 100}ms` } as React.CSSProperties}
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-leaf/15 text-leaf-ink transition-transform duration-500 group-hover:-rotate-12">
                <item.icon className="h-7 w-7" />
              </span>
              <h3 className="display display-md mt-10">{item.title}</h3>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <dl className="mt-10 border-t border-ink/15 text-sm">
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3">
                  <dt className="label text-ink/60">Type:</dt>
                  <dd className="font-semibold">{item.type}</dd>
                </div>
                {item.since && (
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3">
                    <dt className="label text-ink/60">Since:</dt>
                    <dd className="font-semibold">{item.since}</dd>
                  </div>
                )}
                {item.year && (
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3">
                    <dt className="label text-ink/60">Year:</dt>
                    <dd className="font-semibold">{item.year}</dd>
                  </div>
                )}
                {item.impact && (
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3">
                    <dt className="label text-ink/60">Impact:</dt>
                    <dd className="font-semibold">{item.impact}</dd>
                  </div>
                )}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
