import { useEffect } from 'react';
import Header from '@/components/Header';
import PeopleSection from '@/components/PeopleSection';

const WerWirSind = () => {
  useEffect(() => {
    document.title = "Wer wir sind – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lernen Sie das Team der SVP Stadt Zug kennen - erfahrene Politikerinnen und Politiker im Einsatz für unsere Stadt.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-svp-green to-svp-green-light text-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Wer wir sind
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Erfahrene Politikerinnen und Politiker im Einsatz für Zug. 
                Mit Kompetenz, Engagement und Bürgernähe für unsere Stadt.
              </p>
            </div>
          </div>
        </section>

        <PeopleSection />
      </main>

      <footer className="gradient-footer text-white section-padding">
        <div className="container-max">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
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
            <p className="text-white/80">
              © 2025 SVP Stadt Zug. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WerWirSind;