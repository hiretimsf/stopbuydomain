"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { DOMAINS, DOMAIN_COUNT, TOTAL_WASTED } from "@/config/domains";
import { CheckIcon } from "../icons/CheckIcon";
import { CrossIcon } from "../icons/CrossIcon";

export const Receipt = () => {
  const [mounted, setMounted] = useState(false);
  
  // Initialize with empty strings to avoid hydration mismatch
  const [txData, setTxData] = useState({ id: "", date: "" });

  useEffect(() => {
    setMounted(true);
    setTxData({
      id: Math.random().toString(36).substring(2, 9).toUpperCase(),
      date: new Date().toLocaleDateString(),
    });
  }, []);

  // Generate barcode pattern only once on mount
  const barcodePattern = useMemo(() => {
    return Array.from({ length: 40 }).map(() => (Math.random() > 0.5 ? "2px" : "1px"));
  }, []);

  return (
    <div className="relative group">
      {/* Subtle Shadow/Depth */}
      <div className="absolute inset-x-4 bottom-[-20px] h-8 bg-black/5 blur-xl rounded-full scale-90 transition-transform group-hover:scale-100" />
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#fdfdfd] text-zinc-900 px-6 py-10 md:px-10 md:py-14 font-mono w-full max-w-[420px] mx-auto overflow-hidden ring-1 ring-black/5"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px"
        }}
      >
        {/* Jagged Top Edge (Subtle) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[radial-gradient(circle_at_50%_100%,transparent_4px,#fdfdfd_4px)] bg-size-[12px_8px] repeat-x z-10" />

        {/* Receipt Header */}
        <header className="text-center mb-10 space-y-4 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Stop Buying Domains Logo" 
              width={48} 
              height={48} 
            />
            <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">STOP BUY DOMAINS</h2>
          </div>
        </header>

        {/* Domain List */}
        <div className="space-y-4 mb-10 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar">
          {DOMAINS.map((domain, i) => (
            <div key={i} className="flex justify-between items-start gap-4 uppercase group/item">
              <div className="flex items-center gap-2 min-w-0">
                {domain.status === 'ACTIVE' ? (
                  <CheckIcon className="size-4" />
                ) : (
                  <CrossIcon className="size-4" />
                )}
                {domain.name === 'hiretimsf.com' ? (
                  <a 
                    href="https://hiretimsf.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold truncate text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    {domain.name}
                  </a>
                ) : (
                  <span className={`text-xs font-bold truncate ${domain.status === 'ACTIVE' ? 'text-zinc-900' : 'text-zinc-500 transition-colors group-hover/item:text-zinc-900'}`}>
                    {domain.name}
                  </span>
                )}
              </div>
              <div className="grow border-b border-dotted border-zinc-200 mt-2.5" />
              <span className={`text-xs font-bold ${domain.status === 'ACTIVE' ? 'text-zinc-900' : 'text-zinc-500 group-hover/item:text-zinc-900'}`}>
                ${domain.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <footer className="border-t-2 border-zinc-900 pt-8 space-y-2">
          <div className="flex justify-between text-[10px] font-black text-zinc-400 uppercase tracking-widest">
            <span>ITEMS COUNT</span>
            <span>{DOMAIN_COUNT}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-black uppercase tracking-tight">TOTAL AMOUNT</span>
            <span className="text-4xl font-black tracking-tighter">${TOTAL_WASTED.toFixed(2)}</span>
          </div>
        </footer>

        {/* Barcode-ish Area */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex gap-0.5 h-10 w-full max-w-[200px] mb-2 opacity-20">
            {mounted ? (
              barcodePattern.map((width, i) => (
                <div key={i} className="bg-black grow" style={{ width }} />
              ))
            ) : (
              Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="bg-black grow" style={{ width: '1px' }} />
              ))
            )}
          </div>
          <span className="text-[8px] font-bold text-zinc-300 uppercase tracking-[0.4em]">PLEASE STOP NOW</span>
        </div>

        {/* Jagged Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[radial-gradient(circle_at_50%_0%,transparent_6px,#fdfdfd_6px)] bg-size-[16px_12px] repeat-x" />
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f1f1f1;
        }
      `}</style>
    </div>
  );
};

