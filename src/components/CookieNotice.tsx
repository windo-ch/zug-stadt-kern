import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('guezli-accepted');
    if (!hasAcceptedCookies) {
      // Show notice after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('guezli-accepted', 'true');
    setIsVisible(false);
  };

  const dismissNotice = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 ${
      isVisible ? 'animate-fade-in' : 'animate-fade-out'
    } max-w-md mx-auto lg:mx-0 lg:max-w-lg`}>
      <Card className="card-elevated border-2 border-primary/20 bg-background/98 backdrop-blur-md shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Cookie Emoji */}
            <div className="text-4xl animate-pulse">🍪</div>
            
            <div className="flex-1">
              <h3 className="font-bold text-lg text-foreground mb-2">
                Guezli? 
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  (Cookie Notice)
                </span>
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Mir bruched es paar Guezli (Cookies), zum die Website besser z'mache. 
                Nüt Schlimmers - nur technischi Sache für besseri Funktionalität!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptCookies}
                  className="btn-hero flex-1 text-sm"
                >
                  Guezli akzeptiere! 🍪
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="btn-outline text-xs" 
                  asChild
                >
                  <Link to="/cookie" onClick={dismissNotice}>
                    Meh Info
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={dismissNotice}
              className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cookie Notice schliesse"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieNotice;