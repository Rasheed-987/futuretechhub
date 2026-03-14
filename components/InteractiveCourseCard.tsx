"use client";

import Image from "next/image";
import { useState } from "react";

type ProgramCardProps = {
  program: {
    tag: string;
    title: string;
    title1?: string;
    description: string;
    hoverDescription?: string;
  };
  isInteractive: boolean;
  backgroundImage: string;
  labels?: {
    expand: string;
    close: string;
  };
};

export default function InteractiveCourseCard({
  program,
  isInteractive,
  backgroundImage,
  labels = { expand: "Expand", close: "Close" },
}: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative aspect-2/3 overflow-hidden rounded-3xl bg-brand-green md:rounded-4xl lg:aspect-3/4">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className={`object-cover transition-transform duration-500 ease-out ${
          isInteractive ? "group-hover:scale-105" : ""
        }`}
      />

      {/* Top Overlay Gradient */}
      <div
        className={`absolute inset-0 z-20 bg-linear-to-b from-black/50 via-transparent to-transparent`}
      />

      {/* Bottom Overlay Gradient */}
      <div
        className={`absolute inset-0 z-20 bg-linear-to-t from-black/60 via-transparent transition-opacity duration-500 ${
          isInteractive
            ? "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            : "opacity-100"
        } ${isExpanded ? "opacity-100" : ""}`}
      />

      <div className="pointer-events-none absolute inset-0 z-30 flex flex-col p-5 md:p-8">
        <div className="mb-4">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[10px] font-bold text-white uppercase lg:text-[9px] xl:text-[12px] 2xl:py-1.5 3xl:text-[15px]">
            {program.tag}
          </span>
        </div>

        <h3 className="text-xl font-bold leading-tight text-white lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-[38px]!">
          {program.title}
          {program.title1 ? (
            <>
              <br />
              <span>{program.title1}</span>
            </>
          ) : null}
        </h3>

        <div
          className={`mt-auto hidden transform transition-all duration-500 lg:block ${
            isInteractive
              ? "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              : "translate-y-0 opacity-100"
          }`}
        >
          <p className="max-w-[99%] text-sm leading-normal text-white/90 3xl:text-[20px]!">
            {program.hoverDescription || program.description}
          </p>
        </div>

        <div
          className={`mt-auto mb-8 transform transition-all duration-500 lg:hidden ${
            isExpanded ? "hidden translate-y-4 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <p className="line-clamp-2 max-w-[95%] text-sm leading-relaxed text-white/90">
            {program.description}
          </p>
        </div>

        {isExpanded ? (
          <div className="absolute right-8 bottom-20 left-4 mb-3 transform transition-all duration-500 lg:hidden">
            <p className="max-w-[95%] text-sm leading-relaxed text-white/90">
              {program.description}
            </p>
          </div>
        ) : null}
      </div>

      <div className="absolute right-8 bottom-6 left-5 z-40 lg:hidden">
        <button
          type="button"
          onClick={() => setIsExpanded((value) => !value)}
          className="pointer-events-auto text-sm font-bold tracking-wider text-white capitalize transition-all duration-300 hover:underline"
        >
          {isExpanded ? labels.close : labels.expand}
        </button>
      </div>
    </div>
  );
}