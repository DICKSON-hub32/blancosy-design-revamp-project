import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Community Recycling Drive",
      description: "Local community members participating in our weekly recycling collection",
      category: "Community Impact"
    },
    {
      id: 2,
      title: "ECO-JIKO Stove Production",
      description: "Our team crafting efficient eco-friendly cooking stoves",
      category: "Products"
    },
    {
      id: 3,
      title: "River Cleanup Initiative",
      description: "Volunteers working together to clean and restore local waterways",
      category: "Environmental Action"
    },
    {
      id: 4,
      title: "Ecomakaa Briquettes",
      description: "Sustainable fuel briquettes made from recycled paper waste",
      category: "Products"
    },
    {
      id: 5,
      title: "Youth Training Program",
      description: "Teaching young people sustainable waste management practices",
      category: "Education"
    },
    {
      id: 6,
      title: "Waste Processing Facility",
      description: "Our modern facility where waste is transformed into valuable products",
      category: "Operations"
    },
    {
      id: 7,
      title: "Community Workshop",
      description: "Educational sessions on environmental conservation and recycling",
      category: "Education"
    },
    {
      id: 8,
      title: "Green Technology Innovation",
      description: "Latest eco-friendly technologies being implemented in our processes",
      category: "Innovation"
    }
  ];

  const categories = ["All", "Community Impact", "Products", "Environmental Action", "Education", "Operations", "Innovation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-eco-green/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our journey towards a sustainable future through images of our projects, 
              community initiatives, and environmental impact.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <Card key={image.id} className="eco-card group overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-eco-green/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-primary/30">📷</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/90 text-xs font-medium rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {image.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No images found</h3>
                <p className="text-muted-foreground">
                  Try selecting a different category to see more content.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-eco-green/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Be Part of Our Story</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in creating a more sustainable future. Your involvement makes a difference 
              in our community and environment.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="eco-button text-lg px-8 py-3"
            >
              Get Involved Today
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;