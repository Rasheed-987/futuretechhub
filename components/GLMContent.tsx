"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image, { type StaticImageData } from "next/image";
import AccordionSection from "@/components/AccordionSection";

type GLMItem = {
  title: string;
  description: string;
  icon?: string | StaticImageData;
};

type GLMData = {
  leadershipSpirit: {
    title: string;
    items: GLMItem[];
  };
  futureOutlook: {
    title: string;
    items: GLMItem[];
  };
  achievementsImpact: {
    title: string;
    items: GLMItem[];
  };
};

type Props = {
  glm: GLMData;
  earth: string | StaticImageData;
  leadershipContent: React.ReactNode;
  futureContent: React.ReactNode;
  achievementsContent: React.ReactNode;
  lang?: string;
};

const MobileLine = ({
  color,
  type,
  isRtl,
}: {
  color: string;
  type: "full" | "start" | "none";
  isRtl?: boolean;
}) => {
  if (type === "none") return <div className="h-full w-[3px] bg-transparent" />;

  return (
    <div className="relative flex h-full w-[3px] flex-col items-center">
      <div
        className="w-full"
        style={{
          backgroundColor: color,
          height: type === "start" ? "45px" : "100%",
        }}
      />

      {type === "start" && (
        <div
          className="absolute h-[2.5px]"
          style={{
            width: color === "#059669" ? "68px" : "36px",
            backgroundColor: color,
            [isRtl ? "right" : "left"]: "1px",
            top: "44.4px",
            transform: "translateY(-50%)",
          }}
        />
      )}
    </div>
  );
};

