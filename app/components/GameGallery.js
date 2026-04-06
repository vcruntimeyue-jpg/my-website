import { getGameDisplayItems } from "../content/presentation";

function GamePoster({ item }) {
  if (item.cover) {
    return (
      <div className="mx-auto w-[96%] overflow-hidden bg-slate-100 md:w-[95%]" style={{ aspectRatio: "16 / 9" }}>
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
      className="mx-auto w-[96%] md:w-[95%]"
      style={{ aspectRatio: "16 / 9", background: item.posterColor }}
    />
  );
}

function GameCard({ item }) {
  return (
    <article className="game-card h-full overflow-hidden p-5 accentSoftCard md:p-6">
      <GamePoster item={item} />
      <div className="flex min-h-[236px] flex-col justify-start px-2 pb-9 pt-6 md:px-3 md:pb-11 md:pt-7">
        <div className="space-y-4">
          <h3 className="game-title-spacing line-clamp-2 min-h-[4.1rem] font-fantasy text-[2rem] leading-[1.02] text-slate-800 md:text-[2.25rem]">
            {item.title}
          </h3>
          <p className="line-clamp-4 pr-3 text-base leading-7 text-slate-600 md:pr-5">{item.summary}</p>
        </div>
      </div>
    </article>
  );
}

export default function GameGallery({ items, variant = "home" }) {
  const displayItems = getGameDisplayItems(items, variant);

  return (
    <div className="game-card-grid grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {displayItems.map((item) => (
        <GameCard key={item.title} item={item} />
      ))}
    </div>
  );
}
