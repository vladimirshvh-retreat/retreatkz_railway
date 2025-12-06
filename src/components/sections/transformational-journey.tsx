"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

const images = [
    "/images/hero/rice-terraces.png",
    "/images/hero/ceremony.png",
    "/images/hero/surfing.png",
    "/images/hero/sound-healing.png"
];

export function TransformationalJourney() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-tenor">
                            Трансформационное путешествие
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Погрузитесь в атмосферу, где природа и древние практики помогают найти путь к себе.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FadeIn direction="right" className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={images[0]}
                            alt="Journey 1"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2} className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        <video
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            {/* Placeholder video - replacing with an image for now until video assets are provided or using a reliable public stock video URL if available. 
                        For this clone, we'll re-use an image as a placeholder for the video slot but styling it to look like media.
                        Actually, let's just use an image for robust rendering in this demo.
                    */}
                            <source src="https://videos.pexels.com/video-files/4201994/4201994-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4} className="md:col-span-2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={images[1]}
                            alt="Journey 2"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
