import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Vote, Megaphone } from 'lucide-react';

const WasAnsteht = () => {
  useEffect(() => {
    document.title = "Was ansteht - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aktuelle Termine, Abstimmungen und wichtige Ereignisse der SVP Stadt Zug. Bleiben Sie informiert über anstehende politische Aktivitäten.');
    }
  }, []);

  const upcomingEvents = [
    {
      type: "Abstimmung",
      title: "Kantonale Volksabstimmung",
      date: "15. März 2024",
      time: "Ganztägig",
      location: "Alle Stimmlokale in Zug",
      description: "Wichtige Abstimmung über die Stadtentwicklung und Verkehrsplanung",
      status: "Wichtig",
      icon: Vote
    },
    {
      type: "Veranstaltung",
      title: "Bürgerforum: Sicherheit in der Stadt",
      date: "22. März 2024",
      time: "19:00 - 21:00",
      location: "Casino Zug, Dorfstrasse 1",
      description: "Diskussion über Sicherheitsmassnahmen und Präventionsstrategien mit Experten",
      status: "Öffentlich",
      icon: Users
    },
    {
      type: "Partei",
      title: "Mitgliederversammlung SVP Stadt Zug",
      date: "5. April 2024",
      time: "19:30 - 21:30",
      location: "Restaurant Löwen, Kolinplatz 11",
      description: "Monatliche Mitgliederversammlung mit aktuellen politischen Themen",
      status: "Mitglieder",
      icon: Users
    },
    {
      type: "Kampagne",
      title: "Infokampagne: Ja zur Verkehrssicherheit",
      date: "10. - 24. April 2024",
      time: "Verschiedene Zeiten",
      location: "Innenstadt Zug",
      description: "Informationsstände und Gespräche mit Bürgern zur Verkehrssicherheit",
      status: "Mitmachen",
      icon: Megaphone
    }
  ];

  const importantDates = [
    {
      date: "15. März 2024",
      title: "Abstimmungssonntag",
      description: "Kantonale und kommunale Abstimmungen"
    },
    {
      date: "28. April 2024",
      title: "1. Mai Kundgebung",
      description: "Traditionelle Veranstaltung am Tag der Arbeit"
    },
    {
      date: "15. Mai 2024",
      title: "Stadtratssitzung",
      description: "Öffentliche Sitzung des Stadtrats"
    },
    {
      date: "1. Juni 2024",
      title: "Zuger Fest",
      description: "Traditionelles Stadtfest mit SVP-Stand"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Wichtig": return "bg-red-100 text-red-800 border-red-200";
      case "Öffentlich": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Mitglieder": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Mitmachen": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
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
            Bleiben Sie informiert über wichtige Termine, Abstimmungen und Veranstaltungen der SVP Stadt Zug. 
            Ihre Teilnahme und Ihr Engagement sind wichtig für unsere gemeinsame politische Arbeit.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Kommende Veranstaltungen</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">{event.type}</Badge>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                      </div>
                    </div>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {event.description}
                  </CardDescription>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button size="sm">
                      Mehr Infos
                    </Button>
                    {event.status === "Öffentlich" || event.status === "Mitmachen" ? (
                      <Button variant="outline" size="sm">
                        Anmelden
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Dates Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Wichtige Termine im Überblick</h2>
          <div className="space-y-4">
            {importantDates.map((date, index) => (
              <div key={index} className="flex items-center space-x-6 p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-primary rounded-full -ml-2"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">{date.title}</h3>
                    <span className="text-sm text-muted-foreground font-medium">{date.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{date.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Verpassen Sie nichts!
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Abonnieren Sie unseren Newsletter und bleiben Sie immer über die neuesten Termine, 
            Abstimmungen und Aktivitäten der SVP Stadt Zug informiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/newsletter" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Newsletter abonnieren
            </a>
            <a 
              href="/veranstaltungen" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Alle Veranstaltungen
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WasAnsteht;