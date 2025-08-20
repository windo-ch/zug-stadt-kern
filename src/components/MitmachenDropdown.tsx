import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, HandHeart } from "lucide-react";

interface MitmachenDropdownProps {
  onNavigate?: (href: string) => void;
}

const MitmachenDropdown = ({ onNavigate }: MitmachenDropdownProps) => {
  const handleClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="btn-hero">Jetzt mitmachen</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-background/98 backdrop-blur-md border border-border shadow-xl z-50" align="end">
        <DropdownMenuItem 
          onClick={() => handleClick('#contact')}
          className="flex items-center gap-3 cursor-pointer p-4 rounded-lg hover:bg-accent/50 transition-all duration-200"
        >
          <MessageSquare className="h-5 w-5 text-primary" />
          <div>
            <div className="font-semibold text-base">Kontakt</div>
            <div className="text-xs text-muted-foreground leading-relaxed">Nehmen Sie Kontakt mit uns auf</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleClick('#membership')}
          className="flex items-center gap-3 cursor-pointer p-4 rounded-lg hover:bg-accent/50 transition-all duration-200"
        >
          <Heart className="h-5 w-5 text-primary" />
          <div>
            <div className="font-semibold text-base">Mitglied werden</div>
            <div className="text-xs text-muted-foreground leading-relaxed">Werden Sie Teil unserer Partei</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleClick('#donations')}
          className="flex items-center gap-3 cursor-pointer p-4 rounded-lg hover:bg-accent/50 transition-all duration-200"
        >
          <HandHeart className="h-5 w-5 text-primary" />
          <div>
            <div className="font-semibold text-base">Spenden</div>
            <div className="text-xs text-muted-foreground leading-relaxed">Unterstützen Sie unsere Arbeit</div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MitmachenDropdown;