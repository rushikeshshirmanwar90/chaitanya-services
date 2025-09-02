"use client"
import React from 'react'
import ContactSection from '@/components/ContactSection'
import { contactInfo } from "@/data/constants";


const page = () => {
    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Contact form submitted");
    };
    return (
        <div>
            {/* Contact */}
            <ContactSection
                contactInfo={contactInfo}
                onSubmit={handleContactSubmit}
            />
        </div>
    )
}

export default page
