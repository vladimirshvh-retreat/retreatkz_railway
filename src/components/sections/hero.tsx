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
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg font-medium shadow-md rounded-full transition-all hover:scale-105 border-none">
                                Забронировать место
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-white text-slate-900">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-serif text-center">Заявка на ретрит</DialogTitle>
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
                                <Button type="submit" className="w-full bg-retreat-brown hover:bg-retreat-brown-dark text-white">Отправить заявку</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </FadeIn>
            </div>
        </section>
    );
}
