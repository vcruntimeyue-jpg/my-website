"use client";

import RevealSection from "./RevealSection";

export default function ImagesSection() {
  return (
    <RevealSection id="images" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-4">图片</h2>
        <p className="text-xl mb-8 text-slate-600 max-w-3xl">
          记录生活中的视觉片段，覆盖摄影、设计与旅行观察。
        </p>
      </div>
    </RevealSection>
  );
}
