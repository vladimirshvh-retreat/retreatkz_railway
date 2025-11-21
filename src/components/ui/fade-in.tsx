"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    direction = "up",
    fullWidth = false,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directions[direction],
                scale: 0.95
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1
            } : {}}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Apple-like ease-out
            }}
            className={`${fullWidth ? "w-full" : ""} ${className}`}
        >
            {children}
        </motion.div>
    );
}
