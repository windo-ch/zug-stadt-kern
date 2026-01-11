import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import CTASection from '@/components/ctas/CTASection';
import VoteCard from '@/components/content/VoteCard';
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

  const upcomingVotes = [
    {
      id: 1,
      title: "Bundesbeschluss über kantonalen Liegenschaftssteuern auf Zweitliegenschaften",
      date: "28. September 2025",
      level: "Eidgenössisch",
      description: "Bundesbeschluss vom 20. Dezember 2024 über die kantonalen Liegenschaftssteuern auf Zweitliegenschaften",
      recommendation: "Nein",
      reasoning: "Die SVP lehnt zusätzliche Steuerbelastungen ab, da diese die Wirtschaft und den Immobilienmarkt belasten.",
      details: [
        "Zusätzliche Steuerbelastung für Zweitliegenschaften",
        "Negative Auswirkungen auf den Immobilienmarkt",
        "Gefährdung der Wirtschaftsfreiheit"
      ],
      status: "upcoming",
      importance: "Hoch"
    },
    {
      id: 2,
      title: "E-ID-Gesetz (Elektronischer Identitätsnachweis)",
      date: "28. September 2025",
      level: "Eidgenössisch",
      description: "Bundesgesetz über den elektronischen Identitätsnachweis und andere elektronische Nachweise",
      recommendation: "Nein",
      reasoning: "Die SVP lehnt staatliche E-ID-Lösungen ab und bevorzugt private, marktwirtschaftliche Lösungen.",
      details: [
        "Staatliche Überregulierung der digitalen Identität",
        "Datenschutzbedenken bei staatlicher Kontrolle",
        "Private Lösungen sind innovativer und sicherer"
      ],
      status: "upcoming",
      importance: "Hoch"
    },
    {
      id: 3,
      title: "Service-citoyen-Initiative",
      date: "30. November 2025",
      level: "Eidgenössisch",
      description: "Volksinitiative «Für eine engagierte Schweiz (Service-citoyen-Initiative)»",
      recommendation: "Nein",
      reasoning: "Die SVP lehnt obligatorischen Zivildienst ab, da dieser die persönliche Freiheit einschränkt.",
      details: [
        "Einschränkung der persönlichen Freiheit",
        "Unverhältnismässige Belastung für junge Menschen",
        "Bestehende Freiwilligenarbeit ist ausreichend"
      ],
      status: "upcoming",
      importance: "Hoch"
    },
    {
      id: 4,
      title: "Initiative für eine soziale Klimapolitik",
      date: "30. November 2025",
      level: "Eidgenössisch",
      description: "Volksinitiative «Für eine soziale Klimapolitik – steuerlich gerecht finanziert»",
      recommendation: "Nein",
      reasoning: "Die SVP lehnt klimapolitische Zwangsmassnahmen ab, die Wirtschaft und Bevölkerung belasten.",
      details: [
        "Unverhältnismässige Kosten für Haushalte und Unternehmen",
        "Gefährdung der Energiesicherheit",
        "Bessere Lösungen über Innovation und Technologie"
      ],
      status: "upcoming",
      importance: "Hoch"
    },
    {
      id: 5,
      title: "Kantonales Wahlrecht für Menschen mit Beeinträchtigungen",
      date: "30. November 2025",
      level: "Kantonal",
      description: "Änderung der Kantonsverfassung (KV) betreffend Kantonales Wahlrecht für Menschen mit Beeinträchtigungen",
      recommendation: "Nein",
      reasoning: "Die SVP lehnt die Ausweitung des Wahlrechts ab, da dies die Integrität des demokratischen Prozesses gefährden könnte.",
      details: [
        "Gefährdung der Integrität des Wahlprozesses",
        "Unklare Kriterien für Beeinträchtigungen",
        "Bestehende Schutzmechanismen sind ausreichend"
      ],
      status: "upcoming",
      importance: "Mittel"
    }
  ];

  const pastVotes = [
    {
      id: 6,
      title: "Bundesbeschluss über die Erhöhung der Mehrwertsteuer",
      date: "9. Februar 2025",
      level: "Eidgenössisch",
      description: "Bundesbeschluss über die Erhöhung der Mehrwertsteuer zur Finanzierung der AHV",
      recommendation: "Nein",
      reasoning: "Die SVP lehnt Steuererhöhungen ab, da diese die Wirtschaft und Bevölkerung belasten.",
      result: "Abgelehnt",
      resultPercentage: "55.1%",
      svpMatch: true,
      status: "past",
      importance: "Hoch"
    },
    {
      id: 7,
      title: "Klimaschutz-Gesetz",
      date: "9. Februar 2025", 
      level: "Eidgenössisch",
      description: "Bundesgesetz über die Ziele im Klimaschutz, die Innovation und die Stärkung der Energiesicherheit",
      recommendation: "Nein",
      reasoning: "Das Gesetz führt zu übermässigen Belastungen für Wirtschaft und Bevölkerung ohne messbare Klimawirkung.",
      result: "Abgelehnt",
      resultPercentage: "51.0%",
      svpMatch: true,
      status: "past",
      importance: "Hoch"
    }
  ];

  const statistics = [
    {
      icon: Vote,
      number: "18",
      label: "Abstimmungen 2025",
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


  return (
    <PageLayout 
      title="Abstimmungen – SVP Stadt Zug"
      description="Abstimmungsempfehlungen der SVP Stadt Zug - transparent, begründet und bürgernah. Informieren Sie sich über unsere Positionen."
    >
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
        <Section className="mb-16">
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
        </Section>

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
                  <VoteCard
                    key={vote.id}
                    id={vote.id}
                    title={vote.title}
                    date={vote.date}
                    level={vote.level}
                    description={vote.description}
                    recommendation={vote.recommendation}
                    reasoning={vote.reasoning}
                    details={vote.details}
                    status="upcoming"
                    importance={vote.importance}
                  />
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
                  <VoteCard
                    key={vote.id}
                    id={vote.id}
                    title={vote.title}
                    date={vote.date}
                    level={vote.level}
                    description={vote.description}
                    recommendation={vote.recommendation}
                    reasoning={vote.reasoning}
                    details={vote.details}
                    status="past"
                    importance={vote.importance}
                    result={vote.result}
                    resultPercentage={vote.resultPercentage}
                    svpMatch={vote.svpMatch}
                  />
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <CTASection
            title="Bleiben Sie informiert"
            description="Abonnieren Sie unseren Newsletter und erhalten Sie unsere Abstimmungsempfehlungen direkt in Ihr E-Mail-Postfach. Fundiert recherchiert und verständlich erklärt."
            variant="default"
            className="!bg-primary/5 rounded-lg"
            primaryButton={{
              text: "Kontakt aufnehmen",
              href: "/kontakt",
              variant: "primary"
            }}
            secondaryButton={{
              text: "Fragen stellen",
              href: "/kontakt",
              variant: "outline"
            }}
          />
        </div>
      </main>
    </PageLayout>
  );
};

export default Abstimmungen;