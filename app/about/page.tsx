import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import TagPill from "@/components/TagPill";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import OurTeamCard from "@/components/OurTeamCard";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About FutureTech Institute",
  description:
    "Learn how FutureTech Institute builds future-ready talent through practical, industry-aligned programmes, expert trainers, and real-world learning outcomes.",
  path: "/about",
  image: "/about.jpeg",
  keywords: [
    "about FutureTech Institute",
    "technology training institute",
    "industry aligned curriculum",
    "career development training",
    "future-ready workforce",
    "professional upskilling",
  ],
});

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "Sarah brings over 20 years of experience in educational leadership, shaping strategies that align workforce development with industry demands.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1470&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Head of Training",
    bio: "With a background in corporate learning, Michael designs practical, outcome-based programmes that ensure our learners are job-ready from day one.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1469&auto=format&fit=crop",
  },
  {
    name: "Amira Hassan",
    role: "Director of Partnerships",
    bio: "Amira connects FutureTech with leading enterprise partners to create customized training tracks and continuous upskilling initiatives.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
  },
];

const about = {
  hero: {
    pill: "ABOUT",
    title: {
      text1: "Building Skills",
      text2: "for a ",
      highlight: "Future-Ready Workforce",
    },
    description:
      "At FutureTech Training Institute, we equip learners and professionals with practical, in-demand skills to excel in a digital world.",
  },
  features: [
    {
      icon: "/images/aboutframe1.png",
      
      text: "Industry-aligned curriculum in technology and business",
    },
    {
      icon: "/images/aboutframe2.png",
      text: "Hands-on workshops, labs, and real-world projects",
    },
    {
      icon: "/images/aboutframe3.png",
      text: "Learning paths for students, professionals, and teams",
    },
    {
      icon: "/images/aboutframe4.png",
      text: "Certified trainers with strong industry experience",
    },
    {
      icon: "/images/aboutframe5.png",
      text: "Corporate training partnerships and customized programs",
    },
  ],
  role: {
    pill: "FUTURETECH PLAYS A VITAL ROLE IN",
    title: {
      part1: "FutureTech Training Institute",
      part2: " is dedicated to ",
      part3: "developing confident, job-ready talent ",
      part4: "for today’s fast-changing industries",
    },
    description:
      "Through practical programmes, mentorship, and applied learning, FutureTech helps individuals and organizations build the capabilities needed to innovate, adapt, and lead with impact.",
    items: [
      { icon: "/images/star.png", text: "Strengthening digital and professional competencies" },
      { icon: "/images/trophy.png", text: "Supporting workforce readiness and career growth" },
      { icon: "/images/link.png", text: "Connecting learning outcomes to real business needs" },
      { icon: "/images/settings.png", text: "Enabling innovation through continuous upskilling" },
    ],
  },
  stats: {
    items: [
      { value: "1,200", label: "Active learners" },
      { value: "95%", label: "Course completion rate" },
      { value: "120+", label: "Training programs" },
      { value: "45+", label: "Industry collaborations" },
    ],
    description:
      "From foundational programmes to advanced professional tracks, FutureTech supports learners and organizations in building practical skills that create measurable results.",
  },
  missionVision: {
    mission: {
      pill: "OUR MISSION",
      text: "To deliver accessible, high-quality training that turns potential into performance through practical, future-focused learning.",
    },
    vision: {
      pill: "OUR VISION",
      text: "To be a trusted training institute shaping a skilled, innovative, and future-ready workforce.",
    },
    why: {
      pill: "WHY LEADERSHIP MATTERS",
      text: "In a technology-driven world, continuous learning is essential for career growth, organizational success, and long-term competitiveness.",
    },
  },
  cta: {
    titleLine1: "Ready to grow with",
    titleLine2: "FutureTech?",
    description:
      "Explore our programmes or partner with us to upskill your teams and learners.",
    button1: "Explore programmes",
    button2: "Partner with us",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-6 md:pt-32 md:pb-12">
        <div className="px-4 text-center">
          <div className="mb-4 flex justify-center">
            <TagPill label={about.hero.pill} />
          </div>

          <h1 className="mx-auto mb-5 max-w-200 text-[2rem] leading-[1.1] font-normal tracking-tight text-black md:text-[1.9rem] lg:text-[40px] xl:text-[50px] 2xl:text-[65px] 3xl:text-[76px]!">
            {about.hero.title.text1} <br />
            {about.hero.title.text2}
            <span className="font-extrabold">{about.hero.title.highlight}</span>
          </h1>

          <p className="mx-auto max-w-lg text-[15px] leading-[1.2] text-[#00000099] md:text-[15px] 3xl:text-[20px]!">
            {about.hero.description}
          </p>
        </div>
      </section>

      <section className="px-4 sm:pb-6 md:pb-2">
        <div className="relative h-62.5 w-full overflow-hidden rounded-[20px] md:aspect-21/9 lg:min-h-[92vh] 2xl:min-h-[90vh]">
          <Image
            src="/about.jpeg"
            alt="Leadership Team"
            fill
            className="hidden rounded-[20px] object-cover md:block"
            priority
            quality={85}
            sizes="100vw"
          />
          <Image
            src="/about.jpeg"
            alt="Leadership Team"
            fill
            className="rounded-[20px] object-cover md:hidden"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
      </section>

      <section className="mt-12 bg-white pb-20 md:mt-1 lg:pb-48">
        <div className="mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 text-start sm:grid-cols-3 lg:grid-cols-5">
            {about.features.map((feature) => (
              <div key={feature.text} className="flex flex-col items-start">
                <div className="mb-2 flex h-12 w-12 md:h-11 md:w-11">
                  <Image src={feature.icon} alt="" width={45} height={45} loading="lazy" />
                </div>
                <p className="max-w-50 text-sm text-gray-600 3xl:max-w-75! 3xl:text-[20px]!">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white pt-8 md:mx-4 md:bg-transparent md:py-2">
        <div className="absolute inset-0 z-0 hidden overflow-hidden rounded-3xl border border-gray-100/50 bg-[#F9FBFC] md:block">
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src="/aboutnew.png"
              alt="Background"
              fill
              className="object-cover object-top opacity-90 xl:object-[center_10%]"
              loading="lazy"
              quality={80}
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </div>

        <Container className="relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-stretch gap-12 pt-8 pb-12 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="flex min-h-125 flex-col items-start justify-between lg:col-span-4 3xl:min-h-187.5!">
              <div className="w-full">
                <h2 className="gradient-text max-w-xl text-[27px] leading-[1.15] font-normal tracking-tight md:text-[30px] 3xl:max-w-132.5! 3xl:text-[38px]!">
                  <span className="font-extrabold">{about.role.title.part1}</span>
                  {about.role.title.part2}
                  <span className="font-extrabold">{about.role.title.part3}</span>
                  <span className="font-medium">{about.role.title.part4}</span>
                </h2>
              </div>
{/* 
              <div className="relative mt-6 h-112.5 w-full overflow-hidden rounded-4xl md:hidden">
              
                <div className="bg-linear-to-t absolute inset-x-0 bottom-0 p-8 pt-20 from-black/40 to-transparent">
                  <p className="max-w-xs text-[15px] leading-relaxed text-white 3xl:text-[20px]!">
                    {about.role.description}
                  </p>
                </div>
              </div> */}

              <p className="hidden max-w-sm text-sm leading-relaxed text-[#00000099] md:block 3xl:max-w-xl! 3xl:text-[20px]!">
                {about.role.description}
              </p>
            </div>

            <div className="hidden lg:col-span-4 lg:block" />

            <div className="flex flex-col items-end lg:col-span-4">
              <div className="w-full max-w-sm lg:max-w-none">
                <div className="mb-8 flex flex-col items-start md:mb-12">
                  <p className="mb-3 text-large text-[#045A86] font-bold tracking-[1px] uppercase 3xl:text-[20px]!">
                    {about.role.pill}
                  </p>
                  <div className="mt-1">
                    <Image src="/images/bar.png" alt="bar" width={80} height={4} className="h-auto w-20" loading="lazy" />
                  </div>
                </div>

                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 3xl:gap-8">
                  {about.role.items.map((item, idx) => (
                    <FadeIn key={item.text} delay={idx * 0.4} duration={1.2} yOffset={60}>
                      <div className="group flex h-full min-h-35 flex-col justify-between gap-4 rounded-2xl border border-black/20 bg-white p-6 transition-all hover:shadow-lg md:min-h-27.5 md:border-transparent md:p-4 3xl:py-8!">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6EFEA] transition-transform duration-1500 ease-in-out group-hover:rotate-360 2xl:h-13 2xl:w-13 3xl:h-14! 3xl:w-14!">
                          <Image
                            src={item.icon}
                            alt=""
                            width={20}
                            height={20}
                            className="h-5 w-5 object-contain transition-transform duration-1500 ease-in-out group-hover:-rotate-360 3xl:h-6! 3xl:w-6!"
                            loading="lazy"
                          />
                        </div>
                        <span className="mt-4 text-[15px] leading-tight font-medium tracking-tight text-[#00000099] md:mt-0 md:text-[15px] 3xl:text-[20px]!">
                          {item.text}
                        </span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

     
      <Container className=" mb:20 lg:py-20  px-4">
        <section className="relative w-full overflow-hidden rounded-3xl bg-[#E6EFEA] pt-13 pb-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/aboutline.png"
              alt=""
              fill
              className="hidden w-full object-cover md:block"
              loading="lazy"
            />
            <Image
              src="/images/aboutlinembl.png"
              alt=""
              fill
              className="w-full object-fill md:hidden"
              style={{ transform: "rotate(180deg)" }}
              loading="lazy"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-start gap-0 px-4 sm:px-8 md:px-16">
            <div className="mx-auto max-w-2xl pt-6 pb-20 text-center md:mb-8 md:pt-13 md:pb-0 md:2xl:mb-22">
              <span className="mb-4 block text-[13px] font-bold tracking-[0.8px] text-brand-blue uppercase md:text-xs 3xl:text-[20px]!">
                {about.missionVision.mission.pill}
              </span>
              <div className="mb-6 flex justify-center">
                <Image src="/images/bar.png" alt="bar" width={80} height={4} className="h-auto w-20" loading="lazy" />
              </div>
              <p className="max-w-md text-[15px] leading-[1.3] text-black/60 md:text-[15px] md:leading-[1.2] 3xl:text-[20px]!">
                {about.missionVision.mission.text}
              </p>
            </div>

            <FadeIn className="w-full max-w-5xl overflow-hidden rounded-[40px] bg-white px-6 md:rounded-4xl md:px-10 md:pb-2 2xl:min-w-6xl">
              <div className="px-3 pt-16 pb-16 text-center md:mb-12">
                <span className="mb-4 block pt-0 text-[13px] font-bold tracking-[0.8px] text-brand-blue uppercase md:pt-14 md:text-xs 3xl:text-[20px]!">
                  {about.missionVision.vision.pill}
                </span>
                <div className="mb-6 flex justify-center">
                  <Image src="/images/bar.png" alt="bar" width={80} height={4} className="h-auto w-20" loading="lazy" />
                </div>
                <p className="mx-auto max-w-md text-[15px] leading-[1.3] text-black/60 md:text-[15px] md:leading-[1.2] 3xl:text-[20px]!">
                  {about.missionVision.vision.text}
                </p>
              </div>

              <div className="mb-0 w-full max-w-2xl mx-auto rounded-3xl bg-[#E6EFEA] px-10 py-15 text-center md:rounded-xl md:py-20 2xl:min-w-3xl">
                <span className="mb-4 block text-[13px] font-bold tracking-[0.8px] text-brand-blue uppercase md:text-xs 3xl:text-[20px]!">
                  {about.missionVision.why.pill}
                </span>
                <div className="mb-3 flex justify-center">
                  <Image src="/images/bar.png" alt="bar" width={80} height={4} className="h-auto w-20" loading="lazy" />
                </div>
                <p className="mx-auto max-w-md text-[15px] leading-[1.3] text-black/60 md:text-[15px] md:leading-[1.2] 3xl:text-[20px]!">
                  {about.missionVision.why.text}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </Container>

      <section className="bg-white py-20 px-4 md:py-24">
        <Container>
          <div className="mb-12 flex flex-col items-center justify-center text-center">
            <span className="mb-4 block text-[13px] font-bold tracking-[0.8px] text-brand-blue uppercase md:text-xs 3xl:text-[20px]!">
              LEADERSHIP TEAM
            </span>
            <div className="mb-6 flex justify-center">
              <Image src="/images/bar.png" alt="bar" width={80} height={4} className="h-auto w-20" loading="lazy" />
            </div>
            <h2 className="mx-auto max-w-2xl text-[2rem] leading-[1.1] font-normal tracking-tight text-black md:text-[2.5rem] lg:text-[40px] xl:text-[45px]">
              Meet Our <span className="font-extrabold text-brand-blue">Experts</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 w-full min-h-[500px]">
            {teamMembers.map((member) => (
              <OurTeamCard
                key={member.name}
                member={member}
                backgroundImage={member.image}
              />
            ))}
          </div>
        </Container>
      </section>

      <ContactSection
        titleLine1={about.cta.titleLine1}
        titleLine2={about.cta.titleLine2}
        description={about.cta.description}
        button={about.cta.button1}
        button2={about.cta.button2}
        href="/programmes"
        href2="/partnership"
        backgroundImage="/images/contactbg.webp"
        titleClassName="mx-auto max-w-[380px] sm:max-w-full"
        descriptionClassName="max-w-[220px] md:max-w-[200px] lg:max-w-[320px] xl:max-w-[370px] 2xl:max-w-[380px]"
      />
    </>
  );
}