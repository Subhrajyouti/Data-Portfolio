import { useState } from "react";
import { cn } from "@/lib/utils";
import { Database, Code, LineChart, Server, Table, FileSpreadsheet, BarChart3, LayoutDashboard, PieChart, ArrowRightLeft, Briefcase, Braces, GanttChartSquare, Webhook, BookOpen, LucideIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number; // 0-100
  tags: string[];
  icon: React.ReactNode;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { 
        name: "SQL", 
        level: 90,
        tags: ["CTEs", "Window Functions", "Joins", "Pivot Tables"],
        icon: <Database className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "Python", 
        level: 75,
        tags: ["Pandas", "NumPy", "Data Visualization", "Web Scraping"],
        icon: <Braces className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "R", 
        level: 35,
        tags: ["ggplot2", "dplyr", "Tidyverse", "Statistical Modeling"],
        icon: <BarChart3 className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "C", 
        level: 60,
        tags: ["Data Structures", "Memory Management", "File Handling", "Algorithms"],
        icon: <Webhook className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "DAX", 
        level: 60,
        tags: ["Measures", "Calculated Columns", "Time Intelligence", "Row Context"],
        icon: <ArrowRightLeft className="h-8 w-8 text-primary/80" />
      }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { 
        name: "PostgreSQL", 
        level: 85,
        tags: ["CTEs", "JSONB", "Partitioning", "Advanced Window Functions"],
        icon: <Server className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "SQLite", 
        level: 70,
        tags: ["Lightweight Databases", "Transactions", "Indexing", "Query Optimization"],
        icon: <Database className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "MySQL", 
        level: 65,
        tags: ["Indexing", "Stored Procedures", "Query Optimization", "Transactions"],
        icon: <Table className="h-8 w-8 text-primary/80" />
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Libraries",
    icon: <LineChart className="h-5 w-5" />,
    skills: [
      { 
        name: "Power BI", 
        level: 75,
        tags: ["Data Modeling", "DAX", "Report Building", "Power Query"],
        icon: <LayoutDashboard className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "MS Excel", 
        level: 95,
        tags: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Power Query", "Macros"],
        icon: <FileSpreadsheet className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "Tableau", 
        level: 60,
        tags: ["Calculated Fields", "Dashboard Design", "LOD Expressions", "Data Blending"],
        icon: <PieChart className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "Pandas", 
        level: 80,
        tags: ["Data Cleaning", "DataFrames", "GroupBy", "Merging & Joining"],
        icon: <Table className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "NumPy", 
        level: 75,
        tags: ["Arrays", "Broadcasting", "Linear Algebra", "Random Sampling"],
        icon: <GanttChartSquare className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "SciPy", 
        level: 70,
        tags: ["Statistical Functions", "Optimization", "Signal Processing", "Integration"],
        icon: <BookOpen className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "Matplotlib", 
        level: 85,
        tags: ["Plot Customization", "Subplots", "Annotations", "3D Plotting"],
        icon: <LineChart className="h-8 w-8 text-primary/80" />
      },
      { 
        name: "Seaborn", 
        level: 85,
        tags: ["Statistical Visualizations", "Heatmaps", "Pair Plots", "Regression Plots"],
        icon: <BarChart3 className="h-8 w-8 text-primary/80" />
      }
    ]
  }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("languages");

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <div className="mt-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar with categories */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="sticky top-24 space-y-2">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-3",
                    activeCategory === category.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-muted/50 text-muted-foreground"
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className={cn(
                    "p-2 rounded-md",
                    activeCategory === category.id
                      ? "bg-primary/20"
                      : "bg-muted/30"
                  )}>
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:w-2/3 lg:w-3/4">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={cn(
                  "transition-all duration-500",
                  activeCategory === category.id
                    ? "block animate-fade-in"
                    : "hidden"
                )}
              >
                <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <SkillCard 
                      key={index} 
                      skill={skill} 
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
  delay: number;
}

const SkillCard = ({ skill, delay }: SkillCardProps) => {
  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    if (level >= 50) return "Intermediate";
    return "Beginner";
  };

  return (
    <div 
      className="p-6 rounded-xl border border-border/50 bg-card/50 relative overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 shadow-md"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {skill.icon}
          <h4 className="text-lg font-medium">{skill.name}</h4>
        </div>
        <div className="text-sm font-medium text-primary">
          {getProficiencyLabel(skill.level)}
        </div>
      </div>
      
      <div className="space-y-2">
        <Progress value={skill.level} className="h-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Beginner</span>
          <span>Expert</span>
        </div>

        {/* Add tags for each skill */}
        <div className="flex flex-wrap gap-2 mt-4">
          {skill.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;