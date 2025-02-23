import React from 'react';
import { Code2, Cpu, Smartphone, Monitor as Desktop } from 'lucide-react';

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
    icon: <Desktop size={24} className="text-blue-600" />,
    description: 'Developing high-performance desktop applications with Tauri and modern web technologies.'
  }
];