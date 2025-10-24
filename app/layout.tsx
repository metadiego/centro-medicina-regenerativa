import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Centro de Medicina Regenerativa - CMR",
  description: "Centro especializado en medicina regenerativa en Puerto Rico. Tratamientos innovadores para el dolor, sueroterapia, terapias láser y medicina integrativa.",
  icons: {
    icon: '/favicon-32x32.png',
  },
  other: {
    'facebook-domain-verification': 'xp6jdvrlsl4mwwf1sepr60pb3kybq7'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6KFMKP9G5B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6KFMKP9G5B');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
