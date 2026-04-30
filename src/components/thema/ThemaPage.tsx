import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

interface ThemaLabeledItem {
  label: string;
  text: string;
}

interface ThemaStatsRow {
  label: string;
  value: string;
}

interface ThemaPageProps {
  meta: { title: string; description: string };
  hero: { image: string; alt: string; headline: string };
  lead: string;
  intro: { title: string; paragraphs: string[] };
  consequences?: { title: string; items: ThemaLabeledItem[] };
  stats?: { title?: string; rows: ThemaStatsRow[]; source: string };
  demands: { title: string; items: string[] };
  person: { name: string; role: string; profilePath: string };
  weiterlesen: Array<{ title: string; href: string }>;
}

const ThemaPage = ({
  meta,
  hero,
  lead,
  intro,
  consequences,
  stats,
  demands,
  person,
  weiterlesen,
}: ThemaPageProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <PageLayout title={meta.title} description={meta.description}>
      <main>
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          {!imgError ? (
            <img
              src={hero.image}
              alt={hero.alt}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-[hsl(120,60%,38%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-12 md:pb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {hero.headline}
            </h1>
          </div>
        </div>

        {/* Lead */}
        <section className="py-12 md:py-16">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">{lead}</p>
          </div>
        </section>

        {/* Intro */}
        <section className="pb-12 md:pb-16">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">{intro.title}</h2>
            <div className="space-y-4">
              {intro.paragraphs.map((p, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/80">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Consequences */}
        {consequences && (
          <section className="py-12 md:py-16 bg-muted">
            <div className="max-w-2xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-6">{consequences.title}</h2>
              <ul className="space-y-3">
                {consequences.items.map((item, i) => (
                  <li key={i} className="text-base md:text-lg leading-relaxed text-foreground/80">
                    <span className="font-semibold text-primary">{item.label}:</span>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Stats */}
        {stats && (
          <section className="py-12 md:py-16">
            <div className="max-w-2xl mx-auto px-6">
              {stats.title && <h2 className="text-2xl font-bold mb-6">{stats.title}</h2>}
              <table className="w-full">
                <tbody>
                  {stats.rows.map((row, i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="py-3 pr-8 text-base md:text-lg text-foreground/80">
                        {row.label}
                      </td>
                      <td className="py-3 text-right text-base md:text-lg font-semibold">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-muted-foreground">{stats.source}</p>
            </div>
          </section>
        )}

        {/* Demands */}
        <section className={`py-12 md:py-16 ${!stats ? "" : "bg-muted"}`}>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">{demands.title}</h2>
            <ul className="space-y-3">
              {demands.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-foreground/80"
                >
                  <span className="text-primary font-bold mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Person card */}
        <section className="py-12 md:py-16">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Wer dafür kämpft
            </p>
            <Link
              to={person.profilePath}
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-muted px-6 py-5 hover:border-primary hover:bg-primary/5 transition-colors group"
            >
              <div>
                <p className="font-semibold text-lg">{person.name}</p>
                <p className="text-muted-foreground text-sm">{person.role}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          </div>
        </section>

        {/* Weiterlesen */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Weiterlesen
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {weiterlesen.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-5 py-4 hover:border-primary hover:bg-primary/5 transition-colors group"
                >
                  <span className="font-medium text-sm leading-snug">{item.title}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default ThemaPage;

