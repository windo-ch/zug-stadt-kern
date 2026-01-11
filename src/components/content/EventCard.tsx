import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Event } from '@/types/event';

interface EventCardProps {
  event: Event;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

/**
 * EventCard - Reusable event display card component
 * 
 * Variants:
 * - default: Standard event card for WasAnsteht (date badge, title, time/location, type badge)
 * - compact: Smaller card for lists
 * - detailed: For detailed event views (uses ClubEvent type, implemented separately)
 * 
 * Usage:
 * ```tsx
 * <EventCard 
 *   event={eventData}
 *   variant="default"
 * />
 * ```
 */
const EventCard = ({ event, variant = 'default', className = '' }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('de-CH', { month: 'short' }),
      full: date.toLocaleDateString('de-CH', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
  };

  const dateInfo = formatDate(event.date);

  // Default variant - matches WasAnsteht style
  if (variant === 'default') {
    return (
      <Card className={`hover:shadow-lg transition-shadow ${className}`}>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg text-center min-w-[60px]">
              <div className="text-lg font-bold">{dateInfo.day}</div>
              <div className="text-xs">{dateInfo.month}</div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                {event.time && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                )}
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
            </div>
          </div>
          {event.description && (
            <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
          )}
          <Badge variant="outline">{event.type}</Badge>
        </CardContent>
      </Card>
    );
  }

  // Compact variant - smaller card
  if (variant === 'compact') {
    return (
      <Card className={`hover:shadow-md transition-shadow ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{dateInfo.full}</span>
          </div>
          <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
          <p className="text-xs text-muted-foreground mb-2">{event.location}</p>
          <Badge variant="outline" className="text-xs">{event.type}</Badge>
        </CardContent>
      </Card>
    );
  }

  // Detailed variant - placeholder (would need ClubEvent type)
  return null;
};

export default EventCard;

