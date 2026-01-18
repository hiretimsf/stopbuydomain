"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

import { DOMAINS, DOMAIN_COUNT, TOTAL_WASTED } from "@/config/domains";

export const Receipt = () => {
    const [mounted, setMounted] = useState(false);
    const [txId, setTxId] = useState("");
    const [date, setDate] = useState("");
    const [barcodeWidths, setBarcodeWidths] = useState<string[]>([]);

    useEffect(() => {
        setMounted(true);
        setTxId(Math.random().toString(36).substring(2, 9).toUpperCase());
        setDate(new Date().toLocaleDateString());
        setBarcodeWidths(Array.from({ length: 40 }).map(() => (Math.random() > 0.5 ? '2px' : '1px')));
    }, []);

    const total = TOTAL_WASTED;
    const count = DOMAIN_COUNT;

    return (
        <div className="relative group">
            {/* Subtle Shadow/Depth */}
            <div className="absolute inset-x-4 bottom-[-20px] h-8 bg-black/5 blur-xl rounded-full scale-90 transition-transform group-hover:scale-100" />
            
            <motion.div 
                initial={{ rotate: -1, y: 20, opacity: 0 }}
                animate={{ rotate: 0.5, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="relative bg-[#fdfdfd] text-zinc-900 px-6 py-10 md:px-10 md:py-14 font-mono w-full max-w-[420px] mx-auto overflow-hidden ring-1 ring-black/5"
                style={{
                  backgroundImage: "radial-gradient(#e5e7eb 0.5px, transparent 0.5px)",
                  backgroundSize: "20px 20px"
                }}
            >
                {/* Jagged Top Edge (Subtle) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[radial-gradient(circle_at_50%_100%,transparent_4px,#fdfdfd_4px)] bg-[length:12px_8px] repeat-x z-10" />

                {/* Receipt Header */}
                <div className="text-center mb-10 space-y-4 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-3">
                        <Image 
                            src="/logo.png" 
                            alt="Logo" 
                            width={32} 
                            height={32} 
                        />
                        <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">STOP BUY DOMAINS</h2>
                    </div>
                    <div className="flex justify-between w-full text-[10px] font-bold text-zinc-400 border-y border-zinc-100 py-2">
                        <span>TX: {mounted ? txId : "-------"}</span>
                        <span>{mounted ? date : "--/--/----"}</span>
                    </div>
                </div>

                {/* Domain List (Scrollable if too long to fit comfortably) */}
                <div className="space-y-4 mb-10 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar">
                    {DOMAINS.map((d, i) => (
                        <div key={i} className="flex justify-between items-start gap-4 uppercase group/item">
                            <div className="flex flex-col min-w-0">
                                <span className={`text-xs font-bold truncate ${d.status === 'ACTIVE' ? 'text-zinc-900' : 'text-zinc-700 transition-colors group-hover/item:text-zinc-900'}`}>
                                    {d.name}
                                </span>
                                {d.status === 'ACTIVE' && (
                                    <span className="text-xs text-green-600 font-black tracking-tighter mt-0.5">
                                        * Built & Deployed
                                    </span>
                                )}
                            </div>
                            <div className="grow border-b border-dotted border-zinc-200 mt-2.5"></div>
                            <span className={`text-xs font-bold ${d.status === 'ACTIVE' ? 'text-zinc-900' : 'text-zinc-700 group-hover/item:text-zinc-900'}`}>
                                {d.price.toFixed(2)}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Total Section */}
                <div className="border-t-2 border-zinc-900 pt-8 space-y-2">
                    <div className="flex justify-between text-xs font-black text-zinc-400 uppercase tracking-widest">
                        <span>ITEMS COUNT</span>
                        <span>{count}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-black uppercase tracking-tight">TOTAL AMOUNT</span>
                        <span className="text-4xl font-black tracking-tighter">${total.toFixed(2)}</span>
                    </div>
                </div>

                {/* Barcode-ish Area */}
                <div className="mt-12 flex flex-col items-center">
                    <div className="flex gap-0.5 h-10 w-full max-w-[200px] mb-2 opacity-20">
                        {mounted && barcodeWidths.map((width, i) => (
                            <div key={i} className="bg-black grow" style={{ width }} />
                        ))}
                        {!mounted && Array.from({ length: 40 }).map((_, i) => (
                            <div key={i} className="bg-black grow" style={{ width: '1px' }} />
                        ))}
                    </div>
                    <span className="text-[8px] font-bold text-zinc-300 uppercase tracking-[0.4em]">PLEASE STOP NOW</span>
                </div>

                {/* Jagged Bottom Edge */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-[radial-gradient(circle_at_50%_0%,transparent_6px,#fdfdfd_6px)] bg-[length:16px_12px] repeat-x" />
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
