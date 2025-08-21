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
      title: "Hilfe für Blatten",
      type: "Motion",
      date: "30. Juni 2025",
      status: "zur Überw.",
      description: "Gemeinsame Motion aller Fraktionen zur Unterstützung von Blatten",
      author: "SP, ALG/CSP, FDP, Die Mitte, SVP und GLP",
      coAuthors: [],
      reasoning: "Gemeinsame Motion aller Fraktionen zur Unterstützung von Blatten",
      goals: [
        "Unterstützung der betroffenen Bevölkerung",
        "Koordination der Hilfsmassnahmen",
        "Sicherstellung der notwendigen Ressourcen"
      ],
      progress: "Zur Überweisung eingereicht",
      expectedImpact: "Hoch",
      category: "Soziales",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      recent: true
    },
    {
      id: 2,
      title: "Jahres-Parkkarte: Runter mit dem Preis um 50%!",
      type: "Motion",
      date: "16. Juni 2025",
      status: "zur Überw.",
      description: "SVP-Motion für günstigere Jahres-Parkkarten für Bürger",
      author: "SVP-Fraktion",
      coAuthors: [],
      reasoning: "Die aktuellen Preise für Jahres-Parkkarten belasten die Bürger unverhältnismässig und sollten reduziert werden.",
      goals: [
        "50% Reduktion der Jahres-Parkkarten-Preise",
        "Entlastung der Bürger bei Parkgebühren",
        "Förderung der Innenstadt-Nutzung"
      ],
      progress: "Zur Überweisung eingereicht",
      expectedImpact: "Hoch",
      category: "Verkehr",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      recent: true
    },
    {
      id: 3,
      title: "Zug First – mit einer klaren Priorität zu Gunsten der AdF der FFZ",
      type: "Motion",
      date: "11. Juni 2025",
      status: "zur Überw.",
      description: "Prioritätensetzung für Zuger Interessen",
      author: "SVP-Fraktion",
      coAuthors: [],
      reasoning: "Zuger Interessen müssen bei wichtigen Entscheidungen Priorität haben.",
      goals: [
        "Klare Prioritätensetzung für Zuger Belange",
        "Stärkung der lokalen Interessen",
        "Bessere Koordination zwischen den Behörden"
      ],
      progress: "Zur Überweisung eingereicht",
      expectedImpact: "Mittel",
      category: "Politik",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      recent: true
    },
    {
      id: 4,
      title: "Bewerbung der Stadt Zug als Kulturhauptstadt Schweiz 2030",
      type: "Interpellation",
      date: "14. Mai 2025",
      status: "2948 SR",
      description: "Gemeinsame Interpellation zur Kulturhauptstadt-Bewerbung",
      author: "FDP, SVP, SP, Die Mitte",
      coAuthors: [],
      reasoning: "Die Bewerbung als Kulturhauptstadt ist ein wichtiges Projekt für die Stadt Zug.",
      goals: [
        "Transparenz über die Bewerbung schaffen",
        "Kosten und Nutzen analysieren",
        "Bürgerschaft informieren"
      ],
      progress: "Antwort des Stadtrats erfolgt",
      expectedImpact: "Mittel",
      category: "Kultur",
      referenz: "06 - GGR Parlamentarischer Vorstoss",
      recent: true
    },
    {
      id: 5,
      title: "Stadt Zuger Honig – ein nachhaltiger Pilotversuch!",
      type: "Postulat",
      date: "13. März 2025",
      status: "Überw.",
      description: "Initiative für nachhaltige Honigproduktion in der Stadt",
      author: "SVP-Fraktion",
      coAuthors: [],
      reasoning: "Nachhaltige Honigproduktion kann einen wichtigen Beitrag zur lokalen Landwirtschaft leisten.",
      goals: [
        "Förderung der lokalen Imkerei",
        "Nachhaltige Honigproduktion etablieren",
        "Umweltbildung stärken"
      ],
      progress: "Überwiesen zur Bearbeitung",
      expectedImpact: "Mittel",
      category: "Umwelt",
      referenz: "06 - GGR Parlamentarischer Vorstoss"
    },
    {
      id: 6,
      title: "Städtische Gebühren, die «bestgehüteten Geheimnisse» der Stadt Zug",
      type: "Postulat",
      date: "24. Februar 2025",
      status: "Zur Überw.",
      description: "Mehr Transparenz bei städtischen Gebühren gefordert",
      author: "SVP-Fraktion",
      coAuthors: [],
      reasoning: "Bürger haben ein Recht auf Transparenz bei städtischen Gebühren.",
      goals: [
        "Vollständige Transparenz bei Gebühren",
        "Vereinfachung der Gebührenstruktur",
        "Bessere Information der Bürger"
      ],
      progress: "Zur Überweisung eingereicht",
      expectedImpact: "Hoch",
      category: "Verwaltung",
      referenz: "06 - GGR Parlamentarischer Vorstoss"
    },
    {
      id: 7,
      title: "Neuen Standorten auf OeIB-Arealen zur Erstellung von Asylunterkünften",
      type: "Kleine Anfrage",
      date: "18. Februar 2025",
      status: "2937 SR",
      description: "Anfrage zu geplanten Asylunterkünften in der Stadt Zug",
      author: "SVP-Fraktion",
      coAuthors: [],
      reasoning: "Die Bevölkerung muss über geplante Asylunterkünfte informiert werden.",
      goals: [
        "Transparenz über Standorte schaffen",
        "Bürgerbeteiligung sicherstellen",
        "Auswirkungen analysieren"
      ],
      progress: "Antwort des Stadtrats erfolgt",
      expectedImpact: "Mittel",
      category: "Soziales",
      referenz: "06 - GGR Parlamentarischer Vorstoss"
    },
    {
      id: 8,
      title: "Initiative 2000 Wohnungen für den Zuger Mittelstand",
      type: "Interpellation",
      date: "20. Januar 2025",
      status: "2932 SR",
      description: "Blockiert die Initiative die Erstellung von Wohnraum?",
      author: "FDP- und SVP Fraktion",
      coAuthors: [],
      reasoning: "Die Wohnrauminitiative und ihre Auswirkungen müssen analysiert werden.",
      goals: [
        "Auswirkungen auf Wohnungsbau klären",
        "Mittelstand-Bedürfnisse berücksichtigen",
        "Lösungsansätze entwickeln"
      ],
      progress: "Antwort des Stadtrats erfolgt",
      expectedImpact: "Hoch",
      category: "Wohnen",
      referenz: "06 - GGR Parlamentarischer Vorstoss"
    },
    {
      id: 9,
      title: "Verbesserung der hygienischen Situation in der Männerbadi",
      type: "Motion",
      date: "20. Januar 2025",
      status: "Überw.",
      description: "Gemeinsame Motion für bessere Hygiene in der Männerbadi",
      author: "FDP, SVP, SP und GLP",
      coAuthors: [],
      reasoning: "Die hygienischen Zustände in der Männerbadi müssen dringend verbessert werden.",
      goals: [
        "Sanierung der sanitären Anlagen",
        "Verbesserte Reinigungsintervalle",
        "Modernisierung der Infrastruktur"
      ],
      progress: "Überwiesen zur Umsetzung",
      expectedImpact: "Mittel",
      category: "Infrastruktur",
      referenz: "06 - GGR Parlamentarischer Vorstoss"
    },
    {
      id: 10,
      title: "Öffentliches Betteln in Zug – nein Danke!",
      type: "Interpellation",
      date: "16. Januar 2025",
      status: "2944 SR",
      description: "SVP-Interpellation gegen öffentliches Betteln",
      author: "SVP-Fraktion",
      coAuthors: [],
      reasoning: "Das öffentliche Betteln stört das Stadtbild und sollte reguliert werden.",
      goals: [
        "Regulierung des öffentlichen Bettelns",
        "Verbesserung des Stadtbilds",
        "Alternative Hilfsangebote schaffen"
      ],
      progress: "Antwort des Stadtrats erfolgt",
      expectedImpact: "Mittel",
      category: "Ordnung",
      referenz: "06 - GGR Parlamentarischer Vorstoss"
    }
  ];

  const completedInitiatives = [
    {
      id: 11,
      title: "Pflegeplätze und Alterswohnen - nicht nur ein Lippenbekenntnis!",
      type: "Interpellation",
      date: "19. November 2024",
      status: "2936 SR",
      description: "Interpellation zu Pflegeplätzen und Alterswohnen",
      author: "SVP-Fraktion",
      coAuthors: [],
      result: "Beantwortet",
      implementation: [
        "Detaillierte Antwort des Stadtrats erhalten",
        "Situationsanalyse durchgeführt",
        "Handlungsbedarf aufgezeigt"
      ],
      impact: "Verbessertes Bewusstsein für Pflegeplatz-Problematik",
      category: "Gesundheit"
    },
    {
      id: 12,
      title: "WWZ – Remedur ist angesagt!",
      type: "Interpellation",
      date: "30. Oktober 2024",
      status: "2915 SR",
      description: "Interpellation zu WWZ-Problemen",
      author: "SVP-Fraktion",
      coAuthors: [],
      result: "Beantwortet",
      implementation: [
        "Antwort des Stadtrats erhalten",
        "Probleme identifiziert",
        "Verbesserungsmassnahmen eingeleitet"
      ],
      impact: "Bessere Kontrolle der WWZ-Aktivitäten",
      category: "Energie"
    },
    {
      id: 13,
      title: "WWZ – strategisch neu ausrichten, zu Gunsten von Effizienz und Transparenz!",
      type: "Interpellation",
      date: "30. Oktober 2024",
      status: "2916 SR",
      description: "Interpellation zur strategischen Neuausrichtung der WWZ",
      author: "SVP-Fraktion",
      coAuthors: [],
      result: "Beantwortet",
      implementation: [
        "Strategische Überprüfung eingeleitet",
        "Transparenz-Massnahmen definiert",
        "Effizienz-Verbesserungen geplant"
      ],
      impact: "Klarere Ausrichtung der WWZ",
      category: "Energie"
    },
    {
      id: 14,
      title: "Solidarität mit dem Misox – sofort!",
      type: "Motion",
      date: "25. Juni 2024",
      status: "Überw.",
      description: "Motion zur Unterstützung des Misox",
      author: "SVP-Fraktion",
      coAuthors: [],
      result: "Umgesetzt",
      implementation: [
        "Finanzielle Unterstützung bewilligt",
        "Koordination mit anderen Gemeinden",
        "Hilfsangebote organisiert"
      ],
      impact: "Konkrete Hilfe für das Misox geleistet",
      category: "Soziales"
    },
    {
      id: 15,
      title: "Damwild im Zurlaubenhof? – JA!",
      type: "Postulat",
      date: "29. August 2024",
      status: "Überw.",
      description: "Postulat für Damwild im Zurlaubenhof",
      author: "SVP-Fraktion",
      coAuthors: [],
      result: "Umgesetzt",
      implementation: [
        "Konzept für Damwild-Haltung entwickelt",
        "Standort im Zurlaubenhof definiert",
        "Umsetzung eingeleitet"
      ],
      impact: "Neue Attraktion für Zug geschaffen",
      category: "Tourismus"
    }
  ];

  const statistics = [
    {
      icon: FileText,
      number: "25",
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
      number: "15",
      label: "Vorstösse 2025",
      description: "Bereits eingereichte Vorstösse"
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
      "zur Überw.": { color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: Clock },
      "Zur Überw.": { color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: Clock },
      "Überw.": { color: "bg-green-100 text-green-800 border-green-200", icon: CheckCircle },
      "2948 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2937 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2932 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2944 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2936 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2915 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2916 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "Beantwortet": { color: "bg-green-100 text-green-800 border-green-200", icon: CheckCircle },
      "Umgesetzt": { color: "bg-green-100 text-green-800 border-green-200", icon: CheckCircle }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || { color: "bg-gray-100 text-gray-800 border-gray-200", icon: FileText };
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
            Unsere parlamentarischen Vorstösse und politische Arbeit im Gemeinderat. 
            Verfolgen Sie unsere aktuellen Motionen, Interpellationen und Postulate für eine bessere Stadt Zug.
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
                <SelectItem value="kleine anfrage">Kleine Anfrage</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Status</SelectItem>
                <SelectItem value="überw">Zur Überweisung</SelectItem>
                <SelectItem value="sr">Antwort Stadtrat</SelectItem>
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
                            {initiative.coAuthors && initiative.coAuthors.length > 0 && (
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
                          {initiative.recent && <Badge className="bg-primary text-primary-foreground text-xs">Neu</Badge>}
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