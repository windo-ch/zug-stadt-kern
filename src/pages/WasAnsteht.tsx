import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink, AlertTriangle, Users, MapPin, FileText } from 'lucide-react';

const WasAnsteht = () => {
  useEffect(() => {
    document.title = "Was ansteht - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aktuelle Termine, Veranstaltungen und wichtige politische Ereignisse der SVP Stadt Zug. Überblick über anstehende Aktivitäten.');
    }
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Aktuelle Geopolitische Herausforderungen der Schweiz",
      date: "2025-08-21",
      time: "19:00", 
      location: "Rest. Luegisland, Finstersee/Menzingen",
      type: "Vortrag",
      description: "Ein Abend zu den aktuellen politischen Entwicklungen auf internationaler Ebene"
    },
    {
      id: 2,
      title: "Sommeranlass SVP Stadt Zug",
      date: "2025-08-22",
      time: "18:30",
      location: "Rest. Barakka, Allmendstr. 26, Zug",
      type: "Anlass",
      description: "Gemütlicher Sommeranlass der SVP Stadt Zug für Mitglieder und Interessierte"
    },
    {
      id: 3,
      title: "Die SVP am Stieremärt 2025",
      date: "2025-09-10",
      time: "ganztags",
      location: "Festzelt Stieremärt",
      type: "Stand",
      description: "Besuchen Sie uns am traditionellen Zuger Stieremärt"
    },
    {
      id: 4,
      title: "Mitgliederversammlung SVP Kanton Zug",
      date: "2025-09-18",
      time: "19:30",
      location: "Rest. Schnitz & Gwunder, Steinhausen",
      type: "Versammlung",
      description: "Ordentliche Mitgliederversammlung mit wichtigen Traktanden"
    }
  ];

  const importantDates = [
    {
      date: "Ende August 2025",
      title: "Grenzschutz-Initiative Einreichung",
      description: "Einreichung der Volksinitiative «Asylmissbrauch stoppen! (Grenzschutz-Initiative)» im September - Unterschriften bis 29. August",
      type: "Initiative"
    },
    {
      date: "28. September 2025",
      title: "Abstimmungssonntag",
      description: "Eidgenössische und kantonale Abstimmungen",
      type: "Abstimmung"
    },
    {
      date: "Laufend",
      title: "Kompass Europa Initiative",
      description: "Unterschriftensammlung für die Kompass Europa Initiative läuft",
      type: "Initiative"
    }
  ];

  const recentPoliticalWork = [
    {
      title: "Motion: Jahres-Parkkarte 50% günstiger",
      status: "zur Überw.",
      description: "SVP-Motion für günstigere Parkkarten eingereicht"
    },
    {
      title: "Interpellation: Kulturhauptstadt 2030",
      status: "2948 SR", 
      description: "Gemeinsame Anfrage zur Bewerbung als Kulturhauptstadt"
    },
    {
      title: "Postulat: Stadt Zuger Honig",
      status: "Überw.",
      description: "Initiative für nachhaltige Honigproduktion gestartet"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-CH', {
      weekday: 'long',
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Aktuelles</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Was ansteht
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Bleiben Sie auf dem Laufenden über unsere kommenden Veranstaltungen, wichtige Termine 
            und aktuelle politische Aktivitäten der SVP Stadt Zug.
          </p>
        </div>

        {/* Kommende Veranstaltungen */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Kommende Veranstaltungen</h2>
            <Button variant="outline" asChild>
              <a href="/veranstaltungen">Alle Veranstaltungen</a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg text-center min-w-[60px]">
                      <div className="text-lg font-bold">{new Date(event.date).getDate()}</div>
                      <div className="text-xs">{new Date(event.date).toLocaleDateString('de-CH', { month: 'short' })}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                  <Badge variant="outline">{event.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Wichtige Termine */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Wichtige Termine</h2>
          <div className="space-y-4">
            {importantDates.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                      <div className="text-sm text-primary font-medium">{item.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Aktuelle Politische Arbeit */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Aktuelle Politische Arbeit</h2>
            <Button variant="outline" asChild>
              <a href="/vorstoesse">Alle Geschäfte</a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPoliticalWork.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">{item.title}</h3>
                      <Badge variant="outline" className="text-xs">{item.status}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call-to-Action Boxes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Bleiben Sie informiert</h3>
            <p className="text-muted-foreground mb-6">
              Abonnieren Sie unseren Newsletter für aktuelle Informationen zu Terminen und politischen Entwicklungen.
            </p>
            <Button className="btn-hero" asChild>
              <a href="/newsletter">Newsletter abonnieren</a>
            </Button>
          </div>
          
          <div className="bg-accent/5 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Mitmachen</h3>
            <p className="text-muted-foreground mb-6">
              Werden Sie Teil unserer politischen Arbeit und engagieren Sie sich für Zug.
            </p>
            <Button variant="outline" className="btn-outline" asChild>
              <a href="/mitglied-werden">Mitglied werden</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WasAnsteht;