import SectionShell from "./SectionShell";

function FavoriteCard({ group, item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      data-track={`favorite:${group}:${item.title}`}
      className="group flex h-full gap-4 border border-slate-200 bg-white p-4 transition-transform duration-300 hover:-translate-y-1"
      style={{ borderRadius: "1.75rem", boxShadow: "0 18px 42px -34px rgba(15, 23, 42, 0.48)" }}
    >
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
        <img src={item.cover} alt={`${item.title} cover`} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="min-w-0">
        <p className="text-sm uppercase text-orange-400" style={{ letterSpacing: "0.24em" }}>{item.subtitle}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-800">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
      </div>
    </a>
  );
}

export default function FavoritesSection({ groups }) {
  return (
    <SectionShell
      id="favorites"
      title="收藏"
      intro={
        <p className="mb-8 text-xl text-slate-600">
          分为影视和网站两大类，前者是我愿意反复回看的作品，后者是我高频使用的工具与优质资源网站。
        </p>
      }
    >
      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.group} className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <h3 className="text-lg font-semibold text-slate-500" style={{ letterSpacing: "0.28em" }}>{group.group}</h3>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.items.map((item) => (
                <FavoriteCard key={item.title} group={group.group} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionShell>
  );
}
