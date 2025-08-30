"use client";

import { useRef, useState, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface Wish {
    id: string;
    name: string;
    message: string;
    timestamp: number;
}

export default function Wishes() {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [showWishes, setShowWishes] = useState(false);
    const [formData, setFormData] = useState({ name: "", message: "" });
    const [notifications, setNotifications] = useState<
        { message: string; type: "success" | "info" }[]
    >([]);

    // Load wishes from localStorage on component mount
    useEffect(() => {
        try {
            const savedWishes = localStorage.getItem("wedding-wishes");
            if (savedWishes) {
                const parsedWishes = JSON.parse(savedWishes);
                setWishes(parsedWishes);
            } else {
                // Default wishes if none exist
                const defaultWishes: Wish[] = [
                    {
                        id: "1",
                        name: "Keluarga Besar",
                        message:
                            "Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, warohmah.",
                        timestamp: Date.now() - 86400000, // 1 day ago
                    },
                    {
                        id: "2",
                        name: "Teman Kuliah",
                        message:
                            "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khoir. Selamat ya!",
                        timestamp: Date.now() - 172800000, // 2 days ago
                    },
                    {
                        id: "3",
                        name: "Rekan Kerja",
                        message:
                            "Selamat atas pernikahannya! Semoga Allah memberikan keberkahan dalam rumah tangga kalian.",
                        timestamp: Date.now() - 259200000, // 3 days ago
                    },
                ];
                setWishes(defaultWishes);
                localStorage.setItem(
                    "wedding-wishes",
                    JSON.stringify(defaultWishes)
                );
            }
        } catch (error) {
            console.error("Error loading wishes:", error);
            // Fallback to default wishes if localStorage fails
            const defaultWishes: Wish[] = [
                {
                    id: "1",
                    name: "Keluarga Besar",
                    message:
                        "Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, warohmah.",
                    timestamp: Date.now(),
                },
            ];
            setWishes(defaultWishes);
        }
    }, []);

    // Save wishes to localStorage whenever wishes array changes
    useEffect(() => {
        if (wishes.length > 0) {
            try {
                localStorage.setItem("wedding-wishes", JSON.stringify(wishes));
            } catch (error) {
                console.error("Error saving wishes:", error);
            }
        }
    }, [wishes]);

    const showNotification = (
        message: string,
        type: "success" | "info" = "info"
    ) => {
        const newNotification = { message, type };
        setNotifications((prev) => [...prev, newNotification]);

        setTimeout(() => {
            setNotifications((prev) => prev.slice(1));
        }, 3000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.name.trim() && formData.message.trim()) {
            const newWish: Wish = {
                id: Date.now().toString(),
                name: formData.name.trim(),
                message: formData.message.trim(),
                timestamp: Date.now(),
            };

            setWishes((prev) => [newWish, ...prev]);
            setFormData({ name: "", message: "" });
            showNotification(
                "Ucapan Anda telah dikirim. Terima kasih!",
                "success"
            );
        }
    };

    const toggleWishes = () => {
        setShowWishes(!showWishes);
    };

    return (
        <section ref={sectionRef} className="bg-[#f9f5f1] py-20">
            <div className="max-w-4xl mx-auto px-5">
                <div
                    className={`text-center mb-15 transition-all duration-800 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="font-playfair md:text-4xl text-3xl text-[#8b5a3c] mb-5">
                        Ucapan & Doa Restu
                    </h2>
                    <p className="text-gray-600 mb-5">
                        Ucapkan Selamat dan Doa Restu Kepada Mempelai Untuk Hari
                        Bahagia Mereka
                    </p>
                    <div className="w-25 h-0.5 bg-gradient-to-r from-transparent via-[#8b5a3c] to-transparent mx-auto"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Wish Form */}
                    <div
                        className={`bg-white md:p-10 p-6 rounded-3xl shadow-lg mb-10 transition-all duration-800 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Nama Anda"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                                className="w-full p-4 border-2 border-[#e9d7c3] rounded-lg text-base mb-5 transition-colors duration-300 focus:outline-none focus:border-[#8b5a3c]"
                                required
                            />
                            <textarea
                                placeholder="Tulis ucapan dan doa untuk mempelai..."
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        message: e.target.value,
                                    }))
                                }
                                className="w-full p-4 border-2 border-[#e9d7c3] rounded-lg text-base mb-5 h-32 resize-y transition-colors duration-300 focus:outline-none focus:border-[#8b5a3c]"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#8b5a3c] text-white border-none py-4 md:px-10 px-8 rounded-full md:text-lg text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wide hover:bg-[#a0783e] hover:transform hover:-translate-y-1 hover:shadow-xl"
                            >
                                Kirim Ucapan
                            </button>
                        </form>
                    </div>

                    {/* Toggle Wishes */}
                    <div className="text-center mb-8">
                        <button
                            onClick={toggleWishes}
                            className="bg-white border-2 border-[#8b5a3c] text-[#8b5a3c] py-4 px-8 rounded-full cursor-pointer transition-all duration-300 flex items-center gap-3 mx-auto hover:bg-[#8b5a3c] hover:text-white"
                        >
                            <span>{showWishes ? "📁" : "📂"}</span>
                            <span>
                                {showWishes
                                    ? "Sembunyikan Ucapan"
                                    : `Lihat Semua Ucapan (${wishes.length})`}
                            </span>
                        </button>
                    </div>

                    {/* Wishes List */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            showWishes ? "max-h-[500px]" : "max-h-0"
                        }`}
                    >
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                            {wishes.length > 0 ? (
                                wishes.map((wish, index) => (
                                    <div
                                        key={wish.id}
                                        className="bg-white p-5 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="font-semibold text-[#8b5a3c]">
                                                {wish.name}
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                {new Date(
                                                    wish.timestamp
                                                ).toLocaleDateString("id-ID", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </div>
                                        </div>
                                        <div className="text-gray-600 leading-relaxed">
                                            {wish.message}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center text-gray-500 py-8">
                                    Belum ada ucapan. Jadilah yang pertama
                                    memberikan ucapan!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications */}
            {notifications.map((notification, index) => (
                <div
                    key={index}
                    className={`fixed top-5 right-5 ${
                        notification.type === "success"
                            ? "bg-green-500"
                            : "bg-blue-500"
                    } text-white py-4 px-5 rounded-lg shadow-lg z-50 transform transition-transform duration-300`}
                    style={{ transform: `translateY(${index * 60}px)` }}
                >
                    <div className="flex items-center gap-2">
                        <span>
                            {notification.type === "success" ? "✅" : "ℹ️"}
                        </span>
                        <span>{notification.message}</span>
                    </div>
                </div>
            ))}
        </section>
    );
}
