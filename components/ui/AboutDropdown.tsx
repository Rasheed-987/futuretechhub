import Link from 'next/link';

export default function AboutDropdown({ textColor }: { textColor: string }) {
    return (
        <Link
            href="/about"
            className={`font-semibold text-[14px] tracking-[0.5px] py-2 transition-all hover-gradient-text ${textColor}`}
        >
            ABOUT
        </Link>
    );
}
