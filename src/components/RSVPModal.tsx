"use client";

import { useState, useEffect } from "react";

interface RSVPModalProps {
    isOpen: boolean;
    onClose: () => void;
    guestName?: string;
}

export default function RSVPModal({
    isOpen,
    onClose,
    guestName,
}: RSVPModalProps) {
    const [formData, setFormData] = useState({
        name: guestName ? decodeURIComponent(guestName) : "",
        attendance: "",
        guestCount: "",
        message: "",
    });
    const [notifications, setNotifications] = useState<
        { message: string; type: "success" | "info" }[]
    >([]);

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

        if (formData.name && formData.attendance) {
            showNotification(
                "Terima kasih! Konfirmasi kehadiran Anda telah diterima.",
                "success"
            );

            setTimeout(() => {
                onClose();
                // Reset form but keep guest name if provided
                setFormData({
                    name: guestName ? decodeURIComponent(guestName) : "",
                    attendance: "",
                    guestCount: "",
                    message: "",
                });
            }, 1000);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-5"
            onClick={handleBackdropClick}
        >
            <div className="bg-white mx-auto p-10 rounded-3xl max-w-lg w-full relative shadow-2xl animate-scaleIn">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-5 text-3xl cursor-pointer text-[#8b5a3c] transition-colors duration-300 hover:text-[#a0783e]"
                >
                    ×
                </button>

                <h2 className="font-playfair text-[#8b5a3c] text-center mb-8 text-3xl">
                    Konfirmasi Kehadiran
                </h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nama Lengkap"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-[#e9d7c3] rounded-lg mb-5 text-base transition-colors duration-300 focus:outline-none focus:border-[#8b5a3c]"
                        required
                    />

                    <select
                        name="attendance"
                        value={formData.attendance}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-[#e9d7c3] rounded-lg mb-5 text-base transition-colors duration-300 focus:outline-none focus:border-[#8b5a3c]"
                        required
                    >
                        <option value="">Pilih Status Kehadiran</option>
                        <option value="hadir">Akan Hadir</option>
                        <option value="tidak-hadir">Tidak Dapat Hadir</option>
                    </select>

                    <input
                        type="number"
                        name="guestCount"
                        placeholder="Jumlah Tamu"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        min="1"
                        max="5"
                        className="w-full p-4 border-2 border-[#e9d7c3] rounded-lg mb-5 text-base transition-colors duration-300 focus:outline-none focus:border-[#8b5a3c]"
                    />

                    <textarea
                        name="message"
                        placeholder="Pesan (Opsional)"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-[#e9d7c3] rounded-lg mb-5 text-base h-24 resize-y transition-colors duration-300 focus:outline-none focus:border-[#8b5a3c]"
                    />

                    <button
                        type="submit"
                        className="bg-[#8b5a3c] text-white border-none py-4 px-10 rounded-full text-lg font-semibold cursor-pointer w-full transition-all duration-300 uppercase tracking-wide hover:bg-[#a0783e] hover:transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        Konfirmasi
                    </button>
                </form>
            </div>

            {/* Notifications */}
            {notifications.map((notification, index) => (
                <div
                    key={index}
                    className={`fixed top-5 right-5 ${
                        notification.type === "success"
                            ? "bg-green-500"
                            : "bg-blue-500"
                    } text-white py-4 px-5 rounded-lg shadow-lg z-60 transform transition-transform duration-300`}
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
        </div>
    );
}
