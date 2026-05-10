import SocialLinks from "./SocialLinks";

export default function SiteFooter({ siteName, socialLinks }) {
  return (
    <footer className="mt-0 pt-4 pb-[50px] text-center font-fantasy text-2xl text-gray-400">
      {siteName}
      <div className="mt-4 flex items-center justify-center gap-x-6 text-2xl">
        <SocialLinks links={socialLinks} trackPrefix="footer" variant="footer" />
      </div>
    </footer>
  );
}
