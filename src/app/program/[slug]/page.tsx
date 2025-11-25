import { getProgramBySlug, programData } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Send } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/config";

export async function generateStaticParams() {
    return programData.map((item) => ({
        slug: item.slug,
    }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getProgramBySlug(slug);

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-24 pb-20">
            <div className="container mx-auto px-4">
                <Link href="/#vibe">
                    <Button variant="ghost" className="mb-8 hover:bg-slate-100">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Назад к программе
                    </Button>
                </Link>

                <article className="max-w-4xl mx-auto">
                    <FadeIn direction="up">
                        <div className="text-center mb-6">
                            {data.subtitle && (
                                <span className="text-primary font-bold text-xl tracking-wider uppercase mb-2 block">
                                    {data.subtitle}
                                </span>
                            )}
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-tenor">
                                {data.title}
                            </h1>
                        </div>
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

                    <div className="mt-16 text-center space-y-8">
                        <Link href="/#booking">
                            <Button size="lg" className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                                Забронировать
                            </Button>
                        </Link>

                        <div className="pt-8 border-t border-slate-100">
                            <h3 className="text-xl font-tenor mb-6 text-slate-900">Обратная связь</h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button variant="outline" size="lg" className="gap-2 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-colors" asChild>
                                    <a href={siteConfig.contacts.whatsapp.link} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="w-5 h-5" /> WhatsApp
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="gap-2 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-colors" asChild>
                                    <a href={siteConfig.contacts.telegram.link} target="_blank" rel="noopener noreferrer">
                                        <Send className="w-5 h-5" /> Telegram
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
