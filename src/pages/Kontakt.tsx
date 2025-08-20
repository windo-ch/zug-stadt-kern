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
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
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

  const keyContacts = [
    {
      name: "Peter Kaufmann",
      role: "Präsident",
      phone: "+41 79 123 45 67",
      email: "peter.kaufmann@svp-zug.ch",
      specialty: "Strategische Fragen, Medienanfragen"
    },
    {
      name: "Dr. Andrea Müller",
      role: "Stadträtin - Soziales & Sicherheit",
      phone: "+41 41 728 21 11",
      email: "andrea.mueller@stadtzug.ch",
      specialty: "Sicherheit, Sozialpolitik"
    },
    {
      name: "Thomas Bachmann",
      role: "Stadtrat - Planung & Infrastruktur",
      phone: "+41 41 728 21 12",
      email: "thomas.bachmann@stadtzug.ch",
      specialty: "Stadtentwicklung, Verkehr"
    },
    {
      name: "Maria Zimmermann",
      role: "Sekretärin",
      phone: "+41 79 456 78 90",
      email: "maria.zimmermann@svp-zug.ch",
      specialty: "Allgemeine Anfragen, Termine"
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

            {/* Key Contacts */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Direkte Ansprechpartner</h2>
              <div className="space-y-4">
                {keyContacts.map((contact, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{contact.name}</CardTitle>
                      <CardDescription>{contact.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                            {contact.email}
                          </a>
                        </div>
                        <p className="text-muted-foreground mt-2">
                          <strong>Schwerpunkt:</strong> {contact.specialty}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
          <div className="bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              Weitere Möglichkeiten der Kontaktaufnahme
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Bürgersprechstunden</h3>
                <p className="text-sm text-muted-foreground">
                  Jeden ersten Samstag im Monat von 10:00-12:00 Uhr im Parteisekretariat
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Mitgliederversammlungen</h3>
                <p className="text-sm text-muted-foreground">
                  Monatliche Versammlungen - offen für alle interessierten Bürger
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Social Media</h3>
                <p className="text-sm text-muted-foreground">
                  Folgen Sie uns für aktuelle Informationen und direkten Austausch
                </p>
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