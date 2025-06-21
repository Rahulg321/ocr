"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Code, ExternalLink } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Tab {
  id: string;
  label: string;
  path: string;
  isNew?: boolean;
}

const PlaygroundContent = ({ tab }: { tab: Tab }) => {
  const isSearch = tab.id === "search";
  const [value, setValue] = useState(
    isSearch ? "" : "https://docs.firecrawl.dev"
  );
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [agentOpen, setAgentOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);

  const inputLabel = isSearch ? "Search Query" : "URL";
  const inputPlaceholder = isSearch
    ? "e.g. 'What is the future of AI?'"
    : "https://docs.firecrawl.dev";
  const inputType = isSearch ? "text" : "url";
  const showAgentAndTemplates = tab.id === "single-url" || tab.id === "crawl";

  return (
    <div className="pt-6">
      <div className="mb-8">
        <label
          htmlFor={tab.id}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {inputLabel}
        </label>
        <div className="flex flex-col lg:flex-row gap-4">
          <Input
            id={tab.id}
            type={inputType}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={inputPlaceholder}
            className="h-12 text-base flex-1"
          />
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="outline" className="">
              <Code className="w-4 h-4 mr-2" />
              <span>Get Code</span>
            </Button>
            <Button className="">Run</Button>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <Collapsible open={optionsOpen} onOpenChange={setOptionsOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3">
            <span className="text-sm font-medium text-gray-700">Options</span>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                optionsOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-3">
            <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg">
              Configure {tab.label.toLowerCase()} options here...
            </div>
          </CollapsibleContent>
        </Collapsible>

        {showAgentAndTemplates && (
          <>
            <Collapsible open={agentOpen} onOpenChange={setAgentOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3">
                <span className="text-sm font-medium text-gray-700">Agent</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${
                    agentOpen ? "rotate-180" : ""
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-3">
                <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg">
                  Configure agent settings here...
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={templatesOpen} onOpenChange={setTemplatesOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    Templates
                  </span>
                  <Badge className="bg-orange-100 text-orange-800 text-xs px-1.5 py-0.5">
                    New
                  </Badge>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    <span className="hidden sm:inline">View all templates</span>
                    <span className="sm:hidden">View all</span>
                  </button>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${
                      templatesOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-3">
                <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg">
                  Browse and select from available templates...
                </div>
              </CollapsibleContent>
            </Collapsible>
          </>
        )}
      </div>
    </div>
  );
};

export default function PlaygroundSection() {
  const tabs: Tab[] = [
    { id: "single-url", label: "Single URL", path: "/scrape", isNew: true },
    { id: "crawl", label: "Crawl", path: "/crawl" },
    { id: "map", label: "Map", path: "/map" },
    { id: "search", label: "Search", path: "/search" },
  ];

  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        <div className=" rounded-lg shadow-sm border p-4 sm:p-6 lg:p-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Playground
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Try out Firecrawl in this visual playground
            </p>
          </div>

          <Tabs defaultValue={tabs[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.label}
                  {tab.isNew && (
                    <Badge className="ml-2 bg-orange-100 text-orange-800 px-2 py-0.5">
                      NEW
                    </Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <PlaygroundContent tab={tab} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
