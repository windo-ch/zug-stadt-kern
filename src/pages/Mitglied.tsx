import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Heart, CheckCircle, Euro, Calendar, ArrowRight, Phone, Mail } from 'lucide-react';

const Mitglied = () => {
  const [selectedMembership, setSelectedMembership] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    birthDate: '',
    occupation: ''
  });

  useEffect(() => {
    document.title = "Mitglied werden – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Werden Sie Mitglied der SVP Stadt Zug und engagieren Sie sich für eine bessere Politik in unserer Stadt.');
    }
  }, []);

  const membershipTypes = [
    {
      id: 'vollmitglied',
      title: 'Vollmitglied',
      price: '120',
      period: 'pro Jahr',
      description: 'Für alle, die sich aktiv politisch engagieren möchten',
      benefits: [
        'Vollständiges Stimm- und Wahlrecht',
        'Teilnahme an allen Parteianlässen',
        'Kandidatur für Ämter möglich',
        'Kostenloser Newsletter und Parteizeitung',
        'Vergünstigungen bei Veranstaltungen',
        'Politische Mitgestaltung und Vernetzung'
      ],
      recommended: true
    },
    {
      id: 'jugendbeitrag',
      title: 'Jugendmitglied',
      price: '60',
      period: 'pro Jahr (bis 25 Jahre)',
      description: 'Für junge Menschen bis 25 Jahre',
      benefits: [
        'Vollständiges Stimm- und Wahlrecht',
        'Spezielle Jugendanlässe und -förderung',
        'Mentoring durch erfahrene Politiker',
        'Kostenloser Newsletter',
        'Vergünstigungen bei allen Events',
        'Direkte Unterstützung beim Einstieg'
      ],
      recommended: false
    },
    {
      id: 'sympathisant',
      title: 'Sympathisant/in',
      price: '0',
      period: 'kostenlos',
      description: 'Für alle, die unsere Arbeit unterstützen möchten',
      benefits: [
        'Newsletter und wichtige Informationen',
        'Einladungen zu öffentlichen Anlässen',
        'Teilnahme an Diskussionsrunden',
        'Kein Stimm- und Wahlrecht',
        'Jederzeit zur Vollmitgliedschaft wechselbar',
        'Unverbindliche Unterstützung'
      ],
      recommended: false
    }
  ];

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual membership registration logic
    console.log('Membership application:', { selectedMembership, formData });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden">
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-svp-green via-svp-green-light to-blue-500">
            <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/20"></div>
            {/* Animated background elements */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="relative z-10 container-max">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Users className="h-10 w-10" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Mitglied werden
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
                Gestalten Sie die Zukunft von Zug aktiv mit. Werden Sie Teil unserer 
                politischen Gemeinschaft und setzen Sie sich für unsere gemeinsamen Werte ein.
              </p>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <div className="w-12 h-px bg-white/40"></div>
                <span className="text-sm uppercase tracking-wider">Gemeinsam stark</span>
                <div className="w-12 h-px bg-white/40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container-max">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <CheckCircle className="h-4 w-4" />
                Ihre Vorteile
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Warum SVP Stadt Zug?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Als Mitglied der SVP Stadt Zug sind Sie mehr als nur Wähler - Sie sind Mitgestalter
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {reasons.map((reason, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative card-overview text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Types */}
        <section className="section-padding relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/20"></div>
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
          
          <div className="relative container-max">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Users className="h-4 w-4" />
                Mitgliedschaftsoptionen
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Wählen Sie Ihre Mitgliedschaft
              </h2>
              <p className="text-lg text-muted-foreground">
                Verschiedene Optionen für verschiedene Bedürfnisse
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {membershipTypes.map((type, index) => (
                <div 
                  key={index} 
                  className={`group relative cursor-pointer transition-all duration-500 hover:scale-105 ${
                    selectedMembership === type.id ? 'scale-105' : ''
                  }`}
                  onClick={() => setSelectedMembership(type.id)}
                >
                  {/* Glow effect for selected */}
                  {selectedMembership === type.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10"></div>
                  )}
                  
                  <div className={`relative backdrop-blur-sm bg-white/80 dark:bg-card/80 rounded-2xl border-2 p-8 transition-all duration-500 hover:shadow-2xl ${
                    selectedMembership === type.id 
                      ? 'border-primary shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/5' 
                      : type.recommended 
                        ? 'border-primary/50 shadow-lg hover:border-primary' 
                        : 'border-border hover:border-primary/50'
                  }`}>
                    
                    {type.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
                          ⭐ Empfohlen
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {type.title}
                      </h3>
                      <div className="flex items-baseline justify-center gap-2 mb-4">
                        <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          CHF {type.price}
                        </span>
                        <span className="text-muted-foreground text-sm">{type.period}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {type.description}
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-200" style={{transitionDelay: `${benefitIndex * 50}ms`}}>
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                      selectedMembership === type.id 
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                        : 'border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent'
                    }`}>
                      {selectedMembership === type.id ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          Ausgewählt
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <ArrowRight className="h-5 w-5" />
                          Auswählen
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        {selectedMembership && (
          <section className="section-padding bg-background">
            <div className="container-max">
              <div className="max-w-2xl mx-auto">
                <div className="card-initiative">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                    Anmeldung
                  </h2>
                  <p className="text-muted-foreground text-center mb-8">
                    Ihre Mitgliedschaft: <strong>
                      {membershipTypes.find(t => t.id === selectedMembership)?.title}
                    </strong>
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Vorname *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Nachname *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Adresse *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          PLZ *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.zip}
                          onChange={(e) => handleInputChange('zip', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Ort *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Geburtsdatum
                        </label>
                        <input
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => handleInputChange('birthDate', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Beruf
                        </label>
                        <input
                          type="text"
                          value={formData.occupation}
                          onChange={(e) => handleInputChange('occupation', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        Mit der Anmeldung stimmen Sie unseren{' '}
                        <a href="/datenschutz" className="text-primary hover:underline">
                          Datenschutzbestimmungen
                        </a>{' '}
                        zu. Sie können Ihre Mitgliedschaft jederzeit kündigen.
                      </p>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn-hero text-lg py-4"
                    >
                      <ArrowRight className="h-5 w-5 mr-2" />
                      Anmeldung absenden
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Info */}
        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Fragen zur Mitgliedschaft?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="card-overview text-center">
                  <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-foreground mb-2">Telefonisch</h3>
                  <a href="tel:+41411234567" className="text-primary hover:underline">
                    +41 41 123 45 67
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mo-Fr 9:00-17:00 Uhr
                  </p>
                </div>
                
                <div className="card-overview text-center">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-foreground mb-2">Per E-Mail</h3>
                  <a href="mailto:mitgliedschaft@svp-stadt-zug.ch" className="text-primary hover:underline">
                    mitgliedschaft@svp-stadt-zug.ch
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Antwort innerhalb 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Mitglied;