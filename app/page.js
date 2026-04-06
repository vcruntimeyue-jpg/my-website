import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";
import GameSection from "./components/GameSection";
import MusicSection from "./components/MusicSection";
import ImagesSection from "./components/ImagesSection";
import FavoritesSection from "./components/FavoritesSection";
import SiteFooter from "./components/SiteFooter";
import { siteContent } from "./content/siteContent";

export default function Home() {
  return (
    <main style={{ position: "relative", overflowX: "hidden" }}>
      <Navbar
        siteName={siteContent.site.name}
        navLinks={siteContent.navLinks}
        socialLinks={siteContent.socialLinks}
      />

      <HeroSection />

      <div className="w-full text-slate-700">
        <BlogSection posts={siteContent.sections.blog} />
        <GameSection items={siteContent.sections.game} />
        <MusicSection items={siteContent.sections.music} />
        <ImagesSection items={siteContent.sections.images} />
        <FavoritesSection groups={siteContent.sections.favorites} />

        <section id="contact" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-36">
          <div className="mx-auto max-w-5xl rounded-3xl bg-orange-50 px-6 py-8 md:px-10 md:py-10 shadow-[0_10px_30px_rgba(15,23,42,0.12)] text-center">
            <p className="text-2xl md:text-4xl">
              {siteContent.site.tagline}
            </p>
          </div>
        </section>

        <SiteFooter siteName={siteContent.site.name} socialLinks={siteContent.socialLinks} />
      </div>
    </main>
  );
}
