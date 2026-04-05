"use client";

import RevealSection from "./RevealSection";

export default function MusicSection() {
  return (
    <RevealSection id="music" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-4">音乐</h2>
        <p className="text-xl mb-8 text-slate-600 max-w-3xl">
          音乐是我长期创作的一部分，包含乐队、乐器与合成器实验。
        </p>
      </div>
    </RevealSection>
  );
}
