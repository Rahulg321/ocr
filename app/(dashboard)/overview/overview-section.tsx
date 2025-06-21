"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Eye, EyeOff, HelpCircle, Circle, Check } from "lucide-react";
import { ScrapedPagesChart } from "./scraped-pages-chart";
import { IntegrationCard } from "./integration-card";
import { ProjectCard } from "./project-card";
import { Separator } from "@/components/ui/separator";

const integrations = [
  { name: "Python", icon: "��", docs: "#" },
  { name: "JS/TS SDK", icon: "JS", docs: "#" },
  { name: "Langchain", icon: "🔗", docs: "#" },
  { name: "Langchain JS", icon: "🔗", docs: "#" },
  { name: "LlamaIndex", icon: "🦙", docs: "#" },
  { name: "Zapier", icon: "⚡", docs: "#" },
  { name: "Make", icon: "🔧", docs: "#" },
  { name: "Discord", icon: "💬", docs: "#" },
  { name: "CrewAI", icon: "🤖", docs: "#" },
  { name: "Dify", icon: "📊", docs: "#" },
  { name: "Flowise", icon: "🌊", docs: "#" },
  { name: "Pipedream", icon: "🔄", docs: "#" },
];

const exampleProjects = [
  {
    title: "30+ Examples",
    description: "Collection of simple projects built with Firecrawl",
    tags: ["TypeScript", "Python", "Firecrawl SDK"],
    link: "#",
  },
  {
    title: "LLMs.txt Generator",
    description: "Generate an llms.txt with this web app built on Next.js",
    tags: ["TypeScript", "Next.js", "Firecrawl SDK"],
    link: "#",
  },
  {
    title: "Trend Finder",
    description: "Stay on top of trending topics on the web with AI",
    tags: ["TypeScript", "AI", "Firecrawl SDK"],
    link: "#",
  },
];

export function OverviewSection() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [copiedApiKey, setCopiedApiKey] = useState(false);
  const [copiedEnvVar, setCopiedEnvVar] = useState(false);

  const apiKey = "fc-8a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b";
  const maskedApiKey = `fc-${"•".repeat(32)}${apiKey.slice(-4)}`;
  const envVar = "env FIRECRAWL_API_KEY=*** npx -y firecrawl-mcp";

  const handleCopy = (
    textToCopy: string,
    setCopiedState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Overview</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Scraped pages - Last 7 days
            </CardTitle>
            <CardDescription>Credit usage differs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <span className="text-4xl font-bold">1</span>
            </div>
            <ScrapedPagesChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">API & Usage</CardTitle>
            <CardDescription>Your keys and usage details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label
                htmlFor="api-key"
                className="block text-sm font-medium text-gray-800"
              >
                API Key
              </label>
              <div className="mt-1 flex items-center gap-2">
                <code
                  id="api-key"
                  className="flex-1 rounded-md bg-gray-100 px-3 py-2 font-mono text-sm"
                >
                  {showApiKey ? apiKey : maskedApiKey}
                </code>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowApiKey(!showApiKey)}
                  aria-label={showApiKey ? "Hide API key" : "Show API key"}
                >
                  {showApiKey ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(apiKey, setCopiedApiKey)}
                  aria-label="Copy API key"
                >
                  {copiedApiKey ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <label
                htmlFor="mcp-integration"
                className="block text-sm font-medium text-gray-800"
              >
                MCP Integration
              </label>
              <p className="text-sm text-gray-500">Cursor (v0.45.6+)</p>
              <div className="mt-1 flex items-center gap-2">
                <code
                  id="mcp-integration"
                  className="flex-1 rounded-md bg-gray-100 px-3 py-2 font-mono text-sm"
                >
                  {envVar}
                </code>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(envVar, setCopiedEnvVar)}
                  aria-label="Copy MCP integration command"
                >
                  {copiedEnvVar ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <label className="block text-sm font-medium text-gray-800">
                Concurrent Browsers
              </label>
              <div className="mt-1 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">0</span>
                  <span className="text-sm text-gray-500">
                    of 2 active browsers
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="border-teal-500/40 bg-teal-500/10 text-teal-700"
                >
                  <Circle className="mr-1.5 h-2 w-2 fill-current" />
                  Healthy
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exampleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
