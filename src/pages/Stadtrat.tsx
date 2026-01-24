import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import CTASection from '@/components/ctas/CTASection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Building, Shield, DollarSign, FileText, CheckCircle, ExternalLink } from 'lucide-react';

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
      image: "/assets/people/profilbilder/Andre-Wicki_SVP.jpg",
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
      phone: "079 329 13 33",
      email: "roman.kueng@bluewin.ch",
      description: "Roman Küng ist als erfahrener Gemeinderat und Fraktionschef ein wichtiger Pfeiler der SVP-Politik in Zug.",
      isFraktionschef: true,
      image: "/assets/people/profilbilder/roman-kueng.jpg",
      profileLink: "/profil/roman-kueng"
    },
    {
      name: "Philip C. Brunner",
      position: "Präsident GPK Stadt Zug",
      address: "Im Rank 109, 6300 Zug", 
      phone: "079 398 4 396",
      email: "phcb@philip-brunner.ch",
      description: "Philip C. Brunner präsidiert die Geschäftsprüfungskommission und bringt seine Expertise in die Gemeindepolitik ein.",
      isFraktionschef: false,
      image: "/assets/people/profilbilder/philip-c-brunner.jpg",
      profileLink: "/profil/philip-brunner"
    },
    {
      name: "Marcus H. Bühler",
      position: "Vorstand",
      address: "Bahnhofstrasse 27, 6300 Zug",
      phone: "",
      email: "bumbleb@bluewin.ch",
      description: "Marcus H. Bühler setzt sich als Gemeinderat für pragmatische Lösungen und bürgernahe Politik ein.",
      isFraktionschef: false,
      image: "/assets/people/vorstand/Marcus-Buehler_SVP.jpg",
      profileLink: "/profil/marcus-buehler"
    },
    {
      name: "René Gretener",
      position: "",
      address: "Lüssirainstrasse 1, 6300 Zug",
      phone: "",
      email: "rghkswiss@gmail.com", 
      description: "René Gretener vertritt die SVP-Werte im Gemeinderat mit Engagement und Sachverstand.",
      isFraktionschef: false,
      image: "/assets/people/profilbilder/rene-gretener.jpg",
      profileLink: "/profil/rene-gretener"
    },
    {
      name: "Manfred Pircher",
      position: "Mitglied Bau- und Planungskommission", 
      address: "Lotenbach 7, 6318 Walchwil",
      phone: "041 758 17 30",
      email: "manfred.pircher@bluewin.ch",
      description: "«Es ist nicht genug zu wollen, man muss es auch tun!» Bürger von Hütten, ZH. Lehre als Maschinenmechaniker, Offsetmaschinenmonteur. Seit 1993 selbständig. Gründungsmitglied der SVP Kanton Zug und Stadtpartei. Seit 2001 im Grossen Gemeinderat.",
      isFraktionschef: false,
      image: "/assets/people/profilbilder/manfred-pircher.jpg",
      profileLink: "/profil/manfred-pircher"
    },
    {
      name: "Norbert Schlumpf",
      position: "",
      address: "Chamerstrasse 36, 6300 Zug",
      phone: "079 208 79 40",
      email: "n.schlumpf@hsk-telematik.ch",
      description: "1959 in Zug (Zugerberg) geboren. Nach der Sekundarschule Lehre bei der Korporation Zug. Seit 1990 selbstständig im Bereich Fiberoptic tätig. Geschäftsführer mit langjähriger Erfahrung.",
      isFraktionschef: false,
      image: "/assets/people/profilbilder/norbert-schlumpf.jpg",
      profileLink: "/profil/norbert-schlumpf"
    },
    {
      name: "Alex Odermatt",
      position: "Mitglied Bau- und Planungskommission",
      address: "St. Johannesstrasse 4, 6300 Zug",
      phone: "041 710 18 14",
      email: "alexodermatt@bluewin.ch",
      description: "Mir ist es wichtig auf die Bevölkerung zu hören und ihre Anliegen wahrzunehmen. Darum setz ich mich für Vereine ein. Man muss achten, dass Vereine nicht mit Bürokratie belastet werden sondern sich auf den Einsatz für die Bevölkerung in kulturellen, sportlichen und gesellschaftlichen Belangen konzentrieren können.",
      isFraktionschef: false,
      image: "/assets/people/profilbilder/alex-odermatt.jpg",
      profileLink: "/profil/alex-odermatt"
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
              src="/assets/people/gemeinderat/GGR-2026.png"
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
        <Section>
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
        </Section>

        {/* Gemeinderat Mitglieder */}
        <Section variant="muted" id="gemeinderat">
          <SectionHeader
            title="Gemeinderatsmitglieder"
            alignment="center"
            className="mb-8"
          />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gemeinderat
                .filter(p => !p.isFraktionschef)
                .sort((a, b) => {
                  const aLastName = a.name.split(' ').pop() || '';
                  const bLastName = b.name.split(' ').pop() || '';
                  return aLastName.localeCompare(bLastName);
                })
                .map((member, index) => (
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
                  {member.position && (
                    <p className="text-sm font-semibold text-primary">
                      {member.position}
                    </p>
                  )}
                </Link>
              ))}
            </div>
        </Section>

        {/* Parliamentary Work Info */}
        <Section variant="muted">
          <SectionHeader
            title="Parlamentarische Arbeit"
            description="Aktuelle Entscheide, Sitzungen und unsere Vorstösse"
            alignment="center"
            className="mb-8"
          />
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-card/95 border-2 border-border/50 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-block p-4 bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] rounded-2xl shadow-lg mb-6">
                    <Calendar className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Aktuelle Entscheide und Sitzungen
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                    Die aktuellen Beschlüsse, Traktanden und Sitzungsprotokolle des Grossen Gemeinderats 
                    finden Sie auf der offiziellen Website der Stadt Zug.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="btn-hero">
                      <a 
                        href="https://ratsinfo.stadtzug.ch/gremium/1/sessionen#year-2026" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Zu den aktuellen Sitzungen
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="btn-outline">
                      <a 
                        href="https://ratsinfo.stadtzug.ch/gremium/1/geschaefte?itemsPerPage=50&search=SVP&ordering=-begin_date&page=1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Unsere Vorstösse
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Contact Section */}
        <CTASection
          title="Haben Sie Anliegen?"
          description="Unsere Parlamentarier sind für Sie da. Nehmen Sie Kontakt auf, wenn Sie Fragen oder Anregungen haben. Ihre Meinung ist wichtig für die Gestaltung unserer Stadt."
          icon={Users}
          variant="gradient"
          primaryButton={{
            text: "Kontakt aufnehmen",
            href: "/kontakt",
            variant: "primary",
            icon: Users
          }}
        />
      </main>
    </PageLayout>
  );
};

export default Stadtrat;