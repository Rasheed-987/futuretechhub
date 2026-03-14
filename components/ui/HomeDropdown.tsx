import Link from 'next/link';

export default function HomeDropdown({ textColor }: { textColor: string }) {
    return (
        <Link
            href="/"
            className={`font-semibold text-[14px] tracking-[0.5px] py-2 transition-all hover-gradient-text ${textColor}`}
        >
            HOME
        </Link>
    );
}
