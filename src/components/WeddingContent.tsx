"use client";

import { Inter, Playfair_Display } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CoverPage from "./CoverPage";
import EventDetails from "./EventDetails";
import Footer from "./Footer";
import Gallery from "./Gallery";
import GiftSection from "./GiftSection";
import Header from "./Header";
import Hero from "./Hero";
import LoadingScreen from "./LoadingScreen";
import LoveStory from "./LoveStory";
import MusicPlayer from "./MusicPlayer";
import RSVPModal from "./RSVPModal";
import Wishes from "./Wishes";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export default function WeddingContent() {
    const searchParams = useSearchParams();
    const [showCover, setShowCover] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isRSVPOpen, setIsRSVPOpen] = useState(false);

    // Get guest name from URL parameter 'to'
    const guestName = searchParams?.get("to");

    const handleOpenInvitation = () => {
        setIsLoading(true);
        setTimeout(() => {
            setShowCover(false);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <main className={`${inter.variable} ${playfair.variable} font-sans`}>
            {/* Cover Page */}
            {showCover && (
                <CoverPage
                    guestName={guestName || undefined}
                    onOpenInvitation={handleOpenInvitation}
                />
            )}

            {/* Main Invitation Content */}
            {!showCover && (
                <>
                    {isLoading && <LoadingScreen />}

                    <Header />
                    <Hero />
                    <EventDetails onOpenRSVP={() => setIsRSVPOpen(true)} />
                    <LoveStory />
                    <Gallery />
                    <GiftSection />
                    <Wishes />
                    <Footer />

                    <RSVPModal
                        isOpen={isRSVPOpen}
                        onClose={() => setIsRSVPOpen(false)}
                        guestName={guestName || undefined}
                    />
                    <MusicPlayer />
                </>
            )}
        </main>
    );
}
