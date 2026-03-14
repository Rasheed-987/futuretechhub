"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function TopBar() {
    const [isVisible, setIsVisible] = useState(true);

    // Hardcoded static English content since dynamic content/locale is removed
    const hasNews = true;
    const news = {
        content: "Exciting new updates are here!",
        applyNowUrl: "/contact",
    };
    const timeLeft = "Limited time offer";
    const applyNowText = "Apply Now";

    useEffect(() => {
        const root = document.documentElement;
        if (isVisible) {
            root.style.removeProperty("--topbar-height");
        } else {
            root.style.setProperty("--topbar-height", "9px");
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            role="region"
            aria-label="announcement"
            className="w-full pt-1 3xl:pt-1 overflow-hidden"
        >
            <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    opacity: { duration: 0.6 }
                }}
                style={{ willChange: "transform, opacity" }}
                className="bg-brand-gradient text-white rounded-full h-9 lg:h-9 2xl:h-10 3xl:h-[54px]! sm:px-6 3xl:px-8! flex items-center justify-between gap-2 md:gap-3 3xl:gap-8! overflow-hidden"
            >
                {/* Left spacer (keeps center perfect on desktop) */}
                <div className="w-6 h-6 hidden md:block shrink-0" />

                {/* Center Content */}
                <div className="flex-1 flex justify-center min-w-0 h-full items-center">
                    {!hasNews ? (
                        /* Placeholder */
                        <span className="text-xs md:text-sm font-medium opacity-90">
                            News coming soon
                        </span>
                    ) : (
                        <div className="w-full h-full flex items-center" dir="ltr">
                            {/* Mobile: Marquee */}
                            <div className="md:hidden w-full overflow-hidden">
                                <Marquee
                                    key={`mobile-en`}
                                    gradient={false}
                                    speed={40}
                                    direction="left"
                                    pauseOnHover={true}
                                >
                                    <div className="flex items-center gap-8 pr-12" dir="ltr">
                                        <span className="text-xs font-medium whitespace-nowrap">
                                            {news?.content}
                                        </span>

                                        {timeLeft && (
                                            <span className="text-xs font-bold whitespace-nowrap">
                                                {timeLeft}
                                            </span>
                                        )}

                                        {news?.applyNowUrl && (
                                            <a
                                                href="/contact"
                                                className="group inline-flex items-center justify-center h-6 3xl:h-9! rounded-full bg-white text-black px-4 3xl:px-6! text-[10px] 3xl:text-base! font-semibold leading-none whitespace-nowrap transition-colors"
                                            >
                                                <span className="group-hover-gradient-text">
                                                    {applyNowText}
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </Marquee>
                            </div>

                            {/* Desktop: Static */}
                            <div className="hidden md:flex items-center justify-center gap-4 sm:gap-8 px-4 w-full" dir="ltr">
                                <span className="text-xs md:text-sm 3xl:text-[19px]! font-medium whitespace-nowrap">
                                    {news?.content}
                                </span>

                                {timeLeft && (
                                    <span className="text-xs md:text-sm 3xl:text-[19px]! flex items-center font-medium whitespace-nowrap">
                                        {timeLeft}
                                    </span>
                                )}

                                {news?.applyNowUrl && (
                                    <a
                                        href="/contact"
                                        className="group inline-flex items-center justify-center h-6 md:h-7 3xl:h-8! rounded-full bg-white text-black hover:bg-white transition-colors px-4 3xl:px-6! text-[10px] md:text-xs 3xl:text-base! font-semibold leading-none whitespace-nowrap"
                                    >
                                        <span className="group-hover-gradient-text text-[16px] md:text-xs 3xl:text-[19px]!">
                                            {applyNowText}
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="inline-flex items-center justify-center mx-2 sm:mx-0 w-6 h-6 md:w-7 md:h-7 3xl:w-8! 3xl:h-8! hover:bg-white/10 rounded-full transition-colors shrink-0 cursor-pointer"
                    aria-label="Close announcement"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L11 11M1 11L11 1"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </motion.div>
        </div>
    );
}
