"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useMemo } from "react";

export type CourseItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  meta: { label: string; value: string }[];
  action: string;
  link?: string;
  image: string;
  videoSrc?: string;
  theme: string;
  actionDisabled?: boolean;
  note?: string;
};

type CourseCardProps = {
  item: CourseItem;
  reversed: boolean;
  customBg?: string;
  iconPrefix?: string;
  islast?: boolean;
};

export default function CourseCard({
  item,
  reversed,
  customBg,
  iconPrefix,
  islast,
}: CourseCardProps) {
  const isGreenTheme = item.theme === "green";
  const bgColor = customBg ? "" : isGreenTheme ? "bg-[#E4F3EF]" : "bg-[#F7FAF9]";

  const isExternal = useMemo(() => {
    if (!item.videoSrc) return false;
    return (
      item.videoSrc.includes("vimeo.com") ||
      item.videoSrc.includes("youtube.com") ||
      item.videoSrc.includes("youtu.be")
    );
  }, [item.videoSrc]);


  return (
    <div
      className={`mx-auto h-full w-full overflow-hidden rounded-2xl p-2 sm:py-5 md:rounded-3xl md:py-5 lg:px-10 lg:py-20 ${bgColor}`}
      style={customBg ? { backgroundColor: customBg } : undefined}
    >
      <div className={`flex h-full flex-col-reverse p-5 ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className={`flex h-full w-full flex-col justify-between lg:w-1/2 ${reversed ? "lg:pl-10 xl:pl-15" : "lg:pr-10 xl:pr-15"}`}>
          <div>
            <div className="mb-2 inline-flex rounded-full border border-[#D8E5EB] bg-[#E6EEF3] px-3 py-1.5 sm:mt-2 sm:py-1.5 lg:mt-0 lg:py-1.5 xl:py-[6.8px] 2xl:py-2.5">
              <span className="flex items-center text-[11px] leading-none font-bold tracking-wider text-[#045A86] uppercase md:pt-0.5 md:text-[11px] lg:text-[13px]">
                {item.tag}
              </span>
            </div>

            <h2 className="mb-2 text-[1.4rem] leading-[1.1] font-bold tracking-tight text-black lg:mb-3 lg:text-[1.5rem] xl:text-[1.6rem]">
              {item.title}
            </h2>

            <p className="mt-4 mb-8 whitespace-pre-wrap text-[13px] leading-[1.3] text-[#00000099] lg:text-[15px] xl:text-[16px]">
              {item.description}
            </p>

            <ul className="space-y-2 lg:space-y-2.5 xl:space-y-[11.2px] 2xl:space-y-3">
              {item.features.map((feature, idx) => {
                const iconPath = iconPrefix
                  ? `/images/${iconPrefix}_${idx + 1}.svg`
                  : `/images/${["target.png", "users.png", "globe.png", "laptop.png"][idx % 4]}`;

                return (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="relative h-4 w-4 shrink-0 lg:h-5 lg:w-5">
                      <Image src={iconPath} alt="" width={20} height={20} className="object-contain" />
                    </div>
                    <span className="text-[14px] text-[#00000099] md:text-[14px] lg:text-[14px]">{feature}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-full">
            <div className="mt-10 mb-4 border-t border-black/5" />

            <div className="mb-2 flex flex-col gap-2 lg:mb-4 lg:gap-2 xl:mb-8">
              {item.meta.map((metaItem, idx) => {
                const isDuration = metaItem.label.toLowerCase().includes("duration");
                let iconName = isDuration ? "clock.svg" : "graduation.svg";

                if (iconPrefix === "pro3") {
                  iconName = idx === 0 ? "format.svg" : "key.svg";
                }

                return (
                  <div key={`${metaItem.label}-${metaItem.value}`} className="grid grid-cols-[110px_1fr] items-start gap-1 lg:grid-cols-[140px_1fr]">
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="relative h-4 w-4 shrink-0 lg:h-5 lg:w-5">
                        <Image src={`/images/${iconName}`} alt="" width={20} height={20} className="object-contain" />
                      </div>
                      <span className="text-[15px] font-bold text-black md:text-[14px]">
                        {metaItem.label}
                        {!metaItem.label.includes(":") && ":"}
                      </span>
                    </div>

                    <span className="text-[15px] text-[#00000099] md:text-sm">{metaItem.value}</span>
                  </div>
                );
              })}
            </div>

            {item.link ? (
              item.link.startsWith("http") ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button disabled={item.actionDisabled} islast={islast} className="w-full">
                    {item.action}
                  </Button>
                </a>
              ) : (
                <Link href={item.link} className="block w-full">
                  <Button disabled={item.actionDisabled} islast={islast} className="w-full">
                    {item.action}
                  </Button>
                </Link>
              )
            ) : (
              <Button islast={islast} className="w-full">
                {item.action}
              </Button>
            )}

            {item.note && <p className="mt-2.5 text-center text-xs text-[#00000099]">{item.note}</p>}
          </div>
        </div>

        <div 
          dir="ltr" 
          className="relative mb-4 h-full min-h-[300px] w-full overflow-hidden rounded-2xl bg-black md:mb-0 md:min-h-[400px] md:rounded-xl lg:min-h-[500px] lg:w-1/2"
        >
          {/* Poster layer (background) */}
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className={`object-cover object-center ${islast ? "sm:object-[center_30%] md:object-[center_20%] lg:object-center" : "sm:object-[center_40%] md:object-[center_40%] lg:object-[center_60%]"}`}
            />
          )}

          {/* External Video layer */}
          {item.videoSrc && isExternal && (
            <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden bg-black opacity-100">
              <iframe
                src={item.videoSrc}
                title={item.title || "Video"}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute border-0 pointer-events-none"
                style={{ width: "160%", height: "160%", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
              />
            </div>
          )}

          {/* Native Video layer */}
          {item.videoSrc && !isExternal && (
            <video
              src={item.videoSrc}
              className="absolute inset-0 h-full w-full object-cover z-10 opacity-100"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          )}
        </div>
      </div>
    </div>
  );
}