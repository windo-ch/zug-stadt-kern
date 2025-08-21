import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieNotice from "./components/CookieNotice";
import Index from "./pages/Index";
import Themen from "./pages/Themen";
import Abstimmungen from "./pages/Abstimmungen";
import Vorstoesse from "./pages/Vorstoesse";
import WerWirSind from "./pages/WerWirSind";
import WofuerWirStehen from "./pages/WofuerWirStehen";
import WasAnsteht from "./pages/WasAnsteht";
import Stadtrat from "./pages/Stadtrat";
import Vorstand from "./pages/Vorstand";
import Geschichte from "./pages/Geschichte";
import Kontakt from "./pages/Kontakt";
import Veranstaltungen from "./pages/Veranstaltungen";
import Medienmitteilungen from "./pages/Medienmitteilungen";
import Newsletter from "./pages/Newsletter";
import Mitglied from "./pages/Mitglied";
import Spenden from "./pages/Spenden";
import TausenderClub from "./pages/TausenderClub";
import TausenderClubVeranstaltungen from "./pages/TausenderClubVeranstaltungen";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import CookiePolicy from "./pages/Cookie";
import Wahlen from "./pages/Wahlen";
import AdriansRisiProfil from "./pages/AdriansRisiProfil";
import RaphaelTschanProfil from "./pages/RaphaelTschanProfil";
import RomanKuengProfil from "./pages/RomanKuengProfil";
import PhilipBrunnerProfil from "./pages/PhilipBrunnerProfil";
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
          <Route path="/wofuer-wir-stehen" element={<WofuerWirStehen />} />
          <Route path="/was-ansteht" element={<WasAnsteht />} />
          <Route path="/stadtrat" element={<Stadtrat />} />
          <Route path="/vorstand" element={<Vorstand />} />
          <Route path="/geschichte" element={<Geschichte />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/veranstaltungen" element={<Veranstaltungen />} />
          <Route path="/medienmitteilungen" element={<Medienmitteilungen />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/mitglied-werden" element={<Mitglied />} />
          <Route path="/spenden" element={<Spenden />} />
          <Route path="/1000er-club" element={<TausenderClub />} />
          <Route path="/1000er-club-veranstaltungen" element={<TausenderClubVeranstaltungen />} />
          <Route path="/wahlen" element={<Wahlen />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/profil/adrian-risi" element={<AdriansRisiProfil />} />
          <Route path="/profil/raphael-tschan" element={<RaphaelTschanProfil />} />
          <Route path="/profil/roman-kueng" element={<RomanKuengProfil />} />
          <Route path="/profil/philip-brunner" element={<PhilipBrunnerProfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
        <CookieNotice />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
