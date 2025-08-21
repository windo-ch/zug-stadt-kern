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

  // Cantonal Level
  const kantonsrat = [
    {
      name: "Gregor R. Bruhin",
      position: "Kantonsrat",
      phone: "079 929 23 72",
      email: "gb@gregor-bruhin.ch",
      description: "Gregor R. Bruhin vertritt die SVP-Werte auf kantonaler Ebene und setzt sich für die Anliegen der Region Zug ein."
    }
  ];

  // Commissions and Special Functions
  const kommissionen = [
    {
      name: "Daniel Gramm Schneider",
      position: "Kulturkommission",
      phone: "",
      email: "",
      description: "Daniel Gramm Schneider engagiert sich in der Kulturkommission für ein vielfältiges kulturelles Angebot in Zug."
    },
    {
      name: "Raphael Tschan",
      position: "Mitglied der RPK",
      phone: "",
      email: "rt@raphael-tschan.ch",
      description: "Raphael Tschan bringt seine Expertise in die Rechnungsprüfungskommission ein."
    }
  ];

  // General Members and Supporters
  const parteimitglieder = [
    {
      name: "Alex Odermatt",
      phone: "041 766 67 93",
      email: "alexodermatt@bluewin.ch",
      description: "Alex Odermatt unterstützt die SVP-Politik mit seinem Engagement für die Partei."
    },
    {
      name: "Norbert Schlumpf",
      phone: "",
      email: "n.schlumpf@hsk-telematik.ch",
      description: "Norbert Schlumpf bringt seine Fachkompetenz in die Parteiarbeit ein."
    },
    {
      name: "Thomas Dubach",
      phone: "041 558 63 43",
      email: "thomasdubach@mac.com",
      description: "Thomas Dubach ist ein aktives Mitglied der SVP Stadt Zug."
    },
    {
      name: "Alessandro Ehrbar",
      phone: "079 796 97 13",
      email: "ale_ehrbar@hotmail.com",
      description: "Alessandro Ehrbar unterstützt die Partei mit seinem Engagement."
    },
    {
      name: "Alexandra Gretener",
      phone: "",
      email: "alexandra.gretener@gmail.com",
      description: "Alexandra Gretener ist eine engagierte Unterstützerin der SVP."
    },
    {
      name: "Morten Hannesbo",
      phone: "",
      email: "morten.hannesbo@mac.com",
      description: "Morten Hannesbo bringt sich aktiv in die Parteiarbeit ein."
    },
    {
      name: "Doris Hefti",
      phone: "041 768 72 61",
      email: "",
      description: "Doris Hefti ist eine treue Unterstützerin der SVP Stadt Zug."
    },
    {
      name: "Dominique Messmer",
      phone: "076 518 11 66",
      email: "domessmer@bluewin.ch",
      description: "Dominique Messmer engagiert sich für die SVP-Werte."
    },
    {
      name: "Jürg Messmer",
      phone: "076 587 11 33",
      email: "jumessmer@gmail.com",
      description: "Jürg Messmer unterstützt die Partei mit seinem Einsatz."
    },
    {
      name: "Bruno Zimmermann",
      phone: "041 552 00 22",
      email: "bruno.zimmermann@mail.ch",
      description: "Bruno Zimmermann ist ein loyales Mitglied der SVP Stadt Zug."
    }
  ];


  const organizationStats = [
    {
      icon: Users,
      number: "500+",
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
      number: "1",
      label: "Stadtpräsident",
      description: "André Wicki führt die Stadtregierung"
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

        {/* Cantonal Level */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Kantonsebene</h2>
          <div className="space-y-6">
            {kantonsrat.map((person, index) => (
              <Card key={index} className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-secondary">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl mb-1">{person.name}</CardTitle>
                      <Badge className="bg-secondary text-secondary-foreground mb-2">{person.position}</Badge>
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
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                      <a href={`mailto:${person.email}`} className="text-primary hover:text-primary/80 transition-colors">
                        {person.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Commissions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Kommissionen</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {kommissionen.map((person, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-lg mb-1">{person.name}</CardTitle>
                      <Badge variant="secondary" className="mb-2">{person.position}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{person.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    {person.phone && (
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-muted-foreground flex-shrink-0" />
                        <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-primary hover:text-primary/80 transition-colors">
                          {person.phone}
                        </a>
                      </div>
                    )}
                    {person.email && (
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-muted-foreground flex-shrink-0" />
                        <a href={`mailto:${person.email}`} className="text-primary hover:text-primary/80 transition-colors text-sm break-all">
                          {person.email}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Party Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Weitere Parteimitglieder</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {parteimitglieder.map((person, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-primary">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm leading-tight mb-2">{person.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{person.description}</p>
                      
                      <div className="space-y-1 text-xs">
                        {person.phone && (
                          <div className="flex items-center">
                            <Phone className="w-3 h-3 mr-1 text-muted-foreground" />
                            <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-primary hover:text-primary/80 transition-colors">
                              {person.phone}
                            </a>
                          </div>
                        )}
                        {person.email && (
                          <div className="flex items-center">
                            <Mail className="w-3 h-3 mr-1 text-muted-foreground" />
                            <a href={`mailto:${person.email}`} className="text-primary hover:text-primary/80 transition-colors text-xs break-all">
                              {person.email}
                            </a>
                          </div>
                        )}
                      </div>
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