import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar"; // Importa a sidebar que acabámos de criar

// Substitui 'teu-username-github' pelo teu username real
const GITHUB_USERNAME = 'carmanoli';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 border-b shrink-0 bg-background/80 backdrop-blur-sm">
      
      {/* Botão Burger para Mobile (só aparece em ecrãs pequenos) */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Título Central (escondido em ecrãs muito pequenos para dar espaço) */}
      <div className="hidden sm:block">
        <h1 className="text-lg font-semibold text-muted-foreground">Projetos em Destaque</h1>
      </div>

      {/* Avatar do GitHub à Direita */}
      <div className="flex items-center gap-4">
        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
          <Avatar className="w-10 h-10">
            <AvatarImage src={`https://github.com/${GITHUB_USERNAME}.png`} alt={`@${GITHUB_USERNAME}`} />
            <AvatarFallback>{GITHUB_USERNAME.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </a>
      </div>
    </header>
  );
}