import { Link } from 'react-router-dom';
import { useCountUp } from '@/hooks/useCountUp';

const StatsSection = () => {
  // Stat Card Component with Count-up Animation - Design System Aligned
  const StatCard = ({ 
    value, 
    suffix, 
    label, 
    sublabel, 
    link 
  }: { 
    value: number; 
    suffix: string; 
    label: string; 
    sublabel: string; 
    link: string | null;
  }) => {
    const { count, elementRef } = useCountUp(value, { duration: 2000, startOnView: true });
    
    const content = (
      <div 
        ref={elementRef}
        className="relative group min-w-[140px] p-6 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/25 hover:border-white/40 transition-[var(--transition-smooth)] hover:scale-105 hover:shadow-[var(--shadow-strong)] cursor-pointer overflow-hidden"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--svp-green))]/20 to-[hsl(var(--svp-green-light))]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
        <div className="relative text-center">
          <div className="text-5xl font-bold bg-gradient-to-r from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
            {count}{suffix}
          </div>
          <div className="text-base font-semibold text-foreground/90 group-hover:text-foreground transition-colors">
            {label}
          </div>
          {sublabel && (
            <div className="text-sm text-foreground/70 mt-1">
              {sublabel}
            </div>
          )}
        </div>
      </div>
    );

    if (link) {
      return <Link to={link} className="block">{content}</Link>;
    }
    return content;
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="flex flex-wrap justify-center gap-4 md:grid md:grid-cols-4 md:gap-6">
          <StatCard
            value={33}
            suffix=""
            label="Jahre"
            sublabel="für Stadt Zug"
            link="/geschichte"
          />
          <StatCard
            value={200}
            suffix="+"
            label="Mitglieder"
            sublabel=""
            link={null}
          />
          <StatCard
            value={8}
            suffix=""
            label="Sitze"
            sublabel="im GGR"
            link={null}
          />
          <StatCard
            value={25}
            suffix="%"
            label="Wähleranteil"
            sublabel="2022"
            link={null}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

