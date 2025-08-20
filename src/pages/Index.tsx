import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection';
import ValuesSection from '@/components/ValuesSection';
import OverviewSection from '@/components/OverviewSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "SVP Stadt Zug – Mir liefered für eusi Stadt";
    
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
        "streetAddress": "Postfach 123",
        "addressLocality": "Zug",
        "postalCode": "6300",
        "addressCountry": "CH"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+41-41-123-45-67",
        "contactType": "customer service",
        "email": "info@svp-stadt-zug.ch"
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
        <NewsSection />
        <ValuesSection />
        <OverviewSection />
        <ContactSection />
      </main>
      
      <footer className="gradient-footer text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/d75181da-4d07-475b-827c-99ae71cae110.png" 
                  alt="SVP Stadt Zug Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <div className="font-bold text-lg">SVP Stadt Zug</div>
                  <div className="text-sm opacity-80">Mir liefered</div>
                </div>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Für eine sichere, freie und lebenswerte Stadt Zug. 
                Direkt, bürgernah und lösungsorientiert.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/#news" className="hover:text-white transition-colors">Was ansteht</a></li>
                <li><a href="/#values" className="hover:text-white transition-colors">Wofür wir stehen</a></li>
                <li><a href="/themen" className="hover:text-white transition-colors">Unsere Themen</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie-Richtlinie</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © 2025 SVP Stadt Zug. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;