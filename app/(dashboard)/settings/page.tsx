import Image from "next/image";
import { Bell, Camera, CreditCard, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome, Raunak</h1>
          <p className="text-muted-foreground">Tue, 17 April 2025</p>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
        </Button>
      </div>

      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Profile Section */}
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Profile</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm mb-1">
                First Name
              </label>
              <Input id="firstName" defaultValue="Raunak" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm mb-1">
                Last Name
              </label>
              <Input id="lastName" defaultValue="Das" />
            </div>
            <div className="flex justify-center mt-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Profile picture"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full">
                  <Camera className="h-4 w-4" />
                </div>
                <p className="text-center text-primary text-sm mt-2 cursor-pointer">
                  Remove image
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Processed Section */}
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Page Processed</h3>
          <div className="h-48 flex items-end justify-between space-x-2">
            {[2, 3, 4, 4, 1, 6, 0].map((value, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="bg-primary w-full rounded-t-sm"
                  style={{ height: `${value * 12}px` }}
                ></div>
                <span className="text-xs mt-1">
                  {["M", "T", "W", "T", "F", "S", "S"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Section */}
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Usage</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>20% used</span>
              <span>20/100</span>
            </div>
            <Progress value={20} className="h-2" />
            <div className="flex justify-end">
              <span className="text-sm">80 pages remaining</span>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Current plan:</span>
                <span className="text-primary font-medium">Basic</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Upgrade to a paid plan to unlock higher usage limits.
              </p>
              <Button className="w-full" size="sm">
                <span className="mr-2">♥</span> Upgrade now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="border rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">Profile</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4 font-medium">Subscription</th>
                <th className="pb-4 font-medium">Last payment</th>
                <th className="pb-4 font-medium">Upcoming payment</th>
                <th className="pb-4 font-medium">Payment method</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">
                  <div>
                    <p className="font-medium">Pro Plan</p>
                    <p className="text-sm text-muted-foreground">Yearly</p>
                  </div>
                </td>
                <td className="py-4">
                  <div>
                    <p>1st Apr, 2025</p>
                    <p className="text-sm text-primary">View invoice</p>
                  </div>
                </td>
                <td className="py-4">
                  <div>
                    <p>1st Apr, 2026</p>
                    <p className="text-sm text-primary">View payment details</p>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-red-500" />
                    <span>••••-6789</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-green-500 font-medium">Active</span>
                </td>
                <td className="py-4 text-right">
                  <Button variant="ghost" size="icon">
                    <HelpCircle className="h-5 w-5" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
