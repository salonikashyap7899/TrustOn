import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import PlotSelling from "@/pages/PlotSelling";
import ArchitectureDesign from "@/pages/ArchitectureDesign";
import ConstructionBuild from "@/pages/ConstructionBuild";
import InvestmentConsulting from "@/pages/InvestmentConsulting";
import Project from "@/pages/Project";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh] noise-bg">
      <Navbar />
      <main className="flex-1 w-full">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/services/plot-selling" component={PlotSelling} />
          <Route path="/services/architecture-design" component={ArchitectureDesign} />
          <Route path="/services/construction-build" component={ConstructionBuild} />
          <Route path="/services/investment-consulting" component={InvestmentConsulting} />
          <Route path="/project" component={Project} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
