import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <footer className="gradient-footer text-white section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo/svp-stadt-zug-logo.png"
                alt="SVP Stadt Zug Logo"
                className="h-10 w-auto"
              />
              <div>
                <div className="font-bold text-lg">SVP Stadt Zug</div>
                <div className="text-sm opacity-80">Mir lieferet</div>
              </div>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Für eine sichere, freie und lebenswerte Stadt Zug. 
              Direkt, bürgernah und lösungsorientiert.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/was-ansteht" className="hover:text-white transition-colors">Was ansteht</a></li>
              <li><a href="/wofuer-wir-stehen" className="hover:text-white transition-colors">Wofür wir stehen</a></li>
              <li><a href="/themen" className="hover:text-white transition-colors">Unsere Themen</a></li>
              <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">SVP Kanton Zug</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.svp-zug.ch/termine/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                Veranstaltungen
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a></li>
              <li><a href="https://www.svp-zug.ch/home-2/publikationen/medienmitteilungen/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                Medienmitteilungen
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="/cookie" className="hover:text-white transition-colors">Cookie-Richtlinie</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60 text-center md:text-left">
              <p className="mb-2">© 2026 SVP Stadt Zug. Alle Rechte vorbehalten.</p>
              <p className="text-xs text-white/50">
                SVP Stadt Zug, Postfach, 6300 Zug | sekretariat.stadt@svp-zug.ch
              </p>
              <p className="text-xs text-white/30 mt-2">
                website made by henry.marketing
              </p>
            </div>
            <SocialLinks
              className="flex items-center gap-2"
              linkClassName="text-white/70 hover:text-white transition-colors p-2.5 rounded-lg hover:bg-white/10"
              iconClassName="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
