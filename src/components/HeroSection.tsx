
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
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
    </section>
  );
};

export default HeroSection;
