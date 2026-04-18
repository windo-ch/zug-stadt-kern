import { useCallback, useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

type GalleryPhoto = { src: string; alt: string };

const PHOTOS: GalleryPhoto[] = [
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-2.png",
    alt: "Gruppe der SVP Stadt Zug mit Wahlkampfplakaten vor dem Stand auf dem Bundesplatz",
  },
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-1.png",
    alt: "Mitglied der SVP Stadt Zug mit Sandwich-Plakat «Keine 10-Millionen Schweiz» und «Nachhaltigkeits-Initiative Ja»",
  },
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-3.png",
    alt: "Kandidierende und Mitglieder der SVP Stadt Zug beim Gruppenfoto auf dem Bundesplatz",
  },
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-04.png",
    alt: "Standaktion: Plakat «Keine 10-Millionen Schweiz» und Nachhaltigkeits-Initiative",
  },
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-05.png",
    alt: "Flyer der SVP Stadt Zug: «Dein Anliegen ist uns nicht Wurst»",
  },
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-06.png",
    alt: "SVP-Stand mit Zelt, Tischen und Wahl-Café-Piaggio auf dem Bundesplatz",
  },
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-07.png",
    alt: "Unterschriftensammlung für die Kopftuch-Initiative am SVP-Stand",
  },
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-08.png",
    alt: "Ausgeteilte Bratwurst mit Aufkleber «Dein Anliegen ist uns nicht Wurst»",
  },
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-09.png",
    alt: "Kiste mit eingepackten Würsten für die Standaktion",
  },
  {
    src: "/assets/events/bundesplatz-standaktion-2026-04-10.png",
    alt: "SVP Stadt Zug: Team am Stand mit Flyern und Würsten",
  },
];

const ArtikelBundesplatzStandaktionApril2026 = () => {
  const title = "Standaktion auf dem Bundesplatz: Unterschriften, Gespräche und klare Positionen";
  const publicationDate = "18. April 2026";

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(((index % PHOTOS.length) + PHOTOS.length) % PHOTOS.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  const hero = PHOTOS[0];
  const gridPhotos = PHOTOS.slice(1);

  const introParagraphs = [
    "Die SVP Stadt Zug hat heute auf dem Bundesplatz eine Standaktion durchgeführt. Mit dabei war die Wurstverteilung unter dem Motto «Ihre Anliegen sind uns nicht Wurst».",
    "Es beteiligten sich zahlreiche Kandidierende und weitere Mitglieder der Stadtpartei. Insgesamt wurden genau 70 Unterschriften für die Kopftuch-Initiative gesammelt.",
    "Gleichzeitig wiesen wir mit Plakaten auf die Abstimmung zur «10-Millionen-Schweiz» hin. Dabei ergaben sich viele positive Gespräche mit Passantinnen und Passanten.",
  ];

  const closingParagraph =
    "Die Reaktionen auf die «10-Millionen-Schweiz» und auf das Engagement der SVP allgemein waren durchwegs positiv. Gegen Ende des Nachmittags kamen die Passanten regelrecht in Scharen ans Zelt, um zu unterschreiben – es ging um die Kopftuch-Initiative, doch unterschrieben wurde kräftig, fast wie an der Zuger Messe.";

  const currentPhoto = lightboxIndex !== null ? PHOTOS[lightboxIndex] : null;

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
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="group relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`${hero.alt} — Vollbild öffnen`}
              >
                <div className="w-full aspect-video bg-muted">
                  <img
                    src={hero.src}
                    alt={hero.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-background/90 px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm border border-border/60 opacity-90 group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden />
                  Vollbild
                </span>
              </button>
              <CardContent className="p-6 md:p-8">
                <div className="space-y-5 text-foreground/90 text-base md:text-lg leading-relaxed">
                  {introParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  <p>
                    Organisiert war der Stand mit Zelt und dem Wahl-Café-Piaggio von{" "}
                    <Link
                      to="/profil/gregor-bruhin"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Gregor Bruhin (Kantonsrat)
                    </Link>
                    : sämtliche vorhandenen Unterschriftenbögen wurden bis zum Schluss aufgebraucht.
                  </p>
                  <p>{closingParagraph}</p>
                </div>
              </CardContent>
            </Card>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground">Impressionen</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Tippen oder klicken für Vollbild. Pfeiltasten wechseln das Bild, Esc schliesst.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {gridPhotos.map((img, gridIdx) => {
                const index = gridIdx + 1;
                return (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    aria-label={`${img.alt} — Vollbild öffnen`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                    <span className="absolute bottom-2 right-2 rounded bg-background/85 p-1 text-muted-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Maximize2 className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-center pb-8">
              <Button variant="outline" asChild>
                <Link to="/was-ansteht">Zurück zu «Was ansteht»</Link>
              </Button>
            </div>
          </div>
        </Section>

        <Dialog
          open={lightboxIndex !== null}
          onOpenChange={(open) => {
            if (!open) setLightboxIndex(null);
          }}
        >
          <DialogContent
            className="fixed left-0 top-0 z-50 flex h-[100dvh] w-full max-h-[100dvh] max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-0 bg-zinc-950 p-0 shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:max-w-none"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <div className="flex h-[100dvh] min-h-0 flex-col text-white">
              <DialogTitle className="sr-only">Foto-Galerie Standaktion Bundesplatz</DialogTitle>
              <DialogDescription className="sr-only">
                {lightboxIndex !== null
                  ? `Bild ${lightboxIndex + 1} von ${PHOTOS.length}. Pfeiltasten zum Wechseln.`
                  : ""}
              </DialogDescription>

              {currentPhoto && (
                <>
                  <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 py-2 pl-3 pr-14 text-white/90 md:pl-4 md:pr-16">
                    <span className="min-w-0 truncate text-sm md:text-base">{currentPhoto.alt}</span>
                    <span className="shrink-0 tabular-nums text-sm text-white/70">
                      {(lightboxIndex ?? 0) + 1} / {PHOTOS.length}
                    </span>
                  </div>

                  <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-20 pt-2 md:px-10 md:pb-12">
                    <img
                      src={currentPhoto.src}
                      alt={currentPhoto.alt}
                      className="max-h-[calc(100dvh-10rem)] w-auto max-w-full object-contain"
                    />

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute left-1 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/60 md:left-4 md:h-12 md:w-12"
                      onClick={goPrev}
                      aria-label="Vorheriges Bild"
                    >
                      <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/60 md:right-4 md:h-12 md:w-12"
                      onClick={goNext}
                      aria-label="Nächstes Bild"
                    >
                      <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </PageLayout>
  );
};

export default ArtikelBundesplatzStandaktionApril2026;
