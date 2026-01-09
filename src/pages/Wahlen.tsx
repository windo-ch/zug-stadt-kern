import { useEffect } from 'react';
import { Calendar, Users, Target, ArrowRight, Vote, CheckCircle, Building, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Wahlen = () => {
  useEffect(() => {
    document.title = "Wahlen - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aktuelle Informationen zu den nächsten Wahlen im Kanton Zug. SVP Stadt Zug bereitet sich auf die kommenden Wahltermine vor.');
    }
  }, []);

  const upcomingElections = [
    {
      icon: Users,
      title: "Kantonsratswahlen",
      date: "4. Oktober 2026",
      description: "Neuwahl des Kantonsrats des Kantons Zug",
      level: "Kantonal",
      status: "2026"
    },
    {
      icon: Vote,
      title: "Nationalratswahlen",
      date: "24. Oktober 2027",
      description: "Wahl der Schweizer Nationalräte",
      level: "National",
      status: "2027"
    },
    {
      icon: Award,
      title: "Ständeratswahlen",
      date: "24. Oktober 2027",
      description: "Wahl der Schweizer Ständeräte",
      level: "National",
      status: "2027"
    },
    {
      icon: Target,
      title: "Gerichtswahlen",
      date: "2029",
      description: "Gesamterneuerungswahlen der kantonalen Gerichte",
      level: "Kantonal",
      status: "2029"
    }
  ];

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
    { date: "Q1 2025", event: "Kandidatenaufstellung abschliessen" },
    { date: "Q2 2025", event: "Wahlprogramm verabschieden" },
    { date: "Q3 2025", event: "Intensive Wahlkampfphase starten" },
    { date: "4. Oktober 2026", event: "Kantonsratswahlen" }
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
                <span className="text-primary font-semibold text-sm">Wahlen im Kanton Zug</span>
              </div>
              
                                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            <span className="bg-gradient-to-r from-svp-orange to-svp-green bg-clip-text text-transparent">
                              Wir bereiten uns vor
                            </span>{' '}
                            – für eine starke Zukunft
                          </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Informieren Sie sich über die kommenden Wahlen im Kanton Zug. Von Regierungsrat bis Nationalrat - 
                wir bereiten uns auf alle Wahltermine vor und setzen uns für bürgerliche Werte ein.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt">
                  <Button className="btn-hero group">
                    <Users className="mr-2 h-5 w-5" />
                    Kandidieren
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/mitglied-werden">
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
                Roadmap zu den Kantonsratswahlen 2026
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unser Zeitplan bis zu den Kantonsratswahlen im Oktober 2026
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

        {/* Upcoming Elections */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nächste Wahltermine
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Übersicht über alle kommenden Wahlen im Kanton Zug
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingElections.map((election, index) => (
                <Card key={index} className="card-hover border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <election.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        election.status === '2026'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {election.status}
                      </span>
                    </div>
                    <CardTitle className="text-foreground">{election.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {election.date}
                      </div>
                      <p className="text-muted-foreground text-sm">{election.description}</p>
                      <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">
                        {election.level}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                <Link to="/mitglied-werden">
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