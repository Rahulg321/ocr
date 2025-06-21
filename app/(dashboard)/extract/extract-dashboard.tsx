import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Play,
  Zap,
  Globe,
  ExternalLink,
  Download,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ExtractDashboard() {
  const extractionHistory = [
    {
      url: "www.buysellyourbusiness.com",
      fullUrl: "https://www.buysellyourbusiness.com/current-engagements/",
      date: "Apr 16, 25",
      time: "08:25 AM",
      tokens: 575,
    },
    {
      url: "network.axial.net",
      fullUrl: "https://network.axial.net/company/gauge-capital",
      date: "Apr 7, 25",
      time: "07:57 AM",
      tokens: 303,
    },
    {
      url: "baymarkpartners.com",
      fullUrl: "https://baymarkpartners.com/portfolio/",
      date: "Apr 7, 25",
      time: "07:56 AM",
      tokens: 303,
    },
    {
      url: "americanhealthcarecapital.com",
      fullUrl: "https://americanhealthcarecapital.com/current-listings/",
      date: "Apr 6, 25",
      time: "10:19 AM",
      tokens: 981,
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">Extract</h1>
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-700 hover:bg-orange-100"
            >
              New
            </Badge>
          </div>

          <p className="text-gray-600 text-lg max-w-3xl">
            Extract structured data from single page, multiple pages or entire
            websites with AI.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="bg-white border-orange-200 text-gray-700 hover:bg-orange-50"
            >
              <FileText className="w-4 h-4 mr-2" />
              Documentation
            </Button>
            <Button
              variant="outline"
              className="bg-white border-orange-200 text-gray-700 hover:bg-orange-50"
              asChild
            >
              <Link href="/extract-playground">
                <Play className="w-4 h-4 mr-2" />
                Try in extract playground
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-white border-orange-200 text-gray-700 hover:bg-orange-50"
            >
              <Zap className="w-4 h-4 mr-2" />
              Zapier integration
            </Button>
          </div>
        </div>

        {/* Main Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Usage Card */}
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900">13%</div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      Tokens Used
                    </span>
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">
                        194274
                      </span>
                      /1500000 tokens
                    </span>
                  </div>
                  <Progress value={13} className="h-2 bg-gray-100">
                    <div
                      className="h-full bg-orange-500 rounded-full transition-all"
                      style={{ width: "13%" }}
                    />
                  </Progress>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">
                    Additional tokens remaining (coupon)
                  </span>
                  <span className="font-medium text-gray-900">415961</span>
                </div>

                <div className="text-sm text-gray-600">
                  Credit billing is via Stripe{" "}
                  <span className="text-orange-600 font-medium cursor-pointer hover:underline">
                    Manage plan
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Extract Pricing Card */}
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                Extract Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Extract is a different product with a separate pricing.
                  Subscribe to access:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    More extractions
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Higher rate limits
                  </li>
                </ul>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  View Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Extraction History */}
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              Extraction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      URLs
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Tokens
                    </th>
                    <th className="w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  {extractionHistory.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <Globe className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {item.url}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              {item.fullUrl}
                              <ExternalLink className="w-3 h-3" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-gray-900">{item.date}</div>
                        <div className="text-sm text-gray-500">{item.time}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-medium text-gray-900">
                          {item.tokens}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-100"
                        >
                          <Download className="w-4 h-4 text-gray-600" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
