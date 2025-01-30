import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import authSlice from '../../store/authSlice';
import { ServicesSection } from '../ui/ServiceSection';
import heroImg from '../../assets/heroImg.jpg';
import PricingCard from '../ui/PricingCard';

export default function HomePage() {
    const { isLoading, error } = useSelector((state) => state.auth);
    if (isLoading) {
        toast.success('Welcome to English Yaari 🎉 You are logged in.');
    }

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-white py-2">
                <div className="w-full">
                    {/* Main Hero Section */}
                    <div className="container mx-auto px-4 py-4 md:py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Left Content */}
                            <div className="space-y-12 pl-12">
                                <h1 className="text-4xl text-DarkBlue md:text-5xl lg:text-6xl font-semibold leading-tight">
                                    Learn with expert anytime anywhere
                                </h1>
                                <p className="text-customPurple font-semibold text-xl md:text-xl max-w-lg">
                                    Our mission is to help people to find the
                                    best course online and learn with expert
                                    anytime, anywhere.
                                </p>
                                <div className="flex gap-4">
                                    <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors">
                                        Get Started
                                    </button>
                                    <button className="px-6 py-3 border-2 border-purple-900 text-purple-900 font-semibold rounded-lg hover:bg-purple-100 transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative">
                                <div className="absolute -z-10 top-0 right-0 w-[90%] h-[90%] bg-yellow-400 rounded-3xl"></div>
                                <img
                                    src={heroImg}
                                    alt="Student learning online"
                                    className="relative z-10 w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-purple-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center gap-4 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold">
                                    100+ Online Courses
                                </h3>
                                <p className="text-purple-200">
                                    Learn from anywhere
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold">
                                    Experts Guideline
                                </h3>
                                <p className="text-purple-200">
                                    Learn from the best
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>
                            <div>
                                <h3 className="text-xl font-semibold">
                                    Best Courses
                                </h3>
                                <p className="text-purple-200">
                                    Curated content
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ServicesSection />
            </section>
            <section className="py-16 max-w-7xl mt-8 mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 text-DarkBlue">
                    Choose Your Plan For Success
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    <PricingCard />
                </div>
            </section>

            {/* Services and Pricing sections would go here, similar to the above sections */}
        </main>
    );
}
