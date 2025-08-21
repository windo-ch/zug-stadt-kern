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
import ProtectedEmail from '@/components/ProtectedEmail';

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
      title: "Standaktion auf dem Bundesplatz: 2x NEIN zur Mehrwertinitiative und zum Gegenvorschlag",
      date: "2025-04-22",
      category: "Abstimmungen",
      excerpt: "Am Samstag, 19. April 2025, war die SVP Stadt Zug mit einer Standaktion auf dem Bundesplatz präsent. Bei strahlendem Frühlingswetter suchten unsere Mitglieder das Gespräch mit der Bevölkerung und informierten über die gefährlichen Folgen der Mehrwertinitiative und des Gegenvorschlags.",
      priority: "hoch",
      author: "Gregor Bruhin",
      readTime: "2 min",
      fullText: "Am Samstag, 19. April 2025, war die SVP Stadt Zug mit einer Standaktion auf dem Bundesplatz präsent. Bei strahlendem Frühlingswetter suchten unsere Mitglieder das Gespräch mit der Bevölkerung und informierten über die gefährlichen Folgen der Mehrwertinitiative und des Gegenvorschlags. Mit klaren Argumenten und viel Engagement konnten wir zahlreiche Passantinnen und Passanten von einem 2x NEIN am 18. Mai überzeugen. Die Initiative und ihr Gegenvorschlag bedrohen bewährte Eigentumsrechte, gefährden Arbeitsplätze und treiben die Kosten für Wohnen und Gewerbe in die Höhe – das muss verhindert werden!",
      tags: ["Abstimmung", "Mehrwertinitiative", "Bundesplatz"],
      mediaContact: {
        name: "Gregor Bruhin",
        phone: "+41 79 123 45 67",
        email: "gb@gregor-bruhin.ch"
      }
    },
    {
      id: 2,
      title: "SVP der Stadt Zug ärgert sich über Bettler",
      date: "2025-02-10",
      category: "Sicherheit",
      excerpt: "Generelle Bettelverbote gibt es in immer weniger Kantonen. Auch im Kanton Zug ist Betteln seit rund vier Jahren nicht mehr verboten. Und trotzdem kommt es nun wieder auf die politische Agenda. Für die SVP sind die Bettler nämlich zu aufdringlich.",
      priority: "normal",
      author: "SVP Stadt Zug",
      readTime: "3 min",
      fullText: "Man läuft gemütlich durch die Stadt und wird plötzlich von einem Bettler oder einer Bettlerin angesprochen. Vielleicht haben Sie dies auch schon erlebt. Generelle Bettelverbote gibt es in immer weniger Kantonen. Dies seit einem Urteil des Europäischen Gerichtshofes für Menschenrechte. Auch im Kanton Zug ist Betteln seit rund vier Jahren nicht mehr verboten. Und trotzdem kommt es nun wieder auf die politische Agenda. Für die SVP sind die Bettler nämlich zu aufdringlich.",
      tags: ["Sicherheit", "Ordnung", "Stadt"],
      mediaContact: {
        name: "Maria Zimmermann",
        phone: "+41 79 456 78 90",
        email: "media@svp-stadt-zug.ch"
      }
    },
    {
      id: 3,
      title: "Doppelwechsel in der SVP-Fraktion des Grossen Gemeinderates der Stadt Zug",
      date: "2024-06-17",
      category: "Partei",
      excerpt: "Die SVP-Fraktion des Grossen Gemeinderates der Stadt Zug verzeichnet einen Doppelwechsel. Neue Mitglieder verstärken die Fraktion und bringen frische Ideen in die Stadtpolitik ein.",
      priority: "normal",
      author: "SVP-Fraktion GGR",
      readTime: "4 min",
      fullText: "Die SVP-Fraktion des Grossen Gemeinderates der Stadt Zug verzeichnet einen personellen Wechsel, der die Fraktion mit neuen Impulsen stärkt. Die neuen Mitglieder bringen ihre Expertise und Erfahrung ein, um die bürgerlichen Werte in der Stadtpolitik zu vertreten.",
      tags: ["Fraktion", "Gemeinderat", "Personal"],
      mediaContact: {
        name: "Roman Küng",
        phone: "+41 41 750 10 55",
        email: "roman.kueng@bluewin.ch"
      }
    },
    {
      id: 4,
      title: "Elektroautos – eine Mogelpackung oder die Lösung für die Zukunft?",
      date: "2024-05-15",
      category: "Verkehr",
      excerpt: "Nicht nur der Titel der Tischrede des 1000er-Club-Mitglieds, Morten Hannesbo, tönte spannend, auch das 20' Referat dazu überzeugte durch das Fachwissen, die Logik und der Schlussfolgerung: 'Solange die Sonne scheint, gibt es genug Energie, um Elektroautos zu betreiben!'",
      priority: "normal",
      author: "1000er Club",
      readTime: "5 min",
      fullText: "Nicht nur der Titel der Tischrede des 1000er-Club-Mitglieds, Morten Hannesbo, tönte spannend, auch das 20' Referat dazu überzeugte durch das Fachwissen, die Logik und der Schlussfolgerung: 'Solange die Sonne scheint, gibt es genug Energie, um Elektroautos zu betreiben!' Selbstfahrende Fahrzeuge sind in 20 Jahren im Alltag nicht mehr wegzudenken– die Mobilität und Autonomie des Einzelnen steigt dadurch enorm.",
      tags: ["Elektromobilität", "Zukunft", "1000er Club"],
      mediaContact: {
        name: "Philip Brunner",
        phone: "+41 79 398 4 396",
        email: "phcb@philip-brunner.ch"
      }
    },
    {
      id: 5,
      title: "Nein zur Transparenz-Initiative – unnötige Bürokratie vermeiden",
      date: "2024-02-29",
      category: "Abstimmungen",
      excerpt: "Die SVP Stadt Zug lehnt die Transparenz-Initiative ab. Statt mehr demokratische Teilhabe zu schaffen, würde sie zu unnötiger Bürokratie und hohen Kosten führen, ohne den gewünschten Nutzen zu bringen.",
      priority: "hoch",
      author: "SVP Stadt Zug",
      readTime: "4 min",
      fullText: "Die SVP Stadt Zug positioniert sich klar gegen die Transparenz-Initiative. Diese würde zu einem Bürokratie-Monster werden, das hohe Kosten verursacht, ohne den versprochenen Mehrwert für die Demokratie zu liefern. Transparenz ist wichtig, aber sie muss sinnvoll und verhältnismässig sein.",
      tags: ["Transparenz-Initiative", "Bürokratie", "Abstimmung"],
      mediaContact: {
        name: "Adrian Risi",
        phone: "+41 79 456 78 90",
        email: "adrian.risi@risiimmobilienag.ch"
      }
    },
    {
      id: 6,
      title: "Dringliche Motion: Solidarität mit dem Misox – sofort!",
      date: "2024-01-25",
      category: "Solidarität",
      excerpt: "Nach den verheerenden Unwettern im Misox zeigt die SVP Stadt Zug Solidarität und fordert in einer dringlichen Motion schnelle und unbürokratische Hilfe für die betroffene Region.",
      priority: "hoch",
      author: "SVP Stadt Zug",
      readTime: "3 min",
      fullText: "Die SVP Stadt Zug reicht eine dringliche Motion ein, um den vom Unwetter schwer getroffenen Misox zu helfen. Solidarität in schweren Zeiten ist ein Grundwert unserer Gesellschaft. Die Hilfe muss schnell und unbürokratisch erfolgen.",
      tags: ["Misox", "Solidarität", "Dringliche Motion"],
      mediaContact: {
        name: "André Wicki",
        phone: "+41 58 728 90 01",
        email: "andre.wicki@stadtzug.ch"
      }
    }
  ];

  const categories = [
    { value: 'all', label: 'Alle Kategorien', count: pressReleases.length },
    { value: 'abstimmungen', label: 'Abstimmungen', count: pressReleases.filter(pr => pr.category === 'Abstimmungen').length },
    { value: 'verkehr', label: 'Verkehr', count: pressReleases.filter(pr => pr.category === 'Verkehr').length },
    { value: 'sicherheit', label: 'Sicherheit', count: pressReleases.filter(pr => pr.category === 'Sicherheit').length },
    { value: 'partei', label: 'Partei', count: pressReleases.filter(pr => pr.category === 'Partei').length },
    { value: 'solidarität', label: 'Solidarität', count: pressReleases.filter(pr => pr.category === 'Solidarität').length }
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
      'Abstimmungen': 'bg-green-100 text-green-800 border-green-200',
      'Verkehr': 'bg-blue-100 text-blue-800 border-blue-200',
      'Sicherheit': 'bg-red-100 text-red-800 border-red-200',
      'Partei': 'bg-purple-100 text-purple-800 border-purple-200',
      'Solidarität': 'bg-indigo-100 text-indigo-800 border-indigo-200'
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

        {/* What We Share */}
        <section className="mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Unsere Kommunikation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparente und direkte Kommunikation über unsere politische Arbeit, 
              Standpunkte und Aktivitäten in der Stadt Zug.
            </p>
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
                                  <ProtectedEmail 
                                    user={release.mediaContact.email.split('@')[0]} 
                                    domain={release.mediaContact.email.split('@')[1]} 
                                    showIcon={false}
                                    className="hover:text-primary"
                                  />
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
                            <ProtectedEmail 
                              user={contact.email.split('@')[0]} 
                              domain={contact.email.split('@')[1]} 
                              className="hover:text-primary transition-colors"
                            />
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