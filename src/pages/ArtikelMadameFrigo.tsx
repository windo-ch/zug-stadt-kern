import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArtikelMadameFrigo = () => {
  const title =
    "Vom politischen Vorstoss zum gelebten Engagement: Madame Frigo ist in Zug angekommen";

  const publicationDate = "20. März 2026";
  const author = "Marcus H. Bühler";
  const authorRole = "Gemeinderat";

  const heroImageSrc = "/assets/events/1000er-club/madame%20frigo.jpeg";
  const heroImageAlt = "Madame Frigo Kühlschrank in Zug";

  const paragraphs: string[] = [
    "Der Kampf gegen Food Waste gewinnt auch in der Stadt Zug zunehmend an Bedeutung. Einen wichtigen Beitrag dazu leistet der Verein Madame Frigo, der sich schweizweit für öffentlich zugängliche Kühlschränke zur Lebensmittelrettung einsetzt. Doch der Weg bis zur Umsetzung eines ersten Standorts in Zug war länger als erwartet.",
    "Obwohl der Verein ein sehr erstrebenswertes Ziel verfolgt, zierte sich die Stadt Zug lange. Insbesondere Fragen rund um geeignete Standorte sowie die Sicherstellung von Betreuung und Sauberkeit wurden als Herausforderungen genannt. Um Bewegung in die Sache zu bringen, reichte die SVP-Fraktion am 1. Oktober 2024 ein Postulat ein. Dieses wurde vom Grossen Gemeinderat deutlich überwiesen und setzte damit ein klares politisches Signal.",
    "Der Stadtrat verwies in seiner Antwort erneut auf organisatorische Hürden. Gleichzeitig war der SVP-Fraktion jedoch bekannt, dass sich zahlreiche Freiwillige für den Betrieb eines solchen Kühlschranks engagieren würden. Begleitet von wachsendem medialem Druck, unter anderem durch Berichterstattung in lokalen Medien sowie Leserbriefe, kam schliesslich 2025 endlich Bewegung in die Angelegenheit.",
    "Mit Unterstützung des zuständigen Departements SUS konnte ein geeigneter Standort gefunden werden: beim Viadukt am Ende der Neustadtpassage. Die Einweihung des Kühlschranks wurde gemeinsam von der Stadt und dem Verein Madame Frigo gefeiert und markiert einen wichtigen Schritt im lokalen Engagement gegen Lebensmittelverschwendung.",
    "Fast keine Beachtung fand dabei allerdings die politische Initialzündung. Weder anlässlich der Eröffnung noch in späteren Publikationen wurde die Rolle der SVP-Fraktion als Ideengeberin und treibende Kraft erwähnt. Dies mag im Gesamtbild eine Randnotiz sein, zeigt jedoch exemplarisch, wie bürgerliche Impulse gerade bei Nachhaltigkeitsthemen oft in den Hintergrund treten. Das die SVP sich pragmatisch für Gesellschaft und Umweltthemen engagiert, schien wohl vielen Leuten suspekt.",
    "Entscheidend ist jedoch, dass das Projekt heute gelebte Realität ist. Der Standort beim Viadukt wird genutzt und zeigt, dass das Konzept auch in der Stadt Zug ausgezeichnet funktioniert. Dies scheint nun auch bei der Verwaltung zu einem moderaten Umdenken geführt zu haben. Denn es steht die nächste Erweiterung bevor: Am 25. März 2026 wird ein weiterer Kühlschrank an der St.-Johannes-Strasse 7 bei der katholischen Pfarrei eröffnet.",
    "Dieses Beispiel zeigt, was möglich ist, wenn politischer Wille, zivilgesellschaftliches Engagement und freiwilliger Einsatz zusammenkommen. Weitere Standorte in der Stadt Zug wären ein konsequenter nächster Schritt im gemeinsamen Einsatz gegen Food Waste. Die SVP dankt allen Beteiligten, insbesondere den freiwilligen Helferinnen und Helfern sowie dem Verein Madame Frigo, für ihren wichtigen Beitrag zu einer nachhaltigen und verantwortungsvollen Gesellschaft."
  ];

  return (
    <PageLayout
      title={title}
      description={title}
      className="min-h-screen bg-background"
    >
      <main>
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 text-base px-4 py-2 border-[hsl(var(--svp-green))]">
                Artikel
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
              <CardContent className="p-6 md:p-8">
                <div className="space-y-5 text-foreground/90 text-base md:text-lg leading-relaxed">
                  {paragraphs.map((p, idx) => {
                    // Render last paragraph as signature block
                    if (idx === paragraphs.length - 1) {
                      return (
                        <p key={idx} className="whitespace-pre-line mt-6">
                          {p}
                        </p>
                      );
                    }
                    return <p key={idx}>{p}</p>;
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Author Profile Card */}
            <div className="mt-10">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Autor</h2>
              </div>
              <Card className="max-w-xl mx-auto">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))]/20 shadow-md flex-shrink-0">
                    <img
                      src="/assets/people/profilbilder/svp-marcus-buehler-profil.jpg"
                      alt={author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground truncate">{author}</div>
                    <div className="text-muted-foreground text-sm">{authorRole}</div>
                  </div>
                  <Link to="/profil/marcus-buehler">
                    <Button variant="outline" size="sm">
                      Profil ansehen
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default ArtikelMadameFrigo;

