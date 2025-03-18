import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  Target, 
  Database, 
  LineChart, 
  Lightbulb, 
  BookOpen, 
  FileText,
  BarChart2, 
  SearchCode, 
  PlusCircle, 
  AlertCircle, 
  Files 
} from "lucide-react";
import { useState } from "react";

type SectionType = {
  id: string;
  title: string;
  icon: React.ReactNode;
};

const SECTIONS: SectionType[] = [
  { id: "overview", title: "Project Overview", icon: <Eye className="h-4 w-4 mr-2" /> },
  { id: "objectives", title: "Objectives", icon: <Target className="h-4 w-4 mr-2" /> },
  { id: "data-description", title: "Data Description", icon: <Database className="h-4 w-4 mr-2" /> },
  { id: "methodology", title: "Methodology", icon: <SearchCode className="h-4 w-4 mr-2" /> },
  { id: "key-insights", title: "Key Insights", icon: <Lightbulb className="h-4 w-4 mr-2" /> },
  { id: "challenges", title: "Challenges & Learnings", icon: <AlertCircle className="h-4 w-4 mr-2" /> },
  { id: "project-files", title: "Project Files", icon: <Files className="h-4 w-4 mr-2" /> }
];

// Extended sections to match the image navigation
const EXTENDED_SECTIONS: SectionType[] = [
  { id: "overview", title: "Overview", icon: <Eye className="h-4 w-4 mr-2" /> },
  { id: "objectives", title: "Objective", icon: <Target className="h-4 w-4 mr-2" /> },
  { id: "data-model", title: "Data Model", icon: <Database className="h-4 w-4 mr-2" /> },
  { id: "methodology", title: "Methodology", icon: <SearchCode className="h-4 w-4 mr-2" /> },
  { id: "dashboard", title: "Dashboard", icon: <BarChart2 className="h-4 w-4 mr-2" /> },
  { id: "sql-queries", title: "SQL Queries", icon: <FileText className="h-4 w-4 mr-2" /> },
  { id: "ad-hoc-reports", title: "Ad Hoc Reports", icon: <PlusCircle className="h-4 w-4 mr-2" /> },
  { id: "insights", title: "Insights", icon: <Lightbulb className="h-4 w-4 mr-2" /> },
  { id: "challenges", title: "Challenges", icon: <AlertCircle className="h-4 w-4 mr-2" /> },
  { id: "files", title: "Files", icon: <Files className="h-4 w-4 mr-2" /> }
];

type DataJobMarketSidebarProps = {
  sticky?: boolean;
  extended?: boolean;
};

const DataJobMarketSidebar = ({ 
  sticky = false, 
  extended = false 
}: DataJobMarketSidebarProps) => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const currentSection = hash ? hash.replace("#", "") : "overview";
  const [isOpen, setIsOpen] = useState(false);
  
  // Choose between regular or extended sections
  const sectionsToUse = extended ? EXTENDED_SECTIONS : SECTIONS;

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
              {sectionsToUse.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "whitespace-nowrap rounded-full flex items-center",
                    currentSection === section.id && "bg-primary text-primary-foreground"
                  )}
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
  );
};

export default DataJobMarketSidebar;