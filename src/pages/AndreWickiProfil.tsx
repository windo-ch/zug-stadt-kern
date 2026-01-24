import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Award, GraduationCap, User, ExternalLink, Target } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const AndreWickiProfil = () => {

  const personalData = {
    name: "André Wicki",
    position: "Stadtpräsident",
    born: "1962",
    location: "Zug", 
    email: "andre.wicki@stadtzug.ch",
    maritalStatus: "verheiratet",
    profession: "Stadtpräsident",
    children: "2"
  };

  const positions = [
    "Mitglied SVP Stadt Zug",
    "Vorstandsmitglied SVP Stadt Zug",
    "Präsident Club 200 Leichtathletik Club Hochwacht Zug",
    "Mitglied Rotary-Club Zug",
    "Vorstand Nachbarschaft Oberwil-Gimenen (NOG)",
    "Verwaltungsrat bei der Wasserwerke Zug AG"
  ];

  const education = [
    "1984 – 1987 Studium als Betriebsökonom an der Hochschule Luzern",
    "2000 – 2001 Swiss Executive MBA, Hochschule Luzern",
    "2008 – 2009 European Executive MBA, Hochschule Luzern"
  ];

  const hobbies = [
    "Biken", "Boxen", "Lesen", "Kochen", "Familie und Freunde"
  ];

  return (
    <PageLayout 
      title="André Wicki - Profil - SVP Stadt Zug"
      description="André Wicki - Stadtpräsident von Zug und Vorstandsmitglied der SVP Stadt Zug. Betriebsökonom/MBA mit umfassender Führungserfahrung."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Vorstand", href: "/vorstand" }
          ]}
          currentPage="André Wicki"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/Andre-Wicki_SVP.jpg"
            description="Stadtpräsident von Zug • Unternehmer • Familienvater"
            roles={["Stadtpräsident", "MBA", "SVP Vorstand"]}
          />

          {/* Political Priorities */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">"</span>
                  </div>
                  <div>
                    <blockquote className="text-lg italic text-foreground mb-4 leading-relaxed">
                      «Es braucht attraktive Bedingungen für Kleingewerbe und Wirtschaft.»
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">"</span>
                  </div>
                  <div>
                    <blockquote className="text-lg italic text-foreground mb-4 leading-relaxed">
                      «Es braucht zahlbaren Wohnraum für alle Zugerinnen und Zuger.»
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
                    <h4 className="font-semibold text-foreground mb-1">Stadtführung</h4>
                    <p className="text-sm text-muted-foreground">Verantwortung für die gesamte Stadt Zug</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Award className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Wirtschaftsexperte</h4>
                    <p className="text-sm text-muted-foreground">MBA und langjährige Führungserfahrung</p>
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
                    <strong>Frühe Jahre:</strong> Geboren 1962, wuchs ich in Cham und Hünenberg auf. Seit 1992 lebe ich mit meiner Familie in Zug und bin stolzer Zuger Bürger.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Familie:</strong> Meine Frau Lucia und ich heirateten im November 1992 im Stadthaus am Kolinplatz und sind enorm stolz auf unsere beiden Töchter.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Berufliche Laufbahn:</strong> Nach meinem Ökonomie-Studium und MBA-Abschluss habe ich bis 2010 verschiedene Führungspositionen in nationalen und internationalen Unternehmen, zuletzt als Geschäftsleitungsmitglied bekleidet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Stadtpräsident:</strong> Als Stadtpräsident setze ich mich für attraktive Bedingungen für Wirtschaft und bezahlbaren Wohnraum für alle Zugerinnen und Zuger ein.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ProfileListSection
              title="Ämter und weitere Tätigkeiten"
              items={positions}
            />

            <ProfileListSection
              title="Ausbildung"
              items={education}
              icon={GraduationCap}
            />

            <ProfileHobbiesSection hobbies={hobbies} />
            <Card className="shadow-md hover:shadow-lg transition-shadow mt-6">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground italic">
                  "In meiner Freizeit finde ich beim Biken, Boxen, Lesen, Kochen und mit Familie und Freunden den Ausgleich zum beruflichen Alltag."
                </p>
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
                  <ExternalLink className="w-5 h-5 mr-2 text-primary" />
                  Online Präsenz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Persönliche Webseite</span>
                  </a>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">Social Media Profile verfügbar</span>
                  </div>
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
                    <h4 className="font-semibold text-foreground mb-1">Stadtführung</h4>
                    <p className="text-sm text-muted-foreground">Gesamtverantwortung für die Stadt Zug</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensführung</h4>
                    <p className="text-sm text-muted-foreground">MBA und internationale Führungserfahrung</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Wirtschaftspolitik</h4>
                    <p className="text-sm text-muted-foreground">Förderung von KMU und bezahlbarem Wohnraum</p>
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

export default AndreWickiProfil;