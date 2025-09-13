import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Palette,
  Cloud
} from "lucide-react";

export function TechnologiesSection() {
  const technologies = [
    {
      category: "Frontend",
      icon: Globe,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "Django", "GraphQL"]
    },
    {
      category: "Database",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      category: "DevOps",
      icon: Cloud,
      skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Kubernetes"]
    },
    {
      category: "Tools",
      icon: GitBranch,
      skills: ["Git", "VS Code", "Figma", "Postman", "Linear"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-primary">Technologies</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with modern technologies to build scalable and efficient solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl text-foreground">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}