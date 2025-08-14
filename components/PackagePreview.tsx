"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/package-card";
import { Package } from "../types";
import React from "react";

interface PackagesPreviewProps {
    packages: Package[];
    title?: string;
    subtitle?: string;
    className?: string;
}

const PackagesPreview: React.FC<PackagesPreviewProps> = ({
    packages,
    title = "Popular India Packages",
    subtitle = "Discover the incredible diversity of India",
    className = ""
}) => {
    return (
        <section className={`py-20 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-600 text-lg">{subtitle}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <PackageCard 
                                package={{
                                    ...pkg,
                                    groupSize: typeof pkg.groupSize === 'string' ? parseInt(pkg.groupSize, 10) : pkg.groupSize
                                }} 
                                onMoreDetails={() => {}}
                            />
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        <Link href="/packages">View All India Packages</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PackagesPreview;