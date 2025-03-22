import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Eye, Target, Database, SearchCode, Lightbulb, AlertCircle, Files } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const SECTIONS = [
  { id: "overview", title: "Project Overview", icon: <Eye className="h-4 w-4 mr-1 text-primary" /> },
  { id: "objectives", title: "Objectives", icon: <Target className="h-4 w-4 mr-1 text-primary" /> },
  { id: "data-description", title: "Data Description", icon: <Database className="h-4 w-4 mr-1 text-primary" /> },
  { id: "methodology", title: "Methodology", icon: <SearchCode className="h-4 w-4 mr-1 text-primary" /> },
  { id: "key-insights", title: "Key Insights", icon: <Lightbulb className="h-4 w-4 mr-1 text-primary" /> },
  { id: "challenges", title: "Challenges & Learnings", icon: <AlertCircle className="h-4 w-4 mr-1 text-primary" /> },
  { id: "project-files", title: "Project Files", icon: <Files className="h-4 w-4 mr-1 text-primary" /> }
];

const NewProject = () => {
  const [currentSection, setCurrentSection] = useState("overview");
  const [isOpen, setIsOpen] = useState(false);

  // Add observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 } // 20% of the element must be visible
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setCurrentSection(sectionId);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-background/95 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-medium">Jump to Section</h2>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
          
          <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
            <ScrollArea className="w-full overflow-x-auto">
              <div className="flex space-x-2 pb-2 min-w-full">
                {SECTIONS.map((section) => (
                  <Button
                    key={section.id}
                    variant="ghost"
                    size="sm"
                    className={`whitespace-nowrap rounded-full flex items-center gap-1 ${currentSection === section.id ? "bg-primary text-primary-foreground [&_svg]:text-white" : "[&_svg]:text-primary"}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.icon}
                    {section.title}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        <section id="overview" className="section-container">
          <h2 className="section-title">Project Overview</h2>
          <p>
            This project focuses on analyzing city performance to determine the best locations for business expansion using data-driven insights.
          </p>
        </section>

        <section id="objectives" className="section-container">
          <h2 className="section-title">Objectives</h2>
          <ul>
            <li>Identify key performance indicators (KPIs) for city evaluation.</li>
            <li>Develop a weighted scoring model to rank cities.</li>
            <li>Provide actionable recommendations for business expansion.</li>
          </ul>
        </section>

        <section id="data-description" className="section-container">
          <h2 className="section-title">Data Description</h2>
          <p>
            The dataset includes population, income levels, education rates, and other relevant factors for major cities.
          </p>
        </section>

        <section id="methodology" className="section-container">
          <h2 className="section-title">Methodology</h2>
          <p>
            SQL was used for data extraction and transformation. A weighted scoring model was developed to rank cities based on predefined KPIs.
          </p>
        </section>

        <section id="key-insights" className="section-container">
          <h2 className="section-title">Key Insights</h2>
          <p>
            Key insights include the identification of top-performing cities and the factors driving their success.
          </p>
        </section>

        <section id="challenges" className="section-container">
          <h2 className="section-title">Challenges & Learnings</h2>
          <p>
            Challenges included data quality issues and the need for careful model validation.
          </p>
        </section>

        <section id="project-files" className="section-container">
          <h2 className="section-title">Project Files</h2>
          <p>
            Project files include SQL scripts, data analysis reports, and presentation slides.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewProject;
