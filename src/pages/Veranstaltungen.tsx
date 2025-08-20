import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Clock, Users, ArrowRight, Download, Phone, Mail, ExternalLink, Target } from 'lucide-react';

const Veranstaltungen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterTarget, setFilterTarget] = useState('all');

  useEffect(() => {
    document.title = "Veranstaltungen – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aktuelle Veranstaltungen und Termine der SVP Stadt Zug - Informationsanlässe, Diskussionen und politische Events.');
    }
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Bürgersprechstunde mit dem Präsidenten",
      date: "2025-02-15",
      time: "18:00 - 20:00",
      location: "Restaurant Löwen, Kolinplatz 11, Zug",
      type: "Bürgerkontakt",
      target: "Öffentlich",
      description: "Offene Sprechstunde für alle Bürgerinnen und Bürger. Bringen Sie Ihre Anliegen, Fragen und Ideen direkt vor. Eine direkte Gelegenheit zum persönlichen Gespräch mit unserer Parteiführung.",
      speaker: "Peter Kaufmann, Präsident SVP Stadt Zug",
      capacity: "Unbegrenzt",
      registration: false,
      cost: "Kostenlos",
      agenda: [
        "Begrüssung und aktuelle politische Lage",
        "Offene Fragerunde",
        "Einzelgespräche nach Bedarf",
        "Informeller Austausch bei Getränken"
      ],
      contact: {
        phone: "+41 79 123 45 67",
        email: "info@svp-stadt-zug.ch"
      }
    },
    {
      id: 2,
      title: "Abstimmungsversammlung März 2025",
      date: "2025-02-28",
      time: "19:30 - 21:30",
      location: "Burgbachsaal, Burgbachstrasse 17, Zug",
      type: "Abstimmung",
      target: "Mitglieder",
      description: "Ausführliche Diskussion und Empfehlungsbildung zu den kommenden Abstimmungsvorlagen vom 15. März 2025. Fundierte Analyse aller Vorlagen mit Expertenbeiträgen.",
      speaker: "Dr. Andrea Müller & Thomas Bachmann",
      capacity: "120 Personen",
      registration: true,
      cost: "Kostenlos für Mitglieder, CHF 10 für Gäste",
      agenda: [
        "Analyse der kantonalen Vorlagen",
        "Diskussion kommunaler Abstimmungen",
        "Empfehlungsbildung",
        "Abstimmungsstrategie besprechen"
      ],
      contact: {
        phone: "+41 79 456 78 90",
        email: "sekretariat@svp-stadt-zug.ch"
      }
    },
    {
      id: 3,
      title: "Podiumsdiskussion: Zukunft der Mobilität in Zug",
      date: "2025-03-12",
      time: "19:00 - 21:00",
      location: "Aula Kantonsschule, Lüssiweg 24, Zug",
      type: "Diskussion",
      target: "Öffentlich",
      description: "Hochkarätig besetztes Podium zur Verkehrspolitik: Wie gestalten wir die Mobilität in Zug zukunftsfähig, ohne die Wirtschaft zu belasten? Mit Experten aus Politik, Wirtschaft und Verwaltung.",
      speaker: "Diverse Experten und Politikerinnen",
      capacity: "200 Personen",
      registration: true,
      cost: "CHF 15, Studenten CHF 5",
      agenda: [
        "Impulsreferate der Podiumsteilnehmer",
        "Moderierte Diskussion",
        "Publikumsfragen",
        "Apéro und Networking"
      ],
      contact: {
        phone: "+41 79 234 56 78",
        email: "events@svp-stadt-zug.ch"
      }
    },
    {
      id: 4,
      title: "SVP Stammtisch - Frühlingsauftakt",
      date: "2025-03-20",
      time: "18:30 - 22:00",
      location: "Restaurant Ratskeller, Unter der Egg 2, Zug",
      type: "Stammtisch",
      target: "Mitglieder",
      description: "Gemütlicher Austausch unter Gleichgesinnten bei Speis und Trank. Ungezwungene Diskussionen über aktuelle politische Themen und geselliges Beisammensein.",
      speaker: "Verschiedene Vorstandsmitglieder",
      capacity: "40 Personen",
      registration: false,
      cost: "Konsumation nach Aufwand",
      agenda: [
        "Informeller Empfang",
        "Kurze politische Updates",
        "Offene Diskussionsrunden",
        "Geselliges Beisammensein"
      ],
      contact: {
        phone: "+41 79 345 67 89",
        email: "stammtisch@svp-stadt-zug.ch"
      }
    },
    {
      id: 5,
      title: "Jahreshauptversammlung 2025",
      date: "2025-04-25",
      time: "19:00 - 22:00",
      location: "Casino Zug, Dorfstrasse 1, Zug",
      type: "Versammlung",
      target: "Mitglieder",
      description: "Die wichtigste Veranstaltung des Jahres: Jahresrückblick, Wahlen, Strategieplanung und Ausblick auf die kommenden Herausforderungen. Mit anschliessendem Apéro.",
      speaker: "Gesamter Vorstand",
      capacity: "150 Personen",
      registration: true,
      cost: "Kostenlos für Mitglieder",
      agenda: [
        "Jahresbericht des Präsidenten",
        "Kassenbericht und Revisorenbericht",
        "Wahlen und Ehrungen",
        "Strategieplanung 2025/26",
        "Festlicher Apéro"
      ],
      contact: {
        phone: "+41 79 123 45 67",
        email: "hauptversammlung@svp-stadt-zug.ch"
      }
    }
  ];

  const pastEvents = [
    {
      id: 6,
      title: "Neujahrsapéro 2025",
      date: "2025-01-12",
      type: "Networking",
      attendees: 120,
      description: "Erfolgreicher Start ins neue Politjahr mit über 120 Teilnehmerinnen und Teilnehmern. Lebendige Diskussionen und neue Kontakte.",
      highlights: ["Rekord-Teilnehmerzahl", "Neue Mitglieder gewonnen", "Positive Medienberichterstattung"],
      media: ["Zuger Zeitung Artikel", "Radio Pilatus Interview"]
    },
    {
      id: 7,
      title: "Jahresversammlung 2024",
      date: "2024-11-15",
      type: "Versammlung",
      attendees: 89,
      description: "Rückblick aufs erfolgreiche Jahr und Vorstellung der Ziele für 2025. Einstimmige Entlastung des Vorstands.",
      highlights: ["Budgetgenehmigung", "Neue Statuten verabschiedet", "Ehrung langjähriger Mitglieder"],
      media: ["Livestream auf Website"]
    },
    {
      id: 8,
      title: "Abstimmungskampagne Stadtbudget",
      date: "2024-10-20",
      type: "Kampagne",
      attendees: 45,
      description: "Intensiver Wahlkampf mit Flyerverteilung und Bürgergesprächen. Erfolgreiche Mobilisierung der Basis.",
      highlights: ["5000 Flyer verteilt", "20 Standaktionen", "Positive Abstimmungsresultate"],
      media: ["TeleZüri Bericht", "Social Media Kampagne"]
    },
    {
      id: 9,
      title: "Sommerfest 2024",
      date: "2024-08-17",
      type: "Fest",
      attendees: 95,
      description: "Geselliger Anlass für Mitglieder und Familien mit Grillplausch und Aktivitäten für Kinder.",
      highlights: ["Familiärer Anlass", "Neue Gesichter kennengelernt", "Stärkung des Zusammenhalts"],
      media: ["Fotoalbum online"]
    }
  ];

  const eventStatistics = [
    {
      icon: Calendar,
      number: "24",
      label: "Events pro Jahr",
      description: "Regelmässige Veranstaltungen"
    },
    {
      icon: Users,
      number: "85",
      label: "Ø Teilnehmer",
      description: "Pro Veranstaltung"
    },
    {
      icon: Target,
      number: "95%",
      label: "Zufriedenheitsrate",
      description: "Bei Teilnehmerbefragungen"
    }
  ];

  const eventTypes = [
    {
      type: "Bürgerkontakt",
      description: "Offene Sprechstunden und Bürgergespräche",
      frequency: "Monatlich",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      type: "Abstimmung",
      description: "Versammlungen zu Abstimmungsvorlagen",
      frequency: "Bei Bedarf",
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      type: "Diskussion",
      description: "Podiumsdiskussionen zu aktuellen Themen",
      frequency: "Quartalsweise",
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      type: "Stammtisch",
      description: "Informeller Austausch unter Mitgliedern",
      frequency: "Monatlich",
      color: "bg-orange-100 text-orange-800 border-orange-200"
    }
  ];

  const filteredUpcoming = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || event.type.toLowerCase() === filterType;
    const matchesTarget = filterTarget === 'all' || event.target.toLowerCase().includes(filterTarget.toLowerCase());
    return matchesSearch && matchesType && matchesTarget;
  });

  const filteredPast = pastEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || event.type.toLowerCase() === filterType;
    return matchesSearch && matchesType;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-CH', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeBadge = (type: string) => {
    const eventType = eventTypes.find(et => et.type === type);
    return (
      <Badge className={eventType?.color || "bg-gray-100 text-gray-800 border-gray-200"}>
        {type}
      </Badge>
    );
  };

  const getTargetAudienceBadge = (target: string) => {
    const isPublic = target.toLowerCase().includes('öffentlich');
    return (
      <Badge variant={isPublic ? "default" : "secondary"}>
        {target}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Veranstaltungen & Events</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere Veranstaltungen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Treffen Sie uns persönlich bei unseren politischen Anlässen und Bürgergesprächen. 
            Direkte Demokratie zum Anfassen - von Bürgersprechstunden bis zu Podiumsdiskussionen.
          </p>
        </div>

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {eventStatistics.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Event Types Overview */}
        <section className="mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Unsere Veranstaltungstypen</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                {eventTypes.map((type, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={type.color}>
                        {type.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{type.frequency}</span>
                    </div>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Veranstaltung suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Veranstaltungstyp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Typen</SelectItem>
                <SelectItem value="bürgerkontakt">Bürgerkontakt</SelectItem>
                <SelectItem value="abstimmung">Abstimmung</SelectItem>
                <SelectItem value="diskussion">Diskussion</SelectItem>
                <SelectItem value="stammtisch">Stammtisch</SelectItem>
                <SelectItem value="versammlung">Versammlung</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterTarget} onValueChange={setFilterTarget}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Zielgruppe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Zielgruppen</SelectItem>
                <SelectItem value="öffentlich">Öffentlich</SelectItem>
                <SelectItem value="mitglieder">Nur Mitglieder</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Kommende Veranstaltungen
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Vergangene Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-8">
            <div className="space-y-6">
              {filteredUpcoming.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">Keine kommenden Veranstaltungen gefunden.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredUpcoming.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-4 gap-8">
                        {/* Date and Time Card */}
                        <div className="lg:col-span-1">
                          <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                            <div className="text-2xl font-bold mb-1">
                              {new Date(event.date).getDate()}
                            </div>
                            <div className="text-sm opacity-90 mb-3">
                              {new Date(event.date).toLocaleDateString('de-CH', { month: 'long', year: 'numeric' })}
                            </div>
                            <div className="text-sm opacity-90 mb-2">
                              <Clock className="w-4 h-4 inline mr-1" />
                              {event.time}
                            </div>
                            <div className="text-xs opacity-80">
                              <MapPin className="w-3 h-3 inline mr-1" />
                              {event.location.split(',')[0]}
                            </div>
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="lg:col-span-2">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                            <div className="flex space-x-2">
                              {getEventTypeBadge(event.type)}
                              {getTargetAudienceBadge(event.target)}
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{event.description}</p>

                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div>
                              <span className="font-medium">Referent:</span>
                              <p className="text-muted-foreground">{event.speaker}</p>
                            </div>
                            <div>
                              <span className="font-medium">Kapazität:</span>
                              <p className="text-muted-foreground">{event.capacity}</p>
                            </div>
                            <div>
                              <span className="font-medium">Kosten:</span>
                              <p className="text-muted-foreground">{event.cost}</p>
                            </div>
                            <div>
                              <span className="font-medium">Anmeldung:</span>
                              <p className="text-muted-foreground">
                                {event.registration ? "Erforderlich" : "Nicht erforderlich"}
                              </p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-medium mb-2">Programm:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {event.agenda.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Contact and Actions */}
                        <div className="lg:col-span-1">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium mb-2">Kontakt</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  <a href={`tel:${event.contact.phone}`} className="hover:text-primary transition-colors">
                                    {event.contact.phone}
                                  </a>
                                </div>
                                <div className="flex items-center">
                                  <Mail className="w-4 h-4 mr-2" />
                                  <a href={`mailto:${event.contact.email}`} className="hover:text-primary transition-colors">
                                    {event.contact.email}
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              {event.registration ? (
                                <Button className="w-full">
                                  Jetzt anmelden
                                </Button>
                              ) : (
                                <Button variant="outline" className="w-full">
                                  Weitere Infos
                                </Button>
                              )}
                              <Button variant="outline" size="sm" className="w-full">
                                <Download className="w-4 h-4 mr-2" />
                                ICS Download
                              </Button>
                            </div>

                            <div className="text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3 inline mr-1" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPast.length === 0 ? (
                <Card className="md:col-span-2">
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">Keine vergangenen Veranstaltungen gefunden.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredPast.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(event.date)}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getEventTypeBadge(event.type)}
                          <Badge variant="outline">
                            <Users className="w-3 h-3 mr-1" />
                            {event.attendees}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {event.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {event.media.length > 0 && (
                        <div>
                          <h4 className="font-medium text-sm mb-2">Medien:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.media.map((media, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                {media}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="bg-primary/5 rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Verpassen Sie keine Veranstaltung
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bleiben Sie über alle unsere Termine auf dem Laufenden. Abonnieren Sie unseren Newsletter 
            oder laden Sie unseren Kalender direkt in Ihre Kalender-App.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/newsletter" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Newsletter abonnieren
            </a>
            <Button variant="outline" className="inline-flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Alle Termine als ICS
            </Button>
            <a 
              href="/kontakt" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Event vorschlagen
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Veranstaltungen;