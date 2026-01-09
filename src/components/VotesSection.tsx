import { CheckCircle, XCircle, Clock, FileText } from 'lucide-react';

const VotesSection = () => {
  const upcomingVotes = [
    {
      title: "Stadtentwicklung Zug Ost",
      date: "15. März 2025",
      type: "Kommunale Abstimmung",
      recommendation: "NEIN",
      reason: "Zu hohe Kosten bei unklarem Nutzen für die Bevölkerung",
      status: "upcoming"
    },
    {
      title: "Steuererhöhung Gemeindesteuern",
      date: "15. März 2025", 
      type: "Kommunale Abstimmung",
      recommendation: "NEIN",
      reason: "Bürger bereits genug belastet - Effizienz vor neuen Steuern",
      status: "upcoming"
    },
    {
      title: "Ausbau öffentlicher Verkehr",
      date: "22. Juni 2025",
      type: "Kantonale Vorlage",
      recommendation: "JA mit Vorbehalten",
      reason: "Grundsätzlich sinnvoll, aber Kostenrahmen muss eingehalten werden",
      status: "upcoming"
    }
  ];

  const pastVotes = [
    {
      title: "Budget 2024 Stadt Zug",
      date: "26. November 2023",
      recommendation: "NEIN",
      result: "Angenommen",
      reason: "Zu hohe Ausgaben ohne entsprechende Prioritätensetzung"
    },
    {
      title: "Renovation Stadthaus",
      date: "18. Juni 2023", 
      recommendation: "JA",
      result: "Angenommen",
      reason: "Notwendige Investition in die städtische Infrastruktur"
    }
  ];

  const getRecommendationColor = (recommendation: string) => {
    if (recommendation.includes("NEIN")) return "text-red-600 bg-red-50 border-red-200";
    if (recommendation.includes("JA")) return "text-green-600 bg-green-50 border-green-200";
    return "text-yellow-600 bg-yellow-50 border-yellow-200";
  };

  const getRecommendationIcon = (recommendation: string) => {
    if (recommendation.includes("NEIN")) return <XCircle className="h-5 w-5" />;
    if (recommendation.includes("JA")) return <CheckCircle className="h-5 w-5" />;
    return <Clock className="h-5 w-5" />;
  };

  return (
    <section id="votes" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Abstimmungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparente Empfehlungen zu aktuellen und kommenden Abstimmungen. 
            Wir informieren Sie über unsere Standpunkte und die Gründe dahinter.
          </p>
        </div>

        {/* Upcoming Votes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Clock className="h-8 w-8 text-primary" />
            Kommende Abstimmungen
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingVotes.map((vote, index) => (
              <div key={index} className="card-vote group hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-muted-foreground font-medium">
                      {vote.date}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {vote.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {vote.title}
                  </h4>
                </div>
                
                <div className={`flex items-center gap-2 p-3 rounded-lg border-2 mb-4 ${getRecommendationColor(vote.recommendation)}`}>
                  {getRecommendationIcon(vote.recommendation)}
                  <span className="font-bold text-sm">
                    SVP empfiehlt: {vote.recommendation}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  <strong>Begründung:</strong> {vote.reason}
                </p>

                <button className="w-full btn-outline text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FileText className="h-4 w-4 mr-2" />
                  Detaillierte Analyse
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Votes */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            Vergangene Abstimmungen
          </h3>
          
          <div className="space-y-4">
            {pastVotes.map((vote, index) => (
              <div key={index} className="card-vote-compact border-l-4 border-l-primary">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {vote.title}
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        • {vote.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      <strong>Unsere Empfehlung:</strong> {vote.recommendation} | 
                      <strong> Resultat:</strong> {vote.result}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {vote.reason}
                    </p>
                  </div>
                  
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${getRecommendationColor(vote.recommendation)}`}>
                    {getRecommendationIcon(vote.recommendation)}
                    <span className="font-semibold text-sm">
                      {vote.recommendation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-svp-green rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bleiben Sie informiert
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Kontaktieren Sie uns für Fragen zu unseren Abstimmungsempfehlungen
            </p>
            <a href="/kontakt" className="btn-hero bg-white text-primary hover:bg-gray-100 inline-block">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VotesSection;