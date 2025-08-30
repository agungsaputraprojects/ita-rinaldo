"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Gallery() {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Array of all wedding photos from public/assets
    const weddingPhotos = [
        { src: "/assets/images/prewed-1.jpg", alt: "Pre-wedding Photo 1" },
        { src: "/assets/images/prewed-2.jpg", alt: "Pre-wedding Photo 2" },
        { src: "/assets/images/prewed-3.jpg", alt: "Pre-wedding Photo 3" },
        { src: "/assets/images/prewed-4.jpg", alt: "Pre-wedding Photo 4" },
        { src: "/assets/images/prewed-5.jpg", alt: "Pre-wedding Photo 5" },
        { src: "/assets/images/prewed-6.jpg", alt: "Pre-wedding Photo 6" },
        { src: "/assets/images/prewed-7.jpg", alt: "Pre-wedding Photo 7" },
        { src: "/assets/images/prewed-8.jpg", alt: "Pre-wedding Photo 8" },
        { src: "/assets/images/prewed-9.jpg", alt: "Pre-wedding Photo 9" },
        { src: "/assets/images/prewed-10.jpg", alt: "Pre-wedding Photo 10" },
        { src: "/assets/images/prewed-11.jpg", alt: "Pre-wedding Photo 11" },
        { src: "/assets/images/prewed-12.jpg", alt: "Pre-wedding Photo 12" },
        { src: "/assets/images/prewed-14.jpg", alt: "Pre-wedding Photo 14" },
        { src: "/assets/images/prewed-15.jpg", alt: "Pre-wedding Photo 15" },
        { src: "/assets/images/prewed-17.jpg", alt: "Pre-wedding Photo 17" },
        { src: "/assets/images/prewed-16.jpg", alt: "Pre-wedding Photo 16" },
        { src: "/assets/images/cover.jpg", alt: "Wedding Cover Photo" },
    ];

    const handleThumbnailClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    return (
        <section ref={sectionRef} className="bg-white py-20">
            {/* Custom Scrollbar Styles - Hidden */}
            <style jsx>{`
                .custom-scrollbar {
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none; /* Internet Explorer 10+ */
                }

                .custom-scrollbar::-webkit-scrollbar {
                    display: none; /* WebKit */
                }

                /* Progress bar style */
                .progress-scrollbar {
                    position: relative;
                }

                .progress-scrollbar::after {
                    content: "";
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #8b5a3c, #a0783e);
                    border-radius: 2px;
                    transition: width 0.3s ease;
                    width: ${((selectedImageIndex + 1) / weddingPhotos.length) *
                    100}%;
                }
            `}</style>

            <div className="max-w-6xl mx-auto px-5">
                <div
                    className={`text-center mb-10 transition-all duration-800 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="font-playfair md:text-4xl text-3xl text-[#8b5a3c] mb-5">
                        Our Gallery
                    </h2>
                    <div className="w-25 h-0.5 bg-gradient-to-r from-transparent via-[#8b5a3c] to-transparent mx-auto"></div>
                </div>

                {/* Main Large Image */}
                <div
                    className={`mb-8 transition-all duration-800 ${
                        isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                    }`}
                >
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                        <Image
                            src={weddingPhotos[selectedImageIndex].src}
                            alt={weddingPhotos[selectedImageIndex].alt}
                            fill
                            className="object-contain transition-all duration-500 ease-in-out"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                            priority
                        />
                    </div>
                </div>

                {/* Thumbnail Gallery with Progress Bar */}
                <div
                    className={`transition-all duration-800 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="progress-scrollbar">
                        <div className="custom-scrollbar overflow-x-auto pb-8">
                            <div className="flex gap-4 min-w-max px-4 py-2">
                                {weddingPhotos.map((photo, index) => (
                                    <div
                                        key={index}
                                        className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                                            selectedImageIndex === index
                                                ? "ring-4 ring-[#8b5a3c] scale-110 shadow-2xl"
                                                : "hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-[#e9d7c3]"
                                        }`}
                                        onClick={() =>
                                            handleThumbnailClick(index)
                                        }
                                    >
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            fill
                                            className="object-cover transition-all duration-300"
                                            sizes="(max-width: 768px) 80px, 96px"
                                        />

                                        {/* Gradient overlay for non-selected images */}
                                        {selectedImageIndex !== index && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent hover:from-black/10 transition-all duration-300"></div>
                                        )}

                                        {/* Selection indicator */}
                                        {selectedImageIndex === index && (
                                            <div className="absolute top-1 right-1 w-3 h-3 bg-[#8b5a3c] rounded-full border-2 border-white shadow-lg"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Image Counter */}
                <div className="text-center mt-6">
                    <div className="inline-flex items-center gap-3 bg-[#f5e6d3] px-6 py-2 rounded-full">
                        <span className="text-[#8b5a3c] font-medium">
                            {selectedImageIndex + 1} / {weddingPhotos.length}
                        </span>
                        <div className="flex gap-1">
                            {weddingPhotos.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === selectedImageIndex
                                            ? "bg-[#8b5a3c] scale-125"
                                            : "bg-[#e9d7c3] hover:bg-[#8b5a3c] cursor-pointer"
                                    }`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
