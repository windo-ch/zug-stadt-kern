import { useState, useEffect } from 'react';
import { X, Settings, Shield, BarChart3, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Link } from 'react-router-dom';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookie-preferences');
    if (!cookieChoice) {
      // Show notice after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveCookiePreferences = (preferences: CookieSettings) => {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true
    };
    saveCookiePreferences(allAccepted);
  };

  const acceptSelected = () => {
    saveCookiePreferences(settings);
  };

  const rejectOptional = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false
    };
    saveCookiePreferences(essentialOnly);
  };

  const toggleSetting = (key: keyof CookieSettings) => {
    if (key === 'essential') return; // Essential can't be toggled
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/20 backdrop-blur-sm transition-all duration-500 ${
      isVisible ? 'animate-fade-in' : 'animate-fade-out'
    }`}>
      <Card className="w-full max-w-lg card-elevated border-2 border-primary/20 bg-background/98 backdrop-blur-md shadow-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🍪</div>
              <CardTitle className="text-xl">
                Cookies & Datenschutz
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={rejectOptional}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              aria-label="Nur essenzielle Cookies"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Sie können Ihre Präferenzen jederzeit anpassen.
          </p>

          {!showDetails ? (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={acceptAll}
                  className="btn-hero flex-1"
                >
                  🍪 Alle akzeptieren
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => setShowDetails(true)}
                  className="btn-outline flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Einstellungen
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={rejectOptional}
                  className="flex-1 text-xs"
                >
                  Nur essenzielle
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-xs" 
                  asChild
                >
                  <Link to="/datenschutz">
                    Datenschutz
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-muted/30">
                <div className="flex items-start gap-3 flex-1">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Essenzielle Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Notwendig für die Grundfunktionen der Website
                    </p>
                  </div>
                </div>
                <Switch 
                  checked={settings.essential} 
                  disabled 
                  aria-label="Essenzielle Cookies (immer aktiv)"
                />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-start gap-3 flex-1">
                  <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Analyse Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Helfen uns die Website zu verbessern
                    </p>
                  </div>
                </div>
                <Switch 
                  checked={settings.analytics} 
                  onCheckedChange={() => toggleSetting('analytics')}
                  aria-label="Analyse Cookies"
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-start gap-3 flex-1">
                  <Target className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Marketing Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Für personalisierte Inhalte und Werbung
                    </p>
                  </div>
                </div>
                <Switch 
                  checked={settings.marketing} 
                  onCheckedChange={() => toggleSetting('marketing')}
                  aria-label="Marketing Cookies"
                />
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Button 
                  onClick={acceptSelected}
                  className="btn-hero w-full"
                >
                  Auswahl speichern
                </Button>
                
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowDetails(false)}
                    className="flex-1 text-xs"
                  >
                    Zurück
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={acceptAll}
                    className="flex-1 text-xs"
                  >
                    Alle akzeptieren
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieNotice;