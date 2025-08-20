import { useEffect } from 'react';
import { Calendar, Users, Target, ArrowRight, Vote, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Wahlen = () => {
  useEffect(() => {
    document.title = "Kommunalwahlen 2026 - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SVP Stadt Zug bereitet sich intensiv auf die Kommunalwahlen 2026 vor. Erfahren Sie mehr über unsere Kandidaten und Ziele.');
    }
  }, []);

  const preparationAreas = [
    {
      icon: Users,
      title: "Kandidatensuche",
      description: "Wir suchen engagierte Bürgerinnen und Bürger für Stadtrat und Gemeinderat",
      status: "Aktiv"
    },
    {
      icon: Target,
      title: "Programmentwicklung",
      description: "Erarbeitung unseres Wahlprogramms für eine starke Stadt Zug",
      status: "In Arbeit"
    },
    {
      icon: Vote,
      title: "Kampagnenplanung",
      description: "Strategische Planung der Wahlkampagne und Kommunikation",
      status: "Planung"
    }
  ];

  const timeline = [
    { date: "Q1 2025", event: "Kandidatenaufstellung abschließen" },
    { date: "Q2 2025", event: "Wahlprogramm verabschieden" },
    { date: "Q3 2025", event: "Intensive Wahlkampfphase starten" },
    { date: "März 2026", event: "Kommunalwahlen" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container-max">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                <span className="text-primary font-semibold text-sm">Kommunalwahlen 2026</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wir bereiten uns vor –{' '}
                <span className="bg-gradient-to-r from-svp-orange to-svp-green bg-clip-text text-transparent">
                  für eine starke Zukunft
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Die SVP Stadt Zug ist bereits heute in aktiver Vorbereitung für die Kommunalwahlen 2026. 
                Wir arbeiten intensiv daran, die besten Kandidatinnen und Kandidaten zu finden und 
                ein überzeugendes Programm für unsere Stadt zu entwickeln.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt">
                  <Button className="btn-hero group">
                    <Users className="mr-2 h-5 w-5" />
                    Kandidieren
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/mitglied">
                  <Button className="btn-outline group">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Mitglied werden
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Preparation Areas */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Unsere Vorbereitungen laufen auf Hochtouren
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                In verschiedenen Bereichen arbeiten wir bereits intensiv an den Wahlen 2026
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {preparationAreas.map((area, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                        {area.status}
                      </span>
                    </div>
                    <CardTitle className="text-foreground">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Roadmap zu den Wahlen 2026
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unser Zeitplan bis zu den Kommunalwahlen im März 2026
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 pb-8 border-b border-border last:border-b-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.event}
                        </h3>
                        <span className="text-sm text-muted-foreground font-medium">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container-max">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Werden Sie Teil unseres Teams
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Interessieren Sie sich für eine Kandidatur oder möchten Sie uns im Wahlkampf unterstützen? 
                Wir freuen uns über jede Unterstützung!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt">
                  <Button className="btn-hero">
                    Kontakt aufnehmen
                  </Button>
                </Link>
                <Link to="/mitglied">
                  <Button className="btn-outline">
                    Mitglied werden
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wahlen;