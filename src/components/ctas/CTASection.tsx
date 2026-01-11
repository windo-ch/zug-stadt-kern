import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ButtonConfig {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
}

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
  icon?: LucideIcon;
  variant?: 'default' | 'gradient';
  showDecorative?: boolean;
  className?: string;
}

/**
 * CTASection - Standardized call-to-action section component
 * 
 * Handles:
 * - Consistent CTA section styling
 * - Primary and optional secondary button
 * - Optional icon badge
 * - Decorative background elements
 * - Design system aligned
 * 
 * Usage:
 * ```tsx
 * <CTASection
 *   title="Werden Sie Teil unseres Teams"
 *   description="Interessieren Sie sich für eine Kandidatur?"
 *   primaryButton={{
 *     text: "Kontakt aufnehmen",
 *     href: "/kontakt",
 *     variant: "primary",
 *     icon: Users
 *   }}
 *   secondaryButton={{
 *     text: "Mitglied werden",
 *     href: "/mitglied-werden",
 *     variant: "outline"
 *   }}
 *   icon={Zap}
 * />
 * ```
 */
const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  icon: Icon,
  variant = 'default',
  showDecorative = true,
  className = ''
}: CTASectionProps) => {
  const renderButton = (button: ButtonConfig) => {
    const IconComponent = button.icon;
    const buttonClasses = {
      primary: 'btn-hero group text-lg px-8 py-6',
      secondary: 'btn-secondary group text-lg px-8 py-6',
      outline: 'btn-outline group text-lg px-8 py-6'
    };

    return (
      <Link to={button.href}>
        <Button className={buttonClasses[button.variant || 'primary']}>
          {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
          {button.text}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    );
  };

  const sectionClasses = variant === 'gradient' 
    ? 'section-padding bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-[hsl(var(--svp-green-light))]/5 to-background relative overflow-hidden'
    : 'section-padding bg-muted/30';

  return (
    <section className={`${sectionClasses} ${className}`}>
      {showDecorative && variant === 'gradient' && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 bg-[hsl(var(--svp-green))] rounded-full blur-3xl"></div>
        </div>
      )}
      
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {Icon && (
            <div className="inline-block mb-6">
              <div className="p-4 bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] rounded-2xl shadow-[var(--shadow-strong)]">
                <Icon className="w-10 h-10 text-white mx-auto" />
              </div>
            </div>
          )}
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {renderButton(primaryButton)}
            {secondaryButton && renderButton(secondaryButton)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

