"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapIcon, Facebook } from 'lucide-react';
import { ContactInfo } from '../types';
import React from "react";
import { sendToWhatsApp } from "../utils/whatsapp";

interface ContactFormProps {
    onSubmit?: (e: React.FormEvent) => void;
}

interface ContactInfoDisplayProps {
    contactInfo: ContactInfo;
}

interface ContactSectionProps {
    contactInfo: ContactInfo;
    title?: string;
    subtitle?: string;
    className?: string;
    onSubmit?: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => (
    <div className="animate-slide-in-right">
        <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
                <Input
                    name="firstName"
                    placeholder="First Name"
                />
                <Input
                    name="lastName"
                    placeholder="Last Name"
                />
            </div>
            <Input
                name="email"
                placeholder="Email Address"
                type="email"
            />
            <Input
                name="phone"
                placeholder="Phone Number"
                type="tel"
            />
            <Textarea
                name="message"
                placeholder="Tell us about your dream destination..."
                rows={5}
            />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
            </Button>
        </form>
    </div>
);

const ContactInfoDisplay: React.FC<ContactInfoDisplayProps> = ({ contactInfo }) => (
    <div className="animate-slide-in-left">
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <div className="space-y-4">
            <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center">
                <MapIcon className="w-5 h-5 text-blue-600 mr-3" />
                <span>{contactInfo.address}</span>
            </div>
        </div>

        <h5 className="text-lg font-bold mt-6 mb-3">Opening Hours</h5>
        <div className="space-y-4">
            <div className="flex items-center">
                Monday-saturday : 9AM to 8PM
            </div>
            <div className="flex items-center">
                Sunday: 12 noon to 6PM
            </div>
        </div>

        <div className="mt-8">
            <Button
                className="bg-[#1877F2] hover:bg-[#166FE5] text-white flex items-center gap-2"
                onClick={() => window.open('https://www.facebook.com/share/16zPfjSx4J/', '_blank')}
            >
                <Facebook className="w-5 h-5" />
                Follow us on Facebook
            </Button>
        </div>
    </div>
);

const ContactSection: React.FC<ContactSectionProps> = ({
    contactInfo,
    title = "Get In Touch",
    subtitle = "Ready to start your next adventure?",
    className = "",
    onSubmit
}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        // Get form values using FormData
        const firstName = formData.get("firstName") as string || "";
        const lastName = formData.get("lastName") as string || "";
        const email = formData.get("email") as string || "";
        const phone = formData.get("phone") as string || "";
        const message = formData.get("message") as string || "";

        const whatsappMessage = `Hello!\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        sendToWhatsApp(whatsappMessage);

        if (onSubmit) {
            onSubmit(e);
        }
    };

    return (
        <section id="contact" className={`py-20 bg-gray-50 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-600 text-lg">{subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <ContactInfoDisplay contactInfo={contactInfo} />
                    <ContactForm onSubmit={handleSubmit} />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;