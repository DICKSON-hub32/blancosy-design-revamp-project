// src/pages/Gallery.tsx
import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Web-sized copies of the originals in /public/gallery (same photos, ~150 KB each)
const galleryImages = [
  {
    id: 1,
    title: "Community Recycling Drive",
    description:
      "Local community members participating in our weekly recycling collection",
    imageUrl: "/gallery/web/1.jpg"
  },
  {
    id: 2,
    title: "ECO-JIKO Stove Production",
    description: "Our team crafting efficient eco-friendly cooking stoves",
    imageUrl: "/gallery/web/2.jpg"
  },
  {
    id: 3,
    title: "River Cleanup Initiative",
    description:
      "Volunteers working together to clean and restore local waterways",
    imageUrl: "/gallery/web/3.jpg"
  },
  {
    id: 4,
    title: "Ecomakaa Briquettes",
    description: "Sustainable fuel briquettes made from recycled paper waste",
    imageUrl: "/gallery/web/4.jpg"
  },
  {
    id: 5,
    title: "Youth Training Program",
    description:
      "Teaching young people sustainable waste management practices",
    imageUrl: "/gallery/web/5.jpg"
  },
  {
    id: 6,
    title: "Waste Processing Facility",
    description:
      "Our modern facility where waste is transformed into valuable products",
    imageUrl: "/gallery/web/6.jpg"
  },
  {
    id: 7,
    title: "Community Workshop",
    description:
      "Educational sessions on environmental conservation and recycling",
    imageUrl: "/gallery/web/7.jpg"
  },
  {
    id: 8,
    title: "Green Technology Innovation",
    description:
      "Latest eco-friendly technologies being implemented in our processes",
    imageUrl: "/gallery/web/8.jpg"
  }
];

// Editorial rhythm: 7+5, 4+4+4, 5+7, then one full-width frame
const layout = [
  "lg:col-span-7 lg:h-[34rem]",
  "lg:col-span-5 lg:h-[34rem]",
  "lg:col-span-4 lg:h-[24rem]",
  "lg:col-span-4 lg:h-[24rem]",
  "lg:col-span-4 lg:h-[24rem]",
  "lg:col-span-5 lg:h-[34rem]",
  "lg:col-span-7 lg:h-[34rem]",
  "lg:col-span-12 lg:h-[38rem]"
];

const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (delta: number) =>
      setActive((i) =>
        i === null ? i : (i + delta + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="grain relative overflow-hidden bg-ink text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-48 -z-10 h-[36rem] w-[36rem] rounded-full bg-petrol/70 blur-[120px]"
          />
          <div className="wrap grid gap-10 pb-16 pt-24 md:pb-24 md:pt-32 lg:grid-cols-12 lg:items-end">
            <h1 className="display display-xl lg:col-span-7">
              <span className="hw">
                <span style={{ "--i": 0 } as React.CSSProperties}>Our</span>
              </span>{" "}
              <span className="hw">
                <span className="hl" style={{ "--i": 1 } as React.CSSProperties}>
                  Gallery
                </span>
              </span>
            </h1>
            <p className="hero-fade lede text-white/80 lg:col-span-5">
              A visual journey through our community initiatives, eco-products,
              cleanups, education programs, operations, and innovative
              sustainable solutions.
            </p>
          </div>
        </section>

        {/* Gallery Grid – always showing all images */}
        <section className="py-12 md:py-20">
          <div className="wrap">
            <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActive(index)}
                  aria-label={image.title}
                  className={`rv group relative block aspect-[4/3] overflow-hidden bg-ink lg:aspect-auto ${layout[index % layout.length]}`}
                  style={{ "--d": `${(index % 3) * 80}ms` } as React.CSSProperties}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-[transform,opacity] duration-700 group-hover:scale-[1.04] group-hover:opacity-90"
                  />
                  <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </button>
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
        <section className="bg-ember text-ink">
          <div className="wrap grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
            <h2 className="display display-lg rv lg:col-span-7">
              Be Part of Our Sustainable Journey
            </h2>
            <p
              className="lede rv lg:col-span-5"
              style={{ "--d": "120ms" } as React.CSSProperties}
            >
              Join us in creating a cleaner, greener future. Your support and
              involvement make a real difference in communities and the
              environment across Kenya.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Full-screen viewer */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={galleryImages[active].title}
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-ink/95 p-4 md:p-12"
          onClick={close}
        >
          <img
            key={active}
            src={galleryImages[active].imageUrl}
            alt={galleryImages[active].title}
            className="animate-fade-up max-h-full max-w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={close}
            aria-label="Close"
            autoFocus
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white text-ink transition-colors hover:bg-ember md:right-8 md:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-ink md:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-ink md:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
