import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Banknote, Users, Target, Shield, CheckCircle, CreditCard, Smartphone, Building2 } from 'lucide-react';

const Spenden = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<'single' | 'monthly'>('single');
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  useEffect(() => {
    document.title = "Spenden – SVP Stadt Zug";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Unterstützen Sie die politische Arbeit der SVP Stadt Zug mit Ihrer Spende - für eine bessere Politik in unserer Stadt.');
    }
  }, []);

  const predefinedAmounts = ['25', '50', '100', '250', '500', '1000'];
  
  const impactAreas = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Wahlkampagnen",
      description: "Finanzierung fairer und transparenter Wahlkämpfe für unsere Kandidaten",
      examples: ["Wahlplakate und Flyer", "Wahlveranstaltungen", "Digitale Kampagnen"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Politische Arbeit", 
      description: "Unterstützung unserer parlamentarischen und politischen Tätigkeiten",
      examples: ["Parlamentsarbeit", "Bürgersprechstunden", "Politische Bildung"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Bürgernähe",
      description: "Direkte Kommunikation und Bürgerkontakt in allen Zuger Quartieren",
      examples: ["Quartiertreffen", "Informationsanlässe", "Bürgerdialoge"]
    }
  ];

  const paymentMethods = [
    {
      id: 'twint',
      name: 'TWINT',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'Schnell und sicher mit TWINT'
    },
    {
      id: 'card',
      name: 'Kreditkarte',
      icon: <CreditCard className="h-6 w-6" />,
      description: 'Visa, Mastercard, Postcard'
    },
    {
      id: 'bank',
      name: 'Banküberweisung',
      icon: <Building2 className="h-6 w-6" />,
      description: 'Klassische Banküberweisung'
    }
  ];

  const benefits = [
    "Steuerlich absetzbar in der Schweiz",
    "Transparente Verwendung Ihrer Spende",
    "Regelmässige Updates über unsere Arbeit",
    "Keine Weitergabe Ihrer Daten"
  ];

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount('');
  };

  const getCurrentAmount = () => {
    return customAmount || selectedAmount;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden">
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-svp-green via-svp-green-light to-emerald-400">
            <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/20"></div>
            {/* Animated background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10 container-max">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Heart className="h-10 w-10" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Spenden
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
                Unterstützen Sie unsere politische Arbeit für eine bessere Stadt Zug. 
                Jeder Franken hilft uns, unsere Werte zu vertreten und Projekte umzusetzen.
              </p>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <div className="w-12 h-px bg-white/40"></div>
                <span className="text-sm uppercase tracking-wider">Gemeinsam für Zug</span>
                <div className="w-12 h-px bg-white/40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container-max">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Target className="h-4 w-4" />
                Transparente Verwendung
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Wofür wir Ihre Spende einsetzen
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Transparenz ist uns wichtig. Hier sehen Sie, wie Ihre Spende konkret wirkt.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {impactAreas.map((area, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative card-overview hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="space-y-3">
                      {area.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="section-padding relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/20"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
          
          <div className="relative container-max">
            <div className="max-w-4xl mx-auto">
              <div className="backdrop-blur-sm bg-white/80 dark:bg-card/80 rounded-2xl shadow-2xl border border-white/20 p-8 lg:p-12">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">
                    Jetzt spenden
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Wählen Sie Ihren Spendenbetrag und unterstützen Sie unsere Arbeit für eine bessere Stadt Zug
                  </p>
                </div>

                {/* Donation Type */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    Spendenart wählen
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setDonationType('single')}
                      className={`group p-6 rounded-xl border-2 text-left transition-all duration-500 hover:shadow-lg hover:scale-[1.02] ${
                        donationType === 'single'
                          ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-lg scale-[1.02]'
                          : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                          donationType === 'single' ? 'border-primary bg-primary' : 'border-muted-foreground'
                        }`}>
                          {donationType === 'single' && <div className="w-full h-full rounded-full bg-white scale-50"></div>}
                        </div>
                        <div className="font-semibold">Einmalige Spende</div>
                      </div>
                      <div className="text-sm text-muted-foreground ml-7">
                        Unterstützen Sie uns mit einer einmaligen Spende
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`group p-6 rounded-xl border-2 text-left transition-all duration-500 hover:shadow-lg hover:scale-[1.02] ${
                        donationType === 'monthly'
                          ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-lg scale-[1.02]'
                          : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                          donationType === 'monthly' ? 'border-primary bg-primary' : 'border-muted-foreground'
                        }`}>
                          {donationType === 'monthly' && <div className="w-full h-full rounded-full bg-white scale-50"></div>}
                        </div>
                        <div className="font-semibold">Monatliche Spende</div>
                      </div>
                      <div className="text-sm text-muted-foreground ml-7">
                        Unterstützen Sie uns regelmässig jeden Monat
                      </div>
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    Spendenbetrag {donationType === 'monthly' && '(monatlich)'}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`group p-4 rounded-xl border-2 font-semibold transition-all duration-300 hover:shadow-md hover:scale-105 ${
                          selectedAmount === amount
                            ? 'border-primary bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg scale-105'
                            : 'border-border hover:border-primary hover:bg-primary/5'
                        }`}
                      >
                        <div className="text-lg">CHF {amount}</div>
                        {selectedAmount === amount && (
                          <div className="text-xs opacity-90 mt-1">Ausgewählt</div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <label className="text-sm font-semibold text-foreground whitespace-nowrap">
                      Anderer Betrag:
                    </label>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-muted-foreground font-semibold">CHF</span>
                      <input
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        placeholder="0"
                        className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Zahlungsmethode</h3>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 flex items-center gap-4 ${
                          paymentMethod === method.id
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {method.icon}
                        </div>
                        <div>
                          <div className="font-semibold">{method.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {method.description}
                          </div>
                        </div>
                        {paymentMethod === method.id && (
                          <CheckCircle className="h-5 w-5 ml-auto text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Ihre Vorteile
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total & Submit */}
                {getCurrentAmount() && (
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold text-foreground">
                        {donationType === 'monthly' ? 'Monatlicher Betrag:' : 'Spendenbetrag:'}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        CHF {getCurrentAmount()}
                      </span>
                    </div>
                    
                    <button
                      className="w-full btn-hero text-lg py-4"
                      disabled={!getCurrentAmount() || !paymentMethod}
                    >
                      <Heart className="h-5 w-5 mr-2" />
                      {donationType === 'monthly' ? 'Monatliche Spende einrichten' : 'Jetzt spenden'}
                    </button>
                    
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Sie werden zu unserem sicheren Zahlungsanbieter weitergeleitet. 
                      Mit dem Klick stimmen Sie unserer{' '}
                      <a href="/datenschutz" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      zu.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Donation Methods */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Alternative Spendenmöglichkeiten
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-overview">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Banküberweisung
                </h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Kontoinhaber:</strong> SVP Stadt Zug</div>
                  <div><strong>IBAN:</strong> CH12 0000 1111 2222 3333 4</div>
                  <div><strong>Bank:</strong> Zuger Kantonalbank</div>
                  <div><strong>BIC:</strong> ZKBKCHZZ80A</div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Bitte geben Sie bei der Überweisung Ihren Namen und "Spende SVP" als Verwendungszweck an.
                </p>
              </div>
              
              <div className="card-overview">
                <Banknote className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Einzahlungsschein
                </h3>
                <p className="text-muted-foreground mb-4">
                  Gerne senden wir Ihnen einen Einzahlungsschein per Post zu. 
                  Kontaktieren Sie uns einfach.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>E-Mail:</strong> spenden@svp-stadt-zug.ch</div>
                  <div><strong>Telefon:</strong> +41 41 123 45 67</div>
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

export default Spenden;