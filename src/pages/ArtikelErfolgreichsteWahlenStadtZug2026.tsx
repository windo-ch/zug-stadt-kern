import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ggrElected2026,
  kantonsratStadtZugElected2026,
  OFFICIAL_RESULT_LINKS,
} from "@/data/electionResults2026";

const title =
  "Erfolgreichste Wahlen in der Geschichte der SVP Stadt Zug: Ein starkes bürgerliches Signal für die Zukunft!";
const publicationDate = "7. November 2026";
const author = "SVP Stadt Zug";
const heroImageSrc = "/assets/places/zug/zug-overview-svp_1.jpg";
const chartSrc = "/assets/wahlen-2026/kantonsrat-waehlerstaerke-stadt-zug-2026.png";

const ArtikelErfolgreichsteWahlenStadtZug2026 = () => {
  return (
    <PageLayout
      title={title}
      description="Die SVP Stadt Zug hat an den Gesamterneuerungswahlen vom 4. Oktober 2026 Geschichte geschrieben: 9 GGR-Sitze, 4 Kantonsräte, André Wicki im Stadtrat bestätigt."
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
                  alt="Blick über die Stadt Zug"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 md:p-8 space-y-8">
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                  Die SVP Stadt Zug hat an den Gesamterneuerungswahlen vom 4. Oktober 2026
                  Geschichte geschrieben. Es sind die erfolgreichsten Wahlen seit Gründung der
                  SVP Stadt Zug im Jahr 1992. Die Stadtzuger Wählerinnen und Wähler haben unseren
                  bürgerlichen Kurs, die engagierte Sachpolitik und den unermüdlichen Einsatz
                  für unsere Stadt eindrücklich honoriert.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-[hsl(var(--svp-green))]/5 p-5 text-center">
                    <p className="text-3xl font-bold text-[hsl(var(--svp-green))]">9</p>
                    <p className="mt-1 text-sm text-muted-foreground">Sitze im GGR (+2)</p>
                  </div>
                  <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-[hsl(var(--svp-green))]/5 p-5 text-center">
                    <p className="text-3xl font-bold text-[hsl(var(--svp-green))]">4</p>
                    <p className="mt-1 text-sm text-muted-foreground">Kantonsräte (+1)</p>
                  </div>
                  <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-[hsl(var(--svp-green))]/5 p-5 text-center">
                    <p className="text-3xl font-bold text-[hsl(var(--svp-green))]">5.</p>
                    <p className="mt-1 text-sm text-muted-foreground">Amtszeit André Wicki</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Die Resultate im Überblick
                  </h2>
                  <ul className="space-y-3 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <li>
                      <strong>Stadtrat:</strong> André Wicki wurde als amtierender Stadtpräsident
                      zu seiner 5. Amtszeit als Stadtrat bestätigt (4'426 Stimmen).
                    </li>
                    <li>
                      <strong>Grosser Gemeinderat (GGR):</strong> Ein historischer Zuwachs auf 9
                      Sitze (+2).
                    </li>
                    <li>
                      <strong>Kantonsrat:</strong> Der Wähleranteil und die Schlagkraft wurden mit
                      4 Sitzen ausgebaut (+1 Sitz). Damit ist die SVP-Kantonsratsvertretung der
                      Stadt Zug so stark wie noch nie.
                    </li>
                    <li>
                      <strong>Regierung:</strong> Mit Heinz Tännler stellen wir weiterhin einen
                      starken Regierungsrat.
                    </li>
                    <li>
                      <strong>Kommissionen:</strong> 2 Sitze in der GPK (+1) und Bestätigung der
                      beiden Sitze in der BPK.
                    </li>
                    <li>
                      <strong>Rechnungsprüfungskommission:</strong> Bestätigung von Daniel Gramm
                      (bisher, stille Wahl).
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Gewählt in den Grossen Gemeinderat
                  </h2>
                  <ol className="space-y-2 text-foreground/90">
                    {ggrElected2026.map((person, index) => (
                      <li key={person.slug} className="flex justify-between gap-4 border-b border-border/60 py-2">
                        <span>
                          {index + 1}.{" "}
                          <Link to={`/profil/${person.slug}`} className="font-medium hover:text-primary">
                            {person.name}
                          </Link>
                          {person.bisher ? " (bisher)" : ""}
                        </span>
                        <span className="tabular-nums text-muted-foreground">{person.votes}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Gewählt in den Kantonsrat (Wahlkreis Stadt Zug)
                  </h2>
                  <ol className="space-y-2 text-foreground/90">
                    {kantonsratStadtZugElected2026.map((person, index) => (
                      <li key={person.slug} className="flex justify-between gap-4 border-b border-border/60 py-2">
                        <span>
                          {index + 1}.{" "}
                          <Link to={`/profil/${person.slug}`} className="font-medium hover:text-primary">
                            {person.name}
                          </Link>
                          {person.bisher ? " (bisher)" : ""}
                        </span>
                        <span className="tabular-nums text-muted-foreground">{person.votes}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Kantonsrat: Wählerstärke in der Stadt Zug
                  </h2>
                  <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-4">
                    In der Stadt Zug kommt die SVP bei den Kantonsratswahlen auf 21,2 Prozent
                    Wähleranteil (+3,7 Prozentpunkte gegenüber 2022).
                  </p>
                  <img
                    src={chartSrc}
                    alt="Balkendiagramm: Veränderung der Wählerstärke der Parteien in der Stadt Zug bei den Kantonsratswahlen 2022 und 2026. SVP 21,2 Prozent, plus 3,7 Prozentpunkte."
                    className="w-full rounded-xl border border-border"
                    loading="lazy"
                  />
                </div>

                <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                  Ein ganz herzliches Dankeschön an alle Wählerinnen und Wähler für dieses
                  grossartige Vertrauen sowie an alle Kandidierenden, Unterstützerinnen,
                  Unterstützer und Sponsoren, die diesen Erfolg möglich gemacht haben. Wir
                  packen die anstehenden Aufgaben gemeinsam mit viel Energie an – für ein
                  sicheres, bürgerliches und lebenswertes Zug.
                </p>

                <p className="text-sm text-muted-foreground">
                  Offizielle Resultate:{" "}
                  <a
                    href={OFFICIAL_RESULT_LINKS.overview}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stadt Zug
                  </a>
                  {" · "}
                  <a
                    href={OFFICIAL_RESULT_LINKS.stadtrat}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stadtrat
                  </a>
                  {" · "}
                  <a
                    href={OFFICIAL_RESULT_LINKS.ggr}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GGR
                  </a>
                  {" · "}
                  <a
                    href={OFFICIAL_RESULT_LINKS.kantonsrat}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kantonsrat
                  </a>
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/wahlen">Zur Wahlseite</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/stadtrat">Zur GGR-Fraktion</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default ArtikelErfolgreichsteWahlenStadtZug2026;
