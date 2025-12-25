import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPost } from "@/types/blog";

const API_URL = "https://backend.moviefinder-teckish.com/api/blogs";

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogsPerPage = 12;

  // Movie categories mapped to your design
  const categories = [
    "All",
    "Action",
    "Drama",
    "Comedy",
    "Trending",
    "Classic"
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/all`);
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter by category (simple keyword matching)
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            blog.summary.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const truncateSummary = (text: string, wordLimit: number = 15): string => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Movie Blog | Latest Film Reviews & News</title>
        <meta
          name="description"
          content="Explore trending movie reviews, film analysis, and cinema news. Stay updated with the latest in entertainment!"
        />
        <meta
          name="keywords"
          content="movie reviews, film blog, cinema news, trending movies"
        />
        <link rel="canonical" href="https://blancosy.com/blog" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-eco-green-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Movie <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Latest film reviews, trending movies, and cinema insights
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
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
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
          {currentBlogs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No posts found in "{selectedCategory}" category.
              </p>
            </div>
          ) : (
            <>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {currentBlogs.map((post) => (
                  <article
                    key={post._id}
                    className="eco-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative mb-6">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                          Movie
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Link to={`/blog/${post._id}`}>
                        <h3 className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {truncateSummary(post.summary)}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <span>{Math.round(post.views / 100)}k views</span>
                      </div>

                      <Button
                        variant="ghost"
                        className="group w-full justify-between p-0 h-auto"
                        asChild
                      >
                        <Link to={`/blog/${post._id}`}>
                          <span className="text-primary font-medium">More</span>
                          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      )
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
