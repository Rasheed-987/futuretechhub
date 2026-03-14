import Hero from "@/components/Hero";
import HomeProgramsSection from "@/components/HomeProgramsSection";
import ServicesCards from "@/components/ServicesCards";
import FacilitiesSection from "@/components/FacilitiesSection";
import HomeNominationSection from "@/components/HomeNominationSection";

export default function Home() {
  const heroData = {
    title: {
      prefix1: "Welcome to",
      prefix2: "the",
      highlight: "Future",
      suffix: "of Tech",
    },
    description: "Discover innovative solutions that transform your business and elevate your digital presence to new heights.",
    backgroundImage: "/image1.png",
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
