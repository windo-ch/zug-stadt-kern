import PageLayout from "@/components/layout/PageLayout";
import ProfileBreadcrumb from "@/components/profile/ProfileBreadcrumb";
import ProfileHero from "@/components/profile/ProfileHero";
import ProfileQuoteCard from "@/components/profile/ProfileQuoteCard";
import ProfileContactCard from "@/components/profile/ProfileContactCard";
import ProfilePersonalDataCard from "@/components/profile/ProfilePersonalDataCard";
import ProfileListSection from "@/components/profile/ProfileListSection";
import ProfileHobbiesSection from "@/components/profile/ProfileHobbiesSection";
import { Card, CardContent } from "@/components/ui/card";
import { SteckbriefCandidate } from "@/data/steckbriefCandidates";

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
  const raw = (kandidatur ?? "").trim();
  if (!raw) return [];

  // We only use kandidatur for deriving the *primary* office (via toDisplayPosition).
  // Extra badges should not re-list other offices (e.g. "Gemeinderat" + "Kantonsrat")
  // because it looks like duplication and conflicts with “highest office first”.
  return [];
}

function toDisplayPosition(kandidatur: string): string {
  const k = kandidatur.toLowerCase();
  if (k.includes("stadtpräsident")) return "Stadtpräsident";
  if (k.includes("stadtrat")) return "Stadtrat";
  if (k.includes("kantonsrat")) return "Kantonsrat";
  // On the site we label GGR members as Gemeinderat
  if (k.includes("grosser gemeinderat") || k.includes("ggr") || k.includes("gemeinderat"))
    return "Gemeinderat";
  return "Profil";
}

export default function SteckbriefProfilePage({
  candidate,
  breadcrumb,
}: {
  candidate: SteckbriefCandidate;
  breadcrumb: Array<{ label: string; href: string }>;
}) {
  const personalData = {
    name: candidate.name,
    position: toDisplayPosition(candidate.kandidatur),
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

  const roles = parseRolesFromKandidatur(candidate.kandidatur);

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
            roles={roles}
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

