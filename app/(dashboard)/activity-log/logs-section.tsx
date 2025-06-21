"use client";

import { useState } from "react";
import { Search, ChevronRight, Download, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Sample activity data
const activityData = [
  {
    id: 1,
    url: "https://www.rahulguptadev.in",
    endpoint: "/map",
    pages: 7,
    dateAdded: "June 19, 2025 at 05:37:07 PM",
    origin: "Playground",
    expanded: false,
  },
  {
    id: 2,
    url: "https://www.rahulguptadev.in",
    endpoint: "/map",
    pages: 7,
    dateAdded: "June 19, 2025 at 05:37:05 PM",
    origin: "Playground",
    expanded: false,
  },
  {
    id: 3,
    url: "https://www.rahulguptadev.in",
    endpoint: "/scrape",
    pages: 1,
    dateAdded: "June 19, 2025 at 05:36:51 PM",
    origin: "Playground",
    expanded: false,
  },
  {
    id: 4,
    url: "https://www.buysellyourbusiness.com/current-engagements/",
    endpoint: "/scrape",
    pages: 1,
    dateAdded: "April 16, 2025 at 08:25:45 AM",
    origin: "API-SDK",
    expanded: false,
  },
  {
    id: 5,
    url: "https://www.google.com/search?q=LFM Capital Business D...",
    endpoint: "/scrape",
    pages: 1,
    dateAdded: "April 1, 2025 at 04:45:59 AM",
    origin: "API",
    expanded: false,
  },
  {
    id: 6,
    url: "https://www.google.com/search?q=LFM Capital Origination...",
    endpoint: "/scrape",
    pages: 1,
    dateAdded: "April 1, 2025 at 04:45:50 AM",
    origin: "API",
    expanded: false,
  },
  {
    id: 7,
    url: "https://www.google.com/search?q=LFM Capital Managing ...",
    endpoint: "/scrape",
    pages: 1,
    dateAdded: "April 1, 2025 at 04:45:41 AM",
    origin: "API",
    expanded: false,
  },
  {
    id: 8,
    url: "https://www.google.com/search?q=LFM Capital Managing ...",
    endpoint: "/scrape",
    pages: 1,
    dateAdded: "April 1, 2025 at 04:45:34 AM",
    origin: "API",
    expanded: false,
  },
  {
    id: 9,
    url: "https://www.google.com/search?q=Baymark Partners Inves...",
    endpoint: "/scrape",
    pages: 1,
    dateAdded: "April 1, 2025 at 04:45:19 AM",
    origin: "API",
    expanded: false,
  },
  {
    id: 10,
    url: "https://www.google.com/search?q=Baymark Partners Capit...",
    endpoint: "/scrape",
    pages: 1,
    dateAdded: "April 1, 2025 at 04:45:11 AM",
    origin: "API",
    expanded: false,
  },
];

const getOriginBadgeVariant = (origin: string) => {
  switch (origin) {
    case "Playground":
      return "default";
    case "API-SDK":
      return "secondary";
    case "API":
      return "outline";
    default:
      return "default";
  }
};

export default function LogsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEndpoint, setSelectedEndpoint] = useState("all");
  const [activities, setActivities] = useState(activityData);

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.url
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesEndpoint =
      selectedEndpoint === "all" || activity.endpoint === selectedEndpoint;
    return matchesSearch && matchesEndpoint;
  });

  const toggleExpanded = (id: number) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id
          ? { ...activity, expanded: !activity.expanded }
          : activity
      )
    );
  };

  const uniqueEndpoints = [
    ...new Set(activityData.map((item) => item.endpoint)),
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Activity Logs</h1>
        <p className="text-muted-foreground">
          Take a look at your requests activity
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by URL"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedEndpoint} onValueChange={setSelectedEndpoint}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="All Endpoints" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Endpoints</SelectItem>
            {uniqueEndpoints.map((endpoint) => (
              <SelectItem key={endpoint} value={endpoint}>
                {endpoint}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Activity Table */}
      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-12"></TableHead>
                <TableHead className="min-w-[300px]">URL</TableHead>
                <TableHead className="w-[120px]">Endpoint</TableHead>
                <TableHead className="w-[100px] text-center"># Pages</TableHead>
                <TableHead className="w-[200px]">Date added</TableHead>
                <TableHead className="w-[120px]">Origin</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredActivities.map((activity) => (
                <TableRow key={activity.id} className="hover:bg-muted/50">
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(activity.id)}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${activity.expanded ? "rotate-90" : ""}`}
                      />
                    </Button>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    <div
                      className="truncate max-w-[300px]"
                      title={activity.url}
                    >
                      {activity.url}
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      {activity.endpoint}
                    </code>
                  </TableCell>
                  <TableCell className="text-center">
                    {activity.pages}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {activity.dateAdded}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getOriginBadgeVariant(activity.origin)}>
                      {activity.origin}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      title="Download"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Results Summary */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredActivities.length} of {activityData.length} activities
      </div>
    </div>
  );
}
