import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const WerWirSind = () => {


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
      roles: ["Finanzdirektor"],
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
      roles: ["Vorstand"],
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
      roles: ["Vorstand"],
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

  // GGR Fraktionspräsident - moved to Gemeinderat section
  const fraktionsprasident = [];

  // Mitglied - removed (Raphael Tschan moved to appropriate section if needed)

  // Gemeinderat - Roman Küng first as Fraktionspräsident, then alphabetical by last name
  const gemeinderat = [
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
    },
    {
      name: "Philip C. Brunner",
      position: "Gemeinderat",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/philip-c-brunner.jpg",
      badge: "Gemeinderat",
      roles: ["Vorstand"],
      profileLink: "/profil/philip-brunner"
    },
    {
      name: "Marcus H. Bühler",
      position: "Gemeinderat",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/svp-marcus-buehler-profil.jpg",
      badge: "Gemeinderat",
      roles: ["Vorstand"],
      profileLink: "/profil/marcus-buehler"
    },
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

  // Empty array - all Gemeinderäte moved to gemeinderat array above
  const weitere = [];

  // Commissions
  const kommissionen = [
    {
      name: "Philip C. Brunner",
      position: "Geschäftsprüfungskommission (GPK)",
      role: "Präsident",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/philip-c-brunner.jpg",
      profileLink: "/profil/philip-brunner"
    },
    {
      name: "Alex Odermatt",
      position: "Bau- und Planungskommission (BPK)",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/alex-odermatt.jpg",
      profileLink: "/profil/alex-odermatt"
    },
    {
      name: "Manfred Pircher",
      position: "Bau- und Planungskommission (BPK)",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/manfred-pircher.jpg",
      profileLink: "/profil/manfred-pircher"
    },
    {
      name: "Bruno Zimmermann",
      position: "Steuergruppe Podium 41",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/bruno-zimmermann.jpg",
      profileLink: "/profil/bruno-zimmermann"
    },
    {
      name: "Roman Küng",
      position: "Steuergruppe Haus Göbli",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/roman-kueng.jpg",
      profileLink: "/profil/roman-kueng"
    },
    {
      name: "Marcus H. Bühler",
      position: "Nachhaltigkeitskommission",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/svp-marcus-buehler-profil.jpg",
      profileLink: "/profil/marcus-buehler"
    },
    {
      name: "Alexandra Gretener",
      position: "Schulkommission",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/alexandra-gretener.jpg",
      profileLink: "/profil/alexandra-gretener"
    },
    {
      name: "Morten Hannesbo",
      position: "Schulkommission",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/moren-hannesbo.jpg",
      profileLink: "/profil/morten-hannesbo"
    },
    {
      name: "Daniel Gramm",
      position: "Kulturkommission",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/daniel-gramm.jpg",
      profileLink: "/profil/daniel-gramm"
    },
    {
      name: "Raphael Tschan",
      position: "Rechnungsprüfungskommission (RPK)",
      phone: "",
      email: "",
      description: "",
      image: "/assets/people/profilbilder/raphael-tschan.jpg",
      roles: ["Vorstand"],
      profileLink: "/profil/raphael-tschan"
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

        {/* Helper function to render person card */}
        {(() => {
          const renderPersonCard = (person: any, index: number) => {
            const cardContent = (
              <Card className={`h-full hover:shadow-lg transition-all duration-300 ${person.profileLink ? 'cursor-pointer hover:-translate-y-0.5' : ''}`}>
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  {person.image ? (
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))]/20 shadow-md mb-4">
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
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {person.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-1">{person.name}</h3>
                  {person.badge && (
                    <Badge className="bg-[hsl(var(--svp-green))] text-white mb-2">{person.badge}</Badge>
                  )}
                  {person.roles && person.roles.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                      {person.roles.map((role: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-xs">{role}</Badge>
                      ))}
                    </div>
                  )}
                  {person.profileLink && (
                    <Link to={person.profileLink} className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center mt-auto pt-3">
                      Profil ansehen
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            );

            return person.profileLink ? (
              <Link key={index} to={person.profileLink} className="block h-full">
                {cardContent}
              </Link>
            ) : (
              <div key={index} className="h-full">{cardContent}</div>
            );
          };

          return (
            <>
              {/* Regierungsrat */}
              {regierungsrat.length > 0 && (
                <Section>
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Regierungsrat</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto [&>*:only-child]:sm:col-span-2 [&>*:only-child]:sm:w-[calc(50%-0.75rem)] [&>*:only-child]:sm:mx-auto">
                    {regierungsrat.map(renderPersonCard)}
                  </div>
                </Section>
              )}

              {/* Kantonsrat */}
              {kantonsrat.length > 0 && (
                <Section id="kantonsrat">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Kantonsrat</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto [&>*:only-child]:sm:col-span-2 [&>*:only-child]:sm:w-[calc(50%-0.75rem)] [&>*:only-child]:sm:mx-auto">
                    {kantonsrat.map(renderPersonCard)}
                  </div>
                </Section>
              )}

              {/* Stadtrat */}
              {stadtrat.length > 0 && (
                <Section>
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Stadtrat</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto [&>*:only-child]:sm:col-span-2 [&>*:only-child]:sm:w-[calc(50%-0.75rem)] [&>*:only-child]:sm:mx-auto">
                    {stadtrat.map(renderPersonCard)}
                  </div>
                </Section>
              )}

              {/* Gemeinderat */}
              {gemeinderat.length > 0 && (
                <Section id="gemeinderat">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Gemeinderat</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto [&>*:only-child]:sm:col-span-2 [&>*:only-child]:sm:w-[calc(50%-0.75rem)] [&>*:only-child]:sm:mx-auto">
                    {gemeinderat.map(renderPersonCard)}
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
            {kommissionen.map((person, index) => {
              const cardContent = (
                <Card className={`hover:shadow-lg transition-shadow ${person.profileLink ? 'cursor-pointer' : ''}`}>
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
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">{person.position}</Badge>
                          {person.role && (
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              {person.role}
                            </Badge>
                          )}
                          {person.roles && person.roles.length > 0 && (
                            <>
                              {person.roles.map((role: string, idx: number) => (
                                <Badge key={idx} variant="outline" className="text-xs">{role}</Badge>
                              ))}
                            </>
                          )}
                        </div>
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
            })}
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
