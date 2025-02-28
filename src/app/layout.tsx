import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { websiteJsonLd } from "@/schemas";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sinan.ro"),
  openGraph: {
    title: "Sinan Deniz Ceviker - Software Developer & AI Engineer",
    description: "I specialize in React, Next.js, Python, and automation solutions. As the founder of SNS Automation, I help businesses by building high-performance apps.",
    url: "https://www.sinan.ro",
    siteName: "Sinan Deniz Ceviker - Software Developer & AI Engineer",
    images: [
      {
        url: "https://www.sinan.ro/me-og.jpg",
        width: 1199,
        height: 630,
        alt: "Sinan Deniz Ceviker - Software Developer & AI Engineer",
      }
    ],
    type: "website",
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  applicationName: 'Sinan Deniz Ceviker - Software Developer & AI Engineer',
  appleWebApp: {
    title: "Sinan Deniz Ceviker - Software Developer & AI Engineer",
    statusBarStyle: "default",
    capable: true
  },
  title: "Sinan Deniz Ceviker - Software Developer & AI Engineer",
  description: "I specialize in React, Next.js, Python, and automation solutions. As the founder of SNS Automation, I help businesses by building high-performance apps.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer",
    "AI Developer",
    "Freelance Web Developer",
    "Mobile App Developer",
    "SEO Optimization",
    "Industrial Automation",
    "Python Django",
    "Prisma",
    "Expo",
    "PLC Automation",
    "HMI Development",
    "SEO Consultant",
    "React Native Developer",
  ],
  authors: [{ name: "Sinan Deniz Ceviker", url: "https://www.sinan.ro" }],
  creator: "Sinan Deniz Ceviker",
  publisher: "Sinan Deniz Ceviker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${inter.className} antialiased`}
      >
        <Script
          id="website-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-075R6P76VN"
          strategy="lazyOnload"
        />

        <Script async strategy="afterInteractive" id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-075R6P76VN');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
