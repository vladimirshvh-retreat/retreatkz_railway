"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
    {
        name: "Екатерина",
        role: "Москва",
        content: "Это было невероятное путешествие к себе. Я нашла ответы на вопросы, которые мучили меня годами. Организация, место, люди — все на высшем уровне.",
        image: "/images/hero/yoga-shala.png",
        rating: 5
    },
    {
        name: "Александр",
        role: "Санкт-Петербург",
        content: "Полная перезагрузка. Тишина, природа и практики помогли мне восстановить силы и вернуться в ресурсное состояние. Обязательно вернусь!",
        image: "/images/hero/surfing.png",
        rating: 5
    },
    {
        name: "Мария",
        role: "Алматы",
        content: "Очень душевная атмосфера. Чувствовала себя как дома. Спасибо организаторам за заботу и внимание к каждой детали.",
        image: "/images/hero/rice-terraces.png",
        rating: 5
    }
];

export function ClientExperiences() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-tenor">
                            Отзывы участников
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Истории тех, кто уже прошел этот путь вместе с нами.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <FadeIn key={index} delay={index * 0.2} direction="up" className="h-full">
                            <div className="bg-white p-8 rounded-2xl shadow-sm h-full flex flex-col hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-1 mb-4 text-[#87CEEB]">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-slate-600 mb-6 flex-grow italic">"{review.content}"</p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{review.name}</h4>
                                        <p className="text-sm text-slate-500">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
