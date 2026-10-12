import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArtikelWahlsiegOktober2026 = () => {
  const title = "SVP wird stärkste Kraft im Zuger Kantonsrat";
  const publicationDate = "12. Oktober 2026";
  const author = "SVP Kanton Zug";
  const heroImageSrc = "/assets/places/zug/zug-overview-svp_1.jpg";
  const heroImageAlt = "Blick über die Stadt Zug";

  return (
    <PageLayout
      title={title}
      description="Die SVP Kanton Zug ist aus den Wahlen vom 4. Oktober 2026 als stärkste Fraktion im Kantonsrat hervorgegangen. Heinz Tännler und Stephan Schleiss wurden im Regierungsrat bestätigt."
      className="min-h-screen bg-background"
    >
      <main>
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <Badge
                variant="outline"
                className="mb-4 text-base px-4 py-2 border-[hsl(var(--svp-green))]"
              >
                Medienmitteilung
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-muted-foreground text-lg">
                {publicationDate} · {author}
              </p>
            </div>

            <Card className="overflow-hidden mb-8">
              <div className="w-full aspect-video bg-muted">
                <img
                  src={heroImageSrc}
                  alt={heroImageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 md:p-8 space-y-8">
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                  Die SVP Kanton Zug ist aus den Gesamterneuerungswahlen vom 4. Oktober 2026 als stärkste Kraft im Kantonsrat hervorgegangen. Die Parteileitung hat den Erfolg in einer Medienmitteilung festgehalten.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-[hsl(var(--svp-green))]/5 p-5 text-center">
                    <p className="text-3xl font-bold text-[hsl(var(--svp-green))]">24 %</p>
                    <p className="mt-1 text-sm text-muted-foreground">Wähleranteil</p>
                  </div>
                  <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-[hsl(var(--svp-green))]/5 p-5 text-center">
                    <p className="text-3xl font-bold text-[hsl(var(--svp-green))]">20 / 80</p>
                    <p className="mt-1 text-sm text-muted-foreground">Sitze im Kantonsrat</p>
                  </div>
                  <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-[hsl(var(--svp-green))]/5 p-5 text-center">
                    <p className="text-3xl font-bold text-[hsl(var(--svp-green))]">+2</p>
                    <p className="mt-1 text-sm text-muted-foreground">Mandate</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Kantonsrat</h2>
                  <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                    Mit 24 Prozent Wähleranteil und zwei Mandaten mehr stellt die SVP neu 20 der 80 Sitze. Sie liegt damit vor der Mitte (18 Sitze) und der FDP (17 Sitze). Zusätzliche Sitze kamen in den Gemeinden Zug, Baar und Walchwil. Vier neue Kantonsräte und eine neue Kantonsrätin verstärken die Fraktion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Regierungsrat</h2>
                  <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                    Das bisherige SVP-Duo im Regierungsrat wurde bestätigt. Heinz Tännler belegte mit 20’358 Stimmen den dritten Platz. Stephan Schleiss steigerte sein Ergebnis gegenüber den Vorwahlen deutlich und blieb mit 19’616 Stimmen im Amt.
                  </p>
                </div>

                <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                  Laut Parteileitung honorierten die Wählerinnen und Wähler den konsequenten Einsatz gegen die EU-Verträge sowie für tiefere Steuern, Gebühren und Abgaben. Der Erfolg fällt mit dem 35-jährigen Jubiläum der Kantonalpartei zusammen.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild>
                <Link to="/wahlen">Zur Wahlseite</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default ArtikelWahlsiegOktober2026;
