import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, User, ExternalLink, Users, GraduationCap } from 'lucide-react';

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
        <nav className="mb-8 text-sm text-muted-foreground">
          Home &gt; Raphael Tschan
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-start space-x-6 mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">RT</span>
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
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Positions */}
            <Card>
              <CardHeader>
                <CardTitle>Ämter und weitere Tätigkeiten</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {positions.map((position, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{position}</span>
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
                <ul className="space-y-3">
                  {clubs.map((club, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{club}</span>
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
                    <Badge key={index} variant="outline" className="text-sm px-3 py-1">
                      {hobby}
                    </Badge>
                  ))}
                </div>
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
                  <div className="col-span-2">
                    <span className="font-medium text-foreground">Beruf:</span>
                    <p className="text-muted-foreground">{personalData.profession}</p>
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
                  <div className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2 text-muted-foreground" />
                    <a href="#" className="text-sm hover:text-primary transition-colors">
                      Webseite
                    </a>
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