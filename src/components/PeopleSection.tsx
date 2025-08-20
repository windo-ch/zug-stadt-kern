import { Users, Award, Heart } from 'lucide-react';

const PeopleSection = () => {
  const teamMembers = [
    {
      name: "Dr. Markus Weber",
      role: "Präsident SVP Stadt Zug",
      description: "Seit 8 Jahren im Stadtrat, Experte für Finanz- und Wirtschaftspolitik",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Müller",
      role: "Vizepräsidentin",
      description: "Unternehmerin und Mutter, setzt sich für Familienfreundlichkeit ein",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Thomas Schneider",
      role: "Stadtrat",
      description: "Jurist, kämpft für Rechtssicherheit und bürgernahe Verwaltung",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Andrea Kaufmann",
      role: "Grossstadträtin",
      description: "Lehrerin und Bildungsexpertin, engagiert für beste Schulen",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "33 Jahre Erfahrung",
      description: "Kontinuierliche Arbeit für Zug seit 1991"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Über 800 Mitglieder",
      description: "Starke Verankerung in der Bevölkerung"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Bürgernah",
      description: "Direkte Kommunikation und Lösungsorientierung"
    }
  ];

  return (
    <section id="people" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Wer wir sind
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unsere erfahrenen Politikerinnen und Politiker setzen sich täglich für eine 
            lebenswerte Stadt Zug ein. Mit Kompetenz, Engagement und Bürgernähe.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-svp-green to-svp-green-light rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card-people group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-svp-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-svp-green to-svp-green-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Werden Sie Teil unseres Teams
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Gemeinsam gestalten wir die Zukunft von Zug. Engagieren Sie sich politisch!
            </p>
            <button className="btn-hero bg-white text-svp-green hover:bg-gray-100">
              Jetzt mitmachen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;