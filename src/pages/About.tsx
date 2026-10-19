// src/pages/About.tsx
import React from "react";
import { Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganogramSection from "@/components/OrganogramSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/about1-web.jpg"
            alt="Community impact in Kenya"
            className="hero-img h-full w-full scale-[1.02] object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        </div>
        <div className="wrap flex min-h-[max(30rem,calc(78svh-var(--header-h)))] flex-col justify-end pb-14 pt-28 md:pb-20">
          <h1 className="display display-xl">
            <span className="hw">
              <span style={{ "--i": 0 } as React.CSSProperties}>About</span>
            </span>{" "}
            <span className="hw">
              <span className="hl" style={{ "--i": 1 } as React.CSSProperties}>
                Blancosy
              </span>
            </span>
          </h1>
          <p className="hero-fade lede mt-8 max-w-2xl border-t border-white/20 pt-8 text-white/85">
            We are building the financial layer for the circular economy.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="bg-white py-24 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Heading and impact tag */}
          <div className="lg:col-span-4">
            <div className="space-y-10 lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
              <h2 className="display display-lg rv">
                Our <span className="hl">Story</span>
              </h2>
              {/* Impact Card */}
              <div
                className="rv max-w-xs border-t-4 border-ember bg-ink p-6 text-white"
                style={{ "--d": "120ms" } as React.CSSProperties}
              >
                <div className="mb-3 flex items-center gap-3">
                  <Award className="h-5 w-5 text-leaf" />
                  <span className="label text-leaf">Impact</span>
                </div>
                <p className="text-white/80">
                  Transforming lives through sustainable waste management since
                  2022.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-10 lg:col-span-8 [&_strong]:font-bold [&_strong]:text-ink">
            <p className="rv text-2xl font-medium leading-snug text-ink md:text-[2rem] md:leading-[1.3]">
              Blancosy LTD is an eco-fintech company building the financial
              layer for the circular waste economy. Our technology digitizes
              waste at the point of collection, transforming recyclable
              materials into verified economic assets that can be tracked,
              rewarded, and financed. We deploy Reverse Vending Machines
              <strong>(RVMs)</strong> in high-end and high-footfall locations
              such as malls, estates, institutions, and commercial centers to
              collect plastics and other recyclables. Each deposit is
              automatically weighed, recorded, and verified, creating trusted
              data on material type, volume, and contributor.
            </p>
            <div className="grid gap-8 border-t border-ink/15 pt-10 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
              <p className="rv">
                This data is synced to the{" "}
                <strong>Blancosy mobile application</strong>, where users, waste
                collectors, aggregators, and community members are instantly
                rewarded through incentives and direct payments credited to
                their <strong>digital wallet</strong>. The wallet enables users
                to receive payments, track earnings, access rewards, and qualify
                for embedded finance products such as working capital and
                equipment support.
              </p>
              <p
                className="rv"
                style={{ "--d": "120ms" } as React.CSSProperties}
              >
                By linking physical waste flows with{" "}
                <strong>digital records</strong> and
                <strong> financial tools</strong>, Blancosy de-risks the
                informal waste sector, increases collection volumes, prevents
                waste from reaching landfills, and unlocks new income and
                financing opportunities for waste actors while providing
                partners with transparent, measurable impact data.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OrganogramSection />
      <Footer />
    </div>
  );
};

export default About;
