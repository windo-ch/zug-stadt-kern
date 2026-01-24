import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, GraduationCap, Target, Award, Building, ExternalLink } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const HeinzTaennlerProfil = () => {

  const personalData = {
    name: "Heinz Tännler",
    position: "Regierungsrat, Finanzdirektor",
    born: "10. Mai 1960",
    location: "Zug",
    phone: "+41 41 594 36 60",
    email: "heinz.taennler@zg.ch",
    maritalStatus: "verheiratet",
    profession: "lic.iur., Rechtsanwalt und Notar",
    children: "drei erwachsene Kinder"
  };

  const regierungsratTimeline = [
    "Regierungsrat seit 2007",
    "2007–März 2016: Vorsteher der Baudirektion",
    "2015–2016: Landammann",
    "Seit April 2016: Vorsteher der Finanzdirektion",
    "Stellvertreter a. i.: Andreas Hostettler"
  ];

  const nebenamtlicheTaetigkeiten = [
    "Schweizer Salinen, Mitglied",
    "Konferenz der kantonalen Finanzdirektorinnen und Finanzdirektoren (FDK), Mitglied",
    "Konferenz der NFA-Geberkantone, Vorsitzender",
    "Informatikkonferenz Kanton-Gemeinden, Präsident",
    "Zuger Pensionskasse: Vorstandsmitglied, Vize-Präsident",
    "Zuger Pensionskasse Anlagekommission: Präsident",
    "Zuger Pensionskasse Personal- und Wahlausschuss: Präsident",
    "Zentralschweizer Finanzdirektorenkonferenz (ZFDK): Präsident",
    "Zentralschweizer Regierungskonferenz (ZRK): Mitglied",
    "Axpo, politisches Begleitgremium: Mitglied",
    "Verein Nationales Testinstitut für Cybersicherheit (NTC): Gründungsmitglied, Präsident",
    "Verein ITSec4KMU: Gründungsmitglied, Präsident",
    "Swiss Blockchain Federation (SBF): Präsident",
    "Verein Blockchain Zug Joint Research Hub: Gründungsmitglied, Präsident",
    "Verein Blockchain Zug Forschungsinstitut an der Universität Luzern: Gründungsmitglied, Präsident",
    "Europakommission Konferenz der Kantonsregierungen (KdK): Mitglied"
  ];

  const privateMandate = [
    "Rotary Zug-Zugersee, Mitglied",
    "Zunft Bauleute, Mitglied",
    "ESAF-Stiftungsrat, Stiftungsrat"
  ];

  const parteipolitischeMandate = [
    "Engere und erweiterte Parteileitung SVP Kanton Zug, Mitglied"
  ];

  const praesidien = [
    "2010–2018: Minergie Schweiz",
    "2017–2019: OK Eidgenössisches Schwing- und Älplerfest (ESAF 2019)",
    "Aktuell: Zentralschweizer Finanzdirektorenkonferenz (ZFDK)",
    "Aktuell: Swiss Blockchain Federation"
  ];

  const werdegang = [
    "1985–1988: Rechtsstudium an der Universität Zürich",
    "1989–1991: Berufspraktika: Erwerb des Rechtsanwalts- und Notariatspatentes",
    "1992–2003: Anwalts- und Notariatstätigkeit in Zug",
    "2004–2006: Direktor der Rechtsabteilung des Weltfussballverbandes in Zürich (FIFA) und Mitglied der Geschäftsleitung",
    "1995–2003: Einzelrichter des Schweizerischen Eishockeyverbandes"
  ];

  const politischeTaetigkeiten = [
    "1995–2003: Mitglied des Kantonsrats",
    "Präsident der Spitalkommission",
    "Mitglied der engeren Staatswirtschaftskommission"
  ];

  const hobbies = [
    "Velofahren", "Tennisspielen"
  ];

  return (
    <PageLayout 
      title="Heinz Tännler - Profil - SVP Stadt Zug"
      description="Heinz Tännler - Regierungsrat und Finanzdirektor des Kantons Zug. Seit 2007 im Regierungsrat, seit 2016 Vorsteher der Finanzdirektion."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Wer wir sind", href: "/wer-wir-sind" }
          ]}
          currentPage="Heinz Tännler"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/Heinz-Taennler.jpg"
            description="Regierungsrat • Finanzdirektor • Landammann 2015/2016"
            roles={["Regierungsrat", "Finanzdirektor", "Rechtsanwalt"]}
          />

          <ProfileQuoteCard 
            quote="«Der Wirtschaftsstandort Zug bietet nicht nur Vielfalt und Innovation, sondern auch interessante Arbeitsplätze und eine schöne Landschaft. Dass wir die Attraktivität unseres Kantons in jeder Hinsicht beibehalten können, dafür setze ich mich als Regierungsrat und Finanzdirektor ein.»"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Biography */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="flex items-center text-xl">
                  <User className="w-6 h-6 mr-3 text-primary" />
                  Über Heinz Tännler
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Heinz Tännler, geboren 1960, wurde 2007 in den Regierungsrat gewählt. Neun Jahre lang stand er der Baudirektion vor und repräsentierte den Kanton Zug 2015/2016 als Landammann. Seit April 2016 amtet er als Finanzdirektor.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Zuvor war er Kantonsratsmitglied, präsidierte die Spitalkommission und war Mitglied der engeren Staatswirtschaftskommission. Heinz Tännler ist verheiratet, hat drei erwachsene Kinder und ist Bürger von Innertkirchen BE. In seiner Freizeit betätigt er sich sportlich beim Velofahren oder Tennisspielen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ProfileListSection
              title="Regierungsratstätigkeit"
              items={regierungsratTimeline}
              icon={Award}
            />

            <ProfileListSection
              title="Werdegang bis zur Wahl in den Regierungsrat"
              items={werdegang}
              icon={GraduationCap}
            />

            <ProfileListSection
              title="Politische Tätigkeiten vor der Wahl in den Regierungsrat"
              items={politischeTaetigkeiten}
              icon={Building}
            />

            <ProfileListSection
              title="Präsidien während der Regierungsratstätigkeit"
              items={praesidien}
              icon={Award}
            />

            <ProfileHobbiesSection hobbies={hobbies} />
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />

            <ProfilePersonalDataCard personalData={personalData} />

            <ProfileListSection
              title="Nebenamtliche Tätigkeiten und Interessenbindungen"
              items={nebenamtlicheTaetigkeiten}
              variant="compact"
            />

            <ProfileListSection
              title="Private Mandate"
              items={privateMandate}
              variant="compact"
            />

            <ProfileListSection
              title="Parteipolitische Mandate"
              items={parteipolitischeMandate}
              variant="compact"
            />

            {/* Professional Focus */}
            <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Target className="w-5 h-5 mr-2" />
                  Fachkompetenz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Finanzdirektion</h4>
                    <p className="text-sm text-muted-foreground">Vorsteher der Finanzdirektion seit 2016</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Baudirektion</h4>
                    <p className="text-sm text-muted-foreground">Vorsteher der Baudirektion 2007–2016</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Recht & Verwaltung</h4>
                    <p className="text-sm text-muted-foreground">Rechtsanwalt und Notar mit langjähriger Erfahrung</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Blockchain & Innovation</h4>
                    <p className="text-sm text-muted-foreground">Präsident Swiss Blockchain Federation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Online Presence */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2 text-primary" />
                  Online Präsenz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="https://heinz-taennler.ch/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Persönliche Website von Heinz Tännler</span>
                  </a>
                  <a 
                    href="https://www.zg.ch/behoerden/regierungsrat/heinz-taennler" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Regierungsrat Kanton Zug</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default HeinzTaennlerProfil;
