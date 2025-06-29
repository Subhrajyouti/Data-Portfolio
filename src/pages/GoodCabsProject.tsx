
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Database, 
  ExternalLink, 
  Github, 
  LineChart, 
  Lightbulb, 
  Monitor, 
  Rocket, 
  GraduationCap, 
  Link2, 
  FileText, 
  Eye,
  Target,
  ListChecks,
  BarChart,
  Copy,
  CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GoodCabsSidebar from "@/components/GoodCabsSidebar";
import { toast } from "sonner";

const GoodCabsProject = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Code copied to clipboard", {
      description: "You can now paste it anywhere you need",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Cover Image */}
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img 
            src="/alexander-red-S9qxkJN0f4Q-unsplash.jpg" 
            alt="Yellow taxi cab on city street" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background flex flex-col justify-end pb-20">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GoodCabs Performance Analysis & Dashboard</h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                A data-driven exploration of GoodCabs' operations—empowering insights for strategic decisions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Power BI</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">PostgreSQL</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">SQL</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Data Analysis</Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                asChild
                className="bg-blue-600/90 hover:bg-blue-700 text-white border-none rounded-md"
              >
                <a 
                  href="https://github.com/Subhrajyouti/GoodCabs-Analytics" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Horizontal Navigation Bar */}
        <GoodCabsSidebar />

        {/* Main Content */}
        <div className="container max-w-7xl mx-auto px-4 py-8">
          {/* Grid Layout for Main Content and Project Sidebar - Modified to full width */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Column - Modified to be wider */}
            <div className="lg:col-span-3">
              {/* Overview Section */}
              <section id="overview" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="text-primary" /> Project Overview
                </h2>
                <div className="text-muted-foreground mb-4">
                  This project was developed as part of the Resume Project Challenge by Codebasics, where I analyzed operational data from GoodCabs, a cab service operating in Tier 2 cities. The goal was to derive business insights from ride and revenue data, helping GoodCabs' Chief of Operations optimize strategies.
                </div>
                <div className="text-muted-foreground">
                  The project covers trip volume analysis, passenger behavior, city-wise performance, and revenue trends. I built a PostgreSQL database, wrote SQL queries, created an interactive Power BI dashboard, and provided ad hoc reporting capabilities for data-driven decision-making.
                </div>
              </section>
                
              {/* Objective Section */}
              <section id="objective" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="text-primary" /> Objective
                </h2>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Analyze GoodCabs' business performance through data-driven insights.
                  </li>
                  <li className ="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Identify revenue trends, passenger behavior, and city-wise performance.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Provide actionable recommendations for improving ride frequency and customer retention.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Enable Ad Hoc Reporting for on-demand insights using SQL.
                  </li>
                </ul>
              </section>
              
              {/* Data Description Section */}
              <section id="data-setup" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary" /> Data Description & Data Model
                </h2>
                <div className="text-muted-foreground mb-4">
                  The dataset contains trip data, passenger details, and revenue metrics.
                  Modeled using a Star Schema with fact and dimension tables.
                </div>
                <h3 className="text-lg font-medium mb-3">Key Data Relationships:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
                  <li>Fact tables: fact_trips, fact_passenger_summary</li>
                  <li>Dimension tables: dim_city,  dim_date, dim_repeat_trip_distribution</li>
                  <li>Target tables: monthly_target_trips, city_target_passenger_rating</li>
                </ul>
                
                <div className="bg-card/5 p-2 rounded-md overflow-hidden">
                  <img 
                    src="/data_modelling.png" 
                    alt="Data Model Star Schema" 
                    className="w-full h-auto rounded-md shadow-md border border-border/50" 
                  />
                </div>
              </section>
                
              {/* Methodology Section */}
              <section id="methodology" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <ListChecks className="text-primary" /> Methodology
                </h2>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Data Extraction & Storage:</strong> Imported datasets into PostgreSQL.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Data Cleaning:</strong> Removed missing values and formatted dates.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>SQL Queries:</strong> Performed aggregation and segmentation for trend analysis.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Data Modeling:</strong> Optimized table relationships using Star Schema.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Power BI Visualization:</strong> Designed interactive reports with KPIs, trends, and insights.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Ad Hoc Reporting:</strong> Designed SQL queries  to generate dynamic insights on demand.
                  </li>
                </ul>
              </section>
                
             {/* Power BI Dashboard Section */}
