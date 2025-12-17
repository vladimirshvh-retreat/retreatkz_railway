"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { packagesData } from "@/lib/data";
import Link from "next/link";

export function Packages() {
    return (
        <section id="packages" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-sans">Верни лёгкость телу, ясность уму и гармонию душе</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            каждое действие определит твой путь
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packagesData.map((pkg, index) => (
                        <FadeIn
                            key={index}
                            delay={index * 0.1}
                            direction="up"
                            className="h-full"
                        >
                            <Link href={`/packages/${pkg.slug}`} className="block h-full">
                                <Card className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border-none cursor-pointer flex flex-col p-0 gap-0">
                                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                                        <Image
                                            src={pkg.images[0]}
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
                                        <p className="text-slate-600 line-clamp-3">{pkg.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="link" className="p-0 text-primary font-semibold hover:text-primary/80">
                                            Читать дальше →
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

