import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MitmachenSection = () => {
  const engagementOptions = [
    {
      title: "Mitglied werden",
      description: "Werden Sie Teil unserer Partei",
      link: "/mitglied-werden",
      image: "/assets/events/general/Edit_SVP_Zug00139-min-scaled.jpg"
    },
    {
      title: "Bei Aktionen helfen",
      description: "Engagieren Sie sich aktiv",
      link: "/kontakt",
      image: "/assets/mirlieferet-images/svp-bei-aktionen-helfen.jpg"
    },
    {
      title: "Spenden",
      description: "Unterstützen Sie unsere Arbeit",
      link: "/spenden",
      image: "/assets/events/general/Edit_SVP_Zug00390-min-scaled.jpg"
    }
  ];

  return (
    <section id="mitmachen" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Mitmachen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engagieren Sie sich für eine starke Stadt Zug.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementOptions.map((option, index) => {
            return (
              <Link
                key={index}
                to={option.link}
                className="group relative overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300 h-[400px] md:h-[450px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/40"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-center">
                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-foreground/90 text-base leading-relaxed mb-6">
                      {option.description}
                    </p>
                    <Button 
                      variant="outline"
                      className="bg-white/90 hover:bg-[hsl(var(--svp-green))] hover:text-white border-white/80 hover:border-[hsl(var(--svp-green))] text-foreground w-full transition-colors"
                    >
                      Mehr erfahren
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MitmachenSection;

