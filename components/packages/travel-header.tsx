"use client";

import { useSiteContent } from "@/hooks/useSiteContent";

export default function TravelHeader() {
  const { packagesHeader } = useSiteContent();

  return (
    <div className="text-center mb-12 animate-slide-up">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
        {packagesHeader.titleLine1}
        <span className="text-blue-600"> {packagesHeader.titleHighlight}</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
        {packagesHeader.subtitle}
      </p>
    </div>
  );
}
