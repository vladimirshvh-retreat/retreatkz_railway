import { getCommunityBySlug, communityData } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export async function generateStaticParams() {
    return communityData.map((item) => ({
        slug: item.slug,
    }));
}

export default async function CommunityPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getCommunityBySlug(slug);

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-24 pb-20">
            <div className="container mx-auto px-4">
                <Link href="/#community">
                    <Button variant="ghost" className="mb-8 hover:bg-slate-100">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Назад к сообществу
                    </Button>
                </Link>

                <article className="max-w-4xl mx-auto">
                    <FadeIn direction="up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 font-tenor text-center">
                            {data.title}
                        </h1>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-12 shadow-xl">
                            <Image
                                src={data.images[0]}
                                alt={data.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.3}>
                        <div
                            className="prose prose-lg max-w-none text-slate-600 mb-16"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    </FadeIn>

                    {/* Gallery */}
                    {data.images.length > 1 && (
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-slate-900 font-tenor">Галерея</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.images.slice(1).map((img, index) => (
                                    <FadeIn key={index} delay={0.1 * index} direction="up">
                                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                            <Image
                                                src={img}
                                                alt={`${data.title} gallery ${index + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <Link href="/#booking">
                            <Button size="lg" className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                                Присоединиться к нам
                            </Button>
                        </Link>
                    </div>
                </article>
            </div>
        </main>
    );
}
