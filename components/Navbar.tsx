"use client";

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import type { Variants } from 'motion/react'
import { stagger } from 'motion/react'
import Image from 'next/image'
import * as motion from 'motion/react-client'
import HomeDropdown from './ui/HomeDropdown'
import AboutDropdown from './ui/AboutDropdown'
import { useDropdownHover } from '@/utils/utils'


const ProgramDropdown = ({ textColor }: { textColor: string }) => {
    const pathname = usePathname()
    const { isOpen: open, handleMouseEnter, handleMouseLeave, closeDropdown } = useDropdownHover()

    useEffect(() => {
        closeDropdown()
    }, [pathname, closeDropdown])

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href="/programmes"
                className={`font-semibold text-[14px] tracking-[0.5px] py-2 rounded-lg flex items-center gap-2 transition-all relative group uppercase ${textColor}`}
            >
                <span className="transition-all group-hover:gradient-text">Courses</span>

                <Image
                    src="/images/arrow-down.png"
                    alt="Courses Icon"
                    width={16}
                    height={16}
                    className={`w-4 mb-1 h-4 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
            </Link>

            {open && (
                <div
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-[650px] bg-white border border-border rounded-2xl shadow-2xl z-50 p-5 transition-all duration-200 grid grid-cols-[1.4fr_1fr] gap-6"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* LEFT FEATURE CARD */}
                    <div className="relative rounded-xl overflow-hidden text-white p-6 flex flex-col justify-end h-[280px] group transition-transform duration-300" style={{ backgroundColor: '#0f1c34' }}>
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/img1_1.png"
                                alt="FutureTech Education"
                                fill
                                className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c34] via-[#0f1c34]/60 to-transparent"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-2">Master the Future of Tech</h3>
                            <p className="text-sm text-gray-200 mb-4">
                                FutureTech Institute delivers industry-led education that transforms your digital career.
                            </p>
                            <Link 
                                href="/programmes" 
                                className="text-white text-sm inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-200 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20"
                                onClick={closeDropdown}
                            >
                                Explore all Courses
                                <span className="text-lg">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT NAV LINKS */}
                    <div className="flex flex-col justify-center space-y-2">
                        <Link
                            href="/programmes#graphic-design"
                            className="flex items-start gap-4 px-3 py-3 rounded-xl hover:bg-gray-50 transition-all group"
                            onClick={closeDropdown}
                        >
                            <div className="flex-1">
                                <div className="text-[15px] font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                                    Graphic Designing
                                </div>
                                <div className="text-[12px] text-gray-500 line-clamp-1">
                                    Master the art of visual storytelling.
                                </div>
                            </div>
                            <div className="w-10 h-10 relative shrink-0">
                                <Image src="/images/graphic.png" alt="Graphic Design" fill className="object-contain group-hover:scale-110 transition-transform" />
                            </div>
                        </Link>

                        <Link
                            href="/programmes#basic-computer"
                            className="flex items-start gap-4 px-3 py-3 rounded-xl hover:bg-gray-50 transition-all group"
                            onClick={closeDropdown}
                        >
                            <div className="flex-1">
                                <div className="text-[15px] font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                                    Basic Computer
                                </div>
                                <div className="text-[12px] text-gray-500 line-clamp-1">
                                    Foundation in digital literacy.
                                </div>
                            </div>
                            <div className="w-10 h-10 relative shrink-0">
                                <Image src="/images/it.png" alt="Basic Computer" fill className="object-contain group-hover:scale-110 transition-transform" />
                            </div>
                        </Link>

                        <Link
                            href="/programmes#web-development"
                            className="flex items-start gap-4 px-3 py-3 rounded-xl hover:bg-gray-50 transition-all group"
                            onClick={closeDropdown}
                        >
                            <div className="flex-1">
                                <div className="text-[15px] font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                                    Web Development
                                </div>
                                <div className="text-[12px] text-gray-500 line-clamp-1">
                                    Build modern web applications.
                                </div>
                            </div>
                            <div className="w-10 h-10 relative shrink-0">
                                <Image src="/images/coding.png" alt="Web Development" fill className="object-contain group-hover:scale-110 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}


const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 })

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref])

    return dimensions.current
}

const sidebarVariants: Variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(25px at calc(100% - 35px) 29px)',
        transition: {
            delay: 0.2,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
}

const navVariants = {
    open: {
        transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    closed: {
        transition: { delayChildren: stagger(0.05, { from: 'last' }) },
    },
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const navStyle: React.CSSProperties = {
    width: '100%',
}

const getBackgroundStyle = (): React.CSSProperties => ({
    backgroundColor: 'var(--background)',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: "100%",
})

const toggleContainer: React.CSSProperties = {
    outline: 'none',
    border: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: 6,
    right: -5,
    width: 50,
    height: 50,
    borderRadius: '50%',
    background: 'transparent',
    zIndex: 60,
}

const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 25,
    margin: 0,
    position: 'absolute',
    top: 80,
    width: '100%',
}

const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none',
    marginBottom: 20,
    cursor: 'pointer',
    width: '100%',
}

interface PathProps {
    d?: string
    variants: Variants
    transition?: { duration: number }
}

const Path = ({ strokeColor, ...props }: PathProps & { strokeColor: string }) => (
    // @ts-ignore Ignore type error to keep original codebase functionally similar
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke={strokeColor}
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ toggle, color, isOpen }: { toggle: () => void; color: string; isOpen: boolean }) => (
    <button style={toggleContainer} onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                strokeColor={color}
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                }}
            />
            <Path
                strokeColor={color}
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                strokeColor={color}
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                }}
            />
        </svg>
    </button>
)

const AnimatedLinkList = ({ closeMenu }: { closeMenu: () => void }) => {
    const [programOpen, setProgramOpen] = useState(false)
    const linkTextColor = 'text-black'

    const itemLinkStyle: React.CSSProperties = {
        ...listItemStyle,
        padding: 0,
    }
    const portfolioContainerStyle: React.CSSProperties = {
        ...itemLinkStyle,
        flexDirection: 'column',
        alignItems: 'center',
    }

    return (
        // @ts-ignore
        <motion.ul style={listStyle} variants={navVariants}>
            {/* @ts-ignore */}
            <motion.li
                style={itemLinkStyle}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href="/"
                    className={`${linkTextColor} font-semibold text-[25px] tracking-[0.5px] py-3 w-full text-center`}
                    onClick={closeMenu}
                >
                    HOME
                </Link>
            </motion.li>
            {/* @ts-ignore */}
            <motion.li
                style={itemLinkStyle}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href="/about"
                    className={`${linkTextColor} font-semibold text-[25px] tracking-[0.5px] py-3 w-full text-center`}
                    onClick={closeMenu}
                >
                    ABOUT
                </Link>
            </motion.li>
            {/* @ts-ignore */}
            <motion.li style={portfolioContainerStyle} variants={itemVariants}>
                <button
                    onClick={() => setProgramOpen(!programOpen)}
                    className={`${linkTextColor} font-semibold text-[25px] tracking-[0.5px] py-3 focus:outline-none w-full flex items-center justify-center`}
                >
                    <span>COURSES</span>    <span>{programOpen ? '▲' : '▼'}</span>
                </button>
                {programOpen && (
                    // @ts-ignore
                    <motion.div
                        className="flex flex-col items-center  w-full pr-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <Link
                            href="/courses#graphic-design"
                            className={`${linkTextColor} text-[20px] font-medium py-2`}
                            onClick={closeMenu}
                        >
                            Graphic Designing
                        </Link>
                        <Link
                            href="/courses#basic-computer"
                            className={`${linkTextColor} text-[20px] font-medium py-2`}
                            onClick={closeMenu}
                        >
                            Basic Computer
                        </Link>
                        <Link
                            href="/courses#web-development"
                            className={`${linkTextColor} text-[20px] font-medium py-2`}
                            onClick={closeMenu}
                        >
                            Web Development
                        </Link>
                    </motion.div>
                )}
            </motion.li>
            {/* @ts-ignore */}
            <motion.li
                style={itemLinkStyle}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href="/leadership-model"
                    className={`${linkTextColor} font-semibold text-[25px] tracking-[0.5px] py-3 w-full text-center`}
                    onClick={closeMenu}
                >
                    LEADERSHIP MODEL
                </Link>
            </motion.li>
            {/* @ts-ignore */}
            <motion.li
                style={itemLinkStyle}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href="/contact"
                    className={`${linkTextColor} font-semibold text-[25px] tracking-[0.5px] py-3 w-full text-center`}
                    onClick={closeMenu}
                >
                    CONTACT US
                </Link>
            </motion.li>
        </motion.ul>
    )
}

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { height } = useDimensions(containerRef)

    const closeMenu = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

    }, [isOpen])

    const textColor = 'text-black';

    return (
        <nav
            className={`w-full h-[60px] bg-transparent flex items-center justify-between px-6 relative z-[100]`}
        >
            {/* Logo */}
            <div className="flex md:flex-1 items-center">
                {/* If user images aren't present this will throw a Next component error, we can catch or leave as is if user provided correct paths for their project */}
                <div
                    onClick={() => window.location.href = '/'}
                    className="font-bold text-xl cursor-pointer text-brand-blue hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                    Logo
                </div>
            </div>

            {/* --- DESKTOP NAVIGATION LINKS (Centered) --- */}
            <div className={`hidden md:flex flex-none items-center gap-7 ${textColor}`}>
                <HomeDropdown textColor={textColor} />
                <AboutDropdown textColor={textColor} />

                <ProgramDropdown textColor={textColor} />


                <Link
                    href="/leadership-model"
                    className={`font-semibold text-[14px] tracking-[0.5px] hover-gradient-text transition-all ${textColor}`}
                >
                    LEADERSHIP MODEL
                </Link>

                <Link
                    href="/contact"
                    className={`font-semibold text-[14px] tracking-[0.5px] uppercase hover-gradient-text transition-all ${textColor}`}
                >
                    CONTACT US
                </Link>
            </div>

            {/* --- DESKTOP CTA BUTTON (Right End) --- */}
            <div className="hidden md:flex md:flex-1 justify-end items-center">
                <Link
                    href="https://calendar.app.google/BmfbmL2fbqmrZ6wR9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-bold tracking-[0.5px] transition-all hover:scale-105 active:scale-95 whitespace-nowrap bg-brand-gradient text-white`}
                >
                    FREE CONSULTATION
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>

            <div className="md:hidden">
                {/* @ts-ignore */}
                <motion.nav
                    initial={false}
                    animate={isOpen ? 'open' : 'closed'}
                    custom={height}
                    ref={containerRef}
                    style={navStyle}
                    className="absolute top-0 right-0 h-dvh bottom-auto z-[100]"
                >
                    {/* @ts-ignore */}
                    <motion.div style={getBackgroundStyle()} variants={sidebarVariants} />
                    <AnimatedLinkList closeMenu={closeMenu} />

                    <MenuToggle
                        toggle={() => setIsOpen(!isOpen)}
                        color="#0f1c34"
                        isOpen={isOpen}
                    />
                </motion.nav>
            </div>
        </nav>
    )
}
