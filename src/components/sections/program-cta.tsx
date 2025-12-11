import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/shared/contact-modal";

export function ProgramCTA() {
    return (
        <section className="py-24 bg-retreat-bg text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <FadeIn direction="up">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8 font-sans">
                        Готовы начать свое путешествие?
                    </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <ContactModal
                        title="Бронирование"
                        message="Для бронирования места свяжитесь с оператором"
                    >
                        <Button
                            size="lg"
                            className="px-10 py-6 text-lg bg-[#87CEEB] hover:bg-[#5FB6D9] text-white border-none shadow-sm rounded-full transition-all hover:scale-105"
                        >
                            Забронировать место
                        </Button>
                    </ContactModal>
                </FadeIn>
            </div>
        </section>
    );
}
