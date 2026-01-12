import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Target, Clock, CheckCircle, AlertCircle, FileText, TrendingUp, ExternalLink } from 'lucide-react';
import { Motion } from '@/types/motion';

interface MotionCardProps {
  motion: Motion;
  status?: 'current' | 'completed';
  showCategory?: boolean;
  className?: string;
  simplified?: boolean;
}

/**
 * MotionCard - Specialized card component for motions/initiatives/vorstösse
 * 
 * Handles both current and completed motions with appropriate styling.
 * Matches Vorstoesse page styling exactly.
 * 
 * Usage:
 * ```tsx
 * <MotionCard
 *   motion={motionData}
 *   status="current"
 *   showCategory={true}
 * />
 * ```
 */
const MotionCard = ({ motion, status = 'current', showCategory = true, className = '', simplified = false }: MotionCardProps) => {
  const getStatusBadge = (status: string) => {
    // Don't show badge for "Zur Überw." or "zur Überw."
    if (status.toLowerCase().includes('zur überw')) {
      return null;
    }

    const statusConfig: Record<string, { color: string; icon: any }> = {
      "Überw.": { color: "bg-green-100 text-green-800 border-green-200", icon: CheckCircle },
      "2948 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2937 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2932 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2944 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2936 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2915 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "2916 SR": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: AlertCircle },
      "Beantwortet": { color: "bg-green-100 text-green-800 border-green-200", icon: CheckCircle },
      "Umgesetzt": { color: "bg-green-100 text-green-800 border-green-200", icon: CheckCircle }
    };

    const config = statusConfig[status] || { color: "bg-gray-100 text-gray-800 border-gray-200", icon: FileText };
    const IconComponent = config.icon;

    return (
      <Badge className={config.color}>
        <IconComponent className="w-3 h-3 mr-1" />
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const typeColors: Record<string, string> = {
      "Motion": "bg-red-100 text-red-800 border-red-200",
      "Interpellation": "bg-blue-100 text-blue-800 border-blue-200", 
      "Postulat": "bg-green-100 text-green-800 border-green-200",
      "Kleine Anfrage": "bg-purple-100 text-purple-800 border-purple-200",
      "Antrag": "bg-orange-100 text-orange-800 border-orange-200"
    };
    
    return (
      <Badge className={typeColors[type] || "bg-gray-100 text-gray-800 border-gray-200"}>
        {type}
      </Badge>
    );
  };

  // Simplified layout - just show essential info
  if (simplified) {
    const isCompleted = status === 'completed';
    const borderColor = isCompleted ? 'border-l-green-500' : 'border-l-blue-500';
    const bgColor = isCompleted ? 'bg-green-50/30' : 'bg-blue-50/30';
    
    return (
      <Card className={`hover:shadow-md transition-shadow border-l-4 ${borderColor} ${bgColor} ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                {getTypeBadge(motion.type)}
                {getStatusBadge(motion.status) && getStatusBadge(motion.status)}
                {motion.recent && new Date(motion.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) && (
                  <Badge className="bg-[hsl(var(--svp-green))] text-white text-xs">Neu</Badge>
                )}
              </div>
              <CardTitle className="text-lg mb-2 leading-tight">{motion.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground gap-3 flex-wrap">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {motion.date}
                </span>
                <span>•</span>
                <span>{motion.author}</span>
              </div>
            </div>
            {motion.pdfLinks && motion.pdfLinks.length > 0 && (
              <div className="flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a href={motion.pdfLinks[0]} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FileText className="w-3 h-3 mr-1" />
                    PDF
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Full layout (original)
  return (
    <Card className={`hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-grow">
            <div className="flex items-center space-x-3 mb-2">
              <CardTitle className="text-xl">{motion.title}</CardTitle>
              {getTypeBadge(motion.type)}
              {getStatusBadge(motion.status) && getStatusBadge(motion.status)}
              {showCategory && motion.category && (
                <Badge variant="outline">{motion.category}</Badge>
              )}
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <Calendar className="w-4 h-4 mr-2" />
              {motion.date} • {motion.author}
              {motion.coAuthors && motion.coAuthors.length > 0 && (
                <span className="ml-2">+ {motion.coAuthors.length} Mitunterzeichner</span>
              )}
            </div>
            <CardDescription className="text-base">
              {motion.description}
            </CardDescription>
          </div>
          <div className="ml-4 space-y-2">
            {getStatusBadge(motion.status)}
            {motion.expectedImpact && (
              <Badge variant={motion.expectedImpact === "Hoch" ? "default" : "secondary"}>
                Impact: {motion.expectedImpact}
              </Badge>
            )}
            {motion.recent && new Date(motion.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) && (
              <Badge className="bg-primary text-primary-foreground text-xs">Neu</Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {status === 'current' ? (
          <div className="grid lg:grid-cols-2 gap-6">
            {motion.reasoning && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">Begründung</h4>
                <p className="text-muted-foreground mb-4">{motion.reasoning}</p>
                {motion.progress && (
                  <div className="bg-muted/30 rounded-lg p-3">
                    <p className="text-sm font-medium text-foreground mb-1">Aktueller Stand:</p>
                    <p className="text-sm text-muted-foreground">{motion.progress}</p>
                  </div>
                )}
              </div>
            )}
            {motion.goals && motion.goals.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">Ziele</h4>
                <ul className="space-y-2">
                  {motion.goals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          // Completed status
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Umsetzung</h4>
              {motion.implementation && motion.implementation.length > 0 ? (
                <ul className="space-y-2 mb-4">
                  {motion.implementation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">{motion.progress || 'Abgeschlossen'}</p>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Erfolg & Wirkung</h4>
              {motion.result && motion.impact && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">{motion.result}</span>
                  </div>
                  <p className="text-sm text-green-700">{motion.impact}</p>
                </div>
              )}
            </div>
          </div>
        )}
        {motion.pdfLinks && motion.pdfLinks.length > 0 && (
          <div className="border-t pt-4 mt-4">
            <div className="flex flex-wrap gap-2">
              {motion.pdfLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-xs"
                >
                  <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FileText className="w-3 h-3 mr-1" />
                    Dokument {index + 1}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MotionCard;

