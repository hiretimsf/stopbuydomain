"use client";

import { motion } from "framer-motion";
import { Receipt } from "./Receipt";
import { BioSection } from "./BioSection";
import { ImageSection } from "./ImageSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
} as const;

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Abstract Dossier Circles */}
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-zinc-100 rounded-full blur-[100px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-red-50 rounded-full blur-[120px] opacity-20" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        {/* Moving Scanner Line */}
        <div className="absolute inset-x-0 h-px bg-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.3)] animate-scan z-10" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container px-4 mx-auto relative z-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto items-stretch">
          
          {/* Bento Item 1: Receipt */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 flex flex-col justify-center drop-shadow-2xl"
          >
            <Receipt />
          </motion.div>

          {/* Bento Item 2: Image & Bio */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <ImageSection />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-1">
              <BioSection />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

