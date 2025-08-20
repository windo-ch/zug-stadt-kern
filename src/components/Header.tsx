import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        { label: 'Wofür wir stehen', href: '#values' },
        { label: 'Unsere Themen', href: '#topics' },
        { label: 'Abstimmungen', href: '#votes' },
        { label: 'Vorstösse', href: '#initiatives' }
      ]
    },
    {
      title: 'Aktuelles & Termine',
      items: [
        { label: 'Was ansteht', href: '#news' },
        { label: 'Veranstaltungen', href: '#events' },
        { label: 'Medienmitteilungen', href: '#media' },
        { label: 'Newsletter', href: '#newsletter' }
      ]
    },
    {
      title: 'Partei & Personen',
      items: [
        { label: 'Wer wir sind', href: '#people' },
        { label: 'Stadtrat', href: '#council' },
        { label: 'Vorstand', href: '#board' },
        { label: 'Geschichte', href: '#history' }
      ]
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-border' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1cca20d4-8141-4133-9164-d369442d3687.png" 
              alt="SVP Stadt Zug Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">SVP Stadt Zug</span>
              <span className="text-sm text-muted-foreground font-medium">Mir liefered</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <MegaMenu onNavigate={scrollToSection} />
            <div className="ml-4">
              <MitmachenDropdown onNavigate={scrollToSection} />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary"
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="py-4">
              <Accordion type="single" collapsible className="w-full px-4">
                {mobileMenuSections.map((section, sectionIndex) => (
                  <AccordionItem key={section.title} value={`section-${sectionIndex}`} className="border-border/50">
                    <AccordionTrigger className="text-foreground hover:text-primary font-medium py-3">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-3">
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => scrollToSection(item.href)}
                            className="block w-full text-left px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="px-4 pt-4 space-y-2">
                <div className="font-medium text-foreground mb-2">Mitmachen</div>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="block w-full text-left px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                >
                  Kontakt
                </button>
                <button
                  onClick={() => scrollToSection('#membership')}
                  className="block w-full text-left px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                >
                  Mitglied werden
                </button>
                <button
                  onClick={() => scrollToSection('#donations')}
                  className="block w-full text-left px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                >
                  Spenden
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;