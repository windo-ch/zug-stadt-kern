import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Calendar, Users, Target, Heart } from 'lucide-react';

const Vorstand = () => {
  useEffect(() => {
    document.title = "Vorstand - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Der Vorstand der SVP Stadt Zug - engagierte Bürger, die unsere Partei und ihre Werte vorantreiben.');
    }
  }, []);

  const boardMembers = [
    {
      name: "Peter Kaufmann",
      position: "Präsident",
      image: "/lovable-uploads/placeholder-person.jpg",
      description: "Langjähriger Unternehmer und politischer Aktivist mit Leidenschaft für eine bürgernahe Politik.",
      background: "Geschäftsführer, 25 Jahre Erfahrung im Gewerbe",
      since: "Vorstand seit 2020",
      responsibilities: ["Strategische Führung", "Öffentlichkeitsarbeit", "Koalitionsverhandlungen"],
      contact: {
        phone: "+41 79 123 45 67",
        email: "peter.kaufmann@svp-zug.ch"
      }
    },
    {
      name: "Claudia Weber",
      position: "Vizepräsidentin",
      image: "/lovable-uploads/placeholder-person.jpg",
      description: "Expertin für Bildungspolitik und Mutter von drei Kindern mit starkem Engagement für Familien.",
      background: "Lehrerin, Bildungsberaterin",
      since: "Vorstand seit 2019",
      responsibilities: ["Bildungspolitik", "Familienpolitik", "Jugendarbeit"],
      contact: {
        phone: "+41 79 234 56 78",
        email: "claudia.weber@svp-zug.ch"
      }
    },
    {
      name: "Hans-Rudolf Steiner",
      position: "Kassier",
      image: "/lovable-uploads/placeholder-person.jpg",
      description: "Ehemaliger Bankdirektor mit fundierter Expertise in Finanzfragen und Wirtschaftspolitik.",
      background: "Pensionierter Bankdirektor",
      since: "Vorstand seit 2018",
      responsibilities: ["Finanzen", "Wirtschaftspolitik", "Revision"],
      contact: {
        phone: "+41 79 345 67 89",
        email: "hans-rudolf.steiner@svp-zug.ch"
      }
    },
    {
      name: "Maria Zimmermann",
      position: "Sekretärin",
      image: "/lovable-uploads/placeholder-person.jpg",
      description: "Kommunikationsexpertin mit Fokus auf digitale Medien und Bürgerkommunikation.",
      background: "Kommunikationsberaterin",
      since: "Vorstand seit 2021",
      responsibilities: ["Protokollführung", "Kommunikation", "Digitale Medien"],
      contact: {
        phone: "+41 79 456 78 90",
        email: "maria.zimmermann@svp-zug.ch"
      }
    },
    {
      name: "Robert Meier",
      position: "Beisitzer",
      image: "/lovable-uploads/placeholder-person.jpg",
      description: "Rechtsanwalt mit Spezialisierung auf Verwaltungsrecht und kommunale Angelegenheiten.",
      background: "Rechtsanwalt, Partner in Kanzlei",
      since: "Vorstand seit 2022",
      responsibilities: ["Rechtsfragen", "Vernehmlassungen", "Beschwerden"],
      contact: {
        phone: "+41 79 567 89 01",
        email: "robert.meier@svp-zug.ch"
      }
    },
    {
      name: "Sandra Bürgi",
      position: "Beisitzerin",
      image: "/lovable-uploads/placeholder-person.jpg",
      description: "Unternehmerin im Gesundheitswesen mit starkem Fokus auf Gesundheits- und Sozialpolitik.",
      background: "Geschäftsführerin Gesundheitszentrum",
      since: "Vorstand seit 2023",
      responsibilities: ["Gesundheitspolitik", "Sozialpolitik", "Seniorenthemen"],
      contact: {
        phone: "+41 79 678 90 12",
        email: "sandra.buergi@svp-zug.ch"
      }
    }
  ];

  const boardActivities = [
    {
      title: "Strategische Planung",
      description: "Entwicklung der politischen Strategie und Positionierung der Partei",
      icon: Target
    },
    {
      title: "Mitgliederbetreuung",
      description: "Organisation von Veranstaltungen und Betreuung der Parteimitglieder",
      icon: Users
    },
    {
      title: "Öffentlichkeitsarbeit",
      description: "Kommunikation mit Medien und Bürgern über wichtige politische Themen",
      icon: Heart
    }
  ];

  const meetings = [
    {
      date: "Jeden ersten Dienstag im Monat",
      title: "Vorstandssitzung",
      description: "Regelmässige Sitzungen zur Koordination der Parteiarbeit",
      location: "Parteisekretariat oder Online"
    },
    {
      date: "Quartalsmässig",
      title: "Strategiesitzung",
      description: "Langfristige Planung und strategische Ausrichtung",
      location: "Verschiedene Standorte"
    },
    {
      date: "Nach Bedarf",
      title: "Krisensitzung",
      description: "Dringende politische Themen und Krisenmanagement",
      location: "Flexibel"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Führung</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unser Vorstand
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Der Vorstand der SVP Stadt Zug besteht aus engagierten Bürgerinnen und Bürgern, 
            die sich ehrenamtlich für unsere Werte und Ziele einsetzen. Lernen Sie die Menschen kennen, 
            die unsere Partei führen und gestalten.
          </p>
        </div>

        {/* Board Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Vorstandsmitglieder</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <Badge variant="secondary" className="mb-2">{member.position}</Badge>
                      <CardDescription className="text-sm">
                        {member.since}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Hintergrund</h4>
                    <p className="text-sm text-muted-foreground">{member.background}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Schwerpunkte</h4>
                    <ul className="space-y-1">
                      {member.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Kontakt</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        <a href={`tel:${member.contact.phone}`} className="hover:text-primary transition-colors">
                          {member.contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href={`mailto:${member.contact.email}`} className="hover:text-primary transition-colors">
                          {member.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Board Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Aufgaben des Vorstands</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {boardActivities.map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <activity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{activity.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meeting Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Sitzungsplan</h2>
          <div className="space-y-4">
            {meetings.map((meeting, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-foreground">{meeting.title}</h3>
                        <Badge variant="outline">{meeting.date}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{meeting.description}</p>
                      <span className="text-xs text-muted-foreground">Ort: {meeting.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Möchten Sie sich engagieren?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Politisches Engagement beginnt mit dem ersten Schritt. Werden Sie Mitglied der SVP Stadt Zug 
            und bringen Sie sich aktiv in die Gestaltung unserer Stadt ein. Der Vorstand freut sich auf neue Gesichter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/mitglied-werden" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Mitglied werden
            </a>
            <a 
              href="/kontakt" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vorstand;