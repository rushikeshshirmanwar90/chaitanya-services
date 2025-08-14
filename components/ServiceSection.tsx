"use client";

import { MapPin, Users, Award, Phone } from 'lucide-react';
import { Service } from '../types';
import React from "react";

interface ServiceCardProps {
    service: Service;
    index: number;
}

interface ServicesSectionProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
    <div
        className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow animate-fade-in-up"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
        <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
    </div>
);

const ServicesSection: React.FC<ServicesSectionProps> = ({
    title = "Our Services",
    subtitle = "Everything you need for the perfect trip",
    className = ""
}) => {
    const services: Service[] = [
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Trip Planning",
            description: "Customized itineraries tailored to your preferences and budget"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Group Tours",
            description: "Join like-minded travelers on expertly guided group adventures"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Luxury Travel",
            description: "Premium accommodations and exclusive experiences for discerning travelers"
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Round-the-clock assistance throughout your journey"
        }
    ];

    return (
        <section id="services" className={`py-20 bg-gray-50 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-600 text-lg">{subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;