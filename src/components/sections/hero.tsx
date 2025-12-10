"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/ui/fade-in";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/config";

const heroImages = [
    "/images/hero/rice-terraces.png",
    "/images/hero/ceremony.png",
    "/images/hero/surfing.png",
    "/images/hero/sound-healing.png",
    "/images/hero/yoga-shala.png",
    "/images/hero/qigong.png",
    "/images/hero/sunset.png",
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background Slideshow */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={heroImages[currentImageIndex]}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-4xl">
                <FadeIn delay={0.2} direction="up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight drop-shadow-md font-serif leading-tight">
                        5 дней тишины и обновления
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto drop-shadow-md opacity-95 font-sans">
                        Закрытый ретрит на Бали: медитации, дыхание, йога, саунд-хилинг и древние ритуалы для восстановления и перерождения.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            size="lg"
                            className="bg-white/10 hover:bg-green-500/20 text-white px-10 py-7 text-lg rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:border-green-500/50 group bg-clip-padding"
                            asChild
                        >
                            <a href={siteConfig.contacts.whatsapp.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 group-hover:text-green-400" />
                                <span className="font-light tracking-wide">WhatsApp</span>
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            className="bg-white/10 hover:bg-[#87CEEB]/20 text-white px-10 py-7 text-lg rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:border-[#87CEEB]/50 group bg-clip-padding"
                            asChild
                        >
                            <a href={siteConfig.contacts.telegram.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                <Send className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 group-hover:text-[#87CEEB]" />
                                <span className="font-light tracking-wide">Telegram</span>
                            </a>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
