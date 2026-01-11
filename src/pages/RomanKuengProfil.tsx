import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, ExternalLink, Users, Target, Share2, Twitter, Car, Briefcase } from 'lucide-react';

const RomanKuengProfil = () => {

  const personalData = {
    name: "Roman Küng",
    position: "Vizepräsident & GGR Fraktionspräsident",
    born: "1972",
    address: "Bernoldweg 9",
    location: "6300 Zug", 
    phone: "041 750 10 55",
    mobile: "079 329 13 33",
    email: "roman.kueng@bluewin.ch",
    maritalStatus: "ledig",
    profession: "Garagist",
    children: "keine"
  };

  const positions = [
    "Seit 2019 im Grossen Gemeinderat"
  ];

  const education = [
    "Lehre als Auto-Elektriker",
    "Weiterbildung zum Automobil Diagnostiker",
    "Selbständiger Garagist seit 1998"
  ];

  const hobbies = [
    "Reisen", "Wandern", "Historischer Motorsport"
  ];

  return (
    <PageLayout 
      title="Roman Küng - Profil - SVP Stadt Zug"
      description="Roman Küng - Vizepräsident & GGR Fraktionspräsident, Gemeinderat der SVP Stadt Zug. Garagist und Unternehmer für wirtschaftsfreundliche Politik."
    >
      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>&gt;</span>
            <a href="/vorstand" className="hover:text-primary transition-colors">Vorstand</a>
            <span>&gt;</span>
            <span className="text-foreground">Roman Küng</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/people/vorstand/Roman-Kueng_SVP.jpg"
                alt="Roman Küng - Mitglied SVP Stadt Zug"
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
                Gemeinderat • Unternehmer • Zuger Urgestein
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5">
                  <Briefcase className="w-3 h-3 mr-1" />
                  Gemeinderat
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  <Car className="w-3 h-3 mr-1" />
                  Garagist
                </Badge>
                <Badge variant="outline" className="bg-primary/5">GGR Fraktionspräsident</Badge>
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
                    «Ich setze mich für eine attraktive Stadt ein. Unsere Wirtschaft und unser Gewerbe brauchen gute Rahmenbedingungen und keine lebensfremde, bevormundende, bürokratische Politik. Die Wirtschaft soll wachsen, nicht der Staat!»
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
                    <Car className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Unternehmer</h4>
                    <p className="text-sm text-muted-foreground">Garagist und Geschäftsführer seit 1998</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Politiker</h4>
                    <p className="text-sm text-muted-foreground">Fraktionspräsident im Grossen Gemeinderat</p>
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
                    <strong>Wurzeln in Zug:</strong> Ich bin 1972 in Zug geboren and in Allenwinden aufgewachsen. Mein ganzes Leben verbrachte ich im Kanton Zug (Gemeinden Zug und Baar) und würde mich deshalb als „Zuger Urgestein" bezeichnen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Berufliche Laufbahn:</strong> Nach der Sekundarschule machte ich eine Lehre als Auto-Elektriker, mit anschliessender Weiterbildung zum eidg. diplomierten Automobil Diagnostiker.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Unternehmerische Verantwortung:</strong> 1998 übernahmen mein Bruder und ich den elterlichen Garagenbetrieb; die heutige Garage Hans & Roman Küng in Neuägeri.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Persönliches:</strong> Ich habe keine Kinder und bin unverheiratet, was mir ermöglicht, mich voll und ganz meinen beruflichen und politischen Aufgaben zu widmen.
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
                        <p className="text-xs text-muted-foreground/80 mt-1">Fraktionspräsident und aktives Mitglied</p>
                      </div>
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
                  «Ich setze mich für eine attraktive Stadt ein. Unsere Wirtschaft und unser Gewerbe brauchen gute Rahmenbedingungen und keine lebensfremde, bevormundende, bürokratische Politik. Die Wirtschaft soll wachsen, nicht der Staat!»
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
                  <a href={`tel:${personalData.mobile}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </a>
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

            {/* Education */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="w-5 h-5 mr-2 text-primary" />
                  Ausbildung & Beruflicher Werdegang
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

            {/* Hobbies */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Persönliche Interessen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors">
                      {hobby === "Reisen" && <span className="w-5 h-5 mr-2 text-primary text-lg">✈️</span>}
                      {hobby === "Wandern" && <span className="w-5 h-5 mr-2 text-primary text-lg">🥾</span>}
                      {hobby === "Historischer Motorsport" && <span className="w-5 h-5 mr-2 text-primary text-lg">🏁</span>}
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {hobby}
                      </Badge>
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
                    <h4 className="font-semibold text-foreground mb-1">Automobilbranche</h4>
                    <p className="text-sm text-muted-foreground">Expertise in Fahrzeugtechnik und Diagnosesystemen</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensführung</h4>
                    <p className="text-sm text-muted-foreground">25+ Jahre Erfahrung im Garagenbetrieb</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Kommunalpolitik</h4>
                    <p className="text-sm text-muted-foreground">Wirtschaftsfreundliche Stadtentwicklung</p>
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

export default RomanKuengProfil;