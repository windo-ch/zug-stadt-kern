import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Stadtrat = () => {

  // City Executive (Stadtrat/Executive Council)
  const stadtrat = [
    {
      name: "André Wicki",
      position: "Stadtrat / Stadtpräsident",
      phone: "058 728 90 01",
      email: "andre.wicki@stadtzug.ch",
      description: "Als Stadtpräsident führt André Wicki die Exekutive der Stadt Zug und vertritt die bürgerlichen Werte in der Stadtregierung.",
      isPresident: true,
      image: "./assets/people/vorstand/Andre-Wicki_SVP.jpg",
      profileLink: "/profil/andre-wicki"
    }
  ];

  // City Parliament (Grosser Gemeinderat/Legislative)
  const gemeinderat: Array<{
    name: string;
    position: string;
    address: string;
    phone: string;
    email: string;
    description: string;
    isFraktionschef: boolean;
    image: string;
    profileLink?: string;
  }> = [
    {
      name: "Roman Küng",
      position: "Gemeinderat",
      address: "Bernoldweg 9, 6300 Zug",
      phone: "041 750 10 55",
      email: "roman.kueng@bluewin.ch",
      description: "Roman Küng ist als erfahrener Gemeinderat und Fraktionschef ein wichtiger Pfeiler der SVP-Politik in Zug.",
      isFraktionschef: true,
      image: "./assets/people/vorstand/Roman-Kueng_SVP.jpg",
      profileLink: "/profil/roman-kueng"
    },
    {
      name: "Philip C. Brunner",
      position: "Gemeinderat, Präsident GPK Stadt Zug",
      address: "Im Rank 109, 6300 Zug", 
      phone: "079 398 4 396",
      email: "phcb@philip-brunner.ch",
      description: "Philip C. Brunner präsidiert die Geschäftsprüfungskommission und bringt seine Expertise in die Gemeindepolitik ein.",
      isFraktionschef: false,
      image: "./assets/people/vorstand/Philip-Brunner_SVP.png",
      profileLink: "/profil/philip-brunner"
    },
    {
      name: "Marcus Bühler",
      position: "Gemeinderat",
      address: "Bahnhofstrasse 27, 6300 Zug",
      phone: "",
      email: "bumbleb@bluewin.ch",
      description: "Marcus Bühler setzt sich als Gemeinderat für pragmatische Lösungen und bürgernahe Politik ein.",
      isFraktionschef: false,
      image: "./assets/people/vorstand/Marcus-Buehler_SVP.jpg",
      profileLink: "/profil/marcus-buehler"
    },
    {
      name: "René Gretener",
      position: "Gemeinderat",
      address: "Lüssirainstrasse 1, 6300 Zug",
      phone: "",
      email: "rghkswiss@gmail.com", 
      description: "René Gretener vertritt die SVP-Werte im Gemeinderat mit Engagement und Sachverstand.",
      isFraktionschef: false,
      image: "./assets/people/gemeinderat/Rene-Gretener-SVP.jpg"
    },
    {
      name: "Manfred Pircher",
      position: "Gemeinderat, Mitglied Bau- und Planungskommission", 
      address: "Lothenbach 7, 6318 Walchwil",
      phone: "041 758 17 30",
      email: "manfred.pircher@bluewin.ch",
      description: "«Es ist nicht genug zu wollen, man muss es auch tun!» Bürger von Hütten, ZH. Lehre als Maschinenmechaniker, Offsetmaschinenmonteur. Seit 1993 selbständig. Gründungsmitglied der SVP Kanton Zug und Stadtpartei. Seit 2001 im Grossen Gemeinderat.",
      isFraktionschef: false,
      image: "./assets/people/gemeinderat/Manfred-Pirchler-SVP.jpg"
    },
    {
      name: "Norbert Schlumpf",
      position: "Gemeinderat",
      address: "Chamerstrasse 36, 6300 Zug",
      phone: "079 208 79 40",
      email: "n.schlumpf@hsk-telematik.ch",
      description: "1959 in Zug (Zugerberg) geboren. Nach der Sekundarschule Lehre bei der Korporation Zug. Seit 1990 selbstständig im Bereich Fiberoptic tätig. Geschäftsführer mit langjähriger Erfahrung.",
      isFraktionschef: false,
      image: "./assets/people/gemeinderat/Schlumpf-Norbert-SVP.jpg",
      profileLink: "/profil/norbert-schlumpf"
    },
    {
      name: "Alex Odermatt",
      position: "Gemeinderat, Mitglied Spezialkommission",
      address: "St. Johannesstrasse 4, 6300 Zug",
      phone: "041 710 18 14",
      email: "alexodermatt@bluewin.ch",
      description: "Mir ist es wichtig auf die Bevölkerung zu hören und ihre Anliegen wahrzunehmen. Darum setz ich mich für Vereine ein. Man muss achten, dass Vereine nicht mit Bürokratie belastet werden sondern sich auf den Einsatz für die Bevölkerung in kulturellen, sportlichen und gesellschaftlichen Belangen konzentrieren können.",
      isFraktionschef: false,
      image: "./assets/people/gemeinderat/Alex-Odermatt-SVP.jpg",
      profileLink: "/profil/alex-odermatt"
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

  return (
    <PageLayout 
      title="SVP-Fraktion - Grosser Gemeinderat Zug"
      description="Lernen Sie die SVP-Fraktion im Grossen Gemeinderat Zug kennen. Unsere Parlamentarier setzen sich für Ihre Anliegen ein."
    >
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="./assets/people/gemeinderat/GGR-2026.png"
              alt="SVP-Fraktion im Grossen Gemeinderat Zug 2026"
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Gradient Overlay - transparent for 70%, then transitions to white in bottom 30% */}
          <div 
            className="absolute inset-0 z-5" 
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, white 100%)'
            }}
          ></div>
          
          {/* Content - Empty hero, just background image */}
          <div className="relative z-10 section-padding w-full">
            <div className="container-max">
            </div>
          </div>
        </section>

        {/* Stadtrat (Exekutive) and Fraktionsleitung (Legislative) - Side by Side */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                SVP-Fraktion im Grossen Gemeinderat
              </h1>
              <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Unsere SVP-Parlamentarier im Grossen Gemeinderat Zug setzen sich täglich für bürgerliche Werte und 
                die Anliegen der Zuger Bevölkerung ein. Lernen Sie unsere Fraktion kennen.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Stadtrat - Executive */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Stadtrat (Exekutive)</h2>
                <div className="space-y-6">
                  {stadtrat.map((person, index) => (
                    <Link
                      key={index}
                      to={person.profileLink || "#"}
                      className="group flex flex-col items-center text-center p-3 hover:scale-105 transition-transform duration-300"
                    >
                      {/* Circular avatar with green border */}
                      <div className="relative mb-3">
                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))] shadow-lg group-hover:shadow-xl group-hover:border-[hsl(var(--svp-green-light))] transition-all duration-300">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Shiny effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                          {/* Subtle overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        {/* Category badge */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[hsl(var(--svp-green))] text-white text-xs font-semibold rounded-full whitespace-nowrap shadow-md group-hover:bg-[hsl(var(--svp-green-light))] transition-colors duration-300">
                          Stadtrat
                        </div>
                      </div>
                      
                      {/* Name */}
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {person.name}
                      </h3>
                      
                      {/* Position */}
                      <p className="text-sm font-semibold text-primary">
                        {person.position}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Fraktionsleitung - Legislative */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Fraktionsleitung</h2>
                <div className="space-y-6">
                  {gemeinderat.filter(p => p.isFraktionschef).map((member, index) => (
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
                    {/* Category badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[hsl(var(--svp-green))] text-white text-xs font-semibold rounded-full whitespace-nowrap shadow-md group-hover:bg-[hsl(var(--svp-green-light))] transition-colors duration-300">
                      Fraktionschef
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
              </div>
            </div>
          </div>
        </section>

        {/* Gemeinderat Mitglieder */}
        <section className="section-padding bg-gradient-to-b from-background to-muted/20">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Gemeinderatsmitglieder</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gemeinderat.filter(p => !p.isFraktionschef).map((member, index) => (
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
                    {/* Category badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[hsl(var(--svp-green))] text-white text-xs font-semibold rounded-full whitespace-nowrap shadow-md group-hover:bg-[hsl(var(--svp-green-light))] transition-colors duration-300">
                      Gemeinderat
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
          </div>
        </section>

        {/* Committee Memberships */}
        <section className="section-padding">
          <div className="container-max">
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
          </div>
        </section>

        {/* Parliamentary Work Info */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-foreground mb-8">Parlamentarische Arbeit</h2>
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Aktuelle Entscheide und Sitzungen
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Die aktuellen Beschlüsse, Traktanden und Sitzungsprotokolle des Grossen Gemeinderats 
                    finden Sie auf der offiziellen Website der Stadt Zug.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://www.stadtzug.ch/politik/grosser-gemeinderat" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Zu den aktuellen Sitzungen
                    </a>
                    <a 
                      href="/vorstoesse" 
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Unsere Vorstösse
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
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
    </PageLayout>
  );
};

export default Stadtrat;