import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Calendar, Award } from 'lucide-react';

const Stadtrat = () => {
  useEffect(() => {
    document.title = "Stadtrat - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lernen Sie die SVP-Vertreter im Stadtrat Zug kennen. Unsere Stadträte setzen sich für Ihre Anliegen ein.');
    }
  }, []);

  const cityCouncilors = [
    {
      name: "Dr. Andrea Müller",
      position: "Stadträtin",
      department: "Direktion Soziales und Sicherheit",
      image: "/lovable-uploads/placeholder-person.jpg",
      description: "Dr. Andrea Müller setzt sich seit 2018 für mehr Sicherheit und soziale Gerechtigkeit in Zug ein.",
      achievements: [
        "Einführung der Stadtpolizei-Patrouille",
        "Modernisierung der Sozialdienste",
        "Verbesserung der Jugendbetreuung"
      ],
      contact: {
        phone: "+41 41 728 21 11",
        email: "andrea.mueller@stadtzug.ch"
      },
      experience: "6 Jahre im Stadtrat",
      background: "Rechtsanwältin, Mutter von zwei Kindern"
    },
    {
      name: "Thomas Bachmann",
      position: "Stadtrat",
      department: "Direktion Planung und Infrastruktur",
      image: "/lovable-uploads/placeholder-person.jpg",
      description: "Thomas Bachmann kämpft für eine nachhaltige Stadtentwicklung ohne Bürokratie-Wildwuchs.",
      achievements: [
        "Optimierung der Verkehrsführung",
        "Digitalisierung der Baugesuche",
        "Förderung des öffentlichen Verkehrs"
      ],
      contact: {
        phone: "+41 41 728 21 12",
        email: "thomas.bachmann@stadtzug.ch"
      },
      experience: "4 Jahre im Stadtrat",
      background: "Bauingenieur, langjähriger Unternehmer"
    }
  ];

  const committeeMemberships = [
    {
      committee: "Finanzkommission",
      members: ["Dr. Andrea Müller", "Thomas Bachmann"],
      description: "Überwachung der städtischen Finanzen und Budgetplanung"
    },
    {
      committee: "Kommission für Stadtentwicklung",
      members: ["Thomas Bachmann"],
      description: "Planung und Entwicklung der Stadt Zug"
    },
    {
      committee: "Sicherheitskommission",
      members: ["Dr. Andrea Müller"],
      description: "Sicherheitsmassnahmen und Kriminalitätsprävention"
    }
  ];

  const recentDecisions = [
    {
      date: "15. Februar 2024",
      title: "Erhöhung der Polizeipräsenz",
      description: "Beschluss zur Verstärkung der nächtlichen Patrouillen in der Innenstadt",
      status: "Angenommen"
    },
    {
      date: "8. Februar 2024",
      title: "Digitalisierung der Verwaltung",
      description: "Modernisierung der IT-Infrastruktur für besseren Bürgerservice",
      status: "Angenommen"
    },
    {
      date: "1. Februar 2024",
      title: "Verkehrsberuhigung Altstadt",
      description: "Massnahmen zur Reduzierung des Durchgangsverkehrs",
      status: "In Bearbeitung"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Stadtrat</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere Vertreter im Stadtrat
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Die SVP-Stadträte setzen sich täglich für die Anliegen der Zuger Bürgerinnen und Bürger ein. 
            Lernen Sie unsere engagierten Vertreter kennen und erfahren Sie mehr über ihre Arbeit.
          </p>
        </div>

        {/* City Councilors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">SVP-Stadträte</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {cityCouncilors.map((councilor, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-600">
                        {councilor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl mb-1">{councilor.name}</CardTitle>
                      <Badge variant="secondary" className="mb-2">{councilor.position}</Badge>
                      <CardDescription className="text-sm font-medium">
                        {councilor.department}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{councilor.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Wichtige Erfolge</h4>
                    <ul className="space-y-1">
                      {councilor.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <Award className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {councilor.experience}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {councilor.background}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Kontakt</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        <a href={`tel:${councilor.contact.phone}`} className="hover:text-primary transition-colors">
                          {councilor.contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href={`mailto:${councilor.contact.email}`} className="hover:text-primary transition-colors">
                          {councilor.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Committee Memberships */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Kommissionsmitgliedschaften</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {committeeMemberships.map((committee, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{committee.committee}</CardTitle>
                  <CardDescription>{committee.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">SVP-Mitglieder</h4>
                    <ul className="space-y-1">
                      {committee.members.map((member, memberIndex) => (
                        <li key={memberIndex} className="text-sm text-muted-foreground">
                          • {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Decisions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Aktuelle Entscheide</h2>
          <div className="space-y-4">
            {recentDecisions.map((decision, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-foreground">{decision.title}</h3>
                        <Badge variant={decision.status === "Angenommen" ? "default" : "secondary"}>
                          {decision.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{decision.description}</p>
                      <span className="text-xs text-muted-foreground">{decision.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Haben Sie Anliegen?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Unsere Stadträte sind für Sie da. Nehmen Sie Kontakt auf, wenn Sie Fragen oder Anregungen haben. 
            Ihre Meinung ist wichtig für die Gestaltung unserer Stadt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontakt" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Kontakt aufnehmen
            </a>
            <a 
              href="/was-ansteht" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Aktuelle Termine
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stadtrat;