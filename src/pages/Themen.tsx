import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import CTASection from '@/components/ctas/CTASection';
import StatCard from '@/components/content/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Home, Briefcase, GraduationCap, Heart, Car, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';

const Themen = () => {

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
      number: "200+",
      label: "Aktive Mitglieder",
      description: "Engagiert für unsere Themen"
    }
  ];


  return (
    <PageLayout 
      title="Unsere Themen – SVP Stadt Zug"
      description="Die politischen Schwerpunkte der SVP Stadt Zug: Sicherheit, Wirtschaft, Familie, Bildung und Verkehr für eine lebenswerte Stadt."
    >
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-base px-4 py-2 border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))]">
              Politische Schwerpunkte
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Unsere Themen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Konkrete Lösungen für die Herausforderungen unserer Stadt. Die SVP Stadt Zug setzt sich 
              mit klaren Prioritäten für Sicherheit, Wohlstand und eine lebenswerte Zukunft in Zug ein.
            </p>
          </div>
        </Section>

        {/* Key Statistics */}
        <Section>
          <div className="grid md:grid-cols-3 gap-8">
            {keyStatistics.map((stat, index) => {
              // Parse number from string (e.g., "200+" -> 200, "30+" -> 30, "85%" -> 85)
              const numValue = parseInt(stat.number.replace(/[^0-9]/g, ''), 10);
              const suffix = stat.number.includes('+') ? '+' : stat.number.includes('%') ? '%' : '';
              return (
                <StatCard
                  key={index}
                  value={numValue}
                  suffix={suffix}
                  label={stat.label}
                  sublabel={stat.description}
                  icon={stat.icon}
                  variant="default"
                />
              );
            })}
          </div>
        </Section>

        {/* Main Themes */}
        <Section className="bg-gradient-to-b from-background via-muted/20 to-background">
          <SectionHeader
            title="Unsere politischen Schwerpunkte"
            description="Konkrete Massnahmen und bisherige Erfolge in unseren zentralen Themenbereichen"
            alignment="center"
            className="mb-16"
          />

          <div className="space-y-10">
            {themes.map((theme, index) => {
              const IconComponent = theme.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative bg-gradient-to-br from-card to-card/95 border-2 border-border/50 hover:border-[hsl(var(--svp-green))] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[hsl(var(--svp-green))]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-5">
                        <div className="p-4 bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                            {theme.title}
                          </CardTitle>
                          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                            {theme.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-gradient-to-r from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] text-white border-none">
                          {theme.priority}
                        </Badge>
                        <Badge variant="outline" className="border-[hsl(var(--svp-green))]/30 text-[hsl(var(--svp-green-dark))]">
                          {theme.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10">
                      <div>
                        <h4 className="font-bold text-foreground mb-6 text-lg">Unsere Massnahmen</h4>
                        <ul className="space-y-4">
                          {theme.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-3 group/item">
                              <div className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-md"></div>
                              <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-6 text-lg">Bisherige Erfolge</h4>
                        <ul className="space-y-4">
                          {theme.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3 group/item">
                              <div className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-md"></div>
                              <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Section>


        {/* Animated Logo Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="flex justify-center py-2">
              <img
                src="/logo/svp-stadt-zug-flag-animated-small.gif"
                alt="SVP Stadt Zug Flag"
                className="h-[150px] w-auto"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CTASection
          title="Setzen Sie sich mit uns für diese Themen ein"
          description="Unsere politische Arbeit lebt von dem Engagement unserer Mitglieder und Unterstützer. Werden Sie Teil unserer Bewegung und helfen Sie mit, Zug noch lebenswerter zu gestalten."
          variant="gradient"
          primaryButton={{
            text: "Mitglied werden",
            href: "/mitglied-werden",
            variant: "primary",
            icon: Users
          }}
          secondaryButton={{
            text: "Kontakt aufnehmen",
            href: "/kontakt",
            variant: "outline",
            icon: CheckCircle
          }}
        />
      </main>
    </PageLayout>
  );
};

export default Themen;