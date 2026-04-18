import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArtikelBundesplatzStandaktionApril2026 = () => {
  const title = "Standaktion auf dem Bundesplatz: Unterschriften, Gespräche und klare Positionen";
  const publicationDate = "18. April 2026";

  const heroImageSrc = "/assets/events/bundesplatz-standaktion-2026-04-2.png";
  const heroImageAlt =
    "Gruppe der SVP Stadt Zug mit Wahlkampfplakaten vor dem Stand auf dem Bundesplatz";

  const galleryImages: { src: string; alt: string }[] = [
    {
      src: "/assets/events/bundesplatz-standaktion-2026-04-1.png",
      alt: "Mitglied der SVP Stadt Zug mit Sandwich-Plakat «Keine 10-Millionen Schweiz» und «Nachhaltigkeits-Initiative Ja»",
    },
    {
      src: "/assets/events/bundesplatz-standaktion-2026-04-3.png",
      alt: "Kandidierende und Mitglieder der SVP Stadt Zug beim Gruppenfoto auf dem Bundesplatz",
    },
  ];

  const paragraphs: string[] = [
    "Die SVP Stadt Zug hat heute auf dem Bundesplatz eine Standaktion durchgeführt. Mit dabei war die Wurstverteilung unter dem Motto «Ihre Anliegen sind uns nicht Wurst».",
    "Es beteiligten sich zahlreiche Kandidierende und weitere Mitglieder der Stadtpartei. Insgesamt wurden genau 70 Unterschriften für die Kopftuch-Initiative gesammelt.",
    "Gleichzeitig wiesen wir mit Plakaten auf die Abstimmung zur «10-Millionen-Schweiz» hin. Dabei ergaben sich viele positive Gespräche mit Passantinnen und Passanten.",
    "Organisiert war der Stand mit Zelt und dem Wahl-Café-Piaggio von Gregor: sämtliche vorhandenen Unterschriftenbögen wurden bis zum Schluss aufgebraucht.",
    "Die Reaktionen auf die «10-Millionen-Schweiz» und auf das Engagement der SVP allgemein waren durchwegs positiv. Gegen Ende des Nachmittags kamen die Passanten regelrecht in Scharen ans Zelt, um zu unterschreiben – es ging um die Kopftuch-Initiative, doch unterschrieben wurde kräftig, fast wie an der Zuger Messe.",
  ];

  return (
    <PageLayout title={title} description={title} className="min-h-screen bg-background">
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
              <p className="text-muted-foreground text-lg">{publicationDate}</p>
            </div>

            <Card className="overflow-hidden mb-8">
              <div className="w-full aspect-video bg-muted">
                <img
                  src={heroImageSrc}
                  alt={heroImageAlt}
                  className="w-full h-full object-cover"
                  loading="eager"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  className="rounded-xl overflow-hidden border border-border/60 bg-muted aspect-video"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="text-center pb-8">
              <Button variant="outline" asChild>
                <Link to="/was-ansteht">Zurück zu «Was ansteht»</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default ArtikelBundesplatzStandaktionApril2026;
