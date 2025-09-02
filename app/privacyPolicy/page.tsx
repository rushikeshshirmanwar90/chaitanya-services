import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - Chaitanya Services</title>
                <meta name="description" content="Privacy Policy for Chaitanya Services travel booking platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-green-600 text-white px-6 py-8">
                        <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
                        <p className="text-center mt-2 text-green-100">Chaitanya Services</p>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-8">
                        To Communicate with You: We may use your information to respond to your inquiries, provide customer service support, send you important information about the services, and marketing communications (with your consent) via different channels, including but not limited to SMS, Email, RCS, WhatsApp, and Voice.
                    </div>

                    {/* Footer Navigation */}
                    <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
                        <Link href="/" className="text-green-600 hover:underline">
                            ← Back to Home
                        </Link>
                        <Link href="/terms&condition" className="text-green-600 hover:underline">
                            Terms & Conditions →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;