import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    "Sport": "🏃",
    "Fitness": "💪",
    "Skifahren": "⛷️",
    "Lesen": "📚",
    "Schreiben": "✍️",
    "Kino": "🎬",
    "EVZ": "🏒",
    "Reisen": "✈️",
    "Wandern": "🥾",
    "historischer Motorsport": "🏁",
    "Fliegenfischen": "🎣",
    "Jagd": "🦌",
    "Jagd (Bündner- und Zugerjäger)": "🦌",
    "Schafe": "🐑",
    "Biken": "🚴",
    "Rennradfahren": "🚴",
    "Mountainbiken": "🚵",
    "Boxen": "🥊",
    "Kochen": "👨‍🍳",
    "Familie": "👨‍👩‍👧‍👦",
    "Familie und Freunde": "👨‍👩‍👧‍👦",
    "Feuerwehr": "🚒",
    "Feuerwehrdienst": "🚒",
    "Gleitschirmfliegen": "🪂",
    "Klettern": "🧗",
    "Motorradfahren": "🏍️",
    "Hundeausbildung": "🐕",
    "Sport allgemein": "🏃",
    "Ski": "⛷️",
    "Ski fahren": "⛷️",
    "Golf": "⛳",
    "Oldtimerfahrzeuge": "🚗",
    "Fischen": "🎣",
    "Golfen": "⛳",
    "Politik": "🏛️",
    "Joggen": "🏃",
    "Pferdesport": "🐴",
    "Schwimmen": "🏊",
    "Velofahren": "🚴",
    "Velotouren": "🚴",
    "Tennisspielen": "🎾",
    "Tennis": "🎾",
    "Tauchen": "🤿",
    "Fasnacht": "🎭",
    "Jassen": "🃏",
    "Ausflüge": "🧺",
    "Spazieren mit Familie": "🚶",
    "Garten": "🌱",
    "Schiessen": "🎯",
    "Rudern": "🚣",
    "DJ": "🎧",
    "Berge": "⛰️",
    "Sport (Fitness, Ski)": "💪"
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
                <span className="w-5 h-5 mr-2 text-primary text-lg flex-shrink-0">{emoji || "✨"}</span>
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

