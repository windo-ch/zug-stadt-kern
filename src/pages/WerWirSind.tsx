import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Award, MapPin, Calendar, Phone, Mail, ExternalLink } from 'lucide-react';

const WerWirSind = () => {
  useEffect(() => {
    document.title = "Wer wir sind – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Die SVP Stadt Zug - eine Volkspartei mit langer Tradition und klaren Werten. Lernen Sie unser Team und unsere Vision für Zug kennen.');
    }
  }, []);

  const partyValues = [
    {
      icon: Heart,
      title: "Bürgernähe",
      description: "Wir sind eine Partei für alle Bürgerinnen und Bürger von Zug",
      details: "Regelmässige Bürgersprechstunden, offene Ohren für Anliegen und direkte Kommunikation"
    },
    {
      icon: Target,
      title: "Lösungsorientiert", 
      description: "Konkrete Lösungen statt leere Versprechungen",
      details: "Pragmatische Politik mit messbaren Ergebnissen für die Menschen in Zug"
    },
    {
      icon: Users,
      title: "Gemeinschaftlich",
      description: "Gemeinsam stark für Zug und seine Zukunft",
      details: "Breite Abstützung in allen Bevölkerungsschichten und Generationen"
    }
  ];

  const keyFigures = [
    {
      name: "Peter Kaufmann",
      position: "Präsident SVP Stadt Zug",
      description: "Langjähriger Unternehmer mit einer Leidenschaft für bürgernahe Politik",
      experience: "15 Jahre politische Erfahrung",
      focus: "Wirtschaftspolitik, Standortförderung",
      contact: {
        phone: "+41 79 123 45 67",
        email: "peter.kaufmann@svp-zug.ch"
      }
    },
    {
      name: "Dr. Andrea Müller",
      position: "Stadträtin - Direktion Soziales und Sicherheit",
      description: "Rechtsanwältin und Mutter, die sich für Sicherheit und soziale Gerechtigkeit einsetzt",
      experience: "6 Jahre im Stadtrat",
      focus: "Sicherheitspolitik, Sozialpolitik",
      contact: {
        phone: "+41 41 728 21 11",
        email: "andrea.mueller@stadtzug.ch"
      }
    },
    {
      name: "Thomas Bachmann",
      position: "Stadtrat - Direktion Planung und Infrastruktur",
      description: "Bauingenieur mit Fokus auf nachhaltige Stadtentwicklung",
      experience: "4 Jahre im Stadtrat",
      focus: "Stadtplanung, Verkehr, Infrastruktur",
      contact: {
        phone: "+41 41 728 21 12",
        email: "thomas.bachmann@stadtzug.ch"
      }
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Verstärkung der Stadtpolizei",
      description: "Erfolgreiche Durchsetzung zusätzlicher Polizeipatrouillen",
      impact: "30% weniger Vandalismusschäden"
    },
    {
      year: "2023",
      title: "Schulraum-Erweiterung",
      description: "Realisierung neuer Schulinfrastruktur im Osten der Stadt",
      impact: "120 zusätzliche Schulplätze"
    },
    {
      year: "2022",
      title: "Digitalisierung Verwaltung",
      description: "Modernisierung der städtischen IT-Services",
      impact: "50% schnellere Bearbeitung von Anträgen"
    },
    {
      year: "2022",
      title: "Verkehrsoptimierung",
      description: "Verbesserung der Verkehrsflüsse in der Innenstadt",
      impact: "25% weniger Staus zu Stosszeiten"
    }
  ];

  const organizationStats = [
    {
      icon: Users,
      number: "400+",
      label: "Aktive Mitglieder", 
      description: "Engagierte Bürgerinnen und Bürger"
    },
    {
      icon: Award,
      number: "30+",
      label: "Jahre Erfahrung",
      description: "Bewährte Politik für Zug"
    },
    {
      icon: Target,
      number: "2",
      label: "Stadträte",
      description: "Starke Vertretung in der Exekutive"
    }
  ];

  const upcomingEvents = [
    {
      title: "Mitgliederversammlung",
      date: "15. März 2024",
      time: "19:30 - 21:30",
      location: "Restaurant Löwen, Kolinplatz 11",
      description: "Monatliche Versammlung mit aktuellen politischen Themen"
    },
    {
      title: "Bürgerforum Sicherheit",
      date: "22. März 2024", 
      time: "19:00 - 21:00",
      location: "Casino Zug, Dorfstrasse 1",
      description: "Öffentliche Diskussion über Sicherheitsmassnahmen"
    },
    {
      title: "Tag der offenen Tür",
      date: "5. April 2024",
      time: "14:00 - 18:00",
      location: "Parteisekretariat",
      description: "Lernen Sie uns persönlich kennen"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Unsere Partei</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wer wir sind
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Die SVP Stadt Zug ist eine Volkspartei mit langer Tradition und klaren Werten. 
            Wir setzen uns seit über 30 Jahren für eine bürgernahe Politik ein, die den Menschen 
            in Zug dient und unsere Stadt lebenswert erhält.
          </p>
        </div>

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {organizationStats.map((stat, index) => (
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

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Unsere Werte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partyValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground mb-4">{value.description}</p>
                  <p className="text-sm text-muted-foreground">{value.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Figures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Unsere Führung</h2>
          <div className="space-y-8">
            {keyFigures.map((person, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-gray-600">
                            {person.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{person.name}</h3>
                          <p className="text-primary font-semibold">{person.position}</p>
                          <p className="text-sm text-muted-foreground mt-1">{person.experience}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{person.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <Badge variant="outline">
                          <Target className="w-3 h-3 mr-1" />
                          {person.focus}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Kontakt</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                            <a href={`tel:${person.contact.phone}`} className="hover:text-primary transition-colors">
                              {person.contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                            <a href={`mailto:${person.contact.email}`} className="hover:text-primary transition-colors">
                              {person.contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Unsere Erfolge</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="secondary">{achievement.year}</Badge>
                        <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-2">{achievement.description}</p>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-green-700">{achievement.impact}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Kommende Veranstaltungen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}, {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Werden Sie Teil unserer Bewegung
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Die SVP Stadt Zug lebt von dem Engagement ihrer Mitglieder. Bringen Sie sich ein, 
            gestalten Sie mit und helfen Sie uns dabei, Zug noch lebenswerter zu machen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/mitglied-werden" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Mitglied werden
            </a>
            <a 
              href="/kontakt" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Kontakt aufnehmen
            </a>
            <a 
              href="/veranstaltungen" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Veranstaltungen
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WerWirSind;