import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/p.svg" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/p.svg"
          type="image/svg"
          sizes="any"
        />
        <meta property="og:image" content="/p.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Phinmon" />
        <meta name="twitter:image" content="/p.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta property="twitter:image:alt" content="Phinmon" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
