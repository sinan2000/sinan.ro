import { WithContext, Person, WebSite } from 'schema-dts'

export const personJsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sinan-Deniz Ceviker",
  "url": "https://www.sinan.ro",
  "image": "https://www.sinan.ro/me-jsonld.jpg",
  "sameAs": [
    "https://www.facebook.com/sinan.ceviker.7/",
    "https://www.instagram.com/sinan_ceviker/",
    "https://www.linkedin.com/in/sinan-ceviker",
    "https://github.com/sinan2000/"
  ],
  "knowsAbout": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Next.js"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "React"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Expo"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Python"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "AI Development"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "JavaScript"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Automation"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "PLC"
    }
  ],
  "jobTitle": "Software Engineer & AI Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "SNS Automation",
    "url": "https://snsautomation.tech"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Groningen",
    "url": "https://www.rug.nl"
  },
  "description": "I am a software engineer specializing in AI, Next.js, and automation. I build web and mobile applications.",
  "birthDate": "2000-11-12",
  "birthPlace": "Timisoara, Romania"
}

export const websiteJsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sinan Deniz Ceviker - Software Developer & AI Engineer",
  "url": "https://www.sinan.ro",
  "description": "I specialize in React, Next.js, Python, and automation solutions. As the founder of SNS Automation, I help businesses by building high-performance apps.",
  "author": {
    "@type": "Person",
    "name": "Sinan Deniz Ceviker",
    "url": "https://www.sinan.ro"
  }
}