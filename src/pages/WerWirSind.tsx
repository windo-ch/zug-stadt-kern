import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import StatCard from '@/components/content/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Award, Phone, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const WerWirSind = () => {

  const partyValues = [
    {
      icon: Heart,
      title: "Bürgernähe",
      description: "Wir sind eine Partei für alle Bürgerinnen und Bürger von Zug",
      details: "Offen für Ihre Anliegen und direkte Kommunikation"
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

  // Regierungsrat
  const regierungsrat = [
    {
      name: "Heinz Tännler",
      position: "Regierungsrat, Finanzdirektor",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/Heinz-Taennler.jpg",
      badge: "Regierungsrat",
      profileLink: "/profil/heinz-taennler"
    }
  ];

  // Kantonsrat
  const kantonsrat = [
    {
      name: "Gregor R. Bruhin",
      position: "Kantonsrat",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/gregor-bruhin.jpg",
      badge: "Kantonsrat",
      profileLink: "/profil/gregor-bruhin"
    },
    {
      name: "Philip C. Brunner",
      position: "Kantonsrat, Präsident GPK",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/philip-c-brunner.jpg",
      badge: "Kantonsrat",
      profileLink: "/profil/philip-brunner"
    },
    {
      name: "Adrian Risi",
      position: "Kantonsrat, Präsident",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/adrian-risi.jpg",
      badge: "Kantonsrat",
      profileLink: "/profil/adrian-risi"
    }
  ];

  // Stadtrat
  const stadtrat = [
    {
      name: "André Wicki",
      position: "Stadtpräsident",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/Andre-Wicki_SVP.jpg",
      badge: "Stadtpräsident",
      roles: ["Stadtrat", "Vorstand"],
      profileLink: "/profil/andre-wicki"
    }
  ];

  // GGR Fraktionspräsident
  const fraktionsprasident = [
    {
      name: "Roman Küng",
      position: "GGR Fraktionspräsident",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/roman-kueng.jpg",
      badge: "Fraktionspräsident",
      roles: ["Vizepräsident", "Vorstand"],
      profileLink: "/profil/roman-kueng"
    }
  ];

  // Mitglied - removed (Raphael Tschan moved to appropriate section if needed)

  // Gemeinderat
  const gemeinderat = [
    {
      name: "Marcus H. Bühler",
      position: "Gemeinderat",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/vorstand/Marcus-Buehler_SVP.jpg",
      badge: "Gemeinderat",
      profileLink: "/profil/marcus-buehler"
    }
  ];

  // Rest alphabetically: Gretener, Odermatt, Pircher, Schlumpf
  const weitere = [
    {
      name: "René Gretener",
      position: "Gemeinderat",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/rene-gretener.jpg",
      badge: "Gemeinderat",
      profileLink: "/profil/rene-gretener"
    },
    {
      name: "Alex Odermatt",
      position: "Gemeinderat",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/alex-odermatt.jpg",
      badge: "Gemeinderat",
      profileLink: "/profil/alex-odermatt"
    },
    {
      name: "Manfred Pircher",
      position: "Gemeinderat",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/manfred-pircher.jpg",
      badge: "Gemeinderat",
      profileLink: "/profil/manfred-pircher"
    },
    {
      name: "Norbert Schlumpf",
      position: "Gemeinderat",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/norbert-schlumpf.jpg",
      badge: "Gemeinderat",
      profileLink: "/profil/norbert-schlumpf"
    }
  ];

  // Commissions
  const kommissionen = [
    {
      name: "Marcus H. Bühler",
      position: "Nachhaltigkeit",
      phone: "079 340 81 68",
      email: "bumbleb@bluewin.ch",
      description: "",
      image: "/assets/people/vorstand/Marcus-Buehler_SVP.jpg"
    },
    {
      name: "Alexandra Gretener",
      position: "Schulkommission",
      phone: "",
      email: "alexandra.gretener@gmail.com",
      description: "",
      image: "/assets/people/profilbilder/alexandra-gretener.jpg"
    },
    {
      name: "Morten Hannesbo",
      position: "Schulkommission",
      phone: "",
      email: "morten.hannesbo@mac.com",
      description: "",
      image: "/assets/people/profilbilder/moren-hannesbo.jpg"
    },
    {
      name: "Daniel Gramm",
      position: "Kulturkommission",
      phone: "",
      email: "daniel.gramm@bluewin.ch",
      description: "",
      image: "/assets/people/profilbilder/daniel-gramm.jpg"
    },
    {
      name: "Raphael Tschan",
      position: "Rechnungsprüfungskommission (RPK)",
      phone: "",
      email: "rt@raphael-tschan.ch",
      description: "",
      image: "/assets/people/profilbilder/raphael-tschan.jpg"
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
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
              Wir sind eine Partei für alle Einwohnerinnen und Einwohner der Stadt Zug.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Offen für Ihre Anliegen und direkte Kommunikation.
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

        {/* Helper function to render person card */}
        {(() => {
          const renderPersonCard = (person: any, index: number) => {
            const cardContent = (
              <Card className={`border-l-4 border-l-primary hover:shadow-lg transition-shadow ${person.profileLink ? 'cursor-pointer' : ''}`}>
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
                          {person.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div className="flex-grow">
                      <CardTitle className="text-xl mb-1">{person.name}</CardTitle>
                      {person.badge && (
                        <Badge className="bg-[hsl(var(--svp-green))] text-white mb-2">{person.badge}</Badge>
                      )}
                      {person.roles && person.roles.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {person.roles.map((role: string, idx: number) => (
                            <Badge key={idx} variant="outline" className="text-xs">{role}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                {person.profileLink && (
                  <CardContent>
                    <Link to={person.profileLink} className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center">
                      Profil ansehen
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                )}
              </Card>
            );

            return person.profileLink ? (
              <Link key={index} to={person.profileLink} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          };

          return (
            <>
              {/* Regierungsrat */}
              {regierungsrat.length > 0 && (
                <Section>
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Regierungsrat</h2>
                  <div className="space-y-6 max-w-3xl mx-auto">
                    {regierungsrat.map(renderPersonCard)}
                  </div>
                </Section>
              )}

              {/* Kantonsrat */}
              {kantonsrat.length > 0 && (
                <Section id="kantonsrat">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Kantonsrat</h2>
                  <div className="space-y-6 max-w-3xl mx-auto">
                    {kantonsrat.map(renderPersonCard)}
                  </div>
                </Section>
              )}

              {/* Stadtrat */}
              {stadtrat.length > 0 && (
                <Section>
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Stadtrat</h2>
                  <div className="space-y-6 max-w-3xl mx-auto">
                    {stadtrat.map(renderPersonCard)}
                  </div>
                </Section>
              )}

              {/* GGR Fraktionspräsident */}
              {fraktionsprasident.length > 0 && (
                <Section>
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">GGR Fraktionspräsident</h2>
                  <div className="space-y-6 max-w-3xl mx-auto">
                    {fraktionsprasident.map(renderPersonCard)}
                  </div>
                </Section>
              )}

              {/* Gemeinderat */}
              {(gemeinderat.length > 0 || weitere.length > 0) && (
                <Section>
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Gemeinderat</h2>
                  <div className="space-y-6 max-w-3xl mx-auto">
                    {[...gemeinderat, ...weitere]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map(renderPersonCard)}
                  </div>
                </Section>
              )}

            </>
          );
        })()}

        {/* Commissions */}
        <Section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Kommissionen</h2>
            <a 
              href="https://www.svp-zug.ch/sektion/svp-stadt-zug/kommissionen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center justify-center gap-2"
            >
              Mehr Informationen
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
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
                {(person.phone || person.email) && (
                  <CardContent>
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
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <Section>
          <div className="bg-primary/5 rounded-lg p-8 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Werden Sie Teil unserer Partei
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
