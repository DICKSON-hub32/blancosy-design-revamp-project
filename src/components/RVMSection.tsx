// src/components/RVMSection.tsx
import React from "react";
import { Brain, DollarSign } from "lucide-react";
import rvmImage from "@/assets/rvm.jpg";

const RVMSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Recognition",
      description:
        "Advanced computer vision identifies and sorts different types of recyclable materials automatically."
    },
    {
      icon: DollarSign,
      title: "Instant Rewards",
      description:
        "Receive immediate compensation for your recyclables through mobile money or reward points."
    }
  ];

  return (
    <section id="rvm" className="overflow-hidden bg-white py-24 md:py-36">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="display display-xl rv lg:col-span-7">
            Reverse Vending <span className="hl">Machine</span>
          </h2>
          <p
            className="lede rv text-ink lg:col-span-5"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            Sort waste and reward collectors with a redeemable point via our
            app which is intergrated in the RVM.
          </p>
        </div>

        <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Image, mounted on an offset colour block */}
          <figure className="relative mx-auto w-full max-w-[34rem] lg:col-span-6 lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 h-full w-full bg-leaf md:-bottom-8 md:-right-8"
            />
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-24 w-24 rounded-full border-[10px] border-ember md:-left-10 md:-top-10 md:h-32 md:w-32"
            />
            <div className="rv-img relative overflow-hidden bg-ink shadow-[0_40px_60px_-30px_rgba(12,36,39,0.55)]">
              <img
                src={rvmImage}
                alt="Reverse Vending Machine"
                loading="lazy"
                className="aspect-[511/423] w-full object-cover"
              />
            </div>
          </figure>

          {/* Content */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-t border-ink/15">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="rv flex gap-5 border-b border-ink/15 py-7"
                  style={{ "--d": `${(index + 1) * 100}ms` } as React.CSSProperties}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-petrol text-white">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="display display-sm">{feature.title}</h4>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RVMSection;
