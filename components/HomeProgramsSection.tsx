import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InteractiveCourseCard from "@/components/InteractiveCourseCard";

const programs = [
  {
    tag: "FOR CREATIVE AND ASPIRING ARTISTS",
    title: "Graphic Designing",
    description:
      "Master the art of visual storytelling through our comprehensive graphic design course. We combine creative theory with technical mastery of industry tools to help you create compelling branding and digital assets.",
    hoverDescription:
      "Perfect for aspiring designers looking to master UI/UX, branding, and digital illustration using industry-standard tools.",
    backgroundImage: "/images/graphicdesigner1.jpg",
  },
  {
    tag: "FOR BEGINNERS AND OFFICE PROFESSIONALS",
    title: "Basic Computer",
    description:
      "Build a strong foundation in digital literacy with our essential computer skills program. Master core productivity software, operating systems, and internet safety to gain confidence in using modern business technology.",
    hoverDescription:
      "Ideal for beginners and office professionals aiming to enhance their productivity through essential computing and software mastery.",
    backgroundImage: "/images/basiccomputer.jpg",
  },
  {
    tag: "FOR ASPIRING TECH PROFESSIONALS",
    title: "Web Development",
    description:
      "Transform into a full-stack developer through our immersive web technologies program. Learn modern coding languages and frameworks to build responsive, high-performance websites that meet today's industry demands.",
    hoverDescription:
      "Designed for tech enthusiasts wanting to build modern, responsive web applications using the latest frontend and backend frameworks.",
    backgroundImage: "/images/webdeveloper1.jpg",
  },
];

export default function HomeProgramsSection() {
  return (
    <section className="mt-20 bg-white pb-20 pt-10 md:mt-24 md:pb-24 md:pt-16">
      <div className="mx-auto px-6">
        <FadeIn>
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 flex flex-col items-center gap-2">
            <p className="mb-1 text-[14px] font-bold tracking-widest text-transparent uppercase leading-none bg-brand-gradient bg-clip-text 2xl:text-base 3xl:text-[19px]!">
              OUR COURSES
            </p>
            <div className="mb-3">
              <Image
                src="/images/bar.png"
                alt="Section divider"
                width={80}
                height={4}
                className="h-auto w-20"
              />
            </div>
          </div>

          <h2 className="mt-3 max-w-2xl text-[24px] font-normal leading-tight tracking-tight xl:text-[28px] lg:text-[22px] 2xl:text-[28.5px] 3xl:max-w-220! 3xl:text-[38px]!">
            <span className="inline-block bg-brand-gradient bg-clip-text text-transparent">
              <span className="font-extrabold">Educational Courses </span>
              designed for every stage of your career
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-black/60 3xl:text-[20px]">
            From aspiring creatives to technical professionals, these programs help shape future-ready experts who can deliver real impact across digital industries and modern development.
          </p>
        </div>

        </FadeIn>

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <FadeIn key={program.title} delay={index * 0.15} duration={1} yOffset={60}>
              <InteractiveCourseCard
                program={program}
                isInteractive={true}
                backgroundImage={program.backgroundImage}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex justify-center md:mt-14">
          <Link href="/programmes" className="w-full md:w-fit">
            <Button className="w-full bg-brand-green! md:w-fit">
              Explore all Courses
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
