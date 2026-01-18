"use client";

import { motion } from "framer-motion";
import { Receipt } from "./Receipt";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-100 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-50 rounded-full blur-[150px] opacity-30" />
        {/* Scanner Line */}
        <div className="absolute inset-x-0 h-[2px] bg-red-500/10 animate-scan z-10" />
      </div>

      <div className="container px-4 mx-auto relative z-20">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl mx-auto">
            
            {/* Left Side: Receipt */}
            <motion.div 
              initial={{ opacity: 0, x: -80, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 50 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] z-20"
            >
              <Receipt />
            </motion.div>

            {/* Right Side: Photo */}
            <motion.div 
              initial={{ opacity: 0, x: 80, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 4 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="w-full lg:w-3/5 lg:-ml-32 mt-[-40px] lg:mt-0 z-10"
            >
              {/* Enhanced Image Container */}
              <div 
                  className="w-full aspect-video bg-white p-4 rounded-sm border border-zinc-200 shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff] relative overflow-hidden group"
              >
                  <div className="absolute inset-0 bg-zinc-900 opacity-0 transition-opacity" />
                  <div className="w-full h-full bg-zinc-50 rounded-sm border border-dashed border-zinc-300 flex items-center justify-center relative overflow-hidden">
                      {/* Actual Image */}
                      <Image 
                        src="/images/photo.png" 
                        alt="Evidence" 
                        fill 
                        className="object-cover"
                      />
                      
                      {/* Overlay Elements */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Viewfinder Corners */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-zinc-100/50" />
                        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-zinc-100/50" />
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-zinc-100/50" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-zinc-100/50" />
                        
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 font-mono text-[8px] uppercase font-black tracking-[0.5em] flex flex-col items-center">
                            <span className="animate-pulse shadow-sm">FILE_PHOTO_01</span>
                        </div>
                      </div>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
