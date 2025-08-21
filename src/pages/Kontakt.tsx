import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  useEffect(() => {
    document.title = "Kontakt - SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kontaktieren Sie die SVP Stadt Zug. Wir sind für Ihre Anliegen, Fragen und Anregungen da.');
    }
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+41 41 728 21 00",
      description: "Montag bis Freitag, 9:00 - 17:00 Uhr",
      action: "tel:+41417282100"
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@svp-stadt-zug.ch",
      description: "Antwort innerhalb von 24 Stunden",
      action: "mailto:info@svp-stadt-zug.ch"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Postfach 123, 6300 Zug",
      description: "Parteisekretariat SVP Stadt Zug",
      action: null
    },
    {
      icon: Clock,
      title: "Bürozeiten",
      content: "Mo-Fr: 9:00-17:00",
      description: "Termine nach Vereinbarung möglich",
      action: null
    }
  ];

  const keyFeatures = [
    {
      title: "Schnelle Antwort",
      description: "Wir antworten innerhalb von 24 Stunden auf Ihre Anfragen",
      icon: "⚡"
    },
    {
      title: "Direkte Kontakte",
      description: "Sprechen Sie direkt mit unseren Vorstandsmitgliedern und Parlamentariern",
      icon: "👥"
    },
    {
      title: "Bürgersprechstunden",
      description: "Regelmässige persönliche Gesprächsmöglichkeiten vor Ort",
      icon: "🗣️"
    },
    {
      title: "Online & Offline",
      description: "Kontakt über verschiedene Kanäle - wie es für Sie am besten passt",
      icon: "💬"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Kontakt</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Haben Sie Fragen, Anregungen oder möchten Sie sich über unsere politische Arbeit informieren? 
            Wir freuen uns auf Ihre Nachricht und stehen Ihnen gerne zur Verfügung.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Contact */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktinformationen</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          {info.action ? (
                            <a 
                              href={info.action} 
                              className="text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.content}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Warum uns kontaktieren?</h2>
              <div className="grid gap-4">
                {keyFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Unsere Ansprechpartner finden Sie hier:</h3>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <a href="/vorstand" className="text-primary hover:text-primary/80 transition-colors font-medium">
                    → Vorstand & Führung
                  </a>
                  <a href="/stadtrat" className="text-primary hover:text-primary/80 transition-colors font-medium">
                    → Parlamentarier & Stadträte
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Nachricht senden</CardTitle>
                </div>
                <CardDescription>
                  Füllen Sie das Formular aus, und wir melden uns so schnell wie möglich bei Ihnen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ihr vollständiger Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="ihre.email@beispiel.ch"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+41 XX XXX XX XX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Kategorie</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Wählen Sie eine Kategorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Allgemeine Anfrage</SelectItem>
                          <SelectItem value="membership">Mitgliedschaft</SelectItem>
                          <SelectItem value="politics">Politische Frage</SelectItem>
                          <SelectItem value="event">Veranstaltung</SelectItem>
                          <SelectItem value="media">Medienanfrage</SelectItem>
                          <SelectItem value="complaint">Beschwerde</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Betreff *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Kurze Beschreibung Ihres Anliegens"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Beschreiben Sie Ihr Anliegen ausführlich..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Nachricht senden
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 rounded-2xl p-8 border border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Weitere Möglichkeiten der Kontaktaufnahme
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-none shadow-none bg-transparent">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Bürgersprechstunden</h3>
                  <p className="text-sm text-muted-foreground">
                    Jeden ersten Samstag im Monat von 10:00-12:00 Uhr im Parteisekretariat
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-none bg-transparent">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Mitgliederversammlungen</h3>
                  <p className="text-sm text-muted-foreground">
                    Monatliche Versammlungen - offen für alle interessierten Bürger
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-none bg-transparent">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Direkter Austausch</h3>
                  <p className="text-sm text-muted-foreground">
                    Folgen Sie uns für aktuelle Informationen und direkten Austausch
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/veranstaltungen">Aktuelle Termine</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/newsletter">Newsletter abonnieren</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;