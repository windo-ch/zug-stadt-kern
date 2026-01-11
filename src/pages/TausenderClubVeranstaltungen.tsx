import PageLayout from "@/components/layout/PageLayout";
import { Calendar, Users, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { clubEvents } from "@/data/1000erClubEvents";

const TausenderClubVeranstaltungen = () => {

  return (
    <PageLayout 
      title="1000er Club Veranstaltungen - SVP Stadt Zug"
      description="Vergangene Events des 1000er Clubs der SVP Stadt Zug - Exklusive Veranstaltungen mit hochkarätigen Gästen und spannenden Tischreden."
    >
      {/* Hero Section */}
      <section className="gradient-hero py-24 px-4">
        <div className="container-max mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Calendar className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Vergangene Events</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            1000er Club Veranstaltungen
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Entdecken Sie unsere bisherigen exklusiven Events und die spannenden 
            Tischreden unserer hochkarätigen Gäste.
          </p>
          
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 bg-white/10" asChild>
            <Link to="/1000er-club">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Zurück zum 1000er Club
            </Link>
          </Button>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="space-y-12">
            {clubEvents.map((event, index) => (
              <Card key={index} className="card-elevated">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.speaker}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none">
                    {event.content.split('\n\n').map((paragraph, pIndex) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h3 key={pIndex} className="text-xl font-semibold text-primary mt-6 mb-3">
                            {paragraph.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      return (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">
                          {paragraph.replace(/\*\*/g, '')}
                        </p>
                      );
                    })}
                    
                    <div className="border-t pt-4 mt-6">
                      <p className="text-sm text-muted-foreground">
                        Für den 1000er Club der SVP Stadt Zug<br />
                        <span className="font-medium">{event.author}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="card-elevated max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Werden Sie Teil des 1000er Clubs
                </h3>
                <p className="text-muted-foreground mb-6">
                  Erleben Sie exklusive Veranstaltungen mit hochkarätigen Gästen 
                  und engagieren Sie sich für die politische Zukunft von Zug.
                </p>
                <Button className="btn-hero" asChild>
                  <a href="mailto:sekretariat.stadt@svp-zug.ch">
                    Jetzt Mitglied werden
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TausenderClubVeranstaltungen;