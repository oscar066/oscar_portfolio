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
import type { Project } from "@/lib/projectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const IconComponent = project.icon;

  const renderTerminalDemo = () => {
    if (!project.terminalDemo) return null;

    return (
      <div className="bg-black rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
        {project.terminalDemo.commands.map((command, index) => (
          <div
            key={index}
            className={index === 0 ? "mb-2 text-gray-500" : "mb-4"}
          >
            {command}
          </div>
        ))}
        {project.terminalDemo.output.map((output, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "mb-2 text-blue-400"
                : index === 1
                ? "mb-2 text-yellow-400"
                : "text-white"
            }
          >
            {output}
          </div>
        ))}
      </div>
    );
  };

  const renderPerformanceMetrics = () => {
    if (!project.performanceMetrics) return null;

    return (
      <div className="space-y-4 mb-6">
        {project.performanceMetrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{metric.label}</span>
              <span className="font-semibold">{metric.value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${metric.color} h-2 rounded-full`}
                style={{ width: `${metric.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderFeatures = () => {
    if (!project.features) return null;

    const colors = [
      "bg-emerald-500",
      "bg-blue-500",
      "bg-purple-500",
      "bg-orange-500",
    ];

    return (
      <div className="space-y-3 mb-6">
        {project.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className={`w-3 h-3 ${
                colors[index % colors.length]
              } rounded-full`}
            ></div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderVisualElements = () => {
    if (!project.visualElements) return null;

    return project.visualElements.map((element, index) => {
      if (element.type === "gradient") {
        const { from, to, elements } = element.content;
        return (
          <div key={index} className={`bg-gradient-to-br ${from} ${to} p-8`}>
            <div className="space-y-4">
              {elements.map((el: any, elIndex: number) => (
                <div key={elIndex} className="bg-white/10 rounded-lg p-4">
                  {el.type === "image" && (
                    <img src={el.src} alt={el.alt} className={el.className} />
                  )}
                  {el.type === "text" && (
                    <div className={el.className}>{el.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      }
      return null;
    });
  };

  const renderStats = () => {
    if (!project.stats) return null;

    return (
      <div className="mt-4 grid grid-cols-2 gap-4">
        {project.stats.map((stat, index) => (
          <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderLinks = () => {
    return (
      <div className="flex gap-3">
        {project.links.map((link, index) => (
          <Button key={index} variant={link.variant} asChild>
            <Link href={link.href} target="_blank">
              {link.icon === "external" ? (
                <ExternalLink className="w-4 h-4 mr-2" />
              ) : (
                <Github className="w-4 h-4 mr-2" />
              )}
              {link.text}
            </Link>
          </Button>
        ))}
      </div>
    );
  };

  const leftContent = (
    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <IconComponent className="w-6 h-6 text-emerald-600" />
          {project.title}
        </CardTitle>
        <Badge className={project.badge.className}>{project.badge.text}</Badge>
      </div>
      <CardDescription className="text-lg mb-4">
        {project.subtitle}
      </CardDescription>
      <p className="text-gray-600 mb-6">{project.description}</p>

      {renderPerformanceMetrics()}
      {renderFeatures()}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      {renderLinks()}
    </div>
  );

  const rightContent = (
    <div className="bg-gray-900 p-8 flex flex-col justify-center">
      {renderTerminalDemo()}
      {renderStats()}
    </div>
  );

  return (
    <Card className="overflow-hidden">
      <div
        className={`grid lg:grid-cols-2 gap-0 ${
          project.layout === "reversed" ? "lg:grid-cols-2" : ""
        }`}
      >
        {project.layout === "reversed" ? (
          <>
            <div className="order-2 lg:order-1">{renderVisualElements()}</div>
            <div className="order-1 lg:order-2">{leftContent}</div>
          </>
        ) : (
          <>
            {leftContent}
            {rightContent}
          </>
        )}
      </div>
    </Card>
  );
}
