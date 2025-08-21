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
      title: "Aktuelle Geopolitische Herausforderungen der Schweiz",
      date: "2025-08-21",
      time: "19:00 - 21:00",
      location: "Rest. Luegisland, Finstersee/Menzingen",
      type: "Diskussion",
      target: "Öffentlich",
      description: "Diskussion über die aktuellen geopolitischen Herausforderungen, mit denen die Schweiz konfrontiert ist. Ein wichtiger Anlass zur Meinungsbildung über die Rolle der Schweiz in der internationalen Politik.",
      speaker: "Politische Experten",
      capacity: "80 Personen",
      registration: true,
      cost: "CHF 20, Mitglieder CHF 10",
      agenda: [
        "Aktuelle geopolitische Lage",
        "Herausforderungen für die Schweiz",
        "Diskussion und Fragerunde",
        "Apéro"
      ],
      contact: {
        phone: "+41 79 123 45 67",
        email: "info@svp-zug.ch"
      }
    },
    {
      id: 2,
      title: "Sommeranlass SVP Stadt Zug",
      date: "2025-08-22",
      time: "18:00 - 22:00",
      location: "Rest. Barakka, Allmendstr. 26, Zug",
      type: "Anlass",
      target: "Mitglieder",
      description: "Geselliger Sommeranlass der SVP Stadt Zug. Gemütliches Beisammensein mit politischen Gesprächen und kulinarischen Genüssen in entspannter Atmosphäre.",
      speaker: "Vorstand SVP Stadt Zug",
      capacity: "100 Personen",
      registration: true,
      cost: "CHF 35 pro Person",
      agenda: [
        "Begrüssung und Apéro",
        "Gemeinsames Abendessen",
        "Kurze politische Updates",
        "Geselliger Ausklang"
      ],
      contact: {
        phone: "+41 79 456 78 90",
        email: "sekretariat@svp-stadt-zug.ch"
      }
    },
    {
      id: 3,
      title: "Höck SVP Baar - Informative Führung durch die Kirchgemeinde Baar",
      date: "2025-09-03",
      time: "19:00 - 21:00",
      location: "Pfarreiheim, Baar",
      type: "Höck",
      target: "Öffentlich",
      description: "Informativer Höck mit einer Führung durch die Kirchgemeinde Baar. Einblicke in die Geschichte und Aktivitäten der Kirchgemeinde sowie politische Diskussionen.",
      speaker: "Vertreter der Kirchgemeinde Baar",
      capacity: "60 Personen",
      registration: false,
      cost: "Kostenlos",
      agenda: [
        "Begrüssung",
        "Führung durch die Kirchgemeinde",
        "Informationen und Diskussion",
        "Gemütlicher Ausklang"
      ],
      contact: {
        phone: "+41 79 234 56 78",
        email: "baar@svp-zug.ch"
      }
    },
    {
      id: 4,
      title: "Trump, XI und Putin: das Ende der regelbasierten Weltordnung",
      date: "2025-09-08",
      time: "19:30 - 21:30",
      location: "Mythenforum, Reichsstrasse 12, Schwyz",
      type: "Vortrag",
      target: "Öffentlich",
      description: "Hochbrisante Analyse der aktuellen Weltpolitik: Wie Trump, Xi Jinping und Putin die internationale Ordnung herausfordern und was dies für die Schweiz bedeutet.",
      speaker: "Internationale Politikexperten",
      capacity: "150 Personen",
      registration: true,
      cost: "CHF 25, Studenten CHF 15",
      agenda: [
        "Die neue Weltordnung unter Trump",
        "Chinas Rolle unter Xi Jinping",
        "Putins Strategie und Auswirkungen",
        "Diskussion und Fragerunde"
      ],
      contact: {
        phone: "+41 79 345 67 89",
        email: "events@svp-zug.ch"
      }
    },
    {
      id: 5,
      title: "Die SVP Kanton Zug am Stieremärt 2025",
      date: "2025-09-10",
      time: "10:00 - 18:00",
      location: "Festzelt Stieremärt",
      type: "Standaktion",
      target: "Öffentlich",
      description: "Besuchen Sie uns am traditionellen Stieremärt! Wir informieren über unsere politische Arbeit und stehen für Gespräche zur Verfügung. Ein wichtiger Termin für den direkten Bürgerkontakt.",
      speaker: "Kantonale und kommunale Politiker",
      capacity: "Unbegrenzt",
      registration: false,
      cost: "Kostenlos",
      agenda: [
        "Informationsstand ganztags",
        "Gespräche mit Politikern",
        "Infomaterial und Give-aways",
        "Bürgernähe am traditionellen Markt"
      ],
      contact: {
        phone: "+41 79 567 89 01",
        email: "stieremaert@svp-zug.ch"
      }
    },
    {
      id: 6,
      title: "Mitgliederversammlung SVP Kanton Zug",
      date: "2025-09-18",
      time: "19:30 - 21:30",
      location: "Rest. Schnitz & Gwunder, Steinhausen",
      type: "Versammlung",
      target: "Mitglieder",
      description: "Ordentliche Mitgliederversammlung der SVP Kanton Zug. Wichtige Entscheide, Wahlen und Informationen zur politischen Arbeit stehen auf der Tagesordnung.",
      speaker: "Kantonaler Vorstand",
      capacity: "120 Personen",
      registration: true,
      cost: "Kostenlos für Mitglieder",
      agenda: [
        "Jahresbericht und Finanzen",
        "Wahlen und Nominationen",
        "Politische Strategie",
        "Verschiedenes und Apéro"
      ],
      contact: {
        phone: "+41 79 678 90 12",
        email: "mitglieder@svp-zug.ch"
      }
    },
    {
      id: 7,
      title: "Abstimmungssonntag",
      date: "2025-09-28",
      time: "Ganztags",
      location: "Alle Gemeinden des Kantons Zug",
      type: "Abstimmung",
      target: "Alle Stimmberechtigten",
      description: "Wichtiger Abstimmungssonntag mit kantonalen und kommunalen Vorlagen. Informieren Sie sich über unsere Empfehlungen und gehen Sie stimmen!",
      speaker: "Stimmbürgerinnen und Stimmbürger",
      capacity: "Alle Stimmberechtigten",
      registration: false,
      cost: "Kostenlos",
      agenda: [
        "Stimmabgabe in den Gemeinden",
        "Auszählung der Stimmen",
        "Bekanntgabe der Resultate",
        "Politische Analyse"
      ],
      contact: {
        phone: "+41 79 789 01 23",
        email: "abstimmung@svp-zug.ch"
      }
    }
  ];

  // Past events will be populated with real historical data from the SVP website
  const pastEvents: any[] = [];

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
      type: "Diskussion",
      description: "Politische Diskussionen und Vorträge",
      frequency: "Quartalsweise",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      type: "Anlass",
      description: "Gesellige Anlässe und Networking",
      frequency: "Mehrmals jährlich",
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      type: "Höck",
      description: "Lokale Treffen und Führungen",
      frequency: "Monatlich",
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      type: "Vortrag",
      description: "Expertenbeiträge zu aktuellen Themen",
      frequency: "Bei Bedarf",
      color: "bg-orange-100 text-orange-800 border-orange-200"
    },
    {
      type: "Standaktion",
      description: "Bürgerkontakt an öffentlichen Veranstaltungen",
      frequency: "Saisonal",
      color: "bg-red-100 text-red-800 border-red-200"
    },
    {
      type: "Versammlung",
      description: "Mitgliederversammlungen und offizielle Anlässe",
      frequency: "Jährlich",
      color: "bg-indigo-100 text-indigo-800 border-indigo-200"
    },
    {
      type: "Abstimmung",
      description: "Abstimmungssonntage und politische Entscheide",
      frequency: "Bei Bedarf",
      color: "bg-teal-100 text-teal-800 border-teal-200"
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
                <SelectItem value="diskussion">Diskussion</SelectItem>
                <SelectItem value="anlass">Anlass</SelectItem>
                <SelectItem value="höck">Höck</SelectItem>
                <SelectItem value="vortrag">Vortrag</SelectItem>
                <SelectItem value="standaktion">Standaktion</SelectItem>
                <SelectItem value="versammlung">Versammlung</SelectItem>
                <SelectItem value="abstimmung">Abstimmung</SelectItem>
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