import { Building, Briefcase, Leaf, Car, GraduationCap, Shield, ArrowRight } from 'lucide-react';

const TopicsSection = () => {
  const topics = [
    {
      icon: Building,
      title: "Wohnen und Lebensraum",
      description: "Bezahlbarer Wohnraum für Familien und eine ausgewogene Stadtentwicklung, die Tradition und Fortschritt verbindet.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      title: "Wirtschaft und Gewerbe",
      description: "Optimale Rahmenbedingungen für Unternehmen und Arbeitsplätze. Zug als attraktiver Wirtschaftsstandort stärken.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Leaf,
      title: "Energie und Umwelt",
      description: "Pragmatischer Umweltschutz mit Augenmass. Saubere Energie und nachhaltiger Umgang mit natürlichen Ressourcen.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Car,
      title: "Mobilität und Verkehr",
      description: "Ausgewogene Verkehrspolitik für alle Verkehrsteilnehmer. Flüssiger Verkehr und ausreichend Parkplätze.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Schule und Bildung",
      description: "Qualitativ hochstehende Bildung für alle Kinder. Starke Schulen als Grundlage für die Zukunft unserer Stadt.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Sicherheit",
      description: "Schutz vor Kriminalität und eine starke Polizei. Sicherheit im öffentlichen Raum für alle Generationen.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="topics" className="section-padding bg-gradient-section">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Themen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von Wohnungspolitik bis Bildung – hier finden Sie unsere konkreten 
            Positionen zu den wichtigsten Themen, die unsere Stadt bewegen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div key={index} className="card-elevated group cursor-pointer hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 bg-gradient-to-r ${topic.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {topic.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-semibold group-hover:text-svp-orange transition-colors">
                    <span className="mr-2">Mehr erfahren</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Haben Sie Fragen zu unseren Positionen?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Gerne erläutern wir Ihnen unsere Standpunkte persönlich. 
              Kontaktieren Sie uns für ein Gespräch oder besuchen Sie eine unserer Veranstaltungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Kontakt aufnehmen
              </button>
              <button className="btn-outline">
                Veranstaltungen ansehen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;