// src/components/PortfolioSection.tsx (Updated with achievements from Slides 10-11)
import React from "react";
import { Recycle, Handshake, Users, Box, Banknote, Globe } from "lucide-react";

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      icon: Banknote,
      title: "$5,000 from TEF",
      description: "Grant used for purchase of Briquettes machine.",
      type: "Funding",
      since: "Recent",
      impact: "Operations"
    },
    {
      icon: Banknote,
      title: "$10,000 from KCIC (in progress)",
      description: "Grant for purchase of Truck.",
      type: "Funding",
      since: "In Progress",
      impact: "Logistics"
    },
    {
      icon: Banknote,
      title: "$5,000 from CAPYEI (in progress)",
      description: "Grant for buying of baling machine.",
      type: "Funding",
      since: "In Progress",
      impact: "Operations"
    },
    {
      icon: Recycle,
      title: "10,000+ Tons Recycled",
      description: "Plastic, paper, and metal waste diverted from landfills.",
      type: "Accomplishment",
      since: "Yearly",
      impact: "Environmental"
    },
    {
      icon: Users,
      title: "100+ Jobs Created",
      description: "Empowering youth and women through sustainable employment.",
      type: "Impact",
      year: "Ongoing",
      impact: "Social"
    },
    {
      icon: Globe,
      title: "200+ Active Clients",
      description:
        "Serving communities, businesses, and organizations across Kenya.",
      type: "Traction",
      since: "Current"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover the milestones and partnerships that define our journey
            toward a sustainable Kenya.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="eco-card p-6 bg-white/50 border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="text-sm text-muted-foreground">
                <p>
                  <strong>Type:</strong> {item.type}
                </p>
                {item.since && (
                  <p>
                    <strong>Since:</strong> {item.since}
                  </p>
                )}
                {item.year && (
                  <p>
                    <strong>Year:</strong> {item.year}
                  </p>
                )}
                {item.impact && (
                  <p>
                    <strong>Impact:</strong> {item.impact}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
