import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, GraduationCap, Target } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const AdriansRisiProfil = () => {

  const personalData = {
    name: "Adrian Risi",
    position: "Kantonsrat",
    born: "1962",
    address: "Eichwaldstrasse 22",
    location: "6300 Zug",
    phone: "041 766 99 55",
    mobile: "079 606 62 56",
    email: "adrian.risi@risiimmobilienag.ch",
    maritalStatus: "verheiratet",
    profession: "Dipl. betr. oec. FH",
    children: "1 Sohn"
  };

  const commissions = [
    "RUV (Kommission für Raumplanung, Umwelt, Verkehr)",
    "Präsident der Kommission für Tiefbau und Gewässer", 
    "Ad Hoc Kommission Gastgewerbegesetz",
    "Ad Hoc Kommission Ladenöffnungsgesetz",
    "Ad Hoc Kommission Strassenverkehrssteuergesetz"
  ];

  const positions = [
    "VR der EVZ Sport AG",
    "Vorstandsmitglied der Zuger Wirtschaftskammer (Leiter Branchenausschuss Infrastruktur)"
  ];

  const education = [
    "Matura Typ B",
    "Studium der Betriebswirtschaft an der FH Luzern"
  ];

  const clubs = [
    "Mitglied Lions Club Stadt Zug (1994)",
    "Meister der Zunft der Schneider, Tuchscherer und Gewerbsleute der Stadt Zug (1999)"
  ];

  const hobbies = [
    "Sport", "Fitness", "Skifahren", "Lesen", "Kino", "EVZ"
  ];

  return (
    <PageLayout 
      title="Adrian Risi - Profil - SVP Stadt Zug"
      description="Adrian Risi - Kantonsrat und Präsident der SVP Stadt Zug. Erfahrener Unternehmer mit jahrzehntelanger Führungserfahrung."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Vorstand", href: "/vorstand" }
          ]}
          currentPage="Adrian Risi"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/adrian-risi.jpg"
            description="Präsident SVP Stadt Zug • Unternehmer • Brückenbauer für bürgerliche Politik"
            roles={["Kantonsrat", "Unternehmer", "Präsident SVP Stadt Zug"]}
          />

          <ProfileQuoteCard 
            quote="«In meiner Rolle als Kantonsrat sehe ich mich als Brückenbauer für eine bürgerliche, wirtschaftsfreundliche und zukunftsgerichtete Politik. Mit meiner jahrzehntelangen Erfahrung als Unternehmer kann ich eine Führungsrolle übernehmen.»"
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
                  Werdegang
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Frühe Jahre und Ausbildung:</strong> Ich wurde am 10. November 1962 in Zug geboren und bin in Oberwil aufgewachsen. Nach den Schulen und dem Studium folgte ein jähriger Auslandaufenthalt, der meinen Horizont erweiterte.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Beruflicher Werdegang:</strong> Beruflich war ich am Anfang in der Wirtschaftsprüfung tätig und wechselte 1991 in unsere Familienfirma, die Risi AG. Ab 1995 übernahm ich die Leitung der gesamten Risi Gruppe.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>JURA Holding Ära:</strong> 2010, mit dem Verkauf der Firmengruppe an die JURA Holding AG, übernahm ich innerhalb der JURA die Leitung der gesamten Produktion und Technik mit insgesamt 500 Mitarbeitern.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Rückkehr zur Familienfirma:</strong> Ende 2019 verliess ich die JURA Gruppe und kehrte zurück zur Familienunternehmung, der Risi Immobilien AG, die ich nun in die Zukunft führe. Daneben bin ich als Berater und aktiver VR in verschiedenen Verwaltungsräten von KMU&apos;s innerhalb der Bauindustrie tätig.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ProfileListSection
              title="Mitgliedschaften Kommissionen"
              items={commissions}
            />

            <ProfileListSection
              title="Ämter und weitere Tätigkeiten"
              items={positions}
            />

            {/* Political Priorities */}
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Meine politischen Prioritäten
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">Klartext</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-4 py-2">
                  «Ich stehe für eine zukunfsgerichtete, wirtschaftsfreundliche, aber auch bürgerlich-konservative Politik ein.»
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />

            <ProfilePersonalDataCard personalData={personalData} />

            <ProfileListSection
              title="Politische Mandate"
              items={commissions}
            />

            <ProfileListSection
              title="Weitere Tätigkeiten"
              items={positions}
            />

            <ProfileListSection
              title="Ausbildung"
              items={education}
              icon={GraduationCap}
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
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensführung</h4>
                    <p className="text-sm text-muted-foreground">Langjährige Erfahrung in der Leitung von Unternehmen</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Immobilienwirtschaft</h4>
                    <p className="text-sm text-muted-foreground">Expertise in Immobilienentwicklung und -verwaltung</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Politische Führung</h4>
                    <p className="text-sm text-muted-foreground">Brückenbauer für bürgerliche Politik</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ProfileHobbiesSection hobbies={hobbies} />
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default AdriansRisiProfil;