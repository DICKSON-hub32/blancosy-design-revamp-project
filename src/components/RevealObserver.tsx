// src/components/RevealObserver.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Adds `.in` to `.rv` / `.rv-img` elements as they scroll into view.
// Styles only hide them while <html> has the `motion` class (see main.tsx).
const RevealObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!document.documentElement.classList.contains("motion")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    const frame = requestAnimationFrame(() => {
      document
        .querySelectorAll(".rv:not(.in), .rv-img:not(.in)")
        .forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default RevealObserver;
