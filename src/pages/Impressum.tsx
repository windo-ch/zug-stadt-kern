import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Impressum und rechtliche Angaben der SVP Stadt Zug.');
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
                Impressum
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Rechtliche Angaben und Kontaktinformationen
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* Contact Information */}
                <div className="card-initiative">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Kontakt</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Adresse</div>
                        <div className="text-muted-foreground">
                          SVP Stadt Zug<br />
                          Postfach 1234<br />
                          6300 Zug
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">E-Mail</div>
                        <a href="mailto:info@svp-stadt-zug.ch" className="text-primary hover:underline">
                          info@svp-stadt-zug.ch
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Telefon</div>
                        <a href="tel:+41411234567" className="text-primary hover:underline">
                          +41 41 123 45 67
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legal Information */}
                <div className="card-initiative">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Rechtliche Angaben</h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <div className="font-semibold text-foreground mb-1">Herausgeber</div>
                      <div>SVP Stadt Zug</div>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-foreground mb-1">Vertretungsberechtigter</div>
                      <div>Präsident Dr. Markus Weber</div>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-foreground mb-1">Rechtsform</div>
                      <div>Politische Partei nach ZGB Art. 60ff</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Text */}
              <div className="card-initiative">
                <h2 className="text-2xl font-bold text-foreground mb-6">Rechtliche Hinweise</h2>
                
                <div className="prose prose-gray max-w-none text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">Haftungsausschluss</h3>
                  <p className="mb-4">
                    Die SVP Stadt Zug übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, 
                    Aktualität, Zuverlässigkeit und Vollständigkeit der bereitgestellten Informationen. 
                    Haftungsansprüche gegen die SVP Stadt Zug wegen Schäden materieller oder 
                    immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung 
                    der veröffentlichten Informationen entstehen, sind grundsätzlich ausgeschlossen.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Verweise und Links</h3>
                  <p className="mb-4">
                    Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), 
                    die ausserhalb des Verantwortungsbereiches der SVP Stadt Zug liegen, würde 
                    eine Haftungsverpflichtung ausschliesslich in dem Fall in Kraft treten, 
                    in dem die SVP Stadt Zug von den Inhalten Kenntnis hat und es ihr technisch 
                    möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Urheberrechte</h3>
                  <p className="mb-4">
                    Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen 
                    Dateien auf der Website gehören ausschliesslich der SVP Stadt Zug oder den 
                    speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente 
                    ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Datenschutz</h3>
                  <p>
                    Informationen zum Datenschutz finden Sie in unserer separaten 
                    <a href="/datenschutz" className="text-primary hover:underline ml-1">
                      Datenschutzerklärung
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;