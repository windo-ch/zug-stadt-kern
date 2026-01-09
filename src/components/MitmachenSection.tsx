import { Link } from 'react-router-dom';
import { Users, HandHeart, DollarSign, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MitmachenSection = () => {
  const engagementOptions = [
    {
      icon: Users,
      title: "Mitglied werden",
      description: "Werden Sie Teil unserer Bewegung",
      link: "/mitglied-werden",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: HandHeart,
      title: "Bi Aktione helfe",
      description: "Engagieren Sie sich aktiv",
      link: "/kontakt",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Spende",
      description: "Unterstützen Sie unsere Arbeit",
      link: "/spenden",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Trophy,
      title: "1000er-Club",
      description: "Exklusiver Förderkreis",
      link: "/1000er-club",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="mitmachen" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mach mit!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mir bruched dich. Engagieren Sie sich für eine starke Stadt Zug.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagementOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Link
                key={index}
                to={option.link}
                className="card-overview group hover:scale-105 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {option.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MitmachenSection;

