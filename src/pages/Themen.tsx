import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Home, Briefcase, GraduationCap, Heart, Car, Users, Target, TrendingUp } from 'lucide-react';

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
      icon: Shield,
      title: "Sicherheit & Ordnung",
      description: "Eine sichere Stadt ist die Grundlage für Lebensqualität und Wohlbefinden aller Bürger",
      priority: "Höchste Priorität",
      status: "Laufende Massnahmen",
      points: [
        "Verstärkung der Polizeipräsenz in kritischen Bereichen und zu Problemzeiten",
        "Bessere Beleuchtung öffentlicher Räume, Parks und Unterführungen",
        "Null-Toleranz-Politik bei Vandalismus, Littering und antisozialem Verhalten",
        "Präventive Massnahmen gegen Jugendkriminalität und Drogenhandel",
        "Moderne Videosicherheit an neuralgischen Punkten der Stadt",
        "Verstärkte Kontrollen in öffentlichen Verkehrsmitteln"
      ],
      achievements: [
        "Einführung der Stadtpolizei-Patrouille",
        "Verbesserung der Beleuchtung in 5 Parkanlagen",
        "Reduktion der Vandalismusschäden um 30%"
      ]
    },
    {
      icon: Briefcase,
      title: "Wirtschaft & Arbeitsplätze",
      description: "Zug als attraktiver Wirtschaftsstandort stärken und zukunftsfähige Arbeitsplätze schaffen",
      priority: "Hohe Priorität",
      status: "Aktive Förderung",
      points: [
        "Konsequenter Bürokratieabbau für KMU, Startups und etablierte Unternehmen",
        "Vollständige Digitalisierung der Verwaltungsprozesse vorantreiben",
        "Attraktive Steuerkonditionen erhalten und gezielt optimieren",
        "Förderung von Innovation, Unternehmertum und nachhaltigen Geschäftsmodellen",
        "Lebendige Innenstadt mit vielfältigem lokalem Gewerbe und Gastronomie",
        "Unterstützung für Lehrbetriebe und duale Bildungswege"
      ],
      achievements: [
        "Vereinfachung von 12 Bewilligungsverfahren",
        "Launch des digitalen Schalters der Stadt",
        "Ansiedlung von 8 neuen Technologieunternehmen"
      ]
    },
    {
      icon: Home,
      title: "Wohnen & Lebensqualität",
      description: "Bezahlbarer Wohnraum und hohe Lebensqualität für alle Generationen in Zug",
      priority: "Hohe Priorität", 
      status: "Laufende Projekte",
      points: [
        "Massvolle Stadtentwicklung mit Respekt vor gewachsenen Strukturen",
        "Konsequenter Schutz von Grünflächen und Naherholungsgebieten",
        "Bezahlbare Wohnungen für Familien, Senioren und junge Menschen",
        "Effektiver Lärmschutz und gezielte Verkehrsberuhigung",
        "Erhalt des Stadtcharakters, der Identität und des Charmes von Zug",
        "Förderung von generationenübergreifendem Wohnen"
      ],
      achievements: [
        "Schutz von 3 wertvollen Grünflächen vor Überbauung",
        "Realisierung von 120 bezahlbaren Wohnungen",
        "Verkehrsberuhigung in 4 Wohnquartieren"
      ]
    },
    {
      icon: GraduationCap,
      title: "Bildung & Jugend",
      description: "Beste Bildungschancen für unsere Kinder und eine starke Förderung der Jugend",
      priority: "Höchste Priorität",
      status: "Kontinuierliche Verbesserung",
      points: [
        "Hohe Qualität in Kindergarten, Primar- und Sekundarschulen gewährleisten",
        "Förderung der deutschen Sprache und Vermittlung Schweizer Werte",
        "Moderne Infrastruktur und zeitgemässe digitale Ausstattung",
        "Gezielte Unterstützung für Lehrpersonen und Schulleitungen",
        "Umfassende ausserschulische Betreuung und vielfältige Freizeitangebote",
        "Stärkung der Berufsbildung und Lehrstellenförderung"
      ],
      achievements: [
        "Modernisierung von 6 Schulhäusern",
        "Digitale Ausstattung aller Klassenzimmer",
        "Erhöhung der Lehrstellenquote um 15%"
      ]
    },
    {
      icon: Heart,
      title: "Familie & Soziales",
      description: "Umfassende Unterstützung für Familien und Menschen in besonderen Lebenslagen",
      priority: "Hohe Priorität",
      status: "Erweiterte Angebote",
      points: [
        "Familienfreundliche Politik mit flexibler und qualitätsvoller Kinderbetreuung",
        "Umfassende Unterstützung für Senioren und Menschen mit Behinderungen",
        "Integrationsmassnahmen mit klaren Erwartungen und fairen Chancen",
        "Hochwertige Gesundheitsversorgung und wirkungsvolle Prävention",
        "Aktive Vereinsförderung und Stärkung des Gemeinschaftslebens",
        "Unterstützung für pflegende Angehörige und Freiwilligenarbeit"
      ],
      achievements: [
        "Ausbau der Kinderbetreuungsplätze um 40%",
        "Neue Begegnungszentren für Senioren",
        "Verstärkung der häuslichen Pflege-Unterstützung"
      ]
    },
    {
      icon: Car,
      title: "Verkehr & Infrastruktur",
      description: "Effiziente und nachhaltige Mobilität für alle Verkehrsteilnehmer in der Stadt",
      priority: "Hohe Priorität",
      status: "Laufende Optimierung",
      points: [
        "Ausgewogene Verkehrspolitik ohne ideologische Autoverteufelung",
        "Ausreichend Parkplätze in der Innenstadt für Besucher und Anwohner",
        "Sichere Fuss- und Velowege für alle Altersgruppen und Bedürfnisse",
        "Zuverlässiger, pünktlicher und bezahlbarer öffentlicher Verkehr",
        "Moderne Infrastruktur und nachhaltige Erhaltung der bestehenden Substanz",
        "Intelligente Verkehrssteuerung und Reduktion von Staus"
      ],
      achievements: [
        "Optimierung von 8 Verkehrsknotenpunkten",
        "Bau von 3 neuen Veloweg-Verbindungen",
        "Verbesserung der ÖV-Taktzeiten um 25%"
      ]
    }
  ];

  const keyStatistics = [
    {
      icon: Target,
      number: "24",
      label: "Aktive Projekte",
      description: "In verschiedenen Themenbereichen"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Erfolgsquote",
      description: "Bei umgesetzten Initiativen"
    },
    {
      icon: Users,
      number: "400+",
      label: "Aktive Mitglieder",
      description: "Engagiert für unsere Themen"
    }
  ];

  const upcomingInitiatives = [
    {
      title: "Initiative gegen unnötige Verkehrshindernisse",
      description: "Überprüfung und Abbau verkehrshemmender Massnahmen in der Innenstadt für besseren Wirtschaftsverkehr",
      timeline: "2025",
      status: "Vorbereitung"
    },
    {
      title: "Sicherheitspaket Zug",
      description: "Verstärkung der Polizeipräsenz und Installation zusätzlicher Videoüberwachung in Problemzonen",
      timeline: "2025-2026",
      status: "Budgetierung"
    },
    {
      title: "Bürokratie-Abbau in der Verwaltung",
      description: "Vereinfachung von Bewilligungsverfahren für Gewerbe und Bau zur Stärkung des Wirtschaftsstandorts",
      timeline: "2025",
      status: "Parlamentsvorlage"
    },
    {
      title: "Schutz vor Überfremdung der Quartiere",
      description: "Massnahmen zur ausgewogenen Entwicklung der Wohnquartiere und Erhalt des Zuger Charakters",
      timeline: "2025-2026",
      status: "Konzeptphase"
    },
    {
      title: "Kostentransparenz bei öffentlichen Projekten",
      description: "Einführung verbindlicher Kostendächer und bessere Kontrolle bei Grossinvestitionen der Stadt",
      timeline: "2025",
      status: "Prüfung"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Politische Schwerpunkte</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere Themen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Konkrete Lösungen für die Herausforderungen unserer Stadt. Die SVP Stadt Zug setzt sich 
            mit klaren Prioritäten für Sicherheit, Wohlstand und eine lebenswerte Zukunft in Zug ein.
          </p>
        </div>

        {/* Key Statistics */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {keyStatistics.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Themes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Unsere politischen Schwerpunkte</h2>
          <div className="space-y-8">
            {themes.map((theme, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <theme.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{theme.title}</CardTitle>
                        <CardDescription className="text-base">{theme.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant="secondary">{theme.priority}</Badge>
                      <Badge variant="outline">{theme.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Unsere Massnahmen</h4>
                      <ul className="space-y-3">
                        {theme.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Bisherige Erfolge</h4>
                      <ul className="space-y-3">
                        {theme.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Initiatives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Kommende Initiativen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingInitiatives.map((initiative, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{initiative.title}</CardTitle>
                    <Badge variant={initiative.status === "In Planung" ? "secondary" : 
                                  initiative.status === "Vernehmlassung" ? "default" : "outline"} 
                           className="whitespace-nowrap">
                      {initiative.status}
                    </Badge>
                  </div>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <strong>Zeitrahmen:</strong> {initiative.timeline}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Setzen Sie sich mit uns für diese Themen ein
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unsere politische Arbeit lebt von dem Engagement unserer Mitglieder und Unterstützer. 
            Werden Sie Teil unserer Bewegung und helfen Sie mit, Zug noch lebenswerter zu gestalten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/mitglied-werden" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Mitglied werden
            </a>
            <a 
              href="/vorstoesse" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Unsere Vorstösse
            </a>
            <a 
              href="/kontakt" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Themen;