// src/pages/About.tsx (Updated description and team from Slides 14-15)
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
      role: "Founder & CEO",
      description:
        "A dynamic innovator with Diploma in Entrepreneurship & Innovation Management (EIM).",
      image: "./mil2.jpg"
    },
    {
      name: "Jackson Adisa",
      role: "Head of Operations",
      description:
        "An M&E practitioner with a certificate in Monitoring and Evaluation.",
      image: "./mil1.jpeg"
    },
    {
      name: "Derrick Essanya",
      role: "Accountant",
      description:
        "A finance-oriented professional with Certificate in Financial Management and Reporting.",
      image: "./mil3.jpg" // Reassigned from old COO
    },
    {
      name: "Koina Erick",
      role: "CTO",
      description: "A professional with a Bachelors in Computer Science.",
      image: "./mil4.jpg"
    },
    {
      name: "Dickson Esamai",
      role: "Senior UI/UX Designer/Developer",
      description:
        "Creative mind with skills in Web development and system development.",
      image: "./mil5.jpg"
    },
    {
      name: "Sophline Wakula",
      role: "Designer",
      description:
        "Self-driven individual with a Certificate in Computer Packages and Presentations.",
      image: "./mil6.jpeg"
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
              We are building the financial layer for the circular economy.
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
                  src="./about1.jpeg"
                  alt="Community impact in Kenya"
                  className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
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
                  Blancosy LTD is an eco-fintech company building the financial
                  layer for the circular waste economy. Our technology digitizes
                  waste at the point of collection, transforming recyclable
                  materials into verified economic assets that can be tracked,
                  rewarded, and financed. We deploy Reverse Vending Machines
                  <strong>(RVMs)</strong> in high-end and high-footfall
                  locations such as malls, estates, institutions, and commercial
                  centers to collect plastics and other recyclables. Each
                  deposit is automatically weighed, recorded, and verified,
                  creating trusted data on material type, volume, and
                  contributor.
                </p>
              </div>
              <div className="text-xl space-y-4 text-muted-foreground">
                <p>
                  This data is synced to the{" "}
                  <strong>Blancosy mobile application</strong>, where
                  users—waste collectors, aggregators, and community members—are
                  instantly rewarded through incentives and direct payments
                  credited to their <strong>digital wallet</strong>. The wallet
                  enables users to receive payments, track earnings, access
                  rewards, and qualify for embedded finance products such as
                  working capital and equipment support.
                </p>
                <p>
                  By linking physical waste flows with{" "}
                  <strong>digital records</strong> and
                  <strong> financial tools</strong>, Blancosy de-risks the
                  informal waste sector, increases collection volumes, prevents
                  waste from reaching landfills, and unlocks new income and
                  financing opportunities for waste actors—while providing
                  partners with transparent, measurable impact data.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
