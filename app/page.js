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
          className="relative z-10 mt-36 w-full px-4 lg:px-16 xl:px-32 2xl:px-44"
          style={{ marginBottom: "64px" }}
        >
          <div
            className="mx-auto max-w-5xl rounded-[32px] px-6 py-8 text-center md:px-10 md:py-10"
            style={{
              background: "linear-gradient(145deg, rgba(255, 255, 255, 0.56), rgba(241, 245, 249, 0.74))",
              border: "1px solid rgba(255, 255, 255, 0.76)",
              boxShadow:
                "0 0 0 1px rgba(255, 255, 255, 0.18), 0 22px 44px -28px rgba(15, 23, 42, 0.3), 0 42px 96px -58px rgba(15, 23, 42, 0.36)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
            }}
          >
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
