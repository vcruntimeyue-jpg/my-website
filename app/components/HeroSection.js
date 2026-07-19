import Link from "next/link";

const RINGS = ["hero-ring-one", "hero-ring-two", "hero-ring-three"];

const ORBIT_ITEMS = [
  { className: "orbit-one-a", emoji: "⚡", label: "代码" },
  { className: "orbit-one-b", emoji: "🎮", label: "游戏" },
  { className: "orbit-two-a", emoji: "🎵", label: "音乐" },
  { className: "orbit-two-b", emoji: "📚", label: "阅读" },
  { className: "orbit-three-a", emoji: "✈️", label: "旅行" },
  { className: "orbit-three-b", emoji: "🌐", label: "开源" },
];

/** @param {{hero: import("../content/schema").HeroContent}} props */
export default function HeroSection({ hero }) {
  return (
    <section id="home" className="hero-section relative flex min-h-[100svh] w-full items-center justify-center px-4 pb-16 pt-32 lg:pt-20">
      <div className="hero-stage relative flex shrink-0 items-center justify-center">
        <div aria-hidden="true" className="absolute inset-0">
          {RINGS.map((ringClass) => (
            <div key={ringClass} className={`hero-ring ${ringClass}`} />
          ))}

          {ORBIT_ITEMS.map((item) => (
            <div key={item.className} className={`orbit-item ${item.className}`}>
              <div className="orbit-position">
                <div className="orbit-badge-shell">
                  <div className="orbit-badge" title={item.label}>
                    {item.emoji}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-core">
          <div aria-hidden="true" className="hero-core-border" />
          <div className="hero-core-content">
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1 className="font-fantasy text-[1.35rem] leading-[1.08] text-slate-900 sm:text-2xl lg:text-[2rem]">
              {hero.title}
            </h1>
            <p className="max-w-[16rem] text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              {hero.summary}
            </p>
            <div className="hero-actions flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <a
                href={hero.primaryAction.href}
                data-track={hero.primaryAction.track}
                className="inline-flex min-h-10 items-center rounded-full bg-orange-500 px-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 sm:min-h-11 sm:px-5"
              >
                {hero.primaryAction.label}
              </a>
              <Link
                href={hero.secondaryAction.href}
                data-track={hero.secondaryAction.track}
                className="inline-flex min-h-10 items-center rounded-full border border-slate-300 bg-white/80 px-4 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600 sm:min-h-11 sm:px-5"
              >
                {hero.secondaryAction.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#blog"
        aria-label="继续浏览博客"
        className="animate-bounce absolute bottom-4 flex min-h-11 min-w-11 flex-col items-center justify-center gap-1 text-slate-400 transition-colors hover:text-orange-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
