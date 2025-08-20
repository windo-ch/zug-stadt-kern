import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Abstimmungsempfehlungen für die nächste Gemeindeabstimmung",
      excerpt: "Unsere Argumente zu den Vorlagen, kompakt zusammengefasst. So stimmen wir ein und warum wir diese Positionen vertreten.",
      date: "15. September 2025",
      category: "Abstimmungen",
      readTime: "3 Min."
    },
    {
      id: 2,
      title: "Sicherheit im Quartier – Massnahmenpaket vorgestellt",
      excerpt: "Für sichtbare Präsenz und rasche Intervention: Wir schlagen konkrete Schritte vor, um die Sicherheit in unseren Quartieren zu verbessern.",
      date: "01. September 2025",
      category: "Sicherheit",
      readTime: "5 Min."
    },
    {
      id: 3,
      title: "Digitalisierung der Stadtverwaltung: Unsere Vorschläge",
      excerpt: "Effiziente Prozesse für Bürger und Verwaltung. Wie wir die Digitalisierung bürgernah und sicher vorantreiben wollen.",
      date: "28. August 2025",
      category: "Digitalisierung",
      readTime: "4 Min."
    },
    {
      id: 4,
      title: "Verkehr und Parkplätze: Lösungen für die Innenstadt",
      excerpt: "Unsere Ideen für eine ausgewogene Verkehrspolitik, die Wirtschaft und Anwohner gleichermassen berücksichtigt.",
      date: "22. August 2025",
      category: "Mobilität",
      readTime: "6 Min."
    }
  ];

  return (
    <section id="news" className="section-padding bg-gradient-section">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Was ansteht
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aktuelle Themen, Positionen und Termine – bleiben Sie auf dem Laufenden 
            über unsere politische Arbeit in der Stadt Zug.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {newsItems.map((item) => (
            <article key={item.id} className="card-news group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{item.readTime}</span>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              
              <div className="flex items-center text-primary font-semibold group-hover:text-svp-green-light transition-colors">
                <span className="mr-2">Mehr lesen</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-outline">
            Alle Meldungen anzeigen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;