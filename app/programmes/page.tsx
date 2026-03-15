import { Suspense } from "react";
import ContactSection from "@/components/ContactSection";
import TagPill from "@/components/TagPill";
import ProgramsListClient from "@/app/programmes/ProgramsListClient";
import ProgramsListSkeleton from "@/app/programmes/ProgramsListSkeleton";
import type { CourseItem } from "@/components/CourseCard";

const programs = {
  hero: {
    pill: "OUR COURSES",
    title: "Educational Courses",
    subtitle: "designed for every stage of your career",
    description:
      "From aspiring creatives to technical professionals, our programs help shape future-ready experts who can deliver real impact across digital industries and modern development.",
  },
  items: [
    {
      id: "graphic-design",
      tag: "FOR CREATIVE AND ASPIRING ARTISTS",
      title: "Graphic Designing",
      description:
        "Master the art of visual storytelling through our comprehensive graphic design course. We combine creative theory with technical mastery of industry tools to help you create compelling branding and digital assets.",
      features: [
        "Expert UI/UX design training",
        "Adobe Creative Suite mastery",
        "Brand identity development",
        "Portfolio building sessions",
      ],
      meta: [
        { label: "Duration:", value: "6 months | Practical" },
        { label: "Outcome:", value: "Professional Portfolio + Certificate" },
      ],
      action: "Apply now",
      link: "/contact",
      image: "/images/graphicdesigner1.jpg",
      videoSrc: "https://player.vimeo.com/video/1173578653?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0",
      theme: "white",
    },
    {
      id: "basic-computer",
      tag: "FOR BEGINNERS AND OFFICE PROFESSIONALS",
      title: "Basic Computer",
      description:
        "Build a strong foundation in digital literacy with our essential computer skills program. Master core productivity software, operating systems, and internet safety to gain confidence in using modern business technology.",
      features: [
        "Microsoft Office Suite proficiency",
        "Operating system fundamentals",
        "Internet safety and etiquette",
        "Typing speed and data entry",
      ],
      meta: [
        { label: "Duration:", value: "3 months | Intensive" },
        { label: "Outcome:", value: "Digital Literacy Certification" },
      ],
      action: "Apply now",
      link: "/contact",
      image: "/images/basiccomputer.jpg",
      videoSrc: "https://player.vimeo.com/video/1173693745?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0",
      theme: "white",
    },
    {
      id: "web-development",
      tag: "FOR ASPIRING TECH PROFESSIONALS",
      title: "Web Development",
      description:
        "Transform into a full-stack developer through our immersive web technologies program. Learn modern coding languages and frameworks to build responsive, high-performance websites that meet today's industry demands.",
      features: [
        "Frontend & Backend technologies",
        "Responsive design principles",
        "Database management systems",
        "API integration and deployment",
      ],
      meta: [
        { label: "Duration:", value: "8 months | Project-based" },
        { label: "Outcome:", value: "Full-Stack Developer Certification" },
      ],
      action: "Apply now",
      link: "/contact",
      image: "/images/webdeveloper1.jpg",
      videoSrc: "https://player.vimeo.com/video/1173578563?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0",
      theme: "green",
    },
  ] satisfies CourseItem[],
  contact: {
    titleLine1: "Unsure which Course ",
    titleaboutline1: "is",
    titleLine2: "right for you?",
    description:
      "Explore in more detail by reaching out to our team. We're here to guide your educational journey",
    button: "Contact us",
  },
};

export default function ProgrammesPage() {
  return (
    <>
      <section className="mt-20 bg-white px-4 pt-20 pb-10 md:mt-0">
        <div className="mx-auto mb-10 flex max-w-6xl flex-col items-center space-y-4 text-center md:mt-0 md:space-y-8">
          <TagPill label={programs.hero.pill} />

          <h1 className="whitespace-pre-wrap text-black">
            <span className="block text-[40px] leading-[1.1] font-extrabold md:text-[3.5rem] md:-tracking-[0.05rem]">
              {programs.hero.title}
            </span>
            <span className="mx-auto block text-4xl leading-[1.1] font-normal md:text-[2.5rem] md:-tracking-[0.06rem] lg:max-w-120 xl:max-w-120 2xl:max-w-122.5">
              {programs.hero.subtitle}
            </span>
          </h1>

          <p className="max-w-xl whitespace-pre-wrap text-[13px] leading-[1.3] text-[#00000099] md:text-base">
            {programs.hero.description}
          </p>
        </div>
      </section>

      <Suspense fallback={<ProgramsListSkeleton />}>
        <ProgramsListClient items={programs.items} />
      </Suspense>

      <div className="relative z-50 bg-white md:-mt-[50vh]">
        <ContactSection
          titleClassName="mx-auto max-w-80 md:max-w-full"
          descriptionClassName="max-w-[210px] md:max-w-[200px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[495px]"
          titleaboutline1={programs.contact.titleaboutline1}
          titleLine1={programs.contact.titleLine1}
          titleLine2={programs.contact.titleLine2}
          description={programs.contact.description}
          button={programs.contact.button}
          href="/contact"
        />
      </div>
    </>
  );
}