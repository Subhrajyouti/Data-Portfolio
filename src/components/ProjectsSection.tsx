

import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/hooks/useTheme";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
}

const projects: Project[] = [
  {
    id: 10,
    title: "Residential Solar Feasibility & Financial Model (PM Surya Ghar Yojana based)",
    description: "Comprehensive feasibility study for residential rooftop solar under PM Surya Ghar Yojana using PVsyst modeling and financial analysis",
    image: "/solar.jpg",
    tags: ["PVsyst", "Financial Modeling", "Solar Energy", "Policy Analysis"],
    slug: "solar-viability-assam"
  },
  
  {
    id: 9,
    title: "Monday Coffee Business Expansion Analysis",
    description: "Analyzing city performance to determine the best locations for business expansion using data-driven insights",
    image: "/coffee1.jpg",
    tags: ["SQL", "Data Analysis", "Weighted Scoring", "Decision Making"],
    slug: "monday-coffee-project"
  },
  {
    id: 8,
    title: "Data Job Market Analysis",
    description: "An in-depth analysis of data science job market trends, salary distributions, and required skills across different industries",
    image: "/data_science.jpg",
    tags: ["Python", "Pandas", "Data Visualization", "Job Market Analysis"],
    slug: "data-job-market-analysis"
  },
  {
    id: 7,
    title: "GoodCabs Performance Analysis & Dashboard",
    description: "A data-driven analysis of GoodCabs' operations using SQL, Power BI, and PostgreSQL to provide strategic insights to the Chief of Operations",
    image: "/alexander-red-S9qxkJN0f4Q-unsplash.jpg",
    tags: ["Power BI", "PostgreSQL", "SQL", "Data Analysis"],
    slug: "goodcabs-analysis"
  }
];

const ProjectsSection = () => {
  const { theme } = useTheme();

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Special routing for specific projects
  const projectUrl = project.slug === "goodcabs-analysis" 
    ? "/goodcabs-analysis" 
    : project.slug === "data-job-market-analysis"
    ? "/data-job-market-analysis"
    : project.slug === "monday-coffee-project"
    ? "/monday-coffee-project"
    : project.slug === "residental-solar-analysis"
    ? "/monday-coffee-project-copy"
    : project.slug === "solar-viability-assam"
    ? "/solar-viability-assam"
    : `/project/${project.slug}`;

  // Preload images 
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Change from anchor tag to Link component
  return (
    <Link 
      to={projectUrl}
      className="group block h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 bg-background border border-border/50 hover:border-primary/30 hover:-translate-y-2 shadow-md">
        <div className="relative overflow-hidden aspect-video">
          {/* Show a placeholder while the image loads */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse"></div>
          )}
          
          {/* The actual image with loading optimizations */}
          <img
            src={project.image}
            alt={project.title}
            className={`object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy" 
            onLoad={handleImageLoad}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="font-normal">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectsSection;

