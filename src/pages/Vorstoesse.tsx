import { useEffect } from 'react';
import Header from '@/components/Header';
import InitiativesSection from '@/components/InitiativesSection';

const Vorstoesse = () => {
  useEffect(() => {
    document.title = "Vorstösse – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Parlamentarische Vorstösse der SVP Stadt Zug - Motionen, Interpellationen und Postulate für eine bessere Stadt.');
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
                Vorstösse & Initiativen
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Konkrete parlamentarische Arbeit für Zug. Von Motionen über 
                Interpellationen bis zu Postulaten - wir bringen Lösungen ein.
              </p>
            </div>
          </div>
        </section>

        <InitiativesSection />
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

export default Vorstoesse;