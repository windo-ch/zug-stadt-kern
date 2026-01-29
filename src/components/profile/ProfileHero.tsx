import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { PersonalData } from '@/types/profile';

interface ProfileHeroProps {
  personalData: PersonalData;
  image: string;
  description?: string;
  roles?: string[];
  imageScale?: number;
  objectPosition?: string;
}

/**
 * ProfileHero - Hero section component for profile pages
 * 
 * Displays profile image, name, position, description, and role badges.
 * Includes optimized image loading with lazy loading and error handling.
 */
const ProfileHero = memo(({ personalData, image, description, roles, imageScale, objectPosition }: ProfileHeroProps) => {
  // Combine position and roles, avoiding duplication
  const allRoles = roles && roles.length > 0 
    ? [personalData.position, ...roles.filter(role => role !== personalData.position)]
    : [personalData.position];

  return (
    <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
      <div className="w-full md:w-60 lg:w-80 aspect-square md:aspect-auto md:h-60 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
        <img 
          src={image} 
          alt={`${personalData.name} - ${personalData.position}`}
          className="w-full h-full object-cover"
          width="320"
          height="320"
          loading="lazy"
          style={{
            transform: imageScale ? `scale(${imageScale})` : undefined,
            transformOrigin: 'center top',
            objectPosition: objectPosition || 'center center'
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Fallback to a placeholder or hide the image
            target.style.display = 'none';
          }}
        />
      </div>
      <div className="flex-grow">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          {personalData.name}
        </h1>
        {description && (
          <p className="text-xl text-muted-foreground mb-4">
            {description}
          </p>
        )}
        {allRoles.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {allRoles.map((role, index) => (
              <Badge key={index} variant="outline" className="bg-primary/5">
                {role}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

ProfileHero.displayName = 'ProfileHero';

export default ProfileHero;

