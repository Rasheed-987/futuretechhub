import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import GLMContent from "@/components/GLMContent";

type GLMItem = {
  title: string;
  description: string;
  icon?: string | StaticImageData;
};

type GLMSection = {
  title: string;
  items: GLMItem[];
};

type GLMData = {
  hero: {
    title1: string;
    title2Bold: string;
    title3: string;
    suffix: string;
    description: string;
  };
  leadershipSpirit: GLMSection;
  futureOutlook: GLMSection;
  achievementsImpact: GLMSection;
};

const glm: GLMData = {
  hero: {
    title1: "Futuretech's New",
    title2Bold: "Excellence",
    title3: "Model",
    suffix: "(FEM)",
    description:
      "Our comprehensive educational framework designed to equip students with core industry skills in graphic design, computer literacy, and modern web development.",
  },
  leadershipSpirit: {
    title: "Expert spirit",
    items: [
      {
        title: "Practical empowerment",
        description:
          "Reinforces technical capabilities through hands-on practice, ensuring students can effectively leverage industry-standard tools and frameworks with confidence.",
        icon: "/images/sp3.png",
      },
      {
        title: "Global awareness",
        description:
          "Remains open to international design aesthetics and tech trends, fostering a well-rounded understanding of global industry standards and relationships.",
        icon: "/images/sp1.png",
      },
      {
        title: "Professional excellence",
        description:
          "Demonstrates integrity and meticulous attention to detail while promoting high-quality standards in every project and digital asset created.",
        icon: "/images/sp2.png",
      },
    ],
  },
  futureOutlook: {
    title: "Future outlook",
    items: [
      {
        title: "Mastery of modern tech",
        description:
          "Expertly leverages cutting-edge tools such as React, AI, and Adobe Creative Cloud to build sophisticated digital solutions that meet global industry standards.",
        icon: "/images/fo1.png",
      },
      {
        title: "Industry-ready vision",
        description:
          "Anticipates emerging digital trends and prepares for the next wave of tech innovation through strategic foresight and deep technical analysis of market needs.",
        icon: "/images/fo2.png",
      },
      {
        title: "Continuous evolution",
        description:
          "Dedicated to mastering new frameworks and design patterns, ensuring that technical skills remain relevant and competitive in the rapidly changing tech landscape.",
        icon: "/images/fo4.png",
      },
      {
        title: "Digital innovation",
        description:
          "Drives creative problem-solving with an entrepreneurial spirit, developing unique projects that disrupt traditional digital boundaries and user experiences.",
        icon: "/images/fo3.png",
      },
    ],
  },
  achievementsImpact: {
    title: "Achievements and impact",
    items: [
      {
        title: "Portfolio excellence",
        description:
          "Delivers production-ready projects that demonstrate practical mastery of design principles and modern engineering workflows for real-world digital impact.",
        icon: "/images/ai1.png",
      },
      {
        title: "Technical proficiency",
        description:
          "Implements clean, scalable code and optimized design structures that result in high-performance digital products and seamless user interactions.",
        icon: "/images/ai2.png",
      },
      {
        title: "Impactful career growth",
        description:
          "Translates technical education into tangible professional success, adding significant value to the global digital economy through innovative contributions.",
        icon: "/images/ai3.png",
      },
    ],
  },
};

const Item = ({ color, item }: { color: string; item: GLMItem }) => (
  <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
    <div className="flex h-16 w-16 shrink-0 items-center justify-center md:h-12 md:w-12 3xl:h-14 3xl:w-14">
      {item.icon ? (
        <Image
          src={item.icon}
          alt={item.title}
          width={48}
          height={48}
          className="h-11 w-11 object-contain md:h-full md:w-full"
        />
      ) : null}
    </div>

    <div className="min-w-0 flex-1">
      <p
        className="text-[19px] font-bold leading-tight md:text-[16px] 3xl:text-[20px]!"
        style={{ color }}
      >
        {item.title}
      </p>
      <p className="mt-3 max-w-[98%] text-[16.5px] leading-[1.6] text-[#00000099] md:mt-2.5 md:text-[13.5px] 3xl:text-[20px]!">
        {item.description}
      </p>
    </div>
  </div>
);

export default function LeadershipModelPage() {
  const RED = "#E11D48";
  const BLACK = "#111827";
  const GREEN = "#059669";

  const leadershipContent = (
    <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 md:gap-9">
      <Item color={RED} item={glm.leadershipSpirit.items[0]} />
      <Item color={RED} item={glm.leadershipSpirit.items[2]} />
      <div className="md:col-span-2 max-w-130">
        <Item color={RED} item={glm.leadershipSpirit.items[1]} />
      </div>
    </div>
  );

  const futureContent = (
    <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 md:gap-9">
      {glm.futureOutlook.items.map((item, index) => (
        <Item key={index} color={BLACK} item={item} />
      ))}
    </div>
  );

  const achievementsContent = (
    <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 md:gap-9">
      {glm.achievementsImpact.items.map((item, index) => (
        <Item key={index} color={GREEN} item={item} />
      ))}
    </div>
  );

  return (
    <>
      <section className="pb-8 pt-16 md:pt-20">
        <Container className="max-w-500 px-4">
          <div className="mx-auto max-w-230 text-center text-black">
          
            <h1 className="mt-9 mb-6 leading-[1.3]">
              <span className="block text-3xl font-medium md:text-5xl 3xl:text-[76px]!">
                {glm.hero.title1} <span className="font-extrabold">{glm.hero.title2Bold}</span>
              </span>
              <span className="block text-3xl font-extrabold md:text-5xl 3xl:text-[76px]!">
                {glm.hero.title3} <span className="font-semibold text-black">{glm.hero.suffix}</span>
              </span>
            </h1>
            <p className="mx-auto max-w-180 text-base leading-7 text-[#00000099] md:text-lg">
              {glm.hero.description}
            </p>
           
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24 lg:overflow-x-clip">
        <Container className="max-w-500 px-4 lg:overflow-visible">
          <GLMContent
            glm={glm}
            earth="/images/leadership-model/earth.png"
            leadershipContent={leadershipContent}
            futureContent={futureContent}
            achievementsContent={achievementsContent}
            lang="en"
          />
        </Container>
      </section>
    </>
  );
}