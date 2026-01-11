import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';
import { CheckCircle, Clock, Calendar, TrendingUp, Vote } from 'lucide-react';

interface TimelineItemProps {
  event: string;
  date: string;
  description: string;
  status?: 'completed' | 'in-progress' | 'upcoming' | 'election-day';
  icon?: LucideIcon;
  variant?: 'default' | 'history';
  className?: string;
}

/**
 * TimelineItem - Individual timeline item component
 * 
 * Handles:
 * - Icon circle with status-based colors
 * - Event card with date badge
 * - Special styling for election-day
 * - Preserves Wahlen page timeline styling exactly
 * 
 * Usage:
 * ```tsx
 * <TimelineItem
 *   event="Kandidatensuche"
 *   date="Jetzt"
 *   description="Wir suchen engagierte Kandidaten"
 *   status="in-progress"
 * />
 * ```
 */
const TimelineItem = ({
  event,
  date,
  description,
  status = 'upcoming',
  icon: Icon,
  variant = 'default',
  className = ''
}: TimelineItemProps) => {
  // Get icon based on status if not provided (matches Wahlen page)
  const getDefaultIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle;
      case 'in-progress':
        return TrendingUp;
      case 'election-day':
        return Vote;
      default:
        return Clock;
    }
  };

  const IconComponent = Icon || getDefaultIcon(status);

  // Get color class based on status (matches Wahlen styling exactly)
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-[hsl(var(--svp-green))] border-[hsl(var(--svp-green))]';
      case 'in-progress':
        return 'bg-[hsl(var(--swiss-blue))] border-[hsl(var(--swiss-blue))]';
      case 'election-day':
        return 'bg-gradient-to-br from-[hsl(var(--svp-orange))] to-[hsl(var(--svp-green))] border-[hsl(var(--svp-green))]';
      default:
        return 'bg-muted border-border';
    }
  };

  const colorClass = getStatusColor(status);
  const isElectionDay = status === 'election-day';

  if (variant === 'history') {
    // History variant for Geschichte page (different structure)
    return (
      <div className={`relative ${className}`}>
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle>{event}</CardTitle>
            <Badge variant="outline">{date}</Badge>
            <p className="text-muted-foreground mt-2">{description}</p>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // Default variant - matches Wahlen page exactly
  return (
    <div className={`relative pl-16 md:pl-24 ${className}`}>
      {/* Icon circle */}
      <div className={`absolute left-0 md:left-6 w-12 h-12 ${colorClass} rounded-full flex items-center justify-center text-white border-4 border-background shadow-[var(--shadow-medium)] transform -translate-x-1/2 md:translate-x-0 z-10`}>
        <IconComponent className="h-6 w-6" />
      </div>
      
      {/* Content card */}
      <Card className={`card-elevated hover:shadow-[var(--shadow-strong)] transition-[var(--transition-smooth)] ${isElectionDay ? 'border-2 border-[hsl(var(--svp-orange))]/30 bg-gradient-to-br from-background to-[hsl(var(--svp-orange))]/5' : ''}`}>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
            <div>
              <CardTitle className={`text-xl ${isElectionDay ? 'text-[hsl(var(--svp-orange))]' : 'text-foreground'}`}>
                {event}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {description}
              </p>
            </div>
            <Badge className={`w-fit ${isElectionDay ? 'bg-gradient-to-r from-[hsl(var(--svp-orange))] to-[hsl(var(--svp-green))] text-white border-0' : 'bg-muted text-muted-foreground'} font-semibold`}>
              {date}
            </Badge>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TimelineItem;

