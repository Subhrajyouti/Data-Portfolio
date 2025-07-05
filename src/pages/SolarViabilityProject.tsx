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
  ChevronDown,
  Zap,
  Calculator,
  TrendingUp,
  Download,
  Mail,
  Phone,
  User,
  Activity
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

// Custom sidebar navigation for Solar Viability project
const SolarViabilitySidebar = () => {
  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
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
          <a href="#consumption-data" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Database className="h-4 w-4 text-blue-500" />
            Consumption Data
          </a>
          <a href="#energy-analysis" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-blue-500" />
            Energy Analysis
          </a>
          <a href="#financial-modeling" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Calculator className="h-4 w-4 text-blue-500" />
            Financial Modeling
          </a>
          <a href="#sensitivity-analysis" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <Activity className="h-4 w-4 text-blue-500" />
            Sensitivity Analysis
          </a>
          <a href="#final-results" onClick={handleNavClick} className="whitespace-nowrap text-sm font-bold hover:text-primary transition-colors px-2 py-2 flex items-center gap-1.5">
            <TrendingUp className="h-4 w-4 text-blue-500" />
            Final Results
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

// Placeholder Card component for images/graphs
const PlaceholderCard = ({ title, description, type = "graph" }: { title: string; description: string; type?: string }) => {
  return (
    <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg flex items-center justify-center mb-4">
          {type === "graph" ? (
            <BarChart className="h-12 w-12 text-blue-500/60" />
          ) : type === "table" ? (
            <Database className="h-12 w-12 text-blue-500/60" />
          ) : (
            <LineChart className="h-12 w-12 text-blue-500/60" />
          )}
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const SolarViabilityProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => scrollToElement(id), 300);
    }

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
    toast.success("Content copied to clipboard", {
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
            src="/solar.jpg" 
            alt="Residential Solar Feasibility & Financial Model – Assam, India" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background flex flex-col justify-end pb-0">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Residential Solar Feasibility & Financial Model – Assam, India</h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                A comprehensive energy-economic analysis using NASA TMY data, PVsyst simulations, and dynamic financial modeling based on PM Surya Ghar Yojana guidelines.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Solar Energy</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Financial Modeling</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">PVsyst Analysis</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">TMY Data</Badge>
                <Badge variant="outline" className="bg-white/20 text-white font-normal backdrop-blur-sm hover:-translate-y-0.5 transition-transform">Energy Economics</Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                asChild
                className="bg-blue-600/90 hover:bg-blue-700 text-white border-none rounded-md"
              >
                <a 
                  href="https://github.com/Subhrajyouti/KYA-SOLAR-SAHI-HAI" 
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
        <SolarViabilitySidebar />

        {/* Main Content */}
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-3">
              
              {/* Overview Section */}
              <section id="overview" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                  <Eye className="text-primary" /> Project Overview
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    As the Indian government increasingly promotes rooftop solar through substantial subsidies under the PM Surya Ghar Yojana, this comprehensive study evaluates the financial viability of installing a solar power system at a residential property in Assam. The analysis encompasses detailed technical and economic assessments considering the specific geographical location, solar panel and inverter selections, and comprehensive accounting for system losses.
                  </p>
                  <p>
                    Utilizing precise solar irradiance data from NASA's Technical Meteorological Year (TMY) profiles and advanced simulation tools like PVsyst, this project calculates the annual electricity generation potential with high accuracy. Furthermore, an extensive 30-year financial model was developed, incorporating critical variables such as inflation rates, electricity tariff escalation, rising consumption trends, equipment degradation, and replacement costs.
                  </p>
                  <p>
                    This robust analysis aims to provide clear, data-driven insights into the economic feasibility and long-term benefits of adopting rooftop solar for residential users in the northeastern region of India, ultimately empowering homeowners to make informed decisions about renewable energy adoption.
                  </p>
                </div>
              </section>

              {/* Section 1: Consumption Data Collection */}
              <section id="consumption-data" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                  <Database className="text-primary" /> Consumption Data Collection
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                  <p>
                    The foundation of this solar viability study begins with comprehensive household energy consumption data collection. Historical electricity bills spanning 12 months were meticulously analyzed to understand consumption patterns, seasonal variations, and peak load requirements specific to the residential property in Assam.
                  </p>
                  <p>
                    This data collection process involved analyzing monthly electricity consumption patterns, identifying peak demand periods during different seasons, and establishing baseline energy requirements. The analysis revealed crucial insights into consumption trends that directly influence solar system sizing and financial projections.
                  </p>
                  <p>
                    Monthly consumption data was normalized to account for seasonal variations, with particular attention to monsoon periods typical in Assam's climate. This comprehensive approach ensures that the solar system design adequately meets year-round energy demands while optimizing for economic returns.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <img 
                        src="/consumption.jpg" 
                        alt="Monthly Electricity Consumption"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium mb-2">Monthly Electricity Consumption</h3>
                      <p className="text-muted-foreground text-sm">Bar graph showing 12-month electricity consumption pattern</p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <img 
                        src="/consumption_summary.jpg" 
                        alt="Consumption Summary Table"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium mb-2">Consumption Summary Table</h3>
                      <p className="text-muted-foreground text-sm">Detailed monthly consumption values, average daily usage, and peak demand analysis for accurate system sizing.</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border border-blue-200 bg-blue-50/50 dark:bg-blue-900/20 dark:border-blue-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Key Findings from Consumption Analysis</h3>
                    <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
                        Average monthly consumption: 133 kWh
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
                        Peak consumption months: May, June, August
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
                        Load profile characteristics: 3KW
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Section 2: Energy Analysis with TMY Data and PvSyst */}
              <section id="energy-analysis" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                  <Zap className="text-primary" /> Energy Analysis with TMY Data and PvSyst
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                  <p>
                    The energy yield analysis forms the technical backbone of this solar viability study, utilizing NASA's solar irradiance data and Technical Meteorological Year (TMY) datasets specifically calibrated for Assam's geographical coordinates. This methodology ensures highly accurate solar resource assessment and energy generation projections.
                  </p>
                  <p>
                    Solar module selection was based on comprehensive evaluation of leading manufacturers, with detailed analysis of <strong>Waaree Bi-55-540</strong> modules. The selection criteria included efficiency ratings, temperature coefficients, degradation rates, and warranty terms suitable for Assam's climatic conditions.
                  </p>
                  <p>
                    PvSyst simulation software was employed to model the complete solar PV system, accounting for various loss factors including shading losses, soiling effects, temperature derating, inverter efficiency curves, DC and AC cabling losses, and system availability factors. This comprehensive modeling approach provides realistic energy generation estimates essential for accurate financial projections.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <img 
                        src="/GHI.jpg" 
                        alt="Global Horizontal Irradiance Analysis"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium mb-2">Solar Irradiance Analysis</h3>
                      <p className="text-muted-foreground text-sm">NASA TMY data visualization showing annual solar irradiance patterns and seasonal variations for Assam region.</p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <img 
                        src="/yield.jpg" 
                        alt="Annual Energy Generation"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium mb-2">Annual Energy Generation</h3>
                      <p className="text-muted-foreground text-sm">PvSyst simulation results showing monthly energy generation capacity and annual yield projections.</p>
                    </CardContent>
                  </Card>
                </div>

               
              </section>

              {/* Solar Module Specifications Section - Before Financial Modeling */}
              <section className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Zap className="text-primary" /> Solar Module & System Specifications
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="border border-green-200 bg-green-50/50 dark:bg-green-900/20 dark:border-green-800">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">Waaree Solar Module</h3>
                      <div className="space-y-3 text-green-800 dark:text-green-200">
                        <div>
                          <h4 className="font-medium">Waaree Bi-55-540</h4>
                          <p className="text-sm">540 Wp Framed Dual-Glass Mono-PERC Bifacial</p>
                          <p className="text-sm">Maximum Power (Pₘₐₓ): 540 W at STC</p>
                          <p className="text-sm">(1,000 W/m², AM 1.5, 25°C)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-orange-200 bg-orange-50/50 dark:bg-orange-900/20 dark:border-orange-800">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">Inverter Details</h3>
                      <div className="space-y-3 text-orange-800 dark:text-orange-200">
                        <div>
                          <h4 className="font-medium">ABB UNO-DM-3.0-TL-PLUS</h4>
                          <p className="text-sm">3 kW On-Grid String Inverter</p>
                          <p className="text-sm">AC Output: 3.0 kW maximum</p>
                          <p className="text-sm">230 V, 50 Hz; max AC current 14.5 A</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-blue-200 bg-blue-50/50 dark:bg-blue-900/20 dark:border-blue-800">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Load Capacity</h3>
                      <div className="space-y-3 text-blue-800 dark:text-blue-200">
                        <div>
                          <h4 className="font-medium">System Load</h4>
                          <p className="text-sm">3 kW Maximum Load Capacity</p>
                          <p className="text-sm">Residential Application</p>
                          <p className="text-sm">Grid-tied Configuration</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border border-purple-200 bg-purple-50/50 dark:bg-purple-900/20 dark:border-purple-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-purple-900 dark:text-purple-100">System Performance Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">1293 kWh/kWp/Year</div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">Energy Production</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">79%</div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">Performance Ratio</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">59%</div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">Solar Fraction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">15 m²</div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">Required Area</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section 3: Financial Modeling and Dashboard */}
              <section id="financial-modeling" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                  <Calculator className="text-primary" /> Financial Modeling and Dashboard
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                  <p>
                    The financial viability assessment employs a sophisticated 30-year financial modeling approach that comprehensively evaluates the economic performance of the solar investment. This model incorporates dynamic variables including inflation rates, electricity tariff escalation patterns, consumption growth trends, equipment replacement schedules, and detailed CAPEX and OPEX calculations.
                  </p>
                  <p>
                    Key financial metrics including Return on Investment (ROI), Internal Rate of Return (IRR), Net Present Value (NPV), and Payback Period are calculated using industry-standard methodologies. The model accounts for government subsidies under the PM Surya Ghar Yojana, tax benefits, and accelerated depreciation allowances applicable to solar installations.
                  </p>
                  <p>
                    A comprehensive sensitivity analysis evaluates the impact of variable changes on financial outcomes, providing insights into risk factors and optimization opportunities. The model considers various scenarios including conservative, optimistic, and most-likely cases to provide a robust financial assessment framework.
                  </p>
                </div>

                <div className="mb-8">
                  <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <img 
                        src="/financial_model.jpg" 
                        alt="Financial Model Overview"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium mb-2">Financial Metrics Summary</h3>
                      <p className="text-muted-foreground text-sm">Comprehensive table displaying ROI, IRR, NPV, and Payback Period calculations with scenario analysis.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mb-8">
                  <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <img 
                        src="/solar_dashboard.jpg" 
                        alt="Interactive Dashboard"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium mb-2">Interactive Dashboard</h3>
                      <p className="text-muted-foreground text-sm">Real-time visualization of financial metrics with adjustable parameters for scenario analysis.</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border border-purple-200 bg-purple-50/50 dark:bg-purple-900/20 dark:border-purple-800 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-purple-900 dark:text-purple-100">Interactive Dashboard Features</h3>
                    <div className="prose text-purple-800 dark:text-purple-200">
                      <p>
                        An interactive financial dashboard was developed to provide dynamic visualization of key performance metrics. The dashboard includes adjustable parameters such as:
                      </p>
                      <ul className="list-disc list-inside space-y-1 mt-3">
                        <li>Electricity tariff escalation rate sliders (3-12% annually)</li>
                        <li>Inflation rate adjustments (4-8% annually)</li>
                        <li>Consumption growth rate modifications (2-6% annually)</li>
                        <li>System degradation rate inputs (0.5-0.8% annually)</li>
                        <li>Real-time financial metric recalculation</li>
                        <li>Scenario comparison tools for investment decision-making</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="text-center p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">15.06%</div>
                    <div className="text-sm text-muted-foreground">Projected IRR</div>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">7.24Years</div>
                    <div className="text-sm text-muted-foreground">Payback Period</div>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">₹1.84 Lakhs</div>
                    <div className="text-sm text-muted-foreground">Net Present Value</div>
                  </Card>
                </div>
              </section>

              {/* Section: Sensitivity Analysis */}
              <section id="sensitivity-analysis" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                  <Activity className="text-primary" /> Sensitivity Analysis
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                  <p>
                    A comprehensive sensitivity analysis was conducted to evaluate how variations in key parameters affect the financial viability of the solar investment. This analysis provides crucial insights into the robustness of the investment under different economic scenarios and helps identify the most critical factors influencing project success.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Subsection 1: Impact of Subsidy on Solar Investment */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">1. Impact of Subsidy on Solar Investment</h3>
                    
                    <Card className="border border-green-200 bg-green-50/50 dark:bg-green-900/20 dark:border-green-800 mb-6">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100 flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Insight
                        </h4>
                        <p className="text-green-800 dark:text-green-200 mb-4">
                          Our analysis strongly demonstrates that higher subsidies significantly enhance the attractiveness of solar investments. When the subsidy increases from ₹0 to ₹2,10,000, the payback period dramatically shortens from over 13 years to just about 3 years. IRR improves from 8.47% to a highly attractive 34.27%, and the lifetime savings surge from ₹6,74,996 to ₹8,84,996.
                        </p>
                        
                        <div className="bg-white/60 dark:bg-black/20 rounded-lg p-4 mb-4">
                          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">What it means:</h5>
                          <p className="text-green-800 dark:text-green-200 text-sm">
                            A higher subsidy directly lowers the initial investment burden, enhancing returns and significantly speeding up your return on investment.
                          </p>
                        </div>
                        
                        <div className="bg-green-100 dark:bg-green-800/30 rounded-lg p-4">
                          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">What should we do:</h5>
                          <p className="text-green-800 dark:text-green-200 text-sm">
                            Encourage and leverage available government subsidies and schemes like PM SGY and state subsidies. Ensuring the highest possible subsidy will yield faster payback and substantial savings.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Subsection 2: Robustness Against Economic Factors */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">2. Robustness Against Economic Factors (Inflation, Tariff Rise, Consumption Increase)</h3>
                    
                    <Card className="border border-blue-200 bg-blue-50/50 dark:bg-blue-900/20 dark:border-blue-800 mb-6">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100 flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Insight
                        </h4>
                        <p className="text-blue-800 dark:text-blue-200 mb-4">
                          Our solar power investment proves highly resilient against typical economic fluctuations. The payback period remains stable around 7–8 years, even with significant variations in inflation rates (0%–11%), electricity tariff rise (0%–5.5%), and consumption growth rates (0%–5.5%). For instance, with inflation varying from 0% to 11%, payback fluctuates narrowly between 7.04 to 7.60 years, highlighting minimal sensitivity.
                        </p>
                        
                        <div className="bg-white/60 dark:bg-black/20 rounded-lg p-4 mb-4">
                          <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">What it means:</h5>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            Investing in solar panels today shields you against future electricity price hikes, inflationary impacts, and growing electricity demands. Your savings and returns remain robust even as the economy fluctuates.
                          </p>
                        </div>
                        
                        <div className="bg-blue-100 dark:bg-blue-800/30 rounded-lg p-4">
                          <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">What should we do:</h5>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            Opting for solar power now means peace of mind in the future. It ensures stable and predictable electricity costs, protecting you against rising economic pressures.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Subsection 3: Importance of Maintaining Solar Panel Performance */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">3. Importance of Maintaining Solar Panel Performance</h3>
                    
                    <Card className="border border-orange-200 bg-orange-50/50 dark:bg-orange-900/20 dark:border-orange-800 mb-6">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100 flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Insight
                        </h4>
                        <p className="text-orange-800 dark:text-orange-200 mb-4">
                          Analysis clearly shows the direct impact of solar panel output and degradation on overall economic returns. A reduction in annual solar yield from 1,330 units to 690 units increases the payback period from about 7 years to over 13 years, drastically lowering IRR from 15.05% to below 8%. Similarly, increasing annual panel degradation from 0.3% to 1.5% significantly lowers lifetime savings from ₹8,77,578 to ₹6,92,703.
                        </p>
                        
                        <div className="bg-white/60 dark:bg-black/20 rounded-lg p-4 mb-4">
                          <h5 className="font-medium text-orange-900 dark:text-orange-100 mb-2">What it means:</h5>
                          <p className="text-orange-800 dark:text-orange-200 text-sm">
                            The effectiveness and profitability of solar systems heavily rely on sustained panel performance. Degradation or damage significantly reduces financial viability.
                          </p>
                        </div>
                        
                        <div className="bg-orange-100 dark:bg-orange-800/30 rounded-lg p-4">
                          <h5 className="font-medium text-orange-900 dark:text-orange-100 mb-2">What should we do:</h5>
                          <p className="text-orange-800 dark:text-orange-200 text-sm">
                            Regular and proactive maintenance, periodic cleaning, and timely technical checks are crucial. Ensuring optimal performance prolongs the lifetime of your investment and secures maximum financial returns.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Summary Card */}
                <Card className="bg-gradient-to-r from-purple-500 to-blue-600 text-white mt-8">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6" />
                      Key Takeaways from Sensitivity Analysis
                    </h3>
                    <p className="text-lg opacity-90 mb-4">
                      Together, these insights underline solar power as a financially robust, economically resilient, and strategically beneficial choice for the long-term. Ensuring proper subsidy leverage, investing today to hedge against economic fluctuations, and maintaining panel performance are key to maximizing the benefits from your solar investment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-white/20 rounded-lg px-4 py-3 text-center">
                        <div className="font-bold">Subsidy Impact</div>
                        <div className="text-sm opacity-90">13 → 3 years payback</div>
                      </div>
                      <div className="bg-white/20 rounded-lg px-4 py-3 text-center">
                        <div className="font-bold">Economic Resilience</div>
                        <div className="text-sm opacity-90">Stable 7-8 years payback</div>
                      </div>
                      <div className="bg-white/20 rounded-lg px-4 py-3 text-center">
                        <div className="font-bold">Performance Critical</div>
                        <div className="text-sm opacity-90">Maintenance = Returns</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section 4: Final Results */}
              <section id="final-results" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                  <TrendingUp className="text-primary" /> Final Results
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                  <p>
                    The comprehensive analysis reveals highly favorable results for residential solar adoption in Assam. The projected annual energy generation of <strong>[XX,XXX kWh]</strong> significantly exceeds the household's current consumption requirements, providing substantial cost savings compared to grid electricity over the 30-year project lifecycle.
                  </p>
                  <p>
                    Financial performance indicators demonstrate strong investment viability with an Internal Rate of Return (IRR) of <strong>[XX]%</strong>, substantially exceeding typical investment benchmarks. The payback period of <strong>[XX] years</strong> is well within industry standards, while the Net Present Value (NPV) of <strong>₹[XX] lakhs</strong> confirms the long-term economic benefits of the solar investment.
                  </p>
                  <p>
                    Cumulative savings over the 30-year period, accounting for avoided electricity costs, system maintenance, and equipment replacement, amount to approximately <strong>₹[XX] lakhs</strong>. These savings, combined with environmental benefits of reduced carbon footprint, strongly support the economic and ecological case for solar adoption.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <img 
                        src="/yieldVsCons.jpg" 
                        alt="Solar Yield vs Consumption Comparison"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium mb-2">Solar vs Grid Cost Comparison</h3>
                      <p className="text-muted-foreground text-sm">30-year comparative analysis showing escalating grid electricity costs versus stable solar energy costs with declining LCOE.</p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <img 
                        src="/cumulative.jpg" 
                        alt="Cumulative Savings Analysis"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium mb-2">Cumulative Savings Analysis</h3>
                      <p className="text-muted-foreground text-sm">Progressive savings accumulation over project lifetime, including avoided costs, subsidies, and net cash flows.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">1,09,993 kWh</div>
                      <div className="text-sm text-green-600 dark:text-green-400">Annual Generation</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">₹7,97,996</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">Total Savings</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">78332 KG</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">CO₂ Avoided</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-2">7832</div>
                      <div className="text-sm text-orange-600 dark:text-orange-400">Trees Saved</div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border border-amber-200 bg-amber-50/50 dark:bg-amber-900/20 dark:border-amber-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-amber-900 dark:text-amber-100">Key Performance Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Energy Performance</h4>
                        <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                          <li>• System capacity: 3 kW</li>
                          <li>• Performance ratio: 79.07%</li>
                          <li>• Capacity utilization factor: 59%</li>
                          <li>• 25-year energy yield: 1,09,993 kWh</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Financial Performance</h4>
                        <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                          <li>• Total project cost: ₹2.77 lakhs</li>
                          <li>• Government subsidy: ₹1.23 lakhs</li>
                          <li>• Net investment: ₹1.54 lakhs</li>
                          <li>• 30-year NPV: ₹1.84 lakhs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section 5: Conclusion */}
              <section id="conclusion" className="scroll-mt-24 mb-16">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-primary" /> Conclusion
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                  <p>
                    This comprehensive solar viability study conclusively demonstrates the substantial economic and environmental advantages of transitioning to rooftop solar energy for residential properties in Assam. The analysis, grounded in rigorous technical modeling and financial assessment, provides compelling evidence for the viability of solar adoption under current policy frameworks and market conditions.
                  </p>
                  <p>
                    The convergence of favorable factors including declining solar technology costs, attractive government subsidies under PM Surya Ghar Yojana, escalating grid electricity tariffs, and Assam's adequate solar resource availability creates an optimal environment for residential solar investments. The projected financial returns significantly exceed conventional investment alternatives while contributing to environmental sustainability goals.
                  </p>
                  <p>
                    This study empowers homeowners with clear, data-driven insights to confidently adopt solar solutions, contributing to India's renewable energy transition and energy independence objectives. The methodology and framework developed can be replicated for similar assessments across the northeastern region, supporting broader adoption of distributed renewable energy systems.
                  </p>
                </div>

                <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white mt-8">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Recommendation: Proceed with Solar Installation</h3>
                    <p className="text-lg opacity-90 mb-6">
                      Based on comprehensive technical and financial analysis, installing a rooftop solar system 
                      presents an excellent investment opportunity with strong returns and environmental benefits.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="bg-white/20 rounded-lg px-4 py-2">
                        <div className="font-bold">Strong ROI</div>
                        <div className="text-sm">15.06% IRR</div>
                      </div>
                      <div className="bg-white/20 rounded-lg px-4 py-2">
                        <div className="font-bold">Payback</div>
                        <div className="text-sm">7.24 years</div>
                      </div>
                      <div className="bg-white/20 rounded-lg px-4 py-2">
                        <div className="font-bold">Long-term Value</div>
                        <div className="text-sm">₹7.97L+ savings</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* References & Sources */}
              <section className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-6">References & Sources</h2>
                <Card className="border border-border/50">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-3">Data Sources</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• NASA Surface meteorology and Solar Energy</li>
                          <li>• PVGIS Photovoltaic Geographical Information System</li>
                          <li>• MNRE Solar Policy Guidelines</li>
                          <li>• PM Surya Ghar Yojana Documentation</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium mb-3">Technical References</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Waaree Solar Module Datasheets</li>
                          <li>• Adani Solar Technical Specifications</li>
                          <li>• PVsyst Software Documentation</li>
                          <li>• IEC Solar Standards and Guidelines</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Downloadable Resources */}
              <section className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-semibold mb-6">Downloadable Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <FileText className="h-8 w-8 text-red-500" />
                        <div>
                          <h3 className="font-medium">PVSyst Report</h3>
                          <p className="text-sm text-muted-foreground">Detailed simulation analysis report</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/PvSyst_Report.pdf" download="PvSyst_Report.pdf">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Calculator className="h-8 w-8 text-green-500" />
                        <div>
                          <h3 className="font-medium">Financial Model</h3>
                          <p className="text-sm text-muted-foreground">Excel-based calculation model</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/Finacial Model.xlsx" download="Financial_Model.xlsx">
                          <Download className="h-4 w-4 mr-2" />
                          Download Excel
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
            
            {/* Sidebar Column */}
            <div className="hidden lg:block">
              <div className="sticky top-[120px]">
                <h3 className="text-lg font-medium mb-4">Study Details</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Data Sources</h4>
                      <p className="text-xs text-muted-foreground">NASA TMY, PVGIS, MNRE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <LineChart className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Analysis Tools</h4>
                      <p className="text-xs text-muted-foreground">PVsyst, Excel, Python</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Monitor className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Study Duration</h4>
                      <p className="text-xs text-muted-foreground">6 months</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Key Innovation</h4>
                      <p className="text-xs text-muted-foreground">30-year dynamic financial modeling with regional climate data integration</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Resources</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://github.com/Subhrajyouti/KYA-SOLAR-SAHI-HAI" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      GitHub Repository
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      Full Report (PDF)
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Interactive Dashboard
                    </a>
                  </div>
                </div>

                {/* Contact Information */}
                <Card className="border border-border/50">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium mb-4">Contact & Author</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <User className="h-4 w-4 text-primary" />
                        <div>
                          <div className="text-sm font-medium">Subhrajyouti</div>
                          <div className="text-xs text-muted-foreground">Energy Analyst</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Link2 className="h-4 w-4 text-primary" />
                        <a href="#" className="text-sm hover:text-primary transition-colors">LinkedIn Profile</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:contact@example.com" className="text-sm hover:text-primary transition-colors">Get in Touch</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default SolarViabilityProject;
