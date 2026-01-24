import { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import CTASection from '@/components/ctas/CTASection';
import MotionCard from '@/components/content/MotionCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Clock, CheckCircle, AlertCircle, Users, Target, TrendingUp, Calendar, ExternalLink } from 'lucide-react';
import { transformVorstoesseJSON, separateMotions } from '@/utils/vorstoesseData';
import { Motion } from '@/types/motion';

const Vorstoesse = () => {
  const [motions, setMotions] = useState<Motion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load JSON data
    fetch('/svp-vorstoesse-2024-2025.json')
      .then(res => res.json())
      .then(data => {
        const transformed = transformVorstoesseJSON(data);
        // Sort by date (newest first)
        transformed.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        });
        setMotions(transformed);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading vorstoesse data:', err);
        setLoading(false);
      });
  }, []);

  const { current: currentInitiatives, completed: completedInitiatives } = separateMotions(motions);

  const filteredCurrent = currentInitiatives;
  const filteredCompleted = completedInitiatives;

  const getTypeBadge = (type: string) => {
    const typeColors: Record<string, string> = {
      "Motion": "bg-red-100 text-red-800 border-red-200",
      "Interpellation": "bg-blue-100 text-blue-800 border-blue-200", 
      "Postulat": "bg-green-100 text-green-800 border-green-200",
      "Kleine Anfrage": "bg-purple-100 text-purple-800 border-purple-200",
      "Antrag": "bg-orange-100 text-orange-800 border-orange-200"
    };
    
    return (
      <Badge className={typeColors[type] || "bg-gray-100 text-gray-800 border-gray-200"}>
        {type}
      </Badge>
    );
  };

  return (
    <PageLayout 
      title="Vorstösse – SVP Stadt Zug"
      description="Parlamentarische Vorstösse der SVP Stadt Zug - Motionen, Interpellationen und Postulate für eine bessere Stadt."
    >
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-base px-4 py-2 border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))]">
              Parlamentarische Arbeit
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Vorstösse & Initiativen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Unsere parlamentarischen Vorstösse und politische Arbeit im Gemeinderat. 
              Verfolgen Sie unsere aktuellen Motionen, Interpellationen und Postulate für eine bessere Stadt Zug.
            </p>
          </div>
        </Section>

        {/* Animated Logo Break */}
        <section className="bg-muted/30 py-8 flex justify-center items-center">
          <img 
            src="/logo/svp-stadt-zug-flag-animated-small.gif" 
            alt="SVP Stadt Zug Flag" 
            className="h-[150px]"
          />
        </section>

        {/* Explanation Box */}
        <Section className="bg-gradient-to-b from-background via-muted/20 to-background">
          <SectionHeader
            title="Arte von Vorstössen"
            description="Erfahren Sie mehr über die verschiedenen parlamentarischen Instrumente"
            alignment="center"
            className="mb-8"
          />
          <div className="max-w-5xl mx-auto mb-8 text-center">
            <Button variant="outline" asChild>
              <a 
                href="https://ratsinfo.stadtzug.ch/gremium/1/geschaefte?itemsPerPage=50&search=SVP&ordering=-begin_date&page=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Alle Geschäfte auf ratsinfo.stadtzug.ch
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-card/95 border-2 border-border/50 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      {getTypeBadge("Motion")}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Antrag auf Erlass, Änderung oder Aufhebung eines Beschlusses durch den Stadtrat.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      {getTypeBadge("Interpellation")}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Schriftliche Anfrage an den Stadtrat über wichtige städtische Angelegenheiten.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      {getTypeBadge("Postulat")}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Auftrag an den Stadtrat zur Prüfung und Berichterstattung über eine Massnahme.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Current Motions */}
        {filteredCurrent.length > 0 && (
          <Section>
            <SectionHeader
              title="Aktuelle Vorstösse"
              alignment="left"
              className="mb-8"
            />
            <div className="space-y-4">
              {filteredCurrent.map((initiative) => (
                <MotionCard
                  key={initiative.id}
                  motion={initiative}
                  status="current"
                  showCategory={false}
                  simplified={true}
                />
              ))}
            </div>
          </Section>
        )}

        {/* Completed Motions */}
        {filteredCompleted.length > 0 && (
          <Section className="bg-muted/30">
            <SectionHeader
              title="Abgeschlossene Vorstösse"
              description={`${filteredCompleted.length} Vorstösse beantwortet oder umgesetzt`}
              alignment="left"
              className="mb-8"
            />
            <div className="space-y-4">
              {filteredCompleted.map((initiative) => (
                <MotionCard
                  key={initiative.id}
                  motion={initiative}
                  status="completed"
                  showCategory={false}
                  simplified={true}
                />
              ))}
            </div>
          </Section>
        )}

        {/* Empty State */}
        {!loading && filteredCurrent.length === 0 && filteredCompleted.length === 0 && (
          <Section>
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">Keine Vorstösse gefunden.</p>
              </CardContent>
            </Card>
          </Section>
        )}

        {/* Call to Action */}
        <CTASection
          title="Haben Sie auch eine Idee für Zug?"
          description="Parlamentarische Vorstösse sind ein wichtiges Instrument der demokratischen Mitbestimmung. Teilen Sie Ihre Anliegen mit uns - gemeinsam können wir Zug noch besser machen."
          icon={FileText}
          variant="gradient"
          primaryButton={{
            text: "Idee einreichen",
            href: "/kontakt",
            variant: "primary",
            icon: CheckCircle
          }}
          secondaryButton={{
            text: "Mitglied werden",
            href: "/mitglied-werden",
            variant: "outline",
            icon: Users
          }}
        />
      </main>
    </PageLayout>
  );
};

export default Vorstoesse;
