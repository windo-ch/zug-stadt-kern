import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

export type ProfileListItem = string | { label: string; href: string };

interface ProfileListSectionProps {
  title: string;
  items: ProfileListItem[];
  icon?: React.ComponentType<{ className?: string }>;
  variant?: 'default' | 'compact';
  className?: string;
}

/**
 * ProfileListSection - Reusable list section component for profile pages
 * 
 * Displays lists of items (commissions, positions, education, etc.) in a card format.
 * Supports both default and compact variants.
 */
const ProfileListSection = memo(({ 
  title, 
  items, 
  icon: Icon, 
  variant = 'default',
  className = '' 
}: ProfileListSectionProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  const itemPadding = variant === 'compact' ? 'p-2' : 'p-3';
  const itemSpacing = variant === 'compact' ? 'space-y-2' : 'space-y-3';
  const textSize = variant === 'compact' ? 'text-sm' : 'text-sm';

  return (
    <Card className={`shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <CardTitle className={Icon ? "flex items-center text-xl" : "text-xl"}>
          {Icon && <Icon className="w-6 h-6 mr-3 text-primary" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={itemSpacing}>
          {items.map((item, index) => {
            const label = typeof item === "string" ? item : item.label;
            const href = typeof item === "string" ? undefined : item.href;
            return (
            <div key={index} className={`flex items-start ${itemPadding} bg-muted/20 rounded-lg`}>
              <div className={`w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0`}></div>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${textSize} hover:text-primary underline-offset-2 hover:underline`}
                >
                  {label}
                </a>
              ) : (
                <span className={`text-muted-foreground ${textSize}`}>{label}</span>
              )}
            </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
});

ProfileListSection.displayName = 'ProfileListSection';

export default ProfileListSection;

