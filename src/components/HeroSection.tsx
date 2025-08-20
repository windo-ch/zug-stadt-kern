import { ArrowRight, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/zug-hero.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToValues = () => {
    const element = document.querySelector('#values');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center space-x-3">
              <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-semibold text-sm">SVP Stadt Zug</span>
              </div>
              <Link to="/wahlen" className="px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 hover:bg-secondary/20 transition-colors">
                <span className="text-secondary font-semibold text-sm">Kommunalwahlen 2026</span>
              </Link>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-svp-orange to-svp-green bg-clip-text text-transparent">
                Mir liefered
              </span>{' '}
              <span className="text-white">–</span>{' '}
              <span className="bg-gradient-to-r from-svp-green to-svp-green-light bg-clip-text text-transparent">
                für eusi Stadt Zug
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Wir setzen uns für eine sichere, freie und lebenswerte Stadt Zug ein – 
              direkt, bürgernah und lösungsorientiert. Für starke Familien, sichere Quartiere 
              und eine florierende Wirtschaft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToContact}
                className="btn-hero group"
              >
                <Users className="mr-2 h-5 w-5" />
                Mitmachen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={scrollToValues}
                className="btn-outline group"
              >
                <Target className="mr-2 h-5 w-5" />
                Unsere Ziele
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link to="/geschichte" className="text-center p-4 hover:bg-muted/50 rounded-lg transition-colors group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">33</div>
                <div className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">Jahre Bestand</div>
              </Link>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm font-semibold text-muted-foreground">Aktive Mitglieder</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm font-semibold text-muted-foreground">Sitze im Parlament</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm font-semibold text-muted-foreground">Wähleranteil 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;