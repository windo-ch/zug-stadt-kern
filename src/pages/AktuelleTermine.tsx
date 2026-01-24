import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AktuelleTermine = () => {
  const ggrSitzungen = [
    { date: "24. Februar 2026" },
    { date: "17. März 2026" },
    { date: "28. April 2026" },
    { date: "26. Mai 2026" },
    { date: "16. Juni 2026" },
    { date: "18. August 2026" },
    { date: "15. September 2026" },
    { date: "20. Oktober 2026" },
    { date: "17. November 2026" },
    { date: "15. Dezember 2026" }
  ];

  return (
    <PageLayout 
      title="Aktuelle Termine - SVP Stadt Zug"
      description="Aktuelle Termine und Sitzungen des Grossen Gemeinderats und Kantonsrats der Stadt Zug."
    >
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-base px-4 py-2 border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))]">
              Termine
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Aktuelle Termine
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Übersicht über die kommenden Sitzungen und Termine
            </p>
          </div>
        </Section>

        {/* GGR Sitzungen */}
        <Section>
          <SectionHeader
            title="GGR Sitzungen"
            description="Die Sitzungen des Grossen Gemeinderats sind öffentlich und/oder per Video-Link einsehbar."
            alignment="center"
            className="mb-8"
          />
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {ggrSitzungen.map((sitzung, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">{sitzung.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild className="btn-hero">
                <a 
                  href="https://ratsinfo.stadtzug.ch/gremium/1/sessionen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alle Sitzungen ansehen
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Kantonsratssitzungen */}
        <Section variant="muted">
          <SectionHeader
            title="Sitzungsdaten des Kantonsrats für das Jahr 2026"
            description="Informationen zu den Sitzungen des Kantonsrats"
            alignment="center"
            className="mb-8"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 29. Januar 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 26. Februar 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Fr., 27. Februar 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 26. März 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 30. April 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 21. Mai 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Mi, 01. Juli 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 02. Juli 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 27. August 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 24. September 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 29. Oktober 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Mi, 25. November 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 26. November 2026</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Do, 17. Dezember 2026</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default AktuelleTermine;
