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
  // Always show the highest-ranking primary office as the headline badge.
  // Only show additional tags if explicitly provided (and not duplicating the primary).
  const allRoles = [personalData.position, ...(roles ?? []).filter((role) => role !== personalData.position)];

  return (
    <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
      <div className="w-full md:w-auto flex justify-center lg:justify-start">
        <div className="relative">
          <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))] shadow-lg">
            <img
              src={image}
              alt={`${personalData.name} - ${personalData.position}`}
              className="w-full h-full object-cover"
              width="240"
              height="240"
              loading="lazy"
              style={{
                transform: imageScale ? `scale(${imageScale})` : undefined,
                transformOrigin: 'center center',
                objectPosition: objectPosition || 'center top',
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          {personalData.name}
        </h1>
        {/* Intentionally no subtitle/description line below the name. */}
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

