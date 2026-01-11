import { Link } from 'react-router-dom';
import { ArrowRight, History, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StrategySection = () => {
  return (
    <section id="strategy" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Unsere Strategie
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Als noch junge Partei, gegründet 1992, ist es unser Ziel, unsere Standpunkte zu vertreten 
            und die sich bietenden Potenziale besser auszuschöpfen sowie unsere Parteibasis mittel- 
            bzw. langfristig auszubauen und in der Stadt Zug zu verankern.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed mb-12">
          <p>
            Aus diesem Grund hat der Vorstand der SVP Stadt Zug eine geschärfte Strategie bis 2026 entwickelt. 
            Sie gilt als übergeordnetes Leitmotiv der Parteitätigkeit und hat zum Ziel das Wahlergebnis der 
            SVP Stadt Zug nochmals zu verbessern. Diese Strategie ist nur dann erfolgreich, wenn wir auf eine 
            stärkere Verankerung der Parteibasis zurückgreifen und zählen können.
          </p>
          
          <p>
            In der Stadt wie Zug erreichen wir dies mit zusätzlichen und gezielten Aktivierung unserer Netzwerke. 
            Jeder persönliche Kontakt, jeder Handschlag, jeder gemeinsame Aperitif sind eine Stimme für die SVP. 
            Unsere Partei-Strategie richtet sich demnach nach ganz bewusst nach aussen und nach innen. Ein grösserer 
            Wirkungskreis, eine grössere Akzeptanz in der Bevölkerung und ein daraus resultierendes Resultat sind 
            die logischen Folgen.
          </p>
          
          <p>
            Wir erreichen dies mit sehr gezielten Botschaften einer persönlichen Werben von Neumitgliedern und 
            aktiven Mitarbeitenden.
          </p>
        </div>

        {/* Links to related pages */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/geschichte">
            <Button className="btn-outline group text-lg px-8 py-6">
              <History className="mr-2 h-5 w-5" />
              Unsere Geschichte
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/wahlen">
            <Button className="btn-hero group text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Wahlen 2026
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
