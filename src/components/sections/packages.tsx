"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

const packages = [
    {
        title: "Практики для тела и ума",
        description: "Ежедневные медитации, дыхательные техники, йога, цигун, саунд-хилинг и телесные практики. Вы расслабляетесь, отпускаете напряжение, восстанавливаете энергию и чувствуете живость тела.",
        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=800&auto=format&fit=crop",
        tag: "Most Popular",
    },
    {
        title: "🌊 Тишина и очищение",
        description: "Режим частичного молчания и детокс от телефона помогают услышать свой внутренний голос без внешней суеты.",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "☀️ Природа и пространство",
        description: "Зелёные сады, спокойные маршруты для прогулок, тишина за столом — всё направлено на глубокое присутствие.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "💫 Интеграция и ритуалы",
        description: "Каждый день — новое погружение. Финал ретрита — древний балийский ритуал очищения водой, символ нового этапа и внутреннего обновления.",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Путешествие по Бали",
        description: "Красота природы, вулканы, серфинг и многое другое",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Поддержка и Любовь",
        description: "Приглашаем стать частью большой семьи, которая подарит любовь, понимание и заботу.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    },
];

export function Packages() {
    return (
        <section id="packages" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-tenor">Верни лёгкость телу, ясность уму и гармонию душе</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            каждое действие определит твой путь
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <FadeIn
                            key={index}
                            delay={index * 0.1}
                            direction="up"
                            className="h-full"
                        >
                            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group border-none shadow-md">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {pkg.tag && (
                                        <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary/90 text-white border-none">
                                            {pkg.tag}
                                        </Badge>
                                    )}
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-slate-900">{pkg.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">{pkg.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0 text-primary font-semibold hover:text-primary/80">
                                        Читать дальше →
                                    </Button>
                                </CardFooter>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
