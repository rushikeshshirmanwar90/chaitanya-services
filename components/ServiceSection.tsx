"use client";
import { MapPin, Car, Plane, BookOpen } from 'lucide-react';
import React from "react";

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

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
        className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow animate-fade-in-up flex-shrink-0 w-64 md:w-auto"
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
            icon: <BookOpen className="w-8 h-8" />,
            title: "Passport application and renewal",
            description: "Join like-minded travelers on expertly guided group adventures"
        },
        {
            icon: <Plane className="w-8 h-8" />,
            title: "Flight booking",
            description: "We will take care of your all Flight Bookings"
        },
        {
            icon: <Car className="w-8 h-8" />,
            title: "All India car rental",
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

                {/* Desktop: 4 in a row, Tablet: 2 in a row */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>

                {/* Mobile: Horizontal scroll */}
                <div className="md:hidden overflow-x-auto">
                    <div className="flex gap-4 pb-4">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;