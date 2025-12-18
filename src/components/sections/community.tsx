"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { communityData } from "@/lib/data";
import Link from "next/link";

export function Community() {
    return (
        <section id="community" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-sans">Приглашаем</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Ретрит — это осознанный выбор в пользу тишины. Выбор замедлиться, восстановить баланс и открыть в себе ясность, устойчивость и силу.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {communityData.map((item, index) => (
                        <FadeIn
                            key={index}
                            delay={index * 0.2}
                            direction="up"
                            className="text-center h-full"
                        >
                            <Link href={`/community/${item.slug}`} className="block h-full group cursor-pointer">
                                <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                    <Image
                                        src={item.images[0]}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

