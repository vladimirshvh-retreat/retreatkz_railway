"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Promo() {
    return (
        <section className="py-20 bg-primary text-white overflow-hidden relative">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Once is never enough.
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90">
                        Come back for more adventures and save more! Join our loyalty program for exclusive discounts.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                            <h3 className="text-4xl font-bold mb-2">15% OFF</h3>
                            <p className="text-lg mb-4">For your 2nd visit</p>
                            <p className="text-sm text-white/80">
                                Book your second stay with us and enjoy a special discount as a returning family member.
                            </p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                            <h3 className="text-4xl font-bold mb-2">20% OFF</h3>
                            <p className="text-lg mb-4">For your 3rd visit +</p>
                            <p className="text-sm text-white/80">
                                For our most loyal guests, we offer our biggest discount to say thank you for choosing us again.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Button size="lg" variant="secondary" className="text-primary font-bold text-lg px-8 py-6">
                            Book Your Return Trip
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
