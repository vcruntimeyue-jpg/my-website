"use client";

import Image from "next/image";
import RevealSection from "./RevealSection";

export default function ImagesSection({ items }) {
  return (
    <RevealSection id="images" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-4">图片</h2>
        <p className="text-xl mb-8 text-slate-600 max-w-3xl">
          记录生活中的视觉片段，覆盖摄影、设计与旅行观察。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group accentWhiteBg rounded-3xl p-4 border border-slate-200/70 overflow-hidden">
              <a href={item.url} target="_blank" rel="noopener noreferrer" data-track={`image:${item.title}`} className="block">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="text-xs uppercase tracking-wider text-orange-500 mb-2">{item.category}</div>
                <h3 className="font-fantasy text-lg mb-2 text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-6">{item.desc}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
