"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`sticky top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b ${className}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href={`/`} className="text-2xl font-bold text-blue-600">
                        <Image className="w-[15rem]" src={logo} alt="logo" width={100} height={100} />
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="#home" className="hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/About" className="hover:text-blue-600 transition-colors">
                            About
                        </Link>
                        <Link href="/Packages" className="hover:text-blue-600 transition-colors">
                            Packages
                        </Link>
                        <Link href="#services" className="hover:text-blue-600 transition-colors">
                            Services
                        </Link>
                        <Link href="#reviews" className="hover:text-blue-600 transition-colors">
                            Reviews
                        </Link>
                        <Link href="/contact" className="hover:text-blue-600 transition-colors">
                            Contact
                        </Link>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 animate-fade-in-down">
                        <div className="flex flex-col space-y-4">
                            <Link 
                                href="#home" 
                                className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 rounded-md"
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/About" 
                                className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 rounded-md"
                                onClick={toggleMenu}
                            >
                                About
                            </Link>
                            <Link 
                                href="/Packages" 
                                className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 rounded-md"
                                onClick={toggleMenu}
                            >
                                Packages
                            </Link>
                            <Link 
                                href="#services" 
                                className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 rounded-md"
                                onClick={toggleMenu}
                            >
                                Services
                            </Link>
                            <Link 
                                href="#reviews" 
                                className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 rounded-md"
                                onClick={toggleMenu}
                            >
                                Reviews
                            </Link>
                            <Link 
                                href="/contact" 
                                className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 rounded-md"
                                onClick={toggleMenu}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;