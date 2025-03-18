
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="relative overflow-hidden rounded-xl aspect-square">
              <div className="absolute -inset-px border-2 border-primary/20 rounded-xl"></div>
              {/* Replace placeholder with actual image */}
              <img 
                src="/image.jpg" 
                alt="Subhrajyoti Mahanta" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-10">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
            I am Subhrajyouti Mahanta, a Data Analyst with expertise in SQL, Python, R, Power BI, Tableau, and Excel. Currently pursuing a B.Tech at IIEST Shibpur, I have worked on LIDAR-based traffic analysis at IIT Guwahati and EV impact studies at DST-SERB, where I processed large-scale sensor data and developed insightful visualizations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a background in both technical implementation and data storytelling, I bridge the gap between raw data and strategic insights. I'm experienced in working with various stakeholders to understand their needs and deliver data-driven solutions that address real-world challenges.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="rounded-xl border border-border/50 p-5 bg-card/50 relative overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 shadow-md">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/30"></div>
                <h4 className="text-lg font-medium">B.Tech, Indian Institute of Engineering Science and Technology, Shibpur</h4>
                <p className="text-muted-foreground mt-1">Dec 2021 - Present</p>
                <Badge variant="secondary" className="mt-3">Engineering</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Building className="h-5 w-5 text-primary" />
                Experience
              </h3>
              <div className="space-y-5">
                <ExperienceCard 
                  position="Research Intern"
                  company="DST-SERB, Govt. of India (IIEST Shibpur)"
                  period="August 2023 - Present"
                  description="Working on LIDAR sensor validation and EV traffic analysis using OpenCV & Tableau."
                  tags={["OpenCV", "Tableau", "LIDAR", "Traffic Analysis"]}
                />
                
                <ExperienceCard 
                  position="LIDAR Data Analyst"
                  company="IIT Guwahati"
                  period="May 2023 - July 2023"
                  description="Cleaned, validated, and analyzed 100+GB of LIDAR & Vbox data for research applications."
                  tags={["Data Cleaning","SQL", "Python" ,"LIDAR", "Data Validation"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  position: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

const ExperienceCard = ({ position, company, period, description, tags }: ExperienceCardProps) => {
  return (
    <div className="rounded-xl border border-border/50 p-5 bg-card/50 relative overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 shadow-md">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary/30"></div>
      <h4 className="text-lg font-medium">{position}</h4>
      <p className="text-primary/80 font-medium">{company}</p>
      <p className="text-sm text-muted-foreground mt-1">{period}</p>
      <p className="text-muted-foreground mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="font-normal">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
