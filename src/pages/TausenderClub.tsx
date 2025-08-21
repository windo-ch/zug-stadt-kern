import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Users, Calendar, ArrowRight, Crown, Award, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const TausenderClub = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-24 px-4">
        <div className="container-max mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Exklusiver Förderkreis</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            1000er Club
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Ein bürgerlicher, überparteilicher Zusammenschluss von Persönlichkeiten, 
            welche die SVP Stadt Zug unterstützen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <a href="mailto:sekretariat.stadt@svp-zug.ch">
                Jetzt beitreten
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 bg-white/10" asChild>
              <a href="/1000er-club-veranstaltungen">
                Veranstaltungen
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Über den 1000er Club
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Der '1000er Club' ist ein bürgerlicher, überparteilicher Zusammenschluss von Persönlichkeiten, 
              welche die SVP Stadt Zug unterstützen. Diese Zuwendungen sind essentiell, bilden sie doch einen 
              der Eckpfeiler der Finanzierung von politischen und gesellschaftlichen Aktivitäten der Stadt-Partei.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="section-padding bg-muted/30">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mitgliederkategorien</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Dem Credo der SVP Stadt Zug – mir liefert – folgend, können sich Mitglieder in folgenden Kategorien engagieren:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="card-elevated border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Crown className="h-16 w-16 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Senatoren</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4 relative z-10">ab CHF 5'000.-</p>
                <p className="text-muted-foreground relative z-10">pro Jahr</p>
                <div className="flex justify-center mt-4 relative z-10">
                  {[...Array(5)].map((_, i) => <Sparkles key={i} className="h-4 w-4 text-yellow-400 mx-0.5" />)}
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:border-primary/30 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Award className="h-16 w-16 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Donatoren</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4 relative z-10">ab CHF 1'000.-</p>
                <p className="text-muted-foreground relative z-10">pro Jahr</p>
                <div className="flex justify-center mt-4 relative z-10">
                  {[...Array(3)].map((_, i) => <Sparkles key={i} className="h-4 w-4 text-yellow-400 mx-0.5" />)}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="card-elevated max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Joker-Option</h3>
              <p className="text-2xl font-bold text-primary mb-4">CHF 100.-</p>
              <p className="text-muted-foreground">
                Einmalige Teilnahme an einer Veranstaltung pro Jahr für Interessierte, 
                die sich vor einer definitiven Mitgliedschaft ein persönliches Bild machen möchten.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      

      {/* Contact & Outlook */}
      <section className="section-padding bg-muted/30">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Kontakt & Anmeldung</h2>
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6">
                    Weitere Auskünfte erteilt Ihnen der Präsident des 1000er-Clubs persönlich. 
                    Anmeldungen als Mitglied richten Sie bitte direkt per E-Mail an:
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <a href="mailto:sekretariat.stadt@svp-zug.ch" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors">
                      <Mail className="h-5 w-5" />
                      <span className="font-medium">sekretariat.stadt@svp-zug.ch</span>
                    </a>
                  </div>

                  <div className="border-t pt-6">
                    <p className="font-semibold text-lg mb-2">Marcus H. Bühler</p>
                    <p className="text-muted-foreground mb-4">Präsident des 1000er-Clubs</p>
                    <a href="tel:0793408168" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors">
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">079 340 81 68</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Outlook 2025 */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Ausblick 2025</h2>
              <Card className="card-elevated border-2 border-primary/20">
                <CardContent className="p-8">
                  <Calendar className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">
                    Nächstes Zusammentreffen
                  </h3>
                  <p className="text-lg font-medium text-primary mb-6">November 2025</p>
                  
                  <p className="text-muted-foreground mb-6">
                    Sind Sie interessiert daran teilzunehmen? Dann melden Sie bitte bereits jetzt 
                    ihr Interesse an:
                  </p>
                  
                  <Button className="btn-hero w-full" asChild>
                    <a href="mailto:sekretariat.stadt@svp-zug.ch">
                      <Mail className="mr-2 h-4 w-4" />
                      Interesse anmelden
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default TausenderClub;