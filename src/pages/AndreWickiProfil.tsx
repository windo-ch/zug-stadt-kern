import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, ExternalLink, Users, Target, Share2, Twitter, Building, Award, GraduationCap } from 'lucide-react';

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
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>&gt;</span>
            <a href="/vorstand" className="hover:text-primary transition-colors">Vorstand</a>
            <span>&gt;</span>
            <span className="text-foreground">André Wicki</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/assets/people/vorstand/Andre-Wicki_SVP.jpg" 
                alt="André Wicki - Mitglied SVP Stadt Zug"
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
                Stadtpräsident von Zug • Unternehmer • Familienvater
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5">
                  <Building className="w-3 h-3 mr-1" />
                  Stadtpräsident
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  <Award className="w-3 h-3 mr-1" />
                  MBA
                </Badge>
                <Badge variant="outline" className="bg-primary/5">SVP Vorstand</Badge>
              </div>
            </div>
          </div>

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

          <div className="flex flex-wrap items-center gap-3 justify-center">
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

            {/* Positions */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Ämter und weitere Tätigkeiten</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {positions.map((position, index) => (
                    <div key={index} className="flex items-start p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <div>
                        <span className="text-muted-foreground font-medium">{position}</span>
                        {position.includes("Rotary") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Internationales Netzwerk für gesellschaftliches Engagement</p>
                        )}
                        {position.includes("Wasserwerke") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Verantwortung für die Wasserversorgung der Stadt</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                  Ausbildung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-medium text-sm">{item}</span>
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
                      {hobby === "Biken" && <span className="w-5 h-5 mr-2 text-primary text-lg">🚴</span>}
                      {hobby === "Boxen" && <span className="w-5 h-5 mr-2 text-primary text-lg">🥊</span>}
                      {hobby === "Lesen" && <span className="w-5 h-5 mr-2 text-primary text-lg">📚</span>}
                      {hobby === "Kochen" && <span className="w-5 h-5 mr-2 text-primary text-lg">👨‍🍳</span>}
                      {hobby === "Familie und Freunde" && <span className="w-5 h-5 mr-2 text-primary text-lg">👨‍👩‍👧‍👦</span>}
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {hobby}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  "In meiner Freizeit finde ich beim Biken, Boxen, Lesen, Kochen und mit Familie und Freunden den Ausgleich zum beruflichen Alltag."
                </p>
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
                  <a href={`mailto:${personalData.email}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                  <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <ExternalLink className="w-5 h-5 text-primary" />
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
                    <p className="text-muted-foreground">{personalData.profession}</p>
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
                      <p className="text-sm text-muted-foreground">{personalData.location}</p>
                      <p className="text-xs text-muted-foreground/80">Zuger Bürger seit 1992</p>
                    </div>
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