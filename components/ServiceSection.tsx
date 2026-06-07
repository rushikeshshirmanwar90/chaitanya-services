"use client";
import React from "react";
import { useSiteContent } from "@/hooks/useSiteContent";
import { getIcon } from "@/lib/icons";
import type { ServiceItem } from "@/data/defaults";

interface ServiceCardProps {
    service: ServiceItem;
    index: number;
}

interface ServicesSectionProps {
    className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
    const Icon = getIcon(service.icon);
    return (
        <div
            className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow animate-fade-in-up flex-shrink-0 w-64 md:w-auto"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="text-blue-600 mb-4 flex justify-center">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
        </div>
    );
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ className = "" }) => {
    const { services: servicesContent } = useSiteContent();
    const { title, subtitle, items: services } = servicesContent;

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