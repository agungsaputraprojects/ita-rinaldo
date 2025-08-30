"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function LoveStory() {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

    const timeline = [
        {
            year: "2021",
            title: "Awal Berkenalan",
            content: `Dari sebuah percakapan sederhana mengenai tukar informasi tentang pekerjaan, perlahan obrolan itu membawa kami pada banyak hal lain yang membuat kami semakin akrab. Dari yang awalnya hanya sekadar berbagi cerita, ternyata tumbuh rasa nyaman yang membuat kami ingin melanjutkan kisah ini lebih jauh. Namun setelah itu, kami sempat hilang kontak untuk beberapa waktu.`,
        },
        {
            year: "2024",
            title: "Menjalin Hubungan",
            content: `Seiring berjalannya waktu, kami kembali dipertemukan dan semakin menemukan banyak kecocokan satu sama lain, cara kami saling mendukung dan menguatkan di masa-masa sulit. Dari keyakinan itu bahwa hubungan ini layak untuk di bawa ke arah yang lebih serius. Tahun 2024 menjadi titik penting, kami semakin yakin untuk menapaki perjalanan bersama, dengan komitmen yang kuat untuk melanjutkan hubungan ini ke jenjang pernikahan.`,
        },
        {
            date: "28 Juni",
            year: "2025",
            title: "Bertunangan",
            content: `Tanggal ini menjadi momen yang sangat berharga bagi kami. Dengan hati yang mantap, kami memutuskan untuk mengikat janji dalam sebuah pertunangan. Langkah ini adalah jawaban dari perjalanan yang telah kami jalani, sekaligus doa dan harapan agar kami dapat melangkah bersama menuju pernikahan serta kehidupan yang penuh cinta dan keberkahan.`,
        },
    ];

    return (
        <section ref={sectionRef} className="bg-[#f9f5f1] py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-12 lg:mb-16 transition-all duration-800 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="font-playfair text-3xl sm:text-4xl text-[#8b5a3c] mb-5">
                        Our Love Story
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#8b5a3c] to-transparent mx-auto"></div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Desktop Timeline - Hidden on mobile */}
                    <div className="hidden lg:block">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#8b5a3c] transform -translate-x-1/2"></div>

                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center mb-20 transition-all duration-800 ${
                                    isVisible
                                        ? "opacity-100 translate-x-0"
                                        : `opacity-0 ${
                                              index % 2 === 0
                                                  ? "-translate-x-12"
                                                  : "translate-x-12"
                                          }`
                                } ${
                                    index % 2 === 0
                                        ? "justify-start"
                                        : "justify-end"
                                }`}
                                style={{
                                    transitionDelay: `${0.2 * (index + 1)}s`,
                                }}
                            >
                                {/* Left side content for even items */}
                                {index % 2 === 0 && (
                                    <div className="w-5/12 pr-8 text-right">
                                        <h3 className="font-playfair text-2xl text-[#8b5a3c] mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            {item.content}
                                        </p>
                                    </div>
                                )}

                                {/* Date circle - centered */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#8b5a3c] text-white py-4 px-5 rounded-2xl text-center min-w-[120px] z-10">
                                    <span className="block text-lg font-semibold">
                                        {item.year}
                                    </span>
                                    {item.date && (
                                        <span className="block text-sm opacity-90">
                                            {item.date}
                                        </span>
                                    )}
                                </div>

                                {/* Right side content for odd items */}
                                {index % 2 === 1 && (
                                    <div className="w-5/12 pl-8 text-left">
                                        <h3 className="font-playfair text-2xl text-[#8b5a3c] mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            {item.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Tablet Timeline - Medium screens */}
                    <div className="hidden md:block lg:hidden">
                        <div className="relative pl-20">
                            {/* Timeline line */}
                            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-[#8b5a3c]"></div>

                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative mb-16 transition-all duration-800 ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                    }`}
                                    style={{
                                        transitionDelay: `${
                                            0.2 * (index + 1)
                                        }s`,
                                    }}
                                >
                                    {/* Date circle */}
                                    <div className="absolute left-0 transform -translate-x-1/2 bg-[#8b5a3c] text-white py-3 px-4 rounded-xl text-center min-w-[110px] z-10">
                                        <span className="block text-base font-semibold">
                                            {item.year}
                                        </span>
                                        {item.date && (
                                            <span className="block text-xs opacity-90">
                                                {item.date}
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="ml-12">
                                        <h3 className="font-playfair text-xl text-[#8b5a3c] mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline - Small screens */}
                    <div className="block md:hidden">
                        <div className="relative pl-7">
                            {/* Timeline line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#8b5a3c]"></div>

                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative mb-12 transition-all duration-800 ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                    }`}
                                    style={{
                                        transitionDelay: `${
                                            0.2 * (index + 1)
                                        }s`,
                                    }}
                                >
                                    {/* Date circle */}
                                    <div className="absolute left-0 transform -translate-x-1/2 bg-[#8b5a3c] text-white py-2 px-3 rounded-lg text-center min-w-[80px] z-10">
                                        <span className="block text-sm font-semibold">
                                            {item.year}
                                        </span>
                                        {item.date && (
                                            <span className="block text-xs opacity-90">
                                                {item.date}
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="ml-12">
                                        <h3 className="font-playfair text-lg text-[#8b5a3c] mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
