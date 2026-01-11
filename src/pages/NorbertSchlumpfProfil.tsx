import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, ExternalLink, Users, Target, Share2, Twitter, Building, Award, GraduationCap } from 'lucide-react';
import ProtectedEmail from '@/components/ProtectedEmail';

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
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>&gt;</span>
            <a href="/stadtrat" className="hover:text-primary transition-colors">Stadtrat</a>
            <span>&gt;</span>
            <span className="text-foreground">Norbert Schlumpf</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/people/gemeinderat/Schlumpf-Norbert-SVP.jpg"
                alt="Norbert Schlumpf - Gemeinderat SVP Stadt Zug"
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
                Geschäftsführer • Fiberoptic-Experte • Gemeinderat
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5">
                  <Building className="w-3 h-3 mr-1" />
                  Gemeinderat
                </Badge>
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

            {/* Hobbies */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Persönliche Interessen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors">
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
                  Ausbildung
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
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default NorbertSchlumpfProfil;
