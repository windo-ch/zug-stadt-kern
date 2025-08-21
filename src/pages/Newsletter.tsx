import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Check, Calendar, FileText, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [frequency, setFrequency] = useState('regular');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);

  useEffect(() => {
    document.title = "Newsletter – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Abonnieren Sie den Newsletter der SVP Stadt Zug und bleiben Sie über politische Entwicklungen informiert.');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreePrivacy && agreeNewsletter) {
      toast({
        title: "Erfolgreich angemeldet!",
        description: "Sie erhalten in Kürze eine Bestätigungs-E-Mail.",
      });
      setIsSubscribed(true);
      // Reset form
      setEmail('');
      setFirstName('');
      setLastName('');
      setInterests([]);
      setAgreePrivacy(false);
      setAgreeNewsletter(false);
    }
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interest]);
    } else {
      setInterests(interests.filter(i => i !== interest));
    }
  };

  const interestOptions = [
    { id: 'politics', label: 'Stadtpolitik', description: 'Lokale politische Entwicklungen' },
    { id: 'votes', label: 'Abstimmungen', description: 'Empfehlungen und Analysen' },
    { id: 'events', label: 'Veranstaltungen', description: 'Termine und Events' },
    { id: 'initiatives', label: 'Vorstösse', description: 'Parlamentarische Initiativen' },
    { id: 'news', label: 'Aktuelle News', description: 'Neuigkeiten und Medienmitteilungen' },
    { id: 'party', label: 'Partei-Intern', description: 'Mitgliederinfos und interne News' }
  ];

  const benefits = [
    {
      icon: Calendar,
      title: "Aktuelle Termine",
      description: "Erfahren Sie von unseren Veranstaltungen, Sprechstunden und politischen Events."
    },
    {
      icon: FileText,
      title: "Politische Standpunkte",
      description: "Unsere Positionen zu aktuellen Themen, Abstimmungsempfehlungen und Parlamentsarbeit."
    },
    {
      icon: MessageSquare,
      title: "Direkte Kommunikation",
      description: "Hintergrundinfos und Einschätzungen unserer Politiker direkt aus dem Stadtrat."
    }
  ];

  const faqItems = [
    {
      question: "Wie oft erscheint der Newsletter?",
      answer: "Unser regulärer Newsletter erscheint alle 2 Wochen. Bei wichtigen politischen Ereignissen versenden wir zusätzliche Updates. Sie haben die Kontrolle über die Häufigkeit."
    },
    {
      question: "Kann ich die Themen auswählen?",
      answer: "Ja! Bei der Anmeldung können Sie Ihre Interessensgebiete angeben. Sie erhalten dann nur Newsletter zu den Themen, die Sie interessieren."
    },
    {
      question: "Kann ich mich jederzeit wieder abmelden?",
      answer: "Selbstverständlich. In jeder E-Mail finden Sie einen Abmelde-Link. Die Abmeldung ist jederzeit möglich und erfolgt sofort."
    },
    {
      question: "Werden meine Daten weitergegeben?",
      answer: "Niemals. Ihre Daten werden ausschliesslich für unseren Newsletter verwendet und nicht an Dritte weitergegeben. Details finden Sie in unserer Datenschutzerklärung."
    },
    {
      question: "Ist der Newsletter kostenlos?",
      answer: "Ja, unser Newsletter ist komplett kostenlos und enthält keine Werbung. Er wird durch die Mitgliedsbeiträge und Spenden der SVP Stadt Zug finanziert."
    },
    {
      question: "Kann ich auch als Nicht-Mitglied abonnieren?",
      answer: "Ja, unser Newsletter steht allen interessierten Bürgerinnen und Bürgern offen, unabhängig von einer Parteimitgliedschaft."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Newsletter</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unser Newsletter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Bleiben Sie auf dem Laufenden über die politische Arbeit der SVP Stadt Zug. 
            Direkt in Ihr Postfach, regelmässig und kostenlos - mit den Themen, die Sie interessieren.
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="subscribe" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="subscribe" className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Abonnieren
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              FAQ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subscribe" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Subscription Form */}
              <div>
                {!isSubscribed ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Jetzt kostenlos abonnieren</CardTitle>
                      <CardDescription>
                        Erhalten Sie unseren Newsletter alle 2 Wochen direkt in Ihr E-Mail-Postfach. 
                        Keine Werbung, keine Weitergabe Ihrer Daten, jederzeit kündbar.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Vorname</Label>
                            <Input
                              id="firstName"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              placeholder="Ihr Vorname"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Nachname</Label>
                            <Input
                              id="lastName"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              placeholder="Ihr Nachname"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">E-Mail-Adresse *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ihre.email@beispiel.ch"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="frequency">Häufigkeit</Label>
                          <Select value={frequency} onValueChange={setFrequency}>
                            <SelectTrigger>
                              <SelectValue placeholder="Wählen Sie die Häufigkeit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="regular">Regulär (alle 2 Wochen)</SelectItem>
                              <SelectItem value="important">Nur wichtige Updates</SelectItem>
                              <SelectItem value="all">Alle Nachrichten</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-4">
                          <Label>Interessensgebiete (optional)</Label>
                          <div className="grid grid-cols-1 gap-3">
                            {interestOptions.map((option) => (
                              <div key={option.id} className="flex items-start space-x-3">
                                <Checkbox
                                  id={option.id}
                                  checked={interests.includes(option.id)}
                                  onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                  <Label
                                    htmlFor={option.id}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {option.label}
                                  </Label>
                                  <p className="text-xs text-muted-foreground">
                                    {option.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="privacy"
                              checked={agreePrivacy}
                              onCheckedChange={(checked) => setAgreePrivacy(checked as boolean)}
                              required
                            />
                            <Label htmlFor="privacy" className="text-sm leading-relaxed">
                              Ich stimme der{' '}
                              <a href="/datenschutz" className="text-primary hover:underline">
                                Datenschutzerklärung
                              </a>{' '}
                              zu. *
                            </Label>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="newsletter"
                              checked={agreeNewsletter}
                              onCheckedChange={(checked) => setAgreeNewsletter(checked as boolean)}
                              required
                            />
                            <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                              Ich möchte den Newsletter der SVP Stadt Zug erhalten und kann mich jederzeit wieder abmelden. *
                            </Label>
                          </div>
                        </div>

                        <Button type="submit" className="w-full" disabled={!email || !agreePrivacy || !agreeNewsletter}>
                          <Send className="w-4 h-4 mr-2" />
                          Newsletter abonnieren
                        </Button>

                        <p className="text-xs text-muted-foreground">
                          * Pflichtfelder. Sie können sich jederzeit wieder abmelden.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-8 text-center">
                      <Check className="h-16 w-16 mx-auto mb-6 text-green-600" />
                      <h2 className="text-2xl font-bold text-green-800 mb-4">
                        Erfolgreich angemeldet!
                      </h2>
                      <p className="text-green-700 mb-6">
                        Sie erhalten in Kürze eine Bestätigungs-E-Mail. 
                        Vielen Dank für Ihr Interesse an unserer politischen Arbeit.
                      </p>
                      <Button 
                        onClick={() => setIsSubscribed(false)}
                        variant="outline"
                        className="text-green-700 border-green-300 hover:bg-green-100"
                      >
                        Weitere E-Mail hinzufügen
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Was Sie erwartet</h2>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's in the Newsletter */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Inhalte unseres Newsletters</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Abstimmungsempfehlungen mit Begründungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Aktuelle Vorstösse und parlamentarische Arbeit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Termine für Veranstaltungen und Sprechstunden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Einblicke in die Stadtratssitzungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Medienmitteilungen und Presseartikel</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Häufig gestellte Fragen
              </h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Newsletter;