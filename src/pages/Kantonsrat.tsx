import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import CircularAvatar from "@/components/people/CircularAvatar";

export default function Kantonsrat() {
  return (
    <PageLayout
      title="Kantonsrat - SVP Stadt Zug"
      description="Unsere Kantonsräte der SVP Stadt Zug."
    >
      <main>
        <Section variant="gradient">
          <SectionHeader
            title="Kantonsrat"
            description="Unsere Kantonsräte der SVP Stadt Zug."
            align="center"
          />
        </Section>

        <Section>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <CircularAvatar
                name="Gregor R. Bruhin"
                image="/assets/people/profilbilder/gregor-bruhin.jpg"
                profileLink="/profil/gregor-bruhin"
                category="Kantonsrat"
                role="Kantonsrat"
                size="lg"
              />
              <CircularAvatar
                name="Philip C. Brunner"
                image="/assets/people/profilbilder/philip-c-brunner.jpg"
                profileLink="/profil/philip-brunner"
                category="Kantonsrat"
                role="Kantonsrat"
                size="lg"
              />
              <CircularAvatar
                name="Adrian Risi"
                image="/assets/people/profilbilder/adrian-risi.jpg"
                profileLink="/profil/adrian-risi"
                category="Kantonsrat"
                role="Kantonsrat"
                size="lg"
              />
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
}

