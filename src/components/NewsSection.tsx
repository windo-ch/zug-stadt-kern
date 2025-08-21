import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Abstimmungssonntag am 28. September 2025",
      excerpt: "Eidgenössische und kantonale Abstimmungen stehen an. Wir informieren Sie über unsere Abstimmungsempfehlungen und die wichtigsten Vorlagen.",
      date: "28. September 2025",
      category: "Abstimmungen",
      readTime: "3 Min."
    },
    {
      id: 2,
      title: "Grenzschutz-Initiative vor Einreichung",
      excerpt: "Die Volksinitiative «Asylmissbrauch stoppen! (Grenzschutz-Initiative)» wird im September eingereicht. Unterschriftensammlung läuft bis 29. August.",
      date: "Ende August 2025",
      category: "Initiative",
      readTime: "4 Min."
    },
    {
      id: 3,
      title: "Motion: Jahres-Parkkarte 50% günstiger",
      excerpt: "SVP-Motion für günstigere Parkkarten eingereicht. Ziel ist es, die Parkgebühren für Anwohner zu reduzieren und die Attraktivität der Innenstadt zu steigern.",
      date: "Aktuell",
      category: "Politik",
      readTime: "5 Min."
    },
    {
      id: 4,
      title: "Sommeranlass SVP Stadt Zug",
      excerpt: "Gemütlicher Sommeranlass der SVP Stadt Zug für Mitglieder und Interessierte im Restaurant Barakka. Eine Gelegenheit für persönliche Gespräche.",
      date: "22. August 2025",
      category: "Veranstaltung",
      readTime: "2 Min."
    }
  ];

  return (
    <section 
      id="news" 
      className="section-padding relative"
      style={{
        backgroundImage: `url('/lovable-uploads/d75181da-4d07-475b-827c-99ae71cae110.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-muted/95 backdrop-blur-[2px]"></div>
      <div className="container-max relative z-10">
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
          <Link to="/was-ansteht">
            <Button className="btn-outline">
              Alle Meldungen anzeigen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;