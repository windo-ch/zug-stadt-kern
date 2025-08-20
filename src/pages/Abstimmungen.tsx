import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Vote, CheckCircle, XCircle, Clock, Calendar, FileText, Users, TrendingUp } from 'lucide-react';

const Abstimmungen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    document.title = "Abstimmungen – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Abstimmungsempfehlungen der SVP Stadt Zug - transparent, begründet und bürgernah. Informieren Sie sich über unsere Positionen.');
    }
  }, []);

  const upcomingVotes = [
    {
      id: 1,
      title: "Initiative für bezahlbares Wohnen",
      date: "3. März 2024",
      level: "Kantonal",
      description: "Volksinitiative zur Förderung von bezahlbarem Wohnraum im Kanton Zug",
      recommendation: "Nein",
      reasoning: "Die Initiative führt zu staatlicher Überregulierung des Wohnungsmarkts und hemmt private Investitionen in den Wohnungsbau.",
      details: [
        "Gefahr der Marktverzerrung durch staatliche Eingriffe",
        "Negative Auswirkungen auf Bauinvestitionen",
        "Alternative Lösungen über Raumplanung sind zielführender"
      ],
      status: "upcoming",
      importance: "Hoch"
    },
    {
      id: 2,
      title: "Verkehrsinitiative Innenstadt",
      date: "3. März 2024",
      level: "Kommunal",
      description: "Initiative zur Verkehrsberuhigung der Zuger Innenstadt",
      recommendation: "Ja",
      reasoning: "Massvoll konzipierte Verkehrsberuhigung verbessert die Lebensqualität ohne den Wirtschaftsstandort zu schwächen.",
      details: [
        "Ausgewogene Balance zwischen Verkehr und Aufenthaltsqualität",
        "Berücksichtigung der Bedürfnisse von Gewerbe und Anwohnern",
        "Beibehaltung ausreichender Parkplätze"
      ],
      status: "upcoming",
      importance: "Mittel"
    }
  ];

  const pastVotes = [
    {
      id: 3,
      title: "Steuergesetz-Revision 2023",
      date: "25. September 2023",
      level: "Kantonal",
      description: "Anpassung der Steuersätze für Unternehmen",
      recommendation: "Ja",
      reasoning: "Erhaltung der Konkurrenzfähigkeit des Wirtschaftsstandorts Zug ist essentiell.",
      result: "Angenommen",
      resultPercentage: "64.2%",
      svpMatch: true,
      status: "past",
      importance: "Hoch"
    },
    {
      id: 4,
      title: "Klimaschutz-Initiative",
      date: "25. September 2023", 
      level: "Kommunal",
      description: "Verschärfung der kommunalen Klimaziele",
      recommendation: "Nein",
      reasoning: "Unrealistische Ziele gefährden Arbeitsplätze und belasten Haushalte unverhältnismässig.",
      result: "Abgelehnt",
      resultPercentage: "58.7%",
      svpMatch: true,
      status: "past",
      importance: "Hoch"
    },
    {
      id: 5,
      title: "Schulraum-Erweiterung Ost",
      date: "18. Juni 2023",
      level: "Kommunal", 
      description: "Kredit für neues Schulhaus im Osten der Stadt",
      recommendation: "Ja",
      reasoning: "Bildungsinfrastruktur ist eine Investition in die Zukunft unserer Kinder.",
      result: "Angenommen",
      resultPercentage: "71.3%",
      svpMatch: true,
      status: "past",
      importance: "Mittel"
    }
  ];

  const statistics = [
    {
      icon: Vote,
      number: "24",
      label: "Abstimmungen 2023",
      description: "Kantonal und kommunal"
    },
    {
      icon: TrendingUp,
      number: "78%",
      label: "Übereinstimmung",
      description: "SVP-Empfehlung mit Resultat"
    },
    {
      icon: Users,
      number: "67%",
      label: "Durchschnittliche Beteiligung",
      description: "Bei kommunalen Abstimmungen"
    }
  ];

  const filteredUpcoming = upcomingVotes.filter(vote => {
    const matchesSearch = vote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vote.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || vote.level.toLowerCase() === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const filteredPast = pastVotes.filter(vote => {
    const matchesSearch = vote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vote.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || vote.level.toLowerCase() === filterLevel;
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'match' && vote.svpMatch) ||
                         (filterStatus === 'no-match' && !vote.svpMatch);
    return matchesSearch && matchesLevel && matchesStatus;
  });

  const getRecommendationBadge = (recommendation: string) => {
    return recommendation === "Ja" ? 
      <Badge className="bg-green-100 text-green-800 border-green-200">
        <CheckCircle className="w-3 h-3 mr-1" />
        Ja-Empfehlung
      </Badge> :
      <Badge className="bg-red-100 text-red-800 border-red-200">
        <XCircle className="w-3 h-3 mr-1" />
        Nein-Empfehlung
      </Badge>;
  };

  const getResultBadge = (result: string, svpMatch: boolean) => {
    const isAccepted = result === "Angenommen";
    const baseColor = isAccepted ? "green" : "red";
    
    return (
      <div className="flex items-center space-x-2">
        <Badge className={`bg-${baseColor}-100 text-${baseColor}-800 border-${baseColor}-200`}>
          {result}
        </Badge>
        {svpMatch && (
          <Badge variant="outline" className="text-xs">
            <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
            SVP-Linie
          </Badge>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Abstimmungen</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere Abstimmungsempfehlungen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transparente und fundierte Empfehlungen zu allen wichtigen Abstimmungen. 
            Erfahren Sie, warum wir bestimmte Positionen vertreten und wie diese Entscheidungen 
            Zug und seine Bürger betreffen.
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

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Abstimmung suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={filterLevel} onValueChange={setFilterLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Ebene wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Ebenen</SelectItem>
                <SelectItem value="kommunal">Kommunal</SelectItem>
                <SelectItem value="kantonal">Kantonal</SelectItem>
                <SelectItem value="national">National</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Ergebnis-Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Ergebnisse</SelectItem>
                <SelectItem value="match">SVP-Linie bestätigt</SelectItem>
                <SelectItem value="no-match">Andere Entscheidung</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Kommende Abstimmungen
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Vergangene Abstimmungen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-8">
            <div className="space-y-6">
              {filteredUpcoming.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">Keine kommenden Abstimmungen gefunden.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredUpcoming.map((vote) => (
                  <Card key={vote.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <CardTitle className="text-xl">{vote.title}</CardTitle>
                            <Badge variant="outline">{vote.level}</Badge>
                            <Badge variant={vote.importance === "Hoch" ? "default" : "secondary"}>
                              {vote.importance}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {vote.date}
                          </div>
                          <CardDescription className="text-base">
                            {vote.description}
                          </CardDescription>
                        </div>
                        <div className="ml-4">
                          {getRecommendationBadge(vote.recommendation)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Unsere Begründung</h4>
                          <p className="text-muted-foreground mb-4">{vote.reasoning}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Wichtige Punkte</h4>
                          <ul className="space-y-2">
                            {vote.details.map((detail, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-muted-foreground text-sm">{detail}</span>
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

          <TabsContent value="past" className="mt-8">
            <div className="space-y-6">
              {filteredPast.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">Keine vergangenen Abstimmungen gefunden.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredPast.map((vote) => (
                  <Card key={vote.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <CardTitle className="text-xl">{vote.title}</CardTitle>
                            <Badge variant="outline">{vote.level}</Badge>
                            <Badge variant={vote.importance === "Hoch" ? "default" : "secondary"}>
                              {vote.importance}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {vote.date}
                          </div>
                          <CardDescription className="text-base">
                            {vote.description}
                          </CardDescription>
                        </div>
                        <div className="ml-4 space-y-2">
                          {getRecommendationBadge(vote.recommendation)}
                          {getResultBadge(vote.result, vote.svpMatch)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Unsere Begründung</h4>
                          <p className="text-muted-foreground">{vote.reasoning}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Ergebnis</h4>
                          <div className="space-y-2">
                            <p className="text-muted-foreground">
                              <strong>{vote.result}</strong> mit {vote.resultPercentage}
                            </p>
                            {vote.svpMatch && (
                              <p className="text-sm text-green-600">
                                ✓ Stimmt mit SVP-Empfehlung überein
                              </p>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Analyse</h4>
                          <Button variant="outline" size="sm" className="w-full">
                            Detailanalyse anzeigen
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <div className="bg-primary/5 rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Bleiben Sie informiert
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Abonnieren Sie unseren Newsletter und erhalten Sie unsere Abstimmungsempfehlungen 
            direkt in Ihr E-Mail-Postfach. Fundiert recherchiert und verständlich erklärt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/newsletter" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Newsletter abonnieren
            </a>
            <a 
              href="/kontakt" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Fragen stellen
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Abstimmungen;