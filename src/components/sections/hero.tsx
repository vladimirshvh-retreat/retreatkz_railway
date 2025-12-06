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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-green-500/80 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all hover:scale-105 shadow-lg border border-white/20"
                            asChild
                        >
                            <a href={siteConfig.contacts.whatsapp.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <MessageCircle className="w-6 h-6" />
                                WhatsApp
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            className="bg-blue-500/80 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all hover:scale-105 shadow-lg border border-white/20"
                            asChild
                        >
                            <a href={siteConfig.contacts.telegram.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Send className="w-6 h-6" />
                                Telegram
                            </a>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
