import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Calendar, ArrowRight, Download } from 'lucide-react';

const Medienmitteilungen = () => {
  useEffect(() => {
    document.title = "Medienmitteilungen – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aktuelle Medienmitteilungen und Pressemeldungen der SVP Stadt Zug - Stellungnahmen zu politischen Themen.');
    }
  }, []);

  const pressReleases = [
    {
      title: "SVP fordert Stopp der Steuererhöhungspläne",
      date: "2025-01-20",
      category: "Steuerpolitik",
      excerpt: "Die SVP Stadt Zug kritisiert die geplante Erhöhung der Gemeindesteuern scharf und fordert stattdessen eine Überprüfung der Ausgabenstruktur. Präsident Dr. Markus Weber: 'Die Bürger sind bereits genug belastet.'",
      priority: "hoch"
    },
    {
      title: "Erfolgreiche Interpellation zur Verkehrssituation Bahnhofstrasse",
      date: "2025-01-15",
      category: "Verkehr",
      excerpt: "Der Stadtrat hat unsere Interpellation zur Verkehrssituation detailliert beantwortet. Die vorgeschlagenen Massnahmen zur Verkehrsberuhigung werden nun geprüft und sollen bis Sommer 2025 umgesetzt werden.",
      priority: "normal"
    },
    {
      title: "SVP unterstützt Digitalisierung der Stadtverwaltung",
      date: "2025-01-10",
      category: "Digitalisierung",
      excerpt: "Unsere Motion zur Digitalisierung wurde vom Stadtrat positiv aufgenommen. Bis Ende 2025 sollen 80% aller Verwaltungsdienstleistungen online verfügbar sein. Ein wichtiger Schritt für mehr Bürgerservice.",
      priority: "normal"
    },
    {
      title: "Klare Haltung zu geplanter Stadtentwicklung Zug Ost",
      date: "2024-12-18",
      category: "Stadtplanung",
      excerpt: "Die SVP lehnt die aktuellen Pläne für Zug Ost ab. Die Kosten sind zu hoch, der Nutzen unklar. Wir fordern eine grundsätzliche Überarbeitung des Projekts unter Einbezug der Quartierbevölkerung.",
      priority: "hoch"
    },
    {
      title: "Erfolgreiche Bilanz: Ein Jahr SVP-Arbeit im Überblick",
      date: "2024-12-15",
      category: "Jahresbilanz",
      excerpt: "47 Vorstösse, 12 erfolgreiche Motionen und unzählige Bürgerkontakte: Die SVP Stadt Zug blickt auf ein arbeitsreiches und erfolgreiches politisches Jahr 2024 zurück.",
      priority: "normal"
    },
    {
      title: "Sicherheit in Zuger Quartieren: Motion eingereicht",
      date: "2024-11-28",
      category: "Sicherheit",
      excerpt: "Mit unserer Motion fordern wir verstärkte Polizeipräsenz in kritischen Quartieren sowie bessere Beleuchtung öffentlicher Räume. Sicherheit ist ein Grundrecht aller Bürgerinnen und Bürger.",
      priority: "normal"
    }
  ];

  const categories = [
    { name: 'Alle', count: pressReleases.length },
    { name: 'Steuerpolitik', count: pressReleases.filter(pr => pr.category === 'Steuerpolitik').length },
    { name: 'Verkehr', count: pressReleases.filter(pr => pr.category === 'Verkehr').length },
    { name: 'Sicherheit', count: pressReleases.filter(pr => pr.category === 'Sicherheit').length },
    { name: 'Stadtplanung', count: pressReleases.filter(pr => pr.category === 'Stadtplanung').length }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-CH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'hoch': return 'bg-red-100 text-red-700 border-red-200';
      case 'normal': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Steuerpolitik': 'bg-green-100 text-green-700',
      'Verkehr': 'bg-blue-100 text-blue-700',
      'Sicherheit': 'bg-red-100 text-red-700',
      'Stadtplanung': 'bg-purple-100 text-purple-700',
      'Digitalisierung': 'bg-indigo-100 text-indigo-700',
      'Jahresbilanz': 'bg-orange-100 text-orange-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-svp-green to-svp-green-light text-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Medienmitteilungen
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Aktuelle Stellungnahmen und Pressemeldungen der SVP Stadt Zug. 
                Transparent, direkt und bürgernah informiert.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Nach Thema filtern</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="btn-outline text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="space-y-8">
              {pressReleases.map((release, index) => (
                <article key={index} className="card-initiative group">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          {formatDate(release.date)}
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(release.category)}`}>
                            {release.category}
                          </span>
                          
                          {release.priority === 'hoch' && (
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(release.priority)}`}>
                              Hohe Priorität
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {release.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {release.excerpt}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn-outline text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Vollständig lesen
                        </button>
                        
                        <button className="flex items-center gap-2 text-primary hover:text-svp-green-light transition-colors text-sm font-medium">
                          <Download className="h-4 w-4" />
                          PDF herunterladen
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-outline">
                Weitere Medienmitteilungen laden
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-svp-green rounded-2xl p-8 text-white max-w-3xl mx-auto">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">
                  Immer aktuell informiert
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Erhalten Sie alle Medienmitteilungen direkt in Ihr Postfach
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-hero bg-white text-primary hover:bg-gray-100">
                    Newsletter abonnieren
                  </button>
                  <button className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                    RSS-Feed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Medienmitteilungen;