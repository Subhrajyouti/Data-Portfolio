
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [viewCount, setViewCount] = useState<number>(0);
  
  useEffect(() => {
    // Get the current view count from localStorage
    const storedCount = localStorage.getItem("websiteViewCount");
    let count = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment the count for this page view
    count += 1;
    
    // Save the updated count back to localStorage
    localStorage.setItem("websiteViewCount", count.toString());
    
    // Update state
    setViewCount(count);
  }, []);
  
  return (
    <footer className="border-t border-border/50">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">
              Subhrajyoti<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              Data Analyst 
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:subhrajyoutimahanta@gmail.com"
              className="p-2 rounded-full bg-muted/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/subhrajyotimahanta/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/Subhrajyouti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Subhrajyoti Mahanta. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex items-center">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            Website Visit Counts {viewCount.toLocaleString()} 
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
