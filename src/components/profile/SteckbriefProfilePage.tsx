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

  return (
    <PageLayout
      title={`${candidate.name} - Profil - SVP Stadt Zug`}
      description={`${candidate.name} - ${personalData.position} der SVP Stadt Zug.`}
    >
      <main className="container mx-auto px-4 py-16">
        <ProfileBreadcrumb items={breadcrumb} currentPage={candidate.name} />

        <div className="mb-12">
          <ProfileHero
            personalData={personalData}
            image={candidate.image}
            description={normalizeOptional(candidate.statement) ?? personalData.position}
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
              <ProfileListSection title="Ausbildung" items={candidate.education} variant="default" />
            )}

            {candidate.clubs && candidate.clubs.length > 0 && (
              <ProfileListSection title="Vereine" items={candidate.clubs} variant="default" />
            )}

            {candidate.positions && candidate.positions.length > 0 && (
              <ProfileListSection title="Ämter und weitere Tätigkeiten" items={candidate.positions} variant="default" />
            )}

            {candidate.commissions && candidate.commissions.length > 0 && (
              <ProfileListSection title="Mitgliedschaften Kommissionen" items={candidate.commissions} variant="default" />
            )}

            {candidate.priorities && candidate.priorities.length > 0 && (
              <ProfileListSection title="Meine politischen Prioritäten" items={candidate.priorities} variant="default" />
            )}

            {candidate.hobbies && candidate.hobbies.length > 0 && (
              <ProfileHobbiesSection hobbies={candidate.hobbies} />
            )}
          </div>

          <div className="space-y-6">
            <ProfileContactCard personalData={personalData} />
            <ProfilePersonalDataCard personalData={personalData} />
          </div>
        </div>
      </main>
    </PageLayout>
  );
}

