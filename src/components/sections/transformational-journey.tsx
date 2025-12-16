"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

const images = [
    "/images/journey/journey-4.png",
    "/images/journey/journey-2.jpg",
    "/images/journey/journey-3.png",
    "/images/journey/journey-1.png"
];

export function TransformationalJourney() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <FadeIn direction="up">
                            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-8 font-sans">
                                Трансформационное путешествие
                            </h2>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.2}>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-sans">
                                <p>
                                    Погрузитесь в атмосферу, где природа и древние практики помогают найти путь к себе. Наш ретрит — это не просто отдых, это глубокая работа с телом и сознанием.
                                </p>
                                <p>
                                    Мы используем комплексный подход, объединяя йогу, медитации, звуковую терапию и культурное погружение. Каждый день программы продуман так, чтобы вы чувствовали заботу и обновление.
                                </p>
                                <p>
                                    От утренних практик на рассвете до вечерних церемоний — каждый момент наполнен смыслом и гармонией.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Image Grid */}
                    <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                        <FadeIn direction="left" delay={0.2} className="space-y-4 pt-8">
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src={images[0]}
                                    alt="Journey 1"
                                    fill
                                    className="object-cover object-[25%_50%] scale-110 hover:scale-115 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative h-40 md:h-56 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src={images[1]}
                                    alt="Journey 2"
                                    fill
                                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.4} className="space-y-4">
                            <div className="relative h-40 md:h-56 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src={images[2]}
                                    alt="Journey 3"
                                    fill
                                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src={images[3]}
                                    alt="Journey 4"
                                    fill
                                    className="object-cover object-[25%_50%] scale-110 hover:scale-115 transition-transform duration-700"
                                />
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
