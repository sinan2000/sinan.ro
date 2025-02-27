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
  { title: "CMake", icon: "/icons/cmake.svg", category: "automation" },
  { title: "DigitalOcean", icon: "/icons/digitalocean.svg", category: "infrastructure" },
  { title: "Django", icon: "/icons/django.svg", category: "web" },
  { title: "Docker", icon: "/icons/docker.svg", category: "automation" },
  { title: "Expo", icon: "/icons/expo.svg", category: "mobile" },
  { title: "Figma", icon: "/icons/figma.svg", category: "design" },
  { title: "Rust", icon: "/icons/rust.svg", category: "systems" },
  { title: "Firebase", icon: "/icons/firebase.svg", category: "database" },
  { title: "Google Ads", icon: "/icons/googleads.svg", category: "analytics" },
  { title: "Google Analytics", icon: "/icons/googleanalytics.svg", category: "analytics" },
  { title: "Google Search Console", icon: "/icons/googlesearchconsole.svg", category: "analytics" },
  { title: "Google Sheets", icon: "/icons/googlesheets.svg", category: "automation" },
  { title: "Google Tag Manager", icon: "/icons/googletagmanager.svg", category: "analytics" },
  { title: "Next.js", icon: "/icons/nextdotjs.svg", category: "web" },
  { title: "Nginx", icon: "/icons/nginx.svg", category: "infrastructure" },
  { title: "Payload CMS", icon: "/icons/payloadcms.svg", category: "web" },
  { title: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database" },
  { title: "Prisma", icon: "/icons/prisma.svg", category: "database" },
  { title: "Python", icon: "/icons/python.svg", category: "web" },
  { title: "React", icon: "/icons/react.svg", category: "web" },
  { title: "Redis", icon: "/icons/redis.svg", category: "database" },
  { title: "Sanity CMS", icon: "/icons/sanity.svg", category: "web" },
  { title: "Strapi", icon: "/icons/strapi.svg", category: "web" },
  { title: "Stripe", icon: "/icons/stripe.svg", category: "web" },
  { title: "Tailwind CSS", icon: "/icons/tailwindcss.svg", category: "design" },
  { title: "Tauri", icon: "/icons/tauri.svg", category: "desktop" },
  { title: "TypeScript", icon: "/icons/typescript.svg", category: "web" },
  { title: "WordPress", icon: "/icons/wordpress.svg", category: "web" },
  { title: "Vercel", icon: "/icons/vercel.svg", category: "infrastructure" }
];

export const categories = [
  { key: "infrastructure", name: "Infrastructure", styles: "bg-blue-100 text-blue-800" },
  { key: "web", name: "Web Dev", styles: "bg-emerald-100 text-emerald-800" },
  { key: "mobile", name: "Mobile Dev", styles: "bg-indigo-100 text-indigo-800" },
  { key: "design", name: "UI/Design", styles: "bg-fuchsia-100 text-fuchsia-800" },
  { key: "database", name: "Database", styles: "bg-amber-100 text-amber-800" },
  { key: "automation", name: "Automation & DevOps", styles: "bg-orange-100 text-orange-800" },
  { key: "analytics", name: "Analytics & SEO", styles: "bg-teal-100 text-teal-800" },
  { key: "desktop", name: "Desktop Dev", styles: "bg-gray-100 text-gray-800" },
  { key: "systems", name: "Systems Programming", styles: "bg-red-100 text-red-800" }
];