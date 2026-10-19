// src/components/ImpactSection.tsx
import React from "react";
import { Leaf, ArrowRight } from "lucide-react";

const ImpactSection: React.FC = () => {
  const achievements = [
    "Environmental Conservation – Diverting plastic, paper and metal waste from landfills through recycling",
    "Youth & Women Empowerment – Creating sustainable green jobs for youth and women",
    "Community Education & Awareness – Running environmental awareness programs in communities across Kenya",
    "Health Impact – Reducing air pollution through cleaner burning fuel alternatives",
    "Economic Growth – Supporting local economies through sustainable practices"
  ];

  return (
    <section id="impact" className="bg-white">
      <div className="wrap py-24 md:py-32">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="display display-lg rv lg:col-span-7">
            Our <span className="hl">Impact</span>
          </h2>
          <p
            className="lede rv text-muted-foreground lg:col-span-5"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            Transforming lives through sustainable waste management since our
            inception.
          </p>
        </div>

        {/* Detailed Impact */}
        <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Achievements */}
          <div className="lg:col-span-7">
            <h3 className="display display-md rv">
              Major <span className="hl">Achievements</span>
            </h3>
            <ul className="mt-10 border-t border-ink/15">
              {achievements.map((achievement, index) => {
                const [title, ...rest] = achievement.split(" – ");
                return (
                  <li
                    key={title}
                    className="rv flex items-start gap-5 border-b border-ink/15 py-6"
                    style={{ "--d": `${index * 70}ms` } as React.CSSProperties}
                  >
                    <Leaf className="mt-1 h-5 w-5 shrink-0 text-leaf-ink" />
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      <span className="font-bold text-ink">{title}</span> –{" "}
                      {rest.join(" – ")}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column - Mission Statement */}
          <div className="lg:col-span-5">
            <h3 className="display display-md rv">
              Our <span className="hl">Mission</span>
            </h3>
            <div className="rv mt-10 bg-ink p-8 text-white md:p-10" style={{ "--d": "120ms" } as React.CSSProperties}>
              <span className="display display-sm block text-leaf">
                Transforming Kenya
              </span>
              <p className="mt-6 leading-relaxed text-white/75">
                Blancosy Ltd reaches its customers through direct sales,
                partnerships with local vendors, and collaborations with
                environmental organizations, ensuring widespread access to our
                products.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                By offering affordable, sustainable options that diminish
                reliance on traditional charcoal and promote cleaner air, we
                tackle significant environmental and health challenges in the
                community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder's Vision, over a photo */}
      <div className="relative isolate overflow-hidden bg-ink text-white">
        <div className="rv-img absolute inset-0 -z-10">
          <img
            src="/gallery/web/7.jpg"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="wrap py-28 md:py-40">
          <h4 className="label rv text-leaf">Founder's Vision</h4>
          <p className="statement rv mt-8 max-w-4xl" style={{ "--d": "120ms" } as React.CSSProperties}>
            "Our motivation is to create meaningful change through responsible
            waste management, reducing pollution while empowering communities to
            embrace sustainable practices. Every ton of waste we recycle is a
            step towards a cleaner, healthier Kenya."
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-ember text-ink">
        <div className="wrap grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
          <h3 className="display display-xl rv lg:col-span-7">Join Our Mission</h3>
          <div className="rv lg:col-span-5" style={{ "--d": "120ms" } as React.CSSProperties}>
            <p className="lede">
              Together, we can build a sustainable future for Kenya. Whether
              you're a business, community organization, or individual, there
              are many ways to get involved.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-ink mt-8"
              style={{ "--btn-fill": "#fff" } as React.CSSProperties}
            >
              Get Involved Today <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
