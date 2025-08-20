import { FileText, CheckSquare, Clock, Target, Users } from 'lucide-react';

const InitiativesSection = () => {
  const activeInitiatives = [
    {
      title: "Motion: Sicherheit in Zuger Quartieren",
      type: "Motion",
      submittedBy: "Dr. Markus Weber, Thomas Schneider",
      submittedDate: "12. Januar 2024",
      status: "In Beratung",
      description: "Verstärkung der Polizeipräsenz und Verbesserung der Beleuchtung in kritischen Bereichen der Stadt.",
      goals: [
        "Erhöhung der Sicherheit in Wohnquartieren",
        "Verbesserung der Beleuchtung öffentlicher Räume",
        "Mehr Polizeipatrouillen zu Abendstunden"
      ]
    },
    {
      title: "Interpellation: Transparenz bei Stadtfinanzen", 
      type: "Interpellation",
      submittedBy: "Sarah Müller",
      submittedDate: "8. Februar 2024",
      status: "Beantwortet",
      description: "Forderung nach besserer Bürgerkommunikation über Verwendung von Steuergeldern.",
      goals: [
        "Quartalsweise Finanzberichte für Bürger",
        "Digitale Transparenz-Plattform",
        "Bürgersprechstunden zu Finanzen"
      ]
    },
    {
      title: "Postulat: Förderung lokaler Wirtschaft",
      type: "Postulat", 
      submittedBy: "Andrea Kaufmann, Thomas Schneider",
      submittedDate: "20. März 2024",
      status: "Eingereicht",
      description: "Massnahmen zur Stärkung der lokalen KMU und Attraktivitätssteigerung der Zuger Innenstadt.",
      goals: [
        "Reduktion bürokratischer Hürden",
        "Unterstützung bei digitaler Transformation",
        "Attraktive Innenstadtgestaltung"
      ]
    }
  ];

  const completedInitiatives = [
    {
      title: "Motion: Digitalisierung Stadtverwaltung",
      result: "Angenommen",
      year: "2023",
      impact: "Online-Schalter für 80% der Verwaltungsleistungen eingeführt"
    },
    {
      title: "Interpellation: Verkehrssituation Bahnhofstrasse", 
      result: "Massnahmen umgesetzt",
      year: "2023",
      impact: "Verkehrsberuhigung und bessere Fussgängerführung realisiert"
    },
    {
      title: "Postulat: Familienfreundliche Spielplätze",
      result: "Teilweise umgesetzt", 
      year: "2022",
      impact: "3 neue moderne Spielplätze in verschiedenen Quartieren"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Eingereicht": return "text-blue-600 bg-blue-50 border-blue-200";
      case "In Beratung": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Beantwortet": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Eingereicht": return <FileText className="h-4 w-4" />;
      case "In Beratung": return <Clock className="h-4 w-4" />;
      case "Beantwortet": return <CheckSquare className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <section id="initiatives" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Vorstösse & Initiativen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unsere parlamentarischen Vorstösse für eine bessere Stadt Zug. 
            Von Motionen über Interpellationen bis hin zu Postulaten - wir bringen konkrete Lösungen ein.
          </p>
        </div>

        {/* Active Initiatives */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            Aktuelle Vorstösse
          </h3>
          
          <div className="space-y-6">
            {activeInitiatives.map((initiative, index) => (
              <div key={index} className="card-initiative group">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {initiative.title}
                      </h4>
                      <div className="flex gap-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          {initiative.type}
                        </span>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(initiative.status)}`}>
                          {getStatusIcon(initiative.status)}
                          {initiative.status}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-1">
                        <strong>Eingereicht von:</strong> {initiative.submittedBy}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Datum:</strong> {initiative.submittedDate}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                  
                  <div className="lg:w-80">
                    <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-primary" />
                      Ziele & Massnahmen
                    </h5>
                    <ul className="space-y-2">
                      {initiative.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Initiatives */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <CheckSquare className="h-8 w-8 text-green-600" />
            Erfolgreich umgesetzt
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedInitiatives.map((initiative, index) => (
              <div key={index} className="card-success border-l-4 border-l-green-500">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {initiative.title}
                  </h4>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {initiative.year}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className="text-sm font-medium text-green-600">
                    {initiative.result}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  <strong>Auswirkung:</strong> {initiative.impact}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <FileText className="h-8 w-8" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">47</div>
            <div className="text-sm text-muted-foreground">Vorstösse seit 2020</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <CheckSquare className="h-8 w-8" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">78%</div>
            <div className="text-sm text-muted-foreground">Erfolgsquote</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Users className="h-8 w-8" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">12</div>
            <div className="text-sm text-muted-foreground">Aktive Parlamentarier</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Target className="h-8 w-8" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">5</div>
            <div className="text-sm text-muted-foreground">Grosse Erfolge 2024</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-svp-green rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Haben Sie eine Idee für Zug?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Kontaktieren Sie uns mit Ihren Anliegen - wir prüfen jeden Vorschlag sorgfältig
            </p>
            <button className="btn-hero bg-white text-primary hover:bg-gray-100">
              Anliegen einreichen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;