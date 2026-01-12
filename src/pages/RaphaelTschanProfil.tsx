import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Users, Shield, Flame } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const RaphaelTschanProfil = () => {

  const personalData = {
    name: "Raphael Tschan",
    position: "Vizepräsident SVP Stadt Zug",
    born: "1991",
    address: "Gimenenstrasse 1",
    location: "6300 Zug",
    mobile: "079 835 00 02",
    email: "rt@raphael-tschan.ch",
    maritalStatus: "ledig",
    profession: "Fachexperte Finanzaufsicht / Treuhänder"
  };

  const positions = [
    "Mitglied der Rechnungsprüfungskommission der Stadt Zug",
    "Vizepräsident SVP Stadt Zug",
    "Stiftungsrat der Rudolf und Verena Oetiker-Stiftung",
    "Fachunteroffizier der Feuerwehr Zug"
  ];

  const clubs = [
    "Vorstandsmitglied des Styger Rettungskorps der Feuerwehr der Stadt Zug",
    "Vorstandsmitglied AVES Zug"
  ];

  const hobbies = [
    "Feuerwehr", "Gleitschirmfliegen", "Klettern", "Motorradfahren"
  ];

  return (
    <PageLayout 
      title="Raphael Tschan - Profil - SVP Stadt Zug"
      description="Raphael Tschan - Vizepräsident der SVP Stadt Zug und Mitglied der Rechnungsprüfungskommission. Fachexperte Finanzaufsicht und Treuhänder."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Vorstand", href: "/vorstand" }
          ]}
          currentPage="Raphael Tschan"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/raphael-tschan.jpg"
            description="Finanzexperte • Feuerwehrmann • Engagiert für die Stadt Zug"
            roles={["RPK Mitglied", "Feuerwehr", "Treuhänder"]}
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
                    <Shield className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Finanzexperte</h4>
                    <p className="text-sm text-muted-foreground">Spezialist für Finanzaufsicht und Treuhandwesen</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Flame className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Feuerwehrmann</h4>
                    <p className="text-sm text-muted-foreground">Aktiver Dienst für die Sicherheit unserer Stadt</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ProfileListSection
              title="Ämter und weitere Tätigkeiten"
              items={positions}
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

            {/* Professional Focus */}
            <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Shield className="w-5 h-5 mr-2" />
                  Fachkompetenz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Finanzaufsicht</h4>
                    <p className="text-sm text-muted-foreground">Überwachung und Kontrolle von Finanzgeschäften</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Treuhandwesen</h4>
                    <p className="text-sm text-muted-foreground">Beratung und Verwaltung von Vermögenswerten</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Kommunale Finanzen</h4>
                    <p className="text-sm text-muted-foreground">Expertise in städtischer Budgetierung</p>
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

export default RaphaelTschanProfil;