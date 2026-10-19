import React, { useEffect, useState } from "react";
import { Menu, X, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and close on Escape while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  const current = (path: string) =>
    location.pathname === path ? "page" : undefined;

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-ink text-white/75 md:block">
        <div className="wrap flex h-9 items-center justify-between label !text-[0.68rem]">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-leaf" />
            Ruaraka, Nairobi, Kenya
          </span>
          <span className="flex items-center gap-6">
            <a
              href="mailto:info@blancosy.co.ke"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-leaf" />
              info@blancosy.co.ke
            </a>
            <a
              href="tel:+254758277793"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-leaf" />
              +254758277793
            </a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_rgba(12,36,39,0.08),0_12px_30px_-18px_rgba(12,36,39,0.35)]" : "border-b border-ink/10"
        }`}
      >
        <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center" aria-label="Blancosy home">
            <img
              src="/logo.jpg"
              alt="Blancosy Logo"
              className="h-11 w-auto md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 text-ink md:flex">
            <Link to="/" className="nav-link" aria-current={current("/")}>
              Home
            </Link>
            <Link to="/about" className="nav-link" aria-current={current("/about")}>
              About
            </Link>
            <button onClick={() => scrollToSection("services")} className="nav-link">
              Services
            </button>
            <Link to="/gallery" className="nav-link" aria-current={current("/gallery")}>
              Gallery
            </Link>
            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button onClick={() => scrollToSection("contact")} className="btn btn-ink !py-3.5">
              Get Involved
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="-mr-2 p-2 text-ink md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[10000] flex flex-col bg-ink text-white md:hidden"
        >
          <div className="wrap flex h-[var(--header-h)] items-center justify-between">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="rounded-sm bg-white px-2 py-1">
              <img src="/logo.jpg" alt="Blancosy Logo" className="h-9 w-auto" />
            </Link>
            <button
              onClick={toggleMenu}
              className="-mr-2 p-2"
              aria-label="Close menu"
              autoFocus
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="wrap flex flex-1 flex-col justify-center gap-1">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", section: "services" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact", section: "contact" }
            ].map((item, i) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="display text-[clamp(3rem,15vw,5rem)] transition-colors hover:text-ember animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section!)}
                  className="display text-left text-[clamp(3rem,15vw,5rem)] transition-colors hover:text-ember animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          <div className="wrap space-y-6 pb-10">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-ember w-full"
            >
              Get Involved <ArrowRight />
            </button>
            <div className="label space-y-2 text-white/60">
              <a href="mailto:info@blancosy.co.ke" className="block">
                info@blancosy.co.ke
              </a>
              <a href="tel:+254758277793" className="block">
                +254758277793
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
