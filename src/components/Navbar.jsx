import { useState } from "react";

const SearchIcon = () => (
    <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
        />
    </svg>
);

const LogoIcon = () => (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="none">

        <rect x="16" y="0" width="2" height="28" fill="black" />
        <polygon points="0,8 16,4 16,14" fill="black" />
        <polygon
            points="36,10 20,6 20,16"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
        />
    </svg>
);

export default function Navbar() {
    const [query, setQuery] = useState("");

    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-screen-2xl mx-auto px-4 h-24 flex items-center justify-between gap-4">
                <div>
                    <img
                        src="https://thetarzanway.com/_next/static/media/ttw.796e21cd.svg"
                        alt="logo"
                    />
                </div>


                <div className="flex-1 max-w-xl">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-white hover:shadow-sm transition-shadow">
                        <SearchIcon />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Where do you want to go?"
                            className="w-full text-sm text-gray-500 placeholder-gray-400 outline-none bg-transparent"
                        />
                    </div>
                </div>


                <button className="min-w-fit border border-black rounded px-4 py-1.5 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors">
                    Login/Signup
                </button>
            </div>
        </nav>
    );
}
