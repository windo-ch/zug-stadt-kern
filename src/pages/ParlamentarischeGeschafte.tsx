import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, AlertCircle, ExternalLink } from 'lucide-react';

const ParlamentarischeGeschafte = () => {
  useEffect(() => {
    document.title = "Parlamentarische Geschäfte - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aktuelle parlamentarische Geschäfte und politische Vorstösse der SVP Stadt Zug im Gemeinderat. Motionen, Interpellationen und Postulate.');
    }
  }, []);

  const parlamentarischeGeschafte = [
    {
      type: "Motion",
      title: "Hilfe für Blatten",
      fraktionen: "SP, ALG/CSP, FDP, Die Mitte, SVP und GLP",
      datum: "30. Juni 2025",
      status: "zur Überw.",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "Gemeinsame Motion aller Fraktionen zur Unterstützung von Blatten",
      recent: true
    },
    {
      type: "Motion",
      title: "Jahres-Parkkarte: Runter mit dem Preis um 50%!",
      fraktionen: "SVP-Fraktion",
      datum: "16. Juni 2025",
      status: "zur Überw.",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "SVP-Motion für günstigere Jahres-Parkkarten für Bürger",
      recent: true
    },
    {
      type: "Motion",
      title: "Zug First – mit einer klaren Priorität zu Gunsten der AdF der FFZ",
      fraktionen: "SVP-Fraktion",
      datum: "11. Juni 2025",
      status: "zur Überw.",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "Prioritätensetzung für Zuger Interessen",
      recent: true
    },
    {
      type: "Interpellation",
      title: "Bewerbung der Stadt Zug als Kulturhauptstadt Schweiz 2030",
      fraktionen: "FDP, SVP, SP, Die Mitte",
      datum: "14. Mai 2025",
      status: "2948 SR",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "Gemeinsame Interpellation zur Kulturhauptstadt-Bewerbung",
      recent: true
    },
    {
      type: "Postulat",
      title: "Stadt Zuger Honig – ein nachhaltiger Pilotversuch!",
      fraktionen: "SVP-Fraktion",
      datum: "13. März 2025",
      status: "Überw.",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "Initiative für nachhaltige Honigproduktion in der Stadt"
    },
    {
      type: "Postulat",
      title: "Städtische Gebühren, die «bestgehüteten Geheimnisse» der Stadt Zug",
      fraktionen: "SVP-Fraktion",
      datum: "24. Februar 2025",
      status: "Zur Überw.",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "Mehr Transparenz bei städtischen Gebühren gefordert"
    },
    {
      type: "Kleine Anfrage",
      title: "Neuen Standorten auf OeIB-Arealen zur Erstellung von Asylunterkünften",
      fraktionen: "SVP-Fraktion",
      datum: "18. Februar 2025",
      status: "2937 SR",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "Anfrage zu geplanten Asylunterkünften in der Stadt Zug"
    },
    {
      type: "Interpellation",
      title: "Initiative 2000 Wohnungen für den Zuger Mittelstand",
      fraktionen: "FDP- und SVP Fraktion",
      datum: "20. Januar 2025",
      status: "2932 SR",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "Blockiert die Initiative die Erstellung von Wohnraum?"
    },
    {
      type: "Motion",
      title: "Verbesserung der hygienischen Situation in der Männerbadi",
      fraktionen: "FDP, SVP, SP und GLP",
      datum: "20. Januar 2025",
      status: "Überw.",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "Gemeinsame Motion für bessere Hygiene in der Männerbadi"
    },
    {
      type: "Interpellation",
      title: "Öffentliches Betteln in Zug – nein Danke!",
      fraktionen: "SVP-Fraktion",
      datum: "16. Januar 2025",
      status: "2944 SR",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      beschreibung: "SVP-Interpellation gegen öffentliches Betteln"
    }
  ];

  const weitereGeschafte2024 = [
    {
      type: "Interpellation",
      title: "Pflegeplätze und Alterswohnen - nicht nur ein Lippenbekenntnis!",
      datum: "19. November 2024",
      status: "2936 SR"
    },
    {
      type: "Interpellation", 
      title: "WWZ – Remedur ist angesagt!",
      datum: "30. Oktober 2024",
      status: "2915 SR"
    },
    {
      type: "Interpellation",
      title: "WWZ – strategisch neu ausrichten, zu Gunsten von Effizienz und Transparenz!",
      datum: "30. Oktober 2024", 
      status: "2916 SR"
    },
    {
      type: "Motion",
      title: "Solidarität mit dem Misox – sofort!",
      datum: "25. Juni 2024",
      status: "Überw."
    },
    {
      type: "Postulat",
      title: "Damwild im Zurlaubenhof? – JA!",
      datum: "29. August 2024",
      status: "Überw."
    }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes("zur Überw.") || status.includes("Zur Überw.")) {
      return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300";
    }
    if (status.includes("Überw.")) {
      return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300";
    }
    if (status.includes("SR")) {
      return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-300";
    }
    if (status.includes("Nicht überw.")) {
      return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-300";
    }
    return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Motion": return FileText;
      case "Interpellation": return AlertCircle;
      case "Postulat": return FileText;
      case "Kleine Anfrage": return AlertCircle;
      case "Antrag": return FileText;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Parlamentarische Arbeit</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Parlamentarische Geschäfte
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Unsere politischen Vorstösse und Aktivitäten im Gemeinderat. 
            Verfolgen Sie unsere laufenden Motionen, Interpellationen und Postulate im Detail.
          </p>
        </div>

        {/* Aktuelle Parlamentarische Geschäfte */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Aktuelle Parlamentarische Geschäfte 2025</h2>
          <div className="space-y-6">
            {parlamentarischeGeschafte.map((geschaeft, index) => {
              const IconComponent = getTypeIcon(geschaeft.type);
              return (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${geschaeft.recent ? 'border-l-4 border-l-primary' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{geschaeft.type}</Badge>
                            {geschaeft.recent && <Badge className="bg-primary text-primary-foreground text-xs">Neu</Badge>}
                          </div>
                          <CardTitle className="text-lg leading-tight">{geschaeft.title}</CardTitle>
                          <div className="text-sm text-muted-foreground mt-1">
                            {geschaeft.fraktionen}
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(geschaeft.status)} variant="outline">
                        {geschaeft.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {geschaeft.beschreibung}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {geschaeft.datum}
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        {geschaeft.referenz}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="btn-outline" asChild>
                      <a href="https://ratsinfo.stadtzug.ch/gremien/5" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Details auf ratsinfo.stadtzug.ch
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Weitere Geschäfte 2024 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Weitere Geschäfte 2024</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {weitereGeschafte2024.map((geschaeft, index) => {
              const IconComponent = getTypeIcon(geschaeft.type);
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">{geschaeft.type}</Badge>
                          <Badge className={`${getStatusColor(geschaeft.status)} text-xs`} variant="outline">
                            {geschaeft.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-sm leading-tight mb-2">{geschaeft.title}</h3>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {geschaeft.datum}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Information Box */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Parlamentarische Arbeit verfolgen
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Verfolgen Sie alle parlamentarischen Geschäfte der Stadt Zug live auf der offiziellen 
            Ratsinfo-Plattform. Dort finden Sie detaillierte Informationen zu allen Vorstössen und deren Bearbeitung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" asChild>
              <a href="https://ratsinfo.stadtzug.ch/gremien/5" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ratsinfo Stadt Zug
              </a>
            </Button>
            <Button variant="outline" className="btn-outline" asChild>
              <a href="/vorstoesse">
                Unsere Vorstösse
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ParlamentarischeGeschafte;