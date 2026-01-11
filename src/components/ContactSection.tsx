import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen zurück.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Haben Sie Fragen, Anregungen oder möchten Sie sich engagieren? 
            Wir freuen uns auf Ihren Kontakt und einen persönlichen Austausch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elevated">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Direkter Kontakt
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--svp-green))]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[hsl(var(--svp-green))]/20 group-hover:border-[hsl(var(--svp-green))]/40 transition-colors">
                    <MapPin className="h-6 w-6 text-[hsl(var(--svp-green))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Geschäftsstelle</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      SVP Stadt Zug<br />
                      Postfach<br />
                      6300 Zug
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--svp-green))]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[hsl(var(--svp-green))]/20 group-hover:border-[hsl(var(--svp-green))]/40 transition-colors">
                    <Mail className="h-6 w-6 text-[hsl(var(--svp-green))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                    <p className="text-muted-foreground">
                      sekretariat@svp-zug.ch
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--svp-green))]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[hsl(var(--svp-green))]/20 group-hover:border-[hsl(var(--svp-green))]/40 transition-colors">
                    <Phone className="h-6 w-6 text-[hsl(var(--svp-green))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      079 329 13 33 (Roman Küng)<br />
                      (Mo-Fr, 9:00-17:00 Uhr)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Öffnungszeiten Geschäftsstelle
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Montag - Freitag:</span>
                  <span>9:00 - 17:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag:</span>
                  <span>9:00 - 12:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag:</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nachricht senden
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    name="name"
                    placeholder="Ihr Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Ihre E-Mail *"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    name="phone"
                    placeholder="Telefonnummer (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    name="subject"
                    placeholder="Betreff *"
                    value={formData.subject}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Ihre Nachricht *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="btn-hero w-full">
                <Send className="mr-2 h-5 w-5" />
                Nachricht senden
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nur für die 
                Bearbeitung Ihrer Anfrage verwendet. Weitere Informationen finden Sie in 
                unserer Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;