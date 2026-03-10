import { useState } from "react";

const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#4285F4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="#4285F4" />
        <circle cx="12" cy="12" r="10" fill="none" stroke="#4285F4" strokeWidth="1" />
        <text x="12" y="16" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">G</text>
    </svg>
);

export default function HeroSection() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="w-full flex flex-col">

            <div className="relative w-full overflow-hidden" style={{ height: "720px" }}>

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://d31aoa0ehgvjdi.cloudfront.net/media/page/177089468559679651260375976562.jpg')`,
                        backgroundPosition: "center 30%",
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)",
                    }}
                />


                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" style={{ marginTop: "-40px" }}>
                    <h1
                        className="text-white font-bold mb-3 leading-tight"
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                            fontFamily: "'Georgia', serif",
                        }}
                    >
                        Thailand, Designed Around Experiences
                    </h1>
                    <p
                        className="text-white mb-7"
                        style={{
                            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                            textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                            fontFamily: "Georgia, serif",
                            fontStyle: "italic",
                        }}
                    >
                        Experiences that become the trip. And, Now it is the time for Songkran!
                    </p>
                    <button
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition-all duration-200"
                        style={{
                            background: hovered
                                ? "rgba(30, 58, 100, 0.98)"
                                : "rgba(20, 45, 85, 0.88)",
                            border: "1.5px solid rgba(255,255,255,0.35)",
                            fontSize: "1rem",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                            backdropFilter: "blur(6px)",
                            letterSpacing: "0.01em",
                        }}
                    >
                        <span style={{ fontSize: "1.1rem" }}>+</span>
                        Plan &amp; Book My Trip with AI
                    </button>
                </div>
            </div>


            <div
                className="w-full flex items-center justify-center gap-10 py-4 flex-wrap"
                style={{ background: "#1a2e4a" }}
            >
                {/* Google rated */}
                <div className="flex items-center gap-2">
                    <div
                        className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-white text-xs"
                        style={{ background: "#4285F4", fontSize: "13px" }}
                    >
                        G
                    </div>
                    <span className="text-white text-sm font-medium">4.8+ rated</span>
                </div>


                <div className="flex items-center gap-2">
                    <div
                        className="w-6 h-6 rounded flex items-center justify-center"
                        style={{ background: "#2ecc71" }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        </svg>
                    </div>
                    <span className="text-white text-sm font-medium">All Taxes &amp; Fees Included</span>
                </div>


                <div className="flex items-center gap-2">
                    <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: "#00b4d8" }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                    </div>
                    <span className="text-white text-sm font-medium">24/7 Support</span>
                </div>


                <div className="flex items-center gap-2">
                    <div
                        className="w-6 h-6 rounded flex items-center justify-center"
                        style={{ background: "#f4a261" }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                    </div>
                    <span className="text-white text-sm font-medium">Secure Payments</span>
                </div>
            </div>
        </div>
    );
}