
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  slug: string;
  github?: string;
  live?: string;
  insights: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "LIDAR Sensor Data Validation",
    description: "Validation framework for LIDAR sensors in autonomous vehicle applications",
    fullDescription: "A comprehensive validation framework designed to ensure accuracy and reliability of LIDAR sensor data for autonomous vehicle applications. This project involved developing algorithms to detect and correct errors in sensor readings, establish calibration procedures, and create a validation pipeline that handles real-time data processing.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "OpenCV", "Sensor Data", "Machine Learning", "Data Validation", "Autonomous Vehicles"],
    slug: "lidar-sensor-validation",
    github: "https://github.com/",
    insights: [
      "Improved data accuracy by 35% through advanced calibration techniques",
      "Reduced validation processing time by 40% using optimized algorithms",
      "Implemented real-time error detection with 98% accuracy"
    ]
  },
  {
    id: 2,
    title: "EV Traffic Analysis Dashboard",
    description: "Interactive visualization dashboard for electric vehicle traffic patterns",
    fullDescription: "An interactive dashboard built with Tableau to visualize and analyze electric vehicle traffic patterns. The project integrates multiple data sources including GPS data, charging station usage, and traffic flow information to provide comprehensive insights into EV movement patterns, charging behavior, and infrastructure usage.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Tableau", "SQL", "Data Visualization", "Traffic Analysis", "Electric Vehicles", "Dashboard Design"],
    slug: "ev-traffic-analysis",
    live: "https://example.com/dashboard",
    insights: [
      "Identified key congestion points affecting EV charging access",
      "Discovered 24% underutilization of charging infrastructure in certain areas",
      "Provided policy recommendations that increased charging station efficiency by 18%"
    ]
  },
  {
    id: 3,
    title: "PostgreSQL Database Optimization",
    description: "Performance tuning and query optimization for large-scale sensor datasets",
    fullDescription: "A database optimization project focused on improving performance of PostgreSQL databases handling large-scale sensor datasets. The work involved query optimization, index strategy development, database schema refinement, and implementation of partitioning strategies to handle time-series sensor data efficiently.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["PostgreSQL", "Database Design", "Query Optimization", "Performance Tuning", "Indexing", "Data Modeling"],
    slug: "postgresql-optimization",
    github: "https://github.com/",
    insights: [
      "Reduced query execution time by 65% for complex analytical queries",
      "Decreased database storage requirements by 40% through optimized schema design",
      "Implemented time-series partitioning that improved insertion rates by 300%"
    ]
  },
  {
    id: 4,
    title: "Real-time Data Processing Pipeline",
    description: "Scalable pipeline for processing and analyzing streaming sensor data",
    fullDescription: "A scalable data processing pipeline designed to handle streaming sensor data in real-time. The system utilizes Apache Kafka for data ingestion, Python for processing, and creates a robust architecture that handles data validation, transformation, and loading into analytical databases with minimal latency.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Apache Kafka", "Data Pipeline", "Real-time Analytics", "Stream Processing", "Data Engineering"],
    slug: "realtime-data-pipeline",
    github: "https://github.com/",
    insights: [
      "Achieved sub-second processing latency for over 10,000 events per second",
      "Implemented fault-tolerance with 99.99% uptime over a 6-month period",
      "Reduced data processing costs by 45% compared to previous solution"
    ]
  },
  {
    id: 5,
    title: "Predictive Maintenance Model",
    description: "ML model for predicting equipment failure based on sensor readings",
    fullDescription: "A machine learning model that predicts equipment failure based on sensor readings from industrial machinery. The project involved feature engineering from raw sensor data, model selection and training, and deployment of the prediction system that provides early warnings of potential failures to maintenance teams.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning", "Python", "Pandas", "Scikit-learn", "Predictive Maintenance", "Time Series Analysis"],
    slug: "predictive-maintenance",
    github: "https://github.com/",
    insights: [
      "Predicted equipment failures with 92% accuracy 24-48 hours in advance",
      "Reduced unplanned downtime by 37% in the first quarter after implementation",
      "Generated estimated cost savings of $500,000 by preventing major failures"
    ]
  },
  {
    id: 6,
    title: "Data Quality Assessment Framework",
    description: "Automated system for evaluating and ensuring data quality in sensor datasets",
    fullDescription: "An automated framework for assessing and ensuring data quality in sensor datasets. The system implements comprehensive checks for completeness, consistency, accuracy, and timeliness of data. It includes automated data profiling, anomaly detection, and quality score calculation to provide a quantitative measure of dataset reliability.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Data Quality", "Automation", "ETL", "Data Profiling", "Anomaly Detection"],
    slug: "data-quality-framework",
    github: "https://github.com/",
    insights: [
      "Automated quality assessment reduced manual review time by 80%",
      "Identified and corrected critical data issues in 15TB of historical sensor data",
      "Implemented continuous monitoring that catches 95% of data quality issues within minutes"
    ]
  }
];

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Find the project with matching slug
    const foundProject = projectsData.find(p => p.slug === slug);
    setProject(foundProject || null);
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="text-lg font-bold text-foreground transition-all duration-300 hover:text-primary"
            >
              Subhrajyoti<span className="text-primary">.</span>
            </Link>
            
            <Button asChild variant="ghost" size="sm" className="gap-1">
              <Link to="/#projects">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Projects</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {/* Hero */}
        <div className="relative h-96">
          <div className="absolute inset-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4 mt-8">
                {project.github && (
                  <Button asChild variant="default" size="sm" className="gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                
                {project.live && (
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>{project.fullDescription}</p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-12 mb-6">Key Insights & Impact</h2>
              <ul className="space-y-4">
                {project.insights.map((insight, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p>{insight}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-xl border border-border/50 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover"
                  />
                </div>
                
                <div className="rounded-xl border border-border/50 p-6 space-y-4">
                  <h3 className="text-lg font-medium">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="rounded-xl border border-border/50 p-6 space-y-4">
                  <h3 className="text-lg font-medium">Related Projects</h3>
                  <div className="space-y-3">
                    {projectsData
                      .filter(p => p.id !== project.id)
                      .slice(0, 3)
                      .map((relatedProject) => (
                        <Link 
                          key={relatedProject.id} 
                          to={`/project/${relatedProject.slug}`}
                          className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <h4 className="font-medium">{relatedProject.title}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {relatedProject.description}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectPage;
