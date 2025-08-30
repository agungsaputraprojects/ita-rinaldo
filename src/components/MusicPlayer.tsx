"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio element
        audioRef.current = new Audio("/assets/audio/musik.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        // Handle audio events
        const audio = audioRef.current;

        const handleCanPlay = () => {
            setIsLoading(false);
        };

        const handleLoadStart = () => {
            setIsLoading(true);
        };

        const handleError = () => {
            setIsLoading(false);
            console.error("Failed to load audio file");
        };

        const handleEnded = () => {
            setIsPlaying(false);
        };

        audio.addEventListener("canplay", handleCanPlay);
        audio.addEventListener("loadstart", handleLoadStart);
        audio.addEventListener("error", handleError);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("canplay", handleCanPlay);
            audio.removeEventListener("loadstart", handleLoadStart);
            audio.removeEventListener("error", handleError);
            audio.removeEventListener("ended", handleEnded);
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const toggleMusic = async () => {
        if (!audioRef.current) return;

        try {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                await audioRef.current.play();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
        }
    };

    return (
        <button
            onClick={toggleMusic}
            disabled={isLoading}
            className={`
                fixed bottom-5 right-5 w-15 h-15 rounded-full bg-[#8b5a3c] text-white 
                border-none text-2xl cursor-pointer shadow-lg z-50 transition-all duration-300 
                hover:bg-[#a0783e] disabled:opacity-50 disabled:cursor-not-allowed
                ${isPlaying ? "animate-pulse" : ""}
            `}
            title={isPlaying ? "Pause Music" : "Play Music"}
        >
            {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            ) : isPlaying ? (
                "🔇"
            ) : (
                "🎵"
            )}
        </button>
    );
}
