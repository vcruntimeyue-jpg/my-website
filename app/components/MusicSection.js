"use client";

import RevealSection from "./RevealSection";

export default function MusicSection() {
  return (
    <RevealSection id="music" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-6">音乐</h2>
        <p className="text-xl mb-8 text-slate-600 max-w-3xl">
          这里整理了我长期收藏和反复循环的歌单与单曲。不同风格的音乐，构成了我日常最稳定的情绪背景。
        </p>
      </div>
    </RevealSection>
  );
}
