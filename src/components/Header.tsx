import { Button } from "@/components/ui/button";
import { Heart, Menu, Skull } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse">
              <Skull className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-glitch">
              LoveVirus
            </span>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-destructive transition-smooth animate-flicker">
              Experiments
            </a>
            <a href="#about" className="text-muted-foreground hover:text-destructive transition-smooth">
              [CLASSIFIED]
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-destructive transition-smooth animate-glitch">
              Test Reports
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-destructive transition-smooth line-through">
              Help
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="animate-flicker">
              Log In?
            </Button>
            <Button variant="creepy" size="sm">
              SUBMIT
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}