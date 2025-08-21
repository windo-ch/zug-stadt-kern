import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, ExternalLink, Users, Target, Share2, Twitter, Building, Award, GraduationCap, Linkedin } from 'lucide-react';

const MarcusBuehlerProfil = () => {
  useEffect(() => {
    document.title = "Marcus H. Bühler - Profil - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Marcus H. Bühler - Vorstandsmitglied der SVP Stadt Zug und Gemeinderat. Unternehmer mit MBA, CFA und umfassender Verwaltungsratserfahrung.');
    }
  }, []);

  const personalData = {
    name: "Marcus H. Bühler",
    position: "Vorstandsmitglied",
    born: "1962",
    address: "Bahnhofstrasse 27",
    location: "6300 Zug",
    mobile: "079 340 81 68",
    email: "bumbleb@bluewin.ch",
    maritalStatus: "geschieden",
    profession: "Unternehmer und Verwaltungsrat in verschiedenen Unternehmungen, Vorsitzender Prüfungs-und Risikoausschuss",
    children: "keine"
  };

  const commissions = [
    "Mitglied der Nachhaltigkeitskommission der Stadt Zug",
    "Mitglied der kantonalen Mittelschulkommission"
  ];

  const education = [
    "MBA",
    "CFA (Chartered Financial Analyst)",
    "Swiss Board School IMP-HSG"
  ];

  const clubs = [
    "Zuger kantonaler Patentjägerverein",
    "Bündner Patentjägerverein"
  ];

  const hobbies = [
    "Fliegenfischen", "Jagd", "Schafe"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>&gt;</span>
            <a href="/vorstand" className="hover:text-primary transition-colors">Vorstand</a>
            <span>&gt;</span>
            <span className="text-foreground">Marcus Bühler</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-primary">MB</span>
            </div>
            <div className="flex-grow">
              <Badge variant="secondary" className="mb-3 px-3 py-1">
                {personalData.position}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {personalData.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Unternehmer • Verwaltungsrat • Schweiz-Enthusiast
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5">
                  <Building className="w-3 h-3 mr-1" />
                  Gemeinderat
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  <Award className="w-3 h-3 mr-1" />
                  CFA
                </Badge>
                <Badge variant="outline" className="bg-primary/5">MBA</Badge>
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
                    «Als Unternehmer und Bürger setze ich auf einen vernünftigen Umgang mit unseren Finanzen. Meine Grundhaltung ist: zum Bestehenden Sorge tragen, ohne sich Neuem zu verschliessen und darauf zu achten, dass wir unser Schicksal nicht an Dritte delegieren, sondern selber mit Augenmass und Eigenverantwortung wahrnehmen.»
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
                    <h4 className="font-semibold text-foreground mb-1">Unternehmer</h4>
                    <p className="text-sm text-muted-foreground">Verwaltungsrat und Prüfungsausschuss-Vorsitzender</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Award className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Finanzexperte</h4>
                    <p className="text-sm text-muted-foreground">CFA und MBA mit internationaler Erfahrung</p>
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
                    <strong>Finanzielle Verantwortung:</strong> Als Unternehmer und Bürger setze ich auf einen vernünftigen Umgang mit unseren Finanzen. Geld, das einem nicht gehört auszugeben ist einfach, wird aber in der Tendenz, immer öfter, als gegeben erachtet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Schweizer Patriotismus:</strong> Engagiert und begeistert, bin ich ein Fan der Schweiz und von Zug. Durch meine Berufsjahre im Ausland wurde meine Haltung «pro CH» zusätzlich verstärkt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Verantwortungsvolle Führung:</strong> Meine Grundhaltung ist: zum Bestehenden Sorge tragen, ohne sich Neuem zu verschliessen und darauf zu achten, dass wir unser Schicksal nicht an Dritte delegieren.
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
                <div className="space-y-4">
                  {commissions.map((commission, index) => (
                    <div key={index} className="flex items-start p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <div>
                        <span className="text-muted-foreground font-medium">{commission}</span>
                        {commission.includes("Nachhaltigkeitskommission") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Verantwortung für nachhaltige Stadtentwicklung</p>
                        )}
                        {commission.includes("Mittelschulkommission") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Kantonale Bildungspolitik auf Mittelschulstufe</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Clubs */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="w-6 h-6 mr-3 text-primary" />
                  Vereine & Organisationen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clubs.map((club, index) => (
                    <div key={index} className="flex items-start p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-medium">{club}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hobbies */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Persönliche Interessen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors">
                      {hobby === "Fliegenfischen" && <span className="w-5 h-5 mr-2 text-primary text-lg">🎣</span>}
                      {hobby === "Jagd" && <span className="w-5 h-5 mr-2 text-primary text-lg">🦌</span>}
                      {hobby === "Schafe" && <span className="w-5 h-5 mr-2 text-primary text-lg">🐑</span>}
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {hobby}
                      </Badge>
                    </div>
                  ))}
                </div>
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
                  <a href={`tel:${personalData.mobile}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </a>
                  <a href={`mailto:${personalData.email}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                  <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
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
                    <span className="font-medium text-foreground block">Kinder:</span>
                    <p className="text-muted-foreground">{personalData.children}</p>
                  </div>
                  <div className="col-span-2 p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium text-foreground block">Beruf:</span>
                    <p className="text-muted-foreground text-sm">{personalData.profession}</p>
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
                    <a href={`tel:${personalData.mobile}`} className="text-sm hover:text-primary transition-colors">
                      {personalData.mobile} (Mobile)
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                  Ausbildung & Qualifikationen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {education.map((item, index) => (
                    <div key={index} className="flex items-start p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <div>
                        <span className="text-muted-foreground font-medium text-sm">{item}</span>
                        {item.includes("CFA") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Internationale Finanzanalyst-Zertifizierung</p>
                        )}
                        {item.includes("Swiss Board School") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Verwaltungsrats-Ausbildung HSG</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Online Presence */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2 text-primary" />
                  Professionelle Netzwerke
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">LinkedIn Profil</span>
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
                    <h4 className="font-semibold text-foreground mb-1">Finanzanalyse</h4>
                    <p className="text-sm text-muted-foreground">CFA-zertifizierte Expertise in Finanzanalyse</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensführung</h4>
                    <p className="text-sm text-muted-foreground">Verwaltungsrat und Prüfungsausschuss-Vorsitzender</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Nachhaltigkeit</h4>
                    <p className="text-sm text-muted-foreground">Kommissionsmitglied für nachhaltige Stadtentwicklung</p>
                  </div>
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

export default MarcusBuehlerProfil;