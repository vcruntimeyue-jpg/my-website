import SocialLinks from "./SocialLinks";

export default function Navbar({ navLinks, socialLinks, siteName }) {
  return (
    <>
      {/* Backdrop overlay — needs custom backdrop-filter not expressible in Tailwind */}
      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-[9997] h-[66px]"
        style={{
          backgroundColor: "rgba(248, 250, 252, 0.5)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      {/* Main nav */}
      <nav className="fixed left-7 top-4 z-[9999] flex items-center gap-8">
        <a href="#home" className="font-fantasy text-2xl font-black text-slate-800 no-underline">
          {siteName}
        </a>
        <span className="hidden h-5 w-px bg-slate-300 lg:block" />
        <div className="hidden gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-track={`nav:${link.label}`}
              className="text-base font-medium text-slate-600 no-underline transition-colors hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Social links */}
      <div className="fixed right-11 top-4 z-[9999] flex items-center gap-5">
        <SocialLinks links={socialLinks} trackPrefix="social" variant="navbar" />
      </div>

      {/* Hairline divider */}
      <div className="fixed left-7 right-11 top-[66px] z-[9998] h-px bg-slate-200 opacity-40" />
    </>
  );
}
