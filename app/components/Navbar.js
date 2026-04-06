import SocialLinks from "./SocialLinks";

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
        <SocialLinks
          links={socialLinks}
          trackPrefix="social"
          linkStyle={{ fontSize: "24px", color: "#475569" }}
          linkClassName="transition-colors hover:text-orange-500"
          getLinkStyle={(social) => {
            if (social.iconKey === "gmail") {
              return { position: "relative", top: "2px" };
            }

            if (social.iconKey === "twitter") {
              return { display: "inline-flex", transform: "scale(0.97)", position: "relative", top: "-2px" };
            }

            return undefined;
          }}
        />
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
