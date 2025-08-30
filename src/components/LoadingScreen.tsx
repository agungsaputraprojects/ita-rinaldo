"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-[#f5e6d3] to-[#e9d7c3] flex items-center justify-center z-[9999] transition-opacity duration-500">
            <div className="text-center text-[#8b5a3c]">
                <div className="w-12 h-12 border-3 border-[#e9d7c3] border-t-[#8b5a3c] rounded-full animate-spin mx-auto mb-5"></div>
                <p className="text-lg">Memuat Undangan...</p>
            </div>
        </div>
    );
}
