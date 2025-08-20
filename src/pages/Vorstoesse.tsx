import { useEffect } from 'react';
import Header from '@/components/Header';
import InitiativesSection from '@/components/InitiativesSection';
import Footer from '@/components/Footer';

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

      <Footer />
    </div>
  );
};

export default Vorstoesse;