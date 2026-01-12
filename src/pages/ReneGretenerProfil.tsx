import { memo } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';
import { Card, CardContent } from '@/components/ui/card';

const ReneGretenerProfil = memo(() => {
  const personalData = {
    name: "René Gretener",
    position: "Gemeinderat",
    born: "1961",
    address: "Lüssirainstrasse 1",
    location: "6300 Zug",
    phone: "041 711 45 01",
    mobile: "079 962 49 28",
    email: "rghkswiss@gmail.com",
    maritalStatus: "Verheiratet",
    profession: "Vermögensverwalter",
    children: "2"
  };

  const education = [
    "Kaufmännische Lehre",
    "Verschiedene interne/externe Ausbildungen"
  ];

  const clubs = [
    "Letzibuzäli Zunft Stadt Zug",
    "Club 200 Sportverein Hochwacht Zug"
  ];

  const hobbies = [
    "Ski",
    "Golf",
    "Oldtimerfahrzeuge"
  ];

  const biography = "Geboren, aufgewachsen und Primar-/Bezirksschule absolviert in Mellingen/AG. Kaufmännische Versicherungslehre, anschliessend Wechsel ins Bankwesen mit diversen Weiterbildungen zum Anlagespezialisten. Verschiedene Kaderstellen bei SBG/SBV/UBS sowie BNP Paribas. Über zehn Jahre in Hong Kong im Bereich Swiss Private Banking tätig. Seit der Rückkehr 2004 in der Stadt Zug zu Hause und ab 2011 auch hier arbeitstätig durch Eintritt in eine ortsansässige Firma im Bereich der internationalen Vermögensverwaltung. Seit 2021 Bürger der Stadt Zug.";

  return (
    <PageLayout 
      title="René Gretener - Profil - SVP Stadt Zug"
      description="René Gretener - Gemeinderat der SVP Stadt Zug. Vermögensverwalter mit langjähriger Erfahrung im Bankwesen und Swiss Private Banking."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Stadtrat", href: "/stadtrat" }
          ]}
          currentPage="René Gretener"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/rene-gretener.jpg"
            description="Gemeinderat • Vermögensverwalter • Bürger der Stadt Zug"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            {biography && (
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Über mich</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {biography}
                  </p>
                </CardContent>
              </Card>
            )}

            <ProfileListSection 
              title="Ausbildung"
              items={education}
              variant="default"
            />

            <ProfileListSection 
              title="Vereine"
              items={clubs}
              variant="default"
            />

            <ProfileHobbiesSection hobbies={hobbies} />
          </div>

          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />
            <ProfilePersonalDataCard personalData={personalData} />
          </div>
        </div>
      </main>
    </PageLayout>
  );
});

ReneGretenerProfil.displayName = 'ReneGretenerProfil';

export default ReneGretenerProfil;

