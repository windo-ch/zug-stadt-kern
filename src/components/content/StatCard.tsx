import { Link } from 'react-router-dom';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  link?: string | null;
  variant?: 'hero' | 'default'; // hero variant for HeroSection (glassmorphism), default for other pages
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

/**
 * StatCard - Reusable statistics/number display card
 * 
 * Features:
 * - Optional count-up animation (via useCountUp hook)
 * - Support for hero variant (glassmorphism) and default variant
 * - Hover effects with shine animation
 * - Optional icon
 * - Optional link
 * 
 * Variants:
 * - hero: Glassmorphism style for HeroSection (white/backdrop-blur)
 * - default: Standard card style for other pages
 * 
 * Usage:
 * ```tsx
 * <StatCard 
 *   value={33} 
 *   suffix=" Jahre"
 *   label="Für Zug im Einsatz"
 *   sublabel="Seit 1991"
 *   link="/geschichte"
 *   variant="hero"
 * />
 * ```
 */
const StatCard = ({
  value,
  suffix = '',
  label,
  sublabel,
  link = null,
  variant = 'default',
  icon: Icon,
  className = ''
}: StatCardProps) => {
  const { count, elementRef } = useCountUp(value, { duration: 2000, startOnView: true });
  
  // Hero variant - glassmorphism style (from HeroSection)
  if (variant === 'hero') {
    const content = (
      <div 
        ref={elementRef}
        className={`relative group min-w-[140px] p-6 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/25 hover:border-white/40 transition-[var(--transition-smooth)] hover:scale-105 hover:shadow-[var(--shadow-strong)] cursor-pointer ${className}`}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--svp-green))]/20 to-[hsl(var(--svp-green-light))]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-xl"></div>
        <div className="relative text-center">
          {Icon && (
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          )}
          <div className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
            {count}{suffix}
          </div>
          <div className="text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors">
            {label}
          </div>
          {sublabel && (
            <div className="text-xs text-foreground/70 mt-1">
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
  }

  // Default variant - standard card style (for WerWirSind, etc.)
  const content = (
    <div 
      ref={elementRef}
      className={`text-center hover:shadow-lg transition-shadow p-6 ${className}`}
    >
      {Icon && (
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      )}
      <div className="text-3xl font-bold text-foreground mb-2">
        {count}{suffix}
      </div>
      <div className="font-semibold text-foreground mb-1">
        {label}
      </div>
      {sublabel && (
        <p className="text-sm text-muted-foreground">
          {sublabel}
        </p>
      )}
    </div>
  );

  if (link) {
    return <Link to={link} className="block">{content}</Link>;
  }
  return content;
};

export default StatCard;

