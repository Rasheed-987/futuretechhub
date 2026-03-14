"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
    title: {
        prefix1: string;
        prefix2: string;
        highlight: string;
        suffix: string;
    };
    description: string;
    backgroundImage: string;
    mobileBackgroundImage?: string;
    blurDataURL?: string;
    buttons: {
        primary: {
            text: string;
            href: string;
        };
        secondary: {
            text: string;
            href: string;
        };
    };
};

export default function Hero({ title, description, backgroundImage, mobileBackgroundImage, blurDataURL, buttons }: HeroProps) {
    return (
        <div className="flex flex-col md:block relative w-full md:rounded-[32px] md:overflow-hidden lg:min-h-[90vh] ">
            {/* 1. Header & Description (Order 1 on mobile) */}
            <div className="order-1 md:absolute md:inset-0 md:z-20 flex items-end md:items-center pointer-events-none">
                <div className="w-full max-w-5xl md:px-12 mt-10 md:mt-0 pb-6 md:pb-10 pointer-events-auto">
                    <h1 className="text-[38px] mt-20 md:mt-0 md:text-5xl lg:text-[3.5rem] 2xl:text-[4.5rem] 3xl:text-[76px]! font-medium leading-[1] 2xl:leading-[1] text-zinc-900 md:text-white tracking-tight md:tracking-wider">
                        <span className="">{title.prefix1}</span> <br />
                        <span className="">{title.prefix2}</span>
                        <span className="font-extrabold md:font-extrabold">{title.highlight} </span>
                        <span className="block ">{title.suffix} </span>
                    </h1>
                    <p className="mt-4 text-black/60 md:text-white/90 text-base  lg:text-[16px] xl:text-[17px] 2xl:text-xl 2xl:mt-4  lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[670px]  tracking-wide 2xl:tracking-widest leading-[1.3]">
                        {description}
                    </p>

                    {/* Desktop Buttons (Hidden on mobile) */}
                    <div className="hidden md:flex mt-10 flex-col sm:flex-row gap-4">
                        {/* Primary button */}
                        <Link
                            href={buttons.primary.href}
                            className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-2.5 text-[14px] 3xl:text-[20px]! font-semibold text-black transition-colors"
                        >
                            <span className="group-hover-gradient-text">
                                {buttons.primary.text}
                            </span>
                        </Link>

                        {/* Secondary (transparent) button */}
                        <Link
                            href={buttons.secondary.href}
                            className="inline-flex items-center justify-center rounded-full border border-white px-8 py-2.5 text-[14px] 3xl:text-[20px]! font-semibold text-white btn-hover-white"
                        >
                            {buttons.secondary.text}
                        </Link>
                    </div>

                </div>
            </div>

            {/* 2. Image Block (Order 2 on mobile) */}
            <div className="order-2 relative min-h-[240px] sm:min-h-[320px] md:min-h-[100vh] md:absolute md:inset-0 w-full">
                {mobileBackgroundImage ? (
                    <>
                        {/* Desktop Image */}
                        <Image
                            src={backgroundImage}
                            alt={`${title.prefix1}${title.prefix2}${title.highlight}${title.suffix}`}
                            fill
                            className="hidden md:block object-cover md:min-h-[100vh] md:rounded-none"
                            priority
                            placeholder={blurDataURL ? "blur" : undefined}
                            blurDataURL={blurDataURL}
                        />
                        {/* Mobile Image */}
                        <Image
                            src={mobileBackgroundImage}
                            alt={`${title.prefix1}${title.prefix2}${title.highlight}${title.suffix}`}
                            fill
                            className="md:hidden object-cover rounded-[20px] min-h-[240px] sm:min-h-[300px]"
                            priority
                            placeholder={blurDataURL ? "blur" : undefined}
                            blurDataURL={blurDataURL}
                        />
                    </>
                ) : (
                    <Image
                        src={backgroundImage}
                        alt={`${title.prefix1}${title.prefix2}${title.highlight}${title.suffix}`}
                        fill
                        className="object-cover rounded-[20px] min-h-[240px] md:min-h-[100vh] md:rounded-none"
                        priority
                        placeholder={blurDataURL ? "blur" : undefined}
                        blurDataURL={blurDataURL}
                    />
                )}
                {/* Desktop Overlay */}
                <div className="hidden md:block absolute inset-0 bg-black/20" />
            </div>

            {/* 3. Mobile Buttons (Order 3 on mobile, Hidden on desktop) */}
            <div className="order-3 md:hidden flex flex-col gap-3 mt-6">
                <Link
                    href={buttons.primary.href}
                    className="w-full inline-flex items-center justify-center rounded-full bg-brand-gradient text-white py-4 text-sm font-bold shadow-sm"
                >
                    {buttons.primary.text}
                </Link>
                <Link
                    href={buttons.secondary.href}
                    className="w-full p-[1.5px] rounded-full bg-brand-gradient"
                >
                    <div className="w-full bg-white rounded-full py-[14.5px] flex items-center justify-center">
                        <span className="text-[#006A8E] text-sm font-bold">
                            {buttons.secondary.text}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
