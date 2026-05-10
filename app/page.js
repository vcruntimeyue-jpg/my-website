import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";
import GameSection from "./components/GameSection";
import SectionShell from "./components/SectionShell";
import SiteFooter from "./components/SiteFooter";
import { siteContent } from "./content/siteContent";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar
        siteName={siteContent.site.name}
        navLinks={siteContent.navLinks}
        socialLinks={siteContent.socialLinks}
      />

      <HeroSection />

      <div className="w-full text-slate-700">
        <BlogSection posts={siteContent.sections.blog} />
        <GameSection items={siteContent.sections.game} />

        <SectionShell
          id="music"
          title="音乐"
          intro={
            <p className="mb-8 text-xl text-slate-600">
              这里整理了我长期收藏和反复循环的歌单与单曲。不同风格的音乐，构成了我日常最稳定的情绪背景。
            </p>
          }
        />

        <SectionShell
          id="images"
          title="图片"
          intro={
            <p className="mb-8 text-xl text-slate-600">
              这里主要收藏我喜欢的壁纸、头像和高质量图片。它们不一定同一种风格，但都在视觉上打动过我。
            </p>
          }
        />

        <SectionShell
          id="favorites"
          title="收藏"
          intro={
            <p className="mb-8 text-xl text-slate-600">
              分为影视和网站两大类，前者是我愿意反复回看的作品，后者是我高频使用的工具与优质资源网站。
            </p>
          }
        />

        <section
          id="contact"
          className="relative z-10 mt-36 mb-16 w-full px-4 text-center text-slate-700 lg:px-16 xl:px-32 2xl:px-44"
        >
          <p className="mx-auto max-w-5xl text-2xl md:text-4xl">
            {siteContent.site.tagline}
          </p>
        </section>

        <SiteFooter siteName={siteContent.site.name} socialLinks={siteContent.socialLinks} />
      </div>
    </main>
  );
}
