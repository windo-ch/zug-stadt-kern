import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Vote } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ggrElected2026,
  kantonsratStadtZugElected2026,
} from "@/data/electionResults2026";

interface MandatePerson {
  name: string;
  offices: string[];
  profileLink: string;
  image: string;
  votes?: string;
}

interface MandateGroup {
  title: string;
  description: string;
  people: MandatePerson[];
}

const mandateGroups: MandateGroup[] = [
  {
    title: "Stadtrat und Stadtpräsidium",
    description: "André Wicki bleibt Stadtpräsident und Stadtrat – 5. Amtszeit.",
    people: [
      {
        name: "André Wicki",
        offices: ["Stadtpräsident", "Stadtrat"],
        profileLink: "/profil/andre-wicki",
        image: "/assets/people/profilbilder/Andre-Wicki_SVP.jpg",
        votes: "4'426",
      },
    ],
  },
  {
    title: "Grosser Gemeinderat (GGR)",
    description: "9 Sitze (+2) für die Amtsperiode 2027–2030.",
    people: ggrElected2026.map((person) => ({
      name: person.name,
      offices: person.slug === "roman-kueng" ? ["GGR", "Fraktionschef"] : ["GGR"],
      profileLink: `/profil/${person.slug}`,
      image: person.image,
      votes: person.votes,
    })),
  },
  {
    title: "Kantonsrat",
    description: "4 Sitze (+1) aus dem Wahlkreis Stadt Zug.",
    people: kantonsratStadtZugElected2026.map((person) => ({
      name: person.name,
      offices: ["Kantonsrat"],
      profileLink: `/profil/${person.slug}`,
      image: person.image,
      votes: person.votes,
    })),
  },
  {
    title: "Rechnungsprüfungskommission",
    description: "Daniel Gramm in stiller Wahl bestätigt.",
    people: [
      {
        name: "Daniel Gramm",
        offices: ["RPK"],
        profileLink: "/profil/daniel-gramm",
        image: "/assets/people/profilbilder/daniel-gramm.jpg",
      },
    ],
  },
];

const GGRKandidaten = () => {
  return (
    <PageLayout
      title="Mandate 2027–2030 - SVP Stadt Zug"
      description="Die gewählten Mandatsträgerinnen und Mandatsträger der SVP Stadt Zug nach den Wahlen vom 4. Oktober 2026."
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
              Mandate 2027–2030
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Gewählt am 4. Oktober 2026: Stadtpräsidium, Grosser Gemeinderat,
              Kantonsrat und Rechnungsprüfungskommission.
            </p>
          </div>
        </Section>

        <Section className="bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {mandateGroups.map((group) => (
                <div key={group.title}>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                      <Vote className="w-7 h-7 text-primary" />
                      {group.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {group.people.map((person) => (
                      <Link
                        key={`${group.title}-${person.name}`}
                        to={person.profileLink}
                        className="block h-full"
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <CardHeader className="text-center">
                            <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))]/20 shadow-md mb-4 bg-muted">
                              <img
                                src={person.image}
                                alt={person.name}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/logo/svp-stadt-zug-logo.png";
                                }}
                              />
                            </div>
                            <CardTitle className="text-lg">{person.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="text-center">
                            <div className="mb-4 space-y-3 rounded-lg border bg-muted/30 p-4 text-left">
                              <div>
                                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                  Amt
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {person.offices.map((office) => (
                                    <Badge key={office} variant="secondary">
                                      {office}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              {person.votes && (
                                <p className="text-sm text-muted-foreground">
                                  {person.votes} Stimmen
                                </p>
                              )}
                            </div>

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
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default GGRKandidaten;
