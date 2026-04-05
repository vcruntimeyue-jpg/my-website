import "./globals.css";
import AnalyticsBridge from "./components/AnalyticsBridge";
import { siteContent } from "./content/siteContent";

const baseUrl = new URL(siteContent.site.domain);

export const metadata = {
  metadataBase: baseUrl,
  title: siteContent.site.title,
  description: siteContent.site.description,
  applicationName: siteContent.site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteContent.site.locale,
    url: siteContent.site.domain,
    title: siteContent.site.title,
    description: siteContent.site.description,
    siteName: siteContent.site.name,
    images: [
      {
        url: "/assets/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteContent.site.name} OpenGraph Cover`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.site.title,
    description: siteContent.site.description,
    images: ["/assets/seo/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <AnalyticsBridge />
        {children}
      </body>
    </html>
  );
}
