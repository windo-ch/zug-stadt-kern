import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, GraduationCap, Building, Target, BookOpen } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const DanielGrammProfil = () => {

  const personalData = {
    name: "Daniel Gramm",
    position: "Mitglied Kulturkommission",
    born: "1964",
    location: "6300 Zug",
    maritalStatus: "verheiratet",
    email: "daniel.gramm@bluewin.ch",
    profession: "Betriebsökonom und Lehrer",
    children: "eine Tochter"
  };

  const positions = [
    "Mitglied Kulturkommission Stadt Zug"
  ];

  const education = [
    "Maturität Typus E (Wirtschaftswissenschaften)",
    "Betriebsökonom HWV/FH"
  ];

  const clubs = [
    "Sportverein ehemaliger Kantonsschüler von Zug"
  ];

  const hobbies = [
    "Politik"
  ];

  return (
    <PageLayout 
      title="Daniel Gramm - Profil - SVP Stadt Zug"
      description="Daniel Gramm - Mitglied der Kulturkommission Stadt Zug. Betriebsökonom und Lehrer mit langjähriger Erfahrung in Ausbildung und Projekten."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Wer wir sind", href: "/wer-wir-sind" }
          ]}
          currentPage="Daniel Gramm"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/daniel-gramm.jpg"
            description="Kulturkommission • Lehrer • Betriebsökonom"
            roles={["Kulturkommission"]}
          />

          <ProfileQuoteCard 
            quote="«Wenn wir unsere Demokratie lebendig erhalten wollen, müssen wir wieder den Mut haben, uns unseres eigenen Verstandes zu bedienen und zu sagen, was wir denken und wollen. Und unsere Kinder und Jugendlichen müssen in der Schule wieder lesen, schreiben, rechnen und - vor allem - denken lernen.»"
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
                    <BookOpen className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Lehrer</h4>
                    <p className="text-sm text-muted-foreground">Unterrichtet Mathematik und Deutsch seit 2005</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Building className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Kulturkommission</h4>
                    <p className="text-sm text-muted-foreground">Mitglied der Kulturkommission Stadt Zug</p>
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
                    <strong>Wurzeln in Bern:</strong> Ich bin in Bern aufgewachsen und habe dort nach dem Abschluss als Betriebsökonom HWV/FH während fast 15 Jahren verschiedene Aufgaben in den Bereichen Ausbildung, Personal und Projekte bei den SBB übernommen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Berufliche Entwicklung:</strong> Nach einigen Jahren als Projektleiter und Geschäftsleitungsmitglied einer Treuhandgesellschaft habe ich mich entschieden, einen Lehrberuf zu ergreifen und unterrichte nun seit 2005 Jugendlichen die Fächer Mathematik und Deutsch.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Zuger Wahlheimat:</strong> Seit 1988 lebe ich mit meiner Frau und seit 2004 auch mit unserer Tochter in der schönen Stadt Zug.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Philosophy */}
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Meine Überzeugungen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Demokratie und Eigenverantwortung:</strong> Wenn wir unsere Demokratie lebendig erhalten wollen, müssen wir wieder den Mut haben, uns unseres eigenen Verstandes zu bedienen und zu sagen, was wir denken und wollen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Bildung als Fundament:</strong> Unsere Kinder und Jugendlichen müssen in der Schule wieder lesen, schreiben, rechnen und - vor allem - denken lernen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ProfileListSection
              title="Ämter und weitere Tätigkeiten"
              items={positions}
            />
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />

            <ProfilePersonalDataCard personalData={personalData} />

            <ProfileListSection
              title="Ausbildung"
              items={education}
              icon={GraduationCap}
            />

            <ProfileListSection
              title="Vereine"
              items={clubs}
              icon={Building}
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
                    <h4 className="font-semibold text-foreground mb-1">Betriebswirtschaft</h4>
                    <p className="text-sm text-muted-foreground">Betriebsökonom HWV/FH mit langjähriger Berufserfahrung</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Pädagogik</h4>
                    <p className="text-sm text-muted-foreground">Lehrer für Mathematik und Deutsch seit 2005</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Projektmanagement</h4>
                    <p className="text-sm text-muted-foreground">Erfahrung als Projektleiter und in Geschäftsleitung</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Kultur</h4>
                    <p className="text-sm text-muted-foreground">Engagement in der Kulturkommission Stadt Zug</p>
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

export default DanielGrammProfil;
