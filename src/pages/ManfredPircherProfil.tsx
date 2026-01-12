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

const ManfredPircherProfil = memo(() => {
  const personalData = {
    name: "Manfred Pircher",
    position: "Gemeinderat, Mitglied Bau- und Planungskommission",
    born: "1950",
    address: "Lotenbach 7",
    location: "6318 Walchwil",
    phone: "041 758 17 30",
    mobile: "078 626 42 55",
    email: "manfred.pircher@bluewin.ch",
    maritalStatus: "mit Lebenspartnerin",
    profession: "Maschinenmonteur (Offset)"
  };

  const biography = "Bürger von Hütten, ZH, Lehre als Maschinenmechaniker, Offsetmaschinenmonteur, Auslandaufenthalt, Detailhandel-Sport, seit 1993 selbständig";

  const positions = [
    "Gründungsmitglied der SVP Kanton Zug und Stadtpartei",
    "Seit 2001 im Grossen Gemeinderat"
  ];

  const commissions = [
    "Mitglied Bau- und Planungskommission"
  ];

  const clubs = [
    "FCI-Komm.",
    "Vizepräsident für Schweizer-Laufhunde",
    "Prüfungsleiter SLC-Zentralschweiz",
    "Mitglied TKJ der Schweiz",
    "AGJV",
    "PJVZ",
    "Golfclub"
  ];

  const hobbies = [
    "Jagd",
    "Fischen",
    "Golfen",
    "Lesen",
    "Hundeausbildung"
  ];

  const quote = "Für mich ist die lokale Wertschöpfung unserer lokalen Handwerks- und Gewerbebetriebe zentral. Denn KMU bilden das Rückgrat unserer Wirtschaft. Damit sie gut wirtschaften können, braucht es weniger Bürokratie und Vorschriften, damit sich die Unternehmer wieder aufs Arbeiten konzentrieren können. Genau dafür will ich mich politisch einsetzen.";

  return (
    <PageLayout 
      title="Manfred Pircher - Profil - SVP Stadt Zug"
      description="Manfred Pircher - Gemeinderat und Mitglied der Bau- und Planungskommission der SVP Stadt Zug. Gründungsmitglied der SVP Kanton Zug und Stadtpartei."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Stadtrat", href: "/stadtrat" }
          ]}
          currentPage="Manfred Pircher"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/manfred-pircher.jpg"
            description="Gemeinderat • Mitglied Bau- und Planungskommission • Gründungsmitglied SVP"
          />
        </div>

        {quote && (
          <div className="mb-12">
            <ProfileQuoteCard quote={quote} />
          </div>
        )}

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
              title="Ämter und weitere Tätigkeiten"
              items={positions}
              variant="default"
            />

            <ProfileListSection 
              title="Kommissionen"
              items={commissions}
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

ManfredPircherProfil.displayName = 'ManfredPircherProfil';

export default ManfredPircherProfil;

