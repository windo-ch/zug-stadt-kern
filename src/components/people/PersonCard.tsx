import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Person } from '@/types/person';

interface PersonCardProps {
  person: Person;
  variant?: 'grid' | 'compact' | 'carousel';
  showContact?: boolean;
  showAddress?: boolean;
  borderAccent?: 'primary' | 'secondary' | 'none';
  className?: string;
}

/**
 * PersonCard - Reusable person/member card component
 * 
 * Variants:
 * - grid: Full card layout for Vorstand/Stadtrat pages (default)
 * - compact: Smaller card for lists/grids
 * - carousel: For carousel display (uses CircularAvatar component)
 * 
 * NOTE: This component preserves the exact styling from Vorstand/Stadtrat pages.
 * PeopleSection style (circular avatars) should NOT be modified.
 */
const PersonCard = ({
  person,
  variant = 'grid',
  showContact = true,
  showAddress = true,
  borderAccent = 'none',
  className = ''
}: PersonCardProps) => {
  // Grid variant - matches Vorstand/Stadtrat card styling exactly
  if (variant === 'grid') {
    const borderClasses = {
      primary: 'border-l-4 border-l-primary',
      secondary: 'border-l-4 border-l-secondary',
      none: ''
    };

    const cardContent = (
      <Card className={`h-full hover:shadow-lg transition-shadow ${borderClasses[borderAccent]} ${className}`}>
        <CardHeader>
          <div className="flex items-start space-x-4">
            <div className={`${person.isPresident ? 'w-20 h-20' : 'w-20 h-20'} rounded-full overflow-hidden flex-shrink-0`}>
              <img
                src={person.image}
                alt={`Foto von ${person.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <CardTitle className="text-xl mb-1">{person.name}</CardTitle>
              <Badge 
                variant={person.isPresident ? 'default' : 'secondary'} 
                className={person.isPresident ? 'bg-primary text-primary-foreground mb-2' : 'mb-2'}
              >
                {person.position}
              </Badge>
              {person.isFraktionschef && (
                <Badge className="bg-secondary text-secondary-foreground mb-2 ml-2">Fraktionschef</Badge>
              )}
              {person.roles && person.roles.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {person.roles.map((role, roleIndex) => (
                    <Badge key={roleIndex} variant="outline" className="text-xs">
                      {role}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {person.description && (
            <p className="text-muted-foreground mb-4">{person.description}</p>
          )}
          
          {person.profileLink && (
            <div className="mt-4">
              <Link 
                to={person.profileLink}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Zum Profil
                <ExternalLink className="w-3 h-3 ml-1" />
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    );

    // Wrap in Link if profileLink exists and we're not already inside a link context
    if (person.profileLink && !className.includes('no-link')) {
      return (
        <Link to={person.profileLink} className="block">
          {cardContent}
        </Link>
      );
    }

    return cardContent;
  }

  // Compact variant - smaller card for lists
  if (variant === 'compact') {
    return (
      <Card className={`hover:shadow-lg transition-shadow ${className}`}>
        <CardHeader>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={person.image}
                alt={`Foto von ${person.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <CardTitle className="text-lg mb-1">{person.name}</CardTitle>
              <Badge variant="outline" className="text-xs mb-2">{person.position}</Badge>
              {person.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">{person.description}</p>
              )}
            </div>
          </div>
        </CardHeader>
        {showContact && person.profileLink && (
          <CardContent>
            <Link to={person.profileLink}>
              <Button variant="outline" size="sm">
                Profil ansehen
              </Button>
            </Link>
          </CardContent>
        )}
      </Card>
    );
  }

  // Carousel variant - uses CircularAvatar (for future use, not modifying PeopleSection yet)
  // This is a placeholder - PeopleSection should continue using its current implementation
  return null;
};

export default PersonCard;

