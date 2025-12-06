import React from "react";
import { Recycle, Handshake, Users, Box, Banknote, Globe } from "lucide-react";

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      icon: Recycle,
      title: "5,000+ Tons Recycled",
      description:
        "Plastic, paper, and metal waste diverted from landfills since 2022.",
      type: "Accomplishment",
      since: "2022",
      impact: "Environmental"
    },
    {
      icon: Handshake,
      title: "Nairobi River Commission",
      description:
        "Strategic partnership for community recycling and awareness campaigns across Kenya.",
      type: "Partnership",
      since: "2023"
    },
    {
      icon: Users,
      title: "Community Clean-Up Drives",
      description:
        "Mobilized over 10,000 volunteers for city-wide recycling and clean-up events.",
      type: "Project",
      year: "2023",
      impact: "Community, Environment"
    },
    {
      icon: Box,
      title: "Smart Recycling Bins",
      description:
        "Installed 200+ IoT-enabled bins for efficient waste sorting in Nairobi.",
      type: "Project",
      year: "2024",
      impact: "Innovation, Efficiency"
    },
    {
      icon: Banknote,
      title: "KEPRO",
      description:
        "Financial and logistical support for scaling up recycling infrastructure and green jobs.",
      type: "Partnership",
      since: "2023"
    },
    {
      icon: Globe,
      title: "NEMA",
      description:
        "Collaboration on sustainable waste management and environmental education initiatives.",
      type: "Partnership",
      since: "2024"
    }
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-background to-eco-green-light"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Impact</span>
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
