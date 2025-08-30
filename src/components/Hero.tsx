"use client";

import { useRef } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(heroRef, { threshold: 0.02 });

    const handleInstagramClick = (username: string) => {
        window.open(
            `https://instagram.com/${username}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section
            ref={heroRef}
            className="bg-gradient-to-br from-white to-[#f9f5f1] py-20 text-center relative"
        >
            <div className="max-w-6xl mx-auto px-5">
                <div className="relative">
                    {/* Top Ornament */}
                    <div
                        className={`w-25 h-0.5 bg-gradient-to-r from-transparent via-[#8b5a3c] to-transparent mx-auto mb-10 animate-float transition-smooth ${
                            isVisible
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                        }`}
                    ></div>

                    {/* Section Title */}
                    <div
                        className={`text-center mb-12 transition-smooth ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                        }`}
                        style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
                    >
                        <h2 className="font-playfair lg:text-4xl text-3xl text-[#8b5a3c] mb-5">
                            Meet the Couple
                        </h2>
                        <div className="w-25 h-0.5 bg-gradient-to-r from-transparent via-[#8b5a3c] to-transparent mx-auto"></div>
                    </div>

                    {/* Couple Photos and Info */}
                    <div className="my-12 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Bride Section */}
                        <div
                            className={`flex flex-col items-center transition-smooth ${
                                isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-8"
                            }`}
                            style={{
                                transitionDelay: isVisible ? "0.4s" : "0s",
                            }}
                        >
                            <div
                                className={`relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-[#f5e6d3] shadow-lg transition-smooth ${
                                    isVisible
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-90"
                                }`}
                                style={{
                                    transitionDelay: isVisible ? "0.6s" : "0s",
                                }}
                            >
                                <Image
                                    src="/assets/images/ita.jpg"
                                    alt="Meylina - The Bride"
                                    fill
                                    className="object-cover object-[center_93%]"
                                    sizes="(max-width: 768px) 192px, 224px"
                                    priority
                                />
                            </div>
                            <div
                                className={`text-center transition-smooth ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                                style={{
                                    transitionDelay: isVisible ? "0.8s" : "0s",
                                }}
                            >
                                <h2 className="font-playfair text-xl text-[#8b5a3c] mb-4 tracking-widest">
                                    ITA MEYLINA, S.I.K
                                </h2>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Putri kedua dari
                                    <br />
                                    Bapak Ukih Dasuki &<br />
                                    Ibu Tati Supriyati
                                </p>
                                <button
                                    onClick={() =>
                                        handleInstagramClick("itameyln")
                                    }
                                    className="mt-4 text-[#a0783e] hover:text-[#8b5a3c] transition-colors duration-300 cursor-pointer"
                                >
                                    <span className="text-sm font-medium">
                                        @itameyln
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Groom Section */}
                        <div
                            className={`flex flex-col items-center transition-smooth ${
                                isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-8"
                            }`}
                            style={{
                                transitionDelay: isVisible ? "0.5s" : "0s",
                            }}
                        >
                            <div
                                className={`relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-[#f5e6d3] shadow-lg transition-smooth ${
                                    isVisible
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-90"
                                }`}
                                style={{
                                    transitionDelay: isVisible ? "0.7s" : "0s",
                                }}
                            >
                                <Image
                                    src="/assets/images/aldo.jpg"
                                    alt="Novan - The Groom"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 192px, 224px"
                                    priority
                                />
                            </div>
                            <div
                                className={`text-center transition-smooth ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                                style={{
                                    transitionDelay: isVisible ? "0.9s" : "0s",
                                }}
                            >
                                <h2 className="font-playfair text-xl text-[#8b5a3c] mb-4 tracking-widest">
                                    NOVAN RINALDO KUSUMA, S.Kom
                                </h2>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Putra kedua dari
                                    <br />
                                    Bapak Syahril Guci &<br />
                                    Ibu Nining Lesmana, S.E
                                </p>
                                <button
                                    onClick={() =>
                                        handleInstagramClick("rinaldo.kusuma")
                                    }
                                    className="mt-4 text-[#a0783e] hover:text-[#8b5a3c] transition-colors duration-300 cursor-pointer"
                                >
                                    <span className="text-sm font-medium">
                                        @rinaldo.kusuma
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Divider */}
                    <div
                        className={`my-12 relative transition-smooth ${
                            isVisible
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                        }`}
                        style={{ transitionDelay: isVisible ? "1.1s" : "0s" }}
                    >
                        <span className="bg-white px-5 text-[#8b5a3c] font-playfair italic text-xl relative z-10">
                            Together Forever
                        </span>
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5a3c] to-transparent"></div>
                    </div>

                    {/* Bottom Ornament */}
                    <div
                        className={`w-25 h-0.5 bg-gradient-to-r from-transparent via-[#8b5a3c] to-transparent mx-auto mt-10 animate-float transition-smooth ${
                            isVisible
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                        }`}
                        style={{
                            animationDelay: "0.5s",
                            transitionDelay: isVisible ? "1.3s" : "0s",
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
}
