import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, GraduationCap, Building, Target, Globe, ExternalLink } from 'lucide-react';
import ProfileBreadcrumb from '@/components/profile/ProfileBreadcrumb';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileQuoteCard from '@/components/profile/ProfileQuoteCard';
import ProfileContactCard from '@/components/profile/ProfileContactCard';
import ProfilePersonalDataCard from '@/components/profile/ProfilePersonalDataCard';
import ProfileListSection from '@/components/profile/ProfileListSection';

const AlexandraGretenerProfil = () => {

  const personalData = {
    name: "Alexandra Gretener",
    position: "Schulkommissionsmitglied",
    born: "1994",
    location: "6300 Zug",
    maritalStatus: "ledig",
    email: "alexandra.gretener@gmail.com",
    profession: "Logopädin"
  };

  const positions = [
    "Schulkommissionsmitglied der Stadt Zug seit Mai 2022",
    "Co-Präsidentin VZL seit 2021"
  ];

  const education = [
    "Gymnasiale Matura, Institut Dr. Pfister Oberägeri, Abschluss 2012",
    "Dipl. Primarlehrerin, PH Zug, Abschluss 2015",
    "Dipl. Logopädin EDK, HfH Zürich, Abschluss 2018"
  ];

  return (
    <PageLayout 
      title="Alexandra Gretener - Profil - SVP Stadt Zug"
      description="Alexandra Gretener - Schulkommissionsmitglied der Stadt Zug und Co-Präsidentin VZL. Logopädin mit Engagement für qualitativ hochstehendes Bildungssystem."
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Wer wir sind", href: "/wer-wir-sind" }
          ]}
          currentPage="Alexandra Gretener"
        />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image="/assets/people/profilbilder/alexandra-gretener.jpg"
            description="Schulkommissionsmitglied • Logopädin • Co-Präsidentin VZL"
            roles={["Schulkommissionsmitglied"]}
          />

          <ProfileQuoteCard 
            quote="«Ein starkes, durchlässiges und qualitativ hochstehendes Bildungssystem für alle schafft Chancen, Freiheiten und Lebensqualität. Dies soll weiterhin gefördert werden und dafür setze ich mich ein.»"
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
                    <GraduationCap className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Bildungsexpertin</h4>
                    <p className="text-sm text-muted-foreground">Logopädin und Primarlehrerin mit umfassender Ausbildung</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Building className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Schulkommission</h4>
                    <p className="text-sm text-muted-foreground">Mitglied der Schulkommission seit Mai 2022</p>
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
                    <strong>Bildung als Fundament:</strong> Ein starkes, durchlässiges und qualitativ hochstehendes Bildungssystem für alle schafft Chancen, Freiheiten und Lebensqualität.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Mein Engagement:</strong> Dies soll weiterhin gefördert werden und dafür setze ich mich ein – sowohl in der Schulkommission als auch als Co-Präsidentin der VZL.
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

            {/* Social Media */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-primary" />
                  Social Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="https://www.facebook.com/alexandra.gretener/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm text-muted-foreground">Facebook Profil</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/alexandragretener/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm text-muted-foreground">Instagram Profil</span>
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
                    <h4 className="font-semibold text-foreground mb-1">Logopädie</h4>
                    <p className="text-sm text-muted-foreground">Diplomierte Logopädin EDK mit Expertise in Sprachförderung</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Primarschulpädagogik</h4>
                    <p className="text-sm text-muted-foreground">Diplomierte Primarlehrerin mit PH Zug Ausbildung</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Bildungspolitik</h4>
                    <p className="text-sm text-muted-foreground">Engagement für qualitativ hochstehendes Bildungssystem</p>
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

export default AlexandraGretenerProfil;
