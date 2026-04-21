import portraitImg from "@/assets/sinan_image.png";
import { SiteHeader } from "@/components/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { AcademicSection } from "@/components/sections/AcademicSection";
import { ContactSection, SiteFooter } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Sinan Bilir | AI & Data Scientist Portfolio";

    const setMeta = (selector: string, attribute: "content", value: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) {
        element.setAttribute(attribute, value);
      }
    };

    setMeta('meta[name="description"]', "content", "Sinan Bilir is an AI and Data Scientist specialising in machine learning, healthcare AI, multi-omics integration, deep learning, MLOps, and decision-support systems.");
    setMeta('meta[property="og:title"]', "content", "Sinan Bilir | AI & Data Scientist Portfolio");
    setMeta('meta[property="og:description"]', "content", "AI and Data Scientist specialising in machine learning, healthcare AI, multi-omics integration, deep learning, MLOps, and decision-support systems.");
    setMeta('meta[property="og:image"]', "content", portraitImg);
    setMeta('meta[name="twitter:title"]', "content", "Sinan Bilir | AI & Data Scientist Portfolio");
    setMeta('meta[name="twitter:description"]', "content", "AI and Data Scientist specialising in applied machine learning, clinical decision support, healthcare AI, deep learning, MLOps, and end-to-end delivery.");
    setMeta('meta[name="twitter:image"]', "content", portraitImg);
  }, []);

  return (
    <div className="min-h-screen">
      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AcademicSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
