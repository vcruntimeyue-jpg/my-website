import SectionShell from "./SectionShell";

function MusicCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      data-track={`music:${item.title}`}
      className="group flex h-full flex-col overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1"
      style={{ borderRadius: "2rem", boxShadow: "0 18px 40px -28px rgba(15, 23, 42, 0.45)" }}
    >
      <div className="overflow-hidden bg-slate-100" style={{ aspectRatio: "4 / 3" }}>
        <img
          src={item.cover}
          alt={`${item.title} cover`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 py-5">
        <h3 className="text-2xl font-semibold text-slate-800">{item.title}</h3>
        <p className="text-base leading-7 text-slate-600">{item.summary}</p>
      </div>
    </a>
  );
}

export default function MusicSection({ items }) {
  return (
    <SectionShell
      id="music"
      title="音乐"
      intro={
        <p className="mb-8 text-xl text-slate-600">
          这里整理了我长期收藏和反复循环的歌单与单曲。不同风格的音乐，构成了我日常最稳定的情绪背景。
        </p>
      }
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <MusicCard key={item.title} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}
