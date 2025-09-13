import image_895f2fe8e43178223c31812c36354badc908dadf from 'figma:asset/895f2fe8e43178223c31812c36354badc908dadf.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl mb-4 text-primary">About Me</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 3 years of experience creating 
              digital solutions that make a difference. I specialize in modern web technologies 
              and love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge with the developer community through 
              blog posts and mentoring.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full">
                Frontend Development
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full">
                Backend Development
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full">
                UI/UX Design
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <ImageWithFallback 
                  src={image_895f2fe8e43178223c31812c36354badc908dadf}
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}