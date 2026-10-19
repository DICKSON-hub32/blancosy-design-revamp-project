// src/components/AppSection.tsx
import React from "react";
import { Target, MapPin, BarChart, Users, ArrowRight } from "lucide-react";
import appImage from "@/assets/app-phone.png";

const AppSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Reward System",
      description:
        "Earn points for every item recycled and redeem them for valuable rewards and discounts."
    },
    {
      icon: MapPin,
      title: "Location Finder",
      description:
        "Find the nearest RVM stations and recycling centers with real-time availability updates."
    },
    {
      icon: BarChart,
      title: "Impact Tracking",
      description:
        "Monitor your environmental contribution with detailed analytics and sustainability metrics."
    },
    {
      icon: Users,
      title: "Community Hub",
      description:
        "Connect with like-minded individuals and participate in local environmental initiatives."
    }
  ];

  return (
    <section
      id="app"
      className="grain relative overflow-hidden bg-petrol py-24 text-white md:py-36"
    >
      {/* Light behind the phone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 -z-10 h-[44rem] w-[44rem] -translate-y-1/2 rounded-full bg-leaf/30 blur-[140px]"
      />
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Content */}
        <div className="lg:col-span-7">
          <h2 className="display display-lg rv">
            Smart Recycling <span className="hl">App</span>
          </h2>
          <p
            className="lede rv mt-8 max-w-2xl text-white/80"
            style={{ "--d": "100ms" } as React.CSSProperties}
          >
            Our innovative mobile application connects users with the circular
            economy, making recycling rewarding and accessible. Track your
            environmental impact, earn rewards for sustainable actions, and join
            a community of eco-conscious individuals.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] bg-white/15 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="rv bg-petrol p-6 md:p-7"
                style={{ "--d": `${index * 80}ms` } as React.CSSProperties}
              >
                <feature.icon className="h-6 w-6 text-leaf" />
                <h4 className="mt-5 text-lg font-bold">{feature.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://play.google.com/store/apps/details?id=com.blancosyltd.blancosy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ember"
            >
              Get it on Google Play <ArrowRight />
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="relative mx-auto w-full max-w-[22rem] lg:col-span-5">
          <div
            aria-hidden="true"
            className="absolute inset-x-[8%] bottom-[-4%] h-12 rounded-[50%] bg-black/40 blur-2xl"
          />
          <img
            src={appImage}
            alt="Smart Recycling App Screenshot"
            loading="lazy"
            className="drift relative w-full rotate-[4deg] drop-shadow-[0_40px_50px_rgba(0,0,0,0.45)]"
            style={{ "--rot": "4deg", "--drift": "6%" } as React.CSSProperties}
          />
        </div>
      </div>
    </section>
  );
};

export default AppSection;
