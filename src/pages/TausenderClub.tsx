import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Users, Calendar, ArrowRight, Crown, Award, Mail, Phone, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TausenderClub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-32 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-primary/10 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-yellow-400/10 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="container-max mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-12 hover:bg-white/20 transition-all duration-300 animate-fade-in">
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-medium text-white">Exklusiver Förderkreis</span>
            <Star className="h-4 w-4 text-yellow-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in delay-300">
            <span className="bg-gradient-to-r from-white via-white to-yellow-200 bg-clip-text text-transparent">
              1000er Club
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in delay-500">
            Ein bürgerlicher, überparteilicher Zusammenschluss von Persönlichkeiten, 
            welche die SVP Stadt Zug unterstützen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-700">
            <Button size="lg" className="btn-hero group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
              <a href="mailto:sekretariat.stadt@svp-zug.ch">
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Jetzt beitreten
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg" asChild>
              <a href="/1000er-club-veranstaltungen">
                <Calendar className="mr-2 h-5 w-5" />
                Veranstaltungen
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
        <div className="container-max mx-auto relative">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-8">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Exklusive Gemeinschaft</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Über den 1000er Club
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Der '1000er Club' ist ein bürgerlicher, überparteilicher Zusammenschluss von Persönlichkeiten, 
              welche die SVP Stadt Zug unterstützen. Diese Zuwendungen sind essentiell, bilden sie doch einen 
              der Eckpfeiler der Finanzierung von politischen und gesellschaftlichen Aktivitäten der Stadt-Partei.
            </p>
            
            {/* Stats or highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Crown className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Senatoren</h3>
                <p className="text-muted-foreground">Premium Unterstützung</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Donatoren</h3>
                <p className="text-muted-foreground">Starke Unterstützung</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Joker</h3>
                <p className="text-muted-foreground">Schnuppermitgliedschaft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="section-padding bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-max mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-full px-4 py-2 mb-8">
              <Crown className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Mitgliedschaftskategorien</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Spendenkategorien
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dem Credo der SVP Stadt Zug – mir liefert – folgend, können sich Mitglieder in folgenden Kategorien engagieren:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="card-elevated border-2 border-primary/20 group hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-background/95">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                <Crown className="h-20 w-20 text-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold mb-6 text-foreground">Senatoren</h3>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">ab CHF 5'000.-</p>
                  <p className="text-muted-foreground font-medium">pro Jahr</p>
                </div>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Premium-Mitgliedschaft mit allen Vorteilen</p>
              </CardContent>
            </Card>

            <Card className="card-elevated group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-background/95">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                <Award className="h-20 w-20 text-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold mb-6 text-foreground">Donatoren</h3>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">ab CHF 1'000.-</p>
                  <p className="text-muted-foreground font-medium">pro Jahr</p>
                </div>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <Star className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Vollwertige Mitgliedschaft</p>
              </CardContent>
            </Card>
          </div>

          <Card className="card-elevated max-w-3xl mx-auto group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-gradient-to-br from-background to-muted/5 border-2 border-dashed border-primary/30">
            <CardContent className="p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
              <Sparkles className="h-16 w-16 text-primary mx-auto mb-8 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Joker-Option</h3>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary mb-2">CHF 100.-</p>
                <p className="text-muted-foreground font-medium">einmalig</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Einmalige Teilnahme an einer Veranstaltung pro Jahr für Interessierte, 
                die sich vor einer definitiven Mitgliedschaft ein persönliches Bild machen möchten.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary/80 bg-primary/10 rounded-full px-4 py-2">
                <Zap className="h-4 w-4" />
                <span>Perfekt zum Kennenlernen</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/10 to-background"></div>
        <div className="container-max mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-8">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Mitgliedervorteile</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ihre Vorteile als Mitglied
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Als Mitglied des 1000er Clubs profitieren Sie von exklusiven Veranstaltungen und einem wertvollen Netzwerk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card className="card-elevated group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-12 -mt-12"></div>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-8 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Drei Veranstaltungen pro Jahr
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Das verantwortliche Komitee des '1000er-Clubs' unter der Leitung des Präsidenten 
                  organisiert drei exklusive Veranstaltungen pro Jahr.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Networking Events</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Exklusive Diskussionsrunden</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-secondary/5">
              <CardContent className="p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-full -mr-12 -mt-12"></div>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-2xl mb-8 group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Pro Wirtschaft Zug Events
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Donatoren und Senatoren werden gratis an die Veranstaltungen 
                  des Vereins Pro Wirtschaft Zug eingeladen.
                </p>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Wirtschaftsveranstaltungen</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary mt-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Kostenfreie Teilnahme</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional benefits highlight */}
          <div className="mt-16 text-center">
            <Card className="card-elevated max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-2 border-dashed border-primary/20">
              <CardContent className="p-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Zusätzliche Vorteile</h3>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Crown className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Werden Sie Teil einer exklusiven Gemeinschaft von Unternehmern und Meinungsführern, 
                  die aktiv die politische Zukunft von Zug mitgestalten.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Outlook */}
      <section className="section-padding bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-max mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-full px-4 py-2 mb-6">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Kontakt</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Kontakt & Anmeldung</h2>
              </div>
              
              <Card className="card-elevated group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-primary/5">
                <CardContent className="p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                  
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Weitere Auskünfte erteilt Ihnen der Präsident des 1000er-Clubs persönlich. 
                    Anmeldungen als Mitglied richten Sie bitte direkt per E-Mail an:
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <a 
                      href="mailto:sekretariat.stadt@svp-zug.ch" 
                      className="flex items-center gap-4 text-primary hover:text-primary/80 transition-all duration-300 group/link p-4 rounded-xl bg-primary/5 hover:bg-primary/10"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover/link:bg-primary/20 transition-colors">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">E-Mail</p>
                        <p className="text-sm">sekretariat.stadt@svp-zug.ch</p>
                      </div>
                    </a>
                  </div>

                  <div className="border-t pt-8">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-xl mb-1">Marcus H. Bühler</p>
                        <p className="text-primary font-medium mb-4">Präsident des 1000er-Clubs</p>
                        <a 
                          href="tel:0793408168" 
                          className="flex items-center gap-3 text-primary hover:text-primary/80 transition-all duration-300 group/phone p-3 rounded-lg bg-primary/5 hover:bg-primary/10 inline-flex"
                        >
                          <Phone className="h-5 w-5 group-hover/phone:animate-pulse" />
                          <span className="font-medium">079 340 81 68</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Outlook 2025 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-full px-4 py-2 mb-6">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Vorausschau</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Ausblick 2025</h2>
              </div>
              
              <Card className="card-elevated border-2 border-primary/20 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-background to-secondary/5">
                <CardContent className="p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
                  
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                      <Calendar className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      Nächstes Zusammentreffen
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-6 py-3 mb-6">
                      <Star className="h-4 w-4" />
                      <p className="text-xl font-bold">November 2025</p>
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 text-center leading-relaxed">
                    Sind Sie interessiert daran teilzunehmen? Dann melden Sie bitte bereits jetzt 
                    ihr Interesse an:
                  </p>
                  
                  <Button className="btn-hero w-full group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
                    <a href="mailto:sekretariat.stadt@svp-zug.ch">
                      <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Interesse anmelden
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Limitierte Plätze verfügbar
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TausenderClub;