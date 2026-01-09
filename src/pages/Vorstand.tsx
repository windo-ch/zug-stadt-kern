import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Calendar, Users, Target, Heart, MapPin, ExternalLink } from 'lucide-react';
import ProtectedEmail from '@/components/ProtectedEmail';

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
      name: "Adrian Risi",
      position: "Präsident",
      roles: ["Kantonsrat"],
      address: "Eichwaldstrasse 22, 6300 Zug",
      image: "./assets/vorstand/Risi_Adrian_SVP.jpg",
      description: "Erfahrener Kantonsrat und Präsident der SVP Stadt Zug mit starkem Engagement für bürgernahe Politik.",
      contact: {
        email: "adrian.risi@risiimmobilienag.ch"
      },
      profileLink: "/profil/adrian-risi"
    },
    {
      name: "Raphael Tschan",
      position: "Vizepräsident",
      roles: ["Mitglied RPK Stadt Zug"],
      address: "Gimenenstrasse 1, 6300 Zug",
      image: "./assets/vorstand/Raphael-Tschan_SVP.jpg",
      description: "Vizepräsident der SVP Stadt Zug und Mitglied der Rechnungsprüfungskommission.",
      contact: {
        email: "rt@raphael-tschan.ch"
      },
      profileLink: "/profil/raphael-tschan"
    },
    {
      name: "Roman Küng",
      position: "Vizepräsident & GGR Fraktionspräsident",
      roles: ["Gemeinderat"],
      address: "Bernoldweg 9, 6300 Zug",
      image: "./assets/vorstand/Roman-Kueng_SVP.jpg",
      description: "Gemeinderat und Fraktionspräsident im Grossen Gemeinderat mit langjähriger politischer Erfahrung.",
      contact: {
        email: "roman.kueng@bluewin.ch"
      },
      profileLink: "/profil/roman-kueng"
    },
    {
      name: "Philip C. Brunner",
      position: "Vorstandsmitglied",
      roles: ["Kantonsrat", "Fraktionspräsident", "Gemeinderat"],
      address: "Im Rank 109, 6300 Zug",
      image: "./assets/vorstand/Philip-Brunner_SVP.png",
      description: "Kantonsrat, Fraktionspräsident und Gemeinderat mit umfassender politischer Erfahrung auf allen Ebenen.",
      contact: {
        email: "phcb@philip-brunner.ch"
      },
      profileLink: "/profil/philip-brunner"
    },
    {
      name: "André Wicki",
      position: "Vorstandsmitglied",
      roles: ["Stadtpräsident"],
      address: "Stadthaus / Postfach, 6301 Zug",
      image: "./assets/vorstand/Andre-Wicki_SVP.jpg",
      description: "Stadtpräsident von Zug und engagiertes Vorstandsmitglied der SVP Stadt Zug.",
      contact: {
        email: "andre.wicki@stadtzug.ch"
      },
      profileLink: "/profil/andre-wicki"
    },
    {
      name: "Marcus H. Bühler",
      position: "Vorstandsmitglied",
      roles: [],
      address: "Bahnhofstrasse 27, 6300 Zug",
      image: "./assets/vorstand/Marcus-Buehler_SVP.jpg",
      description: "Erfahrenes Vorstandsmitglied der SVP Stadt Zug mit breitem politischen Engagement.",
      contact: {
        email: "bumbleb@bluewin.ch"
      },
      profileLink: "/profil/marcus-buehler"
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
                                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={member.image}
                    alt={`Foto von ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <Badge variant="secondary" className="mb-2">{member.position}</Badge>
                      {member.roles.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {member.roles.map((role, roleIndex) => (
                            <Badge key={roleIndex} variant="outline" className="text-xs">
                              {role}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Adresse</h4>
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{member.address}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Kontakt</h4>
                    <div className="space-y-2 text-sm">
                      <ProtectedEmail 
                        user={member.contact.email.split('@')[0]} 
                        domain={member.contact.email.split('@')[1]} 
                        className="text-sm"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <Link 
                        to={member.profileLink}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        Zum Profil
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Link>
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