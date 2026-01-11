import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import CTASection from '@/components/ctas/CTASection';
import { Calendar, Users, Building, Trophy, Star, ArrowRight, CheckCircle, Quote, Clock, Award, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const Geschichte = () => {
  const [activeDecade, setActiveDecade] = useState<string>('1990s');

  const foundingStory = {
    date: "19. Mai 1992",
    founders: "Dr. Hans Durrer und Mitstreiter",
    context: "Unzufriedenheit mit den 'alten Parteien' und dem klaren 'Nein zum EWR'",
    vision: "Klare Politik und starker Gestaltungswille für die Stadt Zug",
    initialMembers: 25,
    motivation: "Jahrzehntelange Vorherrschaft der CVP und FDP in nicht haltbarer 'Klüngelpolitik'"
  };

  const decades = {
    '1990s': {
      title: 'Die Gründerzeit (1990er)',
      color: 'bg-blue-50 border-blue-200',
      events: [
        {
          year: "1992",
          title: "Gründung der SVP Stadt Zug",
          description: "Am 19. Mai 1992 wurde die SVP Stadt Zug als vierte Ortssektion des Kantons gegründet",
          details: "Die Pioniere rund um Dr. Hans Durrer etablierten eine neue, freiheitliche, bürgerliche Politkraft. Als die Stadtpartei vor 30 Jahren gegründet wurde, war sie ein Exot - ein Produkt konservativer und liberaler Kräfte.",
          impact: "Startschuss für neue politische Ära"
        },
        {
          year: "1994",
          title: "Erste Wahlerfolge",
          description: "Jean-Paul Flachsmann wird als erster Kantonsrat der SVP Stadt Zug gewählt",
          details: "Für die Legislatur 1995–1998 erreichte die SVP erstmals eindrückliche vier Sitze im Grossen Gemeinderat (GGR). Ein wichtiger Meilenstein nach nur zwei Jahren Bestehen.",
          impact: "Etablierung im politischen System"
        },
        {
          year: "1998",
          title: "Steigerung auf fünf GGR-Sitze",
          description: "In der zweiten Legislatur konnte der Sitzanteil von vier auf fünf Sitze gesteigert werden",
          details: "Kontinuierliches Wachstum und zunehmende Akzeptanz bei der Zuger Bevölkerung zeigten die Richtigkeit des eingeschlagenen Weges.",
          impact: "Festigung der Position"
        }
      ]
    },
    '2000s': {
      title: 'Der Aufstieg (2000er)',
      color: 'bg-green-50 border-green-200',
      events: [
        {
          year: "2002",
          title: "Ausbau auf sieben GGR-Sitze",
          description: "Steigerung auf beeindruckende sieben Vertreter im Grossen Gemeinderat",
          details: "Der kontinuierliche Ausbau der politischen Präsenz bestätigte den Vertrauensvorschuss der Zuger Bevölkerung. Die SVP etablierte sich als feste Groesse.",
          impact: "Starke Oppositionsfraktion"
        },
        {
          year: "2006",
          title: "Rückschlag durch Listenverbindung",
          description: "Zwei GGR-Sitze gingen nach erstmaliger Listenverbindung der Linken verloren",
          details: "Jürg Messmer übernahm von Roland Neuner die Parteileitung. Im gleichen Wahljahr musste die SVP auch ihren vierten Sitz im Kantonsrat abgeben. Ein Lernmoment für zukünftige Strategien.",
          impact: "Strategische Neuausrichtung nötig"
        }
      ]
    },
    '2010s': {
      title: 'Der Durchbruch (2010er)',
      color: 'bg-orange-50 border-orange-200',
      events: [
        {
          year: "2010",
          title: "Historischer Durchbruch",
          description: "André Wicki erobert als erster SVP-Vertreter einen Sitz im Stadtrat",
          details: "Die GGR-Fraktion steigerte sich von fünf auf acht Sitze. Die FDP verlierte drei Sitze. Nach intensivem Wahlkampf mit legendären Ereignissen wurde die Politik der Aktion belohnt.",
          impact: "Machtbeteiligung in der Exekutive"
        },
        {
          year: "2010",
          title: "Initiative gegen 'goldene Fallschirme'",
          description: "Die Volksinitiative 'Schluss mit goldenen Fallschirmen für Stadträte' wird mit 57,5% JA angenommen",
          details: "Ein historischer Abstimmungssieg der SVP Stadt Zug mit nationaler Ausstrahlung. Das Zuger Volk nahm die Initiative gegen die Empfehlung des GGR an.",
          impact: "Erster grosser Volkserfolg"
        },
        {
          year: "2012",
          title: "20-jähriges Jubiläum",
          description: "Grosse Feier mit Bundesrat Ueli Maurer als Ehrengast",
          details: "Die Stadtpartei feierte im Mai 2012 ihr 20-jähriges Bestehen mit einer würdigen Veranstaltung, die die Erfolge der ersten zwei Jahrzehnte würdigte.",
          impact: "Anerkennung auf nationaler Ebene"
        },
        {
          year: "2014",
          title: "Verteidigung aller Sitze",
          description: "Bei den Wahlen 2014 gelang es erstmals, alle bisherigen Sitze zu verteidigen",
          details: "Die Premiere einer bürgerlichen Allianz BS14! war zwar ernüchternd, da kein zweiter Stadtratssitz gewonnen werden konnte, aber die SVP errang einen zweiten GPK-Sitz.",
          impact: "Stabilisierung der Macht"
        },
        {
          year: "2017",
          title: "25-Jahr-Feier als Politgrossereignis",
          description: "Alle Fraktionspräsidenten der bürgerlichen Stadtparteien und drei Regierungsräte nahmen teil",
          details: "Unvergessen bleiben die Laudatoren: Regierungsrat Heinz Tännler und Nationalrat Roger Köppel sowie das Grusswort des Gründers Dr. Hans Durrer.",
          impact: "Politische Anerkennung aller Parteien"
        }
      ]
    },
    '2020s': {
      title: 'Die Moderne Ära (2020er)',
      color: 'bg-purple-50 border-purple-200',
      events: [
        {
          year: "2020",
          title: "Neue Ära mit 'MIR LIEFERET!'",
          description: "Gregor R. Bruhin übernimmt Präsidium mit stringenterem Parteiprogramm",
          details: "Mit dem Versprechen 'MIR LIEFERET!' wurde das Profil und die Verpflichtung an die Wählerschaft nochmals geschärft. Trotz Corona blieb die SVP präsent.",
          impact: "Moderne Neuausrichtung"
        },
        {
          year: "2022",
          title: "30 Jahre erfolgreiche Politik",
          description: "Drei Jahrzehnte erfolgreiche Bürgerpolitik für die Stadt Zug",
          details: "Von der Gründung als politischer Exot zur zweitstärksten politischen Kraft in Zug - eine beispiellose Erfolgsgeschichte der Schweizer Kommunalpolitik.",
          impact: "Etablierte politische Groesse"
        }
      ]
    }
  };

  const keyFigures = [
    {
      name: "Dr. Hans Durrer",
      role: "Gründungspräsident & Ehrenpräsident",
      period: "1992, 1995-1999",
      achievements: [
        "Gründung der SVP Stadt Zug am 19. Mai 1992",
        "Aufbau der Parteistrukturen von Grund auf",
        "Spiritus Rector bei Gründung zahlreicher SVP-Ortssektionen im Kanton"
      ],
      quote: "Heute ist die SVP Stadt Zug, als zweitstärkste Partei, nicht mehr aus dem politischen Alltag wegzudenken.",
      legacy: "Ehrenbürgerrecht Nr. 7 und 8 der Gemeinde Walchwil (2022)"
    },
    {
      name: "Toni Junas",
      role: "Präsident",
      period: "1999-2003",
      achievements: [
        "Eigenständige Zuger Politik - nicht als 'Blocher-Papageien'",
        "Volksabstimmung gegen modernes Stadtlogo",
        "Festigung der lokalen Identität"
      ],
      quote: "Diese Geisteshaltung kommt für mich nicht in Frage - wir wollen eigenständig politisieren.",
      legacy: "Etablierung der SVP als unabhängige Kraft"
    },
    {
      name: "Dr. Manuel Brandenberg",
      role: "Präsident & Ehrenmitglied",
      period: "2007-2011",
      achievements: [
        "Initiative 'Schluss mit goldenen Fallschirmen' - 57,5% JA",
        "Steigerung von 5 auf 8 GGR-Sitze (2010)",
        "Erster Stadtratssitz für André Wicki"
      ],
      quote: "Diese Politik der Aktion wurde nach einem intensiven Wahlkampf 2010 mit einem schönen Wahlerfolg belohnt.",
      legacy: "Erster historischer Abstimmungssieg"
    },
    {
      name: "André Wicki",
      role: "Stadtrat",
      period: "seit 2011",
      achievements: [
        "Erster SVP-Stadtrat in der Geschichte",
        "Kontinuierliche Wiederwahl",
        "Führungsrolle in der Stadtentwicklung"
      ],
      quote: "Gemeinsam können wir Berge versetzen - der Stadtrat muss geeinter auftreten.",
      legacy: "Dauerhaftes SVP-Mandat in der Exekutive"
    }
  ];

  const politicalMilestones = [
    {
      title: "Volksinitiative gegen Abgangsentschädigungen",
      year: "2010",
      result: "57,5% JA-Stimmen",
      significance: "Erster historischer Abstimmungssieg mit nationaler Ausstrahlung",
      context: "Das Zuger Volk nahm die Initiative gegen die Empfehlung des GGR an"
    },
    {
      title: "Aufstieg zur zweitstärksten Kraft",
      year: "1992-2022",
      result: "Von Exot zur Macht",
      significance: "30 Jahre kontinuierlicher politischer Aufstieg",
      context: "Zweitstärkste politische Kraft in der Stadt Zug"
    },
    {
      title: "Erster Stadtratssitz",
      year: "2010",
      result: "André Wicki gewählt",
      significance: "Erstmalige Beteiligung an der Stadtregierung",
      context: "Nach 18 Jahren Opposition endlich in der Exekutive"
    },
    {
      title: "Kontinuierlicher GGR-Ausbau",
      year: "1995-2010",
      result: "4 → 7 → 8 Sitze",
      significance: "Stärkste Oppositionsfraktion im Parlament",
      context: "Verdopplung der Sitze in 15 Jahren"
    }
  ];

  const externalTestimonials = [
    {
      author: "Benny Elsener",
      party: "Die Mitte – Stadt Zug",
      quote: "Ich bin euch SVPlern dankbar für das grosse Engagement, die Marke Schweiz zu wertschätzen und zu verteidigen. Unser Land darf nicht weiterverkauft werden!",
      context: "Kantons- und Gemeinderat"
    },
    {
      author: "Stefan Hodel",
      party: "Alternative – die Grünen Stadt Zug",
      quote: "Die Vielfalt in der GGR-Fraktion der SVP ist gross, vom jungen, sehr engagierten Gregor mit grossen Ambitionen bis zu Philip C., der seine Unabhängigkeit bewahrt hat.",
      context: "Fraktionschef"
    },
    {
      author: "Ueli Straub",
      party: "FDP – Stadt Zug",
      quote: "Bei der SVP Zug steht es anders: die Zuger Vertreter sind in der Regel liberal positioniert und haben wesentlichen Geschäften die notwendige Aufmerksamkeit gewidmet.",
      context: "Alt Präsident und Stadtrat"
    }
  ];


  return (
    <PageLayout 
      title="30 Jahre Geschichte - SVP Stadt Zug"
      description="30 Jahre SVP Stadt Zug - Von der Gründung 1992 bis heute. Entdecken Sie die authentische Geschichte unserer Partei."
    >
      <main>
        {/* Hero Section with Enhanced Graphics */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="./assets/places/zug/zug-overview-svp_2.jpg" 
              alt="Zug Stadt Überblick - Historischer Hintergrund" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-max relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Clock className="w-4 h-4 mr-2 text-primary animate-pulse" />
                <span className="text-primary font-semibold text-sm">30 Jahre Geschichte</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-svp-green-light to-svp-green bg-clip-text text-transparent animate-scale-in">
                  30 Jahre
                </span>{' '}
                <span className="bg-gradient-to-r from-svp-green to-svp-green-light bg-clip-text text-transparent">«MIR LIEFERET»</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 animate-fade-in">
                Von der Gründung am 19. Mai 1992 bis heute – die authentische Geschichte der SVP Stadt Zug. 
                Vom politischen Exot zur zweitstärksten Kraft in drei Jahrzehnten erfolgreicher Stadtpolitik.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm font-medium text-muted-foreground">GGR-Sitze</div>
                </div>
                <div className="text-center hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-sm font-medium text-muted-foreground">Stadtrat</div>
                </div>
                <div className="text-center hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm font-medium text-muted-foreground">Kantonsrat</div>
                </div>
                <div className="text-center hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm font-medium text-muted-foreground">Mitglieder</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Founding Story */}
        <Section>
          <SectionHeader
            title="Die Gründungsgeschichte"
            description="Wie aus Unzufriedenheit mit der «Klüngelpolitik» eine neue politische Kraft entstand"
            alignment="center"
            className="mb-12"
          />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src="./assets/places/zug/zug-altstadt-svp_1.jpg" 
                  alt="Zug Altstadt - Wo die SVP Stadt Zug gegründet wurde" 
                  className="w-full rounded-lg shadow-lg hover-scale"
                />
              </div>
              
              <Card className="card-hover animate-fade-in">
                <CardHeader>
                  <div className="text-center">
                    <Badge variant="outline" className="mb-4">{foundingStory.date}</Badge>
                    <CardTitle className="text-2xl mb-2">Geburtsstunde der SVP Stadt Zug</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                    "Die jahrzehntelange Vorherrschaft der CVP und FDP kumulierte in einer nicht haltbaren 
                    «Klüngelpolitik», die es zu sprengen galt."
                  </blockquote>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">{foundingStory.initialMembers}</div>
                      <div className="text-sm text-muted-foreground">Gründungsmitglieder</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">4</div>
                      <div className="text-sm text-muted-foreground">Ortssektion im Kanton</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>

        {/* Interactive Timeline by Decades */}
        <Section variant="muted">
          <div className="text-center mb-12">
            <SectionHeader
              title="Interaktive Zeitreise"
              description="Entdecken Sie drei Jahrzehnte Politik - klicken Sie auf eine Dekade um die Geschichte zu erkunden"
              alignment="center"
            />
          </div>

            {/* Enhanced Decade Selector */}
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-2 bg-gradient-to-r from-muted/50 to-muted rounded-xl shadow-soft">
                {Object.entries(decades).map(([key, decade]) => (
                  <button
                    key={key}
                    onClick={() => setActiveDecade(key)}
                    className={`px-6 py-4 rounded-lg text-sm font-semibold transition-all duration-300 hover-scale ${
                      activeDecade === key 
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-medium transform scale-105' 
                        : 'bg-white/70 text-muted-foreground hover:text-foreground hover:bg-white hover:shadow-soft'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-lg">{decade.title.split('(')[1].replace(')', '')}</div>
                      <div className="text-xs opacity-75 mt-1">{decade.events.length} Ereignisse</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Decade Content */}
            <div className="max-w-4xl mx-auto">
              <Card className={`${decades[activeDecade].color} animate-fade-in`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{decades[activeDecade].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {decades[activeDecade].events.map((event, index) => (
                      <div 
                        key={index} 
                        className="bg-white/50 rounded-lg p-6 hover:bg-white/70 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                              {event.year.slice(-2)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                {event.title}
                              </h3>
                              <Badge variant="outline">{event.year}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{event.description}</p>
                            <p className="text-sm text-muted-foreground italic mb-2">{event.details}</p>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm font-medium text-green-700">{event.impact}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>

        {/* Key Figures with Expanded Profiles */}
        <Section>
          <SectionHeader
            title="Prägende Persönlichkeiten"
            description="Die Menschen, die unsere Partei durch drei Jahrzehnte prägten"
            alignment="center"
            className="mb-12"
          />

            <div className="grid md:grid-cols-2 gap-8">
              {keyFigures.map((figure, index) => (
                <Card key={index} className="card-hover animate-fade-in">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{figure.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{figure.role}</p>
                        <Badge variant="outline" className="mt-2">{figure.period}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary pl-4 mb-4">
                      "{figure.quote}"
                    </blockquote>
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`figure-${index}`}>
                        <AccordionTrigger>Wichtigste Errungenschaften</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {figure.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          <Separator className="my-4" />
                          <p className="text-sm text-muted-foreground">
                            <strong>Vermächtnis:</strong> {figure.legacy}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

        {/* Political Achievements with Visual Impact */}
        <Section variant="muted">
          <SectionHeader
            title="Politische Meilensteine"
            description="Durchbrüche, die Geschichte schrieben"
            alignment="center"
            className="mb-12"
          />

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src="./assets/places/zug/zug-overview-svp_3.jpg" 
                  alt="Zug Stadt Überblick - Zeugnis politischer Erfolge" 
                  className="w-full rounded-lg shadow-lg hover-scale"
                />
              </div>
              
              <div className="space-y-6">
                {politicalMilestones.map((milestone, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Trophy className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                            <Badge variant="secondary">{milestone.year}</Badge>
                          </div>
                          <p className="text-muted-foreground text-sm mb-2">{milestone.context}</p>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium text-primary">{milestone.result}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{milestone.significance}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

        {/* External Testimonials */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Stimmen von Mitbewerbern</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Was andere Parteien über die SVP Stadt Zug sagen
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {externalTestimonials.map((testimonial, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <Quote className="w-8 h-8 text-primary/40 mx-auto mb-4" />
                    <blockquote className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.context}</div>
                      <Badge variant="outline" className="mt-2">{testimonial.party}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Context: Zug im Rückblick */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Zug im historischen Rückblick</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Die historischen Grundlagen für die heutige Erfolgsgeschichte der Stadt
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">Die Grundlagen des Erfolgs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Die Stadt Zug hatte im historischen Rückblick immer auch Glück. Gepaart mit Geschick, 
                    entstand daraus eine Erfolgsgeschichte. Vorab das Glück, schon 1352 als Stand in der 
                    Eidgenossenschaft dabei gewesen zu sein, gleichberechtigt neben dem mächtigen Zürich.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">1352</div>
                      <div className="text-sm text-muted-foreground">Beitritt zur Eidgenossenschaft</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">1864</div>
                      <div className="text-sm text-muted-foreground">Anschluss ans Bahnnetz</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">Industrielle Entwicklung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Erst ab Mitte des 19. Jahrhunderts begann die Stadt richtig zu wachsen. Die Industrialisierung 
                    erfolgte ab 1880 mit der Gründung der Metallwarenfabrik Zug, 1896 folgte Landis & Gyr, 
                    1913 die heutige V-Zug AG.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">1880: Metallwarenfabrik Zug</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">1896: Landis & Gyr</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">1913: V-Zug AG</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Speed Interviews with Key Figures */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Vier Speed-Interviews</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unsere führenden Politiker im Schnellinterview
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* André Wicki */}
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle>André Wicki</CardTitle>
                      <p className="text-sm text-muted-foreground">Stadtrat seit 2011</p>
                      <Badge variant="outline">«Der Stadtpräsident»</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="wicki-interview">
                      <AccordionTrigger>Seine Vision für Zug</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Der Stadt Zug Sorge tragen:</h4>
                          <p className="text-sm text-muted-foreground">
                            Arbeiten wir weiter an Moderne und Tradition. Stärken wir unser Schulsystem und 
                            beenden das Manko an Fachkräuten. Zug hat super Schulen auf allen Stufen.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Wirtschaft & Soziales:</h4>
                          <p className="text-sm text-muted-foreground">
                            Geht es der Wirtschaft gut, geht es allen gut. Ein Unternehmen ist die grösste 
                            selbsttragende, soziale Institution. Aber ich will hier kein «Monaco».
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Persönliches Ziel:</h4>
                          <p className="text-sm text-muted-foreground italic">
                            "Das will ich erleben: AC/DC in Zug vor 25'000 Zuschauern mit Angus Young der schreit: 'Zug Rocks'!"
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Heinz Tännler */}
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Heinz Tännler</CardTitle>
                      <p className="text-sm text-muted-foreground">Regierungsrat seit 2007</p>
                      <Badge variant="outline">«Der General»</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="taennler-interview">
                      <AccordionTrigger>Führungsphilosophie</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Führung:</h4>
                          <p className="text-sm text-muted-foreground">
                            Zu Führung gehört auch, sich mit den richtigen Mitarbeitern zu umgeben. 
                            Dann kann man sehr viel Vertrauen schenken.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Innovation:</h4>
                          <p className="text-sm text-muted-foreground">
                            Ich bin fasziniert von den Möglichkeiten der Blockchain-Technologie und 
                            verfolge deren Entwicklung mit grossem Interesse.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Zukunftsorientierung:</h4>
                          <p className="text-sm text-muted-foreground">
                            Da ich mich vorwärts orientiere, liegt mir Raumschiff Enterprise näher als Bonanza.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Adrian Risi */}
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Adrian Risi</CardTitle>
                      <p className="text-sm text-muted-foreground">Kantonsrat seit 2019</p>
                      <Badge variant="outline">«Der Brückenbauer»</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="risi-interview">
                      <AccordionTrigger>Politik & Kompromisse</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Kompromisse:</h4>
                          <p className="text-sm text-muted-foreground">
                            Ich brauchte lange um zu verstehen, dass es nur mit Kompromissen funktioniert. 
                            In der Politik gilt das Prinzip des kleinsten gemeinsamen Nenners.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Infrastruktur:</h4>
                          <p className="text-sm text-muted-foreground">
                            Es braucht eine Symbiose. Unser Velowegsystem hat bereits 256 km und ist hervorragend.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* GGR Representative */}
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle>GGR-Fraktion</CardTitle>
                      <p className="text-sm text-muted-foreground">Grosser Gemeinderat</p>
                      <Badge variant="outline">«Die Kämpfer»</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="ggr-interview">
                      <AccordionTrigger>Politische Haltung</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Taktik:</h4>
                          <p className="text-sm text-muted-foreground">
                            Es braucht beides! Du musst hart in der Sache sein, um den freiheitlichen 
                            Standpunkt gegen alle Widerstände zu verteidigen. Tag für Tag: das ist unser Job!
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Traditionen:</h4>
                          <p className="text-sm text-muted-foreground">
                            Wir sind lokal verwurzelt, aber auch sehr weltoffen. Wir schätzen Bewährtes, 
                            sind aber auch bereit für Neues!
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 2022 Candidates Showcase */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Die Kandidaten von 2022</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Diese Kandidaten stellten sich am 2. Oktober 2022 zur Wahl
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Melanie Balasopulos", status: "NEU", role: "GGR-Kandidatin" },
                { name: "Oliver Birchmeier", status: "NEU", role: "Kantonsrat" },
                { name: "Gregor R. Bruhin", status: "BISHERIG", role: "Kantonsrat" },
                { name: "Philip C. Brunner", status: "BISHERIG", role: "Kantonsrat" },
                { name: "Marcus Bühler", status: "NEU", role: "GGR-Kandidat" },
                { name: "Thomas Dubach", status: "BISHERIG", role: "GGR & Kantonsrat" },
                { name: "Daniel Gramm", status: "NEU", role: "GGR-Kandidat" },
                { name: "Alexandra Gretener", status: "NEU", role: "Kantonsrätin" },
                { name: "René Gretener", status: "NEU", role: "GGR-Kandidat" },
                { name: "Roman Küng", status: "BISHERIG", role: "GGR & Kantonsrat" },
                { name: "Dominique Messmer", status: "NEU", role: "Kantonsrat" },
                { name: "Norbert Schlumpf", status: "NEU", role: "GGR-Kandidat" },
                { name: "Alex Odermatt", status: "BISHERIG", role: "GGR-Mitglied" },
                { name: "Meinrad Odermatt", status: "NEU", role: "Kantonsrat" },
                { name: "Manfred Pircher", status: "BISHERIG", role: "GGR-Mitglied" },
                { name: "Raphael Tschan", status: "NEU", role: "Kantonsrat" },
                { name: "Niko Trlin", status: "NEU", role: "GGR-Kandidat" },
                { name: "Bruno Zimmermann", status: "BISHERIG", role: "GGR-Mitglied" }
              ].map((candidate, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{candidate.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{candidate.role}</p>
                    <Badge 
                      variant={candidate.status === "NEU" ? "default" : "secondary"} 
                      className="text-xs"
                    >
                      {candidate.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* City Wishes - "Simsalabim" */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">«Simsalabim» – Wünsche für die Stadt Zug</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Was sich unsere Mitglieder und Sympathisanten für Zug wünschen
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  author: "Thomas Dubach",
                  role: "GGR & Kantonsrat",
                  wish: "Ich wünsche mir ein atmosphärisch ansprechendes Lokal an der Seepromenade, bei welchem ein durchdachtes Konzept dahintersteckt. The new place to be!"
                },
                {
                  author: "Dr. Beat Bühlmann",
                  role: "VR & CEO",
                  wish: "Ganz allgemein wieder mehr Rücksicht und Respekt in allen Belangen – Abfall, Lärm, Verkehr, Schweizer Kultur. Kurzum: Zuerst «geben», dann «nehmen»!"
                },
                {
                  author: "Kathi Büttel",
                  role: "Präsidentin Junge SVP Zug",
                  wish: "Es wäre toll, wenn das Feuerwerk am Seenachtsfest Zug bleibt."
                },
                {
                  author: "Regula Ernst",
                  role: "Geschäftsführerin",
                  wish: "Die hässlichen schwarzen Abfallkübel, welche die Seepromenade verschandeln, sollten durch eine hübschere Variante ersetzt werden. Die Stadt Zug kann das besser!"
                },
                {
                  author: "Regula Kaiser",
                  role: "Stadtentwicklung Zug",
                  wish: "Ich wünsche mir eine entspannte Atmosphäre in der Einkaufsmeile: Bäume, Bänkli, Blumen, Pavillons, Wasserspiele, Lichtkunst, Musik!"
                },
                {
                  author: "Reto Kaufmann",
                  role: "Pfarrer",
                  wish: "Traditionsbewusst und weltoffen, solidarisch und tolerant, sozial und gerecht – ein Stück Himmel auf Erden."
                },
                {
                  author: "Luca Schenk",
                  role: "Unternehmer",
                  wish: "Die Breite der Autos hat zugenommen, die der Parkplätze nicht. Ich wünsche mir: Breitere Parkplätze oder Cabriopflicht!"
                },
                {
                  author: "Lukas Fürrer",
                  role: "Generalsekretär",
                  wish: "Ich wünsche mir mehr Sekschüler."
                },
                {
                  author: "Claudia Wirz",
                  role: "Journalistin",
                  wish: "Ich bin wunschlos glücklich hier. In Zug habe ich Unternehmergeist, Offenheit und Bürgernähe gefunden. Ich hoffe, dass Zug so bleibt!"
                }
              ].map((item, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <Quote className="w-6 h-6 text-primary/40 mb-3" />
                    <blockquote className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                      "{item.wish}"
                    </blockquote>
                    <div className="border-t border-border pt-3">
                      <div className="font-semibold text-foreground text-sm">{item.author}</div>
                      <div className="text-xs text-muted-foreground">{item.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Political Structure Overview */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Politische Struktur heute</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Übersicht der politischen Gremien mit SVP-Beteiligung
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <div className="text-center">
                    <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>Grosser Gemeinderat</CardTitle>
                    <p className="text-sm text-muted-foreground">Legislative der Stadt Zug</p>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground mb-4">SVP-Sitze</div>
                  <Badge variant="secondary">Zweitgrösste Fraktion</Badge>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="text-center">
                    <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>Stadtrat</CardTitle>
                    <p className="text-sm text-muted-foreground">Exekutive der Stadt Zug</p>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-sm text-muted-foreground mb-4">SVP-Sitz</div>
                  <Badge variant="secondary">André Wicki</Badge>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="text-center">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>Kantonsrat</CardTitle>
                    <p className="text-sm text-muted-foreground">Kantonale Legislative</p>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground mb-4">SVP-Sitze</div>
                  <Badge variant="secondary">Starke Vertretung</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Future Vision with Call to Action */}
        <CTASection
          title="Die nächsten 30 Jahre gestalten"
          description="Mit über drei Jahrzehnten erfolgreicher Politik blicken wir voller Zuversicht in die Zukunft. In 10 Jahren, beim 40-jährigen Jubiläum, wollen wir zusätzliche Meilensteine als Erfolge ausweisen können. Heute braucht es die SVP noch mehr als vor 30 Jahren!"
          variant="gradient"
          className="!bg-gradient-to-r !from-primary/10 !to-secondary/10"
          primaryButton={{
            text: "Unsere Werte",
            href: "/wofuer-wir-stehen",
            variant: "primary",
            icon: Trophy
          }}
          secondaryButton={{
            text: "Geschichte mitschreiben",
            href: "/mitglied",
            variant: "outline",
            icon: Users
          }}
        />
      </main>
    </PageLayout>
  );
};

export default Geschichte;