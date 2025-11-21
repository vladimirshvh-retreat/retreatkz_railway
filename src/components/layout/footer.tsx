import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-tenor tracking-wide">Oryn Retreat</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Experience the perfect blend of surf, yoga, and relaxation in the heart of Bali.
                            Your tropical escape awaits.
                        </p>            <div className="flex gap-4">
                            <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors">Our Packages</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors">Gallery</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <address className="not-italic text-slate-400 space-y-2">
                            <p>Jalan Pantai Batu Mejan</p>
                            <p>Canggu, Bali, Indonesia</p>
                            <p className="pt-2">
                                <a href="mailto:info@mondosurfvillage.com" className="hover:text-primary transition-colors">
                                    info@mondosurfvillage.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+628123456789" className="hover:text-primary transition-colors">
                                    +62 812 3456 789
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-slate-400 mb-4">Subscribe to get the latest news and offers.</p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-primary"
                            />
                            <Button size="icon">
                                <span className="sr-only">Subscribe</span>
                                →
                            </Button>
                        </div>
                    </div>
                </div>

                <Separator className="bg-slate-800 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Mondo Surf Village. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
