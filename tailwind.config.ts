import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "primary-brown": "#8b5a3c",
                "secondary-brown": "#a0783e",
                cream: "#f5e6d3",
                "light-cream": "#e9d7c3",
                gold: "#d4af37",
                "white-bg": "#f9f5f1",
            },
            fontFamily: {
                playfair: ["var(--font-playfair)", "serif"],
                poppins: ["Poppins", "sans-serif"],
            },
            spacing: {
                "15": "3.75rem", // 60px
                "25": "6.25rem", // 100px
            },
            borderWidth: {
                "3": "3px",
            },
            animation: {
                fadeInUp: "fadeInUp 0.8s ease forwards",
                slideInLeft: "slideInLeft 0.8s ease forwards",
                slideInRight: "slideInRight 0.8s ease forwards",
                scaleIn: "scaleIn 0.3s ease forwards",
                float: "float 3s ease-in-out infinite",
                sparkle: "sparkle 1s ease-out forwards",
                shimmer: "shimmer 1.5s infinite",
            },
            keyframes: {
                fadeInUp: {
                    from: {
                        opacity: "0",
                        transform: "translateY(30px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                slideInLeft: {
                    from: {
                        opacity: "0",
                        transform: "translateX(-50px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                slideInRight: {
                    from: {
                        opacity: "0",
                        transform: "translateX(50px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                scaleIn: {
                    from: {
                        opacity: "0",
                        transform: "scale(0.8)",
                    },
                    to: {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                sparkle: {
                    "0%": {
                        opacity: "1",
                        transform: "translateY(0) scale(1)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translateY(-50px) scale(0.5)",
                    },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-468px 0" },
                    "100%": { backgroundPosition: "468px 0" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
