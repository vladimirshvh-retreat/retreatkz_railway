"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

const highlights = [
    {
        title: "Просто на маленьком кусочке рая",
        description: "В мире, где мы каждый день живём на скорости, становится всё труднее услышать - самое важное — себя.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Тишина, дыхание, движения, пространство",
        description: "всё здесь создано для мягкого перезапуска и возвращения к жизни в присутствии",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "в комфортных условиях",
        description: "почувствовать себя и насладиться путешествием к себе.",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
    },
];

export function Community() {
    return (
        <section id="community" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-tenor">Присоединяйтесь</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Этот ретрит — приглашение замедлиться, восстановиться и открыть внутри источник ясности и силы.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <FadeIn
                            key={index}
                            delay={index * 0.2}
                            direction="up"
                            className="text-center"
                        >
                            <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-slate-900">{item.title}</h3>
                            <p className="text-slate-600">{item.description}</p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
