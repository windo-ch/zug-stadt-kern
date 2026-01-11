import { Badge } from '@/components/ui/badge';
import { BadgeProps } from '@/components/ui/badge';

interface StatusBadgeProps extends Omit<BadgeProps, 'variant'> {
  status: 'active' | 'pending' | 'completed' | 'cancelled' | 'in-progress' | string;
  variant?: 'default' | 'outline';
}

/**
 * StatusBadge - Standardized status badge with design system colors
 * 
 * Maps status values to appropriate colors from design system.
 * 
 * Usage:
 * ```tsx
 * <StatusBadge status="active">Aktiv</StatusBadge>
 * <StatusBadge status="completed" variant="outline">Abgeschlossen</StatusBadge>
 * ```
 */
const StatusBadge = ({ status, variant = 'default', className = '', ...props }: StatusBadgeProps) => {
  // Map status to design system colors
  const statusClasses: Record<string, string> = {
    active: variant === 'outline' 
      ? 'border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))] bg-[hsl(var(--svp-green))]/5'
      : 'bg-[hsl(var(--svp-green))] text-white border-[hsl(var(--svp-green))]',
    pending: variant === 'outline'
      ? 'border-[hsl(var(--svp-orange))] text-[hsl(var(--svp-orange))] bg-[hsl(var(--svp-orange))]/5'
      : 'bg-[hsl(var(--svp-orange))] text-white border-[hsl(var(--svp-orange))]',
    completed: variant === 'outline'
      ? 'border-[hsl(var(--success))] text-[hsl(var(--success))] bg-[hsl(var(--success))]/5'
      : 'bg-[hsl(var(--success))] text-white border-[hsl(var(--success))]',
    cancelled: variant === 'outline'
      ? 'border-[hsl(var(--destructive))] text-[hsl(var(--destructive))] bg-[hsl(var(--destructive))]/5'
      : 'bg-[hsl(var(--destructive))] text-white border-[hsl(var(--destructive))]',
    'in-progress': variant === 'outline'
      ? 'border-[hsl(var(--swiss-blue))] text-[hsl(var(--swiss-blue))] bg-[hsl(var(--swiss-blue))]/5'
      : 'bg-[hsl(var(--swiss-blue))] text-white border-[hsl(var(--swiss-blue))]'
  };

  const statusClass = statusClasses[status.toLowerCase()] || (variant === 'outline' ? 'border-border text-foreground' : '');

  return (
    <Badge 
      variant={variant === 'outline' ? 'outline' : 'default'}
      className={`${statusClass} ${className}`}
      {...props}
    />
  );
};

export default StatusBadge;

