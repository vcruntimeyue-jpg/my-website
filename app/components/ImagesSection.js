import SectionShell from "./SectionShell";

function ImageCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      data-track={`image:${item.title}`}
      className="group relative overflow-hidden bg-slate-900 text-white"
      style={{ borderRadius: "2rem", boxShadow: "0 20px 48px -32px rgba(15, 23, 42, 0.55)" }}
    >
      <div className="overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16"
        style={{ background: "linear-gradient(to top, rgba(2, 6, 23, 1), rgba(2, 6, 23, 0.78), rgba(2, 6, 23, 0))" }}
      >
        <p className="text-xs uppercase text-orange-300" style={{ letterSpacing: "0.3em" }}>{item.category}</p>
        <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-200">{item.desc}</p>
      </div>
    </a>
  );
}

export default function ImagesSection({ items }) {
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <ImageCard key={item.title} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}
