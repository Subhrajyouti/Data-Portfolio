
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Preload the profile image
    const img = new Image();
    img.src = "/profile-photo.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background to-primary/5 dark:to-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-32 md:py-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2">
            <div 
              className={`space-y-6 transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="inline-block">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Data Analyst
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight md:leading-tight">
                Subhrajyoti <span className="text-gradient">Mahanta</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
               Turning Complex Datasets Into Actionable Insights
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  className="rounded-md bg-primary text-white hover:bg-primary/90 transition-all"
                >
                  <Link to="/#projects">View Projects</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-md border-primary/30 text-foreground hover:bg-primary/10 transition-all gap-2"
                >
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Photo with better loading strategy */}
          <div className={`md:w-1/2 flex justify-center mt-12 md:mt-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <div className="relative group">
              {/* Gradient background glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 animate-pulse-slow transition-opacity duration-1000"></div>
              
              {/* Image container with better loading strategy */}
              <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent opacity-50 mix-blend-overlay z-10"></div>
                
                {/* Show placeholder or skeleton while image loads */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-muted animate-pulse rounded-full"></div>
                )}
                
                <img 
                  src="/profile-photo.jpg" 
                  alt="Subhrajyoti Mahanta" 
                  className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  loading="eager" // Load this image immediately as it's above the fold
                />
                
                {/* Edge blending overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-background/40 mix-blend-overlay rounded-full"></div>
                
                {/* Interactive glow on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#intro"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-10 w-10 text-muted-foreground/50" />
      </a>
    </section>
  );
};

export default HeroSection;
