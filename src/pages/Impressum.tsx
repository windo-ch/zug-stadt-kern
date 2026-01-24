import PageLayout from '@/components/layout/PageLayout';
import { Mail, Phone, MapPin } from 'lucide-react';

const Impressum = () => {
  return (
    <PageLayout 
      title="Impressum – SVP Stadt Zug"
      description="Impressum und rechtliche Angaben der SVP Stadt Zug."
    >
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-svp-green via-svp-green to-svp-green-light text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>
          <div className="container-max relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">Rechtliche Informationen</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Impressum
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                Transparenz und Verantwortung – alle rechtlichen Angaben und Kontaktinformationen auf einen Blick
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gradient-to-b from-background via-background to-muted/20">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Unsere <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Kontaktdaten</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Erreichen Sie uns direkt – wir sind für Sie da
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Contact Information */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Kontakt</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-muted/50 to-transparent rounded-xl">
                        <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Postadresse</div>
                          <div className="text-muted-foreground leading-relaxed">
                            SVP Stadt Zug<br />
                            Postfach<br />
                            6300 Zug
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-muted/50 to-transparent rounded-xl">
                        <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">E-Mail</div>
                          <a href="mailto:sekretariat.stadt@svp-zug.ch" className="text-primary hover:text-primary/80 font-medium transition-colors">
                            sekretariat.stadt@svp-zug.ch
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-muted/50 to-transparent rounded-xl">
                        <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Telefon</div>
                          <a href="tel:+41793291333" className="text-primary hover:text-primary/80 font-medium transition-colors">
                            079 329 13 33 (Roman Küng)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legal Information */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Rechtliche Angaben</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-4 bg-gradient-to-r from-muted/50 to-transparent rounded-xl">
                        <div className="font-semibold text-foreground mb-2">Herausgeber</div>
                        <div className="text-muted-foreground">SVP Stadt Zug</div>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-muted/50 to-transparent rounded-xl">
                        <div className="font-semibold text-foreground mb-2">Rechtsform</div>
                        <div className="text-muted-foreground">Politische Partei nach ZGB Art. 60ff</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Text */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-elegant">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">Rechtliche Hinweise</h2>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-primary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Haftungsausschluss
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Die SVP Stadt Zug übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, 
                        Aktualität, Zuverlässigkeit und Vollständigkeit der bereitgestellten Informationen. 
                        Haftungsansprüche gegen die SVP Stadt Zug wegen Schäden materieller oder 
                        immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung 
                        der veröffentlichten Informationen entstehen, sind grundsätzlich ausgeschlossen.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        Verweise und Links
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), 
                        die ausserhalb des Verantwortungsbereiches der SVP Stadt Zug liegen, würde 
                        eine Haftungsverpflichtung ausschliesslich in dem Fall in Kraft treten, 
                        in dem die SVP Stadt Zug von den Inhalten Kenntnis hat und es ihr technisch 
                        möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-accent/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Urheberrechte
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen 
                        Dateien auf der Website gehören ausschliesslich der SVP Stadt Zug oder den 
                        speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente 
                        ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                      <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Datenschutz
                      </h3>
                      <p className="text-muted-foreground">
                        Informationen zum Datenschutz finden Sie in unserer separaten{' '}
                        <a href="/datenschutz" className="text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors">
                          Datenschutzerklärung
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Impressum;