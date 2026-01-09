import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, ExternalLink, Users, Target, Share2, Twitter, Building, Award, Globe } from 'lucide-react';

const PhilipBrunnerProfil = () => {
  useEffect(() => {
    document.title = "Philip C. Brunner - Profil - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Philip C. Brunner - Kantonsrat, Gemeinderat und Fraktionspräsident der SVP. Konsulent, Berater und diplomierter Hotelier mit umfassender politischer Erfahrung.');
    }
  }, []);

  const personalData = {
    name: "Philip C. Brunner",
    position: "Kantonsrat, Gemeinderat, Fraktionspräsident",
    born: "1955",
    address: "Im Rank 109",
    location: "6300 Zug", 
    phone: "079 398 4 396",
    email: "phcb@philip-brunner.ch",
    profession: "Konsulent & Berater, dipl. Hotelier EHL"
  };

  const positions = [
    "Fraktionspräsident SVP",
    "Mitglied der engeren Staatswirtschaftskommission", 
    "Kantonsrat, Stadt Zug",
    "Präsident der Geschäftsprüfungskommission (GPK) Stadt Zug",
    "Gemeinderat, GGR der Stadt Zug",
    "Vorstand SVP Stadt Zug",
    "Parteileitung SVP Kanton Zug",
    "Ehrenmitglied SVP Stadt Zug (seit 2024)",
    "Parteivorstand SVP Schweiz",
    "Delegierter SVP Kanton Zug"
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
            <span className="text-foreground">Philip C. Brunner</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="../assets/vorstand/Philip-Brunner_SVP.png"
                alt="Philip Brunner - Mitglied SVP Stadt Zug"
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
                Erfahrener Politiker • Hotelier • Wirtschaftsexperte
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5">
                  <Building className="w-3 h-3 mr-1" />
                  Kantonsrat
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  <Award className="w-3 h-3 mr-1" />
                  Fraktionspräsident
                </Badge>
                <Badge variant="outline" className="bg-primary/5">Gemeinderat</Badge>
                <Badge variant="outline" className="bg-primary/5">Ehrenmitglied</Badge>
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
                    «Mein persönlicher Einsatz gilt einem erfolgreichen Kanton Zug, allen Zugerinnen und Zugern und der KMU-Wirtschaft. Ich fordere dazu gute Rahmenbedingungen, Eigenverantwortung und viel unternehmerische Freiheit. Das stete Anwachsen der staatlichen Aufgaben in Verwaltung und Staat bekämpfe ich soweit es mir möglich ist ganz entschieden.»
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
                    <h4 className="font-semibold text-foreground mb-1">Politiker</h4>
                    <p className="text-sm text-muted-foreground">Langjährige Führungsrollen in Kantonsrat und Gemeinderat</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Award className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Wirtschaftsexperte</h4>
                    <p className="text-sm text-muted-foreground">Diplomierter Hotelier und Unternehmensberater</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Political Experience */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="flex items-center text-xl">
                  <Building className="w-6 h-6 mr-3 text-primary" />
                  Politische Laufbahn
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Umfassende Erfahrung:</strong> Philip C. Brunner verfügt über jahrzehntelange Erfahrung in der Politik auf kommunaler, kantonaler und nationaler Ebene. Als Fraktionspräsident der SVP führt er die zweitstärkste politische Kraft im Kantonsrat.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Führungsverantwortung:</strong> In seinen verschiedenen Rollen als Kantonsrat, Gemeinderat und Präsident der Geschäftsprüfungskommission setzt er sich konsequent für wirtschaftsfreundliche Politik und schlanke Staatsstrukturen ein.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Anerkennung:</strong> Seine langjährigen Verdienste wurden 2024 mit der Ehrenmitgliedschaft der SVP Stadt Zug gewürdigt.
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
                <div className="space-y-3">
                  {positions.map((position, index) => (
                    <div key={index} className="flex items-start p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <div>
                        <span className="text-muted-foreground font-medium text-sm">{position}</span>
                        {position.includes("Ehrenmitglied") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Auszeichnung für langjährige Verdienste</p>
                        )}
                        {position.includes("Fraktionspräsident") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Führung der zweitstärksten Kraft im Kantonsrat</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Globe className="w-6 h-6 mr-3 text-primary" />
                  Weitere Informationen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground mb-4">
                    Detaillierte Informationen über weitere Mandate und politische Vorstösse finden Sie auf der persönlichen Website.
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="https://www.philip-brunner.ch/persoenlich" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                      <span className="text-sm text-muted-foreground">Weitere Mandate</span>
                    </a>
                    <div className="flex items-center p-3 bg-muted/20 rounded-lg">
                      <span className="text-sm text-muted-foreground font-medium">
                        VORSTÖSSE VON PHILIP C. BRUNNER IM GGR
                      </span>
                    </div>
                  </div>
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
                  <a href={`tel:${personalData.phone}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </a>
                  <a href={`mailto:${personalData.email}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                  <a href="https://www.philip-brunner.ch" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
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
                  <div className="p-3 bg-muted/30 rounded-lg col-span-2">
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
                    <a href={`tel:${personalData.phone}`} className="text-sm hover:text-primary transition-colors">
                      {personalData.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Online Presence */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-primary" />
                  Online Präsenz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="https://www.philip-brunner.ch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Persönliche Webseite</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm text-muted-foreground">Wikipedia Eintrag</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/Philip.C.Brunner" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="w-4 h-4 mr-3 text-primary text-lg">📘</span>
                    <span className="text-sm text-muted-foreground">Facebook Profil</span>
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
                    <h4 className="font-semibold text-foreground mb-1">Hotellerie</h4>
                    <p className="text-sm text-muted-foreground">Diplomierter Hotelier EHL mit Branchenexpertise</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Unternehmensberatung</h4>
                    <p className="text-sm text-muted-foreground">Konsulent und Berater für KMU-Wirtschaft</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Politische Führung</h4>
                    <p className="text-sm text-muted-foreground">Fraktionspräsident und Wirtschaftskommission</p>
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

export default PhilipBrunnerProfil;