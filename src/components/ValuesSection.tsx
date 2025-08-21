import { Shield, TrendingUp, Users, Scale, PiggyBank, Home } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Sicherheit und Ordnung",
      description: "Sicherheit ist ein Grundbedürfnis. Wir setzen uns für sichtbare Polizeipräsenz und konsequente Durchsetzung von Recht und Ordnung ein."
    },
    {
      icon: TrendingUp,
      title: "Tiefe Abgaben, starke Wirtschaft",
      description: "Attraktive Steuern und schlanke Verwaltung schaffen Arbeitsplätze und Wohlstand für alle Zuger Familien."
    },
    {
      icon: Users,
      title: "Geordnete Zuwanderung",
      description: "Integration und Respekt vor unseren Werten sind Voraussetzungen für ein friedliches Zusammenleben in unserer Stadt."
    },
    {
      icon: Scale,
      title: "Freiheit und Eigenverantwortung",
      description: "Weniger Staat, mehr Eigeninitiative. Wir vertrauen auf die Kompetenz und Verantwortung der Bürger."
    },
    {
      icon: PiggyBank,
      title: "Solide Finanzen",
      description: "Haushaltsdisziplin und nachhaltige Finanzpolitik – für eine sichere Zukunft unserer Stadt und der nächsten Generationen."
    },
    {
      icon: Home,
      title: "Lebenswerte Quartiere",
      description: "Bezahlbarer Wohnraum, gepflegte öffentliche Räume und eine funktionierende Infrastruktur für alle Stadtteile."
    }
  ];

  return (
    <section 
      id="values" 
      className="section-padding relative"
      style={{
        backgroundImage: `url('/lovable-uploads/1cca20d4-8141-4133-9164-d369442d3687.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]"></div>
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wofür wir stehen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unsere Werte und Überzeugungen bilden das Fundament unserer politischen Arbeit. 
            Auf diesen sechs Säulen basiert unser Engagement für die Stadt Zug.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="card-value group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100/30 via-svp-green via-30% to-svp-green-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Gemeinsam für eine starke Stadt Zug
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Diese Werte leiten uns in unserer täglichen politischen Arbeit. Sie sind nicht nur 
              Worte, sondern konkrete Leitlinien für unsere Entscheidungen im Stadtparlament 
              und in der Exekutive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;