import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, User, GraduationCap, Target, Share2, Twitter } from 'lucide-react';
import ProtectedEmail from '@/components/ProtectedEmail';
import { Person } from '@/types/person';

interface ProfileSection {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  content: ReactNode;
  variant?: 'default' | 'highlight' | 'quote';
}

interface PersonProfileLayoutProps {
  person: Person & {
    born?: string;
    location?: string;
    maritalStatus?: string;
    profession?: string;
    children?: string;
  };
  breadcrumbPath: Array<{ label: string; href: string }>;
  quote?: string;
  biography?: string | ReactNode;
  sections?: ProfileSection[];
  // Common profile data
  commissions?: string[];
  positions?: string[];
  education?: string[];
  hobbies?: string[];
  clubs?: string[];
  // Optional custom sections (ReactNode for flexibility)
  customMainContent?: ReactNode;
  customSidebarContent?: ReactNode;
}

/**
 * PersonProfileLayout - Standardized profile page layout component
 * 
 * Handles:
 * - Breadcrumb navigation
 * - Hero section with image, badges, optional quote
 * - Main content area (biography, sections)
 * - Sidebar (contact, personal data, etc.)
 * - Consistent styling across all profile pages
 * 
 * Preserves exact current profile page styling and layout.
 * 
 * Usage:
 * ```tsx
 * <PersonProfileLayout
 *   person={personData}
 *   breadcrumbPath={[
 *     { label: "Home", href: "/" },
 *     { label: "Vorstand", href: "/vorstand" }
 *   ]}
 *   quote="Personal statement"
 *   biography={<BiographyContent />}
 *   sections={[...]}
 * />
 * ```
 */
