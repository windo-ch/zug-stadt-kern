import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import CircularAvatar from "@/components/people/CircularAvatar";
import { kantonsratStadtZugElected2026 } from "@/data/electionResults2026";

export default function Kantonsrat() {
  return (
    <PageLayout
      title="Kantonsrat - SVP Stadt Zug"
      description="Unsere vier Kantonsräte der SVP Stadt Zug nach den Wahlen vom 4. Oktober 2026."
    >
      <main>
        <Section variant="gradient">
          <SectionHeader
            title="Kantonsrat"
            description="Vier Sitze (+1) aus dem Wahlkreis Stadt Zug für die Amtsperiode 2027–2030."
            align="center"
          />
        </Section>

        <Section>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {kantonsratStadtZugElected2026.map((person) => (
                <CircularAvatar
                  key={person.slug}
                  name={person.name}
                  image={person.image}
                  profileLink={`/profil/${person.slug}`}
                  category="Kantonsrat"
                  role="Kantonsrat"
                  size="lg"
                />
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
}
