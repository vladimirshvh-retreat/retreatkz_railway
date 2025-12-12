"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ContactModal } from "@/components/shared/contact-modal";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "О ретрите", href: "#packages" },
    { name: "Тарифы", href: "#community" },
    { name: "Программа", href: "#vibe" },
    { name: "Контакты", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper to determine if we should show the "active" (white bg) state
    const isActive = isScrolled || isHovered;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
                isActive ? "bg-white shadow-sm" : "bg-transparent"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-1.5">
                    {/* Logo - adapts to scroll state */}
                    <div
                        className={cn("h-12 w-12 transition-colors duration-300", isActive ? "bg-[#87CEEB]" : "bg-white")}
                        style={{
                            maskImage: 'url("/images/logo.png")',
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url("/images/logo.png")',
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center'
                        }}
                    />
                    <div className="relative h-12 w-72">
                        <Image
                            src="/images/brand-text.png"
                            alt="МЕСТОРОЖДЕНИЯ"
                            fill
                            className={cn(
                                "object-contain transition-all duration-300",
                                isActive ? "" : "brightness-0 invert"
                            )}
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navItems.map((item) => (
                        item.name === "Тарифы" ? (
                            <ContactModal
                                key={item.name}
                                title="Тарифы"
                                message="Для получения информации по тарифам свяжитесь с оператором"
                            >
                                <button
                                    className={cn(
                                        "text-sm font-medium transition-all duration-300 flex items-center cursor-pointer hover:text-[#87CEEB] hover:drop-shadow-[0_0_8px_rgba(135,206,235,0.8)]",
                                        isActive ? "text-slate-600" : "text-white/90"
                                    )}
                                >
                                    {item.name}
                                </button>
                            </ContactModal>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-all duration-300 flex items-center hover:text-[#87CEEB] hover:drop-shadow-[0_0_8px_rgba(135,206,235,0.8)]",
                                    isActive ? "text-slate-600" : "text-white/90"
                                )}
                            >
                                {item.name === "Home" ? <Home className="w-5 h-5" /> : item.name}
                            </Link>
                        )
                    ))}
                    <ContactModal
                        title="Бронирование"
                        message="Для бронирования места свяжитесь с оператором"
                    >
                        <Button className={cn(
                            "font-semibold rounded-md px-6 transition-colors shadow-lg hover:shadow-xl",
                            isActive
                                ? "bg-[#87CEEB] hover:bg-[#5FB6D9] text-white"
                                : "bg-white text-slate-900 hover:bg-white/90"
                        )}>
                            Забронировать
                        </Button>
                    </ContactModal>
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className={cn("xl:hidden", isActive ? "text-slate-900" : "text-white")}>
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                                item.name === "Тарифы" ? (
                                    <ContactModal
                                        key={item.name}
                                        title="Тарифы"
                                        message="Для получения информации по тарифам свяжитесь с оператором"
                                    >
                                        <button
                                            className="text-lg font-medium text-slate-900 hover:text-[#87CEEB] transition-all flex items-center gap-2 text-left w-full hover:drop-shadow-[0_0_5px_rgba(135,206,235,0.5)]"
                                        >
                                            {item.name}
                                        </button>
                                    </ContactModal>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg font-medium text-slate-900 hover:text-[#87CEEB] transition-all flex items-center gap-2 hover:drop-shadow-[0_0_5px_rgba(135,206,235,0.5)]"
                                    >
                                        {item.name === "Home" && <Home className="w-5 h-5" />}
                                        {item.name !== "Home" && item.name}
                                    </Link>
                                )
                            ))}
                            <ContactModal
                                title="Бронирование"
                                message="Для бронирования места свяжитесь с оператором"
                            >
                                <Button className="w-full mt-4 bg-[#87CEEB] hover:bg-[#5FB6D9] text-white">Забронировать</Button>
                            </ContactModal>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
