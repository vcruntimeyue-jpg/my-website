"use client";

import Image from "next/image";
import RevealSection from "./RevealSection";

function MusicCard({ item }) {
  return (
    <article className="group font-sans rounded-2xl accentWhiteBg border border-slate-200/70 overflow-hidden">
      <a href={item.url} target="_blank" rel="noopener noreferrer" data-track={`music:${item.title}`} className="block">
        <div className="relative h-56">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <h3 className="font-fantasy text-xl text-slate-800 mb-2">{item.title}</h3>
          <p className="text-sm text-slate-600 leading-6">{item.summary}</p>
        </div>
      </a>
    </article>
  );
}

export default function MusicSection({ items }) {
  return (
    <RevealSection id="music" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-4">音乐</h2>
        <p className="text-xl mb-8 text-slate-600 max-w-3xl">
          音乐是我长期创作的一部分，包含乐队、乐器与合成器实验。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <MusicCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
