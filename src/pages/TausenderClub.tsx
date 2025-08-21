import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Users, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TausenderClub = () => {
  return (
    <div className="min-h-screen bg-background">
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
            Werden Sie Teil unseres exklusiven Förderkreises und unterstützen Sie 
            die SVP Stadt Zug mit einem jährlichen Beitrag ab 1000 Franken.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              Jetzt beitreten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ihre Vorteile als 1000er Club Mitglied
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Geniessen Sie exklusive Vorteile und direkten Zugang zu Entscheidungsträgern
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Exklusive Veranstaltungen
                </h3>
                <p className="text-muted-foreground">
                  Einladungen zu besonderen Events, Diskussionsrunden und 
                  Networking-Anlässen nur für Club-Mitglieder.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Direkter Austausch
                </h3>
                <p className="text-muted-foreground">
                  Regelmässige Gespräche mit Stadtratsmitgliedern und 
                  Parteispitze über aktuelle politische Themen.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <Sparkles className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Insider Informationen
                </h3>
                <p className="text-muted-foreground">
                  Erhalten Sie exklusive Einblicke in politische Prozesse 
                  und Entscheidungen aus erster Hand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vergangene Veranstaltungen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie unsere bisherigen exklusiven Events und Anlässe
            </p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-8">
              Hier finden Sie bald Berichte und Impressionen unserer vergangenen 1000er Club Veranstaltungen.
            </p>
            <Button variant="outline" className="btn-outline">
              Kommende Events ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TausenderClub;