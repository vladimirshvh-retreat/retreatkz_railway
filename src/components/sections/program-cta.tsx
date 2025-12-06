"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ProgramCTA() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#87CEEB] blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#87CEEB] blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <FadeIn direction="up">
                    <h2 className="text-3xl md:text-5xl md:leading-tight font-bold mb-6 font-tenor">
                        Готовы начать свое путешествие?
                    </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                        Позвольте себе этот опыт. Забронируйте место сейчас и сделайте первый шаг к обновлению, гармонии и внутренней силе.
                    </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.4}>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg" className="text-lg px-12 py-8 bg-[#87CEEB] hover:bg-[#5FB6D9] text-white border-none shadow-xl rounded-full transition-all hover:scale-105">
                                Забронировать место
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-white text-slate-900">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-tenor text-center">Заявка на ретрит</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const formData = new FormData(form);
                                const data = Object.fromEntries(formData.entries());

                                try {
                                    const res = await fetch('/api/book', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(data),
                                    });

                                    if (res.ok) {
                                        alert('Спасибо! Ваша заявка отправлена.');
                                        form.reset();
                                    } else {
                                        alert('Ошибка при отправке. Попробуйте позже.');
                                    }
                                } catch (err) {
                                    console.error(err);
                                    alert('Ошибка при отправке.');
                                }
                            }}>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="cta-name">Ваше имя</Label>
                                        <Input id="cta-name" name="name" placeholder="Иван Иванов" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="cta-email">Email</Label>
                                        <Input id="cta-email" name="email" type="email" placeholder="example@mail.com" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="cta-phone">Телефон / WhatsApp</Label>
                                        <Input id="cta-phone" name="phone" placeholder="+7 999 000 00 00" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="cta-message">Комментарий</Label>
                                        <Textarea id="cta-message" name="message" placeholder="Хочу узнать подробности..." />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full bg-[#87CEEB] hover:bg-[#5FB6D9] text-white">Отправить заявку</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </FadeIn>
            </div>
        </section>
    );
}
