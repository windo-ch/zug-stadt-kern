import { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, FileText } from 'lucide-react';

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

const WasAnsteht = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load articles from JSON file
    fetch('/svp-articles-12-1-2026.json')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading articles:', err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    // Date is already formatted as "10. Januar 2026"
    return dateString;
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <PageLayout 
      title="Was ansteht - SVP Stadt Zug"
      description="Aktuelle Artikel und Publikationen der SVP Stadt Zug. Bleiben Sie informiert über unsere Positionen und Aktivitäten."
    >
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-base px-4 py-2 border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))]">
              Aktuelles
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Was ansteht
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Aktuelle Artikel, Positionen und Publikationen der SVP Stadt Zug. 
              Bleiben Sie informiert über unsere politische Arbeit.
            </p>
            
            {/* External Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" className="border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green))]/10" asChild>
                <a 
                  href="https://www.svp-zug.ch/termine/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Termine
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green))]/10" asChild>
                <a 
                  href="https://ratsinfo.stadtzug.ch/gremium/1/geschaefte?itemsPerPage=50&search=SVP&ordering=-begin_date&page=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Geschäfte
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Articles Section */}
        <Section>
          <div className="container mx-auto px-4">

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
          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                  {article.image_links && article.image_links.length > 0 && (
                    <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={article.image_links[0].value}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {formatDate(article.publication_date)}
                      </Badge>
                      {article.pdf_link && (
                        <a
                          href={article.pdf_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                          title="PDF herunterladen"
                        >
                          <FileText className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <CardTitle className="text-lg leading-tight mb-2">
                      {article.title}
                    </CardTitle>
                    {article.author && (
                      <CardDescription className="text-xs">
                        {article.author}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {truncateText(article.fulltext, 150)}
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a
                        href={article.title_citation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Weiterlesen
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default WasAnsteht;
