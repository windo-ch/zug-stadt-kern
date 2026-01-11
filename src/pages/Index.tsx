import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import PeopleSection from '@/components/PeopleSection';
import NewsSection from '@/components/NewsSection';
import StrategySection from '@/components/StrategySection';
import MitmachenSection from '@/components/MitmachenSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "SVP Stadt Zug – Mir lieferet für eusi Stadt";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SVP Stadt Zug – Für Sicherheit, Freiheit und eine lebenswerte Stadt. Erfahre mehr über Positionen, News und Mitmachmöglichkeiten.');
    }

    // Add structured data for organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "PoliticalParty",
      "name": "SVP Stadt Zug",
      "alternateName": "Schweizerische Volkspartei Stadt Zug",
      "description": "Für Sicherheit, Freiheit und eine lebenswerte Stadt Zug",
      "url": "https://svp-stadt-zug.ch",
      "logo": "https://svp-stadt-zug.ch/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Postfach",
        "addressLocality": "Zug",
        "postalCode": "6300",
        "addressCountry": "CH"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+41-41-123-45-67",
        "contactType": "customer service",
        "email": "sekretariat@svp-zug.ch"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <NewsSection />
        <StrategySection />
        <PeopleSection />
        <MitmachenSection />
        
        {/* Animated Flag */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="flex justify-center py-8">
              <img
                src="/logo/svp-stadt-zug-flag-animated-small.gif"
                alt="SVP Stadt Zug Flagge"
                className="h-[150px] w-auto"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;