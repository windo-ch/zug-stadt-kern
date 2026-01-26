import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Building, Target, Car, Briefcase, Award } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const MortenHannesboProfil = () => {

  const personalData = {
    name: "Morten Hannesbo",
    position: "Mitglied Schulkommission",
    location: "6300 Zug",
    email: "morten.hannesbo@mac.com",
    profession: "Wirtschaftsführer, ehemaliger CEO AMAG"
  };

  const positions = [
    "Mitglied Schulkommission Stadt Zug",
    "Aktives Mitglied SVP Stadt Zug"
  ];

  const currentMandates = [
    "Mitglied Verwaltungsrat Carvolution",
    "Vizepräsident Swiss eMobility",
    "Mitglied Verwaltungsrat Scott Corporation SA",
    "Mitglied Verwaltungsrat KSU A-Technik AG",
    "Berater für Automobilindustrie (u.a. Boyden Executive Search)"
  ];

  const careerHistory = [
    "Ehemaliger CEO AMAG-Gruppe (über ein Jahrzehnt, bis 2021)",
    "Internationale Karriere bei Toyota, Nissan und Ford",
    "Zuzug in die Schweiz 2006"
  ];

  const education = [
    "Gelernter Schifffahrtskaufmann",
    "MBA"
  ];

  const hobbies = [
    "Rennradfahren",
    "Mountainbiken",
    "Skifahren"
  ];

  return (
    <PageLayout 
      title="Morten Hannesbo - Profil - SVP Stadt Zug"
      description="Morten Hannesbo - Mitglied der Schulkommission Stadt Zug und bekannter Wirtschaftsführer. Ehemaliger CEO der AMAG-Gruppe mit langjähriger Erfahrung in der Automobilbranche."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Wer wir sind", href: "/wer-wir-sind" }
          ]}
          currentPage="Morten Hannesbo"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/moren-hannesbo.jpg"
            description="Schulkommission • Wirtschaftsführer • Automobilexperte"
            roles={["Schulkommissionsmitglied"]}
          />

          <ProfileQuoteCard 
            quote="«Wir lehnen jegliche neue Steuern und Abgaben ab, welche einzelne Bürger und Unternehmen zusätzlich belasten. Ohne Mobilität gibt es kein Wachstum und keinen Wohlstand.»"
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
                    <Car className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Automobilexperte</h4>
                    <p className="text-sm text-muted-foreground">Ehemaliger CEO der AMAG-Gruppe</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Building className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Schulkommission</h4>
                    <p className="text-sm text-muted-foreground">Mitglied der Schulkommission Stadt Zug</p>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                    <strong>Internationale Karriere:</strong> Morten Hannesbo ist ein bekannter Wirtschaftsführer und Politiker in der Schweiz, der vor allem für seine langjährige Karriere in der Automobilbranche bekannt ist. Geboren in Dänemark, verfolgte er eine internationale Karriere bei Marken wie Toyota, Nissan und Ford, bevor er 2006 in die Schweiz zog.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Führung bei AMAG:</strong> Er leitete die AMAG-Gruppe, das grösste Automobilhandelsunternehmen der Schweiz, über ein Jahrzehnt lang als CEO, bevor er 2021 zurücktrat.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Aktuelle Mandate:</strong> Nach seinem Rücktritt bei der AMAG übernahm er diverse Verwaltungsrats- und Beratermandate, unter anderem bei Carvolution, Swiss eMobility, Scott Corporation SA und KSU A-Technik AG. Zudem ist er als Experte für die Automobilindustrie tätig.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Political Priorities */}
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Meine politischen Prioritäten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-4 py-2">
                    «Wir lehnen jegliche neue Steuern und Abgaben ab, welche einzelne Bürger und Unternehmen zusätzlich belasten.»
                  </blockquote>
                  <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-4 py-2">
                    «Ohne Mobilität gibt es kein Wachstum und keinen Wohlstand.»
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <ProfileListSection
              title="Ämter und weitere Tätigkeiten"
              items={positions}
            />

            <ProfileListSection
              title="Aktuelle Mandate"
              items={currentMandates}
              icon={Briefcase}
            />

            <ProfileListSection
              title="Berufliche Laufbahn"
              items={careerHistory}
              icon={Award}
            />
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />

            <ProfilePersonalDataCard personalData={personalData} />

            <ProfileListSection
              title="Ausbildung"
              items={education}
              icon={User}
            />

            <ProfileHobbiesSection hobbies={hobbies} />

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
                    <h4 className="font-semibold text-foreground mb-1">Automobilbranche</h4>
                    <p className="text-sm text-muted-foreground">Über ein Jahrzehnt CEO-Erfahrung bei der AMAG-Gruppe</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensführung</h4>
                    <p className="text-sm text-muted-foreground">Langjährige Erfahrung in internationalen Konzernen</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Elektromobilität</h4>
                    <p className="text-sm text-muted-foreground">Vizepräsident Swiss eMobility</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Bildungspolitik</h4>
                    <p className="text-sm text-muted-foreground">Engagement in der Schulkommission Stadt Zug</p>
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

export default MortenHannesboProfil;
