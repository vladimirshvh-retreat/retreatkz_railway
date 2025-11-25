"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "О ретрите", href: "#packages" },
    { name: "Тарифы", href: "#community" },
    { name: "Программа", href: "#vibe" },
    { name: "Контакты", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    {/* Logo with Sky Blue Color using Mask */}
                    <div
                        className="h-10 w-10 bg-[#87CEEB]"
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
                    <span className="text-3xl font-bold text-slate-900 font-tenor tracking-wide">
                        Oryn Retreat
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 hover:text-[#87CEEB] transition-colors flex items-center"
                        >
                            {item.name === "Home" ? <Home className="w-5 h-5" /> : item.name}
                        </Link>
                    ))}
                    <Button className="bg-[#87CEEB] hover:bg-[#5FB6D9] text-white font-semibold rounded-md px-6">
                        Забронировать
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="xl:hidden text-slate-900">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-slate-900 hover:text-[#87CEEB] transition-colors flex items-center gap-2"
                                >
                                    {item.name === "Home" && <Home className="w-5 h-5" />}
                                    {item.name !== "Home" && item.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4 bg-[#87CEEB] hover:bg-[#5FB6D9] text-white">Забронировать</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
