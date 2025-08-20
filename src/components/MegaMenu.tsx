import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Calendar, Users, FileText, Heart, MessageSquare, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface MegaMenuProps {
  onNavigate?: (href: string) => void;
}

const MegaMenu = ({ onNavigate }: MegaMenuProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Politik & Standpunkte */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground hover:text-primary font-bold text-base px-4 py-2 rounded-lg hover:bg-accent/20 transition-all duration-200">
            Politik & Standpunkte
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-background/98 backdrop-blur-md border border-border shadow-xl">
            <div className="grid gap-4 p-8 w-[550px] lg:w-[650px] lg:grid-cols-2">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/wofuer-wir-stehen"
                    className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-svp-green to-svp-green-light p-8 no-underline outline-none focus:shadow-lg hover:shadow-lg text-left transition-all duration-200 hover:scale-[1.02]"
                  >
                    <Heart className="h-8 w-8 text-white mb-3" />
                    <div className="mb-3 mt-4 text-xl font-bold text-white">
                      Wofür wir stehen
                    </div>
                    <p className="text-sm leading-relaxed text-white/90">
                      Unsere Grundwerte und politischen Überzeugungen für Zug
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
              <ListItem
                title="Unsere Themen"
                href="/themen"
                icon={<FileText className="h-5 w-5" />}
              >
                Aktuelle politische Schwerpunkte und Positionen
              </ListItem>
              <ListItem
                title="Abstimmungen"
                href="/abstimmungen"
                icon={<Calendar className="h-5 w-5" />}
              >
                Unsere Empfehlungen zu kommenden Abstimmungen
              </ListItem>
              <ListItem
                title="Vorstösse"
                href="/vorstoesse"
                icon={<FileText className="h-5 w-5" />}
              >
                Politische Initiativen und Vorstösse im Stadtrat
              </ListItem>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Aktuelles & Termine */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground hover:text-primary font-bold text-base px-4 py-2 rounded-lg hover:bg-accent/20 transition-all duration-200">
            Aktuelles & Termine
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-background/98 backdrop-blur-md border border-border shadow-xl">
            <div className="grid gap-4 p-8 w-[550px] lg:w-[650px] lg:grid-cols-2">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/was-ansteht"
                    className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-svp-green to-svp-green-light p-8 no-underline outline-none focus:shadow-lg hover:shadow-lg text-left transition-all duration-200 hover:scale-[1.02]"
                  >
                    <Calendar className="h-8 w-8 text-white mb-3" />
                    <div className="mb-3 mt-4 text-xl font-bold text-white">
                      Was ansteht
                    </div>
                    <p className="text-sm leading-relaxed text-white/90">
                      Aktuelle Neuigkeiten und kommende Termine
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
              <ListItem
                title="Veranstaltungen"
                href="/veranstaltungen"
                icon={<Calendar className="h-5 w-5" />}
              >
                Öffentliche Anlässe und Parteiveranstaltungen
              </ListItem>
              <ListItem
                title="Medienmitteilungen"
                href="/medienmitteilungen"
                icon={<FileText className="h-5 w-5" />}
              >
                Aktuelle Pressemitteilungen und Stellungnahmen
              </ListItem>
              <ListItem
                title="Newsletter"
                href="/newsletter"
                icon={<MessageSquare className="h-5 w-5" />}
              >
                Abonnieren Sie unseren regelmässigen Newsletter
              </ListItem>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Partei & Personen */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground hover:text-primary font-bold text-base px-4 py-2 rounded-lg hover:bg-accent/20 transition-all duration-200">
            Partei & Personen
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-background/98 backdrop-blur-md border border-border shadow-xl">
            <div className="grid gap-4 p-8 w-[550px] lg:w-[650px] lg:grid-cols-2">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/wer-wir-sind"
                    className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-svp-green to-svp-green-light p-8 no-underline outline-none focus:shadow-lg hover:shadow-lg text-left transition-all duration-200 hover:scale-[1.02]"
                  >
                    <Users className="h-8 w-8 text-white mb-3" />
                    <div className="mb-3 mt-4 text-xl font-bold text-white">
                      Wer wir sind
                    </div>
                    <p className="text-sm leading-relaxed text-white/90">
                      Unsere Kandidaten und Parteimitglieder
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
              <ListItem
                title="Stadtrat"
                href="/stadtrat"
                icon={<Users className="h-5 w-5" />}
              >
                Unsere Vertreter im Zuger Stadtrat
              </ListItem>
              <ListItem
                title="Vorstand"
                href="/vorstand"
                icon={<Users className="h-5 w-5" />}
              >
                Der Vorstand der SVP Stadt Zug
              </ListItem>
              <ListItem
                title="Geschichte"
                href="/geschichte"
                icon={<Info className="h-5 w-5" />}
              >
                50+ Jahre für Zug im Einsatz
              </ListItem>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};

interface ListItemProps {
  title: string;
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const ListItem = ({ title, href, children, icon }: ListItemProps) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        to={href}
        className={cn(
          "block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full hover:shadow-md border border-transparent hover:border-border/20"
        )}
      >
        <div className="flex items-center gap-3">
          {icon}
          <div className="text-base font-semibold leading-none">{title}</div>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground mt-2">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  );
};

export default MegaMenu;