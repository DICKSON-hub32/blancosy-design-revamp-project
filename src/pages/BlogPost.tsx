import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPost } from "@/types/blog";

const API_URL = "https://backend.moviefinder-teckish.com/api/blogs";

const BlogPost1 = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const [blogRes, allRes] = await Promise.all([
        axios.get(`${API_URL}/${id}`),
        axios.get(`${API_URL}/all`)
      ]);

      setBlog(blogRes.data);
      // Track view
      await axios.post(`${API_URL}/view/${id}`);

      // Get 3 related blogs (excluding current)
      const related = allRes.data
        .filter((b: BlogPost) => b._id !== id)
        .slice(0, 3);
      setRelatedBlogs(related);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading article...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Blog not found</div>
      </div>
    );
  }

  // Split article into paragraphs
  const paragraphs = blog.article
    .split(/\.+\s/)
    .filter((p) => p.trim())
    .map((p) => p.trim() + ".");

  // Helper to truncate a summary to a given number of words
  const truncateSummary = (text: string, wordLimit = 20) => {
    if (!text) return "";
    const words = text.split(/\s+/).filter(Boolean);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{blog.title} | Movie Blog</title>
        <meta name="description" content={blog.summary} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.summary} />
        <meta property="og:image" content={blog.imageUrl} />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary mb-4"
            >
              ← Back to Blog
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <span>{blog.views} views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
            )}

            {/* Summary */}
            <div className="bg-muted/20 p-6 rounded-lg mb-8">
              <p className="text-lg text-muted-foreground">{blog.summary}</p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 mb-8 p-4 bg-background rounded-lg">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{blog.author}</p>
                <p className="text-sm text-muted-foreground">
                  Movie Enthusiast
                </p>
              </div>
            </div>

            {/* Article */}
            <article className="prose prose-lg max-w-none mb-12">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="bg-primary/10 p-6 rounded-lg mt-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  🎬 Watch Advice
                </h2>
                <p className="text-lg">{blog.advice}</p>
              </div>
            </article>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedBlogs.map((post) => (
                    <Link
                      key={post._id}
                      to={`/blog/${post._id}`}
                      className="eco-card p-4 hover:shadow-lg transition-all"
                    >
                      {post.imageUrl && (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-32 object-cover rounded mb-3"
                        />
                      )}
                      <h3 className="font-semibold text-primary">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {truncateSummary(post.summary, 10)}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost1;
