
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Github, ChevronDown, ChevronUp, ExternalLink, Copy, Eye, Target, Database, FlaskConical, LightBulb, GraduationCap, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DataJobMarketSidebar from "@/components/DataJobMarketSidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

const DataJobMarketProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [openInsights, setOpenInsights] = useState<{[key: string]: boolean}>({
    insight1: false,
    insight2: false,
    insight3: false,
    insight4: false,
    insight5: false
  });
  
  // Handle hash navigation with adjusted offset
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Adjust this offset to fix the scrolling issue (reduced from -100 to -150)
        const yOffset = -150;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Add scroll event listener to handle sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky navigation after scrolling past the hero section
      const scrollPosition = window.scrollY;
      setShowStickyNav(scrollPosition > 500); // Adjust this threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleInsight = (key: string) => {
    setOpenInsights(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Function to copy code to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Code copied to clipboard!");
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Navigation */}
      <Navbar />
      
      {/* Hero Section - Added more top padding to move title further down */}
      <div className="relative h-[65vh] w-full">
        <img 
          src="/data_science.jpg" 
          alt="Data Job Market Analysis" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70">
          <div className="container h-full flex flex-col justify-center pt-36 pb-20">
            <div className="max-w-3xl">              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Data Job Market Analysis
              </h1>
              
              <p className="text-lg text-white/80 mb-8">
                A data-driven exploration of the most valuable skills in the data job market—focusing on Data Analyst roles and the skills that maximize employability and earnings.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-white text-black hover:bg-white/90">Python</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Pandas</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Matplotlib</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Seaborn</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Excel</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Power BI</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">GitHub</Badge>
                <Badge className="bg-white text-black hover:bg-white/90">Jupyter Notebooks</Badge>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-blue-500 text-white border-blue-500/20 hover:bg-blue-600"
                asChild
              >
                <a href="https://github.com/Subhrajyouti/Data-Science-Job-Market-Research-with-Python" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Navigation - will be shown conditionally either here or as sticky */}
      {!showStickyNav && <DataJobMarketSidebar />}
      
      {/* Sticky Navigation - shows when scrolling */}
      {showStickyNav && (
        <div className="sticky top-0 z-50">
          <DataJobMarketSidebar sticky={true} />
        </div>
      )}
      
      {/* Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section id="overview" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" /> Project Overview
              </h2>
              <p className="text-muted-foreground mb-4">
                This project aims to uncover the most valuable skills in the data job market, focusing on Data Analyst roles.
                By analyzing job postings, salary data, and skill trends, I identified the skills that maximize employability and earnings. 
                Using Python, Excel, and visualization techniques, I examined how salaries and skill demand fluctuate over time.
              </p>
            </section>

            <section id="objectives" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" /> Objectives
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Identify top-paying & high-demand skills for Data Analysts</li>
                <li>Analyze salary distributions across different job titles</li>
                <li>Investigate skill trends over time to highlight growing demands</li>
                <li>Help data professionals prioritize learning efforts for career growth</li>
              </ul>
            </section>

            <section id="data-description" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" /> Data Description & Data Model
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Dataset Source:</strong> Data from Luke Barousse's Python Course on job postings.
                </p>
                <p>
                  <strong>Key Columns:</strong> Job titles, salaries, locations, skills required.
                </p>
                <div>
                  <strong>Data Processing Steps:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Removed duplicates and standardized job titles</li>
                    <li>Converted job posting dates into a structured time series</li>
                    <li>Filtered for United States-based jobs to ensure consistency</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="/data_modelling.png" 
                    alt="Data Model" 
                    className="w-full max-w-xl rounded-lg border border-border"
                  />
                </div>
              </div>
            </section>

            <section id="methodology" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-primary" /> Methodology
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Data Cleaning:</strong> Removed null values, formatted dates, and standardized skill names</li>
                <li><strong>Exploratory Analysis:</strong> Used Python (Pandas, Seaborn, Matplotlib) for data insights</li>
                <li><strong>Trend Analysis:</strong> Grouped job postings by time to see skill demand shifts</li>
                <li><strong>Salary Insights:</strong> Compared salary distributions for different roles & locations</li>
                <li><strong>Visualization Techniques:</strong> Used bar charts, scatter plots, line graphs to display results</li>
              </ul>
            </section>

            <section id="key-insights" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <LightBulb className="h-5 w-5 text-primary" /> Key Insights
              </h2>
              
              <div className="space-y-8">
                {/* Key Insight 1 */}
                <div className="border rounded-lg overflow-hidden">
                  <Collapsible open={openInsights.insight1} onOpenChange={() => toggleInsight('insight1')}>
                    <CollapsibleTrigger asChild>
                      <div className="flex justify-between items-center p-4 cursor-pointer bg-muted/40 hover:bg-muted/60">
                        <h3 className="text-lg font-medium">1️⃣ What are the most demanded skills for the top 3 most popular data roles?</h3>
                        {openInsights.insight1 ? 
                          <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        }
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="p-4 space-y-4">
                        <Accordion type="single" collapsible className="mb-4">
                          <AccordionItem value="code1">
                            <AccordionTrigger>View Code</AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                                <button 
                                  onClick={() => copyToClipboard(`fig, ax = plt.subplots(len(job_titles), 1)
for i, job_title in enumerate(job_titles):
    df_plot = df_skills_perc[df_skills_perc['job_title_short'] == job_title].head(5)[::-1]
    sns.barplot(data=df_plot, x='skill_percent', y='job_skills', ax=ax[i], hue='skill_count', palette='dark:b_r')
plt.show()`)}
                                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                                  aria-label="Copy code"
                                >
                                  <Copy size={16} />
                                </button>
                                <pre className="text-sm">
                                  {`fig, ax = plt.subplots(len(job_titles), 1)
for i, job_title in enumerate(job_titles):
    df_plot = df_skills_perc[df_skills_perc['job_title_short'] == job_title].head(5)[::-1]
    sns.barplot(data=df_plot, x='skill_percent', y='job_skills', ax=ax[i], hue='skill_count', palette='dark:b_r')
plt.show()`}
                                </pre>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        
                        <div className="rounded-lg overflow-hidden border">
                          <img 
                            src="/q1.jpg" 
                            alt="Most demanded skills chart" 
                            className="w-full"
                          />
                        </div>
                        
                        <div className="text-muted-foreground">
                          <h4 className="font-medium mb-2">Key Insights:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>SQL is the most requested skill for Data Analysts & Data Scientists, appearing in over 50% of job postings</li>
                            <li>Python is the most in-demand skill for Data Engineers (68%)</li>
                            <li>AWS, Azure, and Spark are crucial for Data Engineers, while Excel & Tableau remain essential for Data Analysts</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                {/* Key Insight 2 */}
                <div className="border rounded-lg overflow-hidden">
                  <Collapsible open={openInsights.insight2} onOpenChange={() => toggleInsight('insight2')}>
                    <CollapsibleTrigger asChild>
                      <div className="flex justify-between items-center p-4 cursor-pointer bg-muted/40 hover:bg-muted/60">
                        <h3 className="text-lg font-medium">2️⃣ How are in-demand skills trending for Data Analysts?</h3>
                        {openInsights.insight2 ? 
                          <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        }
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="p-4 space-y-4">
                        <Accordion type="single" collapsible className="mb-4">
                          <AccordionItem value="code2">
                            <AccordionTrigger>View Code</AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                                <button 
                                  onClick={() => copyToClipboard(`from matplotlib.ticker import PercentFormatter

df_plot = df_DA_US_percent.iloc[:, :5]
sns.lineplot(data=df_plot, dashes=False, legend='full', palette='tab10')

plt.gca().yaxis.set_major_formatter(PercentFormatter(decimals=0))

plt.show()`)}
                                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                                  aria-label="Copy code"
                                >
                                  <Copy size={16} />
                                </button>
                                <pre className="text-sm">
                                  {`from matplotlib.ticker import PercentFormatter

df_plot = df_DA_US_percent.iloc[:, :5]
sns.lineplot(data=df_plot, dashes=False, legend='full', palette='tab10')

plt.gca().yaxis.set_major_formatter(PercentFormatter(decimals=0))

plt.show()`}
                                </pre>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        
                        <div className="rounded-lg overflow-hidden border">
                          <img 
                            src="/q2.jpg" 
                            alt="Skills trending chart" 
                            className="w-full"
                          />
                        </div>
                        
                        <div className="text-muted-foreground">
                          <h4 className="font-medium mb-2">Key Insights:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>SQL remains the most in-demand skill but is seeing a slight decline</li>
                            <li>Excel demand increased sharply from September, overtaking Python & Tableau</li>
                            <li>Power BI is gaining traction, although it is still less common than SQL/Tableau</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                {/* Key Insight 3 */}
                <div className="border rounded-lg overflow-hidden">
                  <Collapsible open={openInsights.insight3} onOpenChange={() => toggleInsight('insight3')}>
                    <CollapsibleTrigger asChild>
                      <div className="flex justify-between items-center p-4 cursor-pointer bg-muted/40 hover:bg-muted/60">
                        <h3 className="text-lg font-medium">3️⃣ How well do jobs and skills pay for Data Analysts?</h3>
                        {openInsights.insight3 ? 
                          <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        }
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="p-4 space-y-4">
                        <Accordion type="single" collapsible className="mb-4">
                          <AccordionItem value="code3">
                            <AccordionTrigger>View Code</AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                                <button 
                                  onClick={() => copyToClipboard(`sns.boxplot(data=df_US_top6, x='salary_year_avg', y='job_title_short', order=job_order)

ticks_x = plt.FuncFormatter(lambda x, pos: f'${parseInt(x/1000)}K')
plt.gca().xaxis.set_major_formatter(ticks_x)
plt.show()`)}
                                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                                  aria-label="Copy code"
                                >
                                  <Copy size={16} />
                                </button>
                                <pre className="text-sm">
                                  {`sns.boxplot(data=df_US_top6, x='salary_year_avg', y='job_title_short', order=job_order)

ticks_x = plt.FuncFormatter(lambda x, pos: f'${parseInt(x/1000)}K')
plt.gca().xaxis.set_major_formatter(ticks_x)
plt.show()`}
                                </pre>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        
                        <div className="rounded-lg overflow-hidden border">
                          <img 
                            src="/q3.jpg" 
                            alt="Salary data chart" 
                            className="w-full"
                          />
                        </div>
                        
                        <div className="text-muted-foreground">
                          <h4 className="font-medium mb-2">Key Insights:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Senior Data Scientists have the highest salary potential (up to $600K)</li>
                            <li>Data Engineers earn significantly more than Data Analysts</li>
                            <li>Salary increases with seniority and specialization</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                {/* Key Insight 4 */}
                <div className="border rounded-lg overflow-hidden">
                  <Collapsible open={openInsights.insight4} onOpenChange={() => toggleInsight('insight4')}>
                    <CollapsibleTrigger asChild>
                      <div className="flex justify-between items-center p-4 cursor-pointer bg-muted/40 hover:bg-muted/60">
                        <h3 className="text-lg font-medium">4️⃣ What are the highest-paid and most in-demand skills for Data Analysts?</h3>
                        {openInsights.insight4 ? 
                          <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        }
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="p-4 space-y-4">
                        <Accordion type="single" collapsible className="mb-4">
                          <AccordionItem value="code4">
                            <AccordionTrigger>View Code</AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                                <button 
                                  onClick={() => copyToClipboard(`fig, ax = plt.subplots(2, 1)  

# Top 10 Highest Paid Skills for Data Analysts
sns.barplot(data=df_DA_top_pay, x='median', y=df_DA_top_pay.index, hue='median', ax=ax[0], palette='dark:b_r')

# Top 10 Most In-Demand Skills for Data Analysts
sns.barplot(data=df_DA_skills, x='median', y=df_DA_skills.index, hue='median', ax=ax[1], palette='light:b')

plt.show()`)}
                                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                                  aria-label="Copy code"
                                >
                                  <Copy size={16} />
                                </button>
                                <pre className="text-sm">
                                  {`fig, ax = plt.subplots(2, 1)  

# Top 10 Highest Paid Skills for Data Analysts
sns.barplot(data=df_DA_top_pay, x='median', y=df_DA_top_pay.index, hue='median', ax=ax[0], palette='dark:b_r')

# Top 10 Most In-Demand Skills for Data Analysts
sns.barplot(data=df_DA_skills, x='median', y=df_DA_skills.index, hue='median', ax=ax[1], palette='light:b')

plt.show()`}
                                </pre>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        
                        <div className="rounded-lg overflow-hidden border">
                          <img 
                            src="/q4.jpg" 
                            alt="High-paid skills chart" 
                            className="w-full"
                          />
                        </div>
                        
                        <div className="text-muted-foreground">
                          <h4 className="font-medium mb-2">Key Insights:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>High-paying skills: dplyr, Bitbucket, Gitlab (up to $200K)</li>
                            <li>Most in-demand skills: Excel, PowerPoint, SQL</li>
                            <li>Balancing specialized & fundamental skills is key for maximizing opportunities</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                {/* Key Insight 5 */}
                <div className="border rounded-lg overflow-hidden">
                  <Collapsible open={openInsights.insight5} onOpenChange={() => toggleInsight('insight5')}>
                    <CollapsibleTrigger asChild>
                      <div className="flex justify-between items-center p-4 cursor-pointer bg-muted/40 hover:bg-muted/60">
                        <h3 className="text-lg font-medium">5️⃣ What are the most optimal skills to learn for Data Analysts?</h3>
                        {openInsights.insight5 ? 
                          <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        }
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="p-4 space-y-4">
                        <Accordion type="single" collapsible className="mb-4">
                          <AccordionItem value="code5">
                            <AccordionTrigger>View Code</AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                                <button 
                                  onClick={() => copyToClipboard(`from matplotlib.ticker import PercentFormatter

# Create a scatter plot
scatter = sns.scatterplot(
    data=df_DA_skills_tech_high_demand,
    x='skill_percent',
    y='median_salary',
    hue='technology',  # Color by technology
    palette='bright',  # Use a bright palette for distinct colors
    legend='full'  # Ensure the legend is shown
)
plt.show()`)}
                                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                                  aria-label="Copy code"
                                >
                                  <Copy size={16} />
                                </button>
                                <pre className="text-sm">
                                  {`from matplotlib.ticker import PercentFormatter

# Create a scatter plot
scatter = sns.scatterplot(
    data=df_DA_skills_tech_high_demand,
    x='skill_percent',
    y='median_salary',
    hue='technology',  # Color by technology
    palette='bright',  # Use a bright palette for distinct colors
    legend='full'  # Ensure the legend is shown
)
plt.show()`}
                                </pre>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        
                        <div className="rounded-lg overflow-hidden border">
                          <img 
                            src="/q5.jpg" 
                            alt="Optimal skills chart" 
                            className="w-full"
                          />
                        </div>
                        
                        <div className="text-muted-foreground">
                          <h4 className="font-medium mb-2">Key Insights:</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Oracle skills have the highest median salary ($97K) but are less common</li>
                            <li>Python & Tableau balance high salaries with steady demand</li>
                            <li>SQL is widely required but doesn't command the highest salaries</li>
                            <li>Cloud technologies (AWS, Azure) are becoming more lucrative</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </section>

            <section id="challenges" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" /> Challenges & Learnings
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Handling Data Variations:</strong> Managing different job titles across datasets</li>
                <li><strong>Visual Complexity:</strong> Designing effective salary & demand comparisons</li>
                <li><strong>Market Trends:</strong> Keeping up with fast-changing skill requirements</li>
              </ul>
            </section>

            <section id="project-files" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Project Files & Links
              </h2>
              <div className="flex items-start gap-2 text-muted-foreground">
                <ExternalLink className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="https://github.com/Subhrajyouti/Data-Science-Job-Market-Research-with-Python" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub Repository
                  </a>
                  <p className="text-sm text-muted-foreground">Complete project source code and documentation</p>
                </div>
              </div>
            </section>
          </div>
            
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/data_science2.jpg" 
                  alt="Data visualization" 
                  className="w-full aspect-video object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Project Highlights</h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Analyzed 10,000+ job postings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Identified top-paying skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Mapped salary trends across roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Created optimal skill learning paths</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Tools & Technologies</h3>
                  <Separator className="mb-4" />
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">Matplotlib</Badge>
                    <Badge variant="outline">Seaborn</Badge>
                    <Badge variant="outline">Excel</Badge>
                    <Badge variant="outline">Power BI</Badge>
                    <Badge variant="outline">GitHub</Badge>
                    <Badge variant="outline">Jupyter</Badge>
                  </div>
                </div>
                  
                <div>
                  <h3 className="text-lg font-medium mb-2">Project Timeline</h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Data Collection</span>
                      <span>2 weeks</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Data Cleaning & Processing</span>
                      <span>3 weeks</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Analysis & Visualization</span>
                      <span>4 weeks</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Report & Presentation</span>
                      <span>2 weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DataJobMarketProject;
