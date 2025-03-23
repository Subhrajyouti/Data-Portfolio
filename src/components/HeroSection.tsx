import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageLoadingProgress, setImageLoadingProgress] = useState(0);
  const [animationPhase, setAnimationPhase] = useState("initial"); // "initial", "floating", "settled"

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate loading progress for better visual feedback
    const progressInterval = setInterval(() => {
      setImageLoadingProgress(prev => {
        const newValue = prev + (15 * Math.random());
        return newValue > 90 ? 90 : newValue; // Cap at 90% until actual load
      });
    }, 200);
    
    // Preload the profile image
    const img = new Image();
    img.src = "/profile-photo.jpg";
    img.onload = () => {
      setImageLoading(false);
      setImageLoadingProgress(100);
      clearInterval(progressInterval);
      
      // Start the floating animation
      setAnimationPhase("floating");
      
      // After the floating animation completes, switch to gentle oscillation
      setTimeout(() => {
        setAnimationPhase("settled");
      }, 8000); // Match this to the duration of the floating animation
    };
    
    return () => clearInterval(progressInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine which animation class to use based on the animation phase
  const getAnimationClass = () => {
    switch (animationPhase) {
      case "floating":
        return "animate-floating";
      case "settled":
        return "animate-gentle-oscillation";
      default:
        return "";
    }
  };

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
                  onClick={scrollToProjects}
                >
                  View Projects
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
          
          {/* Enhanced Profile Photo with physics-based ball animation */}
          <div className={`md:w-1/2 flex justify-center mt-12 md:mt-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <div className="relative group">
              {/* Enhanced animated gradient background glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/10 rounded-full blur-xl 
                ${imageLoading ? 'opacity-100 animate-pulse' : 'opacity-70 group-hover:opacity-100 animate-pulse-slow'} 
                transition-all duration-1000`}></div>
              
              {/* Image container with physics-based ball animation */}
              <div className={`relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full ${getAnimationClass()} transition-all duration-1000`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent opacity-50 mix-blend-overlay z-10"></div>
                
                {/* Loading animation container */}
                {imageLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    {/* Circular loading indicator */}
                    <div className="relative group">
                      {/* Circular progress indicator */}
                      <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                        <circle 
                          cx="50" cy="50" r="45" 
                          className="stroke-primary/20 fill-none" 
                          strokeWidth="4"
                        />
                        <circle 
                          cx="50" cy="50" r="45" 
                          className="stroke-primary fill-none" 
                          strokeWidth="4"
                          strokeDasharray="283"  
                          strokeDashoffset={283 - (283 * imageLoadingProgress / 100)} 
                          strokeLinecap="round"
                        />
                      </svg>
                      
                      {/* Pulsing effect within the circle */}
                      <div className="absolute inset-4 rounded-full bg-muted animate-pulse"></div>
                      
                      {/* Animated shimmer effect */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 rounded-full">
                          <div className="absolute top-0 -inset-x-full h-full w-1/2 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Image with enhanced animations */}
                <img 
                  src="/profile-photo.jpg" 
                  alt="Subhrajyoti Mahanta" 
                  className={`w-full h-full object-cover transition-all duration-1000 ease-in-out
                    ${!imageLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
                    group-hover:scale-105 group-hover:brightness-110`}
                  onLoad={() => setImageLoading(false)}
                  loading="eager"
                />
                
                {/* Edge blending overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-background/40 mix-blend-overlay rounded-full"></div>
                
                {/* Interactive glow on hover - only active after loaded */}
                <div className={`absolute inset-0 bg-primary/10 transition-opacity duration-500 rounded-full
                  ${imageLoading ? 'opacity-0' : 'opacity-0 group-hover:opacity-30'}`}></div>
                  
                {/* Shadow that moves with the ball */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-black/10 dark:bg-black/20 rounded-full blur-md"></div>
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