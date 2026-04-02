import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const LESERBRIEF_REFERENZ_URL =
  "https://www.zugerzeitung.ch/meinung/leserbriefe-zz/artikel-ld.4146348";

const ArtikelVillaUntererFrauenstein = () => {
  const title = "Zur Debatte um die Villa Unterer Frauenstein";

  const publicationDate = "1. April 2026";
  const author = "Marcus H. Bühler";
  const authorRole = "Gemeinderat";

  const heroImageSrc = "/assets/events/villa-frauenstein-zug.webp";
  const heroImageAlt = "Villa Unterer Frauenstein, Zug";

  const paragraphs: string[] = [
    "Der Leserbrief von Marilena Amato-Mengis verkennt bereits im Titel und Ansatz, worum es bei einer verantwortungsvollen Finanzpolitik und Stadtentwicklung gehen sollte. Es reicht nicht, ein emotionales Bild von Grünflächen, Begegnungsorten und Seezugang zu zeichnen, ohne ein konkretes und tragfähiges Nutzungskonzept vorzulegen. Genau daran fehlt es hier. Es bleibt unklar, wie die Villa und das Areal tatsächlich genutzt werden sollen, welche Folgekosten entstehen und welchen konkreten Mehrwert die Bevölkerung langfristig davon hätte.",
    "Ebenso problematisch ist der Preis. Öffentliche Gelder sind keine abstrakte Grösse, sondern stammen aus Steuern und müssen mit Sorgfalt eingesetzt werden. Ein überteuerter Kauf, der primär mit vagen Vorstellungen von Erholung und «Sein» begründet wird, genügt diesem Anspruch nicht. Gerade in Zeiten einer wachsenden Stadt gibt es zahlreiche dringendere Investitionen, etwa in Pflegeplätze, Bildung oder Infrastruktur, die klarer priorisiert werden sollten.",
    "Der Vergleich mit früheren Käufen greift zu kurz. Jede Situation ist anders und vergangene Entscheide sind kein Freipass für neue Ausgaben ohne solide Grundlage. Wer heute eine solche Investition fordert, muss bessere Argumente liefern als ein bisschen «Sein» und «Geld hat die Stadt ja».",
    "Gleichzeitig ist es legitim, dass ein solches Anliegen breit diskutiert wird. Sollte es den Initianten gelingen, genügend Unterschriften für eine Volksabstimmung zu sammeln, dann gehört die Entscheidung vor das Volk. Gerade deshalb ist es wichtig, die Schwächen dieser Vorlage offen zu benennen, damit die Stimmbürgerinnen und Stimmbürger eine fundierte Entscheidung treffen können. Eine Vorlage ohne klares Konzept und mit fragwürdiger Kostenbasis sollte an der Urne keinen Bestand haben.",
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
              <Badge
                variant="outline"
                className="mb-4 text-base px-4 py-2 border-[hsl(var(--svp-green))]"
              >
                Artikel
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-muted-foreground text-lg">
                {publicationDate} · {author}
              </p>
              <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
                Bezug: Leserbrief «Villa Unterer Frauenstein» (Marilena Amato-Mengis, SP),{" "}
                <em>Zuger Zeitung</em>, 31. März 2026 —{" "}
                <a
                  href={LESERBRIEF_REFERENZ_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 inline-flex items-center gap-1 font-medium"
                >
                  Zum Leserbrief in der Zuger Zeitung
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
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
                  {paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

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
                    <div className="text-muted-foreground text-sm">{authorRole}, SVP Stadt Zug</div>
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

export default ArtikelVillaUntererFrauenstein;