const PersonProfileLayout = ({
  person,
  breadcrumbPath,
  quote,
  biography,
  sections = [],
  commissions = [],
  positions = [],
  education = [],
  hobbies = [],
  clubs = [],
  customMainContent,
  customSidebarContent
}: PersonProfileLayoutProps) => {
  const pageTitle = `${person.name} - Profil - SVP Stadt Zug`;
  const pageDescription = `${person.name} - ${person.position} der SVP Stadt Zug.`;

  return (
    <PageLayout title={pageTitle} description={pageDescription}>
      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            {breadcrumbPath.map((item, index) => (
              <span key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">&gt;</span>}
                <Link to={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </span>
            ))}
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">{person.name}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={person.image}
                alt={`${person.name} - ${person.position}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <Badge variant="secondary" className="mb-3 px-3 py-1">
                {person.position}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {person.name}
              </h1>
              {person.description && (
                <p className="text-xl text-muted-foreground mb-4">
                  {person.description}
                </p>
              )}
              {person.roles && person.roles.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {person.roles.map((role, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/5">
                      {role}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quote Card */}
          {quote && (
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">"</span>
                  </div>
                  <div>
                    <blockquote className="text-xl lg:text-2xl italic text-foreground mb-6 leading-relaxed">
                      {quote}
                    </blockquote>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button variant="default" size="sm" className="shadow-md hover:shadow-lg transition-all">
                        <Share2 className="w-4 h-4 mr-2" />
                        Statement teilen
                      </Button>
                      <Button variant="outline" size="sm" className="shadow-md hover:shadow-lg transition-all">
                        <Twitter className="w-4 h-4 mr-2" />
                        Auf X teilen
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {biography && (
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                  <CardTitle className="flex items-center text-xl">
                    <User className="w-6 h-6 mr-3 text-primary" />
                    Mein Werdegang
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {typeof biography === 'string' ? (
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground leading-relaxed">{biography}</p>
                    </div>
                  ) : (
                    biography
                  )}
                </CardContent>
              </Card>
            )}

            {/* Custom sections */}
            {sections.map((section, index) => {
              if (section.variant === 'quote') {
                return (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        {section.icon && <section.icon className="w-6 h-6 mr-3 text-primary" />}
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                  <CardContent className={section.variant === 'highlight' || (section.variant === 'default' && section.icon) ? 'p-6' : ''}>
                    {section.content}
                  </CardContent>
                  </Card>
                );
              }

              return (
                <Card key={index} className={`shadow-md hover:shadow-lg transition-shadow ${section.variant === 'highlight' ? 'border-l-4 border-l-primary' : ''}`}>
                  <CardHeader className={section.variant === 'highlight' ? 'bg-gradient-to-r from-primary/5 to-transparent' : section.variant === 'default' && section.icon ? 'bg-gradient-to-r from-primary/5 to-transparent' : ''}>
                    <CardTitle className={section.icon ? "flex items-center text-xl" : section.variant === 'default' ? "flex items-center text-xl" : ""}>
                      {section.icon && <section.icon className="w-6 h-6 mr-3 text-primary" />}
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={section.variant === 'highlight' ? 'p-6' : section.variant === 'default' && section.icon ? 'p-6' : ''}>
                    {section.content}
                  </CardContent>
                </Card>
              );
            })}

            {/* Auto-generated sections if data provided */}
            {commissions.length > 0 && (
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Mitgliedschaften Kommissionen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {commissions.map((commission, index) => (
                      <div key={index} className="flex items-start p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-medium">{commission}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {positions.length > 0 && (
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Ämter und weitere Tätigkeiten</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {positions.map((position, index) => (
                      <div key={index} className="flex items-start p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-medium text-sm">{position}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {customMainContent}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <Card className="shadow-lg border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Kontakt aufnehmen</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-4">
                  {person.contact?.phone && (
                    <a href={`tel:${person.contact.phone.replace(/\s/g, '')}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </a>
                  )}
                  {(person as any).mobile && (
                    <a href={`tel:${(person as any).mobile.replace(/\s/g, '')}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </a>
                  )}
                  {person.contact?.email && (
                    <a href={`mailto:${person.contact.email}`} className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                  )}
                </div>
                {person.contact?.email && (
                  <Button className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    E-Mail senden
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Personal Data */}
            {(person.born || person.maritalStatus || person.profession || person.children || person.address || person.location || person.contact?.address) && (
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary" />
                    Personalien
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(person.born || person.maritalStatus || person.profession || person.children) && (
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {person.born && (
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium text-foreground block">Geboren:</span>
                          <p className="text-muted-foreground">{person.born}</p>
                        </div>
                      )}
                      {person.maritalStatus && (
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium text-foreground block">Zivilstand:</span>
                          <p className="text-muted-foreground">{person.maritalStatus}</p>
                        </div>
                      )}
                      {person.profession && (
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium text-foreground block">Beruf:</span>
                          <p className="text-muted-foreground text-xs">{person.profession}</p>
                        </div>
                      )}
                      {person.children && (
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium text-foreground block">Kinder:</span>
                          <p className="text-muted-foreground">{person.children}</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="border-t pt-4 space-y-3">
                    {(person.address || person.location || person.contact?.address) && (
                      <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                        <MapPin className="w-4 h-4 mr-3 text-primary" />
                        <div>
                          {person.address && <p className="text-sm text-muted-foreground">{person.address}</p>}
                          {(person.location || person.contact?.address) && (
                            <p className="text-sm text-muted-foreground">{person.location || person.contact?.address}</p>
                          )}
                        </div>
                      </div>
                    )}
                    {person.contact?.phone && (
                      <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                        <Phone className="w-4 h-4 mr-3 text-primary" />
                        <a href={`tel:${person.contact.phone.replace(/\s/g, '')}`} className="text-sm hover:text-primary transition-colors">
                          {person.contact.phone}
                        </a>
                      </div>
                    )}
                    {(person as any).mobile && (
                      <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                        <Phone className="w-4 h-4 mr-3 text-primary" />
                        <a href={`tel:${(person as any).mobile.replace(/\s/g, '')}`} className="text-sm hover:text-primary transition-colors">
                          {(person as any).mobile} (Mobile)
                        </a>
                      </div>
                    )}
                    {person.contact?.email && (
                      <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                        <Mail className="w-4 h-4 mr-3 text-primary" />
                        <ProtectedEmail 
                          user={person.contact.email.split('@')[0]} 
                          domain={person.contact.email.split('@')[1]} 
                          className="text-sm"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Education */}
            {education.length > 0 && (
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                    Ausbildung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {education.map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="w-3 h-3 bg-primary rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Hobbies */}
            {hobbies.length > 0 && (
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Hobbies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {hobbies.map((hobby, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {hobby}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {customSidebarContent}
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default PersonProfileLayout;

