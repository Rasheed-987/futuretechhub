import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeProgramsSection from "@/components/HomeProgramsSection";
import ServicesCards from "@/components/ServicesCards";
import FacilitiesSection from "@/components/FacilitiesSection";
import HomeNominationSection from "@/components/HomeNominationSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tech Courses and Career-Focused Training in Islamabad",
  description:
    "FutureTech Institute delivers industry-led training in graphic design, basic computer skills, and web development to help learners build job-ready careers.",
  path: "/",
  image: "/images/heroimage.jpeg",
  keywords: [
    "FutureTech Institute Islamabad",
    "tech courses in Islamabad",
    "career focused training",
    "graphic design training",
    "web development training",
    "basic computer skills course",
  ],
});

export default function Home() {
  const heroData = {
    title: {
      prefix1: "Welcome to the",
      prefix2: "",
      highlight: "Future",
      suffix: "of Tech",
    },
    
    description: "Discover innovative solutions that transform your business and elevate your digital presence to new heights.",
    mobileBackgroundImage: "/image1.png",
    backgroundImage: "/images/heroimage.jpeg",
    buttons: {
      primary: {
        text: "Get Started",
        href: "/contact",
      },
      secondary: {
        text: "Learn More",
        href: "/about",
      },
    },
  };

  return (
    <div className="">
      <Hero {...heroData} />
      <ServicesCards />
      <HomeProgramsSection />
      <HomeNominationSection />
      <FacilitiesSection />
    </div>
  );
}
