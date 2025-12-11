import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface ContactModalProps {
    children: React.ReactNode; // The trigger button
    title?: string;
    message?: string;
}

export function ContactModal({
    children,
    title = "Бронирование",
    message = "Для бронирования места свяжитесь с нами"
}: ContactModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white">
                <DialogHeader>
                    <DialogTitle className="text-center font-sans text-2xl mb-2">{title}</DialogTitle>
                </DialogHeader>
                <div className="text-center space-y-6 py-4">
                    <p className="text-slate-600 font-light text-lg">
                        {message}
                    </p>
                    <div className="flex flex-col gap-3 mt-4">
                        <Button
                            size="lg"
                            className="bg-white/10 hover:bg-green-500/20 text-slate-900 border border-slate-200 hover:border-green-500/50 w-full justify-start gap-3 backdrop-blur-md shadow-sm transition-all duration-300 group"
                            asChild
                        >
                            <a href={siteConfig.contacts.whatsapp.link} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                                <span className="font-light">WhatsApp</span>
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            className="bg-white/10 hover:bg-[#87CEEB]/20 text-slate-900 border border-slate-200 hover:border-[#87CEEB]/50 w-full justify-start gap-3 backdrop-blur-md shadow-sm transition-all duration-300 group"
                            asChild
                        >
                            <a href={siteConfig.contacts.telegram.link} target="_blank" rel="noopener noreferrer">
                                <Send className="w-5 h-5 text-[#87CEEB] group-hover:scale-110 transition-transform" />
                                <span className="font-light">Telegram</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
