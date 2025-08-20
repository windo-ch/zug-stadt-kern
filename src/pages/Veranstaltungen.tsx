import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Veranstaltungen = () => {
  useEffect(() => {
    document.title = "Veranstaltungen – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aktuelle Veranstaltungen und Termine der SVP Stadt Zug - Informationsanlässe, Diskussionen und politische Events.');
    }
  }, []);

  const upcomingEvents = [
    {
      title: "Bürgersprechstunde mit dem Präsidenten",
      date: "2025-02-15",
      time: "18:00 - 20:00",
      location: "Restaurant Löwen, Zug",
      type: "Bürgerkontakt",
      description: "Offene Sprechstunde für alle Bürgerinnen und Bürger. Bringen Sie Ihre Anliegen direkt vor.",
      attendees: "Alle Interessierten",
      registration: false
    },
    {
      title: "Abstimmungsversammlung März 2025",
      date: "2025-02-28",
      time: "19:30 - 21:30",
      location: "Burgbachsaal, Zug",
      type: "Abstimmung",
      description: "Diskussion und Empfehlungen zu den kommenden Abstimmungsvorlagen vom 15. März 2025.",
      attendees: "Mitglieder und Sympathisanten",
      registration: true
    },
    {
      title: "Podiumsdiskussion: Zukunft der Mobilität",
      date: "2025-03-12",
      time: "19:00 - 21:00",
      location: "Aula Kantonsschule, Zug",
      type: "Diskussion",
      description: "Verkehrspolitik im Fokus: Wie gestalten wir die Mobilität in Zug zukunftsfähig?",
      attendees: "Öffentlich",
      registration: true
    },
    {
      title: "SVP Stammtisch",
      date: "2025-03-20",
      time: "18:30 - 22:00",
      location: "Restaurant Ratskeller, Zug",
      type: "Stammtisch",
      description: "Gemütlicher Austausch unter Gleichgesinnten bei Speis und Trank.",
      attendees: "Mitglieder",
      registration: false
    }
  ];

  const pastEvents = [
    {
      title: "Neujahrsapéro 2025",
      date: "2025-01-12",
      description: "Erfolgreicher Start ins neue Politjahr mit über 120 Teilnehmerinnen und Teilnehmern."
    },
    {
      title: "Jahresversammlung 2024",
      date: "2024-11-15",
      description: "Rückblick aufs erfolgreiche Jahr und Vorstellung der Ziele für 2025."
    },
    {
      title: "Abstimmungskampagne Stadtbudget",
      date: "2024-10-20",
      description: "Intensiver Wahlkampf mit Flyerverteilung und Bürgergesprächen."
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

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Bürgerkontakt': return 'bg-blue-100 text-blue-700';
      case 'Abstimmung': return 'bg-green-100 text-green-700';
      case 'Diskussion': return 'bg-purple-100 text-purple-700';
      case 'Stammtisch': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-svp-green to-svp-green-light text-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Veranstaltungen
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Treffen Sie uns persönlich bei unseren politischen Anlässen und Bürgergesprächen. 
                Direkte Demokratie zum Anfassen.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Calendar className="h-8 w-8 text-primary" />
                Kommende Veranstaltungen
              </h2>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="card-initiative group">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-80 flex-shrink-0">
                        <div className="bg-gradient-to-br from-svp-green to-svp-green-light text-white p-6 rounded-xl">
                          <div className="text-center">
                            <div className="text-3xl font-bold mb-2">
                              {new Date(event.date).getDate()}
                            </div>
                            <div className="text-sm opacity-90 mb-4">
                              {new Date(event.date).toLocaleDateString('de-CH', { month: 'long', year: 'numeric' })}
                            </div>
                            <div className="flex items-center justify-center text-sm opacity-90 mb-2">
                              <Clock className="h-4 w-4 mr-1" />
                              {event.time}
                            </div>
                            <div className="flex items-center justify-center text-sm opacity-90">
                              <MapPin className="h-4 w-4 mr-1" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span><strong>Teilnehmer:</strong> {event.attendees}</span>
                          </div>
                          {event.registration && (
                            <div className="text-primary font-medium">
                              Anmeldung erforderlich
                            </div>
                          )}
                        </div>
                        
                        <button className="btn-outline text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.registration ? 'Jetzt anmelden' : 'Details anzeigen'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Events */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Clock className="h-8 w-8 text-muted-foreground" />
                Vergangene Veranstaltungen
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event, index) => (
                  <div key={index} className="card-vote border-l-4 border-l-primary">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {formatDate(event.date)}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-svp-green rounded-2xl p-8 text-white max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Verpassen Sie keine Veranstaltung
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Abonnieren Sie unseren Newsletter für aktuelle Termine und Events
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-hero bg-white text-primary hover:bg-gray-100">
                    Newsletter abonnieren
                  </button>
                  <button className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Alle Termine als ICS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Veranstaltungen;