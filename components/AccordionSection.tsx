"use client";

import React, { useMemo, useState } from "react";

export default function AccordionSection({
  title,
  color,
  isRtl = false,
  defaultOpen = true,
  children,
  onToggle,
  isOpen,
  headerRef,
}: {
  title: string;
  color: string;
  isRtl?: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
  onToggle?: (isOpen: boolean) => void;
  isOpen?: boolean;
  headerRef?: React.RefObject<HTMLButtonElement | null>;
}) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = typeof isOpen !== "undefined";
  const open = isControlled ? isOpen : internalOpen;

  const icon = useMemo(() => {
    if (!open) return "+";
    return isRtl ? "—" : "−";
  }, [open, isRtl]);

  const handleToggle = () => {
    const newState = !open;
    if (!isControlled) {
      setInternalOpen(newState);
    }
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="relative pb-10 group/accordion">
      <div className="relative">
        <button
          ref={headerRef}
          type="button"
          onClick={handleToggle}
          className={`relative z-10 flex w-full cursor-pointer items-center pb-4 text-start ${
            isRtl
              ? "justify-start gap-6 lg:justify-between lg:gap-4"
              : "justify-between gap-4"
          }`}
          style={{ borderBottom: `3.4px solid ${color}` }}
        >
          {isRtl ? (
            <>
              <span
                className={`select-none text-[18px] font-semibold md:text-[20px] 3xl:text-[38px]! lg:order-2 ${
                  isRtl ? "order-1" : ""
                }`}
                style={{ color }}
              >
                {icon}
              </span>
              <h2
                className={`text-[18px] font-semibold md:text-[20px] 3xl:text-[38px]! lg:order-1 ${
                  isRtl ? "order-2" : ""
                }`}
                style={{ color }}
              >
                {title}
              </h2>
            </>
          ) : (
            <>
              <h2
                className="text-[18px] font-semibold md:text-[20px] 3xl:text-[38px]!"
                style={{ color }}
              >
                {title}
              </h2>
              <span
                className="select-none text-[18px] font-semibold md:text-[20px] 3xl:text-[38px]!"
                style={{ color }}
              >
                {icon}
              </span>
            </>
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative pt-6">{children}</div>
      </div>
    </div>
  );
}