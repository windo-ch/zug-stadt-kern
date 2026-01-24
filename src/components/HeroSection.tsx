import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/places/zug/zug-overview-svp_3.jpg)'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-max">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[hsl(var(--svp-green-light))] to-[hsl(var(--svp-green))] bg-clip-text text-transparent">
                Mir lieferet
              </span>{' '}
              <span className="bg-gradient-to-r from-[hsl(var(--svp-green))] via-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] bg-clip-text text-transparent">
                – für eine starke Stadt Zug
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Wir setzen uns für eine sichere, freie und lebenswerte Stadt Zug ein – 
              direkt, bürgernah und lösungsorientiert. Für starke Familien, sichere Quartiere 
              und eine florierende Wirtschaft.
            </p>

            <div className="flex justify-start">
              <Link to="/wahlen">
                <Button 
                  className="btn-hero group text-2xl px-12 py-8"
                >
                  <Calendar className="mr-3 h-7 w-7" />
                  Wahlen 2026
                  <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;