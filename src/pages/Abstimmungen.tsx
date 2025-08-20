import { useEffect } from 'react';
import Header from '@/components/Header';
import VotesSection from '@/components/VotesSection';
import Footer from '@/components/Footer';

const Abstimmungen = () => {
  useEffect(() => {
    document.title = "Abstimmungen – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Abstimmungsempfehlungen der SVP Stadt Zug - transparent, begründet und bürgernah.');
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
                Abstimmungen
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Transparente Empfehlungen zu aktuellen und kommenden Abstimmungen. 
                Fundiert begründet und im Interesse der Zuger Bevölkerung.
              </p>
            </div>
          </div>
        </section>

        <VotesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Abstimmungen;