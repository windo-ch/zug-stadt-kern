import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Users, Target, Car } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const RomanKuengProfil = () => {

  const personalData = {
    name: "Roman Küng",
    position: "Vizepräsident & GGR Fraktionspräsident",
    born: "1972",
    address: "Bernoldweg 9",
    location: "6300 Zug", 
    phone: "041 750 10 55",
    mobile: "079 329 13 33",
    email: "roman.kueng@bluewin.ch",
    maritalStatus: "ledig",
    profession: "Garagist",
    children: "keine"
  };

  const positions = [
    "Seit 2019 im Grossen Gemeinderat"
  ];

  const education = [
    "Lehre als Auto-Elektriker",
    "Weiterbildung zum Automobil Diagnostiker",
    "Selbständiger Garagist seit 1998"
  ];

  const hobbies = [
    "Reisen", "Wandern", "Historischer Motorsport"
  ];

  return (
    <PageLayout 
      title="Roman Küng - Profil - SVP Stadt Zug"
      description="Roman Küng - Vizepräsident & GGR Fraktionspräsident, Gemeinderat der SVP Stadt Zug. Garagist und Unternehmer für wirtschaftsfreundliche Politik."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Vorstand", href: "/vorstand" }
          ]}
          currentPage="Roman Küng"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/roman-kueng.jpg"
            description="Gemeinderat • Unternehmer • Zuger Urgestein"
            roles={["Gemeinderat", "Garagist", "GGR Fraktionspräsident"]}
          />

          <ProfileQuoteCard 
            quote="«Ich setze mich für eine attraktive Stadt ein. Unsere Wirtschaft und unser Gewerbe brauchen gute Rahmenbedingungen und keine lebensfremde, bevormundende, bürokratische Politik. Die Wirtschaft soll wachsen, nicht der Staat!»"
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
                    <h4 className="font-semibold text-foreground mb-1">Unternehmer</h4>
                    <p className="text-sm text-muted-foreground">Garagist und Geschäftsführer seit 1998</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Politiker</h4>
                    <p className="text-sm text-muted-foreground">Fraktionspräsident im Grossen Gemeinderat</p>
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
                    <strong>Wurzeln in Zug:</strong> Ich bin 1972 in Zug geboren and in Allenwinden aufgewachsen. Mein ganzes Leben verbrachte ich im Kanton Zug (Gemeinden Zug und Baar) und würde mich deshalb als „Zuger Urgestein" bezeichnen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Berufliche Laufbahn:</strong> Nach der Sekundarschule machte ich eine Lehre als Auto-Elektriker, mit anschliessender Weiterbildung zum eidg. diplomierten Automobil Diagnostiker.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Unternehmerische Verantwortung:</strong> 1998 übernahmen mein Bruder und ich den elterlichen Garagenbetrieb; die heutige Garage Hans & Roman Küng in Neuägeri.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Persönliches:</strong> Ich habe keine Kinder und bin unverheiratet, was mir ermöglicht, mich voll und ganz meinen beruflichen und politischen Aufgaben zu widmen.
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
                <CardDescription className="text-lg font-semibold text-primary">Klartext</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-4 py-2">
                  «Ich setze mich für eine attraktive Stadt ein. Unsere Wirtschaft und unser Gewerbe brauchen gute Rahmenbedingungen und keine lebensfremde, bevormundende, bürokratische Politik. Die Wirtschaft soll wachsen, nicht der Staat!»
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />

            <ProfilePersonalDataCard personalData={personalData} />

            <ProfileListSection
              title="Ausbildung & Beruflicher Werdegang"
              items={education}
              icon={Car}
              variant="compact"
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
                    <p className="text-sm text-muted-foreground">Expertise in Fahrzeugtechnik und Diagnosesystemen</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensführung</h4>
                    <p className="text-sm text-muted-foreground">25+ Jahre Erfahrung im Garagenbetrieb</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Kommunalpolitik</h4>
                    <p className="text-sm text-muted-foreground">Wirtschaftsfreundliche Stadtentwicklung</p>
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

export default RomanKuengProfil;