import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';

interface VoteCardProps {
  id: string | number;
  title: string;
  date: string;
  level: 'Eidgenössisch' | 'Kantonal' | 'Kommunal';
  description: string;
  recommendation: 'Ja' | 'Nein';
  reasoning: string;
  details: string[];
  status: 'upcoming' | 'past';
  importance?: 'Hoch' | 'Mittel' | 'Niedrig';
  // For past votes
  result?: string;
  resultPercentage?: string;
  svpMatch?: boolean;
  className?: string;
}

/**
 * VoteCard - Specialized card component for votes/referendums
 * 
 * Handles both upcoming and past votes with appropriate styling.
 * Matches Abstimmungen page styling exactly.
 * 
 * Usage:
 * ```tsx
 * <VoteCard
 *   id={1}
 *   title="Vote Title"
 *   date="28. September 2025"
 *   level="Eidgenössisch"
 *   description="Vote description"
 *   recommendation="Nein"
 *   reasoning="Our reasoning"
 *   details={["Point 1", "Point 2"]}
 *   status="upcoming"
 *   importance="Hoch"
 * />
 * ```
 */
const VoteCard = ({
  id,
  title,
  date,
  level,
  description,
  recommendation,
  reasoning,
  details,
  status,
  importance = 'Mittel',
  result,
  resultPercentage,
  svpMatch,
  className = ''
}: VoteCardProps) => {
  const getRecommendationBadge = (rec: string) => {
    return rec === "Ja" ? 
      <Badge className="bg-green-100 text-green-800 border-green-200">
        <CheckCircle className="w-3 h-3 mr-1" />
        Ja-Empfehlung
      </Badge> :
      <Badge className="bg-red-100 text-red-800 border-red-200">
        <XCircle className="w-3 h-3 mr-1" />
        Nein-Empfehlung
      </Badge>;
  };

  const getResultBadge = (result: string, match: boolean | undefined) => {
    if (!result) return null;
    const isAccepted = result === "Angenommen";
    
    return (
      <div className="flex items-center space-x-2">
        <Badge className={isAccepted ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"}>
          {result}
        </Badge>
        {match && (
          <Badge variant="outline" className="text-xs">
            <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
            SVP-Linie
          </Badge>
        )}
      </div>
    );
  };

  return (
    <Card className={`hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-grow">
            <div className="flex items-center space-x-3 mb-2">
              <CardTitle className="text-xl">{title}</CardTitle>
              <Badge variant="outline">{level}</Badge>
              <Badge variant={importance === "Hoch" ? "default" : "secondary"}>
                {importance}
              </Badge>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <Calendar className="w-4 h-4 mr-2" />
              {date}
            </div>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </div>
          <div className="ml-4">
            {status === 'upcoming' ? getRecommendationBadge(recommendation) : getResultBadge(result || '', svpMatch)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {status === 'upcoming' ? (
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Unsere Begründung</h4>
              <p className="text-muted-foreground mb-4">{reasoning}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Wichtige Punkte</h4>
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Unsere Empfehlung</h4>
              <p className="text-muted-foreground mb-2">{recommendation}</p>
              <p className="text-muted-foreground">{reasoning}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Abstimmungsergebnis</h4>
              {result && (
                <div className="space-y-2">
                  <p className="text-muted-foreground">{result}</p>
                  {resultPercentage && (
                    <p className="text-sm text-muted-foreground">{resultPercentage} Zustimmung</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VoteCard;

