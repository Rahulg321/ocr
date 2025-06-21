import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Info, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface UsageMetric {
  title: string;
  percentage: number;
  used: number;
  total: number;
  unit: string;
  additionalRemaining: number;
  additionalUnit: string;
}

interface ChartData {
  month: string;
  value: number;
}

const currentUsageData: UsageMetric[] = [
  {
    title: "Credit Usage",
    percentage: 9,
    used: 4795,
    total: 50500,
    unit: "credits",
    additionalRemaining: 45205,
    additionalUnit: "credits",
  },
  {
    title: "Extract Tokens Usage",
    percentage: 11,
    used: 110235,
    total: 1000000,
    unit: "tokens",
    additionalRemaining: 415961,
    additionalUnit: "tokens",
  },
];

const creditHistoryData: ChartData[] = [
  { month: "Jun 2025", value: 85 },
  { month: "Jul 2025", value: 65 },
];

const tokenHistoryData: ChartData[] = [
  { month: "Jun 2025", value: 12 },
  { month: "Jul 2025", value: 8 },
];

function UsageCard({ metric }: { metric: UsageMetric }) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-medium text-gray-900">
          {metric.title}
          <Info className="h-4 w-4 text-gray-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="text-2xl font-bold text-gray-900">
            {metric.percentage}%
          </div>
          <Progress
            value={metric.percentage}
            className="h-2 [&>div]:bg-orange-500"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              Total {metric.unit.charAt(0).toUpperCase() + metric.unit.slice(1)}{" "}
              Used
            </span>
            <span className="font-medium">
              {metric.used.toLocaleString()}/{metric.total.toLocaleString()}{" "}
              {metric.unit}
            </span>
          </div>
        </div>

        <div className="pt-4 space-y-2 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">
              Additional {metric.unit} remaining (coupon)
            </span>
            <span className="font-medium text-gray-700">
              {metric.additionalRemaining.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <span>Credit billing is via Stripe</span>
            <Link
              href="#"
              className="inline-flex items-center gap-1 font-medium text-orange-600 hover:text-orange-700"
            >
              Manage plan
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SimpleBarChart({
  data,
  title,
  timeRange,
  unit,
}: {
  data: ChartData[];
  title: string;
  timeRange: string;
  unit: string;
}) {
  const maxValue = Math.max(...data.map((d) => d.value)) || 1;

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-medium text-gray-900">
          {title}
          <Info className="h-4 w-4 text-gray-400" />
        </CardTitle>
        <p className="text-sm text-gray-500">{timeRange}</p>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="flex h-48 items-end justify-around gap-4 rounded-lg bg-gray-50 p-4">
            {data.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="flex w-16 flex-col items-center gap-2 text-center">
                    <div
                      className="w-full rounded-t-md bg-orange-500 transition-all duration-300 hover:bg-orange-600"
                      style={{
                        height: `${(item.value / maxValue) * 120}px`,
                        minHeight: "4px",
                      }}
                    />
                    <span className="w-full truncate text-xs font-medium text-gray-600">
                      {item.month}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {item.value.toLocaleString()} {unit}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}

export default function UsageSection() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Current billing cycle
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentUsageData.map((metric, index) => (
            <UsageCard key={index} metric={metric} />
          ))}
        </div>
      </section>

      {/* Historical Usage */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Historical Usage
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SimpleBarChart
            data={creditHistoryData}
            title="Credit Usage History"
            timeRange="Jun 2025 - Jul 2025 (by billing cycle)"
            unit="credits"
          />
          <SimpleBarChart
            data={tokenHistoryData}
            title="Extract Token Usage History"
            timeRange="Jun 2025 - Jul 2025 (by billing cycle)"
            unit="tokens"
          />
        </div>
      </section>
    </div>
  );
}
