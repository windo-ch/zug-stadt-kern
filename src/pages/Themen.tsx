import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Home, Briefcase, GraduationCap, Heart, Car } from 'lucide-react';

const Themen = () => {
  useEffect(() => {
    document.title = "Unsere Themen – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Die politischen Schwerpunkte der SVP Stadt Zug: Sicherheit, Wirtschaft, Familie, Bildung und Verkehr für eine lebenswerte Stadt.');
    }
  }, []);

  const themes = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Sicherheit & Ordnung",
      description: "Eine sichere Stadt ist die Grundlage für Lebensqualität",
      points: [
        "Verstärkung der Polizeipräsenz in kritischen Bereichen",
        "Bessere Beleuchtung öffentlicher Räume und Parks",
        "Null-Toleranz bei Vandalismus und Littering",
        "Präventive Massnahmen gegen Jugendkriminalität",
        "Videosicherheit an neuralgischen Punkten"
      ],
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Wirtschaft & Arbeitsplätze",
      description: "Zug als attraktiver Wirtschaftsstandort stärken",
      points: [
        "Bürokratieabbau für KMU und Startups",
        "Digitalisierung der Verwaltung vorantreiben",
        "Attraktive Steuerkonditionen erhalten",
        "Förderung von Innovation und Unternehmertum",
        "Lebendige Innenstadt mit lokalem Gewerbe"
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Wohnen & Lebensqualität",
      description: "Bezahlbarer Wohnraum und hohe Lebensqualität",
      points: [
        "Massvolle Stadtentwicklung ohne Überfremdung",
        "Schutz von Grünflächen und Naherholungsgebieten",
        "Bezahlbare Wohnungen für Familien und Senioren",
        "Lärmschutz und Verkehrsberuhigung",
        "Erhalt des Stadtcharakters und der Identität"
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Bildung & Jugend",
      description: "Beste Bildungschancen für unsere Kinder",
      points: [
        "Hohe Qualität in Kindergarten und Schulen",
        "Förderung der deutschen Sprache und Schweizer Werte",
        "Moderne Infrastruktur und digitale Ausstattung",
        "Unterstützung für Lehrpersonen und Schulleitungen",
        "Ausserschulische Betreuung und Freizeitangebote"
      ],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Familie & Soziales",
      description: "Unterstützung für Familien und sozial Schwächere",
      points: [
        "Familienfreundliche Politik und Kinderbetreuung",
        "Unterstützung für Senioren und Menschen mit Behinderungen",
        "Integrationsmassnahmen mit klaren Erwartungen",
        "Gesundheitsversorgung und Prävention",
        "Vereinsförderung und Gemeinschaftsleben"
      ],
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Verkehr & Infrastruktur",
      description: "Effiziente Mobilität für alle Verkehrsteilnehmer",
      points: [
        "Ausgewogene Verkehrspolitik ohne Autoverteufelung",
        "Genügend Parkplätze in der Innenstadt",
        "Sichere Fuss- und Velowege für alle Altersgruppen",
        "Zuverlässiger öffentlicher Verkehr",
        "Moderne Infrastruktur und Erhaltung der Substanz"
      ],
      gradient: "from-orange-500 to-orange-600"
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Unsere Themen
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Konkrete Lösungen für die Herausforderungen unserer Stadt. 
                Für Sicherheit, Wohlstand und eine lebenswerte Zukunft in Zug.
              </p>
            </div>
          </div>
        </section>

        {/* Themes Grid */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {themes.map((theme, index) => (
                <div key={index} className="card-initiative group">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${theme.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {theme.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {theme.title}
                      </h2>
                      <p className="text-muted-foreground text-lg">
                        {theme.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {theme.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary to-svp-green rounded-2xl p-8 text-white max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Gemeinsam für diese Ziele
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Unterstützen Sie unsere Arbeit für eine bessere Stadt Zug
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-hero bg-white text-primary hover:bg-gray-100">
                    Mitglied werden
                  </button>
                  <button className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                    Unsere Vorstösse
                  </button>
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

export default Themen;