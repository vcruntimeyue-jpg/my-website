"use client";

const GithubIcon = () => (
  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="1em" height="1em" fill="currentColor">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
  </svg>
);

const BilibiliIcon = () => (
  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="14" rx="4" />
    <path d="M8 2l2 4" />
    <path d="M16 2l-2 4" />
    <circle cx="8" cy="13" r="0.8" fill="currentColor" />
    <circle cx="16" cy="13" r="0.8" fill="currentColor" />
  </svg>
);

const TiktokIcon = () => (
  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="0.92em" height="0.92em" fill="currentColor">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.29V0h88a121.18 121.18 0 0 0 1.86 21.32A126.27 126.27 0 0 0 448 109.58v100.33z"/>
  </svg>
);

const ICONS = {
  github: <GithubIcon />,
  twitter: <TwitterIcon />,
  bilibili: <BilibiliIcon />,
  tiktok: <TiktokIcon />,
};

export default function Navbar({ navLinks, socialLinks, siteName }) {
  return (
    <>
      <div
        style={{
          position: "fixed", top: 0, left: 0, right: 0, height: "66px",
          backgroundColor: "rgba(248, 250, 252, 0.5)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          zIndex: 9997,
          pointerEvents: "none",
        }}
      />

      <nav
        style={{
          position: "fixed", top: "16px", left: "28px", zIndex: 9999,
          display: "flex", alignItems: "center", gap: "32px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <a href="#home" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", fontWeight: "900", color: "#1e293b", textDecoration: "none" }}>
          {siteName}
        </a>
        <span style={{ display: "block", width: "1px", height: "20px", backgroundColor: "#cbd5e1" }} className="hidden lg:block" />
        <div style={{ display: "flex", gap: "32px" }} className="hidden lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} data-track={`nav:${link.label}`} style={{ fontSize: "16px", fontWeight: "500", color: "#475569", textDecoration: "none" }} className="hover:text-orange-500 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div
        style={{
          position: "fixed", top: "16px", right: "44px", zIndex: 9999,
          display: "flex", alignItems: "center", gap: "20px",
        }}
      >
        {socialLinks.map((social) => (
          <a
            key={social.label}
            target="_blank"
            rel="noopener noreferrer"
            href={social.url}
            data-track={`social:${social.label}`}
            aria-label={social.label}
            style={{ fontSize: "24px", color: "#475569" }}
            className="hover:text-orange-500 transition-colors"
          >
            {ICONS[social.iconKey] || <GithubIcon />}
          </a>
        ))}
      </div>

      <div
        style={{
          position: "fixed", top: "66px", left: "28px", right: "44px",
          height: "1px", backgroundColor: "#e2e8f0", zIndex: 9998,
          opacity: 0.4,
        }}
      />
    </>
  );
}
