import { Badge } from '@/components/ui/badge';
import { BadgeProps } from '@/components/ui/badge';

interface TypeBadgeProps extends Omit<BadgeProps, 'variant'> {
  type: 'vortrag' | 'anlass' | 'abstimmung' | 'versammlung' | 'stand' | 'initiative' | 'motion' | 'interpellation' | 'postulat' | string;
  variant?: 'default' | 'outline';
}

/**
 * TypeBadge - Standardized type badge with design system colors
 * 
 * Maps event/vote/motion types to appropriate colors from design system.
 * 
 * Usage:
 * ```tsx
 * <TypeBadge type="vortrag">Vortrag</TypeBadge>
 * <TypeBadge type="motion" variant="outline">Motion</TypeBadge>
 * ```
 */
const TypeBadge = ({ type, variant = 'default', className = '', ...props }: TypeBadgeProps) => {
  // Map types to design system colors based on usage patterns
  const typeClasses: Record<string, string> = {
    // Event types
    vortrag: variant === 'outline'
      ? 'border-[hsl(var(--swiss-blue))] text-[hsl(var(--swiss-blue))] bg-[hsl(var(--swiss-blue))]/5'
      : 'bg-[hsl(var(--swiss-blue))] text-white',
    anlass: variant === 'outline'
      ? 'border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))] bg-[hsl(var(--svp-green))]/5'
      : 'bg-[hsl(var(--svp-green))] text-white',
    abstimmung: variant === 'outline'
      ? 'border-[hsl(var(--svp-orange))] text-[hsl(var(--svp-orange))] bg-[hsl(var(--svp-orange))]/5'
      : 'bg-[hsl(var(--svp-orange))] text-white',
    versammlung: variant === 'outline'
      ? 'border-[hsl(var(--swiss-blue))] text-[hsl(var(--swiss-blue))] bg-[hsl(var(--swiss-blue))]/5'
      : 'bg-[hsl(var(--swiss-blue))] text-white',
    stand: variant === 'outline'
      ? 'border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))] bg-[hsl(var(--svp-green))]/5'
      : 'bg-[hsl(var(--svp-green))] text-white',
    initiative: variant === 'outline'
      ? 'border-[hsl(var(--svp-orange))] text-[hsl(var(--svp-orange))] bg-[hsl(var(--svp-orange))]/5'
      : 'bg-[hsl(var(--svp-orange))] text-white',
    // Motion types
    motion: variant === 'outline'
      ? 'border-[hsl(var(--swiss-blue))] text-[hsl(var(--swiss-blue))] bg-[hsl(var(--swiss-blue))]/5'
      : 'bg-[hsl(var(--swiss-blue))] text-white',
    interpellation: variant === 'outline'
      ? 'border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))] bg-[hsl(var(--svp-green))]/5'
      : 'bg-[hsl(var(--svp-green))] text-white',
    postulat: variant === 'outline'
      ? 'border-[hsl(var(--svp-orange))] text-[hsl(var(--svp-orange))] bg-[hsl(var(--svp-orange))]/5'
      : 'bg-[hsl(var(--svp-orange))] text-white'
  };

  const typeClass = typeClasses[type.toLowerCase()] || (variant === 'outline' ? 'border-border text-foreground' : '');

  return (
    <Badge 
      variant={variant === 'outline' ? 'outline' : 'default'}
      className={`${typeClass} ${className}`}
      {...props}
    />
  );
};

export default TypeBadge;

