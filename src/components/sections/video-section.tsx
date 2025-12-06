"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function VideoSection() {
    return (
        <section className="py-20 bg-white px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <FadeIn direction="up">
                    <div className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg h-[400px] md:h-[600px]">
                        <Image
                            src="/images/hero/sunset.png"
                            alt="Retreat Video Thumbnail"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg">
                                    <Play className="text-retreat-brown fill-current text-[#B09E89]" size={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
