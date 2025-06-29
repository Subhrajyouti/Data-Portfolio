import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Sun, 
  Download, 
  Calculator, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  DollarSign,
  Leaf,
  FileText,
  ExternalLink,
  ArrowLeft,
  Phone,
  Mail,
  Github,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SolarViabilityProject = () => {
  const keyMetrics = [
    { metric: "Estimated System Size", value: "~3 kWp", icon: <Settings className="h-5 w-5" /> },
    { metric: "Annual Solar Generation", value: "~4000 kWh/year", icon: <Sun className="h-5 w-5" /> },
    { metric: "Payback Period", value: "~6.5 years", icon: <TrendingUp className="h-5 w-5" /> },
    { metric: "Internal Rate of Return (IRR)", value: "~16%", icon: <BarChart3 className="h-5 w-5" /> },
    { metric: "Net Present Value (NPV)", value: "₹1.2 – ₹1.6 Lakhs", icon: <DollarSign className="h-5 w-5" /> },
    { metric: "Lifetime Savings", value: "₹3.5 – ₹4.2 Lakhs", icon: <DollarSign className="h-5 w-5" /> },
    { metric: "Lifetime CO₂ Avoided", value: "~35–40 tons", icon: <Leaf className="h-5 w-5" /> }
  ];

  const downloadFiles = [
    { name: "Excel-based Financial Model", type: "Excel", icon: <FileText className="h-5 w-5" /> },
    { name: "PVsyst Output Summary", type: "PDF", icon: <FileText className="h-5 w-5" /> },
    { name: "Panel & Inverter Datasheets", type: "ZIP", icon: <FileText className="h-5 w-5" /> },
    { name: "Complete PDF Report", type: "PDF", icon: <FileText className="h-5 w-5" /> }
  ];

  const references = [
    "MNRE PM Surya Ghar Yojana Official Guidelines",
    "NASA Surface Meteorology & Solar Energy Database",
    "Waaree, Adani & Sungrow Equipment Datasheets",
    "APDCL Tariff Structure & Regulations (2024)",
    "SEIA, IEA & KPMG Solar Analysis Methodologies"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-gray-900 to-black flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Button asChild variant="ghost" size="sm" className="mb-4 text-gray-300 hover:text-blue-400">
                <Link to="/#projects" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              <Sun className="inline h-10 w-10 text-yellow-500 mr-3" />
              Residential Solar Feasibility Study – Assam, India
            </h1>
            
            <h4 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Evaluating the economic, energy, and policy dynamics of rooftop solar under PM Surya Ghar Muft Bijli Yojana using real irradiance, demand, and tariff data.
            </h4>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="h-5 w-5 mr-2" />
                Download Full Excel Model
              </Button>
              
              <Button size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-900/20">
                <Calculator className="h-5 w-5 mr-2" />
                Try Interactive Calculator
              </Button>
            </div>
          </div>
        </div>
        
        {/* Real solar panel image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Solar panels on rooftop in India"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Executive Summary */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              🔍 Executive Summary
            </h2>
          </div>
          
          <Card className="border-gray-800 shadow-lg bg-gray-900/50">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
                <p className="mb-4">
                  India's rooftop solar sector is experiencing unprecedented growth, driven by supportive government policies and declining technology costs. The PM Surya Ghar Muft Bijli Yojana represents a pivotal initiative to democratize solar energy access across Indian households.
                </p>
                
                <p className="mb-4">
                  <strong className="text-white">Study Objective:</strong> This comprehensive analysis evaluates solar feasibility for typical residential consumers in Assam, utilizing real-world consumption patterns, local irradiance data, and current policy frameworks to provide actionable insights.
                </p>
                
                <p className="mb-4">
                  <strong className="text-white">Methodology:</strong> Our approach combines PVsyst modeling with NASA TMY meteorological data, incorporating actual utility tariffs, inflation projections, and available subsidies to deliver precise financial projections.
                </p>
                
                <p>
                  <strong className="text-white">Key Finding:</strong> Rooftop solar installations demonstrate strong economic viability with payback periods of 6-7 years, delivering substantial long-term savings while contributing to India's renewable energy transition.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Methodology Overview */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              📐 Methodology & Data Sources
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-900/50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto h-16 w-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">📈 Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• 12-month consumption analysis (Muft App)</li>
                  <li>• NASA TMY irradiance database</li>
                  <li>• Equipment specifications (Waaree, Adani, Sungrow)</li>
                  <li>• Local utility tariff structures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-900/50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto h-16 w-16 bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">⚙ PVsyst Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• GHI, DHI, DNI modeling</li>
                  <li>• System loss calculations</li>
                  <li>• Shading & mismatch analysis</li>
                  <li>• Performance ratio optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-900/50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto h-16 w-16 bg-yellow-900/50 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-yellow-400" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">💰 Financial Modeling</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Multi-tier tariff analysis</li>
                  <li>• Inflation & demand projections</li>
                  <li>• CAPEX, OPEX, & subsidy integration</li>
                  <li>• NPV, ROI, IRR calculations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Financial Metrics */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              💡 Key Insights & Outputs
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {keyMetrics.map((item, index) => (
              <Card key={index} className="border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-900/50">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto h-12 w-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.metric}</h3>
                  <p className="text-2xl font-bold text-blue-400">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Chart Placeholders */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-800 shadow-lg bg-gray-900/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <BarChart3 className="h-5 w-5" />
                  Solar vs Grid Cost Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <p>Chart Placeholder</p>
                    <p className="text-sm">Comparative cost analysis over 25 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 shadow-lg bg-gray-900/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Leaf className="h-5 w-5" />
                  CO₂ Avoidance Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Leaf className="h-12 w-12 mx-auto mb-2" />
                    <p>Chart Placeholder</p>
                    <p className="text-sm">Environmental impact visualization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Calculator */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              🧮 Try Our Solar Calculator
            </h2>
          </div>
          
          <Card className="border-gray-800 shadow-lg bg-gray-900/50">
            <CardContent className="p-8">
              <div className="h-96 bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calculator className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white mb-2">Interactive Calculator</h3>
                  <p className="text-gray-300 mb-6">Input your location and consumption to calculate your payback, savings, and subsidy.</p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Launch Calculator
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Downloads */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              📂 Download Project Files
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {downloadFiles.map((file, index) => (
              <Card key={index} className="border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-blue-900/50 rounded-lg flex items-center justify-center">
                      {file.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{file.name}</h4>
                      <Badge variant="secondary" className="mt-1 bg-gray-700 text-gray-300">{file.type}</Badge>
                    </div>
                    <Download className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Image Showcase */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              🌇 Real-World Visuals
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-800 shadow-lg overflow-hidden bg-gray-900/50">
              <div className="h-48 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 flex items-center justify-center">
                <Sun className="h-16 w-16 text-yellow-400" />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-300">PVsyst simulation snapshot showing optimal tilt and orientation analysis</p>
              </CardContent>
            </Card>

            <Card className="border-gray-800 shadow-lg overflow-hidden bg-gray-900/50">
              <div className="h-48 bg-gradient-to-br from-blue-900/30 to-green-900/30 flex items-center justify-center">
                <Settings className="h-16 w-16 text-blue-400" />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-300">Waaree 545Wp panel installation on typical Assam residence</p>
              </CardContent>
            </Card>

            <Card className="border-gray-800 shadow-lg overflow-hidden bg-gray-900/50">
              <div className="h-48 bg-gradient-to-br from-green-900/30 to-blue-900/30 flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-green-400" />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-300">Financial model dashboard showing 25-year projections and ROI analysis</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* References */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">
              📘 References & Resources
            </h2>
          </div>
          
          <Card className="border-gray-800 shadow-lg bg-gray-900/50">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {references.map((reference, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{reference}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">thesubhrajyotimahanta@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">+91 6002967278</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Subhrajyouti" className="text-gray-400 hover:text-gray-300">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/subhrajyotimahanta/" className="text-gray-400 hover:text-gray-300">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Project Credits</h3>
              <p className="text-gray-300">Designed and developed by</p>
              <p className="font-semibold text-white">Subhrajyoti Mahanta</p>
              <p className="text-sm text-gray-400 mt-2">© 2024 All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolarViabilityProject;
