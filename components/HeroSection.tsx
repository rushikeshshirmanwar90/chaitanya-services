"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { useSiteContent } from "@/hooks/useSiteContent";

interface HeroSectionProps {
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
    const { hero } = useSiteContent();
    const { title, subtitle, backgroundImage, buttonText, buttonLink } = hero;

    return (
        <section
            id="home"
            className={`relative h-screen flex items-center justify-center overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Beautiful mountain landscape with lake"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative z-10 text-center text-white px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up-delay">
                    {subtitle}
                </p>
                <div className="space-x-4 animate-slide-up-delay-2">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        <Link href={buttonLink || "/Packages"}>{buttonText || "Explore Packages"}</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;