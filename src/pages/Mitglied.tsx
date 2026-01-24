import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import { Users, Heart, CheckCircle, ArrowRight, Phone, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Mitglied = () => {
  const reasons = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Für unsere Werte",
      description: "Setzen Sie sich für Sicherheit, Freiheit und Eigenverantwortung ein"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gemeinschaft erleben",
      description: "Werden Sie Teil einer starken politischen Gemeinschaft"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Direkt mitgestalten",
      description: "Bringen Sie Ihre Ideen ein und gestalten Sie Zugs Zukunft mit"
    }
  ];

  return (
    <PageLayout 
      title="Mitglied werden – SVP Stadt Zug"
      description="Werden Sie Mitglied der SVP Stadt Zug und engagieren Sie sich für eine bessere Politik in unserer Stadt."
    >
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[hsl(var(--svp-green))]/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mitglied werden
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Gestalten Sie die Zukunft von Zug aktiv mit. Werden Sie Teil unserer 
              politischen Gemeinschaft und setzen Sie sich für unsere gemeinsamen Werte ein.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="w-12 h-px bg-border"></div>
              <span className="text-sm uppercase tracking-wider">Gemeinsam stark</span>
              <div className="w-12 h-px bg-border"></div>
            </div>
          </div>
        </Section>

        {/* Why Join */}
        <Section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <CheckCircle className="h-4 w-4" />
              Ihre Vorteile
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Warum SVP Stadt Zug?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Als Mitglied der SVP Stadt Zug sind Sie mehr als nur Wähler - Sie sind Mitgestalter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-primary/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Werden Sie jetzt Mitglied
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Füllen Sie das Anmeldeformular auf der Website der SVP Kanton Zug aus, 
              um Mitglied der SVP Stadt Zug zu werden.
            </p>
            <Button 
              className="btn-hero text-lg px-8 py-6" 
              asChild
            >
              <a 
                href="https://www.svp-zug.ch/mitmachen/mitglied-werden/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Zur Anmeldung
              </a>
            </Button>
          </div>
        </Section>

        {/* Contact Info */}
        <Section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Fragen zur Mitgliedschaft?
            </h2>
            <p className="text-lg text-muted-foreground">
              Wir helfen Ihnen gerne weiter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-foreground mb-2">Telefonisch</h3>
              <a href="tel:+41793291333" className="text-primary hover:underline text-lg">
                079 329 13 33
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Roman Küng
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-foreground mb-2">Per E-Mail</h3>
              <a href="mailto:sekretariat.stadt@svp-zug.ch" className="text-primary hover:underline break-all">
                sekretariat.stadt@svp-zug.ch
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Sekretariat
              </p>
            </div>
          </div>
        </Section>
      </main>
    </PageLayout>
  );
};

export default Mitglied;
