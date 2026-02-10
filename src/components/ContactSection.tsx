// src/components/ContactSection.tsx
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "8d56e098-0539-42cb-942a-e0eeba62130f", // Get this from web3forms.com
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          to: "vivablancos2024@gmail.com"
        })
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for your interest. We'll get back to you soon."
        });
        setFormData({ name: "", email: "", organization: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "info@blancosy.co.ke ",
      action: "mailto:info@blancosy.co.ke "
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+254758277793",
      action: "tel:+254758277793"
    }
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   info: "Ruaraka, Nairobi, Kenya",
    //   action: "#"
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get <span className="gradient-text">Involved</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to make a difference? Connect with us to learn how you can
            contribute to Kenya's sustainable future.
          </p>
        </div>

        {/* Google Maps */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.823393772252!2d36.841929674965755!3d-1.2795745987082554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTYnNDYuNSJTIDM2wrA1MCc0MC4yIkU!5e0!3m2!1sen!2ske!4v1770702674792!5m2!1sen!2ske"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Equal-height columns container */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div className="flex flex-col flex-1">
            <div className="space-y-8 flex-grow">
              <div className="flex justify-center items-center">
                <h3 className="text-2xl font-bold mb-4">
                  Send us a <span className="gradient-text">Message</span>
                </h3>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Whether you're interested in our products, want to partner
                  with us, or support our mission, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium mb-2"
                    >
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Your organization or company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                      placeholder="Tell us about your interest in our services or how you'd like to get involved..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="eco-button w-full"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-2 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info & CTA */}
          <div className="flex flex-col flex-1 space-y-28">
            <div className="flex justify-center items-center">
              <h3 className="text-2xl font-bold mb-6">
                Contact <span className="gradient-text">Information</span>
              </h3>
            </div>
            <div>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.action}
                      className="eco-card flex items-center gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{contact.title}</h4>
                        <p className="text-muted-foreground">{contact.info}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Partnership Opportunities */}

            {/* Mission Statement */}
            {/* <div className="eco-card bg-gradient-to-br from-accent/5 to-eco-blue/5 border-accent/20">
              <h4 className="text-xl font-semibold mb-3">Why Work With Us?</h4>
              <p className="text-muted-foreground">
                Join a movement that's not just about business, but about
                creating lasting positive change for Kenya's environment and
                communities. Together, we can build a sustainable future that
                benefits everyone.
              </p>
            </div> */}
          </div>
        </div>
        {/* Partnership Carousel - Below both columns */}
        {/* Partnership Carousel - Below both columns */}
        <div className="mt-16 overflow-hidden">
          <h4 className="text-2xl font-bold text-center mb-8">
            Partnership <span className="gradient-text">Opportunities</span>
          </h4>

          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-hidden">
              <div className="flex gap-8 animate-circular-scroll">
                {/* Repeat the set multiple times for seamless infinite scroll */}
                {[...Array(6)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    <div className="flex-shrink-0 eco-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 min-w-[280px] h-24 px-6 flex items-center justify-center">
                      <img
                        src="./afosi.png"
                        alt="AFOSI logo"
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                    <div className="flex-shrink-0 eco-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 min-w-[280px] h-24 px-6 flex items-center justify-center">
                      <img
                        src="./kcic.png"
                        alt="KCIC logo"
                        className="max-h-12 items-center w-auto object-contain"
                      />
                    </div>
                    <div className="flex-shrink-0 eco-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 min-w-[280px] px-6 py-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">
                          Community groups and NGOs
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 eco-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 min-w-[280px] px-6 py-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">
                          Educational institutions
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
