import PageLayout from '@/components/layout/PageLayout';
import { Cookie, Shield, Eye, Settings, Info } from 'lucide-react';

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Notwendige Cookies",
      description: "Diese Cookies sind für das Funktionieren der Website unerlässlich",
      purpose: "Grundfunktionen und Sicherheit der Website",
      examples: "Session-Cookies, Sicherheits-Cookies"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Funktionale Cookies",
      description: "Ermöglichen erweiterte Funktionalitäten und Personalisierung",
      purpose: "Verbesserung der Benutzererfahrung",
      examples: "Spracheinstellungen, regionale Präferenzen"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Präferenz-Cookies",
      description: "Speichern Ihre Einstellungen und Präferenzen",
      purpose: "Benutzerfreundlichkeit und Personalisierung",
      examples: "Theme-Auswahl, Layout-Präferenzen"
    }
  ];

  return (
    <PageLayout 
      title="Cookie-Richtlinie – SVP Stadt Zug"
      description="Cookie-Richtlinie der SVP Stadt Zug - Transparente Information über die Verwendung von Cookies."
    >
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-svp-green via-svp-green to-svp-green-light text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>
          <div className="container-max relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Cookie className="h-4 w-4" />
                <span className="text-sm font-medium">Cookie-Informationen</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Cookie-Richtlinie
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                Transparente Information über die Verwendung von Cookies auf unserer Website – 
                Ihre Privatsphäre ist uns wichtig
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Types Overview */}
        <section className="section-padding bg-gradient-to-b from-background via-background to-muted/20">
          <div className="container-max">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Welche <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Cookies</span> wir verwenden
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Vollständige Übersicht über alle Cookie-Kategorien und deren Zweck
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-medium">
                        {type.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {type.description}
                      </p>
                      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-3 border border-primary/20 mb-3">
                        <p className="text-primary text-sm font-semibold">
                          {type.purpose}
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <strong>Beispiele:</strong> {type.examples}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Cookie Policy */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-elegant">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-medium">
                      <Info className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">Cookie-Richtlinie</h2>
                      <p className="text-muted-foreground">Detaillierte Informationen zur Cookie-Nutzung</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-primary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        1. Was sind Cookies?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, 
                        wenn Sie eine Website besuchen. Sie ermöglichen es der Website, sich an Ihre Aktionen und 
                        Einstellungen über einen bestimmten Zeitraum zu erinnern.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        2. Wie wir Cookies verwenden
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                        Dies umfasst das Speichern Ihrer Präferenzen, die Verbesserung der Website-Performance 
                        und die Bereitstellung personalisierter Inhalte.
                      </p>
                      
                      <h4 className="font-semibold text-foreground mb-2">Arten von Cookies:</h4>
                      <ul className="text-muted-foreground leading-relaxed space-y-2">
                        <li>• <strong>Session-Cookies:</strong> Werden beim Schliessen des Browsers geloescht</li>
                        <li>• <strong>Persistente Cookies:</strong> Bleiben für einen bestimmten Zeitraum gespeichert</li>
                        <li>• <strong>First-Party-Cookies:</strong> Von unserer Website gesetzt</li>
                        <li>• <strong>Third-Party-Cookies:</strong> Von externen Diensten gesetzt</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-accent/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        3. Ihre Cookie-Einstellungen verwalten
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Sie haben jederzeit die Kontrolle über Cookies. Die meisten Browser ermöglichen es Ihnen, 
                        Cookies zu verwalten, zu blockieren oder zu löschen. Beachten Sie jedoch, dass das 
                        Deaktivieren bestimmter Cookies die Funktionalität unserer Website beeinträchtigen kann.
                      </p>
                      
                      <h4 className="font-semibold text-foreground mb-2">Browser-Einstellungen:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-gradient-to-r from-muted/50 to-transparent rounded-xl p-4">
                          <strong className="text-foreground">Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies
                        </div>
                        <div className="bg-gradient-to-r from-muted/50 to-transparent rounded-xl p-4">
                          <strong className="text-foreground">Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies
                        </div>
                        <div className="bg-gradient-to-r from-muted/50 to-transparent rounded-xl p-4">
                          <strong className="text-foreground">Safari:</strong> Einstellungen → Datenschutz → Cookies verwalten
                        </div>
                        <div className="bg-gradient-to-r from-muted/50 to-transparent rounded-xl p-4">
                          <strong className="text-foreground">Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-primary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        4. Notwendige Cookies
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Einige Cookies sind für das ordnungsgemaesse Funktionieren unserer Website unerlaesslich. 
                        Diese werden automatisch gesetzt und können nicht deaktiviert werden, ohne die 
                        Website-Funktionalität zu beeinträchtigen. Dazu gehören Sicherheits-Cookies und 
                        Session-Management-Cookies.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        5. Änderungen an dieser Richtlinie
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen 
                        in unseren Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen 
                        Gruenden zu beruecksichtigen. Wir empfehlen Ihnen, diese Seite regelmaessig zu besuchen.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                      <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Kontakt
                      </h3>
                      <p className="text-muted-foreground">
                        Bei Fragen zu unserer Cookie-Richtlinie wenden Sie sich gerne an uns unter den im{' '}
                        <a href="/impressum" className="text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors">
                          Impressum
                        </a>{' '}
                        angegebenen Kontaktdaten.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-success/10 via-success/5 to-success/10 rounded-xl p-6 border border-success/30">
                      <p className="text-success font-semibold flex items-center gap-2">
                        <Cookie className="h-5 w-5" />
                        Stand dieser Cookie-Richtlinie: Januar 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default CookiePolicy;