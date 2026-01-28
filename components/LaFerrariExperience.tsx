"use client";

import { MotionValue, useTransform, motion } from "framer-motion";
import { carData } from "@/data/carData";

interface LaFerrariExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function LaFerrariExperience({ scrollYProgress }: LaFerrariExperienceProps) {
    // PHASE 0: HERO (0% - 20%)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

    // PHASE 1: DESIGN (30% - 60%)
    const designOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
    const designY = useTransform(scrollYProgress, [0.25, 0.35], [50, 0]);

    // PHASE 2: ENGINE (70% - 100%)
    const engineOpacity = useTransform(scrollYProgress, [0.70, 0.80], [0, 1]);
    const engineY = useTransform(scrollYProgress, [0.70, 0.80], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 w-full h-full p-8 md:p-20 flex flex-col justify-center">

            {/* PHASE 0: HERO */}
            <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h2 className="text-sm md:text-xl font-rajdhani tracking-[0.5em] text-ferrari-red mb-4">{carData.hero.tagline}</h2>
                <h1 className="text-5xl md:text-9xl font-orbitron font-bold tracking-tighter text-glow uppercase">
                    {carData.hero.title}
                </h1>
                <div className="mt-8 px-8 py-3 border border-white/20 backdrop-blur-sm bg-black/40">
                    <span className="text-2xl font-rajdhani text-bright-gold pl-2">Starts at {carData.hero.price}</span>
                </div>
            </motion.div>

            {/* PHASE 1: DESIGN */}
            <motion.div style={{ opacity: designOpacity, y: designY }} className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-ferrari-red"></div>
                    <span className="text-ferrari-red tracking-widest font-orbitron text-sm">DESIGN PHILOSOPHY</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-orbitron mb-6">{carData.design.title}</h2>
                <p className="text-lg md:text-xl text-gray-300 font-rajdhani leading-relaxed mb-8">
                    {carData.design.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {carData.design.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-ferrari-red"></div>
                            <span className="text-sm tracking-widest font-orbitron">{feature}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* PHASE 2: ENGINE */}
            <motion.div style={{ opacity: engineOpacity, y: engineY }} className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 max-w-xl text-right">
                <div className="flex items-center gap-4 mb-6 justify-end">
                    <span className="text-ferrari-red tracking-widest font-orbitron text-sm">PERFORMANCE</span>
                    <div className="w-12 h-[1px] bg-ferrari-red"></div>
                </div>
                <h2 className="text-4xl md:text-6xl font-orbitron mb-10">{carData.engine.title}</h2>
                <div className="space-y-6">
                    {carData.engine.specs.map((spec, i) => (
                        <div key={i} className="border-b border-white/10 pb-2 flex justify-end gap-8 items-end">
                            <span className="text-gray-400 font-rajdhani text-sm uppercase">{spec.label}</span>
                            <span className="text-3xl font-orbitron text-bright-gold">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
