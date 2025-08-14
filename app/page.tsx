"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PackagesPreview from "@/components/PackagePreview";
import ServicesSection from "@/components/ServiceSection";
import ReviewsSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/FooterSection";
// import { ImageGallery } from "@/components/image-gallery";
// import { DestinationShowcase } from "@/components/destination-showcase";
import { featuredPackages, customerReviews, contactInfo } from "@/data/constants";

const HomePage: React.FC = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}


      {/* Hero Section */}
      <HeroSection />

      {/* About Us & Establishment */}
      <AboutSection />

      {/* Packages Preview */}
      <PackagesPreview packages={featuredPackages} />

      {/* Image Gallery */}
      {/* <ImageGallery /> */}

      {/* Services */}
      <ServicesSection />

      {/* Featured Destinations */}
      {/* <DestinationShowcase /> */}

      {/* Reviews */}
      <ReviewsSection reviews={customerReviews} />

      {/* Contact */}
      <ContactSection
        contactInfo={contactInfo}
        onSubmit={handleContactSubmit}
      />

      {/* Footer */}
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default HomePage;