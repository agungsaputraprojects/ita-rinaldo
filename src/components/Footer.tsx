"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(footerRef, { threshold: 0.1 });

    return (
        <footer
            ref={footerRef}
            className="bg-gradient-to-br from-[#8b5a3c] to-[#a0783e] text-white py-15 text-center"
        >
            <div className="max-w-4xl mx-auto px-5">
                <div
                    className={`transition-all duration-800 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <p className="text-lg leading-relaxed mb-8 opacity-90">
                        Merupakan suatu kebahagiaan bagi kami apabila
                        Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa
                        restu
                    </p>
                    <div className="font-playfair text-3xl font-bold my-5 text-[#f5e6d3]">
                        <span>Ita & Rinaldo</span>
                    </div>
                    <div className="w-25 h-0.5 bg-gradient-to-r from-transparent via-[#f5e6d3] to-transparent mx-auto mt-5"></div>
                </div>
            </div>
        </footer>
    );
}
