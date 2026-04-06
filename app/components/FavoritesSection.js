import SectionShell from "./SectionShell";

export default function FavoritesSection() {
  return (
    <SectionShell
      id="favorites"
      title="收藏"
      intro={
        <p className="mb-8 text-xl text-slate-600">
          分为影视和网站两大类，前者是我愿意反复回看的作品，后者是我高频使用的工具与优质资源网站。
        </p>
      }
    />
  );
}
