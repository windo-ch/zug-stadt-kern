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
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem 
          onClick={() => handleClick('#contact')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <MessageSquare className="h-4 w-4" />
          <div>
            <div className="font-medium">Kontakt</div>
            <div className="text-xs text-muted-foreground">Nehmen Sie Kontakt mit uns auf</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleClick('#membership')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Heart className="h-4 w-4" />
          <div>
            <div className="font-medium">Mitglied werden</div>
            <div className="text-xs text-muted-foreground">Werden Sie Teil unserer Partei</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleClick('#donations')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <HandHeart className="h-4 w-4" />
          <div>
            <div className="font-medium">Spenden</div>
            <div className="text-xs text-muted-foreground">Unterstützen Sie unsere Arbeit</div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MitmachenDropdown;