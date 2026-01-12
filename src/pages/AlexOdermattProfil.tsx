import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Users, Target, Building, Award, GraduationCap } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const AlexOdermattProfil = () => {

  const personalData = {
    name: "Alex Odermatt",
    position: "Gemeinderat, Mitglied Spezialkommission",
    born: "1969",
    address: "St. Johannesstrasse 4",
    location: "6300 Zug",
    phone: "041 710 18 14",
    mobile: "079 335 63 54",
    email: "alexodermatt@bluewin.ch",
    maritalStatus: "geschieden",
    profession: "Sachbearbeiter Logistik",
    children: "1"
  };

  const commissions = [
    "Mitglied Spezialkommission"
  ];

  const positions = [
    "Verwaltungsratsmitglied Odermatt-Lederwaren AG"
  ];

  const education = [
    "Obligatorische Schulzeit",
    "Servicelehre",
    "Englischschule USA",
    "Weiterbildung Bar und Reception",
    "ECDL und Sachbearbeiter"
  ];

  const clubs = [
    "OK-Mitglied Inthronisation Letzibuzäli",
    "OK Mitglied Pressesprecher Zunft Letzibuzäli",
    "Passivmitglied Oberwiler Rebells"
  ];

  const hobbies = [
    "Vereine (siehe Vereine)"
  ];

  return (
    <PageLayout 
      title="Alex Odermatt - Profil - SVP Stadt Zug"
      description="Alex Odermatt - Gemeinderat der SVP Stadt Zug. Engagiert für Vereine und bürgernahe Politik ohne übermässige Bürokratie."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Stadtrat", href: "/stadtrat" }
          ]}
          currentPage="Alex Odermatt"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/alex-odermatt.jpg"
            description="Sachbearbeiter • Vereins-Engagierter • Gemeinderat"
            roles={["Gemeinderat"]}
          />

          <ProfileQuoteCard 
            quote="«Mir ist es wichtig auf die Bevölkerung zu hören und ihre Anliegen wahrzunehmen. Darum setz ich mich für Vereine ein. Man muss achten, dass Vereine nicht mit Bürokratie belastet werden sondern sich auf den Einsatz für die Bevölkerung in kulturellen, sportlichen und gesellschaftlichen Belangen konzentrieren können.»"
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
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Vereins-Engagement</h4>
                    <p className="text-sm text-muted-foreground">Aktives Engagement für Vereine und kulturelle Anlässe</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Building className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Gemeinderat</h4>
                    <p className="text-sm text-muted-foreground">Mitglied der Spezialkommission</p>
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
                    <strong>Bürgernähe:</strong> Mir ist es wichtig auf die Bevölkerung zu hören und ihre Anliegen wahrzunehmen. 
                    Darum setze ich mich für Vereine ein.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Weniger Bürokratie:</strong> Man muss achten, dass Vereine nicht mit Bürokratie belastet werden, 
                    sondern sich auf den Einsatz für die Bevölkerung in kulturellen, sportlichen und gesellschaftlichen Belangen 
                    konzentrieren können.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Background */}
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
                    Geboren in Zug 1969. Kindergarten, Primarschule danach Sekundarschule in Zug. Lehre im alten Restaurant 
                    Rössli Zug (Service). Aufenthalt in den USA. Diverse Saisonstellen in der Schweiz. Ab 1991 bei der Firma 
                    Büro AG Zug, dazwischen 6 Jahre Glaserei Felber Steinhausen und zur Zeit wieder im Verkauf Büroeinrichtungen 
                    bei der Büro AG Zug.
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

            <ProfileListSection
              title="Ämter und weitere Tätigkeiten"
              items={positions}
              icon={Award}
            />
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default AlexOdermattProfil;
