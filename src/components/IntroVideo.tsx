
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState, useRef, useEffect } from "react";

const IntroVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Handle intersection observer for lazy loading
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !videoLoaded) {
          setVideoLoaded(true);
          observer.disconnect();
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [videoLoaded]);

  return (
    <section id="intro" className="section-container">
      <h2 className="section-title">Introduction</h2>
      <div className="mt-10 max-w-4xl mx-auto">
        <div 
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden group shadow-lg"
        >
          <AspectRatio ratio={16/9} className="bg-muted/30">
            {videoLoaded ? (
              <iframe 
                ref={iframeRef}
                src="https://player.vimeo.com/video/824593660?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className="w-full h-full absolute inset-0 rounded-2xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                loading="lazy"
                title="Introduction"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted/20">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mx-auto animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">Loading video...</p>
                </div>
              </div>
            )}
          </AspectRatio>
          
          {!videoLoaded && (
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-lg font-medium">Watch my introduction video</p>
              <p className="text-white/80 text-sm">Learn about my background and expertise in data analysis</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
