import SocialLinks from "./SocialLinks";

/**
 * @param {{
 *   navLinks: import("../content/schema").NavLink[],
 *   socialLinks: import("../content/schema").SocialLink[],
 *   siteName: string
 * }} props
 */
export default function Navbar({ navLinks, socialLinks, siteName }) {
  return (
    <header className="fixed inset-x-0 top-0 z-[9999] border-b border-slate-200/70 bg-slate-50/80 shadow-sm shadow-slate-900/[0.03] backdrop-blur-xl">
      <div className="flex min-h-16 flex-wrap items-center px-4 lg:flex-nowrap lg:px-8 xl:px-12">
        <a
          href="#home"
          data-track="nav:home"
          className="order-1 inline-flex min-h-11 items-center font-fantasy text-xl font-black text-slate-800 no-underline sm:text-2xl"
        >
          {siteName}
        </a>

        <nav
          aria-label="主导航"
          className="order-3 -mx-4 w-[calc(100%+2rem)] overflow-x-auto border-t border-slate-200/70 px-4 lg:order-2 lg:mx-8 lg:w-auto lg:flex-1 lg:border-0 lg:px-0"
        >
          <div className="flex min-w-max items-center gap-1 py-1 lg:gap-3 lg:py-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-track={`nav:${link.label}`}
                className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-slate-600 no-underline transition-colors hover:bg-white hover:text-orange-600 lg:px-4 lg:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="order-2 ml-auto flex items-center gap-1 lg:order-3 lg:gap-2">
          <SocialLinks links={socialLinks} trackPrefix="social" variant="navbar" />
        </div>
      </div>
    </header>
  );
}
