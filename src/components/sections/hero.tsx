"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
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
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black pt-20">
            {/* Background Slideshow with Ken Burns Effect */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={heroImages[currentImageIndex]}
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30 z-10" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center text-white">
                <FadeIn delay={0.2} direction="up">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 drop-shadow-lg font-tenor leading-tight">
                        5 дней тишины и обновления
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-slate-100 drop-shadow-md leading-relaxed">
                        Закрытый ретрит на Бали: медитации, дыхание, йога, саунд-хилинг и древние ритуалы для восстановления и перерождения.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                    <div className="flex flex-col items-center gap-4">
                        {/* Booking Dialog */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="text-lg px-10 py-7 bg-[#87CEEB] hover:bg-[#5FB6D9] text-white border-none shadow-lg rounded-full transition-all hover:scale-105">
                                    ✨ Записаться на ретрит
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-white text-slate-900">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-tenor text-center">Заявка на ретрит</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const formData = new FormData(form);
                                    const data = Object.fromEntries(formData.entries());

                                    try {
                                        const res = await fetch('/api/book', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify(data),
                                        });

                                        if (res.ok) {
                                            alert('Спасибо! Ваша заявка отправлена.');
                                            form.reset();
                                        } else {
                                            alert('Ошибка при отправке. Попробуйте позже.');
                                        }
                                    } catch (err) {
                                        console.error(err);
                                        alert('Ошибка при отправке.');
                                    }
                                }}>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Ваше имя</Label>
                                            <Input id="name" name="name" placeholder="Иван Иванов" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" name="email" type="email" placeholder="example@mail.com" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="phone">Телефон / WhatsApp</Label>
                                            <Input id="phone" name="phone" placeholder="+7 999 000 00 00" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="message">Комментарий</Label>
                                            <Textarea id="message" name="message" placeholder="Хочу узнать подробности..." />
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full bg-[#87CEEB] hover:bg-[#5FB6D9] text-white">Отправить заявку</Button>
                                </form>
                            </DialogContent>
                        </Dialog>


                        <div className="flex flex-row gap-4">
                            <Button variant="outline" size="lg" className="bg-green-500/20 hover:bg-green-500/30 text-white border-green-400/50 backdrop-blur-sm gap-2" asChild>
                                <a href={siteConfig.contacts.whatsapp.link} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="bg-blue-500/20 hover:bg-blue-500/30 text-white border-blue-400/50 backdrop-blur-sm gap-2" asChild>
                                <a href={siteConfig.contacts.telegram.link} target="_blank" rel="noopener noreferrer">
                                    <Send className="w-5 h-5" />
                                    Telegram
                                </a>
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1 shadow-md">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
