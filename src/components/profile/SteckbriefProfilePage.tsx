import PageLayout from "@/components/layout/PageLayout";
import ProfileBreadcrumb from "@/components/profile/ProfileBreadcrumb";
import ProfileHero from "@/components/profile/ProfileHero";
import ProfileQuoteCard from "@/components/profile/ProfileQuoteCard";
import ProfileContactCard from "@/components/profile/ProfileContactCard";
import ProfilePersonalDataCard from "@/components/profile/ProfilePersonalDataCard";
import ProfileListSection from "@/components/profile/ProfileListSection";
import ProfileHobbiesSection from "@/components/profile/ProfileHobbiesSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type {
  ElectionCandidacy,
  ElectionStatus,
  SteckbriefCandidate,
} from "@/data/steckbriefCandidates";

function getBirthYear(iso?: string): string | undefined {
  if (!iso) return undefined;
  const m = /^(\d{4})-/.exec(iso);
  return m?.[1];
}

function normalizeOptional(value?: string): string | undefined {
  const v = (value ?? "").trim();
  if (!v || v === "-" || v.toLowerCase() === "n/a") return undefined;
  return v;
}

function normalizePhoneLike(value?: string): string | undefined {
  const v = normalizeOptional(value);
  if (!v) return undefined;
  return v.replace(/[^\d+]/g, "");
}

function uniqueStrings(items: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of items) {
    const v = (raw ?? "").trim();
    if (!v) continue;
    const key = v.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(v);
  }
  return out;
}

function parseRolesFromKandidatur(kandidatur: string): string[] {
  const k = kandidatur.toLowerCase();
  const roles: string[] = [];

  if (k.includes("stadtpräsident")) roles.push("Stadtpräsident");
  if (k.includes("stadtrat")) roles.push("Stadtrat");
  if (k.includes("kantonsrat") || k.includes("kr")) roles.push("Kantonsrat");
  if (k.includes("grosser gemeinderat") || k.includes("ggr") || k.includes("gemeinderat")) {
    roles.push("GGR");
  }
  if (k.includes("rpk") || k.includes("rechnungsprüfungskommission")) roles.push("RPK");

  return uniqueStrings(roles);
}

function toDisplayPosition(kandidatur: string): string {
  const k = kandidatur.toLowerCase();
  if (k.includes("stadtpräsident")) return "Stadtpräsident";
  if (k.includes("stadtrat")) return "Stadtrat";
  if (k.includes("kantonsrat")) return "Kantonsrat";
  if (k.includes("kr")) return "Kantonsrat";
  // On the site we label GGR members as Gemeinderat
  if (k.includes("grosser gemeinderat") || k.includes("ggr") || k.includes("gemeinderat"))
    return "GGR";
  return "Profil";
}

const statusClassName = (status: ElectionStatus) =>
  status === "Bisher"
    ? "bg-[hsl(var(--svp-green))] text-white border-transparent"
    : "bg-background text-[hsl(var(--svp-green))] border-[hsl(var(--svp-green))]/40";

function OfficeStatusBadge({ candidacy }: { candidacy: ElectionCandidacy }) {
  return (
    <Badge className={statusClassName(candidacy.status)}>
      {candidacy.office} ({candidacy.status})
    </Badge>
  );
}

