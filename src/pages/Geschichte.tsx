import { useEffect } from 'react';
import { Calendar, Users, Building, Trophy, Star, ArrowRight, CheckCircle, Quote, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Geschichte = () => {
  useEffect(() => {
    document.title = "30 Jahre Geschichte - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '30 Jahre SVP Stadt Zug - Von der Gründung 1992 bis heute. Entdecken Sie die authentische Geschichte unserer Partei.');
    }
  }, []);

  const foundingStory = {
    date: "19. Mai 1992",
    founders: "Dr. Hans Durrer und Mitstreiter",
    context: "Unzufriedenheit mit den 'alten Parteien' und dem klaren 'Nein zum EWR'",
    vision: "Klare Politik und starker Gestaltungswille für die Stadt Zug"
  };

  const majorMilestones = [
    {
      year: "1992",
      title: "Gründung der SVP Stadt Zug",
      description: "Am 19. Mai 1992 wurde die SVP Stadt Zug als vierte Ortssektion des Kantons gegründet",
      type: "founding",
      details: "Die Pioniere rund um Dr. Hans Durrer etablierten eine neue, freiheitliche, bürgerliche Politkraft"
    },
    {
      year: "1994",
      title: "Erste Wahlerfolge",
      description: "Jean-Paul Flachsmann wird als erster Kantonsrat der SVP Stadt Zug gewählt",
      type: "milestone",
      details: "Erstmals vier Sitze im Grossen Gemeinderat erreicht"
    },
    {
      year: "2002",
      title: "Ausbau auf sieben GGR-Sitze",
      description: "Steigerung von fünf auf beeindruckende sieben Vertreter im Grossen Gemeinderat",
      type: "growth",
      details: "Etablierung als bedeutende politische Kraft in der Stadt"
    },
    {
      year: "2010",
      title: "Historischer Durchbruch",
      description: "André Wicki erobert als erster SVP-Vertreter einen Sitz im Stadtrat",
      type: "achievement",
      details: "GGR-Fraktion steigert sich von fünf auf acht Sitze - FDP verliert drei Sitze"
    },
    {
      year: "2012",
      title: "20-jähriges Jubiläum",
      description: "Grosse Feier mit Bundesrat Ueli Maurer als Ehrengast",
      type: "milestone",
      details: "Würdigung von zwei Jahrzehnten erfolgreicher Stadtpolitik"
    },
    {
      year: "2017",
      title: "25-Jahr-Feier",
      description: "Politgrossereignis mit drei Regierungsräten und allen bürgerlichen Parteipräsidenten",
      type: "celebration",
      details: "Laudatio von Regierungsrat Heinz Tännler und Nationalrat Roger Köppel"
    },
    {
      year: "2020",
      title: "Neue Ära mit 'MIR LIEFERET!'",
      description: "Gregor R. Bruhin übernimmt Präsidium mit stringenterem Parteiprogramm",
      type: "modernization",
      details: "Geschärftes Profil trotz Corona-bedingter Herausforderungen"
    }
  ];

  const presidentsHistory = [
    { name: "Dr. Hans Durrer", period: "1992, 1995-1999", role: "Gründungspräsident & Ehrenpräsident", achievement: "Gründung und Aufbau der Parteistrukturen" },
    { name: "Stefan Gyseler", period: "1993-1994", role: "Präsident", achievement: "Frühe Konsolidierung" },
    { name: "Jean-Paul Flachsmann", period: "1994-1995", role: "Präsident", achievement: "Erster Kantonsrat der SVP Stadt Zug" },
    { name: "Toni Junas", period: "1999-2003", role: "Präsident", achievement: "Eigenständige Politisierung, Volksabstimmung gegen modernes Stadtlogo" },
    { name: "Roland Neuner", period: "2003-2005", role: "Präsident", achievement: "Stabilisierung der Partei" },
    { name: "Jürg Messmer", period: "2005-2007, 2013-2015", role: "Präsident", achievement: "Höchster Stadt Zuger 2011-2012, Präsident des GGR" },
    { name: "Dr. Manuel Brandenberg", period: "2007-2011", role: "Präsident & Ehrenmitglied", achievement: "Initiative 'Schluss mit goldenen Fallschirmen' - 57,5% JA" },
    { name: "Manfred Pircher", period: "2011-2013", role: "Präsident", achievement: "Organisation des 20-jährigen Jubiläums" },
    { name: "Philip C. Brunner", period: "2015-2020", role: "Präsident", achievement: "Leitung GPK, Organisation 25-Jahr-Feier" },
    { name: "Gregor R. Bruhin", period: "seit 2020", role: "Aktueller Präsident", achievement: "Strategische Neuausrichtung mit 'MIR LIEFERET!'" }
  ];

  const keyAchievements = [
    {
      title: "Volksinitiative gegen Abgangsentschädigungen",
      description: "57,5% JA-Stimmen gegen 'goldene Fallschirme' für Stadträte - erster historischer Abstimmungssieg",
      year: "2010",
      impact: "Nationale Ausstrahlung"
    },
    {
      title: "Aufstieg zur zweitstärksten Kraft",
      description: "Von Exot zur zweitstärksten politischen Kraft in Zug in drei Jahrzehnten",
      year: "1992-2022",
      impact: "Dauerhafte Etablierung"
    },
    {
      title: "Erstmaliger Stadtratssitz",
      description: "André Wicki erobert 2010 als erster SVP-Vertreter einen Sitz im Stadtrat",
      year: "2010",
      impact: "Machtteilhabe in der Exekutive"
    },
    {
      title: "Kontinuierlicher GGR-Ausbau",
      description: "Von 4 Sitzen (1995) über 7 Sitze (2002) auf 8 Sitze (2010) im Grossen Gemeinderat",
      year: "1995-2010",
      impact: "Stärkste Oppositionsfraktion"
    }
  ];

  const testimonials = [
    {
      author: "Dr. Hans Durrer",
      role: "Gründungspräsident & Ehrenpräsident",
      period: "1992, 1995-1999",
      quote: "Als wir die SVP Stadt Zug am 19. Mai 1992 gründeten, trafen wir nicht nur auf Widerstände der Linksparteien. Auch die FDP und CVP legten uns immer wieder Steine in den Weg. Heute ist die SVP Stadt Zug, als zweitstärkste Partei, nicht mehr aus dem politischen Alltag wegzudenken.",
      highlight: "Vom Exot zur zweitstärksten Kraft"
    },
    {
      author: "Toni Junas",
      role: "Präsident",
      period: "1999-2003",
      quote: "Als ich die Parteileitung übernahm, war die Partei zwar noch jung, aber erfreulich selbstbewusst und aktiv. Mir war wichtig, eigenständig zu politisieren und nicht als 'Blocher-Papageien' abgestempelt zu werden.",
      highlight: "Eigenständige Zuger Politik"
    },
    {
      author: "Dr. Manuel Brandenberg",
      role: "Präsident & Ehrenmitglied",
      period: "2007-2011",
      quote: "Unvergessen bleiben die Budgetdebatten, als wir die anderen Parteien mit unzähligen Einzelanträgen an die Grenze ihrer nervlichen Belastbarkeit brachten. Diese Politik der Aktion wurde 2010 mit einem schönen Wahlerfolg belohnt.",
      highlight: "Von 5 auf 8 GGR-Sitze"
    }
  ];

  const currentStrength = {
    ggrSeats: 8,
    kantonsratSeats: 4,
    stadtratSeats: 1,
    members: "500+",
    years: 31
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "founding": return "bg-blue-50 text-blue-700 border-blue-200";
      case "milestone": return "bg-green-50 text-green-700 border-green-200";
      case "growth": return "bg-purple-50 text-purple-700 border-purple-200";
      case "achievement": return "bg-orange-50 text-orange-700 border-orange-200";
      case "celebration": return "bg-pink-50 text-pink-700 border-pink-200";
      case "modernization": return "bg-indigo-50 text-indigo-700 border-indigo-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "founding": return Users;
      case "milestone": return Trophy;
      case "growth": return ArrowRight;
      case "achievement": return Award;
      case "celebration": return Star;
      case "modernization": return Building;
      default: return Calendar;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container-max">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <span className="text-primary font-semibold text-sm">30 Jahre Geschichte</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-svp-orange to-svp-green bg-clip-text text-transparent">
                  30 Jahre
                </span>{' '}
                «MIR LIEFERET»
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Von der Gründung am 19. Mai 1992 bis heute – die authentische Geschichte der SVP Stadt Zug. 
                Vom politischen Exot zur zweitstärksten Kraft in drei Jahrzehnten erfolgreicher Stadtpolitik.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{currentStrength.ggrSeats}</div>
                  <div className="text-sm font-medium text-muted-foreground">GGR-Sitze</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{currentStrength.stadtratSeats}</div>
                  <div className="text-sm font-medium text-muted-foreground">Stadtrat</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{currentStrength.kantonsratSeats}</div>
                  <div className="text-sm font-medium text-muted-foreground">Kantonsrat</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{currentStrength.members}</div>
                  <div className="text-sm font-medium text-muted-foreground">Mitglieder</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Story */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Die Gründung</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wie aus Unzufriedenheit mit der «Klüngelpolitik» eine neue politische Kraft entstand
              </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <div className="text-center">
                  <Badge variant="outline" className="mb-4">{foundingStory.date}</Badge>
                  <CardTitle className="text-2xl mb-2">Geburtsstunde der SVP Stadt Zug</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Die jahrzehntelange Vorherrschaft der CVP und FDP kumulierte in einer nicht haltbaren 
                    «Klüngelpolitik», die es zu sprengen galt. Die Pioniere rund um <strong>Dr. Hans Durrer</strong> waren 
                    entschlossen, nach dem klaren «Nein zum EWR» eine neue, freiheitliche, bürgerliche Politkraft zu etablieren.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Gründer</h4>
                    <p className="text-sm text-muted-foreground">{foundingStory.founders}</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Kontext</h4>
                    <p className="text-sm text-muted-foreground">{foundingStory.context}</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Vision</h4>
                    <p className="text-sm text-muted-foreground">{foundingStory.vision}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meilensteine unserer Geschichte</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Die wichtigsten Ereignisse von der Gründung bis heute
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {majorMilestones.map((milestone, index) => {
                  const IconComponent = getEventTypeIcon(milestone.type);
                  return (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index < majorMilestones.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
                      )}
                      
                      <div className="flex items-start gap-6">
                        {/* Year and Icon */}
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                            {milestone.year.slice(-2)}
                          </div>
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-2">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <Card className="flex-grow hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <CardTitle className="text-xl">{milestone.title}</CardTitle>
                                  <Badge className={getEventTypeColor(milestone.type)} variant="outline">
                                    {milestone.year}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-base text-muted-foreground mb-3">
                              {milestone.description}
                            </p>
                            <p className="text-sm text-muted-foreground italic">
                              {milestone.details}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Wichtige Erfolge</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Politische Durchbrüche, die Geschichte schrieben
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyAchievements.map((achievement, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg flex-1">{achievement.title}</CardTitle>
                      <Badge variant="secondary" className="ml-3">{achievement.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{achievement.description}</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">{achievement.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Presidents History */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Unsere Präsidenten</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Die Männer und Frauen, die unsere Partei durch drei Jahrzehnte führten
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {presidentsHistory.map((president, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground text-lg">{president.name}</h3>
                      <p className="text-sm text-muted-foreground">{president.role}</p>
                      <Badge variant="outline" className="mt-2">{president.period}</Badge>
                    </div>
                    <Separator className="my-4" />
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Hauptverdienst:</strong><br />
                      {president.achievement}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Stimmen der Zeitzeugen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ehemalige Präsidenten blicken zurück
              </p>
            </div>

            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="max-w-4xl mx-auto">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <Quote className="w-8 h-8 text-primary/40 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-foreground">{testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.period}</div>
                          </div>
                          <Badge variant="secondary">{testimonial.highlight}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container-max">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Die nächsten 30 Jahre
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Mit über drei Jahrzehnten erfolgreicher Politik blicken wir voller Zuversicht in die Zukunft. 
                Unsere bewährten Werte werden uns auch in den kommenden Jahren leiten, während wir kontinuierlich 
                hohe Ansprüche an uns stellen und uns weiterentwickeln.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/wofuer-wir-stehen">
                  <Button className="btn-hero">
                    Unsere Werte
                  </Button>
                </Link>
                <Link to="/mitglied">
                  <Button className="btn-outline">
                    Geschichte mitschreiben
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

export default Geschichte;