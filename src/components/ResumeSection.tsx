import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const [resumeUrl, setResumeUrl] = useState("/resume.pdf");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the PDF exists by attempting to fetch it
    const checkPdfExists = async () => {
      try {
        const response = await fetch(resumeUrl, { method: 'HEAD' });
        setIsLoading(false);
      } catch (error) {
        console.error("Error checking PDF:", error);
        setIsLoading(false);
      }
    };
    
    checkPdfExists();
  }, [resumeUrl]);

  return (
    <section id="resume" className="section-container">
      <h2 className="section-title">Resume</h2>
      
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-card border border-border/50 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">My Resume</h3>
              </div>
              <p className="text-muted-foreground">
                Download my resume to learn more about my skills, experience, and education.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href={resumeUrl} 
                download
                className="no-underline"
              >
                <Button className="rounded-md gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </a>
              <a 
                href="https://drive.google.com/drive/folders/1CygdsRYNp0oD3qa2sFHRaOcNQobZNlXh?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="no-underline"
              >
                <Button variant="outline" className="rounded-md gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View in Drive
                </Button>
              </a>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border/50 pt-8">
            <div className="aspect-[1.414/1] bg-muted/30 rounded-lg overflow-hidden">
              {isLoading ? (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Loading resume...
                </div>
              ) : (
                <iframe
                  src={`${resumeUrl}#view=FitH`}
                  className="w-full h-full"
                  title="Resume Preview"
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;