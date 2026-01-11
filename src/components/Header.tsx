import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MegaMenu from './MegaMenu';
import MitmachenDropdown from './MitmachenDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuSections = [
    {
      title: 'Politik & Standpunkte',
      items: [
        { label: 'Wofür wir stehen', href: '/wofuer-wir-stehen' },
        { label: 'Unsere Themen', href: '/themen' },
        { label: 'Abstimmungen', href: '/abstimmungen' },
        { label: 'Vorstösse', href: '/vorstoesse' }
      ]
    },
    {
      title: 'Partei & Personen',
      items: [
        { label: 'Wer wir sind', href: '/wer-wir-sind' },
        { label: 'Stadtrat', href: '/stadtrat' },
        { label: 'Vorstand', href: '/vorstand' },
        { label: 'Geschichte', href: '/geschichte' }
      ]
    },
  ];

  const navigateToPage = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background border-b border-border shadow-lg' 
        : 'bg-background border-b border-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-18 md:h-24 px-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <img
              src="/logo/svp-stadt-zug-logo.png"
              alt="SVP Stadt Zug Logo"
              className="h-16 w-auto md:h-18 transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl text-foreground tracking-tight">SVP Stadt Zug</span>
              <span className="text-sm md:text-base text-muted-foreground font-semibold">Mir lieferet</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg-nav:flex items-center space-x-8">
            <MegaMenu onNavigate={navigateToPage} />
            <div className="ml-6 flex items-center gap-3">
              <Link to="/1000er-club">
                <Button 
                  variant="outline" 
                  className="border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green))] hover:text-white transition-colors font-semibold"
                >
                  1000er Club
                </Button>
              </Link>
              <MitmachenDropdown onNavigate={navigateToPage} />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg-nav:hidden p-3 text-foreground hover:text-primary transition-all duration-200 hover:bg-accent/20 rounded-lg"
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg-nav:hidden border-t border-border bg-background shadow-lg">
            <div className="py-6">
              {/* Wahlen - First Item in Mobile */}
              <div className="px-6 mb-4">
                <Link to="/wahlen" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green))] hover:text-white transition-colors font-semibold"
                  >
                    Wahlen
                  </Button>
                </Link>
              </div>
              
              <Accordion type="single" collapsible className="w-full px-6">
                {mobileMenuSections.map((section, sectionIndex) => (
                  <AccordionItem key={section.title} value={`section-${sectionIndex}`} className="border-border/50">
                    <AccordionTrigger className="text-foreground hover:text-primary font-semibold py-4 text-base">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="space-y-2">
                        {section.items.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => navigateToPage(item.href)}
                            className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="px-6 pt-6 space-y-3">
                <div className="font-semibold text-foreground mb-3 text-base">Mitmachen</div>
                <button
                  onClick={() => navigateToPage('/kontakt')}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                >
                  Kontakt
                </button>
                <button
                  onClick={() => navigateToPage('/mitglied-werden')}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                >
                  Mitglied werden
                </button>
                <button
                  onClick={() => navigateToPage('/spenden')}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                >
                  Spenden
                </button>
                
                {/* 1000er Club Button - Last Position */}
                <div className="pt-4 mt-4 border-t border-border">
                  <Link to="/1000er-club" className="block">
                    <Button 
                      variant="outline" 
                      className="w-full border-[hsl(var(--svp-green))] text-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green))] hover:text-white transition-colors font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      1000er Club
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;