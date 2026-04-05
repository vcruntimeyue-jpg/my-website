import Link from "next/link";
import GameGallery from "../components/GameGallery";
import { siteContent } from "../content/siteContent";

export const metadata = {
  title: "Vcrunyue Game",
  description: "完整收录 VCRUNYUE 达成全成就的游戏清单。",
};

export default function GameArchivePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-700">
      <section className="w-full px-4 py-16 lg:px-16 lg:py-24 xl:px-32 2xl:px-44">
        <Link
          href="/#game"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition-colors hover:border-orange-300 hover:text-orange-500"
        >
          返回首页
        </Link>

        <div className="mt-8 max-w-4xl">
          <h1 className="game-title-spacing font-fantasy text-5xl text-slate-800 xl:text-6xl">All Perfect Games</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            这里收录了我达成全成就的完整游戏清单。从硬核挑战到治愈作品，这些游戏共同构成了我的游戏记忆。
          </p>
        </div>

        <div className="mt-5">
          <GameGallery items={siteContent.sections.game} variant="archive" />
        </div>
      </section>
    </main>
  );
}
