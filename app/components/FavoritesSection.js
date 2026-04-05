"use client";

import Image from "next/image";
import RevealSection from "./RevealSection";

function FavoriteItem({ item, compact }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" data-track={`favorite:${item.title}`} className="block">
      <article className="flex items-start gap-4 rounded-xl p-3 hover:bg-slate-100/70 transition-colors">
        <div className={`relative ${compact ? "w-12 h-12" : "w-16 h-24"} flex-shrink-0 rounded-lg overflow-hidden bg-slate-200`}>
          <Image
            src={item.cover}
            alt={item.title}
            fill
            sizes={compact ? "48px" : "64px"}
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-fantasy text-lg text-slate-800">{item.title}</h4>
          <p className="text-sm text-slate-500">{item.subtitle}</p>
          <p className="text-sm text-slate-600 mt-2 leading-6">{item.desc}</p>
        </div>
      </article>
    </a>
  );
}

function FavoriteGroup({ group }) {
  const compact = group.group === "工具" || group.group === "网站";
  return (
    <section className="accentLightBg rounded-3xl p-6 md:p-8">
      <h3 className="font-fantasy text-2xl mb-6 text-slate-800">{group.group}</h3>
      <div className="space-y-3">
        {group.items.map((item) => (
          <FavoriteItem key={item.title} item={item} compact={compact} />
        ))}
      </div>
    </section>
  );
}

export default function FavoritesSection({ groups }) {
  return (
    <RevealSection id="favorites" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-4">收藏</h2>
        <p className="text-xl mb-8 text-slate-600 max-w-3xl">
          一些长期影响我创作和思考方式的书、电影、工具与网站。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <FavoriteGroup key={group.group} group={group} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
