import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import type { SmallProject } from "@/lib/projectsData";

interface SmallProjectCardProps {
  project: SmallProject;
}

export default function SmallProjectCard({ project }: SmallProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className={project.badge.className}>
            {project.badge.text}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <CardTitle className="mb-2">{project.title}</CardTitle>
        <CardDescription className="mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-transparent"
          asChild
        >
          <Link href={project.link.href} target="_blank">
            {project.link.icon === "external" ? (
              <ExternalLink className="w-4 h-4 mr-2" />
            ) : (
              <Github className="w-4 h-4 mr-2" />
            )}
            {project.link.text}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
