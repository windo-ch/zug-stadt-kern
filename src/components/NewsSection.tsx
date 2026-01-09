import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Abstimmungssonntag am 28. September 2025",
      excerpt: "Eidgenössische und kantonale Abstimmungen stehen an. Wir informieren Sie über unsere Abstimmungsempfehlungen und die wichtigsten Vorlagen.",
      date: "28.09.2025",
      category: "Abstimmungen",
      image: "./assets/zug-images/zug-overview-svp_1.jpg"
    },
    {
      id: 2,
      title: "Grenzschutz-Initiative vor Einreichung",
      excerpt: "Die Volksinitiative «Asylmissbrauch stoppen! (Grenzschutz-Initiative)» wird im September eingereicht. Unterschriftensammlung läuft bis 29. August.",
      date: "Ende August 2025",
      category: "Initiative",
      image: "./assets/zug-images/zug-altstadt-svp_1.jpg"
    },
    {
      id: 3,
      title: "Motion: Jahres-Parkkarte 50% günstiger",
      excerpt: "SVP-Motion für günstigere Parkkarten eingereicht. Ziel ist es, die Parkgebühren für Anwohner zu reduzieren und die Attraktivität der Innenstadt zu steigern.",
      date: "Aktuell",
      category: "Politik",
      image: "./assets/zug-images/zug-overview-svp_2.jpg"
    }
  ];

  return (
    <section id="news" className="section-padding bg-gradient-section">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aktuell
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aktuelle Themen, Positionen und Termine – bleiben Sie auf dem Laufenden 
            über unsere politische Arbeit in der Stadt Zug.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <article key={item.id} className="card-news group">
              {/* Image */}
              <div className="relative w-full aspect-video overflow-hidden bg-muted rounded-t-xl mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3 hidden md:block">
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
            <Button className="btn-outline group">
              Alli News
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;