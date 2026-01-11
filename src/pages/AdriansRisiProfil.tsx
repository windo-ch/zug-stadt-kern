import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, Calendar, GraduationCap, Users, Target, Share2, Twitter } from 'lucide-react';

const AdriansRisiProfil = () => {

  const personalData = {
    name: "Adrian Risi",
    position: "Kantonsrat",
    born: "1962",
    address: "Eichwaldstrasse 22",
    location: "6300 Zug",
    phone: "041 766 99 55",
    mobile: "079 606 62 56",
    email: "adrian.risi@risiimmobilienag.ch",
    maritalStatus: "verheiratet",
    profession: "Dipl. betr. oec. FH",
    children: "1 Sohn"
  };

  const commissions = [
    "RUV (Kommission für Raumplanung, Umwelt, Verkehr)",
    "Präsident der Kommission für Tiefbau und Gewässer", 
    "Ad Hoc Kommission Gastgewerbegesetz",
    "Ad Hoc Kommission Ladenöffnungsgesetz",
    "Ad Hoc Kommission Strassenverkehrssteuergesetz"
  ];

  const positions = [
    "VR der EVZ Sport AG",
    "Vorstandsmitglied der Zuger Wirtschaftskammer (Leiter Branchenausschuss Infrastruktur)"
  ];

  const education = [
    "Matura Typ B",
    "Studium der Betriebswirtschaft an der FH Luzern"
  ];

  const clubs = [
    "Mitglied Lions Club Stadt Zug (1994)",
    "Meister der Zunft der Schneider, Tuchscherer und Gewerbsleute der Stadt Zug (1999)"
  ];

  const hobbies = [
    "Sport", "Fitness", "Skifahren", "Lesen", "Kino", "EVZ"
  ];

  return (
    <PageLayout 
      title="Adrian Risi - Profil - SVP Stadt Zug"
      description="Adrian Risi - Kantonsrat und Präsident der SVP Stadt Zug. Erfahrener Unternehmer mit jahrzehntelanger Führungserfahrung."
    >
      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>&gt;</span>
            <a href="/vorstand" className="hover:text-primary transition-colors">Vorstand</a>
            <span>&gt;</span>
            <span className="text-foreground">Adrian Risi</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/assets/people/vorstand/Risi_Adrian_SVP.jpg" 
                alt="Adrian Risi - Präsident SVP Stadt Zug"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <Badge variant="secondary" className="mb-3 px-3 py-1">
                {personalData.position}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {personalData.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Präsident SVP Stadt Zug • Unternehmer • Brückenbauer für bürgerliche Politik
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5">Kantonsrat</Badge>
                <Badge variant="outline" className="bg-primary/5">Unternehmer</Badge>
                <Badge variant="outline" className="bg-primary/5">Präsident SVP Stadt Zug</Badge>
              </div>
            </div>
          </div>

          {/* Quote */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">"</span>
                </div>
                <div>
                  <blockquote className="text-xl lg:text-2xl italic text-foreground mb-6 leading-relaxed">
                    «In meiner Rolle als Kantonsrat sehe ich mich als Brückenbauer für eine bürgerliche, wirtschaftsfreundliche und zukunftsgerichtete Politik. Mit meiner jahrzehntelangen Erfahrung als Unternehmer kann ich eine Führungsrolle übernehmen.»
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="default" size="sm" className="shadow-md hover:shadow-lg transition-all">
                      <Share2 className="w-4 h-4 mr-2" />
                      Statement teilen
                    </Button>
                    <Button variant="outline" size="sm" className="shadow-md hover:shadow-lg transition-all">
                      <Twitter className="w-4 h-4 mr-2" />
                      Auf X teilen
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                    <strong>Frühe Jahre und Ausbildung:</strong> Ich wurde am 10. November 1962 in Zug geboren und bin in Oberwil aufgewachsen. Nach den Schulen und dem Studium folgte ein jähriger Auslandaufenthalt, der meinen Horizont erweiterte.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Beruflicher Werdegang:</strong> Beruflich war ich am Anfang in der Wirtschaftsprüfung tätig und wechselte 1991 in unsere Familienfirma, die Risi AG. Ab 1995 übernahm ich die Leitung der gesamten Risi Gruppe.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>JURA Holding Ära:</strong> 2010, mit dem Verkauf der Firmengruppe an die JURA Holding AG, übernahm ich innerhalb der JURA die Leitung der gesamten Produktion und Technik mit insgesamt 500 Mitarbeitern.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Rückkehr zur Familienfirma:</strong> Ende 2019 verliess ich die JURA Gruppe und kehrte zurück zur Familienunternehmung, der Risi Immobilien AG, die ich nun in die Zukunft führe. Daneben bin ich als Berater und aktiver VR in verschiedenen Verwaltungsräten von KMU&apos;s innerhalb der Bauindustrie tätig.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Commissions */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Mitgliedschaften Kommissionen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {commissions.map((commission, index) => (
                    <div key={index} className="flex items-start p-3 bg-muted/20 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{commission}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Positions */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Ämter und weitere Tätigkeiten</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {positions.map((position, index) => (
                    <div key={index} className="flex items-start p-3 bg-muted/20 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{position}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Political Priorities */}
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Meine politischen Prioritäten
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">Klartext</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-4 py-2">
                  «Ich stehe für eine zukunfsgerichtete, wirtschaftsfreundliche, aber auch bürgerlich-konservative Politik ein.»
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <Card className="shadow-lg border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Kontakt aufnehmen</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-4">
                  <a href={`tel:${personalData.phone}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </a>
                  <a href={`mailto:${personalData.email}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                </div>
                <Button className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  E-Mail senden
                </Button>
              </CardContent>
            </Card>

            {/* Personal Data */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Personalien
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium text-foreground block">Geboren:</span>
                    <p className="text-muted-foreground">{personalData.born}</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium text-foreground block">Zivilstand:</span>
                    <p className="text-muted-foreground">{personalData.maritalStatus}</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium text-foreground block">Beruf:</span>
                    <p className="text-muted-foreground text-xs">{personalData.profession}</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium text-foreground block">Kinder:</span>
                    <p className="text-muted-foreground">{personalData.children}</p>
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">{personalData.address}</p>
                      <p className="text-sm text-muted-foreground">{personalData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <Phone className="w-4 h-4 mr-3 text-primary" />
                    <a href={`tel:${personalData.phone}`} className="text-sm hover:text-primary transition-colors">
                      {personalData.phone}
                    </a>
                  </div>
                  <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <Phone className="w-4 h-4 mr-3 text-primary" />
                    <a href={`tel:${personalData.mobile}`} className="text-sm hover:text-primary transition-colors">
                      {personalData.mobile} (Mobile)
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commissions - Organized */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Politische Mandate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {commissions.map((commission, index) => (
                    <div key={index} className="flex items-start p-3 bg-muted/20 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{commission}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Positions - Organized */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Weitere Tätigkeiten</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {positions.map((position, index) => (
                    <div key={index} className="flex items-start p-3 bg-muted/20 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{position}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                  Ausbildung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {education.map((item, index) => (
                    <div key={index} className="flex items-start p-2 bg-muted/20 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
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
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensführung</h4>
                    <p className="text-sm text-muted-foreground">Langjährige Erfahrung in der Leitung von Unternehmen</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Immobilienwirtschaft</h4>
                    <p className="text-sm text-muted-foreground">Expertise in Immobilienentwicklung und -verwaltung</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Politische Führung</h4>
                    <p className="text-sm text-muted-foreground">Brückenbauer für bürgerliche Politik</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hobbies */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Persönliche Interessen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors">
                      {hobby === "Sport" && <span className="w-5 h-5 mr-2 text-primary text-lg">⚽</span>}
                      {hobby === "Fitness" && <span className="w-5 h-5 mr-2 text-primary text-lg">💪</span>}
                      {hobby === "Skifahren" && <span className="w-5 h-5 mr-2 text-primary text-lg">⛷️</span>}
                      {hobby === "Lesen" && <span className="w-5 h-5 mr-2 text-primary text-lg">📚</span>}
                      {hobby === "Kino" && <span className="w-5 h-5 mr-2 text-primary text-lg">🎬</span>}
                      {hobby === "EVZ" && <span className="w-5 h-5 mr-2 text-primary text-lg">🏒</span>}
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {hobby}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default AdriansRisiProfil;