import { useEffect, useState } from 'react';
import { Calendar, ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface Article {
  title: string;
  title_citation: string;
  publication_date: string;
  publication_date_citation: string;
  author: string | null;
  author_citation: string;
  pdf_link: string | null;
  pdf_link_citation: string | null;
  fulltext: string;
  fulltext_citation: string;
  image_links: Array<{
    value: string;
    value_citation: string;
  }>;
}

const NewsSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load articles from JSON file
    fetch('/svp-articles-12-1-2026.json')
      .then((res) => res.json())
      .then((data) => {
        const articles = data.articles || [];
        // Sort articles by date in reverse order (newest first)
        const sortedArticles = articles.sort((a: Article, b: Article) => {
          const parseGermanDate = (dateStr: string): Date => {
            const months: { [key: string]: number } = {
              'januar': 0, 'februar': 1, 'märz': 2, 'april': 3,
              'mai': 4, 'juni': 5, 'juli': 6, 'august': 7, 'september': 8,
              'oktober': 9, 'november': 10, 'dezember': 11
            };
            const parts = dateStr.toLowerCase().replace(/\./g, '').split(' ');
            const day = parseInt(parts[0]);
            const month = months[parts[1]] || 0;
            const year = parseInt(parts[2]);
            return new Date(year, month, day);
          };
          const dateA = parseGermanDate(a.publication_date);
          const dateB = parseGermanDate(b.publication_date);
          return dateB.getTime() - dateA.getTime(); // Reverse order (newest first)
        });
        // Take only first 3 articles for homepage
        setArticles(sortedArticles.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading articles:', err);
        setLoading(false);
      });
  }, []);

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section id="news" className="section-padding bg-gradient-section">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aktuell
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Aktuelle Themen, Positionen und Termine – bleiben Sie auf dem Laufenden 
            über unsere politische Arbeit in der Stadt Zug.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Artikel werden geladen...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Keine Artikel gefunden.</p>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {articles.map((article, index) => (
                <article key={index} className="card-news group">
                  {/* Image */}
                  {article.image_links && article.image_links.length > 0 && (
                    <div className="relative w-full aspect-video overflow-hidden bg-muted rounded-t-xl mb-4">
                      <img
                        src={article.image_links[0].value}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{article.publication_date}</span>
                    </div>
                    {article.pdf_link && (
                      <a
                        href={article.pdf_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                        title="PDF herunterladen"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FileText className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 hidden md:block">
                    {truncateText(article.fulltext, 120)}
                  </p>
                  
                  <a
                    href={article.title_citation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary font-semibold group-hover:text-[hsl(var(--svp-green-light))] transition-colors"
                  >
                    <span className="mr-2">Mehr lesen</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/was-ansteht">
                <Button className="btn-outline group">
                  Alle News
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
