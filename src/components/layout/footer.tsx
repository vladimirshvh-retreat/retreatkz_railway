import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/config";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand & About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-sans tracking-wide">МЕСТОРОЖДЕНИЯ</h3>
                        <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                            Этот ретрит — больше, чем программа.
                            Это встреча с собой настоящим: лёгким, свободным, живым.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Навигация</h4>
                        <ul className="space-y-2">
                            <li><Link href="#hero" className="text-slate-400 hover:text-primary transition-colors">О ретрите</Link></li>
                            <li><Link href="#packages" className="text-slate-400 hover:text-primary transition-colors">Тарифы</Link></li>
                            <li><Link href="#vibe" className="text-slate-400 hover:text-primary transition-colors">Программа</Link></li>
                            <li><Link href="#booking" className="text-slate-400 hover:text-primary transition-colors">Контакты</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                        <address className="not-italic text-slate-400 space-y-4">
                            <p>Казахстан, г. Алматы</p>

                            <div className="flex flex-col gap-3 items-start">
                                <Button variant="outline" className="gap-2 bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white" asChild>
                                    <a href={siteConfig.contacts.whatsapp.link} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="w-4 h-4" /> WhatsApp
                                    </a>
                                </Button>
                                <Button variant="outline" className="gap-2 bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white" asChild>
                                    <a href={siteConfig.contacts.telegram.link} target="_blank" rel="noopener noreferrer">
                                        <Send className="w-4 h-4" /> Telegram
                                    </a>
                                </Button>
                            </div>
                        </address>
                    </div>
                </div>

                <Separator className="bg-slate-800 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>&copy; 2025 МЕСТОРОЖДЕНИЯ. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="cursor-default">Privacy Policy</span>
                        <span className="cursor-default">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

