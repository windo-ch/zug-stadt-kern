import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Target, Heart } from 'lucide-react';

const Vorstand = () => {

  const boardMembers = [
    {
      name: "Adrian Risi",
      position: "Präsident",
      roles: ["Kantonsrat"],
      address: "Eichwaldstrasse 22, 6300 Zug",
      image: "./assets/people/profilbilder/adrian-risi.jpg",
      description: "Erfahrener Kantonsrat und Präsident der SVP Stadt Zug mit starkem Engagement für bürgernahe Politik.",
      contact: {
        email: "adrian.risi@risiimmobilienag.ch"
      },
      profileLink: "/profil/adrian-risi"
    },
    {
      name: "Raphael Tschan",
      position: "1. Vizepräsident",
      roles: ["Mitglied RPK Stadt Zug"],
      address: "Gimenenstrasse 1, 6300 Zug",
      image: "./assets/people/profilbilder/raphael-tschan.jpg",
      description: "Vizepräsident der SVP Stadt Zug und Mitglied der Rechnungsprüfungskommission.",
      contact: {
        email: "rt@raphael-tschan.ch"
      },
      profileLink: "/profil/raphael-tschan"
    },
    {
      name: "Roman Küng",
      position: "2. Vizepräsident",
      roles: ["Gemeinderat"],
      address: "Bernoldweg 9, 6300 Zug",
      image: "./assets/people/profilbilder/roman-kueng.jpg",
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
      image: "./assets/people/profilbilder/philip-c-brunner.jpg",
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
      image: "./assets/people/profilbilder/Andre-Wicki_SVP.jpg",
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
      image: "./assets/people/profilbilder/svp-marcus-buehler-profil.jpg",
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
      description: "Werben von Neumitgliedern und Betreuung der Parteimitglieder",
      icon: Users
    },
    {
      title: "Öffentlichkeitsarbeit",
      description: "Kommunikation über wichtige politische Themen und Organisation öffentlicher Veranstaltungen.",
      icon: Heart
    }
  ];

  const meetings = [
    {
      date: "10. Februar 2026",
      title: "Vorstandssitzung",
      description: "Regelmässige Sitzungen zur Koordination der Parteiarbeit",
      location: "verschiedene Standorte"
    },
    {
      date: "25. März 2026",
      title: "Vorstandssitzung",
      description: "Regelmässige Sitzungen zur Koordination der Parteiarbeit",
      location: "verschiedene Standorte"
    },
    {
      date: "22. Juni 2026",
      title: "Vorstandssitzung",
      description: "Regelmässige Sitzungen zur Koordination der Parteiarbeit",
      location: "verschiedene Standorte"
    },
    {
      date: "17. September 2026",
      title: "Vorstandssitzung",
      description: "Regelmässige Sitzungen zur Koordination der Parteiarbeit",
      location: "verschiedene Standorte"
    },
    {
      date: "2. Dezember 2026",
      title: "Vorstandssitzung",
      description: "Regelmässige Sitzungen zur Koordination der Parteiarbeit",
      location: "verschiedene Standorte"
    },
    {
      date: "25. März 2026",
      title: "Generalversammlung",
      description: "Jährliche Versammlungen der Partei",
      location: "Verschiedene Standorte"
    },
    {
      date: "25. März 2026",
      title: "Mitgliederversammlungen",
      description: "Versammlungen für alle Parteimitglieder",
      location: "Verschiedene Standorte"
    },
  ];

  return (
    <PageLayout 
      title="Vorstand - SVP Stadt Zug"
      description="Der Vorstand der SVP Stadt Zug - engagierte Bürger, die unsere Partei und ihre Werte vorantreiben."
    >
      <main>
        {/* Hero Section */}
        <Section>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Unser Vorstand
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Der Vorstand der SVP Stadt Zug besteht aus engagierten Parteimitgliedern, die sich ehrenamtlich für unsere Werte und Ziele einsetzen. Lernen Sie die Menschen kennen, die unsere Partei führen und gestalten.
            </p>
          </div>
        </Section>

        {/* Board Members */}
        <Section variant="muted">
          <SectionHeader
            title="Vorstandsmitglieder"
            alignment="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Link
                key={index}
                to={member.profileLink || "#"}
                className="group flex flex-col items-center text-center p-3 hover:scale-105 transition-transform duration-300"
              >
                {/* Circular avatar with green border */}
                <div className="relative mb-3">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))] shadow-lg group-hover:shadow-xl group-hover:border-[hsl(var(--svp-green-light))] transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Shiny effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                
                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                
                {/* Position */}
                <p className="text-sm font-semibold text-primary">
                  {member.position}
                </p>
              </Link>
            ))}
          </div>
        </Section>

        {/* Board Activities */}
        <Section>
          <SectionHeader
            title="Aufgaben des Vorstands"
            className="mb-8"
          />
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
        </Section>

        {/* Meeting Schedule */}
        <Section variant="muted">
          <SectionHeader
            title="Sitzungsplan"
            className="mb-8"
          />
          <div className="space-y-4">
            {/* Grouped Vorstandssitzungen */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground mb-2">Vorstandssitzungen</h3>
                    <p className="text-muted-foreground text-sm mb-3">Regelmässige Sitzungen zur Koordination der Parteiarbeit</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">10. Februar 2026</Badge>
                      <Badge variant="outline">25. März 2026</Badge>
                      <Badge variant="outline">22. Juni 2026</Badge>
                      <Badge variant="outline">17. September 2026</Badge>
                      <Badge variant="outline">2. Dezember 2026</Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">Ort: verschiedene Standorte</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Other meetings */}
            {meetings
              .filter(meeting => meeting.title !== "Vorstandssitzung")
              .map((meeting, index) => (
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
        </Section>

        {/* Join Us Section */}
        <Section>
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
        </Section>
      </main>
    </PageLayout>
  );
};

export default Vorstand;