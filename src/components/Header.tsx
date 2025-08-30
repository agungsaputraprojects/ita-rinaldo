"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(headerRef, { threshold: 0.02 }); // Lower threshold for faster trigger
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const weddingDate = new Date("2025-09-07T09:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header
            ref={headerRef}
            className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/images/prewed-7.jpg"
                    alt="Wedding Header Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-5">
                {/* Wedding Title */}
                <div
                    className={`transition-smooth ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                    }`}
                >
                    <p className="text-lg md:text-xl mb-4 opacity-90 tracking-wide">
                        The Wedding of
                    </p>
                </div>

                {/* Couple Names */}
                <div
                    className={`transition-smooth ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
                >
                    <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                        Ita dan Rinaldo
                    </h1>
                </div>

                {/* Wedding Date */}
                <div
                    className={`transition-smooth ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
                >
                    <p className="text-xl md:text-2xl mb-12 tracking-wider font-light">
                        07.09.2025
                    </p>
                </div>

                {/* Countdown */}
                <div
                    className={`transition-smooth ${
                        isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
                >
                    <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-lg mx-auto mb-12">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Minutes", value: timeLeft.minutes },
                            { label: "Seconds", value: timeLeft.seconds },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-30 transition-smooth ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                                style={{
                                    transitionDelay: isVisible
                                        ? `${0.8 + index * 0.1}s`
                                        : "0s",
                                }}
                            >
                                <div className="text-2xl md:text-3xl font-bold mb-1">
                                    {String(item.value).padStart(2, "0")}
                                </div>
                                <div className="text-xs md:text-sm opacity-90 font-medium">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quranic Verse */}
                <div
                    className={`max-w-3xl mx-auto transition-smooth ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: isVisible ? "1.2s" : "0s" }}
                >
                    <p className="font-playfair text-sm md:text-base italic leading-relaxed mb-4 opacity-90">
                        &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah
                        Dia menciptakan pasangan-pasangan untukmu dari jenismu
                        sendiri, agar kamu cenderung dan merasa tenteram
                        kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
                        sayang&rdquo;
                    </p>
                    <p className="text-xs md:text-sm font-medium tracking-wider opacity-80">
                        AR-RUM AYAT : 21
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-smooth ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "1.5s" : "0s" }}
            >
                <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </header>
    );
}
