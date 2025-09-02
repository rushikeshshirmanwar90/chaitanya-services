import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TermsAndConditions: React.FC = () => {
    return (
        <>
            <Head>
                <title>Terms & Conditions - Chaitanya Services</title>
                <meta name="description" content="Terms and Conditions for Chaitanya Services travel booking platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-600 text-white px-6 py-8">
                        <h1 className="text-3xl font-bold text-center">Terms & Conditions</h1>
                        <p className="text-center mt-2 text-blue-100">Chaitanya Services</p>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-8">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-6">
                                Welcome to Chaitanya Services. By accessing our website{' '}
                                <a href="https://chaitanyaservices.com" className="text-blue-600 hover:underline">
                                    https://chaitanyaservices.com
                                </a>{' '}
                                or booking any of our travel services, you agree to abide by the following Terms & Conditions.
                                Please read them carefully before making any bookings.
                            </p>

                            {/* Section 1 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                                    1. Bookings & Payments
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• All bookings are subject to availability and confirmation by the respective service providers (airlines, hotels, transport operators, etc.).</li>
                                    <li>• Full or partial payment must be made at the time of booking, as per our payment policy.</li>
                                    <li>• Final confirmation of services will be provided only after receipt of full payment.</li>
                                    <li>• We reserve the right to cancel bookings if payments are not received within the specified time.</li>
                                </ul>
                            </section>

                            {/* Section 2 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                                    2. Cancellations & Refunds
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Cancellation and refund policies are governed by the rules of airlines, hotels, and other service providers.</li>
                                    <li>• Our service charges and handling fees are non-refundable.</li>
                                    <li>• Refunds, if applicable, will be processed only after receiving the refund from the concerned service provider.</li>
                                    <li>• In case of &quot;no show&quot; or failure to use booked services, no refund will be issued.</li>
                                </ul>
                            </section>

                            {/* Section 3 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                                    3. Travel Documents & Customer Responsibility
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Customers are solely responsible for obtaining and carrying valid passports, visas, travel insurance, health certificates, and any other required travel documents.</li>
                                    <li>• Chaitanya Services will provide necessary guidance but is not responsible for denial of boarding, entry, or travel due to incomplete or invalid documents.</li>
                                    <li>• Travel insurance is strongly recommended to cover unforeseen circumstances.</li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                                    4. Liability Disclaimer
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Chaitanya Services acts only as a booking agent between customers and third-party service providers (airlines, hotels, transport companies, etc.).</li>
                                    <li>• We are not liable for delays, cancellations, accidents, natural calamities, strikes, political disturbances, health risks, or any other events beyond our control.</li>
                                    <li>• Any issues or claims related to services (e.g., hotel conditions, airline delays) must be taken up directly with the respective service provider.</li>
                                </ul>
                            </section>

                            {/* Section 5 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                                    5. Modifications & Changes
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Prices, schedules, policies, and services are subject to change without prior notice, as per service providers&apos; rules.</li>
                                    <li>• If changes are required after booking, additional charges may apply.</li>
                                    <li>• We will make every effort to inform customers of significant changes in advance.</li>
                                </ul>
                            </section>

                            {/* Section 6 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                                    6. Website Usage & Privacy
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• All content on <a href="https://chaitanyaservices.com" className="text-blue-600 hover:underline">https://chaitanyaservices.com</a> is owned by Chaitanya Services and may not be copied, modified, or used without permission.</li>
                                    <li>• By using our website, you agree to our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>, which governs how we collect and use personal information.</li>
                                </ul>
                            </section>

                            {/* Section 7 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                                    7. Governing Law & Jurisdiction
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• These Terms & Conditions are governed by the laws of India.</li>
                                    <li>• Any disputes shall fall under the exclusive jurisdiction of courts in Nanded, Maharashtra.</li>
                                </ul>
                            </section>

                            {/* Section 8 */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                                    8. Acceptance of Terms
                                </h2>
                                <p className="text-gray-700">
                                    By making a booking with Chaitanya Services, you acknowledge that you have read, understood,
                                    and agreed to these Terms & Conditions.
                                </p>
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
                        <Link href="/" className="text-blue-600 hover:underline">
                            ← Back to Home
                        </Link>
                        <Link href="/privacyPolicy" className="text-blue-600 hover:underline">
                            Privacy Policy →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions;