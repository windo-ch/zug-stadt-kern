import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import { PersonalData } from '@/types/profile';

interface ProfileContactCardProps {
  personalData: PersonalData;
}

/**
 * ProfileContactCard - Contact information card for profile pages
 * 
 * Displays contact buttons and email link in a prominent card.
 */
const ProfileContactCard = memo(({ personalData }: ProfileContactCardProps) => {
  return (
    <Card className="shadow-lg border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
      <CardHeader className="text-center">
        <CardTitle className="text-primary">Kontakt aufnehmen</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="flex justify-center space-x-4">
          {personalData.phone && (
            <a 
              href={`tel:${personalData.phone.replace(/\s/g, '')}`} 
              className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
            </a>
          )}
          {personalData.mobile && (
            <a 
              href={`tel:${personalData.mobile.replace(/\s/g, '')}`} 
              className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
            </a>
          )}
          {personalData.email && (
            <a 
              href={`mailto:${personalData.email}`} 
              className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          )}
        </div>
        {personalData.email && (
          <Button className="w-full" size="lg" asChild>
            <a href={`mailto:${personalData.email}`}>
              <Mail className="w-4 h-4 mr-2" />
              E-Mail senden
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
});

ProfileContactCard.displayName = 'ProfileContactCard';

export default ProfileContactCard;

