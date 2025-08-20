import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection';
import ValuesSection from '@/components/ValuesSection';
import OverviewSection from '@/components/OverviewSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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
      
      <Footer />
    </div>
  );
};

export default Index;