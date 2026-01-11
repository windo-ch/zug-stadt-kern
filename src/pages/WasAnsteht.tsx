import PageLayout from '@/components/layout/PageLayout';
import EventCard from '@/components/content/EventCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink, AlertTriangle, Users, MapPin, FileText } from 'lucide-react';

const WasAnsteht = () => {

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
    <PageLayout 
      title="Was ansteht - SVP Stadt Zug"
      description="Aktuelle Termine, Veranstaltungen und wichtige politische Ereignisse der SVP Stadt Zug. Überblick über anstehende Aktivitäten."
    >
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
              <a href="https://www.svp-zug.ch/termine/" target="_blank" rel="noopener noreferrer">Alle Veranstaltungen</a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={{
                  id: event.id.toString(),
                  title: event.title,
                  date: event.date,
                  time: event.time,
                  location: event.location,
                  type: event.type,
                  description: event.description
                }}
                variant="default"
              />
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

        {/* External Links Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Weitere Informationen</h3>
          <p className="text-blue-800 mb-4">
            Für umfassende Veranstaltungen und aktuelle Medienmitteilungen besuchen Sie die Hauptseite der SVP Kanton Zug:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100" asChild>
              <a href="https://www.svp-zug.ch/termine/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Alle Veranstaltungen
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100" asChild>
              <a href="https://www.svp-zug.ch/home-2/publikationen/medienmitteilungen/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Medienmitteilungen
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </Button>
          </div>
        </div>

        {/* Call-to-Action Boxes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Kontakt aufnehmen</h3>
            <p className="text-muted-foreground mb-6">
              Haben Sie Fragen zu unseren Terminen oder möchten Sie mehr erfahren?
            </p>
            <Button className="btn-hero" asChild>
              <a href="/kontakt">Kontakt</a>
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
    </PageLayout>
  );
};

export default WasAnsteht;