"use client";

import RevealSection from "./RevealSection";

export default function FavoritesSection() {
  return (
    <RevealSection id="favorites" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-6">收藏</h2>
        <p className="text-xl mb-8 text-slate-600">
          分为影视和网站两大类，前者是我愿意反复回看的作品，后者是我高频使用的工具与优质资源网站。
        </p>
      </div>
    </RevealSection>
  );
}
