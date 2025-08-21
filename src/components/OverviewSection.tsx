import { ArrowRight, Users, FileText, Calendar, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const OverviewSection = () => {
  const sections = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Unsere Themen",
      description: "Konkrete Lösungen für Sicherheit, Wirtschaft, Familie und Bildung",
      link: "/themen",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Abstimmungen",
      description: "Transparente Empfehlungen zu kommenden Vorlagen",
      link: "/abstimmungen", 
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Vorstösse",
      description: "Parlamentarische Arbeit für eine bessere Stadt",
      link: "/vorstoesse",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Wer wir sind",
      description: "Erfahrene Politikerinnen und Politiker im Einsatz für Zug",
      link: "/wer-wir-sind",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Entdecken Sie die SVP Stadt Zug
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lernen Sie unsere Positionen, Arbeit und Personen kennen. 
            Alles auf einen Blick für eine informierte politische Teilhabe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <Link 
              key={index} 
              to={section.link}
              className="card-overview group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {section.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {section.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {section.description}
              </p>
              
              <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Mehr erfahren
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className="mt-20 rounded-2xl p-8 text-white relative overflow-hidden"
          style={{
            backgroundImage: `url('/lovable-uploads/d75181da-4d07-475b-827c-99ae71cae110.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-svp-green/90 to-svp-green-light/90"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">33</div>
                <div className="text-sm opacity-90">Jahre für Zug im Einsatz</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Mitglieder</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">47</div>
                <div className="text-sm opacity-90">Vorstösse seit 2020</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">78%</div>
                <div className="text-sm opacity-90">Erfolgsquote</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;