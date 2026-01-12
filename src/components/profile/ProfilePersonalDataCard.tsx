import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, User } from 'lucide-react';
import ProtectedEmail from '@/components/ProtectedEmail';
import { PersonalData } from '@/types/profile';

interface ProfilePersonalDataCardProps {
  personalData: PersonalData;
}

/**
 * ProfilePersonalDataCard - Personal information sidebar card
 * 
 * Displays personal details like birth year, marital status, profession, children,
 * address, and contact information.
 */
const ProfilePersonalDataCard = memo(({ personalData }: ProfilePersonalDataCardProps) => {
  const hasPersonalInfo = personalData.born || personalData.maritalStatus || personalData.profession || personalData.children;
  const hasContactInfo = personalData.address || personalData.location || personalData.phone || personalData.mobile || personalData.email;

  if (!hasPersonalInfo && !hasContactInfo) {
    return null;
  }

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="w-5 h-5 mr-2 text-primary" />
          Personalien
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {hasPersonalInfo && (
          <div className="grid grid-cols-2 gap-4 text-sm">
            {personalData.born && (
              <div className="p-3 bg-muted/30 rounded-lg">
                <span className="font-medium text-foreground block">Geboren:</span>
                <p className="text-muted-foreground">{personalData.born}</p>
              </div>
            )}
            {personalData.maritalStatus && (
              <div className="p-3 bg-muted/30 rounded-lg">
                <span className="font-medium text-foreground block">Zivilstand:</span>
                <p className="text-muted-foreground">{personalData.maritalStatus}</p>
              </div>
            )}
            {personalData.profession && (
              <div className="p-3 bg-muted/30 rounded-lg">
                <span className="font-medium text-foreground block">Beruf:</span>
                <p className="text-muted-foreground text-xs">{personalData.profession}</p>
              </div>
            )}
            {personalData.children && (
              <div className="p-3 bg-muted/30 rounded-lg">
                <span className="font-medium text-foreground block">Kinder:</span>
                <p className="text-muted-foreground">{personalData.children}</p>
              </div>
            )}
          </div>
        )}
        
        {hasContactInfo && (
          <div className="border-t pt-4 space-y-3">
            {(personalData.address || personalData.location) && (
              <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                <div>
                  {personalData.address && (
                    <p className="text-sm text-muted-foreground">{personalData.address}</p>
                  )}
                  {personalData.location && (
                    <p className="text-sm text-muted-foreground">{personalData.location}</p>
                  )}
                </div>
              </div>
            )}
            {personalData.phone && (
              <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <a href={`tel:${personalData.phone.replace(/\s/g, '')}`} className="text-sm hover:text-primary transition-colors">
                  {personalData.phone}
                </a>
              </div>
            )}
            {personalData.mobile && (
              <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <a href={`tel:${personalData.mobile.replace(/\s/g, '')}`} className="text-sm hover:text-primary transition-colors">
                  {personalData.mobile} (Mobile)
                </a>
              </div>
            )}
            {personalData.email && (
              <div className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <ProtectedEmail 
                  user={personalData.email.split('@')[0]} 
                  domain={personalData.email.split('@')[1]} 
                  className="text-sm"
                />
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
});

ProfilePersonalDataCard.displayName = 'ProfilePersonalDataCard';

export default ProfilePersonalDataCard;

