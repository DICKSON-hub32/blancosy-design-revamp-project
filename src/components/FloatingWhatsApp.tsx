// src/components/FloatingWhatsApp.tsx
import React from "react";

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "+254758277793"; // your number (international format)
  const prefilledMessage =
    "Hello Blancosy team! I'd like to learn more about your services and how to get involved.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`
        fixed bottom-6 right-6 z-[9999]
        flex items-center justify-center
        w-16 h-16 rounded-full overflow-hidden
        shadow-2xl hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,213,102,0.5)]
        transition-all duration-300
      `}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-full h-full object-cover"
      />
      {/* Optional subtle pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none"></span>
    </a>
  );
};

export default FloatingWhatsApp;
