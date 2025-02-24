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
  { title: "CMake", icon: "/icons/cmake.svg", category: "Automation & DevOps" },
  { title: "DigitalOcean", icon: "/icons/digitalocean.svg", category: "Infrastructure" },
  { title: "Django", icon: "/icons/django.svg", category: "Web Development" },
  { title: "Docker", icon: "/icons/docker.svg", category: "Automation & DevOps" },
  { title: "Expo", icon: "/icons/expo.svg", category: "Mobile Development" },
  { title: "Figma", icon: "/icons/figma.svg", category: "UI/Design" },
  { title: "Firebase", icon: "/icons/firebase.svg", category: "Database" },
  { title: "Google Ads", icon: "/icons/googleads.svg", category: "Analytics & SEO" },
  { title: "Google Analytics", icon: "/icons/googleanalytics.svg", category: "Analytics & SEO" },
  { title: "Google Search Console", icon: "/icons/googlesearchconsole.svg", category: "Analytics & SEO" },
  { title: "Google Sheets", icon: "/icons/googlesheets.svg", category: "Automation & DevOps" },
  { title: "Google Tag Manager", icon: "/icons/googletagmanager.svg", category: "Analytics & SEO" },
  { title: "Next.js", icon: "/icons/nextdotjs.svg", category: "Web Development" },
  { title: "Nginx", icon: "/icons/nginx.svg", category: "Infrastructure" },
  { title: "Payload CMS", icon: "/icons/payloadcms.svg", category: "Web Development" },
  { title: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
  { title: "Prisma", icon: "/icons/prisma.svg", category: "Database" },
  { title: "Python", icon: "/icons/python.svg", category: "Web Development" },
  { title: "React", icon: "/icons/react.svg", category: "Web Development" },
  { title: "Redis", icon: "/icons/redis.svg", category: "Database" },
  { title: "Sanity CMS", icon: "/icons/sanity.svg", category: "Web Development" },
  { title: "Strapi", icon: "/icons/strapi.svg", category: "Web Development" },
  { title: "Stripe", icon: "/icons/stripe.svg", category: "Web Development" },
  { title: "Tailwind CSS", icon: "/icons/tailwindcss.svg", category: "UI/Design" },
  { title: "Tauri", icon: "/icons/tauri.svg", category: "Desktop Development" },
  { title: "TypeScript", icon: "/icons/typescript.svg", category: "Web Development" },
  { title: "WordPress", icon: "/icons/wordpress.svg", category: "Web Development" },
  { title: "Vercel", icon: "/icons/vercel.svg", category: "Infrastructure" }
];

export const categories = [
  { name: "Infrastructure", color: "blue-500" },
  { name: "Web Development", color: "green-500" },
  { name: "Mobile Development", color: "purple-500" },
  { name: "UI/Design", color: "pink-500" },
  { name: "Database", color: "yellow-500" },
  { name: "Automation & DevOps", color: "red-500" },
  { name: "Analytics & SEO", color: "cyan-500" }
];
