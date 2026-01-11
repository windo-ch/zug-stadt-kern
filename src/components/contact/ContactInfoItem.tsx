import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  content: string | ReactNode;
  description?: string;
  action?: string; // URL for link
  variant?: 'default' | 'card'; // card variant wraps in Card component
  className?: string;
}

/**
 * ContactInfoItem - Reusable contact information display component
 * 
 * Displays contact info with icon, title, content, and optional description/action link.
 * Matches styling from Kontakt page and ContactSection.
 * 
 * Variants:
 * - default: Simple flex layout (for inline use)
 * - card: Wrapped in Card component (for Kontakt page style)
 * 
 * Usage:
 * ```tsx
 * <ContactInfoItem
 *   icon={MapPin}
 *   title="Adresse"
 *   content="SVP Stadt Zug, Postfach, 6300 Zug"
 *   description="Geschäftsstelle"
 *   variant="card"
 * />
 * ```
 */
const ContactInfoItem = ({
  icon: Icon,
  title,
  content,
  description,
  action,
  variant = 'default',
  className = ''
}: ContactInfoItemProps) => {
  const iconContainer = (
    <div className={`${variant === 'card' ? 'w-10 h-10' : 'w-12 h-12'} bg-[hsl(var(--svp-green))]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[hsl(var(--svp-green))]/20 group-hover:border-[hsl(var(--svp-green))]/40 transition-colors`}>
      <Icon className={`${variant === 'card' ? 'w-5 h-5' : 'h-6 w-6'} text-[hsl(var(--svp-green))]`} />
    </div>
  );

  const contentElement = action ? (
    <a 
      href={action} 
      className="text-primary hover:text-primary/80 transition-colors font-medium"
    >
      {content}
    </a>
  ) : (
    <p className="text-foreground font-medium">{content}</p>
  );

  const contentBlock = (
    <>
      {iconContainer}
      <div className="flex-grow">
        <h3 className="font-semibold text-foreground">{title}</h3>
        {contentElement}
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </>
  );

  if (variant === 'card') {
    return (
      <Card className={className}>
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            {contentBlock}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default variant - simple flex layout
  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      {contentBlock}
    </div>
  );
};

export default ContactInfoItem;

