"use client";

import { Sun, Brain, Flame, Smile, Heart, Mountain } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const timeline = [
    {
        icon: Sun,
        title: "Знакомство с собой",
        description: "Пробуждение твоего тела, адаптация, знакомство, расслабление",
        time: "День 1",
    },
    {
        icon: Brain,
        title: "Погружение",
        description: "Пойдем с тобой к тебе. Интенсивно, но с заботой, приветствуем ум.",
        time: "День 2",
    },
    {
        icon: Flame,
        title: "Настоящий",
        description: "Узнай себя, через страхи, ограничения, установки, тело - расслабься.",
        time: "День 3",
    },
    {
        icon: Smile,
        title: "Добро пожаловать в жизнь",
        description: "Познай себя, когда можно по-другому.",
        time: "День 4",
    },
    {
        icon: Heart,
        title: "Любовь",
        description: "Подари любовь себе.",
        time: "День 5",
    },
    {
        icon: Mountain,
        title: "Открой для себя остров Бали",
        description: "Путешествия, отдых, природа и открытие острова богов.",
        time: "День 6-7",
    },
];

export function Vibe() {
    return (
        <section id="vibe" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-tenor">Организация и забота</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Программа подходит для любого уровня подготовки.
                        </p>
                    </FadeIn>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <FadeIn
                                key={index}
                                direction={index % 2 === 0 ? "left" : "right"}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`md:max-w-md ${index % 2 === 0 ? "md:ml-auto md:text-right" : ""}`}>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-primary font-semibold mb-2">{item.time}</p>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border-4 border-primary text-primary">
                                    <item.icon className="w-8 h-8" />
                                </div>

                                <div className="flex-1" />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
