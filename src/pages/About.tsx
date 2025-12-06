import React from "react";
import { Target, Heart, Zap, Award, Users, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import communityImage from "@/assets/community-impact.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Antony Makanga",
      role: "CEO & Co-Founder",
      description:
        "Visionary leader passionate about green innovation and community empowerment.",
      image: "./mil2.jpg"
    },
    {
      name: "Derrick Essanya",
      role: "Co-Founder",
      description:
        "Bio-Tech enthusiast driving sustainable solutions through smart engineering.",
      image: "./mil3.jpg"
    },
    {
      name: "Dickson Esamai",
      role: "Senior UI/UX Designer/Developer",
      description:
        "Creating engaging web designs and implementing them with code",
      image: "./mil5.jpg"
    },
    {
      name: "Javan",
      role: "Designer",
      description: "Motivated graphic Designer with passion for Design",
      image: "./mil6.jpg"
    },
    {
      name: "Koina Erick",
      role: "CTO",
      description:
        "Tech visionary focused on innovative solutions for a sustainable future.",
      image: "./mil4.jpg"
    },
    {
      name: "Catherine Nderitu",
      role: "COO",
      description:
        "Building partnerships and inspiring youth for a greener future.",
      image: "./mil1.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-eco-green-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Blancosy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to reducing solid waste pollution through scalable,
              biotechnology-driven recycling solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={communityImage}
                  alt="Community impact in Kenya"
                  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Floating Impact Card */}
              <div className="absolute -bottom-8 -right-8 eco-card bg-white p-6 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold text-primary">Impact</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Transforming lives through sustainable waste management since
                  2022.
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Blancosy Limited is a Nairobi-based startup (founded in 2022)
                  reshaping recycling through bioengineered technology. Our
                  signature REEMS system turns waste into renewable energy and
                  soil nutrients—creating environmental, social, and economic
                  benefits.
                </p>
              </div>

              <div className="text-xl space-y-4 text-muted-foreground">
                <p>
                  We produce eco-friendly products such as{" "}
                  <strong>Eco-Makaa</strong>, sustainable charcoal briquettes
                  made from recycled biomass, <strong>Eco-Jiko</strong>, a
                  clean, efficient cookstove, and <strong>RVM</strong>, our
                  state-of-the-art Reverse Vending Machines using advanced AI
                  and bioengineering to process recyclables efficiently.
                </p>
                <p>
                  Our approach promotes a circular economy—empowering
                  communities, generating jobs, and fostering sustainable
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-background to-eco-green-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate individuals working together to create a sustainable
              future for Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="eco-card text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
