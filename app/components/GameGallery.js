"use client";

import Link from "next/link";

function sortFeaturedGames(items) {
  return items
    .filter((item) => item.featuredOnHome)
    .sort((a, b) => (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) - (b.featuredOrder ?? Number.MAX_SAFE_INTEGER));
}

function createHomeGrid(items) {
  const featuredItems = sortFeaturedGames(items);
  return [...featuredItems.slice(0, 4), { kind: "more", title: "More" }, ...featuredItems.slice(4)];
}

function GamePoster({ item }) {
  return (
    <div
      aria-hidden="true"
      className="aspect-[16/9] w-full rounded-b-none"
      style={{ background: item.posterColor }}
    />
  );
}

function GameCard({ item }) {
  return (
    <article className="h-full overflow-hidden rounded-xl accentSoftCard">
      <GamePoster item={item} />
      <div className="flex min-h-[148px] flex-col justify-between p-5 md:p-6">
        <div className="space-y-3">
          <h3 className="font-fantasy text-[1.75rem] leading-none text-slate-800">{item.title}</h3>
          <p className="line-clamp-3 text-sm leading-6 text-slate-600">{item.summary}</p>
        </div>
      </div>
    </article>
  );
}

function MoreCard() {
  return (
    <Link href="/game" className="block h-full" aria-label="查看更多游戏">
      <article className="flex h-full min-h-[260px] items-center justify-center rounded-xl bg-slate-800 p-6 text-white shadow-[0_24px_48px_-30px_rgba(15,23,42,0.55)] transition-colors duration-300 hover:bg-slate-700">
        <span className="font-fantasy text-5xl tracking-tight">More</span>
      </article>
    </Link>
  );
}

export default function GameGallery({ items, variant = "home" }) {
  const displayItems = variant === "home" ? createHomeGrid(items) : items;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {displayItems.map((item) =>
        item.kind === "more" ? <MoreCard key="game-more-card" /> : <GameCard key={item.title} item={item} />
      )}
    </div>
  );
}
