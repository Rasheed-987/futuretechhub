"use client";
import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Graphic & Web\nDesign",
        color: "bg-[#045A86]",
        textColor: "text-white",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <path d="M10 9l5-5"></path>
            </svg>
        )
    },
    {
        title: "Basic Computer",
        color: "bg-[#019977]",
        textColor: "text-white",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
        )
    },
    {
        title: "Aritifical Intelligence",
        color: "bg-[#E0F2E9]",
        textColor: "text-black",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
        )
    },
    {
        title: "Analysis Of\nAlgorithms",
        color: "bg-[#CEB5A7]",
        textColor: "text-black",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <path d="M11 8a3 3 0 0 0-3 3"></path>
            </svg>
        )
    },
    {
        title: "Software\nDevelopment",
        color: "bg-[#A17C6B]",
        textColor: "text-white",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        )
    }
];

export default function ServicesCards() {
    return (
        <div className="hidden md:flex relative z-30 w-full -mt-28 px-12 justify-center lg:-mt-22">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-7xl">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        className={`${service.color} ${service.textColor} rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:-translate-y-1`}
                    >
                        <div className="mb-3 md:mb-4">
                            {service.icon}
                        </div>
                        <h3 className="font-semibold text-[13px] md:text-[15px] lg:text-[16px] leading-[1.3] whitespace-pre-line">
                            {service.title}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
