import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Target, Building, Award, GraduationCap } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';
import ProfileHobbiesSection from '@/components/profile/ProfileHobbiesSection';

const NorbertSchlumpfProfil = () => {

  const personalData = {
    name: "Norbert Schlumpf",
    position: "Gemeinderat",
    born: "1959",
    address: "Chamerstrasse 36",
    location: "6300 Zug",
    mobile: "079 208 79 40",
    email: "n.schlumpf@hsk-telematik.ch",
    maritalStatus: "geschieden",
    profession: "Geschäftsführer",
    children: "1"
  };

  const education = [
    "Sekundarschule",
    "Lehre bei der Korporation Zug"
  ];

  const hobbies = [
    "Hundeausbildung",
    "Wandern",
    "Sport allgemein"
  ];

  return (
    <PageLayout 
      title="Norbert Schlumpf - Profil - SVP Stadt Zug"
      description="Norbert Schlumpf - Gemeinderat der SVP Stadt Zug. Geschäftsführer mit langjähriger Erfahrung im Bereich Fiberoptic."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Stadtrat", href: "/stadtrat" }
          ]}
          currentPage="Norbert Schlumpf"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/norbert-schlumpf.jpg"
            description="Geschäftsführer • Fiberoptic-Experte • Gemeinderat"
            roles={["Gemeinderat"]}
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
                    <h4 className="font-semibold text-foreground mb-1">Geschäftsführer</h4>
                    <p className="text-sm text-muted-foreground">Selbstständig im Bereich Fiberoptic seit 1990</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Award className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Erfahrung</h4>
                    <p className="text-sm text-muted-foreground">Langjährige Expertise in der Telekommunikationsbranche</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="flex items-center text-xl">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Werdegang
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ich bin 1959 in Zug (Zugerberg) geboren. Nach der Sekundarschule machte ich eine Lehre bei der Korporation Zug. 
                    Seit 1990 bin ich selbstständig im Bereich Fiberoptic tätig und bringe meine langjährige Erfahrung als Geschäftsführer 
                    in die Gemeindepolitik ein.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ProfileHobbiesSection hobbies={hobbies} />
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
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default NorbertSchlumpfProfil;
