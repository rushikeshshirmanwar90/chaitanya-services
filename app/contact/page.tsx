"use client"
import React from 'react'
import ContactSection from '@/components/ContactSection'


const page = () => {
    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Contact form submitted");
    };
    return (
        <div>
            {/* Contact */}
            <ContactSection onSubmit={handleContactSubmit} />
        </div>
    )
}

export default page
