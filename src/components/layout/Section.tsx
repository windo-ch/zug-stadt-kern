import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'muted' | 'gradient' | 'hero';
  id?: string;
  className?: string; // For custom backgrounds or additional classes
  containerClassName?: string; // For custom container classes
}

/**
 * Section - Standard section wrapper component
 * 
 * Handles:
 * - Consistent section padding (section-padding)
 * - Container max width (container-max)
 * - Common background variants
 * - Optional custom classes for flexibility
 * 
 * Variants:
 * - default: Standard section with background
 * - muted: Gradient from background to muted
 * - gradient: Custom gradient (use className for specific gradients)
 * - hero: Hero section style (green gradient)
 * 
 * Usage:
 * ```tsx
 * <Section variant="muted" id="about">
 *   <div>content</div>
 * </Section>
 * 
 * <Section variant="hero" className="text-white">
 *   <div>hero content</div>
 * </Section>
 * ```
 */
const Section = ({ 
  children, 
  variant = 'default',
  id,
  className = '',
  containerClassName = ''
}: SectionProps) => {
  // Base classes - section-padding is always applied
  let baseClasses = 'section-padding';
  
  // Variant-specific background classes
  const variantClasses = {
    default: 'bg-background',
    muted: 'bg-gradient-to-b from-background via-background to-muted/20',
    gradient: 'bg-gradient-to-b from-background to-muted/20', // Default gradient, can be overridden
    hero: 'bg-gradient-to-br from-[hsl(var(--svp-green))] via-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] text-white relative overflow-hidden'
  };

  // Combine classes
  const sectionClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
  const containerClasses = `container-max ${containerClassName}`.trim();

  return (
    <section 
      id={id}
      className={sectionClasses}
    >
      <div className={containerClasses}>
        {children}
      </div>
    </section>
  );
};

export default Section;

