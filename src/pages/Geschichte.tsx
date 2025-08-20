import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award, Milestone } from 'lucide-react';

const Geschichte = () => {
  useEffect(() => {
    document.title = "Geschichte - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Die Geschichte der SVP Stadt Zug - von den Anfängen bis heute. Erfahren Sie mehr über unsere Entwicklung und Erfolge.');
    }
  }, []);

  const timelineEvents = [
    {
      year: "1971",
      title: "Gründung der SVP Stadt Zug",
      description: "Gründung der Ortspartei durch engagierte Bürger als Antwort auf die politischen Herausforderungen der 70er Jahre",
      type: "founding",
      details: "Mit nur 25 Gründungsmitgliedern startete die SVP Stadt Zug ihre politische Arbeit"
    },
    {
      year: "1978",
      title: "Erster Stadtrat",
      description: "Hans Weber wird als erster SVP-Vertreter in den Stadtrat Zug gewählt",
      type: "milestone",
      details: "Durchbruch in der Kommunalpolitik nach sieben Jahren Aufbauarbeit"
    },
    {
      year: "1985",
      title: "Wachstum der Mitgliedschaft",
      description: "Die Partei wächst auf über 200 Mitglieder und etabliert sich als feste Grösse",
      type: "growth",
      details: "Verdreifachung der Mitgliederzahl innerhalb eines Jahrzehnts"
    },
    {
      year: "1994",
      title: "Zwei Stadträte",
      description: "Erstmals stellt die SVP zwei Stadträte gleichzeitig - ein historischer Erfolg",
      type: "milestone",
      details: "Bestätigung des Vertrauens der Zuger Bevölkerung in die SVP-Politik"
    },
    {
      year: "2002",
      title: "Neue Vereinsstruktur",
      description: "Modernisierung der Parteiorganisation mit neuen Statuten und Arbeitsgruppen",
      type: "modernization",
      details: "Anpassung an die Anforderungen des 21. Jahrhunderts"
    },
    {
      year: "2008",
      title: "Finanzkrise-Management",
      description: "SVP setzt sich erfolgreich für massvollen Umgang mit öffentlichen Geldern ein",
      type: "achievement",
      details: "Verhinderte übermässige Staatsverschuldung in schwierigen Zeiten"
    },
    {
      year: "2015",
      title: "Digitale Revolution",
      description: "Launch der neuen Website und digitalen Kommunikationskanäle",
      type: "modernization",
      details: "Anschluss an moderne Kommunikationsformen für bessere Bürgernähe"
    },
    {
      year: "2020",
      title: "Corona-Krisenpolitik",
      description: "SVP engagiert sich für ausgewogene Corona-Massnahmen und Wirtschaftsschutz",
      type: "achievement",
      details: "Balance zwischen Gesundheitsschutz und wirtschaftlicher Vernunft"
    },
    {
      year: "2024",
      title: "50+ Jahre Bürgernähe",
      description: "Über ein halbes Jahrhundert erfolgreiche Politik für die Zuger Bevölkerung",
      type: "milestone",
      details: "Kontinuierliches Wachstum auf heute über 400 Mitglieder"
    }
  ];

  const achievements = [
    {
      title: "Verkehrspolitik",
      description: "Durchsetzung der Verkehrsberuhigung in der Altstadt bei gleichzeitiger Förderung des ÖV",
      year: "1990-2000"
    },
    {
      title: "Sicherheitspolitik",
      description: "Einführung der Stadtpolizei und Verbesserung der öffentlichen Sicherheit",
      year: "2005-2010"
    },
    {
      title: "Bildungspolitik",
      description: "Modernisierung der Schulinfrastruktur und Förderung der dualen Bildung",
      year: "2010-2020"
    },
    {
      title: "Digitalisierung",
      description: "Vorantreibung der digitalen Verwaltung und E-Government-Lösungen",
      year: "2015-heute"
    }
  ];

  const formerLeaders = [
    {
      name: "Hans Weber",
      period: "1971-1985",
      role: "Gründungspräsident",
      achievement: "Aufbau der Parteistrukturen"
    },
    {
      name: "Maria Huber",
      period: "1985-1998",
      role: "Präsidentin",
      achievement: "Etablierung als Volkspartei"
    },
    {
      name: "Peter Schärer",
      period: "1998-2012",
      role: "Präsident",
      achievement: "Modernisierung und Professionalisierung"
    },
    {
      name: "Claudia Meier",
      period: "2012-2020",
      role: "Präsidentin",
      achievement: "Digitale Transformation"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "founding": return "bg-blue-100 text-blue-800 border-blue-200";
      case "milestone": return "bg-green-100 text-green-800 border-green-200";
      case "growth": return "bg-purple-100 text-purple-800 border-purple-200";
      case "modernization": return "bg-orange-100 text-orange-800 border-orange-200";
      case "achievement": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "founding": return Users;
      case "milestone": return Milestone;
      case "growth": return Users;
      case "modernization": return Calendar;
      case "achievement": return Award;
      default: return Calendar;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Geschichte</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere Geschichte
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Seit über 50 Jahren setzt sich die SVP Stadt Zug für die Werte und Interessen der Zuger Bürgerinnen und Bürger ein. 
            Entdecken Sie die wichtigsten Meilensteine unserer erfolgreichen politischen Arbeit.
          </p>
        </div>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Zeitlinie der SVP Stadt Zug</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = getEventTypeIcon(event.type);
              return (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < timelineEvents.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Year and Icon */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        {event.year.slice(-2)}
                      </div>
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-grow hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <CardTitle className="text-xl">{event.title}</CardTitle>
                              <Badge className={getEventTypeColor(event.type)} variant="outline">
                                {event.year}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-3">
                          {event.description}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground italic">
                          {event.details}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Wichtige Erfolge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <Badge variant="secondary">{achievement.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Former Leaders */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Ehemalige Präsidenten</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {formerLeaders.map((leader, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{leader.name}</h3>
                      <p className="text-sm text-muted-foreground">{leader.role}</p>
                    </div>
                    <Badge variant="outline">{leader.period}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Hauptverdienst:</strong> {leader.achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision for Future */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Blick in die Zukunft
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Mit über 50 Jahren Erfahrung blicken wir voller Zuversicht in die Zukunft. 
            Unsere bewährten Werte werden uns auch in den kommenden Jahrzehnten leiten, 
            während wir uns den neuen Herausforderungen unserer Zeit stellen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/wofuer-wir-stehen" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Unsere Werte
            </a>
            <a 
              href="/mitglied-werden" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Geschichte mitschreiben
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Geschichte;