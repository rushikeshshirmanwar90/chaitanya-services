"use client";

import Image from "next/image";
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface Review {
    name: string;
    location: string;
    package: string;
    rating: number;
    review: string;
    image?: string;
}

interface ReviewCardProps {
    review: Review;
}

interface ReviewsSectionProps {
    reviews: Review[];
    title?: string;
    subtitle?: string;
    className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
        <div className="flex items-center mb-4">
            <Image
                src={review.image || "/placeholder.svg"}
                alt={review.name}
                width={60}
                height={60}
                className="rounded-full mr-4 object-cover"
            />
            <div>
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-gray-600 text-sm">{review.location}</p>
                <p className="text-blue-600 text-xs font-medium">{review.package}</p>
            </div>
        </div>
        <div className="flex mb-3">
            {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
        </div>
        <p className="text-gray-600 italic flex-grow">{review.review}</p>
    </div>
);

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
    reviews,
    title = "What Our Travelers Say",
    subtitle = "Real experiences from real people",
    className = ""
}) => {
    return (
        <section id="reviews" className={`py-20 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-600 text-lg">{subtitle}</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet-custom',
                            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="reviews-swiper"
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <ReviewCard review={review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="flex justify-center items-center mt-8 space-x-4">
                        <button className="swiper-button-prev-custom bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="swiper-pagination-custom flex space-x-2"></div>
                        <button className="swiper-button-next-custom bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;