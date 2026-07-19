import SocialIcon from "./SocialIcon";

/** @type {Record<"navbar"|"footer", string>} */
const variantStyles = {
  navbar: "text-2xl text-slate-600 transition-colors hover:text-orange-500",
  footer: "text-2xl text-gray-400 transition-colors hover:text-orange-500",
};

/**
 * @param {{
 *   links: import("../content/schema").SocialLink[],
 *   trackPrefix?: string,
 *   variant?: "navbar"|"footer"
 * }} props
 */
export default function SocialLinks({ links, trackPrefix, variant = "navbar" }) {
  return (
    <>
      {links.map((social) => (
        <a
          key={social.label}
          target={social.url.startsWith("https://") ? "_blank" : undefined}
          rel={social.url.startsWith("https://") ? "noopener noreferrer" : undefined}
          href={social.url}
          data-track={trackPrefix ? `${trackPrefix}:${social.label}` : undefined}
          aria-label={social.label}
          className={variantStyles[variant] || variantStyles.navbar}
        >
          <SocialIcon iconKey={social.iconKey} />
        </a>
      ))}
    </>
  );
}
