import { Code2, Cpu, Smartphone, Monitor } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';



export const technologies = [
  {
    name: 'Web Development',
    icon: <Code2 size={24} className="text-blue-600" />,
    description: 'Building modern web applications with Next.js, focusing on performance and scalability.'
  },
  {
    name: 'Industrial Automation',
    icon: <Cpu size={24} className="text-blue-600" />,
    description: 'Implementing PLC programming solutions for industrial automation and control systems.'
  },
  {
    name: 'Mobile Development',
    icon: <Smartphone size={24} className="text-blue-600" />,
    description: 'Creating cross-platform mobile applications using Expo and React Native.'
  },
  {
    name: 'Desktop Apps',
    icon: <Monitor size={24} className="text-blue-600" />,
    description: 'Developing high-performance desktop applications with Tauri and modern web technologies.'
  }
];

export const contacts = [
  {
    name: "Gmail",
    icon: <SiGmail size={24} className="text-red-500 group-hover:text-blue-600" aria-hidden="true" />,
    link: "mailto:denizceviker12@gmail.com",
    label: "Send me an email",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={24} className="text-green-500 group-hover:text-blue-600" aria-hidden="true" />,
    link: "https://wa.me/40732405829",
    label: "Chat with me on WhatsApp",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} className="text-blue-700 group-hover:text-blue-600" aria-hidden="true" />,
    link: "https://www.linkedin.com/in/sinan-ceviker",
    label: "Connect with me on LinkedIn",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} className="text-gray-800 group-hover:text-blue-600" aria-hidden="true" />,
    link: "https://github.com/sinan2000",
    label: "View my projects on GitHub",
  },
]

export const stacks = [
  { title: "CMake", icon: "/icons/cmake.svg", category: "automation", color: "#064F8C" }, // Blue
  { title: "DigitalOcean", icon: "/icons/digitalocean.svg", category: "infrastructure", color: "#0080FF" }, // Blue
  { title: "Django", icon: "/icons/django.svg", category: "web", color: "#092E20" }, // Green
  { title: "Docker", icon: "/icons/docker.svg", category: "automation", color: "#2496ED" }, // Blue
  { title: "Expo", icon: "/icons/expo.svg", category: "mobile", color: "#000020" }, // Dark
  { title: "Figma", icon: "/icons/figma.svg", category: "design", color: "#F24E1E" }, // Orange
  { title: "Firebase", icon: "/icons/firebase.svg", category: "database", color: "#FFCA28" }, // Yellow
  { title: "Google Ads", icon: "/icons/googleads.svg", category: "analytics", color: "#4285F4" }, // Blue
  { title: "Google Analytics", icon: "/icons/googleanalytics.svg", category: "analytics", color: "#E37400" }, // Orange
  { title: "Google Search Console", icon: "/icons/googlesearchconsole.svg", category: "analytics", color: "#1A73E8" }, // Blue
  { title: "Google Sheets", icon: "/icons/googlesheets.svg", category: "automation", color: "#0F9D58" }, // Green
  { title: "Google Tag Manager", icon: "/icons/googletagmanager.svg", category: "analytics", color: "#4285F4" }, // Blue
  { title: "Next.js", icon: "/icons/nextdotjs.svg", category: "web", color: "#000000" }, // Black
  { title: "Nginx", icon: "/icons/nginx.svg", category: "infrastructure", color: "#009639" }, // Green
  { title: "Payload CMS", icon: "/icons/payloadcms.svg", category: "web", color: "#121212" }, // Dark Gray
  { title: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database", color: "#336791" }, // Blue
  { title: "Prisma", icon: "/icons/prisma.svg", category: "database", color: "#2D3748" }, // Dark Gray
  { title: "Python", icon: "/icons/python.svg", category: "web", color: "#3776AB" }, // Blue
  { title: "React", icon: "/icons/react.svg", category: "web", color: "#61DAFB" }, // Cyan
  { title: "Redis", icon: "/icons/redis.svg", category: "database", color: "#DC382D" }, // Red
  { title: "Sanity CMS", icon: "/icons/sanity.svg", category: "web", color: "#F03E2F" }, // Red
  { title: "Strapi", icon: "/icons/strapi.svg", category: "web", color: "#8A3FFC" }, // Purple
  { title: "Stripe", icon: "/icons/stripe.svg", category: "web", color: "#635BFF" }, // Blue
  { title: "Tailwind CSS", icon: "/icons/tailwindcss.svg", category: "design", color: "#38BDF8" }, // Cyan
  { title: "Tauri", icon: "/icons/tauri.svg", category: "desktop", color: "#24C8DB" }, // Blue
  { title: "TypeScript", icon: "/icons/typescript.svg", category: "web", color: "#3178C6" }, // Blue
  { title: "WordPress", icon: "/icons/wordpress.svg", category: "web", color: "#21759B" }, // Blue
  { title: "Vercel", icon: "/icons/vercel.svg", category: "infrastructure", color: "#000000" }, // Black
];

export const categories = [
  { key: "infrastructure", name: "Infrastructure", styles: "bg-blue-100 text-blue-600" },
  { key: "web", name: "Web Dev", styles: "bg-emerald-100 text-emerald-600" },
  { key: "mobile", name: "Mobile Dev", styles: "bg-indigo-100 text-indigo-600" },
  { key: "design", name: "UI/Design", styles: "bg-fuchsia-100 text-fuchsia-600" },
  { key: "database", name: "Database", styles: "bg-amber-100 text-amber-600" },
  { key: "automation", name: "Automation & DevOps", styles: "bg-orange-100 text-orange-600" },
  { key: "analytics", name: "Analytics & SEO", styles: "bg-teal-100 text-teal-600" },
  { key: "desktop", name: "Desktop Dev", styles: "bg-gray-100 text-gray-600" },
];