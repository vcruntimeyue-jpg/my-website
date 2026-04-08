import SectionShell from "./SectionShell";

const IMAGE_PLACEHOLDERS = [
  {
    title: "城市风光",
    category: "摄影",
    accent: "from-slate-900 via-slate-700 to-amber-500",
    glow: "rgba(245, 158, 11, 0.28)",
  },
  {
    title: "自然景观",
    category: "自然",
    accent: "from-emerald-900 via-teal-700 to-cyan-300",
    glow: "rgba(45, 212, 191, 0.26)",
  },
  {
    title: "创意设计",
    category: "设计",
    accent: "from-fuchsia-900 via-rose-600 to-orange-300",
    glow: "rgba(251, 113, 133, 0.28)",
  },
  {
    title: "街头摄影",
    category: "街拍",
    accent: "from-zinc-950 via-zinc-700 to-stone-300",
    glow: "rgba(120, 113, 108, 0.24)",
  },
  {
    title: "科技产品",
    category: "科技",
    accent: "from-sky-950 via-blue-700 to-cyan-300",
    glow: "rgba(56, 189, 248, 0.28)",
  },
  {
    title: "旅行见闻",
    category: "旅行",
    accent: "from-orange-950 via-orange-600 to-yellow-200",
    glow: "rgba(251, 146, 60, 0.3)",
  },
];

function splitRows(items) {
  return items.reduce(
    (rows, item, index) => {
      rows[index % 2].push(item);
      return rows;
    },
    [[], []]
  );
}

function ImagePlaceholderCard({ item }) {
  return (
    <article
      className="image-marquee-card group relative h-[260px] w-[280px] overflow-hidden rounded-[28px] border border-white/60 bg-white/75 p-4 backdrop-blur-sm sm:h-[300px] sm:w-[360px]"
      style={{ boxShadow: `0 20px 55px -32px ${item.glow}` }}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-3 rounded-[22px] bg-gradient-to-br ${item.accent} transition-transform duration-500 group-hover:scale-[1.03]`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-3 rounded-[22px] opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0) 100%), repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0 1px, transparent 1px 22px)",
        }}
      />
      <div className="relative flex h-full flex-col justify-between rounded-[22px] border border-white/20 p-5 text-white">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs tracking-[0.24em] text-white/80">
            {item.category}
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">Placeholder</span>
        </div>
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="h-2.5 w-16 rounded-full bg-white/30" />
            <div className="h-2.5 w-24 rounded-full bg-white/15" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/78">
              暂时使用占位色块，后续替换为正式图片素材。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ImageMarqueeRow({ items, reverse = false }) {
  const duplicated = [...items, ...items];

  return (
    <div className="image-marquee-shell" aria-label="图片横向滚动占位展示">
      <div className={`image-marquee-track ${reverse ? "image-marquee-track-reverse" : "image-marquee-track-forward"}`}>
        {duplicated.map((item, index) => (
          <div key={`${item.title}-${index}`} className="shrink-0">
            <ImagePlaceholderCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ImagesSection() {
  const [rowOne, rowTwo] = splitRows(IMAGE_PLACEHOLDERS);

  return (
    <SectionShell
      id="images"
      title="图片"
      intro={
        <p className="mb-8 text-xl text-slate-600">
          这里主要收藏我喜欢的壁纸、头像和高质量图片。它们不一定同一种风格，但都在视觉上打动过我。
        </p>
      }
    >
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(241,245,249,0.94))] px-0 py-6 shadow-[0_28px_80px_-48px_rgba(15,23,42,0.34)] sm:px-2 sm:py-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, rgba(251,146,60,0.14), transparent 28%), radial-gradient(circle at bottom right, rgba(56,189,248,0.14), transparent 30%)",
          }}
        />
        <div className="relative flex flex-col gap-5">
          <ImageMarqueeRow items={rowOne} />
          <ImageMarqueeRow items={rowTwo} reverse />
        </div>
      </div>
    </SectionShell>
  );
}
