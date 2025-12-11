"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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

import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { siteConfig } from "@/lib/config";
import { MessageCircle, Send } from "lucide-react";

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

    const renderContactButtons = () => (
        <div className="flex flex-col gap-3 mt-4">
            <Button
                size="lg"
                className="bg-white/10 hover:bg-green-500/20 text-slate-900 border border-slate-200 hover:border-green-500/50 w-full justify-start gap-3 backdrop-blur-md shadow-sm transition-all duration-300 group"
                asChild
            >
                <a href={siteConfig.contacts.whatsapp.link} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="font-light">WhatsApp</span>
                </a>
            </Button>
            <Button
                size="lg"
                className="bg-white/10 hover:bg-[#87CEEB]/20 text-slate-900 border border-slate-200 hover:border-[#87CEEB]/50 w-full justify-start gap-3 backdrop-blur-md shadow-sm transition-all duration-300 group"
                asChild
            >
                <a href={siteConfig.contacts.telegram.link} target="_blank" rel="noopener noreferrer">
                    <Send className="w-5 h-5 text-[#87CEEB] group-hover:scale-110 transition-transform" />
                    <span className="font-light">Telegram</span>
                </a>
            </Button>
        </div>
    );

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
                        className={cn("h-10 w-10 transition-colors duration-300", isActive ? "bg-[#87CEEB]" : "bg-white")}
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
                    <div className="relative h-10 w-56">
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
                            <Dialog key={item.name}>
                                <DialogTrigger asChild>
                                    <button
                                        className={cn(
                                            "text-sm font-medium transition-colors flex items-center hover:opacity-80 cursor-pointer",
                                            isActive ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
                                        )}
                                    >
                                        {item.name}
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md bg-white">
                                    <DialogHeader>
                                        <DialogTitle className="text-center font-serif text-2xl mb-2">Тарифы</DialogTitle>
                                    </DialogHeader>
                                    <div className="text-center space-y-6 py-4">
                                        <p className="text-slate-600 font-light text-lg">
                                            Для получения информации по тарифам свяжитесь с оператором
                                        </p>
                                        {renderContactButtons()}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors flex items-center hover:opacity-80",
                                    isActive ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
                                )}
                            >
                                {item.name === "Home" ? <Home className="w-5 h-5" /> : item.name}
                            </Link>
                        )
                    ))}
                    <Button className={cn(
                        "font-semibold rounded-md px-6 transition-colors",
                        isActive
                            ? "bg-[#87CEEB] hover:bg-[#5FB6D9] text-white"
                            : "bg-white text-slate-900 hover:bg-white/90"
                    )}>
                        Забронировать
                    </Button>
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
                                    <Dialog key={item.name}>
                                        <DialogTrigger asChild>
                                            <button
                                                className="text-lg font-medium text-slate-900 hover:text-primary transition-colors flex items-center gap-2 text-left w-full"
                                            >
                                                {item.name}
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md bg-white">
                                            <DialogHeader>
                                                <DialogTitle className="text-center font-serif text-2xl mb-2">Тарифы</DialogTitle>
                                            </DialogHeader>
                                            <div className="text-center space-y-6 py-4">
                                                <p className="text-slate-600 font-light text-lg">
                                                    Для получения информации по тарифам свяжитесь с оператором
                                                </p>
                                                {renderContactButtons()}
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg font-medium text-slate-900 hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        {item.name === "Home" && <Home className="w-5 h-5" />}
                                        {item.name !== "Home" && item.name}
                                    </Link>
                                )
                            ))}
                            <Button className="w-full mt-4 bg-[#87CEEB] hover:bg-[#5FB6D9] text-white">Забронировать</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
