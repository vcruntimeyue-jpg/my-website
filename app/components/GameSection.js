"use client";

import Image from "next/image";
import RevealSection from "./RevealSection";

function GameCard({ item }) {
  return (
    <article className="group font-sans rounded-2xl accentWhiteBg border border-slate-200/70 overflow-hidden">
      <a href={item.url} target="_blank" rel="noopener noreferrer" data-track={`game:${item.title}`} className="block">
        <div className="relative h-44">
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
          <div className="text-xs uppercase tracking-wider text-orange-500 mb-2">{item.type}</div>
          <h3 className="font-fantasy text-xl text-slate-800 mb-2">{item.title}</h3>
          <p className="text-sm text-slate-600 leading-6">{item.summary}</p>
        </div>
      </a>
    </article>
  );
}

export default function GameSection({ items }) {
  return (
    <RevealSection id="game" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-4">游戏</h2>
        <p className="text-xl mb-8 text-slate-600">
          这里整理了我达成全成就的游戏清单。从硬核的操作挑战到治愈的艺术品，它们见证了我的游戏历程。对我而言，这些不只是冰冷的数字和成就，更是陪伴我成长、带给我惊喜的珍贵回忆。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <GameCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
