import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, Calendar, GraduationCap, Users, Target, Share2, Twitter } from 'lucide-react';

const AdriansRisiProfil = () => {
  useEffect(() => {
    document.title = "Adrian Risi - Profil - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Adrian Risi - Kantonsrat und Präsident der SVP Stadt Zug. Erfahrener Unternehmer mit jahrzehntelanger Führungserfahrung.');
    }
  }, []);

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          Home &gt; Adrian Risi
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-start space-x-6 mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">AR</span>
            </div>
            <div className="flex-grow">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {personalData.name}
              </h1>
              <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">
                {personalData.position}
              </Badge>
            </div>
          </div>

          {/* Quote */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-foreground mb-4">
                «In meiner Rolle als Kantonsrat sehe ich mich als Brückenbauer für eine bürgerliche, wirtschaftsfreundliche und zukunftsgerichtete Politik. Mit meiner jahrzehntelangen Erfahrung als Unternehmer kann ich eine Führungsrolle übernehmen.»
              </blockquote>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Statement teilen
                </Button>
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4 mr-2" />
                  Statement twittern
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Biography */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Biographie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ich wurde am 10. November 1962 in Zug geboren und bin in Oberwil aufgewachsen. Seit 2005 bin ich verheiratet und habe einen Sohn. Nach den Schulen und dem Studium folgte ein jähriger Auslandaufenthalt. Beruflich war ich am Anfang in der Wirtschaftsprüfung tätig und wechselte 1991 in unsere Familienfirma, die Risi AG. Ab 1995 übernahm ich die Leitung der gesamten Risi Gruppe. 2010, mit dem Verkauf der Firmengruppe an die JURA Holding AG, übernahm ich innerhalb der JURA die Leitung der gesamten Produktion und Technik mit insgesamt 500 Leuten. Ende 2019 verliess ich die JURA Gruppe und kehrte zurück die die Familienunternehmung, der Risi Immobilien AG und führe diese nun in die Zukunft. Daneben bin ich als Berater und aktiver VR in verschiedenen Verwaltungsräten von KMU&apos;s innerhalb der Bauindustrie tätig.
                </p>
              </CardContent>
            </Card>

            {/* Commissions */}
            <Card>
              <CardHeader>
                <CardTitle>Mitgliedschaften Kommissionen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {commissions.map((commission, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{commission}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Positions */}
            <Card>
              <CardHeader>
                <CardTitle>Ämter und weitere Tätigkeiten</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {positions.map((position, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{position}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Political Priorities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Meine politischen Prioritäten
                </CardTitle>
                <CardDescription>Klartext</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic">
                  «Ich stehe für eine zukunfsgerichtete, wirtschaftsfreundliche, aber auch bürgerlich-konservative Politik ein.»
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information Sidebar */}
          <div className="space-y-6">
            {/* Personal Data */}
            <Card>
              <CardHeader>
                <CardTitle>Personalien</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Geboren:</span>
                    <p className="text-muted-foreground">{personalData.born}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Zivilstand:</span>
                    <p className="text-muted-foreground">{personalData.maritalStatus}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Beruf:</span>
                    <p className="text-muted-foreground">{personalData.profession}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Kinder:</span>
                    <p className="text-muted-foreground">{personalData.children}</p>
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{personalData.address}</p>
                      <p className="text-sm text-muted-foreground">{personalData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                    <a href={`tel:${personalData.phone}`} className="text-sm hover:text-primary transition-colors">
                      {personalData.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                    <a href={`tel:${personalData.mobile}`} className="text-sm hover:text-primary transition-colors">
                      {personalData.mobile} (Mobile)
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                    <a href={`mailto:${personalData.email}`} className="text-sm hover:text-primary transition-colors">
                      E-Mail
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Ausbildung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {education.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Clubs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Vereine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {clubs.map((club, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground text-sm">{club}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Hobbies */}
            <Card>
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdriansRisiProfil;