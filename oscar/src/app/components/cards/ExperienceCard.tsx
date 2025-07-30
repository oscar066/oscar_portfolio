import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import type { Experience } from "@/lib/experienceData";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="min-w-[350px] h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl">{experience.title}</CardTitle>
            <CardDescription className="text-base mt-1">
              {experience.company} • {experience.period}
            </CardDescription>
          </div>
          {experience.badge && (
            <Badge
              variant={experience.badge.variant}
              className="ml-3 flex-shrink-0"
            >
              {experience.badge.text}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3 text-gray-600 text-base">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1.5 text-lg">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
