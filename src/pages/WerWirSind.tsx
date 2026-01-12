import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import StatCard from '@/components/content/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Award, Phone, Mail, ExternalLink } from 'lucide-react';

const WerWirSind = () => {

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
      description: "Gregor R. Bruhin vertritt die SVP-Werte auf kantonaler Ebene und setzt sich für die Anliegen der Region Zug ein.",
      image: "/assets/people/profilbilder/gregor-bruhin.jpg"
    }
  ];

  // Commissions and Special Functions
  const kommissionen = [
    {
      name: "Daniel Gramm Schneider",
      position: "Kulturkommission",
      phone: "",
      email: "",
      description: "Daniel Gramm Schneider engagiert sich in der Kulturkommission für ein vielfältiges kulturelles Angebot in Zug.",
      image: "/assets/people/profilbilder/daniel-gramm.jpg"
    },
    {
      name: "Raphael Tschan",
      position: "Mitglied der RPK",
      phone: "",
      email: "rt@raphael-tschan.ch",
      description: "Raphael Tschan bringt seine Expertise in die Rechnungsprüfungskommission ein.",
      image: "/assets/people/profilbilder/raphael-tschan.jpg"
    }
  ];

  // General Members and Supporters - with image mapping
  const parteimitglieder = [
    {
      name: "Alex Odermatt",
      phone: "041 766 67 93",
      email: "alexodermatt@bluewin.ch",
      description: "Alex Odermatt unterstützt die SVP-Politik mit seinem Engagement für die Partei.",
      image: "/assets/people/profilbilder/alex-odermatt.jpg"
    },
    {
      name: "Norbert Schlumpf",
      phone: "",
      email: "n.schlumpf@hsk-telematik.ch",
      description: "Norbert Schlumpf bringt seine Fachkompetenz in die Parteiarbeit ein.",
      image: "/assets/people/profilbilder/norbert-schlumpf.jpg"
    },
    {
      name: "Thomas Dubach",
      phone: "041 558 63 43",
      email: "thomasdubach@mac.com",
      description: "Thomas Dubach ist ein aktives Mitglied der SVP Stadt Zug.",
      image: "/assets/people/profilbilder/thomas-dubach.jpg"
    },
    {
      name: "Alessandro Ehrbar",
      phone: "079 796 97 13",
      email: "ale_ehrbar@hotmail.com",
      description: "Alessandro Ehrbar unterstützt die Partei mit seinem Engagement.",
      image: "/assets/people/profilbilder/alessandro-ehrbar.jpg"
    },
    {
      name: "Alexandra Gretener",
      phone: "",
      email: "alexandra.gretener@gmail.com",
      description: "Alexandra Gretener ist eine engagierte Unterstützerin der SVP.",
      image: "/assets/people/profilbilder/alexandra-gretener.jpg"
    },
    {
      name: "Morten Hannesbo",
      phone: "",
      email: "morten.hannesbo@mac.com",
      description: "Morten Hannesbo bringt sich aktiv in die Parteiarbeit ein.",
      image: "/assets/people/profilbilder/moren-hannesbo.jpg"
    },
    {
      name: "Doris Hefti",
      phone: "041 768 72 61",
      email: "",
      description: "Doris Hefti ist eine treue Unterstützerin der SVP Stadt Zug.",
      image: null // No image available
    },
    {
      name: "Dominique Messmer",
      phone: "076 518 11 66",
      email: "domessmer@bluewin.ch",
      description: "Dominique Messmer engagiert sich für die SVP-Werte.",
      image: "/assets/people/profilbilder/dominique-messmer.jpg"
    },
    {
      name: "Jürg Messmer",
      phone: "076 587 11 33",
      email: "jumessmer@gmail.com",
      description: "Jürg Messmer unterstützt die Partei mit seinem Einsatz.",
      image: "/assets/people/profilbilder/juerg-messmer.jpg"
    },
    {
      name: "Bruno Zimmermann",
      phone: "041 552 00 22",
      email: "bruno.zimmermann@mail.ch",
      description: "Bruno Zimmermann ist ein loyales Mitglied der SVP Stadt Zug.",
      image: "/assets/people/profilbilder/bruno-zimmermann.jpg"
    }
  ];

  const organizationStats = [
    {
      icon: Users,
      number: "200+",
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
    <PageLayout 
      title="Wer wir sind – SVP Stadt Zug"
      description="Die SVP Stadt Zug - eine Volkspartei mit langer Tradition und klaren Werten. Lernen Sie unser Team und unsere Vision für Zug kennen."
    >
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-base px-4 py-2 border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))]">
              Unsere Partei
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Wer wir sind
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Die SVP Stadt Zug ist eine Volkspartei mit langer Tradition und klaren Werten. 
              Wir setzen uns seit über 30 Jahren für eine bürgernahe Politik ein, die den Menschen 
              in Zug dient und unsere Stadt lebenswert erhält.
            </p>
          </div>
        </Section>

        {/* Statistics */}
        <Section>
          <div className="grid md:grid-cols-3 gap-6">
            {organizationStats.map((stat, index) => {
              const numValue = parseInt(stat.number.replace(/[^0-9]/g, ''), 10);
              const suffix = stat.number.includes('+') ? '+' : '';
              return (
                <StatCard
                  key={index}
                  value={numValue}
                  suffix={suffix}
                  label={stat.label}
                  sublabel={stat.description}
                  icon={stat.icon}
                  variant="default"
                />
              );
            })}
          </div>
        </Section>

        {/* Our Values */}
        <Section>
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
        </Section>

        {/* Cantonal Level */}
        <Section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Kantonsebene</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {kantonsrat.map((person, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    {person.image ? (
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-md flex-shrink-0">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
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
                    {person.phone && (
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                        <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-primary hover:text-primary/80 transition-colors">
                          {person.phone}
                        </a>
                      </div>
                    )}
                    {person.email && (
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                        <a href={`mailto:${person.email}`} className="text-primary hover:text-primary/80 transition-colors">
                          {person.email}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Commissions */}
        <Section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Kommissionen</h2>
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {kommissionen.map((person, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    {person.image ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/20 shadow-md flex-shrink-0">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
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
        </Section>

        {/* Party Members */}
        <Section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Weitere Parteimitglieder</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parteimitglieder.map((person, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    {person.image ? (
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-md flex-shrink-0">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div className="flex-grow min-w-0">
                      <h3 className="font-semibold text-lg leading-tight mb-2">{person.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{person.description}</p>
                  
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
        </Section>

        {/* Call to Action */}
        <Section>
          <div className="bg-primary/5 rounded-lg p-8 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Werden Sie Teil unserer Bewegung
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Die SVP Stadt Zug lebt von dem Engagement ihrer Mitglieder. Bringen Sie sich ein, 
              gestalten Sie mit und helfen Sie uns dabei, Zug noch lebenswerter zu machen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" asChild>
                <a href="/mitglied-werden">
                  Mitglied werden
                </a>
              </Button>
              <Button variant="outline" className="btn-outline" asChild>
                <a href="/kontakt">
                  Kontakt aufnehmen
                </a>
              </Button>
              <Button variant="outline" className="btn-outline" asChild>
                <a href="https://www.svp-zug.ch/termine/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Veranstaltungen
                </a>
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default WerWirSind;
