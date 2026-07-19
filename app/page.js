import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";
import GameSection from "./components/GameSection";
import SectionShell from "./components/SectionShell";
import SiteFooter from "./components/SiteFooter";
import { siteContent } from "./content/siteContent";

export default function Home() {
  return (
    <main id="main-content" className="relative overflow-x-hidden">
      <Navbar
        siteName={siteContent.site.name}
        navLinks={siteContent.navLinks}
        socialLinks={siteContent.socialLinks}
      />

      <HeroSection hero={siteContent.hero} />

      <div className="w-full text-slate-700">
        <BlogSection posts={siteContent.sections.blog} />
        <GameSection items={siteContent.sections.game} />

        {siteContent.sections.upcoming.map((upcoming) => (
          <SectionShell
            key={upcoming.id}
            id={upcoming.id}
            title={upcoming.title}
            intro={
              <div className="max-w-4xl space-y-4">
                <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700">
                  {upcoming.statusLabel}
                </span>
                <p className="text-xl leading-9 text-slate-600">{upcoming.intro}</p>
              </div>
            }
          >
            <ul className="grid max-w-4xl gap-3 sm:grid-cols-3" aria-label={`${upcoming.title}计划主题`}>
              {upcoming.topics.map((topic) => (
                <li key={topic} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-medium text-slate-700 shadow-sm">
                  {topic}
                </li>
              ))}
            </ul>
          </SectionShell>
        ))}

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
