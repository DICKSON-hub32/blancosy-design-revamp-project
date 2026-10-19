import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import PrivacyPolicyOverlay from "./PrivacyPolicyOverlay";

// lucide-react has no TikTok icon
const TiktokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const socials = [
  { href: "https://www.facebook.com/share/19g8Cx8bU2/", label: "Facebook", Icon: Facebook },
  { href: "https://x.com/Blancos436126", label: "X", Icon: Twitter },
  { href: "https://www.instagram.com/blancosy_ltd?igsh=b3dtc3BkdWo4c242", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com/company/blancosy-ltd", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.youtube.com/@blancosy_ltd", label: "YouTube", Icon: Youtube },
  { href: "https://www.tiktok.com/@blancosy.ltd", label: "TikTok", Icon: TiktokIcon }
];

const scrollToHomeSection = (id: string) => {
  if (window.location.pathname === "/") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = `/#${id}`;
  }
};

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const linkClass =
    "block w-full text-left text-white/70 transition-colors hover:text-white";

  return (
    <>
      <footer className="grain relative overflow-hidden bg-deep text-white">
        <div className="wrap pt-20 md:pt-28">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="space-y-8 lg:col-span-5">
              <Link to="/" className="inline-block rounded-[2px] bg-white px-3 py-2">
                <img src="/logo.jpg" alt="Blancosy Logo" className="h-12 w-auto" />
              </Link>
              <p className="lede max-w-md text-white/75">
                Turning waste into wealth, empowering communities across Kenya
                through sustainable waste management and eco-friendly products.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-ember hover:bg-ember hover:text-ink"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-white/15 pt-8">
                <h4 className="display display-md">Stay Updated</h4>
                <p className="mt-4 text-white/70">
                  Get the latest news about our sustainability initiatives.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Your email"
                    aria-label="Your email"
                    className="min-w-0 flex-1 border-0 border-b-[1.5px] border-white/30 bg-transparent px-0 py-3.5 text-lg text-white placeholder:text-white/40 focus:border-ember focus:outline-none"
                  />
                  <button className="btn btn-ember">
                    Subscribe <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-12 border-t border-white/15 pt-12 sm:grid-cols-2 lg:grid-cols-12">
            {/* Quick Links */}
            <div className="space-y-6 lg:col-span-3">
              <h3 className="label text-leaf">Quick Links</h3>
              <nav className="space-y-3 text-lg">
                <Link to="/" className={linkClass}>
                  Home
                </Link>
                <Link to="/about" className={linkClass}>
                  About Us
                </Link>

                {/* Services → scrolls to section (works on any page) */}
                <button onClick={() => scrollToHomeSection("services")} className={linkClass}>
                  Services
                </button>

                <Link to="/gallery" className={linkClass}>
                  Gallery
                </Link>

                {/* Contact → scrolls to section (works on any page) */}
                <button onClick={() => scrollToHomeSection("contact")} className={linkClass}>
                  Contact
                </button>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6 lg:col-span-4">
              <h3 className="label text-leaf">Our Services</h3>
              <nav className="space-y-3 text-lg text-white/70">
                <div>Waste Recycling</div>
                <div>Smart Recycling App</div>
                <div>Reverse Vending Machine</div>
                <div>Eco-Makaa Production</div>
                <div>Eco-Jiko Stoves</div>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:col-span-5">
              <h3 className="label text-leaf">Get in Touch</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-leaf" />
                  <span className="text-white/80">info@blancosy.co.ke</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-leaf" />
                  <span className="text-white/80">+254758277793</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-leaf" />
                  <span className="text-white/80">Ruaraka, Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div
          aria-hidden="true"
          className="display pointer-events-none mt-16 select-none whitespace-nowrap text-center text-[28vw] leading-[0.78] text-white/[0.06]"
        >
          Blancosy
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="wrap flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/60 md:flex-row">
            <div>© 2026 Blancosy Ltd. All rights reserved.</div>
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Overlay */}
      <PrivacyPolicyOverlay
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </>
  );
};

export default Footer;
