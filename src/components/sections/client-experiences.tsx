"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

const reviews = [
    {
        name: "Екатерина",
        role: "Москва",
        content: "Это было невероятное путешествие к себе. Я нашла ответы на вопросы, которые мучили меня годами.",
        image: "/images/hero/yoga-shala.png",
        rating: 5
    },
    {
        name: "Александр",
        role: "Санкт-Петербург",
        content: "Полная перезагрузка. Тишина, природа и практики помогли мне восстановить силы.",
        image: "/images/hero/surfing.png",
        rating: 5
    },
    {
        name: "Мария",
        role: "Алматы",
        content: "Очень душевная атмосфера. Чувствовала себя как дома. Спасибо за заботу.",
        image: "/images/hero/rice-terraces.png",
        rating: 5
    }
];

export function ClientExperiences() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-slate-900 font-serif">
                            Отзывы участников
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <FadeIn key={index} delay={index * 0.2} direction="up" className="h-full">
                            <div className="flex flex-col items-center text-center p-6 h-full">
                                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-white shadow-md">
                                    <Image src={review.image} alt={review.name} fill className="object-cover" />
                                </div>
                                <p className="text-slate-600 mb-4 flex-grow italic leading-relaxed text-sm">"{review.content}"</p>
                                <div className="text-slate-900 font-semibold text-sm tracking-wide">
                                    - {review.name}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
