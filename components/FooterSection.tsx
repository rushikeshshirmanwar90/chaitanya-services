"use client";

import Link from "next/link";
import { ContactInfo } from '../types';
import React from "react";

interface FooterLink {
    href: string;
    label: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface FooterProps {
    contactInfo: ContactInfo;
    companyName?: string;
    description?: string;
    className?: string;
}

const Footer: React.FC<FooterProps> = ({
    contactInfo,
    companyName = "Chaitanya Services",
    description = "Creating unforgettable travel experiences across India since 2010.",
    className = ""
}) => {
    const quickLinks: FooterLink[] = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "/packages", label: "Packages" },
        { href: "#services", label: "Services" }
    ];

    const destinations: FooterLink[] = [
        { href: "#", label: "Golden Triangle" },
        { href: "#", label: "Kerala" },
        { href: "#", label: "Rajasthan" },
        { href: "#", label: "Kashmir" }
    ];

    const sections: FooterSection[] = [
        { title: "Quick Links", links: quickLinks },
        { title: "Popular Destinations", links: destinations }
    ];

    return (
        <footer className={`bg-gray-900 text-white py-12 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{companyName}</h3>
                        <p className="text-gray-400">{description}</p>
                    </div>

                    {/* Dynamic Sections */}
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-bold mb-4">{section.title}</h4>
                            <div className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <Link
                                        key={linkIndex}
                                        href={link.href}
                                        className="block text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>{contactInfo.phone}</p>
                            <p>{contactInfo.email}</p>
                            <p className="whitespace-pre-line">{contactInfo.address}</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 {companyName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;