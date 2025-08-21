import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Calendar, Award } from 'lucide-react';
import ProtectedEmail from '@/components/ProtectedEmail';

const Stadtrat = () => {
  useEffect(() => {
    document.title = "SVP-Fraktion - Grosser Gemeinderat Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lernen Sie die SVP-Fraktion im Grossen Gemeinderat Zug kennen. Unsere Parlamentarier setzen sich für Ihre Anliegen ein.');
    }
  }, []);

  // City Executive (Stadtrat/Executive Council)
  const stadtrat = [
    {
      name: "André Wicki",
      position: "Stadtrat / Stadtpräsident",
      phone: "058 728 90 01",
      email: "andre.wicki@stadtzug.ch",
      description: "Als Stadtpräsident führt André Wicki die Exekutive der Stadt Zug und vertritt die bürgerlichen Werte in der Stadtregierung.",
      isPresident: true
    }
  ];

  // City Parliament (Grosser Gemeinderat/Legislative)
  const gemeinderat = [
    {
      name: "Roman Küng",
      position: "Gemeinderat",
      address: "Bernoldweg 9, 6300 Zug",
      phone: "041 750 10 55",
      email: "roman.kueng@bluewin.ch",
      description: "Roman Küng ist als erfahrener Gemeinderat und Fraktionschef ein wichtiger Pfeiler der SVP-Politik in Zug.",
      isFraktionschef: true
    },
    {
      name: "Philip C. Brunner",
      position: "Gemeinderat, Präsident GPK Stadt Zug",
      address: "Im Rank 109, 6300 Zug", 
      phone: "079 398 4 396",
      email: "phcb@philip-brunner.ch",
      description: "Philip C. Brunner präsidiert die Geschäftsprüfungskommission und bringt seine Expertise in die Gemeindepolitik ein.",
      isFraktionschef: false
    },
    {
      name: "Marcus Bühler",
      position: "Gemeinderat",
      address: "Bahnhofstrasse 27, 6300 Zug",
      phone: "",
      email: "bumbleb@bluewin.ch",
      description: "Marcus Bühler setzt sich als Gemeinderat für pragmatische Lösungen und bürgernahe Politik ein.",
      isFraktionschef: false
    },
    {
      name: "René Gretener",
      position: "Gemeinderat",
      address: "Lüssirainstrasse 1, 6300 Zug",
      phone: "",
      email: "rghkswiss@gmail.com", 
      description: "René Gretener vertritt die SVP-Werte im Gemeinderat mit Engagement und Sachverstand.",
      isFraktionschef: false
    },
    {
      name: "Manfred Pircher",
      position: "Gemeinderat", 
      address: "Lothenbach 7, 6318 Walchwil",
      phone: "041 758 17 30",
      email: "manfred.pircher@bluewin.ch",
      description: "Manfred Pircher bringt auch die Perspektive der Gemeinde Walchwil in die regionale Politik ein.",
      isFraktionschef: false
    }
  ];

  const committeeMemberships = [
    {
      committee: "Finanzkommission",
      members: ["SVP-Vertreter aktiv"],
      description: "Überwachung der städtischen Finanzen und Budgetplanung"
    },
    {
      committee: "Kommission für Stadtentwicklung", 
      members: ["SVP-Vertreter aktiv"],
      description: "Planung und Entwicklung der Stadt Zug"
    },
    {
      committee: "Sicherheitskommission",
      members: ["SVP-Vertreter aktiv"],
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
          <Badge variant="outline" className="mb-4">Grosser Gemeinderat</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            SVP-Fraktion im Grossen Gemeinderat
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Unsere SVP-Parlamentarier im Grossen Gemeinderat Zug setzen sich täglich für bürgerliche Werte und 
            die Anliegen der Zuger Bevölkerung ein. Lernen Sie unsere Fraktion kennen.
          </p>
        </div>

        {/* Stadtrat - Executive */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Stadtrat (Exekutive)</h2>
          <div className="space-y-6">
            {stadtrat.map((person, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl mb-1">{person.name}</CardTitle>
                      <Badge className="bg-primary text-primary-foreground mb-2">{person.position}</Badge>
                      <CardDescription className="text-sm">
                        {person.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                      <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-primary hover:text-primary/80 transition-colors">
                        {person.phone}
                      </a>
                    </div>
                    <ProtectedEmail 
                      user={person.email.split('@')[0]} 
                      domain={person.email.split('@')[1]} 
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gemeinderat - Legislative */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Grosser Gemeinderat (Legislative)</h2>
          
          {/* Fraktionschef */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Fraktionsleitung</h3>
            {gemeinderat.filter(p => p.isFraktionschef).map((member, index) => (
              <Card key={index} className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-secondary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <Badge className="bg-secondary text-secondary-foreground mb-2">Fraktionschef</Badge>
                      <Badge variant="outline" className="mb-2 ml-2">{member.position}</Badge>
                      <CardDescription className="text-sm">
                        {member.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{member.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                      <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-primary hover:text-primary/80 transition-colors">
                        {member.phone}
                      </a>
                    </div>
                    <ProtectedEmail 
                      user={member.email.split('@')[0]} 
                      domain={member.email.split('@')[1]} 
                      className="break-all"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gemeinderat Mitglieder */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Gemeinderatsmitglieder</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {gemeinderat.filter(p => !p.isFraktionschef).map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                        <Badge variant="secondary" className="mb-2">{member.position}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{member.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{member.address}</span>
                      </div>
                      {member.phone && (
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-muted-foreground flex-shrink-0" />
                          <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-primary hover:text-primary/80 transition-colors">
                            {member.phone}
                          </a>
                        </div>
                      )}
                      <ProtectedEmail 
                        user={member.email.split('@')[0]} 
                        domain={member.email.split('@')[1]} 
                        className="text-sm break-all"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
            Unsere Parlamentarier sind für Sie da. Nehmen Sie Kontakt auf, wenn Sie Fragen oder Anregungen haben. 
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