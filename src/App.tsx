import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import CookieNotice from "./components/CookieNotice";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Themen = lazy(() => import("./pages/Themen"));
const Abstimmungen = lazy(() => import("./pages/Abstimmungen"));
const Vorstoesse = lazy(() => import("./pages/Vorstoesse"));
const WerWirSind = lazy(() => import("./pages/WerWirSind"));
const WofuerWirStehen = lazy(() => import("./pages/WofuerWirStehen"));
const WasAnsteht = lazy(() => import("./pages/WasAnsteht"));
const Stadtrat = lazy(() => import("./pages/Stadtrat"));
const Vorstand = lazy(() => import("./pages/Vorstand"));
const Geschichte = lazy(() => import("./pages/Geschichte"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Mitglied = lazy(() => import("./pages/Mitglied"));
const Spenden = lazy(() => import("./pages/Spenden"));
const TausenderClub = lazy(() => import("./pages/TausenderClub"));
const TausenderClubVeranstaltungen = lazy(() => import("./pages/TausenderClubVeranstaltungen"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const CookiePolicy = lazy(() => import("./pages/Cookie"));
const Wahlen = lazy(() => import("./pages/Wahlen"));
const AdriansRisiProfil = lazy(() => import("./pages/AdriansRisiProfil"));
const RaphaelTschanProfil = lazy(() => import("./pages/RaphaelTschanProfil"));
const RomanKuengProfil = lazy(() => import("./pages/RomanKuengProfil"));
const PhilipBrunnerProfil = lazy(() => import("./pages/PhilipBrunnerProfil"));
const AndreWickiProfil = lazy(() => import("./pages/AndreWickiProfil"));
const MarcusBuehlerProfil = lazy(() => import("./pages/MarcusBuehlerProfil"));
const NorbertSchlumpfProfil = lazy(() => import("./pages/NorbertSchlumpfProfil"));
const AlexOdermattProfil = lazy(() => import("./pages/AlexOdermattProfil"));
const ReneGretenerProfil = lazy(() => import("./pages/ReneGretenerProfil"));
const ManfredPircherProfil = lazy(() => import("./pages/ManfredPircherProfil"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/profil/andre-wicki" element={<AndreWickiProfil />} />
            <Route path="/profil/marcus-buehler" element={<MarcusBuehlerProfil />} />
            <Route path="/profil/norbert-schlumpf" element={<NorbertSchlumpfProfil />} />
            <Route path="/profil/alex-odermatt" element={<AlexOdermattProfil />} />
            <Route path="/profil/rene-gretener" element={<ReneGretenerProfil />} />
            <Route path="/profil/manfred-pircher" element={<ManfredPircherProfil />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ScrollToTop />
        <CookieNotice />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
