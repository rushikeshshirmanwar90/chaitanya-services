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
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-6">
                                At Chaitanya Services, we are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy explains how we collect, use, and protect your information when you use our services.
                            </p>

                            {/* Section 1 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
                                    1. Information We Collect
                                </h2>
                                <div className="text-gray-700 space-y-4">
                                    <p>We collect information that you provide to us directly, including:</p>
                                    <ul className="space-y-2 ml-4">
                                        <li>• Personal identification information (name, email address, phone number)</li>
                                        <li>• Travel preferences and booking details</li>
                                        <li>• Payment information for processing transactions</li>
                                        <li>• Communication records when you contact us</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
                                    2. How We Use Your Information
                                </h2>
                                <div className="text-gray-700 space-y-4">
                                    <p><strong>To Communicate with You:</strong></p>
                                    <p>We may use your information to respond to your inquiries, provide customer service support, send you important information about the services, and marketing communications (with your consent) via different channels, including but not limited to SMS, Email, RCS, WhatsApp, and Voice.</p>

                                    <p>We also use your information to:</p>
                                    <ul className="space-y-2 ml-4">
                                        <li>• Process and manage your bookings</li>
                                        <li>• Provide customer support and assistance</li>
                                        <li>• Send booking confirmations and travel updates</li>
                                        <li>• Improve our services and user experience</li>
                                        <li>• Comply with legal requirements</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
                                    3. Information Sharing
                                </h2>
                                <div className="text-gray-700 space-y-4">
                                    <p>We may share your information with:</p>
                                    <ul className="space-y-2 ml-4">
                                        <li>• Third-party service providers (airlines, hotels, transport operators) necessary to complete your bookings</li>
                                        <li>• Payment processors to handle transactions securely</li>
                                        <li>• Legal authorities when required by law</li>
                                    </ul>
                                    <p>We do not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
                                </div>
                            </section>

                            {/* Section 4 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
                                    4. Data Security
                                </h2>
                                <div className="text-gray-700 space-y-4">
                                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
                                    5. Your Rights
                                </h2>
                                <div className="text-gray-700 space-y-4">
                                    <p>You have the right to:</p>
                                    <ul className="space-y-2 ml-4">
                                        <li>• Access and review your personal information</li>
                                        <li>• Request corrections to inaccurate information</li>
                                        <li>• Request deletion of your personal information</li>
                                        <li>• Opt-out of marketing communications</li>
                                        <li>• Withdraw consent for data processing</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 6 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
                                    6. Cookies and Tracking
                                </h2>
                                <div className="text-gray-700 space-y-4">
                                    <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences.</p>
                                </div>
                            </section>

                            {/* Section 7 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
                                    7. Contact Information
                                </h2>
                                <div className="text-gray-700 space-y-4">
                                    <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p><strong>Chaitanya Services</strong></p>
                                        <p>Website: <a href="https://chaitanyaservices.com" className="text-blue-600 hover:underline">https://chaitanyaservices.com</a></p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 8 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
                                    8. Changes to Privacy Policy
                                </h2>
                                <div className="text-gray-700 space-y-4">
                                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website with an updated effective date.</p>
                                </div>
                            </section>

                            {/* Last Updated */}
                            <div className="mt-12 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500">
                                    Last updated: {new Date().toLocaleDateString('en-IN')}
                                </p>
                            </div>
                        </div>
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