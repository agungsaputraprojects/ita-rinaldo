"use client";

import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function GiftSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    const [copiedText, setCopiedText] = useState<string>("");

    const handleCopyText = async (text: string, type: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(type);
            setTimeout(() => setCopiedText(""), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="bg-gradient-to-br from-[#8b5a3c] to-[#a0783e] text-white py-20"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-12 transition-all duration-800 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="font-playfair md:text-4xl text-3xl mb-6 tracking-wide">
                        Wedding Gift
                    </h2>
                    <p className="text-lg opacity-90 mb-8">
                        Doa Restu Anda merupakan karunia yang sangat berarti
                        bagi kami.
                        <br />
                        Dan jika memberi adalah ungkapan tanda kasih Anda, Anda
                        dapat memberi kado atau angpao melalui:
                    </p>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#f5e6d3] to-transparent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Kirim Angpao Section */}
                    <div
                        className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20 transition-all duration-800 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-[#f5e6d3] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-[#8b5a3c]"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                </svg>
                            </div>
                            <h3 className="font-playfair text-2xl mb-4 text-[#f5e6d3]">
                                Kirim Angpao
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {/* Novan's Account */}
                            <div className="bg-white bg-opacity-10 rounded-xl p-6">
                                <h4 className="font-semibold text-lg mb-3 text-[#f5e6d3]">
                                    Novan Rinaldo Kusuma
                                </h4>
                                <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-3">
                                    <div>
                                        <p className="text-sm opacity-90">
                                            Bank BCA
                                        </p>
                                        <p className="font-mono text-lg font-semibold">
                                            8800506507
                                        </p>
                                    </div>
                                    <button
                                        onClick={() =>
                                            handleCopyText(
                                                "8800506507",
                                                "novan-account"
                                            )
                                        }
                                        className="bg-[#f5e6d3] text-[#8b5a3c] px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-300"
                                    >
                                        {copiedText === "novan-account"
                                            ? "Tersalin!"
                                            : "Salin"}
                                    </button>
                                </div>
                            </div>

                            {/* Ita's Account */}
                            <div className="bg-white bg-opacity-10 rounded-xl p-6">
                                <h4 className="font-semibold text-lg mb-3 text-[#f5e6d3]">
                                    Ita Meylina
                                </h4>
                                <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-3">
                                    <div>
                                        <p className="text-sm opacity-90">
                                            Bank BCA
                                        </p>
                                        <p className="font-mono text-lg font-semibold">
                                            0670283518
                                        </p>
                                    </div>
                                    <button
                                        onClick={() =>
                                            handleCopyText(
                                                "0670283518",
                                                "ita-account"
                                            )
                                        }
                                        className="bg-[#f5e6d3] text-[#8b5a3c] px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-300"
                                    >
                                        {copiedText === "ita-account"
                                            ? "Tersalin!"
                                            : "Salin"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kirim Kado Section */}
                    <div
                        className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20 transition-all duration-800 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: "0.4s" }}
                    >
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-[#f5e6d3] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-7 h-7 text-[#8b5a3c]"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22,12v6a2,2 0 0,1 -2,2H4a2,2 0 0,1 -2,-2V12ZM22,9H2V7A2,2 0 0,1 4,5H20A2,2 0 0,1 22,7V9ZM12,5V3A1,1 0 0,0 11,2H10A1,1 0 0,0 9,3V5H4A2,2 0 0,0 2,7V9H22V7A2,2 0 0,0 20,5H15V3A1,1 0 0,0 14,2H13A1,1 0 0,0 12,3V5ZM12,9H10V12H12V9ZM14,9V12H16V9H14ZM8,9H6V12H8V9ZM18,9V12H20V9H18ZM4,9H2V12H4V9Z" />
                                </svg>
                            </div>
                            <h3 className="font-playfair text-2xl mb-4 text-[#f5e6d3]">
                                Kirim Kado
                            </h3>
                        </div>

                        <div className="bg-white bg-opacity-10 rounded-xl p-6">
                            <h4 className="font-semibold text-lg mb-3 text-[#f5e6d3]">
                                Ita Meylina
                            </h4>
                            <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                                <p className="text-sm leading-relaxed">
                                    Komplek Bappenas Blok C45
                                    <br />
                                    Jln Pertiwi X, Kedaung
                                    <br />
                                    Sawangan, Depok, 16516
                                </p>
                            </div>
                            <button
                                onClick={() =>
                                    handleCopyText(
                                        "Komplek Bappenas Blok C45 Jln Pertiwi X, Kedaung, Sawangan, Depok, 16516",
                                        "address"
                                    )
                                }
                                className="w-full bg-[#f5e6d3] text-[#8b5a3c] py-3 rounded-lg font-medium hover:bg-white transition-colors duration-300"
                            >
                                {copiedText === "address"
                                    ? "Alamat Tersalin!"
                                    : "Salin Alamat"}
                            </button>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm opacity-80">
                                Mohon sertakan nama pengirim
                            </p>
                        </div>
                    </div>
                </div>

                {/* Thank You Message */}
                <div
                    className={`text-center mt-12 transition-all duration-800 delay-600 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <p className="text-lg font-playfair italic opacity-90">
                        &quot;Terima kasih atas perhatian dan doa restu yang
                        diberikan&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
