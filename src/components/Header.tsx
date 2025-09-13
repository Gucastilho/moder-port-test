import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl text-primary">Portfolio</div>
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary hover:bg-accent/50"
            >
              About Me
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary hover:bg-accent/50"
            >
              Portfolio
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary hover:bg-accent/50"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}