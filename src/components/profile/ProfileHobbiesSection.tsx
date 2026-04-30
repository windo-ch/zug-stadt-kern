import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Flame } from 'lucide-react';

interface ProfileHobbiesSectionProps {
  hobbies: string[];
  className?: string;
}

/**
 * ProfileHobbiesSection - Standardized hobbies/interests component
 * 
 * Displays hobbies with emoji icons in a consistent style across all profiles.
 */
const ProfileHobbiesSection = memo(({ hobbies, className = '' }: ProfileHobbiesSectionProps) => {
  if (!hobbies || hobbies.length === 0) {
    return null;
  }

  // Emoji mapping for common hobbies
  const hobbyEmojis: Record<string, string> = {
    "Sport": "⚽",
    "Fitness": "💪",
    "Skifahren": "⛷️",
    "Lesen": "📚",
    "Kino": "🎬",
    "EVZ": "🏒",
    "Reisen": "✈️",
    "Wandern": "🥾",
    "Historischer Motorsport": "🏁",
    "Fliegenfischen": "🎣",
    "Jagd": "🦌",
    "Schafe": "🐑",
    "Biken": "🚴",
    "Boxen": "🥊",
    "Kochen": "👨‍🍳",
    "Familie und Freunde": "👨‍👩‍👧‍👦",
    "Feuerwehr": "🚒",
    "Gleitschirmfliegen": "🪂",
    "Klettern": "🧗",
    "Motorradfahren": "🏍️",
    "Hundeausbildung": "🐕",
    "Sport allgemein": "🏃",
    "Ski": "⛷️",
    "Golf": "⛳",
    "Oldtimerfahrzeuge": "🚗",
    "Fischen": "🎣",
    "Golfen": "⛳",
    "Politik": "🏛️",
    "Joggen": "🏃",
    "Pferdesport": "🐴",
    "Schwimmen": "🏊",
    "Velofahren": "🚴",
    "Tennisspielen": "🎾"
  };

  return (
    <Card className={`shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl">Persönliche Interessen</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {hobbies.map((hobby, index) => {
            const emoji = hobbyEmojis[hobby];
            return (
              <div key={index} className="flex items-center p-3 bg-muted/20 rounded-lg hover:bg-primary/10 transition-colors">
                {hobby === "Feuerwehr" ? (
                  <Flame className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                ) : (
                  <span className="w-5 h-5 mr-2 text-primary text-lg flex-shrink-0">{emoji || "⭐"}</span>
                )}
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  {hobby}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
});

ProfileHobbiesSection.displayName = 'ProfileHobbiesSection';

export default ProfileHobbiesSection;

