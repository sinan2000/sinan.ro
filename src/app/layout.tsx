import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
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
  }
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
        {children}
      </body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-075R6P76VN"
        strategy="lazyOnload"
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-075R6P76VN');
        `}
      </Script>

    </html>
  );
}
