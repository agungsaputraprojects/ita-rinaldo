"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface EventDetailsProps {
    onOpenRSVP: () => void;
}

export default function EventDetails({ onOpenRSVP }: EventDetailsProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.02 });
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Function to handle map click
    const handleMapClick = () => {
        const address =
            "Gedung Aula Serbaguna Jl. Pertiwi IX No. C16 RT 02, Kedaung, Kec. Sawangan Kota Depok";
        const encodedAddress = encodeURIComponent(address);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

        window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
    };

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
        <section
            ref={sectionRef}
            className="bg-gradient-to-br from-[#8b5a3c] to-[#a0783e] text-white py-20 text-center"
        >
            <div className="max-w-6xl mx-auto px-5">
                {/* Title Section */}
                <div
                    className={`transition-smooth ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="font-playfair md:text-3xl text-2xl mb-8 tracking-wide">
                        YANG INSYA ALLAH AKAN DILAKSANAKAN PADA :
                    </h2>

                    <div className="my-8">
                        <span className="block text-xl mb-3 opacity-90">
                            Minggu
                        </span>
                        <span className="block font-playfair lg:text-5xl md:text-4xl text-3xl font-bold text-[#f5e6d3]">
                            07 September 2025
                        </span>
                    </div>
                </div>

                {/* Countdown */}
                <div
                    className={`transition-smooth ${
                        isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
                >
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-4 my-10 border border-white border-opacity-20">
                        <div className="grid grid-cols-4 gap-5 max-w-md mx-auto">
                            {[
                                { label: "Hari", value: timeLeft.days },
                                { label: "Jam", value: timeLeft.hours },
                                { label: "Menit", value: timeLeft.minutes },
                                { label: "Detik", value: timeLeft.seconds },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`text-center bg-white bg-opacity-20 rounded-xl p-4 transition-smooth ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4"
                                    }`}
                                    style={{
                                        transitionDelay: isVisible
                                            ? `${0.4 + index * 0.1}s`
                                            : "0s",
                                    }}
                                >
                                    <span className="block text-2xl md:text-3xl font-bold text-[#f5e6d3]">
                                        {String(item.value).padStart(2, "0")}
                                    </span>
                                    <span className="text-sm opacity-90">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Events */}
                <div className="grid md:grid-cols-2 gap-10 my-12">
                    <div
                        className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl md:p-15 p-10 border border-white border-opacity-20 transition-smooth hover:transform hover:-translate-y-3 hover:shadow-2xl ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
                    >
                        <div className="text-5xl mb-5">💍</div>
                        <h3 className="font-playfair text-2xl mb-5 text-[#f5e6d3]">
                            AKAD NIKAH
                        </h3>
                        <div className="text-xl font-semibold mb-5">
                            09.00 WIB
                        </div>
                        <div className="text-base leading-relaxed opacity-90 flex flex-col">
                            <strong>BERTEMPAT DI</strong>
                            <br />
                            Gedung Aula Serbaguna Jl. Pertiwi IX No. C16 RT 02,
                            Kedaung , Kec. Sawangan Kota Depok
                        </div>
                    </div>

                    <div
                        className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl md:p-15 p-10 border border-white border-opacity-20 transition-smooth hover:transform hover:-translate-y-3 hover:shadow-2xl ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: isVisible ? "1.0s" : "0s" }}
                    >
                        <div className="text-5xl mb-5">🎉</div>
                        <h3 className="font-playfair text-2xl mb-5 text-[#f5e6d3]">
                            RESEPSI PERNIKAHAN
                        </h3>
                        <div className="text-xl font-semibold mb-5">
                            11.00 - 15.00 WIB
                        </div>
                        <div className="text-base leading-relaxed opacity-90 flex flex-col">
                            <strong>BERTEMPAT DI</strong>
                            <br />
                            Gedung Aula Serbaguna Jl. Pertiwi IX No. C16 RT 02,
                            Kedaung , Kec. Sawangan Kota Depok
                        </div>
                    </div>
                </div>

                {/* Location QR Code Section */}
                <div
                    className={`mt-8 max-w-md mx-auto transition-smooth ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: isVisible ? "1.2s" : "0s" }}
                >
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-6 border border-white border-opacity-20 text-center">
                        <h4 className="font-playfair text-lg mb-3 text-[#f5e6d3]">
                            Lokasi Acara
                        </h4>
                        <button
                            onClick={handleMapClick}
                            className="bg-white p-3 rounded-xl inline-block mb-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <Image
                                src="/assets/images/barcode.jpg"
                                alt="Location QR Code"
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </button>
                        <p className="text-sm opacity-90">
                            Scan atau klik barcode untuk navigasi Google Maps
                        </p>
                    </div>
                </div>

                {/* RSVP Section */}
                <div
                    className={`mt-15 transition-smooth ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: isVisible ? "1.4s" : "0s" }}
                >
                    <h3 className="font-playfair text-2xl mb-4">
                        Konfirmasi Kehadiran
                    </h3>
                    <p className="mb-8 opacity-90">
                        Kirimkan Konfirmasi Kehadiran Kepada Mempelai Melalui
                        Form Berikut :
                    </p>
                    <button
                        onClick={onOpenRSVP}
                        className="bg-[#f5e6d3] text-[#8b5a3c] border-none py-4 px-10 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wide hover:bg-white hover:transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        Konfirmasi Kehadiran
                    </button>
                </div>
            </div>
        </section>
    );
}
