import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { TechnologiesSection } from "./components/TechnologiesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 min-h-screen flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl text-primary tracking-tight">
                Hi, I'm <span className="text-foreground">Gustavo</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A passionate <span className="text-primary">Full-Stack Developer</span> who creates 
                beautiful and functional digital experiences
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}