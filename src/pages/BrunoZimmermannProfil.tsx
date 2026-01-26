import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Building, Target, Globe, ExternalLink } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';

const BrunoZimmermannProfil = () => {

  const personalData = {
    name: "Bruno Zimmermann",
    position: "Vizepräsident GGR, Steuergruppe Podium 41",
    born: "1968",
    address: "Im Rank 109",
    location: "6300 Zug",
    phone: "041 552 00 22",
    email: "bruno.zimmermann@mail.ch",
    profession: "Wirtschaftsinformatiker",
    website: "http://www.bruno-zimmermann.ch/"
  };

  const positions = [
    "Von 2012 bis 2024 im Grossen Gemeinderat",
    "Präsident des Grossen Gemeinderates 2019/2020",
    "Seit 2017 Vizepräsident des GGR von Zug",
    "Steuergruppe Podium 41"
  ];

  return (
    <PageLayout 
      title="Bruno Zimmermann - Profil - SVP Stadt Zug"
      description="Bruno Zimmermann - Vizepräsident des GGR von Zug und Mitglied der Steuergruppe Podium 41. IT Projektleiter im Finanzdienstleistungssektor mit langjähriger politischer Erfahrung."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Wer wir sind", href: "/wer-wir-sind" }
          ]}
          currentPage="Bruno Zimmermann"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/bruno-zimmermann.jpg"
            description="Vizepräsident GGR • IT Projektleiter • Politiker"
            roles={["Vizepräsident GGR", "Steuergruppe Podium 41"]}
          />

          <ProfileQuoteCard 
            quote="«Ich setze mich für die Zukunft von Zug ein.»"
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
                    <h4 className="font-semibold text-foreground mb-1">Politiker</h4>
                    <p className="text-sm text-muted-foreground">Vizepräsident des GGR seit 2017</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <User className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">IT Experte</h4>
                    <p className="text-sm text-muted-foreground">Projektleiter im Finanzdienstleistungssektor</p>
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
                    <strong>Politisches Engagement:</strong> Seit 2011 engagiere ich mich aktiv in der Politik. Seit 2017 bin ich Vizepräsident des GGR von Zug.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Berufliche Erfahrung:</strong> Als IT Projektleiter im Finanzdienstleistungssektor konnte ich viel Erfahrung sammeln und diese sogleich in der Politik einsetzen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Führungsverantwortung:</strong> Von 2012 bis 2024 war ich im Grossen Gemeinderat tätig und hatte die Ehre, 2019/2020 als Präsident des Grossen Gemeinderates zu amtieren.
                  </p>
                </div>
              </CardContent>
            </Card>

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
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-4 py-2">
                  «Die Familie muss auch in Zukunft ihre Rolle als tragende Säule der Gesellschaft spielen. Dazu braucht sie grosse Freiräume und möglichst wenig Eingriffe des Staates.»
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />

            <ProfilePersonalDataCard personalData={personalData} />

            {/* Online Presence */}
            {personalData.website && (
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-primary" />
                    Online Präsenz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a 
                      href={personalData.website}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                      <span className="text-sm text-muted-foreground">Persönliche Webseite</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}

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
                    <h4 className="font-semibold text-foreground mb-1">IT Projektmanagement</h4>
                    <p className="text-sm text-muted-foreground">Erfahrung als Projektleiter im Finanzdienstleistungssektor</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Kommunalpolitik</h4>
                    <p className="text-sm text-muted-foreground">Langjährige Erfahrung im Grossen Gemeinderat</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Führung</h4>
                    <p className="text-sm text-muted-foreground">Vizepräsident GGR und ehemaliger Präsident</p>
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

export default BrunoZimmermannProfil;
