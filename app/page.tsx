"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServiceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/FooterSection";
import ReviewsSection from "@/components/ReviewSection";
import TravelPackages from "@/components/packages/travel-packages";

const HomePage: React.FC = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <div className="px-0.5">

        {/* About Us & Establishment */}
        <AboutSection />

        <TravelPackages />

        {/* Services */}
        <ServicesSection />

        {/* Reviews */}
        <ReviewsSection />

        {/* Contact */}
        <ContactSection onSubmit={handleContactSubmit} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;