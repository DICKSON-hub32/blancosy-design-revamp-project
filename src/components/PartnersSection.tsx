import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const PartnersSection = () => {
  const partners = [
    {
      name: "GreenTech Solutions",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop"
    },
    {
      name: "EcoInnovate Corp",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop"
    },
    {
      name: "Sustainable Systems",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop"
    },
    {
      name: "Urban Waste Solutions",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop"
    },
    {
      name: "Metro Environmental",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&fit=crop"
    },
    {
      name: "CleanTech Partners",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to partner with forward-thinking companies committed to sustainable waste management
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            (Autoplay as any)({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="group">
                  <div className="eco-card p-6 flex items-center justify-center h-24 hover:shadow-lg transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Join over 50+ companies making a positive environmental impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;