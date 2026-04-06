import SocialLinks from "./SocialLinks";

export default function SiteFooter({ siteName, socialLinks }) {
  return (
    <footer className="my-32 pt-4 text-center font-fantasy text-2xl text-gray-400">
      {siteName}
      <div className="mt-4 flex items-center justify-center gap-x-6 text-2xl">
        <SocialLinks
          links={socialLinks}
          trackPrefix="footer"
          linkClassName="text-gray-400 transition-colors hover:text-orange-500"
        />
      </div>
    </footer>
  );
}
