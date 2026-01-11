import PageLayout from '@/components/layout/PageLayout';
import { Shield, Eye, Lock, Database, CheckCircle } from 'lucide-react';

const Datenschutz = () => {
  const dataTypes = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Zugriffsdaten",
      description: "IP-Adresse, Browser, Betriebssystem, Referrer-URL",
      purpose: "Technische Bereitstellung der Website und Sicherheit"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Kontaktdaten",
      description: "Name, E-Mail, Telefon bei Kontaktaufnahme",
      purpose: "Bearbeitung Ihrer Anfragen und Kommunikation"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Newsletter-Daten",
      description: "E-Mail-Adresse bei Newsletter-Anmeldung",
      purpose: "Versendung politischer Informationen (mit Einverständnis)"
    }
  ];

  return (
    <PageLayout 
      title="Datenschutz – SVP Stadt Zug"
      description="Datenschutzerklärung der SVP Stadt Zug - Transparenz und Schutz Ihrer persönlichen Daten."
    >
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-svp-green via-svp-green to-svp-green-light text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>
          <div className="container-max relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Ihre Daten sind sicher</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Datenschutz
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                Transparenz und Schutz Ihrer persönlichen Daten haben für uns höchste Priorität – 
                erfahren Sie, wie wir Ihre Privatsphäre schützen
              </p>
            </div>
          </div>
        </section>

        {/* Data Types Overview */}
        <section className="section-padding bg-gradient-to-b from-background via-background to-muted/20">
          <div className="container-max">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Welche <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Daten</span> wir erheben
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Vollständige Transparenz über alle Datentypen und deren Verwendungszweck
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {dataTypes.map((type, index) => (
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
                      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-3 border border-primary/20">
                        <p className="text-primary text-sm font-semibold">
                          {type.purpose}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Privacy Policy */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-elegant">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-medium">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">Datenschutzerklärung</h2>
                      <p className="text-muted-foreground">Detaillierte Informationen zum Datenschutz</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-primary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        1. Datenschutz auf einen Blick
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                        personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. 
                        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                        werden können.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        2. Datenerfassung auf unserer Website
                      </h3>
                      <h4 className="font-semibold text-foreground mb-2">Wer ist verantwortlich für die Datenerfassung?</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                        Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                      </p>
                      
                      <h4 className="font-semibold text-foreground mb-2">Wie erfassen wir Ihre Daten?</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                        Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
                        Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-accent/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        3. Allgemeine Hinweise und Pflichtinformationen
                      </h3>
                      <h4 className="font-semibold text-foreground mb-2">Datenschutz</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                        Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
                        gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                      </p>
                      
                      <h4 className="font-semibold text-foreground mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                        Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. 
                        Dazu reicht eine formlose Mitteilung per E-Mail an uns.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        4. Datenerfassung auf unserer Website
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Server-Log-Dateien</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                            so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                            Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, 
                            Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Kontaktformular</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                            aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Newsletter</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, 
                            benötigen wir von Ihnen eine E-Mail-Adresse. Die Anmeldung erfolgt im 
                            Double-Opt-In-Verfahren. Sie können den Newsletter jederzeit abbestellen.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-secondary/30 pl-6 py-2">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        5. Ihre Rechte
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung 
                        der Verarbeitung Ihrer personenbezogenen Daten. Bei Fragen wenden Sie sich 
                        gerne an uns unter den im Impressum angegebenen Kontaktdaten.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-success/10 via-success/5 to-success/10 rounded-xl p-6 border border-success/30">
                      <p className="text-success font-semibold flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Stand dieser Datenschutzerklärung: Januar 2025
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

export default Datenschutz;