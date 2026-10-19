// src/components/ServicesSection.tsx
import React from "react";
import {
  Truck,
  BarChart,
  Package,
  Boxes,
  Wallet,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Waste transport & management with AI-powered route optimization."
  },
  {
    icon: BarChart,
    title: "Data",
    description: "Corporate & regulatory dashboards for ESG reporting."
  },
  {
    icon: Package,
    title: "Eco-Products",
    description: "Eco-makaa briquettes & jikos manufacturing."
  },
  {
    icon: Boxes,
    title: "Materials",
    description: "Plastic pellets resale from recycled waste."
  },
  {
    icon: Wallet,
    title: "Loans",
    description:
      "Digitizing waste collection and building the financial layer for circular economy."
  }
];

type Product = {
  name: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  stats?: { value: string; label: string }[];
  // How the panel is coloured, and whether the photo fills its half or sits framed
  tone: "char" | "petrol" | "light";
  fit: "fill" | "frame";
};

const products: Product[] = [
  {
    name: "Eco-makaa",
    description:
      "A revolutionary charcoal alternative made from recycled waste paper. Burns cleaner, lasts longer, and produces significantly less smoke than traditional charcoal.",
    features: [
      "80% less smoke than traditional charcoal",
      "Made from 100% recycled paper waste",
      "Longer burning time",
      "Affordable and sustainable"
    ],
    image: "/eco-makaa.jpeg",
    alt: "Ecomakaa charcoal briquettes",
    stats: [
      { value: "100%", label: "Eco-Friendly" },
      { value: "50%", label: "More Efficient" }
    ],
    tone: "char",
    fit: "fill"
  },
  {
    name: "Eco-Jiko",
    description:
      "An energy-efficient cooking stove optimized for Ecomakaa, reducing fuel use while providing clean, fast cooking.",
    features: [
      "50% more fuel efficient",
      "Perfectly optimized for Ecomakaa",
      "Durable & easy to use",
      "Reduces cooking time"
    ],
    image: "/eco-jiko.jpeg",
    alt: "Eco-Jiko energy-efficient stove",
    stats: [
      { value: "100%", label: "Eco-Friendly" },
      { value: "50%", label: "More Efficient" }
    ],
    tone: "petrol",
    fit: "fill"
  },
  {
    name: "Plastic Pellets",
    description:
      "High-quality recycled plastic pellets produced from collected and processed waste plastics. Ideal for manufacturing new products and closing the loop in the circular economy.",
    features: [
      "Made from post-consumer recycled plastics",
      "Consistent size and quality for industrial use",
      "Reduces need for virgin plastic production",
      "Supports local manufacturing & job creation"
    ],
    image: "/pellets.jpeg",
    alt: "Recycled plastic pellets",
    tone: "light",
    fit: "frame"
  }
];

