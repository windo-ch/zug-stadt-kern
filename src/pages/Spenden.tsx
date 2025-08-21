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
        <section className="section-padding bg-gradient-to-br from-svp-green to-svp-green-light text-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Spenden
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Unterstützen Sie unsere politische Arbeit für eine bessere Stadt Zug. 
                Jeder Franken hilft uns, unsere Werte zu vertreten und Projekte umzusetzen.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Wofür wir Ihre Spende einsetzen
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Transparenz ist uns wichtig. Hier sehen Sie, wie Ihre Spende konkret wirkt.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {impactAreas.map((area, index) => (
                <div key={index} className="card-overview">
                  <div className="w-16 h-16 bg-gradient-to-br from-svp-green to-svp-green-light rounded-2xl flex items-center justify-center text-white mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    {area.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              <div className="card-initiative">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Jetzt spenden
                  </h2>
                  <p className="text-muted-foreground">
                    Wählen Sie Ihren Spendenbetrag und unterstützen Sie unsere Arbeit
                  </p>
                </div>

                {/* Donation Type */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Spendenart</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setDonationType('single')}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        donationType === 'single'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-semibold mb-1">Einmalige Spende</div>
                      <div className="text-sm text-muted-foreground">
                        Unterstützen Sie uns mit einer einmaligen Spende
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        donationType === 'monthly'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-semibold mb-1">Monatliche Spende</div>
                      <div className="text-sm text-muted-foreground">
                        Unterstützen Sie uns regelmässig jeden Monat
                      </div>
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Spendenbetrag {donationType === 'monthly' && '(monatlich)'}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`p-4 rounded-lg border-2 font-semibold transition-all duration-300 ${
                          selectedAmount === amount
                            ? 'border-primary bg-primary text-white'
                            : 'border-border hover:border-primary hover:bg-primary/5'
                        }`}
                      >
                        CHF {amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-semibold text-foreground">
                      Anderer Betrag:
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">CHF</span>
                      <input
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        placeholder="0"
                        className="w-32 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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