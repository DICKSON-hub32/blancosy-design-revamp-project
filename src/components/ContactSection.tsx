// src/components/ContactSection.tsx
import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactMessage } from "@/lib/emailjs";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    website: "" // spam trap, hidden from visitors
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
      // Bots fill the hidden field; pretend success without sending anything
      if (!formData.website) {
        await sendContactMessage(formData);
      }
      toast({
        title: "Message Sent!",
        description:
          "Thank you for your interest. We'll get back to you soon."
      });
      setFormData({ name: "", email: "", organization: "", message: "", website: "" });
    } catch (error) {
      console.error(error);
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
  ];

  const partners = (
    <>
      <div className="flex h-24 min-w-[15rem] items-center justify-center bg-white px-8 ring-1 ring-ink/10">
        <img src="/afosi.png" alt="AFOSI logo" className="max-h-12 w-auto object-contain" />
      </div>
      <div className="flex h-24 min-w-[15rem] items-center justify-center bg-white px-8 ring-1 ring-ink/10">
        <img src="/kcic.png" alt="KCIC logo" className="max-h-12 w-auto object-contain" />
      </div>
      <div className="flex h-24 min-w-[17rem] items-center gap-3 bg-ink px-8 text-white">
        <CheckCircle className="h-5 w-5 flex-shrink-0 text-leaf" />
        <span className="font-semibold">Community groups and NGOs</span>
      </div>
      <div className="flex h-24 min-w-[17rem] items-center gap-3 bg-petrol px-8 text-white">
        <CheckCircle className="h-5 w-5 flex-shrink-0 text-leaf" />
        <span className="font-semibold">Educational institutions</span>
      </div>
    </>
  );

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="wrap">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="display display-xl rv lg:col-span-7">
            Get <span className="hl">Involved</span>
          </h2>
          <p
            className="lede rv text-muted-foreground lg:col-span-5"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            Ready to make a difference? Connect with us to learn how you can
            contribute to Kenya's sustainable future.
          </p>
        </div>

        <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div className="rv lg:col-span-7">
            <div className="bg-white p-8 shadow-[0_30px_60px_-45px_rgba(12,36,39,0.6)] ring-1 ring-ink/10 md:p-12">
              <h3 className="display display-md">
                Send us a <span className="hl">Message</span>
              </h3>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Whether you're interested in our products, want to partner
                with us, or support our mission, we'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                {/* Spam trap: hidden from people, filled in by bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="field-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="field"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="field-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="field"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="field-label">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="field"
                    placeholder="Your organization or company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="field-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="field resize-none"
                    placeholder="Tell us about your interest in our services or how you'd like to get involved..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-ink w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="lg:col-span-5">
            <h3 className="display display-md rv">
              Contact <span className="hl">Information</span>
            </h3>
            <div className="mt-10 border-t border-ink/15">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.title}
                    href={contact.action}
                    className="rv group flex items-center gap-5 border-b border-ink/15 py-6"
                    style={{ "--d": `${index * 90}ms` } as React.CSSProperties}
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-ember group-hover:text-ink">
                      <IconComponent className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="label text-ink/60">{contact.title}</h4>
                      <p className="mt-1 truncate text-xl font-bold text-ink md:text-2xl">
                        {contact.info}
                      </p>
                    </div>
                    <ArrowUpRight className="h-6 w-6 shrink-0 text-ink/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink" />
                  </a>
                );
              })}
            </div>

            {/* Google Maps */}
            <div className="rv-img mt-10 overflow-hidden ring-1 ring-ink/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.823393772252!2d36.841929674965755!3d-1.2795745987082554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTYnNDYuNSJTIDM2wrA1MCc0MC4yIkU!5e0!3m2!1sen!2ske!4v1770702674792!5m2!1sen!2ske"
                width="100%"
                height="360"
                style={{ border: 0 }}
                className="block grayscale-[0.85] contrast-[1.05] transition-[filter] duration-500 hover:grayscale-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Partnership Carousel - Below both columns */}
        <div className="mt-24 md:mt-32">
          <h4 className="display display-sm rv">
            Partnership <span className="hl">Opportunities</span>
          </h4>
          <div
            className="marquee mt-10"
            style={{ "--marquee-dur": "45s" } as React.CSSProperties}
          >
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
                  {partners}
                  {partners}
                  {partners}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
