import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const GGRKandidaten = () => {
  const kandidaten = [
    steckbriefCandidates["alessia-bischof"],
    steckbriefCandidates["daniel-gramm"],
    steckbriefCandidates["kilian-krall"],
    steckbriefCandidates["simon-ruckstuhl"],
  ];

  return (
    <PageLayout
      title="GGR-Kandidaten - SVP Stadt Zug"
      description="Kandidaten der SVP Stadt Zug für den Grossen Gemeinderat (GGR)."
    >
      <main>
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 text-base px-4 py-2 border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))]"
            >
              Wahlen 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              GGR-Kandidaten
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Diese Kandidaten sind noch nicht gewählt. Hier finden Sie ihre Steckbriefe und Profile.
            </p>
          </div>
        </Section>

        <Section>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                <Users className="w-7 h-7 text-primary" />
                Unsere Kandidaten
              </h2>
              <p className="text-muted-foreground">
                Lernen Sie die Persönlichkeiten hinter unserer Liste kennen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {kandidaten.map((k) => (
                <Link key={k.slug} to={`/profil/${k.slug}`} className="block h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))]/20 shadow-md mb-4 bg-muted">
                        <img
                          src={k.image}
                          alt={k.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </div>
                      <CardTitle className="text-lg">{k.name}</CardTitle>
                      <div className="flex flex-wrap justify-center gap-2 mt-2">
                        <Badge variant="secondary">GGR</Badge>
                        {k.kandidatur && (
                          <Badge variant="outline" className="text-xs">
                            {k.kandidatur}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      {k.statement && (
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {k.statement}
                        </p>
                      )}
                      <div className="mt-4 text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-2">
                        Profil ansehen
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default GGRKandidaten;

