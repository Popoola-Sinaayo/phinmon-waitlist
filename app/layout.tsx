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
  title: "Phinmon",
  description: "",
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
  },
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
        <meta property="og:image" content="/success.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Phinmon" />
        <meta name="twitter:image" content="/success.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta property="twitter:image:alt" content="Phinmon" />
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
