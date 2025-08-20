import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Clock, CheckCircle, AlertCircle, Users, Target, TrendingUp, Calendar, ExternalLink } from 'lucide-react';

const Vorstoesse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    document.title = "Vorstösse – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Parlamentarische Vorstösse der SVP Stadt Zug - Motionen, Interpellationen und Postulate für eine bessere Stadt.');
    }
  }, []);

  const currentInitiatives = [
    {
      id: 1,
      title: "Motion: Digitalisierung der Stadtverwaltung beschleunigen",
      type: "Motion",
      date: "15. Januar 2024",
      status: "In Bearbeitung",
      description: "Vollständige Digitalisierung aller Verwaltungsdienstleistungen bis Ende 2025",
      author: "Dr. Andrea Müller",
      coAuthors: ["Thomas Bachmann", "Peter Kaufmann"],
      reasoning: "Die Stadtverwaltung Zug muss den digitalen Wandel aktiv mitgestalten und den Bürgern zeitgemässe Online-Services bieten.",
      goals: [
        "Online-Verfügbarkeit aller Formulare und Anträge",
        "Digitale Bezahlmöglichkeiten für alle städtischen Dienstleistungen",
        "Automatisierte Bearbeitungsprozesse wo möglich",
        "Verbesserung der Bürgerfreundlichkeit durch 24/7-Verfügbarkeit"
      ],
      progress: "Stadtrat prüft Umsetzungsmöglichkeiten",
      expectedImpact: "Hoch",
      category: "Verwaltung"
    },
    {
      id: 2,
      title: "Interpellation: Verkehrssituation Bahnhofstrasse",
      type: "Interpellation",
      date: "8. Februar 2024", 
      status: "Antwort ausstehend",
      description: "Fragen zur aktuellen Verkehrsbelastung und geplanten Massnahmen",
      author: "Thomas Bachmann",
      coAuthors: [],
      reasoning: "Die Verkehrssituation in der Bahnhofstrasse hat sich verschlechtert und bedarf politischer Aufmerksamkeit.",
      goals: [
        "Transparenz über aktuelle Verkehrszahlen",
        "Information über geplante Verkehrsmassnahmen",
        "Zeitplan für Verbesserungen",
        "Koordination mit kantonalen Behörden"
      ],
      progress: "Antwort des Stadtrats bis Ende März erwartet",
      expectedImpact: "Mittel",
      category: "Verkehr"
    },
    {
      id: 3,
      title: "Postulat: Förderung der lokalen Wirtschaft",
      type: "Postulat",
      date: "22. Februar 2024",
      status: "Eingereicht",
      description: "Massnahmen zur Stärkung des lokalen Gewerbes und der Gastronomie",
      author: "Peter Kaufmann",
      coAuthors: ["Maria Zimmermann"],
      reasoning: "Das lokale Gewerbe ist das Rückgrat unserer Stadt und verdient gezielte Unterstützung.",
      goals: [
        "Reduktion bürokratischer Hürden für lokale Betriebe",
        "Förderung von Kooperationen zwischen Unternehmen",
        "Verbesserung der Rahmenbedingungen für Gastronomie",
        "Unterstützung bei der digitalen Transformation"
      ],
      progress: "Stadtrat wird Postulat in der nächsten Sitzung behandeln",
      expectedImpact: "Hoch",
      category: "Wirtschaft"
    }
  ];

  const completedInitiatives = [
    {
      id: 4,
      title: "Motion: Verbesserung der Schulwegsicherheit",
      type: "Motion",
      date: "15. September 2023",
      status: "Umgesetzt",
      description: "Massnahmen zur Erhöhung der Sicherheit auf Schulwegen",
      author: "Dr. Andrea Müller",
      coAuthors: ["Claudia Weber"],
      result: "Vollständig umgesetzt",
      implementation: [
        "Installation von 12 neuen Zebrastreifen",
        "Verbesserung der Beleuchtung auf 8 Schulwegen",
        "Einführung einer Tempo-30-Zone bei 3 Schulhäusern",
        "Verstärkte Polizeikontrollen während Schulzeiten"
      ],
      impact: "Reduktion der Schulwegunfälle um 35%",
      category: "Bildung"
    },
    {
      id: 5,
      title: "Postulat: Förderung von Elektromobilität",
      type: "Postulat",
      date: "10. Juni 2023",
      status: "Teilweise umgesetzt",
      description: "Ausbau der Ladeinfrastruktur für Elektrofahrzeuge",
      author: "Thomas Bachmann",
      coAuthors: [],
      result: "Teilweise umgesetzt",
      implementation: [
        "20 neue öffentliche Ladestationen installiert",
        "Bevorzugte Parkplätze für E-Fahrzeuge eingerichtet",
        "Förderung privater Ladestationen in Planung",
        "Umstellung der städtischen Fahrzeugflotte gestartet"
      ],
      impact: "Verdopplung der E-Fahrzeug-Anmeldungen in Zug",
      category: "Verkehr"
    }
  ];

  const statistics = [
    {
      icon: FileText,
      number: "18",
      label: "Aktive Vorstösse",
      description: "In verschiedenen Bearbeitungsphasen"
    },
    {
      icon: CheckCircle,
      number: "85%",
      label: "Erfolgsquote",
      description: "Vorstösse umgesetzt oder angenommen"
    },
    {
      icon: Target,
      number: "32",
      label: "Vorstösse 2023",
      description: "Motionen, Interpellationen, Postulate"
    }
  ];

  const filteredCurrent = currentInitiatives.filter(initiative => {
    const matchesSearch = initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         initiative.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || initiative.type.toLowerCase() === filterType;
    const matchesStatus = filterStatus === 'all' || initiative.status.toLowerCase().includes(filterStatus.toLowerCase());
    return matchesSearch && matchesType && matchesStatus;
  });

  const filteredCompleted = completedInitiatives.filter(initiative => {
    const matchesSearch = initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         initiative.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || initiative.type.toLowerCase() === filterType;
    return matchesSearch && matchesType;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "In Bearbeitung": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: Clock },
      "Antwort ausstehend": { color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: AlertCircle },
      "Eingereicht": { color: "bg-gray-100 text-gray-800 border-gray-200", icon: FileText },
      "Umgesetzt": { color: "bg-green-100 text-green-800 border-green-200", icon: CheckCircle },
      "Teilweise umgesetzt": { color: "bg-orange-100 text-orange-800 border-orange-200", icon: AlertCircle }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["Eingereicht"];
    const IconComponent = config.icon;

    return (
      <Badge className={config.color}>
        <IconComponent className="w-3 h-3 mr-1" />
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const typeColors = {
      "Motion": "bg-red-100 text-red-800 border-red-200",
      "Interpellation": "bg-blue-100 text-blue-800 border-blue-200", 
      "Postulat": "bg-green-100 text-green-800 border-green-200"
    };
    
    return (
      <Badge className={typeColors[type as keyof typeof typeColors] || "bg-gray-100 text-gray-800 border-gray-200"}>
        {type}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Parlamentarische Arbeit</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vorstösse & Initiativen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Konkrete parlamentarische Arbeit für Zug. Von Motionen über Interpellationen bis zu Postulaten - 
            wir bringen Lösungen ein und setzen uns für die Anliegen der Zuger Bevölkerung ein.
          </p>
        </div>

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Explanation Box */}
        <section className="mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Arten von Vorstössen</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="flex items-center mb-2">
                    {getTypeBadge("Motion")}
                  </div>
                  <p className="text-muted-foreground">
                    Antrag auf Erlass, Änderung oder Aufhebung eines Beschlusses durch den Stadtrat.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    {getTypeBadge("Interpellation")}
                  </div>
                  <p className="text-muted-foreground">
                    Schriftliche Anfrage an den Stadtrat über wichtige städtische Angelegenheiten.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    {getTypeBadge("Postulat")}
                  </div>
                  <p className="text-muted-foreground">
                    Auftrag an den Stadtrat zur Prüfung und Berichterstattung über eine Massnahme.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Vorstoss suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Art des Vorstosses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Arten</SelectItem>
                <SelectItem value="motion">Motion</SelectItem>
                <SelectItem value="interpellation">Interpellation</SelectItem>
                <SelectItem value="postulat">Postulat</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Status</SelectItem>
                <SelectItem value="bearbeitung">In Bearbeitung</SelectItem>
                <SelectItem value="eingereicht">Eingereicht</SelectItem>
                <SelectItem value="antwort">Antwort ausstehend</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current" className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Aktuelle Vorstösse
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Abgeschlossene Vorstösse
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="mt-8">
            <div className="space-y-6">
              {filteredCurrent.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">Keine aktuellen Vorstösse gefunden.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredCurrent.map((initiative) => (
                  <Card key={initiative.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <CardTitle className="text-xl">{initiative.title}</CardTitle>
                            {getTypeBadge(initiative.type)}
                            <Badge variant="outline">{initiative.category}</Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {initiative.date} • {initiative.author}
                            {initiative.coAuthors.length > 0 && (
                              <span className="ml-2">+ {initiative.coAuthors.length} Mitunterzeichner</span>
                            )}
                          </div>
                          <CardDescription className="text-base">
                            {initiative.description}
                          </CardDescription>
                        </div>
                        <div className="ml-4 space-y-2">
                          {getStatusBadge(initiative.status)}
                          <Badge variant={initiative.expectedImpact === "Hoch" ? "default" : "secondary"}>
                            Impact: {initiative.expectedImpact}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Begründung</h4>
                          <p className="text-muted-foreground mb-4">{initiative.reasoning}</p>
                          <div className="bg-muted/30 rounded-lg p-3">
                            <p className="text-sm font-medium text-foreground mb-1">Aktueller Stand:</p>
                            <p className="text-sm text-muted-foreground">{initiative.progress}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Ziele</h4>
                          <ul className="space-y-2">
                            {initiative.goals.map((goal, index) => (
                              <li key={index} className="flex items-start">
                                <Target className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-8">
            <div className="space-y-6">
              {filteredCompleted.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">Keine abgeschlossenen Vorstösse gefunden.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredCompleted.map((initiative) => (
                  <Card key={initiative.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <CardTitle className="text-xl">{initiative.title}</CardTitle>
                            {getTypeBadge(initiative.type)}
                            <Badge variant="outline">{initiative.category}</Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {initiative.date} • {initiative.author}
                          </div>
                          <CardDescription className="text-base">
                            {initiative.description}
                          </CardDescription>
                        </div>
                        <div className="ml-4">
                          {getStatusBadge(initiative.status)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Umsetzung</h4>
                          <ul className="space-y-2 mb-4">
                            {initiative.implementation.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Erfolg & Wirkung</h4>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                              <span className="font-medium text-green-800">{initiative.result}</span>
                            </div>
                            <p className="text-sm text-green-700">{initiative.impact}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="bg-primary/5 rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Haben Sie auch eine Idee für Zug?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Parlamentarische Vorstösse sind ein wichtiges Instrument der demokratischen Mitbestimmung. 
            Teilen Sie Ihre Anliegen mit uns - gemeinsam können wir Zug noch besser machen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontakt" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Idee einreichen
            </a>
            <Button variant="outline" className="inline-flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              Stadtrats-Protokolle
            </Button>
            <a 
              href="/mitglied-werden" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Mitglied werden
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vorstoesse;