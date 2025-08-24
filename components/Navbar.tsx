"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png"

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
    return (
        <nav className={`sticky top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b ${className}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href={`/`} className="text-2xl font-bold text-blue-600"><Image className="w-[15rem]" src={logo} alt="logo" width={100} height={100} /></Link>
                    <div className="hidden md:flex space-x-8">
                        <Link href="#home" className="hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link href="#about" className="hover:text-blue-600 transition-colors">
                            About
                        </Link>
                        <Link href="/packages" className="hover:text-blue-600 transition-colors">
                            Packages
                        </Link>
                        <Link href="#services" className="hover:text-blue-600 transition-colors">
                            Services
                        </Link>
                        <Link href="#reviews" className="hover:text-blue-600 transition-colors">
                            Reviews
                        </Link>
                        <Link href="#contact" className="hover:text-blue-600 transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;