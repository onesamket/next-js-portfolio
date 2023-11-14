
"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { ThemeSwitcher } from "./theme/ThemeSwitcher";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Header() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const theme = useTheme();

    const menuItems = [
        "Home",
        "Skills",
        "Projects",
        "About",
        "contact"
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b-1 dark:border-slate-500 w-screen shadow-sm">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="hidden md:block">
                    <Image className="rounded-full " src={'https://avatars.githubusercontent.com/u/120477045?v=4'} width={40} height={40} alt="profile" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 items-center" justify="center">
                <NavbarItem>
                    <Link className="text-gray-500" href="#home">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#skills" className="text-gray-500" aria-current="page">
                        Skills
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-gray-500" href="#projects">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-gray-500" href="#about">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-gray-500" href="#contact">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center">
                    <FaGithub className={`text-2xl cursor-pointer ${theme}==="dark"?'text-white':'text-black'`} onClick={() => router.push('https://github.com/onesamket')} />
                </div>
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarContent className="flex flex-col items-center">

                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <motion.a
                                initial={{
                                    opacity: 0,
                                    x: -100,
                                }}

                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: +index / 3 + 0.2
                                }}
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                            >
                                {item}
                            </motion.a>
                        </NavbarMenuItem>
                    ))}
                </NavbarContent>
            </NavbarMenu>
        </Navbar>
    );
}
