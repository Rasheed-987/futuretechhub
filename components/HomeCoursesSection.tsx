import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InteractiveCourseCard from "@/components/InteractiveCourseCard";

const courses = [
  {
    tag: "FOR CREATIVE AND ASPIRING ARTISTS",
    title: "Graphic Designing",
    description:
      "Master the art of visual storytelling through our comprehensive graphic design course. We combine creative theory with technical mastery of industry tools to help you create compelling branding and digital assets.",
    hoverDescription:
      "Perfect for aspiring designers looking to master UI/UX, branding, and digital illustration using industry-standard tools.",
    foregroundImage: "/images/homecenter1.webp",
  },
  {
    tag: "FOR BEGINNERS AND OFFICE PROFESSIONALS",
    title: "Basic Computer",
    description:
      "Build a strong foundation in digital literacy with our essential computer skills course. Master core productivity software, operating systems, and internet safety to gain confidence in using modern business technology.",
    hoverDescription:
      "Ideal for beginners and office professionals aiming to enhance their productivity through essential computing and software mastery.",
    foregroundImage: "/images/homecenter2.webp",
  },
  {
    tag: "FOR ASPIRING TECH PROFESSIONALS",
    title: "Web Development",
    description:
      "Transform into a full-stack developer through our immersive web technologies course. Learn modern coding languages and frameworks to build responsive, high-performance websites that meet today's industry demands.",
    hoverDescription:
      "Designed for tech enthusiasts wanting to build modern, responsive web applications using the latest frontend and backend frameworks.",
    foregroundImage: "/images/homecenter3.webp",
  },
];

export default function HomeCoursesSection() {
  return (
    <section className="mt-20 bg-white pb-20 pt-10 md:mt-24 md:pb-24 md:pt-16">
      <div className="mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 gap-4 md:gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-2 flex flex-col items-start gap-2">
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
                  <span className="font-extrabold">Educational courses </span>
                  designed for every stage of your career
                </span>
              </h2>
            </div>

            <p className="max-w-125 text-black/60 lg:mt-12 lg:max-w-92.5 lg:justify-self-end 2xl:max-w-150! 3xl:mt-20! 3xl:justify-self-center 3xl:text-[20px]">
              From aspiring creatives to technical professionals, these courses help shape future-ready experts who can deliver real impact across digital industries and modern development.
            </p>
          </div>
        </FadeIn>

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <FadeIn key={course.title} delay={index * 0.15} duration={1} yOffset={60}>
              <InteractiveCourseCard
                program={course}
                isInteractive={true}
                foregroundImage={course.foregroundImage}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex justify-center md:mt-14">
          <Link href="/courses" className="w-full md:w-fit">
            <Button className="w-full bg-brand-green! md:w-fit">
              Explore all courses
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
