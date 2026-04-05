"use client";

import RevealSection from "./RevealSection";
import GameGallery from "./GameGallery";

export default function GameSection({ items }) {
  return (
    <RevealSection id="game" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold mb-4">游戏</h2>
        <p className="text-xl mb-10 text-slate-600 leading-9 lg:leading-10">
          这里整理了我达成全成就的游戏清单。从硬核的操作挑战到治愈的艺术品，它们见证了我的游戏历程。
          <span className="hidden lg:inline">
            <br />
          </span>
          <span className="lg:hidden"> </span>
          对我而言，这些不只是冰冷的数字和成就，更是陪伴我成长、带给我惊喜的珍贵回忆。
        </p>

        <GameGallery items={items} variant="home" />
      </div>
    </RevealSection>
  );
}
