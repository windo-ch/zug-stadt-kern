import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, ExternalLink, Users, GraduationCap, Shield, Flame } from 'lucide-react';

const RaphaelTschanProfil = () => {
  useEffect(() => {
    document.title = "Raphael Tschan - Profil - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Raphael Tschan - Vizepräsident der SVP Stadt Zug und Mitglied der Rechnungsprüfungskommission. Fachexperte Finanzaufsicht und Treuhänder.');
    }
  }, []);

  const personalData = {
    name: "Raphael Tschan",
    position: "Vizepräsident SVP Stadt Zug",
    born: "1991",
    address: "Gimenenstrasse 1",
    location: "6300 Zug",
    mobile: "079 835 00 02",
    email: "rt@raphael-tschan.ch",
    maritalStatus: "ledig",
    profession: "Fachexperte Finanzaufsicht / Treuhänder"
  };

  const positions = [
    "Mitglied der Rechnungsprüfungskommission der Stadt Zug",
    "Vizepräsident SVP Stadt Zug",
    "Stiftungsrat der Rudolf und Verena Oetiker-Stiftung",
    "Fachunteroffizier der Feuerwehr Zug"
  ];

  const clubs = [
    "Vorstandsmitglied des Styger Rettungskorps der Feuerwehr der Stadt Zug",
    "Vorstandsmitglied AVES Zug"
  ];

  const hobbies = [
    "Feuerwehr", "Gleitschirmfliegen", "Klettern", "Motorradfahren"
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
            <span className="text-foreground">Raphael Tschan</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-primary">RT</span>
            </div>
            <div className="flex-grow">
              <Badge variant="secondary" className="mb-3 px-3 py-1">
                {personalData.position}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {personalData.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Finanzexperte • Feuerwehrmann • Engagiert für die Stadt Zug
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5">
                  <Shield className="w-3 h-3 mr-1" />
                  RPK Mitglied
                </Badge>
                <Badge variant="outline" className="bg-primary/5">
                  <Flame className="w-3 h-3 mr-1" />
                  Feuerwehr
                </Badge>
                <Badge variant="outline" className="bg-primary/5">Treuhänder</Badge>
              </div>
            </div>
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
                    <Shield className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Finanzexperte</h4>
                    <p className="text-sm text-muted-foreground">Spezialist für Finanzaufsicht und Treuhandwesen</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Flame className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Feuerwehrmann</h4>
                    <p className="text-sm text-muted-foreground">Aktiver Dienst für die Sicherheit unserer Stadt</p>
                  </div>
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
                        {position.includes("Rechnungsprüfungskommission") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Überwachung der städtischen Finanzen</p>
                        )}
                        {position.includes("Feuerwehr") && (
                          <p className="text-xs text-muted-foreground/80 mt-1">Einsatz für Brandschutz und Rettung</p>
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
                <div className="grid grid-cols-2 gap-3">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors">
                      {hobby === "Feuerwehr" && <Flame className="w-5 h-5 mr-2 text-primary" />}
                      {hobby === "Gleitschirmfliegen" && <span className="w-5 h-5 mr-2 text-primary text-lg">🪂</span>}
                      {hobby === "Klettern" && <span className="w-5 h-5 mr-2 text-primary text-lg">🧗</span>}
                      {hobby === "Motorradfahren" && <span className="w-5 h-5 mr-2 text-primary text-lg">🏍️</span>}
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
                  <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    <a href={`mailto:${personalData.email}`} className="text-sm hover:text-primary transition-colors">
                      E-Mail
                    </a>
                  </div>
                  <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                    <a href="#" className="text-sm hover:text-primary transition-colors">
                      Webseite
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Focus */}
            <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Shield className="w-5 h-5 mr-2" />
                  Fachkompetenz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Finanzaufsicht</h4>
                    <p className="text-sm text-muted-foreground">Überwachung und Kontrolle von Finanzgeschäften</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Treuhandwesen</h4>
                    <p className="text-sm text-muted-foreground">Beratung und Verwaltung von Vermögenswerten</p>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">Kommunale Finanzen</h4>
                    <p className="text-sm text-muted-foreground">Expertise in städtischer Budgetierung</p>
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

export default RaphaelTschanProfil;