export default function SteckbriefProfilePage({
  candidate,
  breadcrumb,
}: {
  candidate: SteckbriefCandidate;
  breadcrumb: Array<{ label: string; href: string }>;
}) {
  const currentOffices = candidate.currentOffices ?? [];
  const candidacies2026 = candidate.candidacies2026 ?? [];
  const parsedRoles = parseRolesFromKandidatur(candidate.kandidatur);
  const displayPosition =
    currentOffices.length > 0 ? currentOffices[0] : toDisplayPosition(candidate.kandidatur);
  const personalData = {
    name: candidate.name,
    position: displayPosition,
    born: getBirthYear(candidate.birthDateISO),
    address: normalizeOptional(candidate.address),
    location: normalizeOptional(candidate.location),
    phone: normalizeOptional(candidate.phone),
    mobile: normalizeOptional(candidate.mobile),
    email: normalizeOptional(candidate.email) ?? "",
    maritalStatus: normalizeOptional(candidate.maritalStatus),
    profession: normalizeOptional(candidate.profession),
    children: normalizeOptional(candidate.children),
  };

  const normalizedPhone = normalizePhoneLike(personalData.phone);
  const normalizedMobile = normalizePhoneLike(personalData.mobile);
  const effectivePersonalData = {
    ...personalData,
    mobile: normalizedPhone && normalizedMobile && normalizedPhone === normalizedMobile ? undefined : personalData.mobile,
  };

  const heroRoles =
    candidacies2026.length > 0
      ? []
      : currentOffices.length > 0
        ? currentOffices.slice(1)
        : parsedRoles;
  const statusPanelColumns = currentOffices.length > 0 ? "md:grid-cols-2" : "";
  const statusPanel = candidacies2026.length > 0 ? (
    <div className={`mt-6 grid max-w-3xl gap-4 rounded-xl border border-[hsl(var(--svp-green))]/20 bg-background p-5 shadow-sm ${statusPanelColumns}`}>
      {currentOffices.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Aktuelles Amt
          </p>
          <div className="flex flex-wrap gap-2">
            {currentOffices.map((office) => (
              <Badge key={office} variant="secondary">
                {office}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Kandidiert 2026
        </p>
        <div className="flex flex-wrap gap-2">
          {candidacies2026.map((candidacy) => (
            <OfficeStatusBadge key={candidacy.office} candidacy={candidacy} />
          ))}
        </div>
      </div>
    </div>
  ) : undefined;

  return (
    <PageLayout
      title={`${candidate.name} - Profil - SVP Stadt Zug`}
      description={`${candidate.name} - ${personalData.position} der SVP Stadt Zug.`}
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb items={breadcrumb} currentPage={candidate.name} />

        <div className="mb-12">
          <ProfileHero
            personalData={effectivePersonalData}
            image={candidate.image}
            description={personalData.position}
            roles={heroRoles}
            showRoleBadges={candidacies2026.length === 0}
            belowName={statusPanel}
          />
          {candidate.statement && (
            <ProfileQuoteCard quote={candidate.statement} />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            {candidate.biography && (
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Über mich</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {candidate.biography}
                  </p>
                </CardContent>
              </Card>
            )}

            {candidate.education && candidate.education.length > 0 && (
              <ProfileListSection title="Ausbildung" items={uniqueStrings(candidate.education)} variant="default" />
            )}

            {candidate.mandate && candidate.mandate.length > 0 && (
              <ProfileListSection
                title="Politische Mandate"
                items={uniqueStrings(candidate.mandate)}
                variant="default"
              />
            )}

            {candidate.clubs && candidate.clubs.length > 0 && (
              <ProfileListSection title="Vereine" items={uniqueStrings(candidate.clubs)} variant="default" />
            )}

            {candidate.positions && candidate.positions.length > 0 && (
              <ProfileListSection
                title="Ämter und weitere Tätigkeiten"
                items={uniqueStrings(candidate.positions)}
                variant="default"
              />
            )}

            {candidate.commissions && candidate.commissions.length > 0 && (
              <ProfileListSection
                title="Mitgliedschaften Kommissionen"
                items={uniqueStrings(candidate.commissions)}
                variant="default"
              />
            )}

            {candidate.priorities && candidate.priorities.length > 0 && (
              <ProfileListSection
                title="Meine politischen Prioritäten"
                items={uniqueStrings(candidate.priorities)}
                variant="default"
              />
            )}

            {candidate.hobbies && candidate.hobbies.length > 0 && (
              <ProfileHobbiesSection hobbies={candidate.hobbies} />
            )}
          </div>

          <div className="space-y-6">
            <ProfileContactCard personalData={effectivePersonalData} />
            <ProfilePersonalDataCard personalData={effectivePersonalData} />
          </div>
        </div>
      </main>
    </PageLayout>
  );
}

