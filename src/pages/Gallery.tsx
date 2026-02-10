// src/pages/Gallery.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Replace these placeholder URLs with your actual Cloudinary links
  const galleryImages = [
    {
      id: 1,
      title: "Community Recycling Drive",
      description:
        "Local community members participating in our weekly recycling collection",
      imageUrl: "/gallery/1.JPG" // ← REPLACE
    },
    {
      id: 2,
      title: "ECO-JIKO Stove Production",
      description: "Our team crafting efficient eco-friendly cooking stoves",
      imageUrl: "/gallery/2.JPG" // ← REPLACE
    },
    {
      id: 3,
      title: "River Cleanup Initiative",
      description:
        "Volunteers working together to clean and restore local waterways",
      imageUrl: "/gallery/3.JPG" // ← REPLACE
    },
    {
      id: 4,
      title: "Ecomakaa Briquettes",
      description: "Sustainable fuel briquettes made from recycled paper waste",
      imageUrl: "/gallery/4.JPG" // ← REPLACE
    },
    {
      id: 5,
      title: "Youth Training Program",
      description:
        "Teaching young people sustainable waste management practices",
      imageUrl: "/gallery/5.JPG" // ← REPLACE
    },
    {
      id: 6,
      title: "Waste Processing Facility",
      description:
        "Our modern facility where waste is transformed into valuable products",
      imageUrl: "/gallery/6.JPG" // ← REPLACE
    },
    {
      id: 7,
      title: "Community Workshop",
      description:
        "Educational sessions on environmental conservation and recycling",
      imageUrl: "/gallery/7.JPG" // ← REPLACE
    },
    {
      id: 8,
      title: "Green Technology Innovation",
      description:
        "Latest eco-friendly technologies being implemented in our processes",
      imageUrl: "/gallery/8.JPG" // ← REPLACE
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-eco-green/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A visual journey through our community initiatives, eco-products,
              cleanups, education programs, operations, and innovative
              sustainable solutions.
            </p>
          </div>
        </section>

        {/* Gallery Grid – always showing all images */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galleryImages.map((image) => (
                <Card
                  key={image.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-xl bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Title overlay on hover */}
                    {/* <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-white text-xl font-bold drop-shadow-lg">
                        {image.title}
                      </h3>
                    </div> */}
                  </div>

                  {/* Caption / description */}
                  {/* <div className="p-5 md:p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {image.description}
                    </p>
                  </div> */}
                </Card>
              ))}
            </div>

            {/* Optional: message if gallery is empty (future-proof) */}
            {galleryImages.length === 0 && (
              <div className="text-center py-24">
                <div className="text-6xl mb-6 opacity-50">🖼️</div>
                <h3 className="text-2xl font-semibold mb-3">
                  Gallery is empty
                </h3>
                <p className="text-muted-foreground">
                  New photos will appear here soon.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of Our Sustainable Journey
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in creating a cleaner, greener future. Your support and
              involvement make a real difference in communities and the
              environment across Kenya.
            </p>
            {/* <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="eco-button text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get Involved Today
            </button> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
