import { memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProfileQuoteCardProps {
  quote: string;
  className?: string;
}

/**
 * ProfileQuoteCard - Quote card component for profile pages
 * 
 * Displays a quote/statement in a clean, elegant format.
 */
const ProfileQuoteCard = memo(({ quote, className = '' }: ProfileQuoteCardProps) => {
  return (
    <Card className={`bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 shadow-lg ${className}`}>
      <CardContent className="p-8">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">"</span>
          </div>
          <div className="flex-grow">
            <blockquote className="text-xl lg:text-2xl italic text-foreground leading-relaxed">
              {quote}
            </blockquote>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

ProfileQuoteCard.displayName = 'ProfileQuoteCard';

export default ProfileQuoteCard;

