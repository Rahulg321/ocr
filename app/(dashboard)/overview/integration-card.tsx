import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  icon: string;
  docsLink: string;
}

export function IntegrationCard({
  name,
  icon,
  docsLink,
}: IntegrationCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm">
              {icon === "JS" ? (
                <span className="font-bold text-yellow-600">JS</span>
              ) : (
                <span>{icon}</span>
              )}
            </div>
            <span className="font-medium text-gray-900">{name}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
            <span>Docs</span>
            <ExternalLink className="h-3 w-3" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
