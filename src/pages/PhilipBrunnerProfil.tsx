import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Target, Building, Award, Globe, ExternalLink } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';

const PhilipBrunnerProfil = () => {

  const personalData = {
    name: "Philip C. Brunner",
    position: "Kantonsrat, Gemeinderat, Fraktionspräsident",
    born: "1955",
    address: "Im Rank 109",
    location: "6300 Zug", 
    phone: "079 398 4 396",
    email: "phcb@philip-brunner.ch",
    profession: "Konsulent & Berater, dipl. Hotelier EHL"
  };

  const positions = [
    "Fraktionspräsident SVP",
    "Mitglied der engeren Staatswirtschaftskommission", 
    "Kantonsrat, Stadt Zug",
    "Präsident der Geschäftsprüfungskommission (GPK) Stadt Zug",
    "Gemeinderat, GGR der Stadt Zug",
    "Vorstand SVP Stadt Zug",
    "Parteileitung SVP Kanton Zug",
    "Ehrenmitglied SVP Stadt Zug (seit 2024)",
    "Parteivorstand SVP Schweiz",
    "Delegierter SVP Kanton Zug"
  ];

  return (
    <PageLayout 
      title="Philip C. Brunner - Profil - SVP Stadt Zug"
      description="Philip C. Brunner - Kantonsrat, Gemeinderat und Fraktionspräsident der SVP. Konsulent, Berater und diplomierter Hotelier mit umfassender politischer Erfahrung."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Vorstand", href: "/vorstand" }
          ]}
          currentPage="Philip C. Brunner"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/philip-c-brunner.jpg"
            description="Erfahrener Politiker • Hotelier • Wirtschaftsexperte"
            roles={["Kantonsrat", "Fraktionspräsident", "Gemeinderat", "Ehrenmitglied"]}
          />

          <ProfileQuoteCard 
            quote="«Mein persönlicher Einsatz gilt einem erfolgreichen Kanton Zug, allen Zugerinnen und Zugern und der KMU-Wirtschaft. Ich fordere dazu gute Rahmenbedingungen, Eigenverantwortung und viel unternehmerische Freiheit. Das stete Anwachsen der staatlichen Aufgaben in Verwaltung und Staat bekämpfe ich soweit es mir möglich ist ganz entschieden.»"
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
                    <p className="text-sm text-muted-foreground">Langjährige Führungsrollen in Kantonsrat und Gemeinderat</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Award className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Wirtschaftsexperte</h4>
                    <p className="text-sm text-muted-foreground">Diplomierter Hotelier und Unternehmensberater</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Political Experience */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="flex items-center text-xl">
                  <Building className="w-6 h-6 mr-3 text-primary" />
                  Politische Laufbahn
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Umfassende Erfahrung:</strong> Philip C. Brunner verfügt über jahrzehntelange Erfahrung in der Politik auf kommunaler, kantonaler und nationaler Ebene. Als Fraktionspräsident der SVP führt er die zweitstärkste politische Kraft im Kantonsrat.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Führungsverantwortung:</strong> In seinen verschiedenen Rollen als Kantonsrat, Gemeinderat und Präsident der Geschäftsprüfungskommission setzt er sich konsequent für wirtschaftsfreundliche Politik und schlanke Staatsstrukturen ein.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Anerkennung:</strong> Seine langjährigen Verdienste wurden 2024 mit der Ehrenmitgliedschaft der SVP Stadt Zug gewürdigt.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ProfileListSection
              title="Ämter und weitere Tätigkeiten"
              items={positions}
            />

            {/* External Links */}
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Globe className="w-6 h-6 mr-3 text-primary" />
                  Weitere Informationen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground mb-4">
                    Detaillierte Informationen über weitere Mandate und politische Vorstösse finden Sie auf der persönlichen Website.
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="https://www.philip-brunner.ch/persoenlich" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                      <span className="text-sm text-muted-foreground">Weitere Mandate</span>
                    </a>
                    <div className="flex items-center p-3 bg-muted/20 rounded-lg">
                      <span className="text-sm text-muted-foreground font-medium">
                        VORSTÖSSE VON PHILIP C. BRUNNER IM GGR
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />

            <ProfilePersonalDataCard personalData={personalData} />

            {/* Online Presence */}
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
                    href="https://www.philip-brunner.ch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Persönliche Webseite</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Wikipedia Eintrag</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/Philip.C.Brunner" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm text-muted-foreground">Facebook Profil</span>
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
                    <h4 className="font-semibold text-foreground mb-1">Hotellerie</h4>
                    <p className="text-sm text-muted-foreground">Diplomierter Hotelier EHL mit Branchenexpertise</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensberatung</h4>
                    <p className="text-sm text-muted-foreground">Konsulent und Berater für KMU-Wirtschaft</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Politische Führung</h4>
                    <p className="text-sm text-muted-foreground">Fraktionspräsident und Wirtschaftskommission</p>
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

export default PhilipBrunnerProfil;