
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
  CheckCircle2,
  Coffee,
  ChevronDown
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

// Custom sidebar navigation for Monday Coffee project
const MondayCoffeeSidebar = () => {
  // Add click handler for smooth scrolling
  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100; // Adjust offset as needed
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        // Update URL hash without triggering a scroll
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <div className="sticky top-[60px] z-10 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto py-2 gap-4 no-scrollbar">
          <a href="#overview" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Eye className="h-4 w-4 text-blue-500" />
            Overview
          </a>
          <a href="#objective" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Target className="h-4 w-4 text-blue-500" />
            Objective
          </a>
          <a href="#data-setup" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Database className="h-4 w-4 text-blue-500" />
            Data Description
          </a>
          <a href="#methodology" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <ListChecks className="h-4 w-4 text-blue-500" />
            Methodology
          </a>
          <a href="#top-cities" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Rocket className="h-4 w-4 text-blue-500" />
            Top Cities
          </a>
          <a href="#ad-hoc-requests" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Database className="h-4 w-4 text-blue-500" />
            Ad Hoc Requests
          </a>
          <a href="#conclusion" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-blue-500" />
            Conclusion
          </a>
        </div>
      </div>
    </div>
  );
};

// Top City Card component
const TopCityCard = ({ position, city, description }: { position: string; city: string; description: string }) => {
  return (
    <Card className="overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{position}</div>
        <h3 className="text-lg font-medium mb-2">{city}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const NewProject = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle hash links when page loads
  useEffect(() => {
    // Function to handle scrolling to element by ID
    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100; // Consistent offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    // Handle initial hash if present
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      // Small delay to ensure DOM is fully loaded
      setTimeout(() => scrollToElement(id), 300);
    }

    // Add event listener for hash changes
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        scrollToElement(id);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
            src="/coffee1.jpg" 
            alt="Monday Coffee Business Analysis" 
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Monday Coffee Business Expansion Analysis</h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                Analyzing city performance to determine the best locations for business expansion using data-driven insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">SQL</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Data Analysis</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Weighted Scoring</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Decision Making</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Visualization</Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                asChild
                className="bg-blue-600/90 hover:bg-blue-700 text-white border-none rounded-md"
              >
                <a 
                  href="https://github.com/Subhrajyouti/Monday_cofee_sales_store_expansion/tree/main" 
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

        {/* Horizontal Navigation Bar - Updated with custom sidebar */}
        <MondayCoffeeSidebar />

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
                  This project evaluates multiple cities based on business performance metrics to determine the most suitable locations for expansion. By analyzing sales, customer base, spending habits, and rent costs, a weighted scoring system was applied to rank the cities.
                </div>
                <div className="text-muted-foreground">
                  The analysis helps identify cities with the highest growth potential, providing data-driven insights for the expansion of the Monday Coffee business.
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
                    Identify the top 3 cities for business expansion.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Apply a data-driven approach to rank cities using key business metrics.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Use a weighted scoring methodology to balance revenue potential and cost factors.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    Ad Hoc Requests – Answering key business questions through SQL queries and visualizations to support expansion decisions.
                  </li>
                </ul>
              </section>
              
              {/* Data Description Section */}
              <section id="data-setup" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary" /> Data Description
                </h2>
                <div className="text-muted-foreground mb-4">
                  The dataset consists of four main tables, each providing essential business insights:
                </div>

                <div className="space-y-4 mb-6">
                  <Card className="border border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <Coffee className="h-4 w-4 text-primary" /> Products Table
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                        <li><strong>product_id</strong> – Unique identifier for each product.</li>
                        <li><strong>product_name</strong> – Name of the product.</li>
                        <li><strong>price</strong> – Selling price of the product.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <BarChart className="h-4 w-4 text-primary" /> Sales Table
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                        <li><strong>sale_id</strong> – Unique identifier for each sale.</li>
                        <li><strong>sale_date</strong> – Date when the sale occurred.</li>
                        <li><strong>customer_id</strong> – ID of the customer making the purchase.</li>
                        <li><strong>product_id</strong> – ID of the purchased product.</li>
                        <li><strong>rating</strong> – Customer rating for the product.</li>
                        <li><strong>total</strong> – Total revenue from the sale.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <Eye className="h-4 w-4 text-primary" /> Customers Table
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                        <li><strong>customer_id</strong> – Unique identifier for each customer.</li>
                        <li><strong>customer_name</strong> – Name of the customer.</li>
                        <li><strong>city_id</strong> – ID of the city where the customer resides.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-primary" /> City Table
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                        <li><strong>city_id</strong> – Unique identifier for each city.</li>
                        <li><strong>city_name</strong> – Name of the city.</li>
                        <li><strong>city_rank</strong> – Rank of the city based on business potential.</li>
                        <li><strong>estimated_rent</strong> – Average rent cost per customer.</li>
                        <li><strong>population</strong> – Total number of residents in the city.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-card/5 p-2 rounded-md overflow-hidden">
                  <img 
                    src="/erd.png" 
                    alt="Data Model Schema" 
                    className="w-full h-auto rounded-md shadow-md border border-border/50" 
                  />
                </div>
              </section>
                
              {/* Methodology Section */}
              <section id="methodology" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <ListChecks className="text-primary" /> Methodology for Selecting Top 3 Cities
                </h2>
                <div className="text-muted-foreground mb-4">
                  A weighted scoring system was applied to rank the cities based on critical business factors.
                </div>

                <h3 className="text-lg font-medium mb-3">Key Metrics Used:</h3>
                <ul className="list-none space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Total Sales (50%)</strong> – Higher revenue is prioritized.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Estimated Consumers (30%)</strong> – A larger customer base is advantageous.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Average Sale per Customer (40%)</strong> – Higher spending per customer is beneficial.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex justify-center items-center h-5 w-5 text-[10px] rounded-full bg-primary text-white font-bold mr-2 mt-0.5">✓</span>
                    <strong>Average Rent per Customer (-20%)</strong> – Higher rent negatively impacts the score.
                  </li>
                </ul>
                
                <Card className="border border-border/50 hover:border-primary/30 transition-all mb-6">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Formula Used:</h3>
                    <p className="text-sm text-muted-foreground mb-2">Each city's weighted score was calculated as:</p>
                    <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                      <button 
                        onClick={() => copyToClipboard("Final Score = (Total Sales * 0.5) + (Estimated Consumers * 0.3) + (Avg Sale per Customer * 0.4) - (Avg Rent per Customer * 0.2)")}
                        className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                        aria-label="Copy code"
                      >
                        <Copy size={16} />
                      </button>
                      <pre className="text-sm">
                        Final Score = (Total Sales * 0.5) + (Estimated Consumers * 0.3) + (Avg Sale per Customer * 0.4) - (Avg Rent per Customer * 0.2)
                      </pre>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      This formula balances revenue generation potential with cost efficiency, ensuring the best cities for expansion are chosen.
                    </p>
                  </CardContent>
                </Card>
              </section>
                
              {/* Top 3 Cities Section */}
              <section id="top-cities" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Rocket className="text-primary" /> Top 3 Cities for Expansion
                </h2>
                <div className="text-muted-foreground mb-6">
                  After applying the weighted scoring system, the top 3 cities for business expansion are:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <TopCityCard 
                    position="🥇" 
                    city="Pune" 
                    description="Strong revenue, high customer spending, and reasonable rent costs."
                  />
                  <TopCityCard 
                    position="🥈" 
                    city="Chennai" 
                    description="Large customer base with solid sales performance."
                  />
                  <TopCityCard 
                    position="🥉" 
                    city="Delhi" 
                    description="High market potential despite moderate spending per customer."
                  />
                </div>

                <h3 className="text-lg font-medium mb-4">City Metrics Table</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-accent/50">
                        <th className="border border-border p-2 text-left">City Name</th>
                        <th className="border border-border p-2 text-left">Total Sales</th>
                        <th className="border border-border p-2 text-left">Estimated Consumers</th>
                        <th className="border border-border p-2 text-left">Avg Sale per Customer</th>
                        <th className="border border-border p-2 text-left">Avg Rent per Customer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-accent/20">
                        <td className="border border-border p-2">Pune</td>
                        <td className="border border-border p-2">1,258,290</td>
                        <td className="border border-border p-2">1,875,000</td>
                        <td className="border border-border p-2">24,198</td>
                        <td className="border border-border p-2">294</td>
                      </tr>
                      <tr className="hover:bg-accent/20">
                        <td className="border border-border p-2">Chennai</td>
                        <td className="border border-border p-2">944,120</td>
                        <td className="border border-border p-2">2,775,000</td>
                        <td className="border border-border p-2">22,479</td>
                        <td className="border border-border p-2">407</td>
                      </tr>
                      <tr className="hover:bg-accent/20">
                        <td className="border border-border p-2">Bangalore</td>
                        <td className="border border-border p-2">860,110</td>
                        <td className="border border-border p-2">3,075,000</td>
                        <td className="border border-border p-2">22,054</td>
                        <td className="border border-border p-2">762</td>
                      </tr>
                      <tr className="hover:bg-accent/20">
                        <td className="border border-border p-2">Delhi</td>
                        <td className="border border-border p-2">750,420</td>
                        <td className="border border-border p-2">7,750,000</td>
                        <td className="border border-border p-2">11,036</td>
                        <td className="border border-border p-2">331</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-card/5 p-2 rounded-md overflow-hidden">
                  <img 
                    src="/cityscore.png" 
                    alt="Final Visualization" 
                    className="w-full h-auto rounded-md shadow-md border border-border/50" 
                  />
                </div>
              </section>
                
              {/* Ad Hoc Requests Section - Updated with collapsible questions */}
<section id="ad-hoc-requests" className="scroll-mt-24 mb-16">
  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
    <Database className="text-primary" /> Ad Hoc Requests
  </h2>
  
  <div className="space-y-4">
    {/* Using Collapsible component from UI library for each question */}
    <Collapsible className="border border-border/50 rounded-md">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
        <h3 className="text-lg font-medium">🔎 Q1: Coffee Consumers Count</h3>
        <div className="text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
        <p className="text-muted-foreground mb-4">How many people in each city are estimated to consume coffee, given that 25% of the population does?</p>
        
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="question-1-sql">
            <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
              SQL Query
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                <button 
                  onClick={() => copyToClipboard(`SELECT 
    city_name,
    ROUND((population * 0.25)/1000000, 2) AS coffee_consumers_in_millions,
    city_rank
FROM city
ORDER BY 2 DESC;`)}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                  aria-label="Copy code"
                >
                  <Copy size={16} />
                </button>
                <pre className="text-sm">
{`SELECT 
    city_name,
    ROUND((population * 0.25)/1000000, 2) AS coffee_consumers_in_millions,
    city_rank
FROM city
ORDER BY 2 DESC;`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-4">
          <h4 className="text-base font-medium mb-2">Result:</h4>
          <img 
            src="/cq1.png" 
            alt="Coffee Consumers Count Query Result" 
            className="w-full rounded-md border border-border/50" 
          />
        </div>
        
         
      </CollapsibleContent>
    </Collapsible>
    
    <Collapsible className="border border-border/50 rounded-md">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
        <h3 className="text-lg font-medium">🔎 Q2: Total Revenue from Coffee Sales</h3>
        <div className="text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
        <p className="text-muted-foreground mb-4">What is the total revenue generated from coffee sales across all cities in the last quarter of 2023?</p>
        
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="question-2-sql">
            <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
              SQL Query
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                <button 
                  onClick={() => copyToClipboard(`SELECT 
    SUM(total) AS total_revenue
FROM sales
WHERE 
    EXTRACT(YEAR FROM sale_date) = 2023
    AND EXTRACT(QUARTER FROM sale_date) = 4;

SELECT 
    ci.city_name,
    SUM(s.total) AS total_revenue
FROM sales AS s
JOIN customers AS c ON s.customer_id = c.customer_id
JOIN city AS ci ON ci.city_id = c.city_id
WHERE 
    EXTRACT(YEAR FROM s.sale_date) = 2023
    AND EXTRACT(QUARTER FROM s.sale_date) = 4
GROUP BY 1
ORDER BY 2 DESC;`)}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                  aria-label="Copy code"
                >
                  <Copy size={16} />
                </button>
                <pre className="text-sm">
{`SELECT 
    SUM(total) AS total_revenue
FROM sales
WHERE 
    EXTRACT(YEAR FROM sale_date) = 2023
    AND EXTRACT(QUARTER FROM sale_date) = 4;

SELECT 
    ci.city_name,
    SUM(s.total) AS total_revenue
FROM sales AS s
JOIN customers AS c ON s.customer_id = c.customer_id
JOIN city AS ci ON ci.city_id = c.city_id
WHERE 
    EXTRACT(YEAR FROM s.sale_date) = 2023
    AND EXTRACT(QUARTER FROM s.sale_date) = 4
GROUP BY 1
ORDER BY 2 DESC;`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-4">
          <h4 className="text-base font-medium mb-2">Result:</h4>
          <img 
            src="/cq2.png" 
            alt="Total Revenue Query Result" 
            className="w-full rounded-md border border-border/50" 
          />
        </div>
        
         
      </CollapsibleContent>
    </Collapsible>
    
    <Collapsible className="border border-border/50 rounded-md">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
        <h3 className="text-lg font-medium">🔎 Q3: Sales Count for Each Product</h3>
        <div className="text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
        <p className="text-muted-foreground mb-4">How many units of each coffee product have been sold?</p>
        
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="question-3-sql">
            <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
              SQL Query
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                <button 
                  onClick={() => copyToClipboard(`SELECT 
    p.product_name,
    COUNT(s.sale_id) AS total_orders
FROM products AS p
LEFT JOIN sales AS s ON s.product_id = p.product_id
GROUP BY 1
ORDER BY 2 DESC;`)}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                  aria-label="Copy code"
                >
                  <Copy size={16} />
                </button>
                <pre className="text-sm">
{`SELECT 
    p.product_name,
    COUNT(s.sale_id) AS total_orders
FROM products AS p
LEFT JOIN sales AS s ON s.product_id = p.product_id
GROUP BY 1
ORDER BY 2 DESC;`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-4">
          <h4 className="text-base font-medium mb-2">Result:</h4>
          <img 
            src="/cq3.png" 
            alt="Sales Count Query Result" 
            className="w-full rounded-md border border-border/50" 
          />
        </div>
        
         
      </CollapsibleContent>
    </Collapsible>
    
    <Collapsible className="border border-border/50 rounded-md">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
        <h3 className="text-lg font-medium">🔎 Q4: Average Sales Amount per City</h3>
        <div className="text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
        <p className="text-muted-foreground mb-4">What is the average sales amount per customer in each city?</p>
        
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="question-4-sql">
            <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
              SQL Query
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                <button 
                  onClick={() => copyToClipboard(`SELECT 
    ci.city_name,
    SUM(s.total) AS total_revenue,
    COUNT(DISTINCT s.customer_id) AS total_cx,
    ROUND(SUM(s.total)::NUMERIC / COUNT(DISTINCT s.customer_id)::NUMERIC, 2) AS avg_sale_pr_cx
FROM sales AS s
JOIN customers AS c ON s.customer_id = c.customer_id
JOIN city AS ci ON ci.city_id = c.city_id
GROUP BY 1
ORDER BY 2 DESC;`)}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                  aria-label="Copy code"
                >
                  <Copy size={16} />
                </button>
                <pre className="text-sm">
{`SELECT 
    ci.city_name,
    SUM(s.total) AS total_revenue,
    COUNT(DISTINCT s.customer_id) AS total_cx,
    ROUND(SUM(s.total)::NUMERIC / COUNT(DISTINCT s.customer_id)::NUMERIC, 2) AS avg_sale_pr_cx
FROM sales AS s
JOIN customers AS c ON s.customer_id = c.customer_id
JOIN city AS ci ON ci.city_id = c.city_id
GROUP BY 1
ORDER BY 2 DESC;`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-4">
          <h4 className="text-base font-medium mb-2">Result:</h4>
          <img 
            src="/cq4.png" 
            alt="Average Sales Amount Query Result" 
            className="w-full rounded-md border border-border/50" 
          />
        </div>
        
         
      </CollapsibleContent>
    </Collapsible>
    <Collapsible className="border border-border/50 rounded-md">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
        <h3 className="text-lg font-medium">🔎 Q5: City Population and Coffee Consumers</h3>
        <div className="text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
        <p className="text-muted-foreground mb-4">Provide a list of cities along with their populations and estimated coffee consumers.</p>
        
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="question-5-sql">
            <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
              SQL Query
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                <button 
                  onClick={() => copyToClipboard(`WITH city_table AS 
(
	SELECT 
		city_name,
		ROUND((population * 0.25)/1000000, 2) AS coffee_consumers
	FROM city
),
customers_table AS
(
	SELECT 
		ci.city_name,
		COUNT(DISTINCT c.customer_id) AS unique_cx
	FROM sales AS s
	JOIN customers AS c ON c.customer_id = s.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1
)
SELECT 
	customers_table.city_name,
	city_table.coffee_consumers AS coffee_consumer_in_millions,
	customers_table.unique_cx
FROM city_table
JOIN customers_table
ON city_table.city_name = customers_table.city_name;`)}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                  aria-label="Copy code"
                >
                  <Copy size={16} />
                </button>
                <pre className="text-sm">
{`WITH city_table AS 
(
	SELECT 
		city_name,
		ROUND((population * 0.25)/1000000, 2) AS coffee_consumers
	FROM city
),
customers_table AS
(
	SELECT 
		ci.city_name,
		COUNT(DISTINCT c.customer_id) AS unique_cx
	FROM sales AS s
	JOIN customers AS c ON c.customer_id = s.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1
)
SELECT 
	customers_table.city_name,
	city_table.coffee_consumers AS coffee_consumer_in_millions,
	customers_table.unique_cx
FROM city_table
JOIN customers_table
ON city_table.city_name = customers_table.city_name;`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-4">
          <h4 className="text-base font-medium mb-2">Result:</h4>
          <img 
            src="/cq5.png" 
            alt="City Population and Coffee Consumers Query Result" 
            className="w-full rounded-md border border-border/50" 
          />
        </div>
        
         
      </CollapsibleContent>
    </Collapsible>

    {/* Question 6 (new) */}
    <Collapsible className="border border-border/50 rounded-md">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
        <h3 className="text-lg font-medium">🔎 Q6: Top Selling Products by City</h3>
        <div className="text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
        <p className="text-muted-foreground mb-4">What are the top 3 selling products in each city based on sales volume?</p>
        
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="question-6-sql">
            <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
              SQL Query
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                <button 
                  onClick={() => copyToClipboard(`SELECT * 
FROM 
(
	SELECT 
		ci.city_name,
		p.product_name,
		COUNT(s.sale_id) AS total_orders,
		DENSE_RANK() OVER(PARTITION BY ci.city_name ORDER BY COUNT(s.sale_id) DESC) AS rank
	FROM sales AS s
	JOIN products AS p ON s.product_id = p.product_id
	JOIN customers AS c ON c.customer_id = s.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1, 2
) AS t1
WHERE rank <= 3;`)}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                  aria-label="Copy code"
                >
                  <Copy size={16} />
                </button>
                <pre className="text-sm">
{`SELECT * 
FROM 
(
	SELECT 
		ci.city_name,
		p.product_name,
		COUNT(s.sale_id) AS total_orders,
		DENSE_RANK() OVER(PARTITION BY ci.city_name ORDER BY COUNT(s.sale_id) DESC) AS rank
	FROM sales AS s
	JOIN products AS p ON s.product_id = p.product_id
	JOIN customers AS c ON c.customer_id = s.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1, 2
) AS t1
WHERE rank <= 3;`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-4">
          <h4 className="text-base font-medium mb-2">Result:</h4>
          <img 
            src="/cq6.png" 
            alt="Top Selling Products by City Query Result" 
            className="w-full rounded-md border border-border/50" 
          />
        </div>
        
         
      </CollapsibleContent>
    </Collapsible>

    {/* Question 7 (new) */}
    <Collapsible className="border border-border/50 rounded-md">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
        <h3 className="text-lg font-medium">🔎 Q7: Customer Segmentation by City</h3>
        <div className="text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
        <p className="text-muted-foreground mb-4">How many unique customers are there in each city who have purchased coffee products?</p>
        
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="question-7-sql">
            <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
              SQL Query
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                <button 
                  onClick={() => copyToClipboard(`SELECT 
	ci.city_name,
	COUNT(DISTINCT c.customer_id) AS unique_cx
FROM city AS ci
LEFT JOIN customers AS c ON c.city_id = ci.city_id
JOIN sales AS s ON s.customer_id = c.customer_id
WHERE s.product_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
GROUP BY 1;`)}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                  aria-label="Copy code"
                >
                  <Copy size={16} />
                </button>
                <pre className="text-sm">
{`SELECT 
	ci.city_name,
	COUNT(DISTINCT c.customer_id) AS unique_cx
FROM city AS ci
LEFT JOIN customers AS c ON c.city_id = ci.city_id
JOIN sales AS s ON s.customer_id = c.customer_id
WHERE s.product_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
GROUP BY 1;`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-4">
          <h4 className="text-base font-medium mb-2">Result:</h4>
          <img 
            src="/cq7.png" 
            alt="Customer Segmentation by City Query Result" 
            className="w-full rounded-md border border-border/50" 
          />
        </div>
        
        
      </CollapsibleContent>
    </Collapsible>

    {/* Question 8 (new) */}
    <Collapsible className="border border-border/50 rounded-md">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
        <h3 className="text-lg font-medium">🔎 Q8: Average Sale vs Rent</h3>
        <div className="text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
        <p className="text-muted-foreground mb-4">Find each city and their average sale per customer and average rent per customer.</p>
        
        <Accordion type="single" collapsible className="w-full mb-4">
          <AccordionItem value="question-8-sql">
            <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
              SQL Query
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
                <button 
                  onClick={() => copyToClipboard(`WITH city_table AS
(
	SELECT 
		ci.city_name,
		SUM(s.total) AS total_revenue,
		COUNT(DISTINCT s.customer_id) AS total_cx,
		ROUND(SUM(s.total)::NUMERIC / COUNT(DISTINCT s.customer_id)::NUMERIC, 2) AS avg_sale_pr_cx
	FROM sales AS s
	JOIN customers AS c ON s.customer_id = c.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1
),
city_rent AS
(
	SELECT 
		city_name, 
		estimated_rent
	FROM city
)
SELECT 
	cr.city_name,
	cr.estimated_rent,
	ct.total_cx,
	ct.avg_sale_pr_cx,
	ROUND(cr.estimated_rent::NUMERIC / ct.total_cx::NUMERIC, 2) AS avg_rent_per_cx
FROM city_rent AS cr
JOIN city_table AS ct ON cr.city_name = ct.city_name
ORDER BY 4 DESC;`)}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
                  aria-label="Copy code"
                >
                  <Copy size={16} />
                </button>
                <pre className="text-sm">
{`WITH city_table AS
(
	SELECT 
		ci.city_name,
		SUM(s.total) AS total_revenue,
		COUNT(DISTINCT s.customer_id) AS total_cx,
		ROUND(SUM(s.total)::NUMERIC / COUNT(DISTINCT s.customer_id)::NUMERIC, 2) AS avg_sale_pr_cx
	FROM sales AS s
	JOIN customers AS c ON s.customer_id = c.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1
),
city_rent AS
(
	SELECT 
		city_name, 
		estimated_rent
	FROM city
)
SELECT 
	cr.city_name,
	cr.estimated_rent,
	ct.total_cx,
	ct.avg_sale_pr_cx,
	ROUND(cr.estimated_rent::NUMERIC / ct.total_cx::NUMERIC, 2) AS avg_rent_per_cx
FROM city_rent AS cr
JOIN city_table AS ct ON cr.city_name = ct.city_name
ORDER BY 4 DESC;`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-4">
          <h4 className="text-base font-medium mb-2">Result:</h4>
          <img 
            src="/cq8.png" 
            alt="Average Sale vs Rent Query Result" 
            className="w-full rounded-md border border-border/50" 
          />
        </div>
        
         
      </CollapsibleContent>
    </Collapsible>
    <Collapsible className="border border-border/50 rounded-md">
  <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
    <h3 className="text-lg font-medium">🔎 Q9: Monthly Sales Growth</h3>
    <div className="text-muted-foreground">
      <ChevronDown className="h-5 w-5" />
    </div>
  </CollapsibleTrigger>
  <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
    <p className="text-muted-foreground mb-4">Calculate the percentage growth (or decline) in sales over different time periods (monthly) by each city.</p>
    
    <Accordion type="single" collapsible className="w-full mb-4">
      <AccordionItem value="question-9-sql">
        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
          SQL Query
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
            <button 
              onClick={() => copyToClipboard(`WITH monthly_sales AS
(
	SELECT 
		ci.city_name,
		EXTRACT(MONTH FROM sale_date) AS month,
		EXTRACT(YEAR FROM sale_date) AS year,
		SUM(s.total) AS total_sale
	FROM sales AS s
	JOIN customers AS c ON c.customer_id = s.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1, 2, 3
	ORDER BY 1, 3, 2
),
growth_ratio AS
(
	SELECT
		city_name,
		month,
		year,
		total_sale AS cr_month_sale,
		LAG(total_sale, 1) OVER(PARTITION BY city_name ORDER BY year, month) AS last_month_sale
	FROM monthly_sales
)
SELECT
	city_name,
	month,
	year,
	cr_month_sale,
	last_month_sale,
	ROUND((cr_month_sale - last_month_sale)::NUMERIC / last_month_sale::NUMERIC * 100, 2) AS growth_ratio
FROM growth_ratio
WHERE last_month_sale IS NOT NULL;`)}
              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
              aria-label="Copy code"
            >
              <Copy size={16} />
            </button>
            <pre className="text-sm">
{`WITH monthly_sales AS
(
	SELECT 
		ci.city_name,
		EXTRACT(MONTH FROM sale_date) AS month,
		EXTRACT(YEAR FROM sale_date) AS year,
		SUM(s.total) AS total_sale
	FROM sales AS s
	JOIN customers AS c ON c.customer_id = s.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1, 2, 3
	ORDER BY 1, 3, 2
),
growth_ratio AS
(
	SELECT
		city_name,
		month,
		year,
		total_sale AS cr_month_sale,
		LAG(total_sale, 1) OVER(PARTITION BY city_name ORDER BY year, month) AS last_month_sale
	FROM monthly_sales
)
SELECT
	city_name,
	month,
	year,
	cr_month_sale,
	last_month_sale,
	ROUND((cr_month_sale - last_month_sale)::NUMERIC / last_month_sale::NUMERIC * 100, 2) AS growth_ratio
FROM growth_ratio
WHERE last_month_sale IS NOT NULL;`}
            </pre>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
    <div className="mb-4">
      <h4 className="text-base font-medium mb-2">Result:</h4>
      <img 
        src="/cq9.png" 
        alt="Monthly Sales Growth Query Result" 
        className="w-full rounded-md border border-border/50" 
      />
    </div>
    
    
  </CollapsibleContent>
</Collapsible>

<Collapsible className="border border-border/50 rounded-md">
  <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left hover:bg-accent/10 transition-colors">
    <h3 className="text-lg font-medium">🔎 Q10: Market Potential Analysis</h3>
    <div className="text-muted-foreground">
      <ChevronDown className="h-5 w-5" />
    </div>
  </CollapsibleTrigger>
  <CollapsibleContent className="p-6 pt-0 border-t border-border/50">
    <p className="text-muted-foreground mb-4">Identify the top 3 cities based on highest sales.</p>
    
    <Accordion type="single" collapsible className="w-full mb-4">
      <AccordionItem value="question-10-sql">
        <AccordionTrigger className="hover:text-primary text-base font-medium py-3">
          SQL Query
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-card/20 p-4 rounded-md overflow-x-auto relative">
            <button 
              onClick={() => copyToClipboard(`WITH city_table AS 
(
	SELECT 
		ci.city_name,
		SUM(s.total) AS total_revenue,
		COUNT(DISTINCT s.customer_id) AS total_cx,
		ROUND(SUM(s.total)::NUMERIC / COUNT(DISTINCT s.customer_id)::NUMERIC, 2) AS avg_sale_pr_cx
	FROM sales AS s
	JOIN customers AS c ON s.customer_id = c.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1
),
city_rent AS
(
	SELECT 
		city_name, 
		estimated_rent,
		ROUND((population * 0.25)/1000000, 3) AS estimated_coffee_consumer_in_millions
	FROM city
)
SELECT 
	cr.city_name,
	total_revenue,
	cr.estimated_rent AS total_rent,
	ct.total_cx,
	estimated_coffee_consumer_in_millions,
	ct.avg_sale_pr_cx,
	ROUND(cr.estimated_rent::NUMERIC / ct.total_cx::NUMERIC, 2) AS avg_rent_per_cx
FROM city_rent AS cr
JOIN city_table AS ct ON cr.city_name = ct.city_name
ORDER BY 2 DESC;`)}
              className="absolute right-2 top-2 p-1 rounded hover:bg-primary/10"
              aria-label="Copy code"
            >
              <Copy size={16} />
            </button>
            <pre className="text-sm">
{`WITH city_table AS 
(
	SELECT 
		ci.city_name,
		SUM(s.total) AS total_revenue,
		COUNT(DISTINCT s.customer_id) AS total_cx,
		ROUND(SUM(s.total)::NUMERIC / COUNT(DISTINCT s.customer_id)::NUMERIC, 2) AS avg_sale_pr_cx
	FROM sales AS s
	JOIN customers AS c ON s.customer_id = c.customer_id
	JOIN city AS ci ON ci.city_id = c.city_id
	GROUP BY 1
),
city_rent AS
(
	SELECT 
		city_name, 
		estimated_rent,
		ROUND((population * 0.25)/1000000, 3) AS estimated_coffee_consumer_in_millions
	FROM city
)
SELECT 
	cr.city_name,
	total_revenue,
	cr.estimated_rent AS total_rent,
	ct.total_cx,
	estimated_coffee_consumer_in_millions,
	ct.avg_sale_pr_cx,
	ROUND(cr.estimated_rent::NUMERIC / ct.total_cx::NUMERIC, 2) AS avg_rent_per_cx
FROM city_rent AS cr
JOIN city_table AS ct ON cr.city_name = ct.city_name
ORDER BY 2 DESC;`}
            </pre>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
    <div className="mb-4">
      <h4 className="text-base font-medium mb-2">Result:</h4>
      <img 
        src="/cq10.png" 
        alt="Market Potential Analysis Query Result" 
        className="w-full rounded-md border border-border/50" 
      />
    </div>
    
    
  </CollapsibleContent>
</Collapsible>
  </div>
</section>
              {/* Conclusion Section */}
              <section id="conclusion" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-primary" /> Conclusion
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Based on the weighted scoring analysis and ad hoc requests, we can confidently recommend Pune, Chennai, and Delhi as the top three cities for Monday Coffee's business expansion.
                  </p>
                  <p>
                    Each city offers unique advantages in terms of revenue potential, customer base, and cost efficiency. The data-driven approach ensures that these recommendations are backed by solid evidence rather than intuition alone.
                  </p>
                  <p>
                    By prioritizing these cities, Monday Coffee can strategically allocate resources to maximize growth potential while minimizing risks associated with new location openings.
                  </p>
                </div>
              </section>
            </div>
            
            {/* Sidebar Column - Modified to scroll with the page (not sticky) */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Coffee image */}
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-all">
                  <img 
                    src="/coffee2.jpg" 
                    alt="Coffee shop" 
                    className="w-full h-48 object-cover"
                  />
                </Card>
                
                {/* Key Insights */}
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="p-5">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-blue-500" /> Data-Driven Insights
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">25% of city populations are coffee consumers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Loyalty programs increase repeat visits by 18%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">Highest revenue potential in urban locations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-flex mt-1 justify-center items-center h-4 w-4 text-[8px] rounded-full bg-primary text-white font-bold">✓</span>
                        <span className="text-sm">High rent areas require 35% more sales volume</span>
                      </li>
                    </ul>
                  </div>
                </Card>
                
                {/* Related Projects */}
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="p-5">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Link2 className="h-4 w-4 text-blue-500" /> Related Projects
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/goodcabs-analysis" className="group flex items-start gap-3 hover:bg-accent/50 p-2 rounded-md transition-colors">
                          <LineChart className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">GoodCabs Performance Analysis</h4>
                            <p className="text-xs text-muted-foreground">Data-driven insights for strategic decisions</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/data-job-market-analysis" className="group flex items-start gap-3 hover:bg-accent/50 p-2 rounded-md transition-colors">
                          <Database className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">Data Job Market Analysis</h4>
                            <p className="text-xs text-muted-foreground">Exploring trends in data science careers</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Card>

                {/* Project Info Card */}
                <Card className="border border-border/50 overflow-hidden mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-4">Project Details</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <Monitor className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                        <div>
                          <span className="text-muted-foreground">Tools: </span>
                          <span>SQL, PostgreSQL, Excel</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <LineChart className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                        <div>
                          <span className="text-muted-foreground">Visualization: </span>
                          <span>Tableau, Excel Charts</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <GraduationCap className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                        <div>
                          <span className="text-muted-foreground">Skills: </span>
                          <span>Data Analysis, SQL, Business Intelligence</span>
                        </div>
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

export default NewProject;
