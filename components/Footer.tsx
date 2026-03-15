"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const footerDict = {
    nav: {
        programmes: "Courses",
        approach: "Approach",
        partnership: "Partnership",
        alumni: "Alumni",
        resources: "Resources",
        about: "About",
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

                    <div className="mx-2 flex gap-x-15 md:ml-24 md:gap-x-20">
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/programmes"
                                className={`text-[15px] font-semibold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/programmes" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.programmes}
                            </Link>
                            <Link
                                href="/approach"
                                className={`text-[15px] font-semibold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/approach" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.approach}
                            </Link>
                            <Link
                                href="/partnership"
                                className={`text-[15px] font-semibold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/partnership" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.partnership}
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Link
                                href="/alumni"
                                className={`text-[15px] font-semibold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/alumni" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.alumni}
                            </Link>
                            <Link
                                href="/resources"
                                className={`text-[15px] font-semibold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/resources" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.resources}
                            </Link>
                            <Link
                                href="/about"
                                className={`text-[15px] font-semibold transition-colors md:text-[15px] 3xl:text-[20px]! ${pathname === "/about" ? "gradient-text" : "text-black hover:text-brand-blue"}`}
                            >
                                {footerDict.nav.about}
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
