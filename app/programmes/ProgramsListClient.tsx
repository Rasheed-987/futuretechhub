"use client";

import { useRef } from "react";
import CourseCard, { type CourseItem } from "@/components/CourseCard";

type ProgramsListClientProps = {
    items: CourseItem[];
};

export default function ProgramsListClient({ items }: ProgramsListClientProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgs = ["#F7FAF9", "#E6EFEA", "#D2E4DA"];
// new comment
    return (
        <section ref={sectionRef} className="scroll-smooth bg-white px-4 pb-5 sm:pb-5 md:pb-8 xl:pb-9 2xl:pb-10">
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                const customBg = bgs[index % bgs.length];

                return (
                    <div
                        key={item.id}
                        className="relative mb-5 flex w-full scroll-mt-20 flex-col items-center justify-center rounded-2xl md:sticky md:top-0 md:mb-[50vh] md:h-screen"
                        style={{ zIndex: index + 1, scrollMarginTop: "5rem", backgroundColor: customBg }}
                    >
                        <div className="h-full w-full">
                            <CourseCard
                                item={item}
                                reversed={index % 2 === 0}
                                customBg={customBg}
                                iconPrefix={`pro${index + 1}`}
                                islast={isLast}
                            />
                        </div>
                    </div>
                );
            })}
        </section>
    );
}