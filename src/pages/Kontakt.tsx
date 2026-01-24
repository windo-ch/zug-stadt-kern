import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle, Calendar, Send } from 'lucide-react';

const Kontakt = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "079 329 13 33",
      description: "Roman Küng",
      action: "tel:+41793291333"
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "sekretariat.stadt@svp-zug.ch",
      description: "Antwort innerhalb von 24 Stunden",
      action: "mailto:sekretariat.stadt@svp-zug.ch"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "SVP Stadt Zug, Postfach, 6300 Zug",
      description: "Parteisekretariat SVP Stadt Zug",
      action: null
    }
  ];

  return (
    <PageLayout 
      title="Kontakt - SVP Stadt Zug"
      description="Kontaktieren Sie die SVP Stadt Zug. Wir sind für Ihre Anliegen, Fragen und Anregungen da."
    >
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-base px-4 py-2 border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))]">
              Kontakt
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Kontaktieren Sie uns
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Haben Sie Fragen, Anregungen oder möchten Sie sich über unsere politische Arbeit informieren? 
              Wir freuen uns auf Ihre Nachricht und stehen Ihnen gerne zur Verfügung.
            </p>
          </div>
        </Section>

        {/* Contact Information */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{info.title}</h3>
                    {info.action ? (
                      <a 
                        href={info.action} 
                        className="text-primary hover:text-primary/80 transition-colors font-medium text-base block mb-2"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-base mb-2">{info.content}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Ansprechpartner */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 text-center text-lg">Weitere Ansprechpartner finden Sie hier:</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <a href="/vorstand">Vorstand</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/stadtrat">Stadtrat und Gemeinderäte</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Additional Information */}
        <Section variant="muted">
          <SectionHeader
            title="Weitere Möglichkeiten der Kontaktaufnahme"
            alignment="center"
            className="mb-12"
          />
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Mitgliederversammlungen</h3>
                  <p className="text-sm text-muted-foreground">
                    Monatliche Versammlungen - offen für alle interessierten Bürger
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">1000er Club</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    3 Veranstaltungen im Jahr
                  </p>
                  <a 
                    href="/1000er-club"
                    className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-1"
                  >
                    Mehr erfahren
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Direkter Austausch</h3>
                  <p className="text-sm text-muted-foreground">
                    Folgen Sie uns für aktuelle Informationen und direkten Austausch
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <a href="/aktuelle-termine">Aktuelle Termine ansehen</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default Kontakt;