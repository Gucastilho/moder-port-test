import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            <p className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-primary fill-current" /> by Your Name
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}