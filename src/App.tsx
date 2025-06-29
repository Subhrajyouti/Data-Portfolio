
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import GoodCabsProject from "./pages/GoodCabsProject";
import DataJobMarketProject from "./pages/DataJobMarketProject";
import MondayCoffeeProject from "./pages/MondayCoffeeProject";
import ResidentialSolarAnalysis from "./pages/residental-solar-analysis";
import SolarViabilityProject from "./pages/SolarViabilityProject";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./styles/global.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:slug" element={<ProjectPage />} />
            <Route path="/goodcabs-analysis" element={<GoodCabsProject />} />
            <Route path="/data-job-market-analysis" element={<DataJobMarketProject />} />
            <Route path="/monday-coffee-project" element={<MondayCoffeeProject />} />
            <Route path="/residential-solar-analysis" element={<ResidentialSolarAnalysis />} />
            <Route path="/solar-viability-assam" element={<SolarViabilityProject />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
