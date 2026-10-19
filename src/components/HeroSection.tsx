// src/components/HeroSection.tsx
import * as React from "react";
import { ArrowRight, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import heroImage from "@/assets/hero-recycling.jpg";
import { materials } from "@/lib/materials";

const headline = "Turning Waste into Wealth Through Tech and Financial Inclusion";

const HeroSection: React.FC = () => {
  const location = useLocation();
  const [materialIndex, setMaterialIndex] = React.useState(0);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(
      () => setMaterialIndex((i) => (i + 1) % materials.length),
      2200
    );
    return () => clearInterval(interval);
  }, []);

  // Reuse the same scroll logic as in Header.tsx
  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const material = materials[materialIndex];

  return (
    <>
      <section
        id="home"
        className="relative isolate overflow-hidden bg-ink text-white"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={heroImage}
            alt="Waste to wealth in Nairobi"
            className="hero-img h-full w-full scale-[1.02] object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent" />
        </div>

        <div className="wrap flex min-h-[max(34rem,calc(100svh-var(--header-h)-2.25rem))] flex-col justify-end pb-14 pt-28 md:pb-20">
          <h1 className="display display-xl max-w-[15ch]">
            {headline.split(" ").flatMap((word, i) => [
              i > 0 ? " " : null,
              <span key={word} className="hw">
                <span
                  className={word === "Wealth" ? "hl" : undefined}
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {word}
                </span>
              </span>
            ])}
          </h1>

          <div className="hero-fade mt-10 flex flex-col gap-8 border-t border-white/20 pt-8 lg:flex-row lg:items-center lg:gap-14">
            <p className="lede flex flex-wrap items-center gap-x-2 gap-y-1 text-white/85">
              Use your waste{" "}
              <span
                key={material.name}
                aria-hidden="true"
                className="material-chip swap"
                style={{ backgroundColor: material.color }}
              >
                {material.name}
              </span>
              <span className="sr-only">
                — plastics, papers, cartons, metals and cans —
              </span>{" "}
              as a currency with us.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* Partner with Us → now scrolls to contact */}
              <button
                className="btn btn-light"
                onClick={() => scrollToSection("contact")}
              >
                Partner with Us <ArrowRight />
              </button>
              <Link to="/about" className="btn btn-ghost-light">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Material streams band */}
      <div aria-hidden="true" className="border-y border-white/10 bg-ink py-5 md:py-7">
        <div
          className="marquee"
          style={{ "--marquee-dur": "38s" } as React.CSSProperties}
        >
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {[...materials, ...materials].map((m, i) => (
                  <span key={`${copy}-${i}`} className="flex items-center">
                    <span
                      className="display px-6 text-[clamp(2.4rem,6vw,5.5rem)] md:px-10"
                      style={{ color: m.color }}
                    >
                      {m.name}
                    </span>
                    <Leaf className="h-6 w-6 text-white/30 md:h-8 md:w-8" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