const MobileSectionLayout = ({
  children,
  activeColor,
  isRtl,
}: {
  children: React.ReactNode;
  activeColor: string;
  isRtl: boolean;
}) => {
  const RED = "#E11D48";
  const BLACK = "#111827";
  const GREEN = "#059669";

  const lines = [
    {
      color: GREEN,
      type:
        activeColor === GREEN
          ? "start"
          : activeColor === BLACK || activeColor === RED
            ? "full"
            : "none",
      left: "-4px",
    },
    {
      color: BLACK,
      type:
        activeColor === BLACK ? "start" : activeColor === RED ? "full" : "none",
      left: "28px",
    },
    { color: RED, type: activeColor === RED ? "start" : "none", left: "52px" },
  ];

  return (
    <div className="-mt-[4px] flex min-h-[100px] gap-0 lg:hidden">
      <div className="relative w-[60px] shrink-0 pt-0">
        {lines.map((line, index) => (
          <div
            key={index}
            className="absolute top-0 h-full"
            style={{ [isRtl ? "right" : "left"]: line.left }}
          >
            <MobileLine
              color={line.color}
              type={line.type as "full" | "start" | "none"}
              isRtl={isRtl}
            />
          </div>
        ))}
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
};

const MobileGlobeConnector = ({ isRtl }: { isRtl: boolean }) => {
  return (
    <div className="flex h-[120px] items-end justify-start pt-0 pb-0 lg:hidden">
      <div className="relative -mt-[4px] h-full w-[60px] shrink-0">
        <div
          className="absolute h-full w-[3px] bg-[#059669]"
          style={{ [isRtl ? "right" : "left"]: "-4px" }}
        />
        <div
          className="absolute h-full w-[3px] bg-[#111827]"
          style={{ [isRtl ? "right" : "left"]: "28px" }}
        />
        <div
          className="absolute h-full w-[3px] bg-[#E11D48]"
          style={{ [isRtl ? "right" : "left"]: "52px" }}
        />
      </div>
    </div>
  );
};

export default function GLMContent({
  glm,
  earth,
  leadershipContent,
  futureContent,
  achievementsContent,
  lang = "en",
}: Props) {
  const isRtl = lang === "ar";
  const RED = "#E11D48";
  const BLACK = "#111827";
  const GREEN = "#059669";

  const [mounted, setMounted] = useState(false);
  const [openStates, setOpenStates] = useState({
    leadership: true,
    future: false,
    achievements: false,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef1 = useRef<HTMLDivElement>(null);
  const dotRef2 = useRef<HTMLDivElement>(null);
  const dotRef3 = useRef<HTMLDivElement>(null);
  const headerRef1 = useRef<HTMLButtonElement>(null);
  const headerRef2 = useRef<HTMLButtonElement>(null);
  const headerRef3 = useRef<HTMLButtonElement>(null);

  const [paths, setPaths] = useState({
    leadership: "",
    future: "",
    achievements: "",
  });

  const updatePaths = useCallback(() => {
    if (!containerRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();

    const getPath = (
      dot: React.RefObject<HTMLDivElement | null>,
      header: React.RefObject<HTMLButtonElement | null>
    ) => {
      if (!dot.current || !header.current) return "";

      const dRect = dot.current.getBoundingClientRect();
      const hRect = header.current.getBoundingClientRect();

      const x1 = dRect.left + dRect.width / 2 - cRect.left;
      const y1 = dRect.top + dRect.height / 2 - cRect.top;
      const x2 = isRtl ? hRect.right - cRect.left : hRect.left - cRect.left;
      const y2 = hRect.top + hRect.height - 1.9 - cRect.top;

      return `M ${x1} ${y1} L ${x2} ${y2}`;
    };

    setPaths({
      leadership: getPath(dotRef1, headerRef1),
      future: getPath(dotRef2, headerRef2),
      achievements: getPath(dotRef3, headerRef3),
    });
  }, [isRtl]);

  useLayoutEffect(() => {
    setMounted(true);

    const rafId = requestAnimationFrame(() => {
      updatePaths();
      const timer = setTimeout(updatePaths, 300);
      return () => clearTimeout(timer);
    });

    window.addEventListener("resize", updatePaths);

    return () => {
      window.removeEventListener("resize", updatePaths);
      cancelAnimationFrame(rafId);
    };
  }, [openStates, updatePaths]);

  useEffect(() => {
    if (!mounted) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updatePaths();
      });
    });
  }, [mounted, updatePaths]);

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(updatePaths);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updatePaths]);

  return (
    <div
      ref={containerRef}
      dir={isRtl ? "rtl" : "ltr"}
      className={`relative flex flex-col items-start gap-0 lg:min-h-[640px] lg:gap-0 lg:pt-20 ${
        isRtl ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {mounted && (
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          style={{ zIndex: 11 }}
        >
          <path d={paths.leadership} stroke={RED} strokeWidth="3" fill="none" />
          <path d={paths.future} stroke={BLACK} strokeWidth="3" fill="none" />
          <path d={paths.achievements} stroke={GREEN} strokeWidth="3" fill="none" />
        </svg>
      )}

      <div
        className={`flex w-full ${
          isRtl ? "justify-start pr-4" : "justify-start pl-4"
        } lg:absolute lg:top-20 lg:w-auto lg:justify-start lg:px-0 ${
          isRtl
            ? "lg:-right-[200px] xl:lg:-right-[250px] 2xl:lg:-right-[300px]"
            : "lg:-left-[200px] xl:lg:-left-[250px] 2xl:lg:-left-[300px]"
        }`}
      >
        <div className="relative aspect-square w-[320px] overflow-visible md:w-[380px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]">
          <div className="absolute inset-0 overflow-hidden rounded-full bg-white shadow-lg">
            <Image
              src={earth}
              alt="Globe"
              fill
              className="animate-spin-slow object-cover"
              priority
            />
          </div>
          <div className="absolute -inset-5 rounded-full border-2 border-[#EDEDED] shadow-inner" />

          <div
            ref={dotRef1}
            className="absolute hidden h-3 w-3 rounded-full bg-[#E11D48] shadow-md lg:block"
            style={{
              top: "20%",
              [isRtl ? "left" : "right"]: "6%",
              transform: `translate(${isRtl ? "-50%" : "50%"}, -50%)`,
            }}
          />
          <div
            ref={dotRef2}
            className="absolute hidden h-3 w-3 rounded-full bg-[#111827] shadow-md lg:block"
            style={{
              top: "42%",
              [isRtl ? "left" : "right"]: "-2.7%",
              transform: `translate(${isRtl ? "-50%" : "50%"}, -50%)`,
            }}
          />
          <div
            ref={dotRef3}
            className="absolute hidden h-3 w-3 rounded-full bg-[#059669] shadow-md lg:block"
            style={{
              top: "72%",
              [isRtl ? "left" : "right"]: "1.4%",
              transform: `translate(${isRtl ? "-50%" : "50%"}, -50%)`,
            }}
          />

          <div className="lg:hidden">
            <div
              className="absolute z-10 w-[3px] bg-[#059669]"
              style={{
                top: "126px",
                bottom: "-4px",
                [isRtl ? "right" : "left"]: "-20px",
              }}
            />
            <div
              className="absolute z-20 h-3 w-3 rounded-full bg-[#059669] shadow-md"
              style={{
                top: "126px",
                [isRtl ? "right" : "left"]: "-25px",
                transform: "translateY(-50%)",
              }}
            />

            <div
              className="absolute z-10 w-[3px] bg-[#111827]"
              style={{
                top: "264px",
                bottom: "-4px",
                [isRtl ? "right" : "left"]: "12px",
              }}
            />
            <div
              className="absolute z-20 h-3 w-3 rounded-full bg-[#111827] shadow-md"
              style={{
                top: "264px",
                [isRtl ? "right" : "left"]: "7px",
                transform: "translateY(-50%)",
              }}
            />

            <div
              className="absolute z-10 w-[3px] bg-[#E11D48]"
              style={{
                top: "291px",
                bottom: "-4px",
                [isRtl ? "right" : "left"]: "36px",
              }}
            />
            <div
              className="absolute z-20 h-3 w-3 rounded-full bg-[#E11D48] shadow-md"
              style={{
                top: "291px",
                [isRtl ? "right" : "left"]: "31px",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </div>
      </div>

      <div
        className={`w-full ${
          isRtl
            ? "lg:mr-[400px] xl:lg:mr-[500px] 2xl:lg:mr-[600px]"
            : "lg:ml-[400px] xl:lg:ml-[500px] 2xl:lg:ml-[600px]"
        }`}
      >
        <MobileGlobeConnector isRtl={isRtl} />

        <div>
          <div className="hidden lg:block">
            <AccordionSection
              title={glm.leadershipSpirit.title}
              color={RED}
              isRtl={isRtl}
              isOpen={openStates.leadership}
              headerRef={headerRef1}
              onToggle={(open) => {
                if (open) {
                  setOpenStates({ leadership: true, future: false, achievements: false });
                } else {
                  setOpenStates((state) => ({ ...state, leadership: false }));
                }
              }}
            >
              {leadershipContent}
            </AccordionSection>
          </div>
          <div className="lg:hidden">
            <MobileSectionLayout activeColor={RED} isRtl={isRtl}>
              <AccordionSection
                title={glm.leadershipSpirit.title}
                color={RED}
                isRtl={isRtl}
                isOpen={openStates.leadership}
                onToggle={(open) => {
                  if (open) {
                    setOpenStates({ leadership: true, future: false, achievements: false });
                  } else {
                    setOpenStates((state) => ({ ...state, leadership: false }));
                  }
                }}
              >
                {leadershipContent}
              </AccordionSection>
            </MobileSectionLayout>
          </div>
        </div>

        <div>
          <div className="hidden lg:block">
            <AccordionSection
              title={glm.futureOutlook.title}
              color={BLACK}
              isRtl={isRtl}
              isOpen={openStates.future}
              headerRef={headerRef2}
              onToggle={(open) => {
                if (open) {
                  setOpenStates({ leadership: false, future: true, achievements: false });
                } else {
                  setOpenStates((state) => ({ ...state, future: false }));
                }
              }}
            >
              {futureContent}
            </AccordionSection>
          </div>
          <div className="lg:hidden">
            <MobileSectionLayout activeColor={BLACK} isRtl={isRtl}>
              <AccordionSection
                title={glm.futureOutlook.title}
                color={BLACK}
                isRtl={isRtl}
                isOpen={openStates.future}
                onToggle={(open) => {
                  if (open) {
                    setOpenStates({ leadership: false, future: true, achievements: false });
                  } else {
                    setOpenStates((state) => ({ ...state, future: false }));
                  }
                }}
              >
                {futureContent}
              </AccordionSection>
            </MobileSectionLayout>
          </div>
        </div>

        <div>
          <div className="hidden lg:block">
            <AccordionSection
              title={glm.achievementsImpact.title}
              color={GREEN}
              isRtl={isRtl}
              isOpen={openStates.achievements}
              headerRef={headerRef3}
              onToggle={(open) => {
                if (open) {
                  setOpenStates({ leadership: false, future: false, achievements: true });
                } else {
                  setOpenStates((state) => ({ ...state, achievements: false }));
                }
              }}
            >
              {achievementsContent}
            </AccordionSection>
          </div>
          <div className="lg:hidden">
            <MobileSectionLayout activeColor={GREEN} isRtl={isRtl}>
              <AccordionSection
                title={glm.achievementsImpact.title}
                color={GREEN}
                isRtl={isRtl}
                isOpen={openStates.achievements}
                onToggle={(open) => {
                  if (open) {
                    setOpenStates({ leadership: false, future: false, achievements: true });
                  } else {
                    setOpenStates((state) => ({ ...state, achievements: false }));
                  }
                }}
              >
                {achievementsContent}
              </AccordionSection>
            </MobileSectionLayout>
          </div>
        </div>
      </div>
    </div>
  );
}