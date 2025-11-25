"use client";

import { Sun, Brain, Flame, Smile, Heart, Mountain } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { programData } from "@/lib/data";
import Link from "next/link";

const icons = [Sun, Brain, Flame, Smile, Heart, Mountain];

export function Vibe() {
    return (
        <section id="vibe" className="pt-20 pb-0 bg-slate-50">
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

                <div className="relative pb-20">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block" />

                    <div className="space-y-12">
                        {programData.map((item, index) => {
                            const Icon = icons[index];
                            return (
                                <FadeIn
                                    key={index}
                                    direction={index % 2 === 0 ? "left" : "right"}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    <div className="flex-1 text-center md:text-left relative group">
                                        {/* Connecting Line */}
                                        <div className={`hidden md:block absolute top-1/2 w-8 h-0.5 bg-slate-200 transition-colors group-hover:bg-[#87CEEB] ${index % 2 === 0 ? "-right-8" : "-left-8"}`} />

                                        <Link href={`/program/${item.slug}`} className="block cursor-pointer">
                                            <div className={`md:max-w-md ${index % 2 === 0 ? "md:ml-auto md:text-right" : ""}`}>
                                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#87CEEB] transition-colors">{item.title}</h3>
                                                <p className="text-[#87CEEB] font-semibold mb-2">{item.subtitle}</p>
                                                <p className="text-slate-600">{item.description}</p>
                                                <span className="text-sm text-[#87CEEB] mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                                                    Подробнее →
                                                </span>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border-4 border-[#87CEEB] text-[#87CEEB]">
                                        {Icon && <Icon className="w-8 h-8" />}
                                    </div>

                                    <div className="flex-1" />
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

