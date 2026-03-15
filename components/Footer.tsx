"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const footerDict = {
    nav: {
        home: "Home",
        courses: "Courses",
        leadership: "Leadership Model",
        contact: "Contact Us",
        graphic: "Graphic Designing",
        computer: "Basic Computer",
        web: "Web Development",
    },
    footer: {
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        copyright: "© 2026 FutureTech Institute. All rights reserved.",
        description:
            "FutureTech Institute - Empowering the next generation of tech leaders through industry-led education.",
    },
};

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="bg-white pt-6 pb-8">
            <Container className="px-4 lg:px-6">
                <div className="mb-4 flex flex-col-reverse gap-6 md:mb-8 md:flex-row md:gap-10">
                    <div className="flex max-w-sm flex-col items-start gap-6">
                        <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                            <Image
                                src="/images/logo.png"
                                alt="FutureTech Logo"
                                width={270}
                                height={100}
                                className="h-19 w-auto object-contain"
                            />
                        </Link>

                        <p className="max-w-[11.8rem] text-[14px] leading-[1.2] text-black/60 md:text-[15.8px] 2xl:max-w-[11.8rem] xl:max-w-[11.8rem] 3xl:max-w-60! 3xl:text-[20px]!">
                            {footerDict.footer.description}
                        </p>
                    </div>

                    <div className="mx-2 flex gap-x-15 md:ml-32 md:gap-x-24">
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className={`text-[15px] font-bold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.home}
                            </Link>
                            <Link
                                href="/programmes"
                                className={`text-[15px] font-bold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/programmes" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.courses}
                            </Link>
                            <Link
                                href="/leadership-model"
                                className={`text-[15px] font-bold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/leadership-model" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.leadership}
                            </Link>
                            <Link
                                href="/contact"
                                className={`text-[15px] font-bold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/contact" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.contact}
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Link
                                href="/programmes#graphic-design"
                                className="text-[14px] font-medium text-black/60 transition-colors hover:text-brand-blue 3xl:text-[18px]!"
                            >
                                {footerDict.nav.graphic}
                            </Link>
                            <Link
                                href="/programmes#basic-computer"
                                className="text-[14px] font-medium text-black/60 transition-colors hover:text-brand-blue 3xl:text-[18px]!"
                            >
                                {footerDict.nav.computer}
                            </Link>
                            <Link
                                href="/programmes#web-development"
                                className="text-[14px] font-medium text-black/60 transition-colors hover:text-brand-blue 3xl:text-[18px]!"
                            >
                                {footerDict.nav.web}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse items-start justify-between gap-5 border-t border-gray-300 pt-3 text-[15px] font-semibold text-black/80 md:flex-row md:items-center md:gap-4 md:pt-5 md:text-[16px] 3xl:text-[20px]!">
                    <p>{footerDict.footer.copyright}</p>
                    <div className="flex gap-23 md:gap-6">
                        <Link
                            href="/privacy"
                            className={`transition-colors ${pathname === "/privacy" ? "gradient-text" : "hover:text-black"}`}
                        >
                            {footerDict.footer.privacyPolicy}
                        </Link>
                        <Link
                            href="/terms"
                            className={`transition-colors ${pathname === "/terms" ? "gradient-text" : "hover:text-black"}`}
                        >
                            {footerDict.footer.termsOfService}
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
