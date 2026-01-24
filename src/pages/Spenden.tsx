import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Heart, Banknote, Users, Target, Building2, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Spenden = () => {
  
  const impactAreas = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Wahlkampagnen",
      description: "Finanzierung fairer und transparenter Wahlkämpfe für unsere Kandidaten",
      examples: ["Wahlplakate und Flyer", "Wahlveranstaltungen", "Digitale Kampagnen"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Politische Arbeit", 
      description: "Unterstützung unserer parlamentarischen und politischen Tätigkeiten",
      examples: ["Parlamentsarbeit", "Politische Bildung", "SVP Academy"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Bürgernähe",
      description: "Direkte Kommunikation und Bürgerkontakt in allen Zuger Quartieren",
      examples: ["Quartiertreffen", "Informationsanlässe", "Bürgerdialoge"]
    }
  ];

  return (
    <PageLayout 
      title="Spenden – SVP Stadt Zug"
      description="Unterstützen Sie die politische Arbeit der SVP Stadt Zug mit Ihrer Spende - für eine bessere Politik in unserer Stadt."
    >
      <main>
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden">
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-svp-green via-svp-green-light to-emerald-400">
            <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/20"></div>
            {/* Animated background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10 container-max">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Heart className="h-10 w-10" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Spenden
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
                Unterstützen Sie unsere politische Arbeit für eine bessere Stadt Zug. 
                Jeder Franken hilft uns, unsere Werte zu vertreten und Projekte umzusetzen.
              </p>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <div className="w-12 h-px bg-white/40"></div>
                <span className="text-sm uppercase tracking-wider">Gemeinsam für Zug</span>
                <div className="w-12 h-px bg-white/40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <Section variant="muted">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Target className="h-4 w-4" />
              Transparente Verwendung
            </div>
            <SectionHeader
              title="Wofür wir Ihre Spende einsetzen"
              description="Transparenz ist uns wichtig. Hier sehen Sie, wie Ihre Spende konkret wirkt."
              alignment="center"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {impactAreas.map((area, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative card-overview hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="space-y-3">
                    {area.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* TWINT Payment Method */}
        <Section>
          <SectionHeader
            title="Spenden mit TWINT"
            description="Schnell, sicher und einfach - Spenden Sie direkt mit TWINT"
            alignment="center"
            className="mb-12"
          />
          
          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6">
                    <Smartphone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    TWINT QR-Code
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Scannen Sie den QR-Code mit Ihrer TWINT-App oder klicken Sie auf den Link, um direkt zu spenden.
                  </p>
                  
                  {/* QR Code Placeholder */}
                  <div className="w-64 h-64 bg-muted rounded-xl flex items-center justify-center mb-6 border-2 border-dashed border-border">
                    <div className="text-center p-4">
                      <Smartphone className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">
                        TWINT QR-Code<br />
                        wird hier angezeigt
                      </p>
                    </div>
                  </div>
                  
                  {/* TWINT Link (if available) */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Smartphone className="h-5 w-5" />
                    Mit TWINT spenden
                  </a>
                  
                  <p className="text-xs text-muted-foreground mt-6">
                    TWINT ist die schnellste und sicherste Art zu spenden. Ihre Spende ist steuerlich absetzbar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Alternative Donation Methods */}
        <Section variant="muted">
          <SectionHeader
            title="Alternative Spendenmöglichkeiten"
            alignment="center"
            className="mb-12"
          />
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-overview">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Banküberweisung
              </h3>
              <div className="space-y-2 text-sm">
                <div><strong>Kontoinhaber:</strong> SVP Stadt Zug</div>
                <div><strong>IBAN:</strong> [IBAN wird vom Sekretariat bereitgestellt]</div>
                <div><strong>Bank:</strong> Zuger Kantonalbank</div>
                <div><strong>BIC:</strong> ZKBKCHZZ80A</div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Bitte geben Sie bei der Überweisung Ihren Namen und "Spende SVP" als Verwendungszweck an.
              </p>
            </div>
            
            <div className="card-overview">
              <Banknote className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Einzahlungsschein
              </h3>
              <p className="text-muted-foreground mb-4">
                Gerne senden wir Ihnen einen Einzahlungsschein per Post zu. 
                Kontaktieren Sie uns einfach.
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>E-Mail:</strong> sekretariat.stadt@svp-zug.ch</div>
                <div><strong>Kontakt für Spenden:</strong> Roman Küng: 079 329 13 33</div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default Spenden;