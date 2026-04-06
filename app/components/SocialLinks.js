import SocialIcon from "./SocialIcon";

export default function SocialLinks({ links, trackPrefix, linkClassName = "", linkStyle, getLinkStyle }) {
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
          style={{ ...linkStyle, ...(getLinkStyle ? getLinkStyle(social) : null) }}
          className={linkClassName}
        >
          <SocialIcon iconKey={social.iconKey} />
        </a>
      ))}
    </>
  );
}
