import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, GraduationCap, Target, ExternalLink } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const GregorBruhinProfil = () => {

  const personalData = {
    name: "Gregor R. Bruhin",
    position: "Kantonsrat",
    born: "1993",
    address: "Rosenbergweg 5",
    location: "6300 Zug",
    email: "gb@gregor-bruhin.ch",
    maritalStatus: "ledig",
    profession: "Unternehmer",
    children: "keine"
  };

  const commissions = [
    "2022 - heute: Mitglied erw. Staatswirtschaftskommission Kantonsrat Zug",
    "2015 - 2022: Mitglied Geschäftsprüfungskommission (GPK) Grosser Gemeinderat Stadt Zug"
  ];

  const positions = [
    "2013 - 2024: Vorstandsmitglied SVP Stadt Zug",
    "2014 - 2023: Gemeinderat Stadt Zug",
    "2020 - 2024: Präsident SVP Stadt Zug",
    "2021 - heute: Mitglied Parteileitung SVP Kanton Zug",
    "2022 - heute: Kantonsrat"
  ];

  const education = [
    "eidg. dipl. Betriebswirtschafter HF",
    "HR-Fachmann mit eidg. Fachausweis"
  ];

  const clubs = [
    "2017 - heute: Vorstandsmitglied Offiziersgesellschaft des Kantons Zug",
    "2019 - heute: OK-Präsident Zuger Springkonkurrenz",
    "2020: Prinz Gregor I. Zunft der Letzibuzäli Zug",
    "2023 - heute: Präsident Offiziersgesellschaft des Kantons Zug",
    "2023 - heute: Prinzenobmann Zunft der Letzibuzäli Zug"
  ];

  const hobbies = [
    "Politik", "Joggen", "Pferdesport", "Schwimmen"
  ];

  return (
    <PageLayout 
      title="Gregor R. Bruhin - Profil - SVP Stadt Zug"
      description="Gregor R. Bruhin - Kantonsrat und Unternehmer. Engagiert für Freiheit, Eigenverantwortung und Innovation."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Wer wir sind", href: "/wer-wir-sind" }
          ]}
          currentPage="Gregor R. Bruhin"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/gregor-bruhin.jpg"
            description="Kantonsrat • Unternehmer • Major der Schweizer Armee"
            roles={["Kantonsrat", "Unternehmer", "Major"]}
          />

          <ProfileQuoteCard 
            quote="«Mein politischer Einsatz gilt der Freiheit. Sie fördert eigenverantwortliches Handeln und führt zu Innovation. Diese Kombination führt schlussendlich zu Wohlstand.»"
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
                    Ich bin seit über 12 Jahren im Personalwesen tätig. Zuletzt als Geschäftsleitungsmitglied und Personalleiter eines börsenkotierten Schweizer Unternehmens. Anschliessend habe ich mein eigenes Unternehmen gegründet und biete als Unternehmensberater Dienstleistungen im Bereich HR an.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ursprünglich habe ich eine kaufmännische Lehre abgeschlossen und mich später zum Betriebswirtschafter und Personalfachmann weitergebildet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Militärisch habe ich meine Karriere bei der Infanterie gestartet und war unter anderem 6 Jahre als Offizier im Stab des Zuger Geb Inf Bat 48 eingesetzt. Heute leiste ich meinen Dienst als Major und Chef Kommissariatsdienst im Stab der Territorialdivision 3.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Privat engagiere ich mich im Pferdesport und amtiere als Präsident der Zuger Springkonkurrenz. Früher bin ich selbst aktiv Turniere geritten und war mehrere Jahre Mitglied der Vierkampfnationalmannschaft.
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

            <ProfileListSection
              title="Ausbildung"
              items={education}
              icon={GraduationCap}
            />

            <ProfileListSection
              title="Vereine"
              items={clubs}
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
                  <Target className="w-5 h-5 mr-2" />
                  Fachkompetenz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Personalwesen & HR</h4>
                    <p className="text-sm text-muted-foreground">Über 12 Jahre Erfahrung im Personalwesen, Geschäftsleitungsmitglied und Personalleiter</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensberatung</h4>
                    <p className="text-sm text-muted-foreground">Eigene Unternehmensberatung im Bereich HR</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Militärisches Engagement</h4>
                    <p className="text-sm text-muted-foreground">Major und Chef Kommissariatsdienst im Stab der Territorialdivision 3</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Politische Führung</h4>
                    <p className="text-sm text-muted-foreground">Ehemaliger Präsident SVP Stadt Zug, Kantonsrat</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Online Presence */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2 text-primary" />
                  Online Präsenz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="https://www.gregor-bruhin.ch/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Persönliche Webseite</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/gregor.bruhin/?ref=bookmarks" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Facebook</span>
                  </a>
                  <a 
                    href="https://twitter.com/GregorRBruhin" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Twitter/X</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/greg_on_tour/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Instagram</span>
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UCm4o7-1wvhmB124w60LuVhQ?view_as=subscriber" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">YouTube</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default GregorBruhinProfil;
