"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { navbar } = useSiteContent();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // The public navbar should not appear inside the admin dashboard.
    if (pathname?.startsWith("/admin")) {
        return null;
    }

    return (
        <nav className={`sticky top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b ${className}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href={`/`} className="text-2xl font-bold text-blue-600">
                        <Image className="w-[15rem]" src={logo} alt="logo" width={100} height={100} />
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navbar.links.map((link, i) => (
                            <Link key={i} href={link.href} className="hover:text-blue-600 transition-colors">
                                {link.label}
                            </Link>
                        ))}
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
                            {navbar.links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 rounded-md"
                                    onClick={toggleMenu}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;