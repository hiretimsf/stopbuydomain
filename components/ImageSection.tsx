"use client";

import Image from "next/image";

export function ImageSection() {
  return (
    <div
      className="bg-white p-4 border border-zinc-200 shadow-xl overflow-hidden group relative"
    >
      <div className="aspect-video relative overflow-hidden bg-zinc-50 border border-zinc-300">
        <Image 
          src="/images/photo.png" 
          alt="Evidence Subject Photo" 
          fill 
          className="object-cover"
        />
      </div>
    </div>
  );
}

