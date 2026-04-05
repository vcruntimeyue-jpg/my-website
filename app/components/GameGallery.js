"use client";

import Image from "next/image";

function sortFeaturedGames(items) {
  return items
    .filter((item) => item.featuredOnHome)
    .sort((a, b) => (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) - (b.featuredOrder ?? Number.MAX_SAFE_INTEGER));
}

function getDisplayItems(items, variant) {
  return variant === "home" ? sortFeaturedGames(items) : items;
}

function GamePoster({ item }) {
  if (item.cover) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-slate-100">
        <Image
          src={item.cover}
          alt={`${item.title} poster`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="aspect-[16/9] w-full rounded-[20px]"
      style={{ background: item.posterColor }}
    />
  );
}

function GameCard({ item }) {
  return (
    <article className="h-full overflow-hidden rounded-[26px] p-2 accentSoftCard">
      <GamePoster item={item} />
      <div className="flex min-h-[156px] flex-col justify-between px-4 pb-5 pt-4 md:px-5 md:pb-6">
        <div className="space-y-3">
          <h3 className="game-title-spacing line-clamp-2 min-h-[3.35rem] font-fantasy text-[1.75rem] leading-[0.96] text-slate-800">
            {item.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-6 text-slate-600">{item.summary}</p>
        </div>
      </div>
    </article>
  );
}

export default function GameGallery({ items, variant = "home" }) {
  const displayItems = getDisplayItems(items, variant);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {displayItems.map((item) => (
        <GameCard key={item.title} item={item} />
      ))}
    </div>
  );
}
