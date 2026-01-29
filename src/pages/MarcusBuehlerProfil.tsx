import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Users, Target, Building, Award, GraduationCap, ExternalLink, Linkedin } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const MarcusBuehlerProfil = () => {

  const personalData = {
    name: "Marcus H. Bühler",
    position: "Vorstandsmitglied",
    born: "1962",
    address: "Bahnhofstrasse 27",
    location: "6300 Zug",
    mobile: "079 340 81 68",
    email: "bumbleb@bluewin.ch",
    maritalStatus: "geschieden",
    profession: "Unternehmer und Verwaltungsrat in verschiedenen Unternehmungen, Vorsitzender Prüfungs-und Risikoausschuss",
    children: "keine"
  };

  const commissions = [
    "Mitglied der Nachhaltigkeitskommission der Stadt Zug",
    "Mitglied der kantonalen Mittelschulkommission"
  ];

  const education = [
    "MBA",
    "CFA (Chartered Financial Analyst)",
    "Swiss Board School IMP-HSG"
  ];

  const clubs = [
    "Zuger kantonaler Patentjägerverein",
    "Bündner Patentjägerverein"
  ];

  const hobbies = [
    "Fliegenfischen", "Jagd", "Schafe"
  ];

  return (
    <PageLayout 
      title="Marcus H. Bühler - Profil - SVP Stadt Zug"
      description="Marcus H. Bühler - Vorstandsmitglied der SVP Stadt Zug und Gemeinderat. Unternehmer mit MBA, CFA und umfassender Verwaltungsratserfahrung."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Vorstand", href: "/vorstand" }
          ]}
          currentPage="Marcus Bühler"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/svp-marcus-buehler-profil.jpg"
            description="Unternehmer • Verwaltungsrat • Schweiz-Enthusiast"
            roles={["Gemeinderat", "CFA", "MBA"]}
          />

          <ProfileQuoteCard 
            quote="«Als Unternehmer und Bürger setze ich auf einen vernünftigen Umgang mit unseren Finanzen. Meine Grundhaltung ist: zum Bestehenden Sorge tragen, ohne sich Neuem zu verschliessen und darauf zu achten, dass wir unser Schicksal nicht an Dritte delegieren, sondern selber mit Augenmass und Eigenverantwortung wahrnehmen.»"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="flex items-center text-xl">
                  <User className="w-6 h-6 mr-3 text-primary" />
                  Engagement & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Building className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Unternehmer</h4>
                    <p className="text-sm text-muted-foreground">Verwaltungsrat und Prüfungsausschuss-Vorsitzender</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Award className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Finanzexperte</h4>
                    <p className="text-sm text-muted-foreground">CFA und MBA mit internationaler Erfahrung</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Philosophy */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="flex items-center text-xl">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Meine Überzeugungen
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Finanzielle Verantwortung:</strong> Als Unternehmer und Bürger setze ich auf einen vernünftigen Umgang mit unseren Finanzen. Geld, das einem nicht gehört auszugeben ist einfach, wird aber in der Tendenz, immer öfter, als gegeben erachtet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Schweizer Patriotismus:</strong> Engagiert und begeistert, bin ich ein Fan der Schweiz und von Zug. Durch meine Berufsjahre im Ausland wurde meine Haltung «pro CH» zusätzlich verstärkt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Verantwortungsvolle Führung:</strong> Meine Grundhaltung ist: zum Bestehenden Sorge tragen, ohne sich Neuem zu verschliessen und darauf zu achten, dass wir unser Schicksal nicht an Dritte delegieren.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ProfileListSection
              title="Mitgliedschaften Kommissionen"
              items={commissions}
            />

            <ProfileListSection
              title="Vereine & Organisationen"
              items={clubs}
              icon={Users}
            />

            <ProfileHobbiesSection hobbies={hobbies} />
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />

            <ProfilePersonalDataCard personalData={personalData} />

            <ProfileListSection
              title="Ausbildung & Qualifikationen"
              items={education}
              icon={GraduationCap}
            />

            {/* Online Presence */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2 text-primary" />
                  Professionelle Netzwerke
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">LinkedIn Profil</span>
                  </a>
                </div>
              </CardContent>
            </Card>

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
                    <h4 className="font-semibold text-foreground mb-1">Finanzanalyse</h4>
                    <p className="text-sm text-muted-foreground">CFA-zertifizierte Expertise in Finanzanalyse</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensführung</h4>
                    <p className="text-sm text-muted-foreground">Verwaltungsrat und Prüfungsausschuss-Vorsitzender</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Nachhaltigkeit</h4>
                    <p className="text-sm text-muted-foreground">Kommissionsmitglied für nachhaltige Stadtentwicklung</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default MarcusBuehlerProfil;