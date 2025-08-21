import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Users, Zap, Building, Leaf } from 'lucide-react';

const WofuerWirStehen = () => {
  useEffect(() => {
    document.title = "Wofür wir stehen - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Unsere Grundsätze und Werte: Sicherheit, Freiheit, Tradition und eine lebenswerte Stadt Zug für alle Bürger.');
    }
  }, []);

  const coreValues = [
    {
      icon: Shield,
      title: "Sicherheit & Ordnung",
      description: "Eine sichere Stadt für alle Bürger durch konsequente Durchsetzung des Rechts und präventive Massnahmen.",
      points: [
        "Verstärkte Polizeipräsenz in der Innenstadt",
        "Null-Toleranz-Politik bei Vandalismus",
        "Sichere Schulwege für unsere Kinder",
        "Effektive Kriminalitätsprävention"
      ]
    },
    {
      icon: Heart,
      title: "Tradition & Heimat",
      description: "Bewahrung unserer Zuger Werte und Traditionen als Fundament einer starken Gemeinschaft.",
      points: [
        "Förderung lokaler Bräuche und Feste",
        "Schutz der deutschen Sprache",
        "Unterstützung der Zuger Vereine",
        "Erhalt des kulturellen Erbes"
      ]
    },
    {
      icon: Users,
      title: "Bürgernähe & Demokratie",
      description: "Direkte Demokratie stärken und die Stimme der Bürger in politischen Entscheidungen berücksichtigen.",
      points: [
        "Regelmässige Bürgersprechstunden",
        "Transparente Entscheidungsprozesse",
        "Stärkung der Volksrechte",
        "Direkte Kommunikation mit den Bürgern"
      ]
    },
    {
      icon: Zap,
      title: "Wirtschaft & Innovation",
      description: "Zug als attraktiven Wirtschaftsstandort stärken und Arbeitsplätze für die Zuger Bevölkerung sichern.",
      points: [
        "Förderung des lokalen Gewerbes",
        "Attraktive Standortbedingungen",
        "Reduktion der Bürokratie",
        "Innovation und Unternehmertum unterstützen"
      ]
    },
    {
      icon: Building,
      title: "Stadtentwicklung & Infrastruktur",
      description: "Nachhaltige Stadtentwicklung, die die Lebensqualität erhält und verbessert.",
      points: [
        "Massvoll verdichten statt zubetonieren",
        "Erhalt von Grünflächen",
        "Effiziente öffentliche Verkehrsmittel",
        "Moderne, aber bezahlbare Infrastruktur"
      ]
    },
    {
      icon: Leaf,
      title: "Umwelt & Nachhaltigkeit",
      description: "Verantwortungsvoller Umgang mit der Natur für kommende Generationen.",
      points: [
        "Schutz des Zugersees",
        "Kostengünstiger Umweltschutz ohne Verbote",
        "Eigenverantwortung statt Bevormundung",
        "Wirtschaftsverträgliche Umweltmassnahmen"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main 
        className="container mx-auto px-4 py-16 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/d75181da-4d07-475b-827c-99ae71cae110.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] rounded-lg"></div>
        
        {/* Hero Section */}
        <div className="text-center mb-16 relative z-10">
          <Badge variant="outline" className="mb-4">Unsere Grundsätze</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wofür wir stehen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Die SVP Stadt Zug steht für bewährte Werte und eine Politik des gesunden Menschenverstands. 
            Unsere Grundsätze bilden das Fundament für eine lebenswerte, sichere und prosperierende Stadt.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
          {coreValues.map((value, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
                <CardDescription className="text-base">
                  {value.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {value.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 rounded-lg p-8 text-center relative z-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Gemeinsam für eine starke Stadt Zug
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Unsere Werte sind nicht nur Worte, sondern Leitlinien für konkretes politisches Handeln. 
            Werden Sie Teil unserer Bewegung für eine lebenswerte Zukunft in Zug.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/mitglied-werden" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Mitglied werden
            </a>
            <a 
              href="/kontakt" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WofuerWirStehen;