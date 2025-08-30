import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ita & Rinaldo - Wedding Invitation",
    description:
        "Dengan memohon rahmat dan ridho Allah SWT, kami dengan penuh kebahagiaan ingin berbagi kabar gembira dan memohon doa restu untuk hadir pada acara pernikahan kami pada 07 September 2025",
    keywords:
        "wedding, invitation, undangan pernikahan, Ita Meylina, Novan Rinaldo, september 2025",
    authors: [{ name: "Ita & Rinaldo" }],

    // Open Graph untuk preview di WhatsApp, Telegram, Facebook, dll
    openGraph: {
        title: "Ita & Rinaldo - Undangan Pernikahan",
        description:
            "Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir dalam acara pernikahan kami. Minggu, 07 September 2025 - Akad Nikah 09:00 WIB, Resepsi 11:00-15:00 WIB di Depok",
        type: "website",
        locale: "id_ID",
        url: "https://your-domain.com",
        siteName: "Ita & Rinaldo Wedding",
        images: [
            {
                url: "/assets/images/cover.jpg",
                width: 1200,
                height: 630,
                alt: "Ita & Rinaldo Wedding Invitation - 07 September 2025",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Ita & Rinaldo - Undangan Pernikahan",
        description:
            "Minggu, 07 September 2025 - Kami mengundang Anda untuk hadir dalam acara pernikahan kami di Depok",
        images: ["/assets/images/cover.jpg"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <meta name="theme-color" content="#8b5a3c" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    );
}
