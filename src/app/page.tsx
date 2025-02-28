import Image from "next/image"
import { Download, ArrowRight } from "lucide-react"
import { contacts, technologies } from "./data";
import mePhoto from "@/assets/me.jpg";
import ClientFooter from "../components/clientfooter";
import dynamic from "next/dynamic";
import Script from "next/script";
import { navLinksJsonLd, personJsonLd } from "@/schemas";

const InfiniteCarousel = dynamic(() => import('@/components/carousel'))

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="about-me-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Script
        id="nav-links-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navLinksJsonLd) }}
      />


      {/* Sticky Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Sinan</span>
            <div className="hidden min-[400px]:flex space-x-6">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
              <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="aspect-[3/4] relative w-64 lg:w-96 mx-auto">
                <Image
                  src={mePhoto}
                  alt="Sinan Deniz Ceviker's Photo"
                  className="rounded-2xl shadow-xl"
                  fill
                  priority
                  loading="eager"
                  placeholder="blur"
                  quality={60}
                  sizes="(max-width: 640px) 256px, 384px"
                />
              </div>
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Hi, I&apos;m Sinan
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                AI Student & Freelance Software Engineer
              </p>
              <p className="text-lg text-gray-500 mb-8">
                I create scalable web, mobile, and desktop applications with focus on performance and automation.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="cv_Ceviker_Sinan_Deniz.pdf"
                  download
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                  title="Download my CV"
                  aria-label="Download my CV"
                >
                  <Download size={20} />
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-2 hover:border-blue-600 hover:text-blue-600 transition-colors"
                  title="Contact me"
                  aria-label="Contact me"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600">
            <p className="mb-4">
              Currently a student of AI at the University of Groningen (RUG),
              I seek new challenges as a freelance software developer.
            </p>

            <p className="mb-4">
              As the founder of SNS Automation, I specialize in developing software solutions
              that help businesses streamline their operations and increase efficiency.
            </p>

            <p>
              I&apos;m always open to exciting freelance projects and collaborations that challenge me
              to push the boundaries of what&apos;s possible with technology.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {technologies.map((tech) => (
              <div key={tech.name} className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  {tech.icon}
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>

          <InfiniteCarousel />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              All my projects are designed and developed with utmost care and attention to details. You can browse through my work on my business website, by clicking below.
            </p>
            <a
              href="https://snsautomation.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 group transition-transform"
            >
              Visit SNS Automation
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="flex justify-center gap-8">
            {contacts.map(({ name, icon, link, label }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
                title={label}
                aria-label={label}
              >
                {icon}
                <span className="sm:inline hidden">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center text-gray-500">
          © {new Date().getFullYear()} SNS Automation. All rights reserved.
        </div>
      </footer>

      <ClientFooter />
    </div>
  );
}

