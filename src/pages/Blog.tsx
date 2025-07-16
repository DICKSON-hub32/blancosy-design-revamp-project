import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sustainability', 'Innovation', 'Community', 'Products'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Waste Management in Kenya",
      excerpt: "Exploring innovative approaches to transform how we handle waste in Kenyan communities...",
      author: "Jane Wanjiku",
      date: "2024-01-15",
      category: "Sustainability",
      readTime: "5 min read",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Ecomakaa: A Sustainable Alternative to Charcoal",
      excerpt: "How our recycled paper charcoal is revolutionizing cooking fuel across Kenya...",
      author: "David Mwangi",
      date: "2024-01-10",
      category: "Products",
      readTime: "3 min read",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Building Partnerships for Environmental Change",
      excerpt: "The importance of community collaboration in creating lasting environmental impact...",
      author: "Samuel Kiprotich",
      date: "2024-01-05",
      category: "Community",
      readTime: "4 min read",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Innovation in Recycling Technology",
      excerpt: "Latest advancements in waste processing and product development techniques...",
      author: "Grace Nyong'o",
      date: "2023-12-28",
      category: "Innovation",
      readTime: "6 min read",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Community Impact Stories: Real Change",
      excerpt: "Success stories from communities that have adopted our sustainable solutions...",
      author: "Jane Wanjiku",
      date: "2023-12-20",
      category: "Community",
      readTime: "4 min read",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "ECO-JIKO: Efficient Cooking for Modern Kenya",
      excerpt: "How our energy-efficient stoves are transforming cooking practices nationwide...",
      author: "David Mwangi",
      date: "2023-12-15",
      category: "Products",
      readTime: "3 min read",
      image: "/placeholder.svg"
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-eco-green-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, stories, and updates from the world of sustainable waste management
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="eco-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <Tag className="h-12 w-12 text-primary" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <Button variant="ghost" className="group w-full justify-between p-0 h-auto">
                    <span className="text-primary font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;