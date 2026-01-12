import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import CTASection from '@/components/ctas/CTASection';
import StatCard from '@/components/content/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Vote, CheckCircle, Users, TrendingUp, ArrowRight } from 'lucide-react';

const Abstimmungen = () => {
  const statistics = [
    {
      icon: Vote,
      number: "18",
      label: "Abstimmungen 2025",
      description: "Kantonal und kommunal"
    },
    {
      icon: TrendingUp,
      number: "78",
      label: "Übereinstimmung",
      description: "SVP-Empfehlung mit Resultat",
      suffix: "%"
    },
    {
      icon: Users,
      number: "67",
      label: "Durchschnittliche Beteiligung",
      description: "Bei kommunalen Abstimmungen",
      suffix: "%"
    }
  ];

  const upcomingInitiatives = [
    {
      title: "NEIN zum EU-Unterwerfungsvertrag",
      description: "Kampf gegen die institutionelle Unterordnung der Schweiz unter die EU - Schutz unserer direkten Demokratie und Souveränität",
      timeline: "Vernehmlassung läuft",
      status: "Kampagne",
      link: "https://unterwerfungsvertrag.ch/"
    },
    {
      title: "Nachhaltigkeits-Initiative «Keine 10-Millionen-Schweiz»",
      description: "Stopp der unkontrollierten Zuwanderung - Schutz unserer Infrastrukturen, Natur und bezahlbaren Wohnraum",
      timeline: "Abstimmung voraussichtlich Juni 2026",
      status: "Kampagne",
      link: "https://nachhaltigkeitsinitiative.ch/"
    },
    {
      title: "Keine Kopftücher an Zuger Schulen",
      description: "Kantonale Gesetzesinitiative für Chancengleichheit und Gleichberechtigung - Verbot religiöser Kopfbedeckungen an öffentlichen Schulen",
      timeline: "Sammlung läuft",
      status: "Unterschriftensammlung",
      link: "https://www.svp-zug.ch/medienmitteilungen/medienmitteilung-vom-24-10-2025-zuger-kantonsraete-lancieren-kantonale-gesetzesinitiative-keine-kopftuecher-an-zuger-schulen-und-kindergaerten/"
    },
    {
      title: "Grenzschutz-Initiative",
      description: "Volksinitiative «Asylmissbrauch stoppen!» für mehr Sicherheit in unserem Land",
      timeline: "Eingereicht",
      status: "Unterschriftensammlung erfolgreich",
      link: "https://grenzschutzinitiative.ch/"
    },
    {
      title: "Kompass-Initiative",
      description: "Initiative für eine souveräne und neutrale Schweiz - Besinnung auf bewährte Werte und Selbstbestimmung",
      timeline: "Eingereicht",
      status: "Unterschriftensammlung erfolgreich",
      link: "https://kompasseuropa.ch/kompass-initiative"
    }
  ];


  return (
    <PageLayout 
      title="Abstimmungen – SVP Stadt Zug"
      description="Abstimmungsempfehlungen der SVP Stadt Zug - transparent, begründet und bürgernah. Informieren Sie sich über unsere Positionen."
    >
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-base px-4 py-2 border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))]">
              Abstimmungen
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Unsere Abstimmungsempfehlungen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Transparente und fundierte Empfehlungen zu allen wichtigen Abstimmungen. 
              Erfahren Sie, warum wir bestimmte Positionen vertreten und wie diese Entscheidungen 
              Zug und seine Bürger betreffen.
            </p>
          </div>
        </Section>

        {/* Statistics */}
        <Section>
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => {
              const numValue = parseInt(stat.number.replace(/[^0-9]/g, ''), 10);
              const suffix = stat.suffix || '';
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

        {/* Current Burning Topics */}
        <Section className="bg-gradient-to-b from-background via-muted/20 to-background">
          <SectionHeader
            title="Aktuelle Brennpunkte"
            description="Diese wichtigen Initiativen stehen aktuell im Fokus und benötigen Ihre Unterstützung"
            alignment="center"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingInitiatives.map((initiative, index) => (
              <Card 
                key={index} 
                className="group relative bg-gradient-to-br from-card to-card/95 border-2 border-border/50 hover:border-[hsl(var(--svp-green))] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--svp-green))]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-xl md:text-2xl font-bold leading-tight pr-2">
                      {initiative.title}
                    </CardTitle>
                    <Badge 
                      variant={
                        initiative.status === "Kampagne" ? "destructive" : 
                        initiative.status === "Unterschriftensammlung" ? "warning" :
                        initiative.status === "Unterschriftensammlung erfolgreich" ? "default" : "outline"
                      }
                      className={`whitespace-nowrap text-xs ${
                        initiative.status === "Unterschriftensammlung erfolgreich" 
                          ? "bg-gradient-to-r from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] text-white border-none" 
                          : ""
                      }`}
                    >
                      {initiative.status}
                    </Badge>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4 pt-0 relative z-10">
                  <div className="text-sm text-muted-foreground bg-muted/30 rounded-lg p-4 border border-border/50">
                    <strong className="text-foreground">Zeitrahmen:</strong> {initiative.timeline}
                  </div>
                  <Button 
                    asChild 
                    className="w-full h-12 font-semibold bg-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green-light))] text-white border-none group/btn"
                  >
                    <a href={initiative.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Mehr erfahren & unterstützen
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <CTASection
          title="Bleiben Sie informiert"
          description="Abonnieren Sie unseren Newsletter und erhalten Sie unsere Abstimmungsempfehlungen direkt in Ihr E-Mail-Postfach. Fundiert recherchiert und verständlich erklärt."
          icon={Vote}
          variant="gradient"
          primaryButton={{
            text: "Kontakt aufnehmen",
            href: "/kontakt",
            variant: "primary",
            icon: Users
          }}
          secondaryButton={{
            text: "Fragen stellen",
            href: "/kontakt",
            variant: "outline",
            icon: CheckCircle
          }}
        />
      </main>
    </PageLayout>
  );
};

export default Abstimmungen;