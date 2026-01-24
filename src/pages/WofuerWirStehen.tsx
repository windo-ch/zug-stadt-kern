import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import CTASection from '@/components/ctas/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Heart, Users, Zap, Building, Leaf, CheckCircle } from 'lucide-react';

const WofuerWirStehen = () => {

  const coreValues = [
    {
      icon: Shield,
      title: "Sicherheit & Ordnung",
      description: "Eine sichere Stadt für alle Bürger durch konsequente Durchsetzung des Rechts und präventive Massnahmen.",
      points: [
        "Verstärkte Polizeipräsenz in der Innenstadt",
        "Null-Toleranz-Politik bei Vandalismus",
        "Sichere Schulwege für unsere Kinder",
        "Effektive Kriminalitätsprävention"
      ]
    },
    {
      icon: Heart,
      title: "Tradition & Heimat",
      description: "Bewahrung unserer Zuger Werte und Traditionen als Fundament einer starken Gemeinschaft.",
      points: [
        "Förderung lokaler Bräuche und Feste",
        "Schutz der deutschen Sprache",
        "Unterstützung der Zuger Vereine",
        "Erhalt des kulturellen Erbes"
      ]
    },
    {
      icon: Users,
      title: "Bürgernähe & Demokratie",
      description: "Direkte Demokratie stärken und die Stimme der Bürger in politischen Entscheidungen berücksichtigen.",
      points: [
        "Regelmässige Bürgersprechstunden",
        "Transparente Entscheidungsprozesse",
        "Stärkung der Volksrechte",
        "Direkte Kommunikation mit den Bürgern"
      ]
    },
    {
      icon: Zap,
      title: "Wirtschaft & Innovation",
      description: "Zug als attraktiven Wirtschaftsstandort stärken und Arbeitsplätze für die Zuger Bevölkerung sichern.",
      points: [
        "Förderung des lokalen Gewerbes",
        "Attraktive Standortbedingungen",
        "Reduktion der Bürokratie",
        "Innovation und Unternehmertum unterstützen"
      ]
    },
    {
      icon: Building,
      title: "Stadtentwicklung & Infrastruktur",
      description: "Nachhaltige Stadtentwicklung, die die Lebensqualität erhält und verbessert.",
      points: [
        "Massvoll verdichten statt zubetonieren",
        "Erhalt von Grünflächen",
        "Effiziente öffentliche Verkehrsmittel",
        "Moderne, aber bezahlbare Infrastruktur"
      ]
    },
    {
      icon: Leaf,
      title: "Umwelt & Nachhaltigkeit",
      description: "Verantwortungsvoller Umgang mit der Natur für kommende Generationen.",
      points: [
        "Schutz des Zugersees",
        "Kostengünstiger Umweltschutz ohne Verbote",
        "Eigenverantwortung statt Bevormundung",
        "Wirtschaftsverträgliche Umweltmassnahmen"
      ]
    }
  ];

  return (
    <PageLayout 
      title="Wofür wir stehen - SVP Stadt Zug"
      description="Unsere Grundsätze und Werte: Sicherheit, Freiheit, Tradition und eine lebenswerte Stadt Zug für alle Bürger."
    >
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-base px-4 py-2 border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))]">
              Unsere Grundsätze
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Wofür wir stehen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Die SVP Stadt Zug steht für bewährte Werte und eine Politik des gesunden Menschenverstands. 
              Unsere Grundsätze bilden das Fundament für eine lebenswerte, sichere und prosperierende Stadt.
            </p>
          </div>
        </Section>

        {/* Core Values Grid */}
        <Section className="bg-gradient-to-b from-background via-muted/20 to-background">
          <SectionHeader
            title="Unsere Werte & Überzeugungen"
            description="Die Grundpfeiler unserer politischen Arbeit für eine starke Stadt Zug"
            alignment="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative bg-gradient-to-br from-card to-card/95 border-2 border-border/50 hover:border-[hsl(var(--svp-green))] shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--svp-green))]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="pb-6 relative z-10">
                    <div className="flex flex-col items-start gap-5 mb-4">
                      <div className="p-4 bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground leading-tight">
                        {value.title}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      {value.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="flex-grow pt-0 relative z-10">
                    <ul className="space-y-3">
                      {value.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3 group/item">
                          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-md"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
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
                alt="SVP Stadt Zug Flagge"
                className="h-[150px] w-auto"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CTASection
          title="Gemeinsam für eine starke Stadt Zug"
          description="Unsere Werte sind nicht nur Worte, sondern Leitlinien für konkretes politisches Handeln. Werden Sie Teil unserer Partei für eine lebenswerte Zukunft in Zug."
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

export default WofuerWirStehen;