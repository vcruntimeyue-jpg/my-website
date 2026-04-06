import Link from "next/link";
import GameGallery from "./GameGallery";
import SectionShell from "./SectionShell";

export default function GameSection({ items }) {
  return (
    <SectionShell
      id="game"
      title={
        <Link href="/game" aria-label="进入游戏总览">
          游戏
        </Link>
      }
      intro={
        <div className="max-w-4xl space-y-3">
          <p className="text-xl text-slate-600 leading-9 lg:leading-10">
            这里整理了我达成全成就的游戏清单。从硬核的操作挑战到治愈的艺术品，它们见证了我的游戏历程。
          </p>
          <p className="text-xl text-slate-600 leading-9 lg:leading-10">
            对我而言，这些不只是冰冷的数字和成就，更是陪伴我成长、带给我惊喜的珍贵回忆。
          </p>
        </div>
      }
    >
      <div className="mt-5 game-grid-shell">
        <GameGallery items={items} variant="home" />
      </div>
    </SectionShell>
  );
}
