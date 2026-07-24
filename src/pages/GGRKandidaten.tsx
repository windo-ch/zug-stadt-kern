import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Vote } from "lucide-react";
import { Link } from "react-router-dom";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";
import type { ElectionCandidacy, ElectionStatus } from "@/data/steckbriefCandidates";

interface ElectionCandidate {
  name: string;
  currentOffices: string[];
  candidacies2026: ElectionCandidacy[];
  profileLink: string;
  image: string;
  statement?: string;
}

interface CandidateGroup {
  title: string;
  description: string;
  candidates: ElectionCandidate[];
}

const candidateFromSteckbrief = (
  slug: keyof typeof steckbriefCandidates,
): ElectionCandidate => {
  const candidate = steckbriefCandidates[slug];
  return {
    name: candidate.name,
    currentOffices: candidate.currentOffices ?? [],
    candidacies2026: candidate.candidacies2026 ?? [],
    profileLink: `/profil/${candidate.slug}`,
    image: candidate.image,
    statement: candidate.statement,
  };
};

const legacyCandidate = (
  name: string,
  currentOffices: string[],
  candidacies2026: ElectionCandidacy[],
  profileLink: string,
  image: string,
  statement?: string,
): ElectionCandidate => ({
  name,
  currentOffices,
  candidacies2026,
  profileLink,
  image,
  statement,
});

const candidateGroups: CandidateGroup[] = [
  {
    title: "Stadtrat und Stadtpräsidium",
    description: "Unser bisheriger Stadtpräsident und Stadtrat tritt erneut an.",
    candidates: [
      candidateFromSteckbrief("andre-wicki"),
    ],
  },
  {
    title: "Grosser Gemeinderat (GGR)",
    description: "Bisherige Gemeinderäte und neue Kandidierende für den Grossen Gemeinderat.",
    candidates: [
      candidateFromSteckbrief("henry-barrows"),
      candidateFromSteckbrief("alessia-bischof"),
      legacyCandidate(
        "Gregor R. Bruhin",
        ["Kantonsrat"],
        [
          { office: "GGR", status: "Neu" },
          { office: "Kantonsrat", status: "Bisher" },
        ],
        "/profil/gregor-bruhin",
        "/assets/people/jpg-2026/Gregor-Bruhin_kravatte_g.jpg",
      ),
      legacyCandidate(
        "Philip C. Brunner",
        ["GGR", "Kantonsrat", "Präsident GPK"],
        [
          { office: "GGR", status: "Bisher" },
          { office: "Kantonsrat", status: "Bisher" },
        ],
        "/profil/philip-brunner",
        "/assets/people/profilbilder/philip-c-brunner.jpg",
      ),
      candidateFromSteckbrief("marcus-buehler"),
      candidateFromSteckbrief("rene-gretener"),
      candidateFromSteckbrief("karl-keiser"),
      candidateFromSteckbrief("kilian-krall"),
      candidateFromSteckbrief("roman-kueng"),
      candidateFromSteckbrief("markus-laemmler"),
      candidateFromSteckbrief("alex-odermatt"),
      candidateFromSteckbrief("andrea-risi"),
      candidateFromSteckbrief("adrian-risi"),
      candidateFromSteckbrief("simon-ruckstuhl"),
      legacyCandidate(
        "Norbert Schlumpf",
        ["GGR"],
        [{ office: "GGR", status: "Bisher" }],
        "/profil/norbert-schlumpf",
        "/assets/people/profilbilder/norbert-schlumpf.jpg",
      ),
      candidateFromSteckbrief("claudio-schmid"),
      candidateFromSteckbrief("philip-stierli"),
    ],
  },
  {
    title: "Kantonsrat",
    description: "Bisherige Kantonsräte und neue Kandidierende für den Kantonsrat.",
    candidates: [
      candidateFromSteckbrief("alessia-bischof"),
      legacyCandidate(
        "Gregor R. Bruhin",
        ["Kantonsrat"],
        [
          { office: "GGR", status: "Neu" },
          { office: "Kantonsrat", status: "Bisher" },
        ],
        "/profil/gregor-bruhin",
        "/assets/people/jpg-2026/Gregor-Bruhin_kravatte_g.jpg",
      ),
      legacyCandidate(
        "Philip C. Brunner",
        ["GGR", "Kantonsrat", "Präsident GPK"],
        [
          { office: "GGR", status: "Bisher" },
          { office: "Kantonsrat", status: "Bisher" },
        ],
        "/profil/philip-brunner",
        "/assets/people/profilbilder/philip-c-brunner.jpg",
      ),
      candidateFromSteckbrief("kilian-krall"),
      candidateFromSteckbrief("roman-kueng"),
      candidateFromSteckbrief("alex-odermatt"),
      candidateFromSteckbrief("adrian-risi"),
      candidateFromSteckbrief("simon-ruckstuhl"),
    ],
  },
];

const statusClassName = (status: ElectionStatus) =>
  status === "Bisher"
    ? "bg-[hsl(var(--svp-green))] text-white border-transparent"
    : "bg-background text-[hsl(var(--svp-green))] border-[hsl(var(--svp-green))]/40";

const OfficeStatusBadge = ({ candidacy }: { candidacy: ElectionCandidacy }) => (
  <Badge className={statusClassName(candidacy.status)}>
    {candidacy.office} ({candidacy.status})
  </Badge>
);

const GGRKandidaten = () => {
  return (
    <PageLayout
      title="Kandidaten 2026 - SVP Stadt Zug"
      description="Alle Kandidatinnen und Kandidaten der SVP Stadt Zug für die Wahlen 2026."
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
              Kandidaten 2026
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unsere bisherigen Amtsträger und neuen Kandidierenden für Stadtpräsidium,
              Grossen Gemeinderat und Kantonsrat.
            </p>
          </div>
        </Section>

        <Section className="bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {candidateGroups.map((group) => (
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
                    {group.candidates.map((candidate) => (
                      <Link
                        key={`${group.title}-${candidate.name}`}
                        to={candidate.profileLink}
                        className="block h-full"
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <CardHeader className="text-center">
                            <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))]/20 shadow-md mb-4 bg-muted">
                              <img
                                src={candidate.image}
                                alt={candidate.name}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/logo/svp-stadt-zug-logo.png";
                                }}
                              />
                            </div>
                            <CardTitle className="text-lg">{candidate.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="text-center">
                            <div className="mb-4 space-y-3 rounded-lg border bg-muted/30 p-4 text-left">
                              {candidate.currentOffices.length > 0 && (
                                <div>
                                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    Aktuelles Amt
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {candidate.currentOffices.map((office) => (
                                      <Badge key={office} variant="secondary">
                                        {office}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div>
                                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                  Kandidiert 2026
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {candidate.candidacies2026.map((candidacy) => (
                                    <OfficeStatusBadge
                                      key={`${candidate.name}-${candidacy.office}`}
                                      candidacy={candidacy}
                                    />
                                  ))}
                                </div>
                              </div>
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

