
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageSquare, X, Send, ChevronDown, User, Bot, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string | React.ReactNode;
}

const MessagingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "assistant", 
      content: "Hi there! I'm Subhrajyoti's virtual assistant. Ask me anything about his skills, experience, projects, or how to connect with him!" 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { role: "user" as const, content: inputValue.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate a delay before the assistant responds
    setTimeout(() => {
      const response = generateResponse(userMessage.content);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  const generateResponse = (question: string): React.ReactNode => {
    const lowerQuestion = question.toLowerCase();
    
    // Check for skills related questions
    if (lowerQuestion.includes("skills") || lowerQuestion.includes("technology") || lowerQuestion.includes("technologies")) {
      return (
        <div>
          <p>Subhrajyoti's key technical skills include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>SQL (90%), Python (75%), R (35%), C (60%), DAX (60%)</li>
            <li>Database: PostgreSQL (85%), SQLite (70%), MySQL (65%)</li>
            <li>Tools: Power BI (75%), MS Excel (95%), Tableau (60%)</li>
            <li>Libraries: Pandas (80%), NumPy (75%), data visualization libraries</li>
          </ul>
          <p className="mt-2">You can find more details in his <a href="/resume.pdf" download className="text-primary hover:underline inline-flex items-center gap-1">resume <ExternalLink size={14} /></a>.</p>
        </div>
      );
    }
    
    // Check for experience related questions
    if (lowerQuestion.includes("experience") || lowerQuestion.includes("work")) {
      return (
        <div>
          <p>As a Data Analyst, Subhrajyoti has experience transforming complex datasets into actionable insights. His work includes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Data cleaning and transformation</li>
            <li>Statistical analysis and visualization</li>
            <li>Building interactive dashboards</li>
            <li>SQL querying and database management</li>
          </ul>
          <p className="mt-2">Check out his <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="text-primary hover:underline">projects section</a> or <a href="/resume.pdf" download className="text-primary hover:underline inline-flex items-center gap-1">download his resume <ExternalLink size={14} /></a> for more details.</p>
        </div>
      );
    }
    
    // Check for education related questions
    if (lowerQuestion.includes("education") || lowerQuestion.includes("study") || lowerQuestion.includes("degree")) {
      return (
        <div>
          <p>For Subhrajyoti's educational background, please check his <a href="/resume.pdf" download className="text-primary hover:underline inline-flex items-center gap-1">resume <ExternalLink size={14} /></a>.</p>
          <p className="mt-2">You can also navigate to the <a href="#resume" onClick={(e) => scrollToSection(e, "resume")} className="text-primary hover:underline">Resume section</a> of this portfolio for more information.</p>
        </div>
      );
    }
    
    // Check for project related questions
    if (lowerQuestion.includes("project") || lowerQuestion.includes("portfolio")) {
      return (
        <div>
          <p>Subhrajyoti has worked on several data analysis projects that showcase his skills. Here are some highlights:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Data job market analysis</li>
            <li>GoodCabs ride data analysis</li>
            <li>Additional data visualization and insight generation projects</li>
          </ul>
          <p className="mt-2">You can explore them in the <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="text-primary hover:underline">Projects section</a> of this portfolio.</p>
        </div>
      );
    }
    
    // Check for contact related questions
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("email") || lowerQuestion.includes("phone") || lowerQuestion.includes("reach")) {
      return (
        <div>
          <p>You can reach Subhrajyoti through:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Email: <a href="mailto:subhrajyoutimahanta@gmail.com" className="text-primary hover:underline">subhrajyoutimahanta@gmail.com</a></li>
            <li>Phone: +91 6002967278</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/subhrajyotimahanta/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Subhrajyoti Mahanta <ExternalLink size={14} /></a></li>
            <li>GitHub: <a href="https://github.com/Subhrajyouti" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Subhrajyouti <ExternalLink size={14} /></a></li>
          </ul>
          <p className="mt-2">There's also a <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-primary hover:underline">contact form</a> in this portfolio.</p>
        </div>
      );
    }
    
    // Check for resume related questions
    if (lowerQuestion.includes("resume") || lowerQuestion.includes("cv")) {
      return (
        <div>
          <p>You can <a href="/resume.pdf" download className="text-primary hover:underline inline-flex items-center gap-1">download Subhrajyoti's resume here <ExternalLink size={14} /></a>.</p>
          <p className="mt-2">You can also check the <a href="#resume" onClick={(e) => scrollToSection(e, "resume")} className="text-primary hover:underline">Resume section</a> of this portfolio.</p>
        </div>
      );
    }
    
    // Check for LinkedIn related questions
    if (lowerQuestion.includes("linkedin") || lowerQuestion.includes("social media") || lowerQuestion.includes("profile")) {
      return (
        <div>
          <p>You can connect with Subhrajyoti on <a href="https://www.linkedin.com/in/subhrajyotimahanta/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">LinkedIn <ExternalLink size={14} /></a>.</p>
        </div>
      );
    }
    
    // Check for GitHub related questions
    if (lowerQuestion.includes("github") || lowerQuestion.includes("code") || lowerQuestion.includes("repository")) {
      return (
        <div>
          <p>Check out Subhrajyoti's projects on <a href="https://github.com/Subhrajyouti" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">GitHub <ExternalLink size={14} /></a>.</p>
        </div>
      );
    }
    
    // Check for greetings
    if (lowerQuestion.includes("hi") || lowerQuestion.includes("hello") || lowerQuestion.includes("hey")) {
      return "Hello! How can I help you learn more about Subhrajyoti today?";
    }
    
    // Check for who questions
    if (lowerQuestion.includes("who") && (lowerQuestion.includes("you") || lowerQuestion.includes("are you"))) {
      return "I'm a virtual assistant created to help you learn more about Subhrajyoti Mahanta, a skilled Data Analyst. Feel free to ask me about his skills, experience, projects, or how to contact him!";
    }
    
    if (lowerQuestion.includes("who") && (lowerQuestion.includes("subhrajyoti") || lowerQuestion.includes("he"))) {
      return (
        <div>
          <p>Subhrajyoti Mahanta is a Data Analyst who specializes in transforming complex datasets into actionable insights. He has expertise in:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>SQL and Python data analysis</li>
            <li>Data visualization</li>
            <li>Dashboard creation</li>
            <li>Statistical analysis</li>
          </ul>
          <p className="mt-2">You can learn more by exploring this portfolio or <a href="/resume.pdf" download className="text-primary hover:underline inline-flex items-center gap-1">downloading his resume <ExternalLink size={14} /></a>.</p>
        </div>
      );
    }
    
    // Default response
    return (
      <div>
        <p>I'm not sure about that, but you can learn more about Subhrajyoti through:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="text-primary hover:underline">Projects section</a> - See his data analysis work</li>
          <li><a href="#skills" onClick={(e) => scrollToSection(e, "skills")} className="text-primary hover:underline">Skills section</a> - Explore his technical abilities</li>
          <li><a href="/resume.pdf" download className="text-primary hover:underline inline-flex items-center gap-1">Resume <ExternalLink size={14} /></a> - Download his full CV</li>
          <li><a href="https://www.linkedin.com/in/subhrajyotimahanta/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">LinkedIn <ExternalLink size={14} /></a> - Connect professionally</li>
        </ul>
        <p className="mt-2">Is there something specific you'd like to know about his data analysis background?</p>
      </div>
    );
  };
  
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the chat after navigation
    }
  };

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={toggleAssistant}
        className={cn(
          "fixed bottom-6 right-6 rounded-full p-3 w-12 h-12 shadow-lg transition-all duration-300 z-50",
          isOpen ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </Button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-20 right-6 w-80 md:w-96 rounded-lg shadow-xl transition-all duration-300 transform z-40 overflow-hidden",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <Card className="flex flex-col h-[480px] border-primary/20">
          {/* Header */}
          <div className="bg-primary/10 p-3 flex items-center justify-between border-b border-border">
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-primary" />
              <h3 className="font-medium text-sm">Portfolio Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleAssistant}
            >
              <X size={16} />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col max-w-[85%] rounded-lg p-3 text-sm animate-fade-in",
                  msg.role === "user"
                    ? "ml-auto bg-primary/10 text-foreground"
                    : "mr-auto bg-muted text-foreground"
                )}
              >
                <div className="flex items-center gap-2 mb-1 text-xs text-muted-foreground">
                  {msg.role === "user" ? (
                    <>
                      <span>You</span>
                      <User size={12} />
                    </>
                  ) : (
                    <>
                      <Bot size={12} />
                      <span>Assistant</span>
                    </>
                  )}
                </div>
                {msg.content}
              </div>
            ))}
            {isTyping && (
              <div className="flex max-w-[85%] mr-auto bg-muted rounded-lg p-3 text-sm">
                <div className="flex space-x-1 items-center">
                  <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-border flex gap-2"
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Subhrajyoti..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!inputValue.trim() || isTyping}
              className="bg-primary hover:bg-primary/90"
            >
              <Send size={16} />
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default MessagingAssistant;
