import SocialLinks from "./SocialLinks";

export default function SiteFooter({ siteName, socialLinks }) {
  return (
    <footer className="mb-12 mt-0 pt-4 text-center font-fantasy text-2xl text-gray-400">
      {siteName}
      <div className="mt-4 flex items-center justify-center gap-x-6 text-2xl">
        <SocialLinks
          links={socialLinks}
          trackPrefix="footer"
          linkClassName="text-gray-400 transition-colors hover:text-orange-500"
          getLinkStyle={(social) => {
            if (social.iconKey === "gmail") {
              return { position: "relative", top: "2px" };
            }

            if (social.iconKey === "github") {
              return { position: "relative", top: "-2px" };
            }

            return undefined;
          }}
        />
      </div>
    </footer>
  );
}
