// src/components/ImpactSection.tsx (Updated metrics from Slide 8)
import React from "react";
import {
  TreePine,
  Users,
  Recycle,
  MapPin,
  TrendingUp,
  Heart
} from "lucide-react";

const ImpactSection: React.FC = () => {
  const impacts = [
    {
      icon: Recycle,
      value: "5,000+",
      label: "Tons Recycled Annually",
      description: "Environmental conservation through waste transformation"
    },
    {
      icon: Users,
      value: "24",
      label: "Jobs Created",
      description: "Youth and women empowerment initiatives"
    },
    {
      icon: TreePine,
      value: "50,000 kg",
      label: "Eco-makaa Produced",
      description: "Sustainable fuel alternatives"
    },
    {
      icon: Heart,
      value: "1,200",
      label: "Eco-Jikos Manufactured",
      description: "Cleaner cooking solutions"
    },
    {
      icon: TrendingUp,
      value: "20,000+",
      label: "People Educated on Climate",
      description: "Widespread environmental awareness programs"
    },
    {
      icon: MapPin,
      value: "30,000+",
      label: "Tons CO₂ Prevented",
      description: "Reducing greenhouse gas emissions"
    }
  ];

  const achievements = [
    "Environmental Conservation – Successfully recycled over 10,000 tons of waste annually",
    "Youth & Women Empowerment – Created 100+ sustainable employment opportunities",
    "Community Education & Awareness – Reaching over 50 communities across Kenya",
    "Health Impact – Reducing air pollution through cleaner burning fuel alternatives",
    "Economic Growth – Supporting local economies through sustainable practices"
  ];

  return (
    <section id="impact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transforming lives through sustainable waste management since our
            inception.
          </p>
        </div>
        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            return (
              <div key={index} className="eco-card text-center group">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {impact.value}
                </div>
                <h3 className="text-lg font-semibold mb-2">{impact.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* Detailed Impact */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Achievements */}
          <div className="space-y-6">
            <div className="justify-center items-center flex">
              <h3 className="text-3xl font-bold">
                Major <span className="gradient-text">Achievements</span>
              </h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 eco-card bg-white/50"
                >
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column - Mission Statement */}
          <div className="space-y-8">
            <div className="flex justify-center items-center">
              <h3 className="text-3xl font-bold">
                Our <span className="gradient-text">Mission</span>
              </h3>
            </div>
            <div className="eco-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl font-semibold">
                  Transforming Kenya
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Blancosy Ltd reaches its customers through direct sales,
                partnerships with local vendors, and collaborations with
                environmental organizations, ensuring widespread access to our
                products.
              </p>
              <p className="text-muted-foreground mb-4">
                By offering affordable, sustainable options that diminish
                reliance on traditional charcoal and promote cleaner air, we
                tackle significant environmental and health challenges in the
                community.
              </p>
            </div>
            <div className="eco-card bg-gradient-to-br from-accent/5 to-eco-blue/5 border-accent/20">
              <h4 className="text-xl font-semibold mb-8">Founder's Vision</h4>
              <p className="text-muted-foreground mb-8">
                "Our motivation is to create meaningful change through
                responsible waste management, reducing pollution while
                empowering communities to embrace sustainable practices. Every
                ton of waste we recycle is a step towards a cleaner, healthier
                Kenya."
              </p>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-16 eco-card bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Together, we can build a sustainable future for Kenya. Whether
            you're a business, community organization, or individual, there are
            many ways to get involved.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="eco-button"
          >
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
