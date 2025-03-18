
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type SectionType = {
  id: string;
  title: string;
  icon?: string;
};

const SECTIONS: SectionType[] = [
  { id: "overview", title: "Project Overview" },
  { id: "objectives", title: "Objectives" },
  { id: "data-description", title: "Data Description" },
  { id: "methodology", title: "Methodology" },
  { id: "key-insights", title: "Key Insights" },
  { id: "challenges", title: "Challenges & Learnings" },
  { id: "project-files", title: "Project Files" }
];

type DataJobMarketSidebarProps = {
  sticky?: boolean;
};

const DataJobMarketSidebar = ({ sticky = false }: DataJobMarketSidebarProps) => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const currentSection = hash ? hash.replace("#", "") : "overview";
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      navigate(`#${sectionId}`);
    }
  };

  return (
    <div className={cn(
      "bg-background/95 backdrop-blur-lg border-b border-border/50",
      sticky ? "w-full" : ""
    )}>
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
        
        <div className={cn("md:block", isOpen ? "block" : "hidden")}>
          <ScrollArea className="w-full overflow-x-auto">
            <div className="flex space-x-2 pb-2 min-w-full">
              {SECTIONS.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "whitespace-nowrap rounded-full",
                    currentSection === section.id && "bg-primary text-primary-foreground"
                  )}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default DataJobMarketSidebar;
