import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Themen from "./pages/Themen";
import Abstimmungen from "./pages/Abstimmungen";
import Vorstoesse from "./pages/Vorstoesse";
import WerWirSind from "./pages/WerWirSind";
import Veranstaltungen from "./pages/Veranstaltungen";
import Medienmitteilungen from "./pages/Medienmitteilungen";
import Newsletter from "./pages/Newsletter";
import Mitglied from "./pages/Mitglied";
import Spenden from "./pages/Spenden";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/themen" element={<Themen />} />
          <Route path="/abstimmungen" element={<Abstimmungen />} />
          <Route path="/vorstoesse" element={<Vorstoesse />} />
          <Route path="/wer-wir-sind" element={<WerWirSind />} />
          <Route path="/veranstaltungen" element={<Veranstaltungen />} />
          <Route path="/medienmitteilungen" element={<Medienmitteilungen />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/mitglied-werden" element={<Mitglied />} />
          <Route path="/spenden" element={<Spenden />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
