"use client";

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
      <div className="w-full overflow-hidden bg-slate-100" style={{ aspectRatio: "16 / 9" }}>
        <img
          src={item.cover}
          alt={`${item.title} poster`}
          className="block h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="w-full"
      style={{ aspectRatio: "16 / 9", background: item.posterColor }}
    />
  );
}

function GameCard({ item }) {
  return (
    <article className="h-full overflow-hidden p-3 accentSoftCard md:p-4">
      <GamePoster item={item} />
      <div className="flex min-h-[220px] flex-col justify-start px-3 pb-8 pt-5 md:px-4 md:pb-10 md:pt-6">
        <div className="space-y-4">
          <h3 className="game-title-spacing line-clamp-2 min-h-[4.1rem] font-fantasy text-[2rem] leading-[1.02] text-slate-800 md:text-[2.25rem]">
            {item.title}
          </h3>
          <p className="line-clamp-4 pr-2 text-base leading-7 text-slate-600 md:pr-4">{item.summary}</p>
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
