
import { useState, useEffect } from "react";

const Index = () => {
  const [greeting, setGreeting] = useState("Hello");
  
  useEffect(() => {
    // Simple animation to change the greeting after 2 seconds
    const timer = setTimeout(() => {
      setGreeting("Hello World");
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary p-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-7xl md:text-9xl font-bold hello-world-text animate-float">
            {greeting}
          </h1>
          {greeting === "Hello World" && (
            <span className="inline-block animate-wave origin-bottom-right text-6xl absolute -right-10 top-0">
              👋
            </span>
          )}
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mt-8 max-w-lg mx-auto">
          Welcome to my simple yet beautiful website. This is a minimalist design with a touch of animation.
        </p>
        
        <div className="mt-12 p-6 bg-card rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold mb-4">What's Next?</h2>
          <p className="text-card-foreground">
            This is just the beginning. You can build upon this simple foundation to create something amazing!
          </p>
        </div>
      </div>
      
      <footer className="mt-auto py-6 text-muted-foreground text-sm">
        Made with ❤️ using React & Tailwind CSS
      </footer>
    </div>
  );
};

export default Index;
