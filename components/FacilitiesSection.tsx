"use client";

import React from "react";
import Image from "next/image";
import { Play, Monitor, Wifi, FileBadge, UserCheck, Award, Laptop } from "lucide-react";

export default function FacilitiesSection() {
    const facilities = [
        {
            Icon: Monitor,
            title: "Modern Computer Lab",
            description:
                "Our labs are equipped with high-performance workstations optimized for coding, graphic design, and advanced software development.",
        },
        {
            Icon: Wifi,
            title: "High-Speed WiFi",
            description:
                "Enjoy seamless campus-wide high-speed internet access to support your research, online learning, and real-time collaboration.",
        },
        {
            Icon: UserCheck,
            title: "Industry Qualified Tutors",
            description:
                "Learn directly from certified professionals and experts with extensive real-world experience in the global tech industry.",
        },
        {
            Icon: FileBadge,
            title: "Global Certification",
            description:
                "Earn internationally recognized certifications that validate your skills and significantly enhance your career prospects worldwide.",
        },
        {
            Icon: Laptop,
            title: "Hands-on Projects",
            description:
                "Apply your knowledge to real-world scenarios through industrial projects that help you build a professional portfolio.",
        },
    ];

    const bgColors = ["#045A86", "#019977", "#E0F2E9", "#CEB5A7", "#A17C6B"];
    const iconColors = ["text-white", "text-white", "text-[#019977]", "text-[#045A86]", "text-white"];

    return (
        <section className="flex flex-col md:flex-row w-full">
            {/* Left side with image */}
            <div className="md:w-1/2 relative min-h-[400px] md:min-h-[auto] w-full">
                <Image
                    src="/image1.png"
                    alt="Library"
                    fill
                    className="object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-[#FFB606] h-20 w-20 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-xl text-white">
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </button>
                </div>
            </div>

            {/* Right side with facilities */}
            <div
                className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                style={{ backgroundColor: "#E6EFEA" }}
            >
                <h2 className="text-3xl md:text-[40px] font-bold mb-10 text-gray-900 leading-tight">
                    Our Facilities
                </h2>
 
                <div className="space-y-8">
                    {facilities.map((facility, index) => {
                        const IconComponent = facility.Icon;
                        return (
                            <div key={index} className="flex gap-5 items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div 
                                        className="w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-md"
                                        style={{ backgroundColor: bgColors[index % bgColors.length] }}
                                    >
                                        <IconComponent className={`w-5 h-5 ${iconColors[index % iconColors.length]}`} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                                        {facility.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
