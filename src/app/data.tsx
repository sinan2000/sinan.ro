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
    icon: <SiGmail size={24} className="text-red-500 group-hover:text-blue-600" />,
    link: "mailto:denizceviker12@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={24} className="text-green-500 group-hover:text-blue-600" />,
    link: "https://wa.me/40732405829",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} className="text-blue-700 group-hover:text-blue-600" />,
    link: "https://www.linkedin.com/in/sinan-ceviker",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} className="text-gray-800 group-hover:text-blue-600" />,
    link: "https://github.com/sinan2000",
  },
]