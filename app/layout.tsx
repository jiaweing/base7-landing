import { PlausibleWrapper } from "@/components/analytics/plausible-provider";
import FooterSection from "@/components/footer";
import Header from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import SEO from "@/components/seo";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { analyticsConfig } from "@/lib/analytics-config";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Base 7",
  description:
    "Base 7 is a Singapore-based software company with 10+ years of experience specializing in rapid app development. We build web, mobile, and desktop apps in just 10 days.",
  manifest: "/manifest.json",
  keywords:
    "app development, rapid development, custom apps, web apps, mobile apps, desktop apps, Singapore, software development, fast development, 10 days",
  authors: [{ name: "Base 7 Team" }],
  creator: "Base 7",
  publisher: "Base 7",
  applicationName: "Base 7",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Base 7",
    startupImage: [
      {
        url: "/ios/1024.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/ios/1024.png",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://base7.com",
    title: "Base 7",
    description:
      "We build digital experiences in days that others take months to create. 10+ years of experience creating tomorrow's technology.",
    siteName: "Base 7",
    images: [
      {
        url: "https://base7.com/api/og",
        width: 1200,
        height: 630,
        alt: "Base 7 - Build your next app in 10 days",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base 7",
    description:
      "We build digital experiences in days that others take months to create. 10+ years of experience creating tomorrow's technology.",
    images: ["https://base7.com/api/og"],
    creator: "@j14wei",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://base7.com",
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlausibleWrapper>
      <html lang="en">
        <head>
          <SEO />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <MobileNav />
            {children}
            <FooterSection />
            <TailwindIndicator />
            {analyticsConfig.googleAnalytics.enabled && (
              <GoogleAnalytics gaId={analyticsConfig.googleAnalytics.gaId} />
            )}
          </ThemeProvider>
        </body>
      </html>
    </PlausibleWrapper>
  );
}
