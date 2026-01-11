import { useState } from 'react';
import { Shield, TrendingUp, Users, Scale, PiggyBank, Home, ChevronDown } from 'lucide-react';

const ValuesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const values = [
    {
      icon: Shield,
      title: "Sicherheit und Ordnung",
      shortDescription: "Sicherheit ist ein Grundbedürfnis. Wir setzen uns für sichtbare Polizeipräsenz und konsequente Durchsetzung von Recht und Ordnung ein.",
      points: [
        "Verstärkte Polizeipräsenz in der Innenstadt",
        "Null-Toleranz-Politik bei Vandalismus",
        "Sichere Schulwege für unsere Kinder",
        "Effektive Kriminalitätsprävention"
      ]
    },
    {
      icon: TrendingUp,
      title: "Tiefe Abgaben, starke Wirtschaft",
      shortDescription: "Attraktive Steuern und schlanke Verwaltung schaffen Arbeitsplätze und Wohlstand für alle Zuger Familien.",
      points: [
        "Förderung des lokalen Gewerbes",
        "Attraktive Standortbedingungen",
        "Reduktion der Bürokratie",
        "Innovation und Unternehmertum unterstützen"
      ]
    },
    {
      icon: Users,
      title: "Geordnete Zuwanderung",
      shortDescription: "Integration und Respekt vor unseren Werten sind Voraussetzungen für ein friedliches Zusammenleben in unserer Stadt.",
      points: [
        "Kontrollierte Zuwanderung",
        "Integration statt Parallelgesellschaften",
        "Respekt vor Schweizer Werten",
        "Förderung der Integration"
      ]
    },
    {
      icon: Scale,
      title: "Freiheit und Eigenverantwortung",
      shortDescription: "Weniger Staat, mehr Eigeninitiative. Wir vertrauen auf die Kompetenz und Verantwortung der Bürger.",
      points: [
        "Stärkung der Eigenverantwortung",
        "Weniger staatliche Bevormundung",
        "Vertrauen in die Bürgerkompetenz",
        "Förderung der Freiheit"
      ]
    },
    {
      icon: PiggyBank,
      title: "Solide Finanzen",
      shortDescription: "Haushaltsdisziplin und nachhaltige Finanzpolitik – für eine sichere Zukunft unserer Stadt und der nächsten Generationen.",
      points: [
        "Haushaltsdisziplin",
        "Nachhaltige Finanzpolitik",
        "Schuldenabbau",
        "Generationengerechte Finanzen"
      ]
    },
    {
      icon: Home,
      title: "Lebenswerte Quartiere",
      shortDescription: "Bezahlbarer Wohnraum, gepflegte öffentliche Räume und eine funktionierende Infrastruktur für alle Stadtteile.",
      points: [
        "Bezahlbarer Wohnraum",
        "Gepflegte öffentliche Räume",
        "Funktionierende Infrastruktur",
        "Quartierentwicklung für alle"
      ]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="values" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Wofür mir stönd
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unsere Werte und Überzeugungen bilden das Fundament unserer politischen Arbeit.
          </p>
        </div>

        {/* Compact grid layout - Design System Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const isExpanded = expandedIndex === index;
            
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-5 md:p-6 hover:border-[hsl(var(--svp-green))]/40 hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                {/* Icon with green circle - Design System Pattern */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] rounded-full flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-medium)] group-hover:scale-110 transition-[var(--transition-smooth)]">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-[hsl(var(--svp-green))] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {value.shortDescription}
                    </p>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[hsl(var(--svp-green))]' : ''}`}
                  />
                </div>

                {/* Expanded content - Design System Spacing */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
                    <ul className="space-y-2.5">
                      {value.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-sm">
                          <span className="w-2 h-2 bg-[hsl(var(--svp-green))] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Compact CTA - Design System Colors */}
        <div className="text-center mt-8">
          <div className="inline-block bg-gradient-to-r from-[hsl(var(--svp-green))]/5 to-[hsl(var(--svp-green-light))]/5 rounded-xl px-6 py-4 border border-[hsl(var(--svp-green))]/10">
            <p className="text-sm text-muted-foreground">
              Diese Werte leiten uns in unserer täglichen politischen Arbeit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;