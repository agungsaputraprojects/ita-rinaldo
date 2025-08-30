"use client";

import { useState } from "react";
import Image from "next/image";

interface CoverPageProps {
    guestName?: string;
    onOpenInvitation: () => void;
}

export default function CoverPage({
    guestName,
    onOpenInvitation,
}: CoverPageProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenInvitation = () => {
        setIsLoading(true);
        setTimeout(() => {
            onOpenInvitation();
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black">
            {/* Background Image */}
            <div className="relative w-full h-full">
                <Image
                    src="/assets/images/cover.jpg"
                    alt="Wedding Cover"
                    fill
                    className="object-cover object-[36%_center] md:object-[center_25%] lg:object-[center_30%]"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-5">
                    {/* Guest Greeting */}
                    {guestName && (
                        <div className="mb-8 animate-fadeInUp">
                            <p className="text-lg mb-2 opacity-90">
                                Kepada Bapak/Ibu/Saudara/i
                            </p>
                            <h3 className="text-2xl font-semibold text-[#f5e6d3] mb-4">
                                {decodeURIComponent(guestName)}
                            </h3>
                        </div>
                    )}

                    {/* Couple Names */}
                    <div
                        className="mb-8 animate-fadeInUp"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                            Ita & Rinaldo
                        </h1>
                    </div>

                    {/* Date */}
                    <div
                        className="mb-12 animate-fadeInUp"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <p className="text-xl opacity-90">07 September 2025</p>
                    </div>

                    {/* Open Invitation Button */}
                    <button
                        onClick={handleOpenInvitation}
                        disabled={isLoading}
                        className={`
              flex items-center gap-3 bg-white bg-opacity-20 backdrop-blur-sm 
              text-white border border-white border-opacity-30 py-4 px-8 
              rounded-full text-lg font-semibold transition-all duration-300
              hover:bg-white hover:bg-opacity-30 hover:scale-105
              disabled:opacity-50 disabled:cursor-not-allowed
              animate-fadeInUp
            `}
                        style={{ animationDelay: "0.9s" }}
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Membuka Undangan...</span>
                            </>
                        ) : (
                            <>
                                <span>📧</span>
                                <span>Buka Undangan</span>
                            </>
                        )}
                    </button>

                    {/* Music Note */}
                    <div
                        className="absolute bottom-8 right-8 text-white opacity-60 animate-pulse"
                        style={{ animationDelay: "1.2s" }}
                    >
                        <span className="text-2xl">🎵</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
