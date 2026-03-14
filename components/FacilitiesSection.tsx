"use client";

import React from "react";
import Image from "next/image";
import { Play, GraduationCap, BookOpen, FileBadge, UserCheck, Award } from "lucide-react";

export default function FacilitiesSection() {
    const facilities = [
        {
            Icon: GraduationCap,
            title: "Alumni Support",
            description:
                "Proin egestas odio sit amet leo aliquam rhoe. Aenean purus mauris, aliquet quis urna vitae,",
        },
        {
            Icon: BookOpen,
            title: "Books & Library",
            description:
                "Proin egestas odio sit amet leo aliquam rhoe. Aenean purus mauris, aliquet quis urna vitae,",
        },
        {
            Icon: FileBadge,
            title: "Global Certificate",
            description:
                "Proin egestas odio sit amet leo aliquam rhoe. Aenean purus mauris, aliquet quis urna vitae,",
        },
        {
            Icon: UserCheck,
            title: "Talented Teacher",
            description:
                "Proin egestas odio sit amet leo aliquam rhoe. Aenean purus mauris, aliquet quis urna vitae,",
        },
        {
            Icon: Award,
            title: "Scholarship Facility",
            description:
                "Proin egestas odio sit amet leo aliquam rhoe. Aenean purus mauris, aliquet quis urna vitae,",
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
                className="md:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center"
                style={{ backgroundColor: "#E6EFEA" }}
            >
                <h2 className="text-4xl md:text-[50px] font-bold mb-14 text-gray-900 leading-tight">
                    Our Facilities
                </h2>

                <div className="space-y-10">
                    {facilities.map((facility, index) => {
                        const IconComponent = facility.Icon;
                        return (
                            <div key={index} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div 
                                        className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md"
                                        style={{ backgroundColor: bgColors[index % bgColors.length] }}
                                    >
                                        <IconComponent className={`w-6 h-6 ${iconColors[index % iconColors.length]}`} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 text-[17px] leading-relaxed font-medium">
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
