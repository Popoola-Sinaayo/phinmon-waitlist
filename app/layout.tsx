import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// const geistSans = Poppins({
//   // variable: "--font-geist-sans",
//   // subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Phinmon - AI-Powered Personal Finance Management | Coming Soon",
  description:
    "Join Phinmon's waitlist for the future of personal finance. AI-powered insights, secure read-only access, and smart money management. Your money stays safe - we never touch your funds. Get early access now!",
  keywords: [
    "personal finance",
    "AI financial insights",
    "money management",
    "fintech",
    "financial planning",
    "budgeting app",
    "expense tracking",
    "financial analytics",
    "secure banking",
    "read-only finance",
    "money insights",
    "financial dashboard",
  ],
  authors: [{ name: "Phinmon Team" }],
  creator: "Phinmon",
  publisher: "Phinmon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://phinmon.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Phinmon - AI-Powered Personal Finance Management",
    description:
      "Join the waitlist for the future of personal finance. AI-powered insights with secure read-only access. Your money stays safe - we never touch your funds.",
    url: "https://phinmon.com",
    siteName: "Phinmon",
    images: [
      {
        url: "/success.png",
        width: 1200,
        height: 630,
        alt: "Phinmon - AI-Powered Personal Finance Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phinmon - AI-Powered Personal Finance Management",
    description:
      "Join the waitlist for the future of personal finance. AI-powered insights with secure read-only access. Your money stays safe!",
    images: ["/success.png"],
    creator: "@phinmonhq",
    site: "@phinmonhq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "finance",
  classification: "Personal Finance Technology",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/p.svg",
        href: "/p.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/p.svg",
        href: "/p.svg",
      },
    ],
    apple: [
      {
        url: "/p.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/p.svg?v=2" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/p.svg"
          type="image/svg"
          sizes="any"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Phinmon",
              description:
                "AI-powered personal finance management platform with secure read-only access to your financial data",
              url: "https://phinmon.com",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/PreOrder",
              },
              creator: {
                "@type": "Organization",
                name: "Phinmon",
                url: "https://phinmon.com",
                sameAs: [
                  "https://x.com/phinmonhq",
                  "https://www.linkedin.com/company/phinmon/",
                ],
              },
              featureList: [
                "AI-powered financial insights",
                "Secure read-only account access",
                "Multi-account dashboard",
                "Spending pattern analysis",
                "Bank-level security",
              ],
            }),
          }}
        />
      </head>
      {/* Google Analytics */}
      <GoogleAnalytics
        trackingId={process.env.NEXT_PUBLIC_GA_TRACKING_ID || "G-D7NP0PBR6M"}
      />
      <body className={poppins.className} style={{ margin: 0 }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
