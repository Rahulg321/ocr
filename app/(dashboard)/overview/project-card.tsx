import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const tagColorClasses: { [key: string]: string } = {
  TypeScript: "border-blue-500/40 bg-blue-500/10 text-blue-700",
  Python: "border-green-500/40 bg-green-500/10 text-green-700",
  "Next.js": "border-gray-500/40 bg-gray-500/10 text-gray-700",
  AI: "border-purple-500/40 bg-purple-500/10 text-purple-700",
  Finance: "border-emerald-500/40 bg-emerald-500/10 text-emerald-700",
  Automation: "border-cyan-500/40 bg-cyan-500/10 text-cyan-700",
  Default: "border-orange-500/40 bg-orange-500/10 text-orange-700",
};

export function ProjectCard({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <div className="">
      <Card className="h-full cursor-pointer border-gray-200 shadow-sm transition-shadow group-hover:shadow-lg">
        <CardHeader className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                <Folder className="h-5 w-5 text-gray-600" />
              </div>
              <CardTitle className="text-base font-semibold leading-tight">
                {title}
              </CardTitle>
            </div>
            <ExternalLink className="h-4 w-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={cn(
                  "border font-normal",
                  tagColorClasses[tag] ?? tagColorClasses.Default
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
