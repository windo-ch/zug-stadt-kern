import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import { Sparkles, Users, Calendar, ArrowRight, Crown, Award, Mail, Phone, Check, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TausenderClub = () => {
  return (
    <PageLayout 
      title="1000er Club - SVP Stadt Zug"
      description="Ein bürgerlicher, überparteilicher Zusammenschluss von Persönlichkeiten, welche die SVP Stadt Zug unterstützen."
    >
      
      {/* Hero Section - Combined with intro */}
      <section className="relative py-20 md:py-28 px-4 flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/events/1000er-club/guggithal-1000club.avif)'
          }}
        >
          {/* Gradient Overlay - dimmed like homepage */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-background/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-max mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-foreground">Exklusiver Förderkreis</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              1000er Club
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Ein bürgerlicher, überparteilicher Zusammenschluss von Persönlichkeiten, 
              welche die SVP Stadt Zug unterstützen.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Diese Zuwendungen sind essentiell für die Finanzierung politischer und 
              gesellschaftlicher Aktivitäten der Stadt-Partei.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero" asChild>
                <Link to="/1000er-club-veranstaltungen">
                  <Calendar className="mr-2 h-5 w-5" />
                  Vergangene Veranstaltungen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Event - Prominent */}
      <Section variant="muted" id="next-event">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-primary mb-3">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Nächstes Event</span>
              </div>
            </div>

            <Card className="card-elevated border-2 border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Event Image - Left Side */}
                  <div className="relative w-full md:w-1/3 md:min-w-[300px] h-64 md:h-auto overflow-hidden">
                    <img
                      src="./assets/events/1000er-club/Remy%20Wyssmann-1000club.avif"
                      alt="1000er Club Event - Rémy Wyssmann, Februar 2026"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content - Right Side */}
                  <div className="flex-1 p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Calendar className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Restaurant Guggital, Zug</h2>
                        <p className="text-lg text-muted-foreground mb-4">
                          Dienstag, 17. Februar 2026
                        </p>
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold text-foreground mb-1">Gast & Tischredner</p>
                            <p className="text-primary">Herr Nationalrat Rémy Wyssmann, Solothurn</p>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground mb-1">Thema</p>
                            <p className="text-lg font-medium text-primary">Wysmann hat Biss – wie gewinnt man Wahlen?</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                      <p className="text-muted-foreground flex-1">
                        Interessiert? Melden Sie sich bereits jetzt an:
                      </p>
                      <Button className="btn-hero" asChild>
                        <a href="mailto:Sekretariat.stadt@svp-zug.ch">
                          <Mail className="mr-2 h-4 w-4" />
                          Anmelden
                        </a>
                      </Button>
                    </div>

                    <div className="border-t pt-4 mt-6">
                      <p className="text-xs text-muted-foreground">
                        Für den 1000er Club der SVP Stadt Zug – Marcus H. Bühler
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
      </Section>

      {/* Past Events CTA */}
      <Section variant="default">
          <Card className="card-elevated max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-10 text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Vergangene Veranstaltungen</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Entdecken Sie unsere bisherigen exklusiven Events mit hochkarätigen 
                Tischrednern wie Nationalrat Marcel Dettling, Alt Bundesrat Ueli Maurer 
                und vielen weiteren spannenden Persönlichkeiten.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/1000er-club-veranstaltungen">
                  <Calendar className="mr-2 h-5 w-5" />
                  Alle Veranstaltungen ansehen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
      </Section>

      {/* Membership Tiers - Clear pricing and benefits */}
      <Section variant="default">
        <SectionHeader 
          title="Mitgliedschaft & Kosten"
          description="Wählen Sie die Mitgliedschaft, die zu Ihnen passt"
          alignment="center"
        />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {/* Donatoren */}
            <Card className="card-elevated hover:border-primary/40 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <Award className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl mb-2">Donatoren</CardTitle>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">ab CHF 1'000</p>
                  <p className="text-sm text-muted-foreground">pro Jahr</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Teilnahme an allen 1000er Club Veranstaltungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Exklusive Tischreden hochkarätiger Gäste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Networking mit Gleichgesinnten</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href={`mailto:sekretariat.stadt@svp-zug.ch?subject=${encodeURIComponent('Beitritt 1000er Club - Donatoren')}&body=${encodeURIComponent('Guten Tag\n\nIch interessiere mich für eine Mitgliedschaft als Donator im 1000er Club der SVP Stadt Zug.\n\nBitte kontaktieren Sie mich für weitere Informationen.\n\nFreundliche Grüsse')}`}
                  >
                    Beitreten
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Joker */}
            <Card className="card-elevated hover:border-primary/40 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl mb-2">Joker-Option</CardTitle>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">CHF 100</p>
                  <p className="text-sm text-muted-foreground">einmalig pro Jahr</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Einmalige Teilnahme an einer Veranstaltung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Kennenlernen vor der Mitgliedschaft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Unverbindlich testen</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href={`mailto:sekretariat.stadt@svp-zug.ch?subject=${encodeURIComponent('1000er Club - Joker-Option')}&body=${encodeURIComponent('Guten Tag\n\nIch interessiere mich für die Joker-Option des 1000er Clubs der SVP Stadt Zug und würde gerne einmalig an einer Veranstaltung teilnehmen.\n\nBitte kontaktieren Sie mich für weitere Informationen.\n\nFreundliche Grüsse')}`}
                  >
                    Testen
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
      </Section>


      {/* Contact */}
      <Section variant="muted">
        <div className="max-w-2xl mx-auto">
          <SectionHeader 
            title="Kontakt"
            description="Fragen? Unser Präsident steht Ihnen gerne zur Verfügung"
            alignment="center"
          />
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))] shadow-lg mx-auto mb-4">
                    <img
                      src="./assets/people/vorstand/Marcus-Buehler_SVP.jpg"
                      alt="Marcus H. Bühler - Präsident des 1000er-Clubs"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Marcus H. Bühler</h3>
                  <p className="text-muted-foreground mb-6">Präsident des 1000er-Clubs</p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:sekretariat.stadt@svp-zug.ch" 
                    className="flex items-center justify-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">sekretariat.stadt@svp-zug.ch</span>
                  </a>
                  
                  <a 
                    href="tel:0793408168" 
                    className="flex items-center justify-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">079 340 81 68</span>
                  </a>
                </div>
              </CardContent>
            </Card>
        </div>
      </Section>
    </PageLayout>
  );
};

export default TausenderClub;
