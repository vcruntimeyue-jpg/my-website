"use client";

import RevealSection from "./RevealSection";

export default function FavoritesSection() {
  return (
    <RevealSection id="favorites" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-4">收藏</h2>
        <p className="text-xl mb-8 text-slate-600 max-w-3xl">
          一些长期影响我创作和思考方式的书、电影、工具与网站。
        </p>
      </div>
    </RevealSection>
  );
}
