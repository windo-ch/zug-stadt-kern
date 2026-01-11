import { ReactNode } from 'react';

interface TimelineProps {
  children: ReactNode;
  variant?: 'default' | 'history'; // history variant for Geschichte page
  className?: string;
}

/**
 * Timeline - Container component for timeline items
 * 
 * Handles:
 * - Vertical gradient line
 * - Spacing and layout
 * - Variant support for different contexts
 * 
 * Usage:
 * ```tsx
 * <Timeline>
 *   <TimelineItem ... />
 *   <TimelineItem ... />
 * </Timeline>
 * ```
 */
const Timeline = ({ children, variant = 'default', className = '' }: TimelineProps) => {
  // Default variant - matches Wahlen page (gradient line)
  if (variant === 'default') {
    return (
      <div className={`relative ${className}`}>
        {/* Timeline line - gradient */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--svp-green))] via-[hsl(var(--swiss-blue))] to-[hsl(var(--svp-orange))]"></div>
        
        <div className="space-y-8">
          {children}
        </div>
      </div>
    );
  }

  // History variant - for Geschichte page (different styling)
  return (
    <div className={`relative ${className}`}>
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
};

export default Timeline;

