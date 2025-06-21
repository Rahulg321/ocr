"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, AlertTriangle, Info, X, Zap } from "lucide-react";
import SchemaEditor, { type SchemaField } from "./schema-editor";

export default function PlaygroundPage() {
  const [urls, setUrls] = useState<string[]>(["https://darkalphacapita.com"]);
  const [newUrl, setNewUrl] = useState("");
  const [schema, setSchema] = useState<SchemaField[]>([
    { id: "1", name: "email", type: "String", isOptional: false },
    {
      id: "2",
      name: "team members",
      type: "Array",
      arrayItemType: "String",
      isOptional: false,
    },
    { id: "3", name: "phone number", type: "String", isOptional: true },
  ]);
  const [promptText, setPromptText] = useState(
    "i need to extract key details about the company and its team members and their contact information"
  );
  const [isJsonView, setIsJsonView] = useState(false);
  const [jsonOutput, setJsonOutput] = useState("");

  const handleAddUrl = () => {
    if (newUrl.trim() !== "" && !urls.includes(newUrl.trim())) {
      setUrls([...urls, newUrl.trim()]);
      setNewUrl("");
    }
  };

  const handleRemoveUrl = (urlToRemove: string) => {
    setUrls(urls.filter((url) => url !== urlToRemove));
  };

  useEffect(() => {
    if (isJsonView) {
      const simplifiedSchema = schema.map((field) => {
        const { id, ...rest } = field; // Exclude id for cleaner JSON output
        return rest;
      });
      setJsonOutput(JSON.stringify(simplifiedSchema, null, 2));
    }
  }, [schema, isJsonView]);

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto p-4 rounded-lg shadow-sm border ">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Button
              variant="outline"
              className="bg-gray-800 text-white hover:bg-gray-700"
            >
              <Zap className="w-4 h-4 mr-2" />
              Integrate Now
            </Button>
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              Run
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <Label className="text-xs font-medium text-gray-700">URLs</Label>
            <div className="mt-1 flex flex-wrap gap-2 items-center">
              {urls.map((url) => (
                <div
                  key={url}
                  className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-2 py-1 text-sm"
                >
                  <span>{url}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 p-0 h-auto hover:bg-gray-200"
                    onClick={() => handleRemoveUrl(url)}
                  >
                    <X className="w-3 h-3 text-gray-500" />
                  </Button>
                </div>
              ))}
              <Input
                type="text"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://example.com"
                className="flex-grow min-w-[150px] h-8"
              />
              <Button
                variant="outline"
                onClick={handleAddUrl}
                className="h-8 text-sm bg-white"
              >
                Add another URL
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Add /* to the URL (e.g. firecrawl.dev/*) to find and extract
              information across the entire website.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-medium text-gray-700 mb-1 block">
              Schema
            </Label>
            <SchemaEditor schema={schema} setSchema={setSchema} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-2">
                <Label
                  htmlFor="view-toggle"
                  className={`text-xs font-medium ${isJsonView ? "text-gray-700" : "text-gray-400"}`}
                >
                  JSON view
                </Label>
                <Switch
                  id="view-toggle"
                  checked={isJsonView}
                  onCheckedChange={setIsJsonView}
                  aria-label="Toggle JSON view"
                />
                <Label
                  htmlFor="view-toggle"
                  className={`text-xs font-medium ${!isJsonView ? "text-gray-700" : "text-gray-400"}`}
                >
                  Prompt
                </Label>
              </div>
            </div>
            {isJsonView ? (
              <ScrollArea className="h-[280px] md:h-[360px] border rounded-md bg-gray-50 p-3">
                <pre className="text-sm whitespace-pre-wrap break-all">
                  {jsonOutput}
                </pre>
              </ScrollArea>
            ) : (
              <div>
                <Textarea
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Describe what you want to extract..."
                  className="h-[280px] md:h-[360px] resize-none"
                  maxLength={1000}
                />
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {promptText.length} / 1000
                </p>
              </div>
            )}

            <div className="mt-4">
              <Label className="text-xs font-medium text-gray-700 mb-2 block">
                Additional Properties
              </Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="web-search" />
                  <Label htmlFor="web-search" className="text-xs font-normal">
                    Enable web search
                  </Label>
                  <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="enable-agent" />
                  <Label htmlFor="enable-agent" className="text-xs font-normal">
                    Enable Agent
                  </Label>
                  <Badge
                    variant="outline"
                    className="ml-1 bg-orange-100 text-orange-700 border-orange-300 text-[10px] px-1.5 py-0.5"
                  >
                    New
                  </Badge>
                  <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
                <Select defaultValue="none">
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    {/* Add other options here */}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <footer className="flex flex-col sm:flex-row justify-between items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-800"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Results JSON
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-black text-white hover:bg-gray-800 mt-2 sm:mt-0"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Report Extraction Issue
          </Button>
        </footer>
      </div>
    </div>
  );
}
