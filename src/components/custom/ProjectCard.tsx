import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define a "forma" das props que este componente espera receber
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  tags: string[];
}

// O nosso componente reutilizável
export function ProjectCard({ title, description, imageUrl, githubUrl, tags }: ProjectCardProps) {
  return (
    // O cartão inteiro é um link
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary">
        <CardHeader className="flex-shrink-0">
          {/* Imagem do Projeto */}
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full mb-4 rounded-md aspect-video object-cover border" 
          />
          {/* Título e Descrição */}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow justify-end">
          {/* Tags de Tecnologia */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}