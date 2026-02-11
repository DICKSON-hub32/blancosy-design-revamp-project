import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProblemsSection from "@/components/ProblemsSection";
import RVMSection from "@/components/RVMSection";
import AppSection from "@/components/AppSection";
import PortfolioSection from "@/components/PortfolioSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProblemsSection />
        <RVMSection />
        <AppSection />
        <PortfolioSection />
        <ImpactSection />
        {/* <TestimonialSection /> */}
        {/* <PartnersSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
