"use client";

import Image from "next/image";
import React from "react";

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
    const statistics = [
        { value: "10K+", label: "Happy Travelers" },
        { value: "50+", label: "Destinations" },
        { value: "10+", label: "Years Experience" }
    ];

    return (
        <section id="about" className={`py-20 bg-gray-50 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-in-left">
                        <h2 className="text-4xl font-bold mb-6">About Chaitanya Services</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Established in August 2015, Chaitanya Services has been your trusted travel
                            companion for over a decade. We specialize in creating
                            personalized travel experiences that go beyond ordinary tourism.
                        </p>
                        <p className="text-gray-600 mb-8 text-lg">
                            Our team of experienced travel experts has explored every corner
                            of India to bring you the most authentic and memorable adventures.
                            From cultural immersions to spiritual journeys, we make your
                            travel dreams come true.
                        </p>
                        <div className="grid grid-cols-3 gap-6">
                            {statistics.map((stat, index) => (
                                <Statistic key={index} value={stat.value} label={stat.label} />
                            ))}
                        </div>
                    </div>
                    <div className="animate-slide-in-right">
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1700486009227-4b194079c197?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Travel planning and consultation"
                            width={600}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;