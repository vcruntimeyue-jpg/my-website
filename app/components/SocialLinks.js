import SocialIcon from "./SocialIcon";

const variantStyles = {
  navbar: "text-2xl text-slate-600 transition-colors hover:text-orange-500",
  footer: "text-2xl text-gray-400 transition-colors hover:text-orange-500",
};

export default function SocialLinks({ links, trackPrefix, variant = "navbar" }) {
  return (
    <>
      {links.map((social) => (
        <a
          key={social.label}
          target="_blank"
          rel="noopener noreferrer"
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
