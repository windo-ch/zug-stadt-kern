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
      fullText: "Am Samstag, 19. April 2025, war die SVP Stadt Zug mit einer Standaktion auf dem Bundesplatz präsent. Bei strahlendem Frühlingswetter suchten unsere Mitglieder das Gespräch mit der Bevölkerung und informierten über die gefährlichen Folgen der Mehrwertinitiative und des Gegenvorschlags.\n\nMit klaren Argumenten und viel Engagement konnten wir zahlreiche Passantinnen und Passanten von einem 2x NEIN am 18. Mai überzeugen. Die Initiative und ihr Gegenvorschlag bedrohen bewährte Eigentumsrechte, gefährden Arbeitsplätze und treiben die Kosten für Wohnen und Gewerbe in die Höhe – das muss verhindert werden!\n\nEin herzlicher Dank geht an alle, die mitgeholfen, informiert und mitdiskutiert haben. Gemeinsam setzen wir ein starkes Zeichen für Freiheit, Eigentum und Eigenverantwortung.",
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
      fullText: "Man läuft gemütlich durch die Stadt und wird plötzlich von einem Bettler oder einer Bettlerin angesprochen. Vielleicht haben Sie dies auch schon erlebt. Generelle Bettelverbote gibt es in immer weniger Kantonen. Dies seit einem Urteil des Europäischen Gerichtshofes für Menschenrechte.\n\nAuch im Kanton Zug ist Betteln seit rund vier Jahren nicht mehr verboten. Und trotzdem kommt es nun wieder auf die politische Agenda. Für die SVP sind die Bettler nämlich zu aufdringlich.\n\nDie SVP fordert Massnahmen gegen aggressives Betteln und setzt sich für die Sicherheit und das Wohlbefinden aller Bürgerinnen und Bürger in der Stadt Zug ein.",
      tags: ["Sicherheit", "Ordnung", "Stadt"],
      mediaContact: {
        name: "Roman Küng",
        phone: "+41 41 750 10 55",
        email: "roman.kueng@bluewin.ch"
      }
    },
    {
      id: 3,
      title: "Ich lehne die Transparenz-Initiative ab",
      date: "2024-09-09",
      category: "Abstimmungen",
      excerpt: "Am 22. September 2024 wird im Kanton Zug über die Transparenz-Initiative abgestimmt. Diese Initiative fordert die Offenlegung von Wahl- und Abstimmungsbudgets politischer Parteien und Organisationen. Doch nach genauerem Hinsehen bin ich überzeugt, dass die Initiative mehr Probleme schafft als sie löst.",
      priority: "hoch",
      author: "Kantonsrat Gregor Bruhin",
      readTime: "5 min",
      fullText: "Am 22. September 2024 wird im Kanton Zug über die Transparenz-Initiative abgestimmt. Diese Initiative fordert die Offenlegung von Wahl- und Abstimmungsbudgets politischer Parteien und Organisationen. Auf den ersten Blick klingt das nach einem sinnvollen Schritt in Richtung Transparenz. Doch nach genauerem Hinsehen bin ich überzeugt, dass die Initiative und der Gegenvorschlag mehr Probleme schaffen als sie lösen.\n\nFür mich sind drei Punkte besonders kritisch: unnötige Bürokratie, Schein-Transparenz und der Eingriff in die Privatsphäre.\n\nDie Einführung eines Transparenzregisters für politische Ausgaben würde erhebliche bürokratische Kosten verursachen. Die Verwaltung und Überprüfung der offengelegten Daten erfordert zusätzliche Ressourcen, Personal und Zeit auf Kosten der Steuerzahler. Ein weiteres Gesetz bedeutet zusätzlichen administrativen Aufwand, der in keinem Verhältnis zum Nutzen steht.\n\nDie Erfahrungen der letzten nationalen Wahlen haben gezeigt, dass die offengelegten Zahlen den Bürgerinnen und Bürgern keine neuen Erkenntnisse liefern. Die Summen waren oft unspektakulär und hatten keine grossen Auswirkungen auf das Wahlverhalten.\n\nFür mich ist der Schutz der Privatsphäre ein zentrales Thema. Viele Menschen wollen nicht, dass ihre politischen Spenden öffentlich gemacht werden, da sie befürchten, Ziel von Rufmord oder «Cancel Culture» zu werden. Die Freiheit, politisch zu spenden, ohne öffentlich an den Pranger gestellt zu werden, ist ein wichtiges Gut.\n\nMein Fazit: Ein Gesetz, das mehr schadet als nützt. Initiative und Gegenvorschlag schiessen weit über das Ziel hinaus. Aus diesen Gründen werde ich die Initiative und den Gegenvorschlag am 22. September 2024 ablehnen.",
      tags: ["Transparenz-Initiative", "Bürokratie", "Abstimmung"],
      mediaContact: {
        name: "Gregor Bruhin",
        phone: "+41 79 123 45 67",
        email: "gb@gregor-bruhin.ch"
      }
    },
    {
      id: 4,
      title: "KI – Revolution oder Teufelszeug?",
      date: "2024-06-17",
      category: "Bildung",
      excerpt: "Regelmässig bietet die SVP Stadt Zug ihren Mitgliedern Weiterbildungsmöglichkeiten. Das Thema 'Künstliche Intelligenz' stiess auf besonders grosses Interesse. Nicht zuletzt, weil sich die Zuger Stadtschulen als Pionier verstehen und bereits in der Unterstufe 'KI-Applikationen' einsetzen möchten.",
      priority: "normal",
      author: "Marcus H. Bühler, Vizepräsident",
      readTime: "6 min",
      fullText: "Regelmässig bietet die SVP Stadt Zug ihren Mitgliedern Weiterbildungsmöglichkeiten. Das Thema 'Künstliche Intelligenz' stiess auf besonders grosses Interesse. Nicht zuletzt darum, weil sich die Zuger Stadtschulen als Pionier verstehen und bereits in der Unterstufe 'KI-Applikationen' einsetzen möchten.\n\nDer ehemalige SVP-Gemeinderat, Dr. Beat Bühlmann, der sich seit Jahrzehnten mit dem Thema Digitalisierung befasst und sich am MIT, Boston zu KI ausbilden liess, hielt das Impulsreferat: 'KI – Wie, wo, was?'\n\nBemerkenswert waren die Zuordnung von KI-Begriffen sowie der geschichtliche Hintergrund der KI, mit Anfängen bereits 1940; plus die Auflösung der Frage: Warum erst jetzt der Hype, wenn KI schon so alt ist?\n\nDas Aufzeigen der Unterschiede zwischen KI und ChatGPT, animiert mit Abfragen und Demonstrationen, zeigten die schier unermesslichen Möglichkeiten der Technologie im Live-Einsatz. Spannend waren die Pro- und Kontraargumente zur künstlichen Intelligenz sowie die bedeutsamen, juristischen Aspekte mit der EU-Klassifizierung (EU-AI-Act 2023).\n\nRichtig eingesetzt und clever genutzt, wird KI nicht nur klassische Abläufe vereinfachen und verbessern, sondern vor allem das Generieren von Inhalten revolutionieren. Die Spannweite der Anwendungen erstreckt sich über Medizin, Juristik, Marketing, Bildung, Klimaschutz und natürlich auch auf die Politik.\n\nFazit: Ein ausgesprochen lehrreicher Abend mit sehr wertvollen Erkenntnissen, auch für die anwesenden Parlamentarier.",
      tags: ["KI", "Künstliche Intelligenz", "Bildung", "Weiterbildung"],
      mediaContact: {
        name: "Marcus H. Bühler",
        phone: "+41 41 123 45 67",
        email: "bumbleb@bluewin.ch"
      }
    },
    {
      id: 5,
      title: "Doppelwechsel in der SVP-Fraktion des Grossen Gemeinderates der Stadt Zug",
      date: "2024-06-17",
      category: "Partei",
      excerpt: "Die SVP-Fraktion des Grossen Gemeinderates der Stadt Zug verzeichnet einen personellen Wechsel. Neue Mitglieder verstärken die Fraktion und bringen frische Ideen und langjährige Erfahrung in die Stadtpolitik ein.",
      priority: "normal",
      author: "SVP-Fraktion GGR",
      readTime: "4 min",
      fullText: "Die SVP-Fraktion des Grossen Gemeinderates der Stadt Zug verzeichnet einen personellen Doppelwechsel, der die Fraktion mit neuen Impulsen stärkt.\n\nDie neuen Fraktionsmitglieder bringen ihre langjährige Expertise und praktische Erfahrung aus verschiedenen Bereichen mit. Dieser Wechsel ermöglicht es der SVP-Fraktion, ihre Arbeit im Gemeinderat noch effektiver zu gestalten und die bürgerlichen Werte in der Stadtpolitik zu vertreten.\n\nMit diesem personellen Wechsel setzt die SVP Stadt Zug auf Kontinuität und Innovation zugleich. Die bewährten politischen Grundsätze der Partei bleiben bestehen, während gleichzeitig neue Perspektiven und Ansätze in die Fraktionsarbeit einfliessen.\n\nDie SVP-Fraktion freut sich auf die Zusammenarbeit mit den neuen Mitgliedern und ist überzeugt, dass dieser Wechsel die politische Arbeit für die Stadt Zug weiter voranbringen wird.",
      tags: ["Fraktion", "Gemeinderat", "Personal", "Wechsel"],
      mediaContact: {
        name: "Roman Küng",
        phone: "+41 41 750 10 55",
        email: "roman.kueng@bluewin.ch"
      }
    },
    {
      id: 6,
      title: "Elektroautos – eine Mogelpackung oder die Lösung für die Zukunft?",
      date: "2024-05-15",
      category: "Verkehr",
      excerpt: "Nicht nur der Titel der Tischrede des 1000er-Club-Mitglieds, Morten Hannesbo, tönte spannend, auch das 20-minütige Referat dazu überzeugte durch Fachwissen und Logik. Die Schlussfolgerung: 'Solange die Sonne scheint, gibt es genug Energie, um Elektroautos zu betreiben!'",
      priority: "normal",
      author: "1000er Club / Philip Brunner",
      readTime: "7 min",
      fullText: "Nicht nur der Titel der Tischrede des 1000er-Club-Mitglieds, Morten Hannesbo, tönte spannend, auch das 20-minütige Referat dazu überzeugte durch das Fachwissen, die Logik und die Schlussfolgerung: 'Solange die Sonne scheint, gibt es genug Energie, um Elektroautos zu betreiben!'\n\nEin klares JA also für eine e-Lösung in der Zukunft, gespickt mit der Ansage, dass wir alle früher oder später auf ein eMobil umsteigen werden, aber nicht müssen.\n\nSelbstfahrende Fahrzeuge sind in 20 Jahren im Alltag nicht mehr wegzudenken – die Mobilität und Autonomie des Einzelnen steigt dadurch enorm. Auch wenn am Anfang die Streckenführung von 'menschgelenkten' und 'ferngelenkten' Autos und LKWs noch separiert sein wird, die Einführung und das Neu-Denken im Verkehr sind unabdingbar.\n\nBei den anwesenden Mitgliedern und Gästen – u.a. Markus Somm, Chefredaktor des Nebelspalters, der in Zug die Sendung 'Bern einfach' mit Regierungsrat Heinz Tännler am Vorabend aufnahm – fanden solche klaren Worte nur bedingt Zustimmung.\n\nDie Wortmeldungen mit Erfahrungen von Oldtimer-Fahrzeugen (1913!) bis zur nicht gelösten e-Batterieentsorgung zeigten deutlich, wie interessant, aber auch kontrovers das Thema Elektroautos sein kann.",
      tags: ["Elektromobilität", "Zukunft", "1000er Club", "Verkehr"],
      mediaContact: {
        name: "Philip Brunner",
        phone: "+41 79 398 4 396",
        email: "phcb@philip-brunner.ch"
      }
    },
    {
      id: 7,
      title: "Rauchzeichen aus dem GGR",
      date: "2024-09-18",
      category: "Parlament",
      excerpt: "Einblicke in die aktuelle Sitzung des Grossen Gemeinderates der Stadt Zug. Unsere SVP-Fraktion berichtet über wichtige Geschäfte, Diskussionen und Entscheide aus dem Stadtparlament.",
      priority: "normal",
      author: "SVP-Fraktion GGR",
      readTime: "4 min",
      fullText: "Die SVP-Fraktion berichtet regelmässig über die wichtigsten Geschäfte und Diskussionen aus den Sitzungen des Grossen Gemeinderates der Stadt Zug.\n\nIn der aktuellen Ausgabe der 'Rauchzeichen' informieren wir über die behandelten Traktanden, wichtige Abstimmungen und die Positionen der SVP-Fraktion zu den verschiedenen Vorlagen.\n\nUnsere Parlamentarier setzen sich konsequent für bürgerliche Werte und eine effiziente Stadtpolitik ein. Dabei stehen Bürgernähe, Kostenwahrheit und nachhaltige Lösungen im Zentrum unserer politischen Arbeit.\n\nDie detaillierten Berichte aus dem Parlament finden Sie in unserem regelmässigen Format 'Rauchzeichen aus dem GGR'.",
      tags: ["Parlament", "GGR", "Rauchzeichen", "Sitzung"],
      mediaContact: {
        name: "Roman Küng",
        phone: "+41 41 750 10 55",
        email: "roman.kueng@bluewin.ch"
      }
    },
    {
      id: 8,
      title: "Dringliche Motion: Solidarität mit dem Misox – sofort!",
      date: "2024-01-25",
      category: "Solidarität",
      excerpt: "Nach den verheerenden Unwettern im Misox zeigt die SVP Stadt Zug Solidarität und fordert in einer dringlichen Motion schnelle und unbürokratische Hilfe für die betroffene Region im Tessin.",
      priority: "hoch",
      author: "SVP Stadt Zug",
      readTime: "3 min",
      fullText: "Die SVP Stadt Zug reicht eine dringliche Motion ein, um dem vom Unwetter schwer getroffenen Misox zu helfen. Solidarität in schweren Zeiten ist ein Grundwert unserer Gesellschaft und der Schweizer Eidgenossenschaft.\n\nDie verheerenden Unwetter haben im Misox erhebliche Schäden angerichtet. Strassen wurden weggerissen, Häuser beschädigt und die Infrastruktur schwer in Mitleidenschaft gezogen. Die betroffenen Menschen benötigen jetzt schnelle und unbürokratische Hilfe.\n\nUnsere Motion fordert, dass die Stadt Zug unverzüglich finanzielle Unterstützung für die Betroffenen bereitstellt und sich auf kantonaler und nationaler Ebene für eine koordinierte Hilfe einsetzt.\n\nDie Hilfe muss schnell und unbürokratisch erfolgen. In solchen Situationen zählt jede Stunde, und die Betroffenen dürfen nicht durch langwierige Verfahren zusätzlich belastet werden.",
      tags: ["Misox", "Solidarität", "Dringliche Motion", "Unwetter"],
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
    { value: 'bildung', label: 'Bildung', count: pressReleases.filter(pr => pr.category === 'Bildung').length },
    { value: 'parlament', label: 'Parlament', count: pressReleases.filter(pr => pr.category === 'Parlament').length },
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
      'Bildung': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Parlament': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Solidarität': 'bg-pink-100 text-pink-800 border-pink-200'
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