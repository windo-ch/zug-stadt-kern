import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Database } from 'lucide-react';

const Datenschutz = () => {
  useEffect(() => {
    document.title = "Datenschutz – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Datenschutzerklärung der SVP Stadt Zug - Transparenz und Schutz Ihrer persönlichen Daten.');
    }
  }, []);

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
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-svp-green to-svp-green-light text-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Datenschutz
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Transparenz und Schutz Ihrer persönlichen Daten haben für uns höchste Priorität
              </p>
            </div>
          </div>
        </section>

        {/* Data Types Overview */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Welche Daten wir erheben
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {dataTypes.map((type, index) => (
                  <div key={index} className="card-vote text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {type.description}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {type.purpose}
                    </p>
                  </div>
                ))}
              </div>

              {/* Detailed Privacy Policy */}
              <div className="card-initiative">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Datenschutzerklärung</h2>
                </div>
                
                <div className="prose prose-gray max-w-none text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">1. Datenschutz auf einen Blick</h3>
                  <p className="mb-4">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                    personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. 
                    Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                    werden können.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground">2. Datenerfassung auf unserer Website</h3>
                  <h4 className="font-semibold text-foreground">Wer ist verantwortlich für die Datenerfassung?</h4>
                  <p className="mb-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                    Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                  
                  <h4 className="font-semibold text-foreground">Wie erfassen wir Ihre Daten?</h4>
                  <p className="mb-4">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                    Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
                    Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                  <h4 className="font-semibold text-foreground">Datenschutz</h4>
                  <p className="mb-4">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
                    gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  
                  <h4 className="font-semibold text-foreground">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                  <p className="mb-4">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                    Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. 
                    Dazu reicht eine formlose Mitteilung per E-Mail an uns.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground">4. Datenerfassung auf unserer Website</h3>
                  <h4 className="font-semibold text-foreground">Server-Log-Dateien</h4>
                  <p className="mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                    so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                    Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, 
                    Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                  </p>
                  
                  <h4 className="font-semibold text-foreground">Kontaktformular</h4>
                  <p className="mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                    aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                    zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  
                  <h4 className="font-semibold text-foreground">Newsletter</h4>
                  <p className="mb-4">
                    Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, 
                    benötigen wir von Ihnen eine E-Mail-Adresse. Die Anmeldung erfolgt im 
                    Double-Opt-In-Verfahren. Sie können den Newsletter jederzeit abbestellen.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground">5. Ihre Rechte</h3>
                  <p className="mb-4">
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung 
                    der Verarbeitung Ihrer personenbezogenen Daten. Bei Fragen wenden Sie sich 
                    gerne an uns unter den im Impressum angegebenen Kontaktdaten.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">
                      Stand dieser Datenschutzerklärung: Januar 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;