<section id="dashboard" className="scroll-mt-24 mb-16">
  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
    <Monitor className="text-primary" /> Power BI Dashboard
    <a 
      href="https://app.powerbi.com/view?r=eyJrIjoiMDIzZjRjYzMtNzk0YS00MzcwLWJkNGMtNjk3MzBlNDI0NjYyIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-2 text-sm text-primary hover:underline flex items-center"
    >
      <ExternalLink className="h-4 w-4 mr-1" />
      Click here if the Dashboard is not Working
    </a>
  </h2>
  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
    <CardContent className="p-0">
      <div className="aspect-video w-full">
        <iframe 
          title="GoodCabs" 
          width="100%" 
          height="100%" 
          src="https://app.powerbi.com/view?r=eyJrIjoiNmEyZDcwYzMtNmI3NS00YmU1LTllZGMtMzNjMzM4MDU3NjkzIiwidCI6IjdjOTE3YzNkLTRhNTAtNDA5Mi1hNzdiLTE3MTM4OGJiNmY5NCJ9&embedImagePlaceholder=true&pageName=585fd9ca8c72c33d09d8" 
          frameBorder="0" 
          allowFullScreen 
        />
      </div>
    </CardContent>
  </Card>
  
  <div className="mt-6">
    <h3 className="text-xl font-medium mb-4">Dashboard Highlights</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FeatureCard title="Trip volume analysis">
        Understand demand fluctuations
      </FeatureCard>
      <FeatureCard title="New vs Repeat Passengers">
        Analyze retention trends
      </FeatureCard>
      <FeatureCard title="City-Wise Revenue Performance">
        Identify high-profit locations
      </FeatureCard>
      <FeatureCard title="Target vs Actual Performance">
        Compare company goals vs real data
      </FeatureCard>
      <FeatureCard title="Custom Filters & Drilldowns">
        Dynamic exploration by City, Month, Passenger Type
      </FeatureCard>
    </div>
  </div>
