import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Check, Users, Calendar, FileText, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    document.title = "Newsletter – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Abonnieren Sie den Newsletter der SVP Stadt Zug und bleiben Sie über politische Entwicklungen informiert.');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual newsletter subscription logic
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const newsletterSamples = [
    {
      title: "SVP Newsletter #142",
      date: "Januar 2025",
      topics: [
        "Abstimmungsempfehlungen März 2025",
        "Erfolgreiche Motion zur Digitalisierung",
        "Termine für Februar und März",
        "Bürgergespräche: Ihre Meinungen"
      ]
    },
    {
      title: "SVP Newsletter #141",
      date: "Dezember 2024",
      topics: [
        "Jahresrückblick 2024",
        "Budget 2025: Unsere Stellungnahme",
        "Neujahrsapéro 2025",
        "Mitgliederversammlung"
      ]
    },
    {
      title: "SVP Newsletter #140",
      date: "November 2024",
      topics: [
        "Verkehrspolitik in Zug",
        "Sicherheit in den Quartieren",
        "Kommende Abstimmungen",
        "Erfolge im Stadtrat"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Aktuelle Termine",
      description: "Erfahren Sie als Erste von unseren Veranstaltungen, Sprechstunden und politischen Events."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Politische Standpunkte",
      description: "Unsere Positionen zu aktuellen Themen, Abstimmungsempfehlungen und Parlamentsarbeit."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Exklusive Einblicke",
      description: "Hintergrundinfos und persönliche Einschätzungen unserer Politiker direkt aus dem Stadtrat."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-svp-green to-svp-green-light text-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <Mail className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Newsletter
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Bleiben Sie auf dem Laufenden über die politische Arbeit der SVP Stadt Zug. 
                Direkt in Ihr Postfach, regelmässig und kostenlos.
              </p>
            </div>
          </div>
        </section>

        {/* Subscription Form */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="max-w-2xl mx-auto">
              {!isSubscribed ? (
                <div className="card-initiative text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Jetzt kostenlos abonnieren
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Erhalten Sie unseren Newsletter alle 2 Wochen direkt in Ihr E-Mail-Postfach. 
                    Keine Werbung, keine Weitergabe Ihrer Daten, jederzeit kündbar.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ihre E-Mail-Adresse"
                        required
                        className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="btn-hero whitespace-nowrap"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Abonnieren
                      </button>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      Mit der Anmeldung stimmen Sie unserer{' '}
                      <a href="/datenschutz" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      zu. Sie können sich jederzeit wieder abmelden.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="card-success text-center">
                  <Check className="h-16 w-16 mx-auto mb-6 text-green-600" />
                  <h2 className="text-3xl font-bold text-green-800 mb-4">
                    Erfolgreich angemeldet!
                  </h2>
                  <p className="text-green-700 mb-6">
                    Sie erhalten in Kürze eine Bestätigungs-E-Mail. 
                    Vielen Dank für Ihr Interesse an unserer politischen Arbeit.
                  </p>
                  <button 
                    onClick={() => setIsSubscribed(false)}
                    className="btn-outline text-green-700 border-green-300 hover:bg-green-100"
                  >
                    Weitere E-Mail hinzufügen
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Das erwartet Sie
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Unser Newsletter bietet Ihnen einen direkten Draht zur SVP Stadt Zug
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-overview text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Samples */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Aktuelle Ausgaben
              </h2>
              <p className="text-lg text-muted-foreground">
                Verschaffen Sie sich einen Eindruck unserer Newsletter
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsletterSamples.map((sample, index) => (
                <div key={index} className="card-vote">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {sample.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {sample.date}
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-foreground text-sm">Inhalte:</h4>
                    <ul className="space-y-1">
                      {sample.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full btn-outline text-sm hover:bg-primary hover:text-white transition-all duration-300">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Ausgabe lesen
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Häufige Fragen
              </h2>
              
              <div className="space-y-6">
                <div className="card-vote">
                  <h3 className="font-bold text-foreground mb-3">
                    Wie oft erscheint der Newsletter?
                  </h3>
                  <p className="text-muted-foreground">
                    Unser Newsletter erscheint alle 2 Wochen, bei wichtigen politischen 
                    Ereignissen auch häufiger. Sie verpassen keine wichtigen Entwicklungen.
                  </p>
                </div>
                
                <div className="card-vote">
                  <h3 className="font-bold text-foreground mb-3">
                    Kann ich mich jederzeit wieder abmelden?
                  </h3>
                  <p className="text-muted-foreground">
                    Ja, selbstverständlich. In jeder E-Mail finden Sie einen Abmelde-Link. 
                    Die Abmeldung ist jederzeit möglich und erfolgt sofort.
                  </p>
                </div>
                
                <div className="card-vote">
                  <h3 className="font-bold text-foreground mb-3">
                    Werden meine Daten weitergegeben?
                  </h3>
                  <p className="text-muted-foreground">
                    Nein, niemals. Ihre E-Mail-Adresse wird ausschliesslich für unseren 
                    Newsletter verwendet und nicht an Dritte weitergegeben. 
                    Details finden Sie in unserer Datenschutzerklärung.
                  </p>
                </div>
                
                <div className="card-vote">
                  <h3 className="font-bold text-foreground mb-3">
                    Ist der Newsletter kostenlos?
                  </h3>
                  <p className="text-muted-foreground">
                    Ja, unser Newsletter ist komplett kostenlos und enthält keine Werbung. 
                    Er wird durch die Mitgliedsbeiträge und Spenden der SVP Stadt Zug finanziert.
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

export default Newsletter;