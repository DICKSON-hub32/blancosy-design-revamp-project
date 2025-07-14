import React from 'react';
import { Target, Heart, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import communityImage from '@/assets/community-impact.jpg';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-eco-green-light">
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
                Transforming lives through sustainable waste management since our inception.
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About <span className="gradient-text">Blancosy</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Blancosy Ltd is a pioneering waste recycling and product manufacturing company dedicated to creating sustainable solutions for Kenya's waste management challenges.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                We produce eco-friendly products such as <strong>Ecomakaa</strong>, a charcoal alternative made from recycled waste paper, and <strong>ECO-JIKO</strong>, an energy-efficient stove designed to work effectively with Ecomakaa.
              </p>
              <p>
                These products serve households, hotels, and community organizations that seek cleaner, more sustainable energy sources and waste management solutions.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-eco-green/10 rounded-lg">
                  <Target className="h-5 w-5 text-eco-green" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">Creating meaningful change through responsible waste management</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-eco-blue/10 rounded-lg">
                  <Heart className="h-5 w-5 text-eco-blue" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community First</h3>
                  <p className="text-sm text-muted-foreground">Empowering communities to embrace sustainable practices</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-eco-yellow/10 rounded-lg">
                  <Zap className="h-5 w-5 text-eco-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Innovative recycling techniques and environmental solutions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-eco-brown/10 rounded-lg">
                  <Award className="h-5 w-5 text-eco-brown" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Impact</h3>
                  <p className="text-sm text-muted-foreground">Reducing pollution while conserving valuable resources</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button 
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="eco-button"
              >
                Learn About Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;