const toneClasses: Record<Product["tone"], { panel: string; muted: string; icon: string; rule: string }> = {
  char: { panel: "bg-char text-bone", muted: "text-bone/70", icon: "text-ember", rule: "divide-bone/15 border-bone/15" },
  petrol: { panel: "bg-petrol text-white", muted: "text-white/75", icon: "text-leaf", rule: "divide-white/20 border-white/20" },
  light: { panel: "bg-white text-ink ring-1 ring-ink/10", muted: "text-muted-foreground", icon: "text-petrol", rule: "divide-ink/10 border-ink/10" }
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-background pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="wrap">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="display display-lg rv lg:col-span-7">
            Our <span className="hl">Services</span>
          </h2>
          <p className="lede rv text-muted-foreground lg:col-span-5" style={{ "--d": "120ms" } as React.CSSProperties}>
            We digitize recyclable materials at the point of collection,
            creating verified records that unlock payments, incentives, and
            trusted data.
          </p>
        </div>

        {/* Services index */}
        <ul className="-mx-4 mt-14 border-t border-ink/20 md:-mx-6 md:mt-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <li
                key={service.title}
                className="index-row rv border-b border-ink/20 px-4 md:px-6"
                style={{ "--d": `${index * 70}ms` } as React.CSSProperties}
              >
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 py-7 md:grid-cols-12 md:gap-x-8 md:py-9">
                  <span className="index-icon grid h-12 w-12 place-items-center rounded-full bg-ink/5 text-petrol md:col-span-1 md:h-14 md:w-14">
                    <IconComponent className="h-6 w-6" />
                  </span>
                  <h3 className="display display-md md:col-span-5">
                    {service.title}
                  </h3>
                  <p className="index-desc col-span-2 text-lg leading-relaxed text-muted-foreground transition-colors md:col-span-6">
                    {service.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Featured Products Section */}
        <div className="mt-28 md:mt-40">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <h3 className="display display-lg rv lg:col-span-7">
              Our <span className="hl">Eco Products</span>
            </h3>
            <p className="lede rv text-muted-foreground lg:col-span-5" style={{ "--d": "120ms" } as React.CSSProperties}>
              Sustainable alternatives designed to reduce environmental impact
              while delivering performance and affordability.
            </p>
          </div>

          {/* Panels that stack while scrolling */}
          <div className="mt-14 space-y-6 md:mt-20 lg:space-y-10">
            {products.map((product, index) => {
              const tone = toneClasses[product.tone];
              return (
                <article
                  key={product.name}
                  className={`stack-card grid overflow-hidden rounded-[3px] shadow-[0_30px_60px_-40px_rgba(12,36,39,0.6)] lg:min-h-[min(80vh,46rem)] lg:grid-cols-12 ${tone.panel}`}
                  style={{ "--i": index } as React.CSSProperties}
                >
                  {/* Text */}
                  <div className="order-2 flex flex-col justify-between gap-10 p-8 md:p-12 lg:order-1 lg:col-span-5 lg:p-14">
                    <div className="space-y-6">
                      <h4 className="display display-lg">{product.name}</h4>
                      <p className={`text-lg leading-relaxed ${tone.muted}`}>
                        {product.description}
                      </p>
                    </div>
                    <ul className={`divide-y border-y ${tone.rule}`}>
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 py-3.5">
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 ${tone.icon}`} />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative order-1 min-h-[18rem] overflow-hidden lg:order-2 lg:col-span-7 ${
                      product.fit === "frame"
                        ? "grid place-items-center bg-[repeating-linear-gradient(135deg,#F4F5F1_0_14px,#ECEEE8_14px_28px)] p-10 md:p-16"
                        : ""
                    }`}
                  >
                    {product.fit === "fill" ? (
                      <div className="rv-img absolute inset-0">
                        <img
                          src={product.image}
                          alt={product.alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="rv-img w-full max-w-md bg-white p-3 shadow-[0_30px_50px_-30px_rgba(12,36,39,0.6)] md:rotate-[-2deg]">
                        <img
                          src={product.image}
                          alt={product.alt}
                          loading="lazy"
                          className="aspect-[307/164] w-full object-cover"
                        />
                      </div>
                    )}

                    {product.fit === "fill" && (
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    )}

                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                      <h4
                        className={`label rounded-[2px] px-2.5 py-1.5 ${
                          product.fit === "fill" ? "bg-white/90 text-ink" : "bg-ink text-white"
                        }`}
                      >
                        {product.name}
                      </h4>
                    </div>

                    {/* Floating Stats */}
                    {product.stats && (
                      <div className="absolute right-4 top-4 flex flex-col gap-2 md:right-6 md:top-6">
                        {product.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="min-w-[7.5rem] rounded-[2px] bg-white/90 px-3 py-2 text-ink backdrop-blur-sm"
                          >
                            <div className="display text-3xl leading-none">{stat.value}</div>
                            <div className="label mt-1 !text-[0.62rem] text-ink/70">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
