import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: { text: string; variant?: 'default' | 'outline' | 'secondary' };
  alignment?: 'center' | 'left';
  className?: string;
}

/**
 * SectionHeader - Standardized section header component
 * 
 * Handles:
 * - Title and description
 * - Optional badge
 * - Alignment options (center or left)
 * - Consistent styling across all sections
 * 
 * Usage:
 * ```tsx
 * <SectionHeader 
 *   title="Section Title"
 *   description="Section description text"
 *   badge={{ text: "Badge", variant: "outline" }}
 *   alignment="center"
 * />
 * ```
 */
const SectionHeader = ({
  title,
  description,
  badge,
  alignment = 'center',
  className = ''
}: SectionHeaderProps) => {
  const alignmentClasses = alignment === 'center' 
    ? 'text-center' 
    : 'text-left';

  return (
    <div className={`mb-12 ${alignmentClasses} ${className}`}>
      {badge && (
        <Badge variant={badge.variant || 'outline'} className="mb-4">
          {badge.text}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