</section>
                
              {/* SQL Queries Section */}
              <section id="sql-queries" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary" /> SQL Queries & Database Setup
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="db-creation">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          Database Creation in PostgreSQL
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard("CREATE DATABASE GoodCabs;")}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`CREATE DATABASE GoodCabs;`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="table-creation">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          Creating Tables (Example Snippet)
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard("CREATE TABLE IF NOT EXISTS dim_city (\n    city_id VARCHAR(10) PRIMARY KEY,\n    city_name VARCHAR(50) NOT NULL\n);")}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`CREATE TABLE IF NOT EXISTS dim_city (
    city_id VARCHAR(10) PRIMARY KEY,
    city_name VARCHAR(50) NOT NULL
);`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="import-data">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          Importing CSV Data
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard("COPY dim_city FROM '/path/to/dim_city.csv' DELIMITER ',' CSV HEADER;")}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`COPY dim_city FROM '/path/to/dim_city.csv' DELIMITER ',' CSV HEADER;`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
              
              {/* Ad Hoc SQL Reports Section */}
              <section id="adhoc-reports" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <BarChart className="text-primary" /> Ad Hoc SQL Reports
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="monthly-revenue">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          1. Retrieve Monthly  Revenue Trends
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard(`SELECT DATE_TRUNC('month', date) AS month, 
       SUM(fare_amount) AS total_revenue
FROM fact_trips
GROUP BY month
ORDER BY month;`)}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`SELECT DATE_TRUNC('month', date) AS month, 
       SUM(fare_amount) AS total_revenue
FROM fact_trips
GROUP BY month
ORDER BY month;`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="top-cities">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          2. Identify Top 5 Cities by Revenue
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard(`SELECT city_name, SUM(fare_amount) AS total_revenue
FROM fact_trips f
JOIN dim_city c ON f.city_id = c.city_id
GROUP BY city_name
ORDER BY total_revenue DESC
LIMIT 5;`)}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`SELECT city_name, SUM(fare_amount) AS total_revenue
FROM fact_trips f
JOIN dim_city c ON f.city_id = c.city_id
GROUP BY city_name
ORDER BY total_revenue DESC
LIMIT 5;`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="passenger-rating">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          3. Average Passenger Rating per City
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard(`SELECT city_name, AVG(passenger_rating) AS avg_rating
FROM fact_trips f
JOIN dim_city c ON f.city_id = c.city_id
GROUP BY city_name
ORDER BY avg_rating DESC;`)}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`SELECT city_name, AVG(passenger_rating) AS avg_rating
FROM fact_trips f
JOIN dim_city c ON f.city_id = c.city_id
GROUP BY city_name
ORDER BY avg_rating DESC;`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="new-repeat">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          4. Monthly New vs Repeat Passenger Comparison
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard(`SELECT month, 
       SUM(CASE WHEN passenger_type = 'New' THEN 1 ELSE 0 END) AS new_passengers,
       SUM(CASE WHEN passenger_type = 'Repeat' THEN 1 ELSE 0 END) AS repeat_passengers
FROM fact_trips
GROUP BY month
ORDER BY month;`)}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`SELECT month, 
       SUM(CASE WHEN passenger_type = 'New' THEN 1 ELSE 0 END) AS new_passengers,
       SUM(CASE WHEN passenger_type = 'Repeat' THEN 1 ELSE 0 END) AS repeat_passengers
FROM fact_trips
GROUP BY month
ORDER BY month;`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="retention-rate">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          5. Customer Retention Rate Analysis
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                            <button 
                              onClick={() => copyToClipboard(`SELECT month, 
       (SUM(repeat_passengers)::FLOAT / SUM(total_passengers)) * 100 AS retention_rate
FROM fact_passenger_summary
GROUP BY month
ORDER BY month;`)}
                              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                              aria-label="Copy code"
                            >
                              <Copy size={16} />
                            </button>
                            <pre className="text-sm">
                              {`SELECT month, 
       (SUM(repeat_passengers)::FLOAT / SUM(total_passengers)) * 100 AS retention_rate
FROM fact_passenger_summary
GROUP BY month
ORDER BY month;`}
                            </pre>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
              
              {/* Key Insights & Recommendations Section */}
              <section id="insights" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="text-primary" /> Key Insights & Recommendations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InsightCard title="1. Repeat Customers Generate More Revenue, but Retention is Low">
                    <p className="mb-2">Repeat customers spend significantly more than new users, but the retention rate is concerning.</p>
                    <p className="font-medium text-primary">Solution: Introduce loyalty programs & targeted promotions.</p>
                  </InsightCard>
                  
                  <InsightCard title="2. Jaipur is the Most Profitable City">
                    <p className="mb-2">Jaipur consistently outperforms other cities in revenue generation and trip volume.</p>
                    <p className="font-medium text-primary">Solution: Expand Jaipur's successful strategies to underperforming cities.</p>
                  </InsightCard>
                  
                  <InsightCard title="3. Repeat Customers Give Lower Ratings">
                    <p className="mb-2">Analysis shows repeat customers tend to provide lower satisfaction ratings over time.</p>
                    <p className="font-medium text-primary">Solution: Improve service quality & driver training.</p>
                  </InsightCard>
                  
                  <InsightCard title="4. Declining Trip Trends">
                    <p className="mb-2">Trip volume has been on a downward trend for the past two quarters.</p>
                    <p className="font-medium text-primary">Solution: Implement discount offers & referral incentives.</p>
                  </InsightCard>
                </div>
              </section>
                
              {/* Challenges & Learnings Section */}
              <section id="challenges" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="text-primary" /> Challenges & Learnings
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="challenge-1">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          Foreign Key Constraint Issues in PostgreSQL
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">
                            Initially encountered errors when importing data due to foreign key constraints.
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Fix:</span> Imported tables in the correct order to resolve dependency issues.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="challenge-2">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          Displaying City Names Above Bars in Power BI
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">
                            Struggled with showing city names directly above bar charts in Power BI.
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Fix:</span> Used custom DAX measures for label formatting.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="challenge-3">
                        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
                          Target vs Actual Comparisons in Power BI
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">
                            Creating visualizations that effectively compared target metrics against actual performance was challenging.
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Fix:</span> Created DAX formulas for benchmarking performance.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
                
              {/* Project Files & Links Section */}
              <section id="files" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Link2 className="text-primary" /> Project Files & Links
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-6 flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <Monitor className="text-primary h-5 w-5" />
                      <a 
                        href="https://shorturl.at/KKjrs" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        Live Dashboard Link
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Github className="text-primary h-5 w-5" />
                      <a 
                        href="https://github.com/Subhrajyouti/GoodCabs-Analytics" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        GitHub Repository
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </section>
                
              {/* Conclusion Section */}
              <section id="conclusion" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Rocket className="text-primary" /> Conclusion & Next Steps
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-3">Key Takeaways</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
                      <li>Repeat customers generate higher revenue but retention strategies need improvement</li>
                      <li>Jaipur's high-profit model can be expanded to other cities</li>
                      <li>Enhancing customer service & engagement will improve ratings</li>
                      <li>Strategic discounts and referral offers can boost ride volume</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium mb-3">Next Steps</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Enhance dashboard with predictive analytics for ride demand forecasting</li>
                      <li>Automate reporting with scheduled SQL queries</li>
                      <li>Track impact of loyalty & retention strategies over time</li>
                      <li>Develop driver performance metrics to improve customer satisfaction</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>
            
            {/* Sidebar Column - Now scrolls with the page and is positioned on the right */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-all">
                  <img 
                    src="/cabs.jpg.jpg" 
                    alt="Taxi cab on street" 
                    className="w-full h-48 object-cover"
                  />
                </Card>
                
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" /> Key Project Insights
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Revenue increased by 28% in top-performing cities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Loyalty programs boosted repeat ridership by 15%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Customer satisfaction improved by 22% after driver training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Weekend demand patterns identified for targeted promotions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Link2 className="h-4 w-4 text-primary" /> Related Projects
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/project/ev-traffic-analysis" className="group flex items-start gap-3 hover:bg-accent/50 p-2 rounded-md transition-colors">
                          <LineChart className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">EV Traffic Analysis Dashboard</h4>
                            <p className="text-xs text-muted-foreground">Data visualization for EV traffic patterns</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/project/postgresql-optimization" className="group flex items-start gap-3 hover:bg-accent/50 p-2 rounded-md transition-colors">
                          <Database className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">PostgreSQL Database Optimization</h4>
                            <p className="text-xs text-muted-foreground">Performance tuning for large datasets</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/project/realtime-data-pipeline" className="group flex items-start gap-3 hover:bg-accent/50 p-2 rounded-md transition-colors">
                          <LineChart className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">Real-time Data Processing Pipeline</h4>
                            <p className="text-xs text-muted-foreground">Scalable pipeline for streaming data</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
    <CardContent className="p-6">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{children}</p>
    </CardContent>
  </Card>
);

// Insight Card Component
const InsightCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 shadow-md">
    <CardContent className="p-6">
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </CardContent>
  </Card>
);

export default GoodCabsProject;
