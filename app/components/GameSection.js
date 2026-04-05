"use client";

import Link from "next/link";
import RevealSection from "./RevealSection";
import GameGallery from "./GameGallery";

export default function GameSection({ items }) {
  return (
    <RevealSection id="game" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-6">
          <Link href="/game" aria-label="进入游戏总览">
            游戏
          </Link>
        </h2>
        <div className="max-w-4xl space-y-3">
          <p className="text-xl text-slate-600 leading-9 lg:leading-10">
            这里整理了我达成全成就的游戏清单。从硬核的操作挑战到治愈的艺术品，它们见证了我的游戏历程。
          </p>
          <p className="text-xl text-slate-600 leading-9 lg:leading-10">
            对我而言，这些不只是冰冷的数字和成就，更是陪伴我成长、带给我惊喜的珍贵回忆。
          </p>
        </div>

        <div className="mt-5">
          <GameGallery items={items} variant="home" />
        </div>
      </div>
    </RevealSection>
  );
}
