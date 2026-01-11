import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, ExternalLink, Users, Target, Share2, Twitter, Building, Award, GraduationCap } from 'lucide-react';
import ProtectedEmail from '@/components/ProtectedEmail';

const AlexOdermattProfil = () => {

  const personalData = {
    name: "Alex Odermatt",
    position: "Gemeinderat, Mitglied Spezialkommission",
    born: "1969",
    address: "St. Johannesstrasse 4",
    location: "6300 Zug",
    phone: "041 710 18 14",
    mobile: "079 335 63 54",
    email: "alexodermatt@bluewin.ch",
    maritalStatus: "geschieden",
    profession: "Sachbearbeiter Logistik",
    children: "1"
  };

  const commissions = [
    "Mitglied Spezialkommission"
  ];

  const positions = [
    "Verwaltungsratsmitglied Odermatt-Lederwaren AG"
  ];

  const education = [
    "Obligatorische Schulzeit",
    "Servicelehre",
    "Englischschule USA",
    "Weiterbildung Bar und Reception",
    "ECDL und Sachbearbeiter"
  ];

  const clubs = [
    "OK-Mitglied Inthronisation Letzibuzäli",
    "OK Mitglied Pressesprecher Zunft Letzibuzäli",
    "Passivmitglied Oberwiler Rebells"
  ];

  const hobbies = [
    "Vereine (siehe Vereine)"
  ];

  return (
    <PageLayout 
      title="Alex Odermatt - Profil - SVP Stadt Zug"
      description="Alex Odermatt - Gemeinderat der SVP Stadt Zug. Engagiert für Vereine und bürgernahe Politik ohne übermässige Bürokratie."
    >
      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>&gt;</span>
            <a href="/stadtrat" className="hover:text-primary transition-colors">Stadtrat</a>
            <span>&gt;</span>
            <span className="text-foreground">Alex Odermatt</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/people/gemeinderat/Alex-Odermatt-SVP.jpg"
                alt="Alex Odermatt - Gemeinderat SVP Stadt Zug"
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
                Sachbearbeiter • Vereins-Engagierter • Gemeinderat
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5">
                  <Building className="w-3 h-3 mr-1" />
                  Gemeinderat
                </Badge>
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
                    «Mir ist es wichtig auf die Bevölkerung zu hören und ihre Anliegen wahrzunehmen. Darum setz ich mich für Vereine ein. Man muss achten, dass Vereine nicht mit Bürokratie belastet werden sondern sich auf den Einsatz für die Bevölkerung in kulturellen, sportlichen und gesellschaftlichen Belangen konzentrieren können.»
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
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Vereins-Engagement</h4>
                    <p className="text-sm text-muted-foreground">Aktives Engagement für Vereine und kulturelle Anlässe</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <Building className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">Gemeinderat</h4>
                    <p className="text-sm text-muted-foreground">Mitglied der Spezialkommission</p>
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
                    <strong>Bürgernähe:</strong> Mir ist es wichtig auf die Bevölkerung zu hören und ihre Anliegen wahrzunehmen. 
                    Darum setze ich mich für Vereine ein.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Weniger Bürokratie:</strong> Man muss achten, dass Vereine nicht mit Bürokratie belastet werden, 
                    sondern sich auf den Einsatz für die Bevölkerung in kulturellen, sportlichen und gesellschaftlichen Belangen 
                    konzentrieren können.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Background */}
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
                    Geboren in Zug 1969. Kindergarten, Primarschule danach Sekundarschule in Zug. Lehre im alten Restaurant 
                    Rössli Zug (Service). Aufenthalt in den USA. Diverse Saisonstellen in der Schweiz. Ab 1991 bei der Firma 
                    Büro AG Zug, dazwischen 6 Jahre Glaserei Felber Steinhausen und zur Zeit wieder im Verkauf Büroeinrichtungen 
                    bei der Büro AG Zug.
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
                      <span className="text-muted-foreground font-medium">{commission}</span>
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
                  <a href={`tel:${personalData.phone.replace(/\s/g, '')}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </a>
                  <a href={`tel:${personalData.mobile.replace(/\s/g, '')}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
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
                    <a href={`tel:${personalData.phone.replace(/\s/g, '')}`} className="text-sm hover:text-primary transition-colors">
                      {personalData.phone} (Telefon)
                    </a>
                  </div>
                  <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <Phone className="w-4 h-4 mr-3 text-primary" />
                    <a href={`tel:${personalData.mobile.replace(/\s/g, '')}`} className="text-sm hover:text-primary transition-colors">
                      {personalData.mobile} (Mobile)
                    </a>
                  </div>
                  <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    <ProtectedEmail 
                      user={personalData.email.split('@')[0]} 
                      domain={personalData.email.split('@')[1]} 
                      className="text-sm"
                    />
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
                      <span className="text-muted-foreground font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Positions */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Ämter und weitere Tätigkeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {positions.map((position, index) => (
                    <div key={index} className="flex items-start p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-medium text-sm">{position}</span>
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

export default AlexOdermattProfil;
