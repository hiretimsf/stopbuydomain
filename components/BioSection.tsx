"use client";

import { motion } from "framer-motion";

export function BioSection() {
  return (
    <div className="bg-white p-8 border border-zinc-200 shadow-lg flex-1 relative overflow-hidden group">
      <div className="flex flex-col gap-6 relative z-10">
        <header className="flex items-center gap-3">
          <div className="w-2 h-8 bg-red-600" />
          <div className="flex flex-col">
            <h3 className="font-mono text-md font-medium uppercase text-zinc-400">
              HELLO, I'M TIM
            </h3>
            <div className="h-px w-full bg-zinc-100 mt-1" />
          </div>
        </header>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-mono text-sm leading-relaxed text-zinc-600 uppercase"
        >
          I built this site to stop my domain buying habit. My <a href="https://github.com/hiretimsf/Next.js-Blog-App" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition-colors">most successful project</a> has no custom domain and over 460 GitHub stars. Learn more about me at <a href="https://hiretimsf.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition-colors">hiretimsf.com</a>
        </motion.p>
      </div>
    </div>
  );
}

