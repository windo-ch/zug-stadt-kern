import { useEffect } from 'react';
import Header from '@/components/Header';
import PeopleSection from '@/components/PeopleSection';
import Footer from '@/components/Footer';

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

      <Footer />
    </div>
  );
};

export default WerWirSind;