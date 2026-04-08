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
        <MusicSection />
        <ImagesSection />
        <FavoritesSection />

        <section
          id="contact"
          className="relative z-10 mt-36 w-full px-4 text-center text-slate-700 lg:px-16 xl:px-32 2xl:px-44"
          style={{ marginBottom: "64px" }}
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
