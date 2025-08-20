import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Calendar, ArrowRight, Download, Phone, Mail, Eye, Share2, TrendingUp, Users } from 'lucide-react';

const Medienmitteilungen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterYear, setFilterYear] = useState('all');

  useEffect(() => {
    document.title = "Medienmitteilungen – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aktuelle Medienmitteilungen und Pressemeldungen der SVP Stadt Zug - Stellungnahmen zu politischen Themen.');
    }
  }, []);

  const pressReleases = [
    {
      id: 1,
      title: "SVP fordert Stopp der Steuererhöhungspläne",
      date: "2025-01-20",
      category: "Steuerpolitik",
      excerpt: "Die SVP Stadt Zug kritisiert die geplante Erhöhung der Gemeindesteuern scharf und fordert stattdessen eine Überprüfung der Ausgabenstruktur. Präsident Peter Kaufmann: 'Die Bürger sind bereits genug belastet.'",
      priority: "hoch",
      author: "Peter Kaufmann, Präsident",
      readTime: "3 min",
      views: 1247,
      shares: 89,
      fullText: "Die SVP Stadt Zug lehnt die vom Stadtrat vorgeschlagene Steuererhöhung kategorisch ab...",
      tags: ["Steuern", "Budget", "Bürgerbelastung"],
      mediaContact: {
        name: "Maria Zimmermann", 
        phone: "+41 79 456 78 90",
        email: "media@svp-stadt-zug.ch"
      }
    },
    {
      id: 2,
      title: "Erfolgreiche Interpellation zur Verkehrssituation Bahnhofstrasse",
      date: "2025-01-15",
      category: "Verkehr",
      excerpt: "Der Stadtrat hat unsere Interpellation zur Verkehrssituation detailliert beantwortet. Die vorgeschlagenen Massnahmen zur Verkehrsberuhigung werden nun geprüft und sollen bis Sommer 2025 umgesetzt werden.",
      priority: "normal",
      author: "Thomas Bachmann, Stadtrat",
      readTime: "4 min",
      views: 892,
      shares: 45,
      fullText: "Nach intensiven Verhandlungen hat der Stadtrat konkrete Massnahmen zur Verkehrsberuhigung...",
      tags: ["Verkehr", "Bahnhofstrasse", "Interpellation"],
      mediaContact: {
        name: "Thomas Bachmann",
        phone: "+41 41 728 21 12", 
        email: "thomas.bachmann@stadtzug.ch"
      }
    },
    {
      id: 3,
      title: "SVP unterstützt Digitalisierung der Stadtverwaltung",
      date: "2025-01-10",
      category: "Digitalisierung",
      excerpt: "Unsere Motion zur Digitalisierung wurde vom Stadtrat positiv aufgenommen. Bis Ende 2025 sollen 80% aller Verwaltungsdienstleistungen online verfügbar sein. Ein wichtiger Schritt für mehr Bürgerservice.",
      priority: "normal",
      author: "Dr. Andrea Müller, Stadträtin",
      readTime: "2 min",
      views: 1034,
      shares: 67,
      fullText: "Die digitale Transformation der Stadtverwaltung ist ein zentrales Anliegen der SVP...",
      tags: ["Digitalisierung", "E-Government", "Motion"],
      mediaContact: {
        name: "Dr. Andrea Müller",
        phone: "+41 41 728 21 11",
        email: "andrea.mueller@stadtzug.ch"
      }
    },
    {
      id: 4,
      title: "Klare Haltung zu geplanter Stadtentwicklung Zug Ost",
      date: "2024-12-18",
      category: "Stadtplanung",
      excerpt: "Die SVP lehnt die aktuellen Pläne für Zug Ost ab. Die Kosten sind zu hoch, der Nutzen unklar. Wir fordern eine grundsätzliche Überarbeitung des Projekts unter Einbezug der Quartierbevölkerung.",
      priority: "hoch",
      author: "Peter Kaufmann, Präsident",
      readTime: "5 min",
      views: 1567,
      shares: 123,
      fullText: "Das Projekt Zug Ost in der aktuellen Form ist nicht im Interesse der Zuger Bevölkerung...",
      tags: ["Stadtplanung", "Zug Ost", "Bürgerbeteiligung"],
      mediaContact: {
        name: "Peter Kaufmann",
        phone: "+41 79 123 45 67",
        email: "peter.kaufmann@svp-zug.ch"
      }
    },
    {
      id: 5,
      title: "Erfolgreiche Bilanz: Ein Jahr SVP-Arbeit im Überblick",
      date: "2024-12-15",
      category: "Jahresbilanz",
      excerpt: "47 Vorstösse, 12 erfolgreiche Motionen und unzählige Bürgerkontakte: Die SVP Stadt Zug blickt auf ein arbeitsreiches und erfolgreiches politisches Jahr 2024 zurück.",
      priority: "normal",
      author: "Gesamter Vorstand",
      readTime: "8 min",
      views: 2134,
      shares: 178,
      fullText: "Das Jahr 2024 war geprägt von intensiver parlamentarischer Arbeit und direktem Bürgerkontakt...",
      tags: ["Jahresbilanz", "Erfolge", "Statistik"],
      mediaContact: {
        name: "Maria Zimmermann",
        phone: "+41 79 456 78 90",
        email: "sekretariat@svp-stadt-zug.ch"
      }
    },
    {
      id: 6,
      title: "Sicherheit in Zuger Quartieren: Motion eingereicht",
      date: "2024-11-28",
      category: "Sicherheit",
      excerpt: "Mit unserer Motion fordern wir verstärkte Polizeipräsenz in kritischen Quartieren sowie bessere Beleuchtung öffentlicher Räume. Sicherheit ist ein Grundrecht aller Bürgerinnen und Bürger.",
      priority: "normal",
      author: "Dr. Andrea Müller, Stadträtin",
      readTime: "3 min",
      views: 987,
      shares: 56,
      fullText: "Die Sicherheitslage in einigen Zuger Quartieren hat sich verschlechtert...",
      tags: ["Sicherheit", "Motion", "Quartiere"],
      mediaContact: {
        name: "Dr. Andrea Müller",
        phone: "+41 41 728 21 11",
        email: "andrea.mueller@stadtzug.ch"
      }
    }
  ];

  const mediaStatistics = [
    {
      icon: FileText,
      number: "47",
      label: "Medienmitteilungen 2024",
      description: "Transparente Kommunikation"
    },
    {
      icon: Eye,
      number: "89k",
      label: "Gesamtreichweite",
      description: "Online und Print"
    },
    {
      icon: TrendingUp,
      number: "340%",
      label: "Wachstum Social Media",
      description: "Follower-Zuwachs 2024"
    }
  ];

  const categories = [
    { value: 'all', label: 'Alle Kategorien', count: pressReleases.length },
    { value: 'steuerpolitik', label: 'Steuerpolitik', count: pressReleases.filter(pr => pr.category === 'Steuerpolitik').length },
    { value: 'verkehr', label: 'Verkehr', count: pressReleases.filter(pr => pr.category === 'Verkehr').length },
    { value: 'sicherheit', label: 'Sicherheit', count: pressReleases.filter(pr => pr.category === 'Sicherheit').length },
    { value: 'stadtplanung', label: 'Stadtplanung', count: pressReleases.filter(pr => pr.category === 'Stadtplanung').length },
    { value: 'digitalisierung', label: 'Digitalisierung', count: pressReleases.filter(pr => pr.category === 'Digitalisierung').length }
  ];

  const mediaContacts = [
    {
      name: "Maria Zimmermann",
      role: "Mediensprecherin",
      phone: "+41 79 456 78 90",
      email: "media@svp-stadt-zug.ch",
      availability: "Mo-Fr: 8:00-18:00, Wochenende nach Vereinbarung",
      specialties: ["Allgemeine Anfragen", "Pressetermine", "Interviews"]
    },
    {
      name: "Peter Kaufmann",
      role: "Präsident",
      phone: "+41 79 123 45 67", 
      email: "peter.kaufmann@svp-zug.ch",
      availability: "Nach Vereinbarung",
      specialties: ["Strategische Fragen", "Parteipositionen", "TV-Interviews"]
    }
  ];

  const filteredReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || release.category.toLowerCase() === filterCategory;
    const matchesYear = filterYear === 'all' || release.date.startsWith(filterYear);
    return matchesSearch && matchesCategory && matchesYear;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-CH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPriorityBadge = (priority: string) => {
    return priority === 'hoch' ? 
      <Badge className="bg-red-100 text-red-800 border-red-200">
        Hohe Priorität
      </Badge> : null;
  };

  const getCategoryBadge = (category: string) => {
    const categoryColors: { [key: string]: string } = {
      'Steuerpolitik': 'bg-green-100 text-green-800 border-green-200',
      'Verkehr': 'bg-blue-100 text-blue-800 border-blue-200',
      'Sicherheit': 'bg-red-100 text-red-800 border-red-200',
      'Stadtplanung': 'bg-purple-100 text-purple-800 border-purple-200',
      'Digitalisierung': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Jahresbilanz': 'bg-orange-100 text-orange-800 border-orange-200'
    };
    
    return (
      <Badge className={categoryColors[category] || "bg-gray-100 text-gray-800 border-gray-200"}>
        {category}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Medienmitteilungen</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere Medienmitteilungen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Aktuelle Stellungnahmen und Pressemeldungen der SVP Stadt Zug. 
            Transparent, direkt und bürgernah - so informieren wir über unsere politische Arbeit.
          </p>
        </div>

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {mediaStatistics.map((stat, index) => (
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
                placeholder="Medienmitteilung suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Kategorie wählen" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label} ({cat.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterYear} onValueChange={setFilterYear}>
              <SelectTrigger className="w-full md:w-32">
                <SelectValue placeholder="Jahr" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Jahre</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="releases" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="releases" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Medienmitteilungen
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Medienkontakte
            </TabsTrigger>
          </TabsList>

          <TabsContent value="releases" className="mt-8">
            <div className="space-y-6">
              {filteredReleases.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">Keine Medienmitteilungen gefunden.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredReleases.map((release) => (
                  <Card key={release.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-4 gap-6">
                        {/* Date and Meta Info */}
                        <div className="lg:col-span-1">
                          <div className="space-y-3">
                            <div className="text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 inline mr-2" />
                              {formatDate(release.date)}
                            </div>
                            <div className="space-y-2">
                              {getCategoryBadge(release.category)}
                              {getPriorityBadge(release.priority)}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              <Eye className="w-3 h-3 inline mr-1" />
                              {release.views} Aufrufe
                            </div>
                            <div className="text-xs text-muted-foreground">
                              <Share2 className="w-3 h-3 inline mr-1" />
                              {release.shares} Shares
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-2">
                          <h3 className="text-xl font-bold text-foreground mb-4">
                            {release.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {release.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                            <span><strong>Autor:</strong> {release.author}</span>
                            <span><strong>Lesezeit:</strong> {release.readTime}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {release.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Actions and Contact */}
                        <div className="lg:col-span-1">
                          <div className="space-y-4">
                            <Button className="w-full">
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Vollständig lesen
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              <Download className="w-4 h-4 mr-2" />
                              PDF Download
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              <Share2 className="w-4 h-4 mr-2" />
                              Teilen
                            </Button>
                            
                            <div className="pt-4 border-t">
                              <h4 className="font-medium text-sm mb-2">Medienkontakt</h4>
                              <div className="text-xs text-muted-foreground space-y-1">
                                <p className="font-medium">{release.mediaContact.name}</p>
                                <div className="flex items-center">
                                  <Phone className="w-3 h-3 mr-1" />
                                  <a href={`tel:${release.mediaContact.phone}`} className="hover:text-primary">
                                    {release.mediaContact.phone}
                                  </a>
                                </div>
                                <div className="flex items-center">
                                  <Mail className="w-3 h-3 mr-1" />
                                  <a href={`mailto:${release.mediaContact.email}`} className="hover:text-primary">
                                    {release.mediaContact.email}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {mediaContacts.map((contact, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{contact.name}</CardTitle>
                        <CardDescription className="text-base">{contact.role}</CardDescription>
                      </div>
                      <Badge variant="outline">Pressekontakt</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Kontaktdaten</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                              {contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                              {contact.email}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Verfügbarkeit</h4>
                        <p className="text-sm text-muted-foreground">{contact.availability}</p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Fachbereiche</h4>
                        <div className="flex flex-wrap gap-2">
                          {contact.specialties.map((specialty, specialtyIndex) => (
                            <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Immer aktuell informiert bleiben
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Verpassen Sie keine wichtigen Medienmitteilungen. Abonnieren Sie unseren Newsletter 
            oder folgen Sie uns in den sozialen Medien für die neuesten Updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/newsletter" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Newsletter abonnieren
            </a>
            <Button variant="outline" className="inline-flex items-center">
              <Download className="w-4 h-4 mr-2" />
              RSS-Feed abonnieren
            </Button>
            <a 
              href="/kontakt" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Medienanfrage stellen
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Medienmitteilungen;