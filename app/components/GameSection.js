"use client";

import Link from "next/link";
import RevealSection from "./RevealSection";
import GameGallery from "./GameGallery";

export default function GameSection({ items }) {
  return (
    <RevealSection id="game" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-4">游戏</h2>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl flex-1 space-y-3">
            <p className="text-xl text-slate-600 leading-9 lg:leading-10">
              这里整理了我达成全成就的游戏清单。从硬核的操作挑战到治愈的艺术品，它们见证了我的游戏历程。
            </p>
            <p className="text-xl text-slate-600 leading-9 lg:leading-10">
              对我而言，这些不只是冰冷的数字和成就，更是陪伴我成长、带给我惊喜的珍贵回忆。
            </p>
          </div>

          <Link href="/game" className="block w-full sm:w-56 lg:w-60 lg:flex-shrink-0" aria-label="查看更多游戏">
            <div className="rounded-[28px] bg-orange-400 px-6 py-6 text-white shadow-[0_26px_52px_-34px_rgba(249,115,22,0.7)] transition-transform duration-300 hover:-translate-y-0.5">
              <div className="text-xs uppercase tracking-[0.26em] text-orange-50/85">Archive</div>
              <div className="mt-5 font-fantasy text-5xl leading-none">More</div>
            </div>
          </Link>
        </div>

        <div className="mt-14 lg:mt-16">
          <GameGallery items={items} variant="home" />
        </div>
      </div>
    </RevealSection>
  );
}
