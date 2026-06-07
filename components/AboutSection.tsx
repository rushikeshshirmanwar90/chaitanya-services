"use client";

import Image from "next/image";
import React from "react";
import { useSiteContent } from "@/hooks/useSiteContent";

interface AboutSectionProps {
    className?: string;
}

interface StatisticProps {
    value: string;
    label: string;
}

const Statistic: React.FC<StatisticProps> = ({ value, label }) => (
    <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
        <div className="text-gray-600">{label}</div>
    </div>
);

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
    const { about } = useSiteContent();

    return (
        <section id="about" className={`py-20 bg-gray-50 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-in-left">
                        <h2 className="text-4xl font-bold mb-6">{about.heading}</h2>
                        <p className="text-gray-600 mb-6 text-lg">{about.paragraph1}</p>
                        <p className="text-gray-600 mb-8 text-lg">{about.paragraph2}</p>
                        <div className="grid grid-cols-3 gap-6">
                            {about.statistics.map((stat, index) => (
                                <Statistic key={index} value={stat.value} label={stat.label} />
                            ))}
                        </div>
                    </div>
                    <div className="animate-slide-in-right">
                        {about.image && (
                            <Image
                                src={about.image}
                                alt="Travel planning and consultation"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;