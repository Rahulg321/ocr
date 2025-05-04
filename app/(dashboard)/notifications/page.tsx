import type React from "react";
import { Bell, CheckCircle, AlertCircle } from "lucide-react";
import { format } from "date-fns";

export default function NotificationsPage() {
  // Get current date for the header
  const today = new Date();
  const formattedDate = format(today, "EEE, dd MMMM yyyy");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome, Raunak</h1>
          <p className="text-gray-500">{formattedDate}</p>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-500" />
        </button>
      </header>

      <h2 className="text-xl font-semibold mb-4">Notification</h2>
      <div className="border-t border-gray-200"></div>

      <div className="bg-white rounded-lg border border-gray-200 mt-4">
        <NotificationItem
          icon={<VKIcon className="h-8 w-8 text-white" />}
          iconBg="bg-blue-500"
          title="Agency driven message (upgrade, subscription, offer, new features etc)"
          description="Lorem ipsum dolor sit amet consectetur. Eu netus etiam lectus fames pulvinar ut arcu."
          time="2 min ago"
        />

        <NotificationItem
          icon={<CheckCircle className="h-5 w-5 text-white" />}
          iconBg="bg-green-500"
          title="Success message"
          description="Lorem ipsum dolor sit amet consectetur. Eu netus etiam lectus fames pulvinar ut arcu."
          time="2 min ago"
        />

        <NotificationItem
          icon={<AlertCircle className="h-5 w-5 text-white" />}
          iconBg="bg-red-500"
          title="Alert or Error message"
          description="Lorem ipsum dolor sit amet consectetur. Eu netus etiam lectus fames pulvinar ut arcu."
          time="2 min ago"
        />

        <NotificationItem
          icon={<VKIcon className="h-8 w-8 text-white" />}
          iconBg="bg-blue-500"
          title="Message 1"
          description="Lorem ipsum dolor sit amet consectetur. Eu netus etiam lectus fames pulvinar ut arcu."
          time="2 min ago"
        />

        <NotificationItem
          icon={<VKIcon className="h-8 w-8 text-white" />}
          iconBg="bg-blue-500"
          title="Message 1"
          description="Lorem ipsum dolor sit amet consectetur. Eu netus etiam lectus fames pulvinar ut arcu."
          time="2 min ago"
        />

        <NotificationItem
          icon={<VKIcon className="h-8 w-8 text-white" />}
          iconBg="bg-blue-500"
          title="Message 1"
          description="Lorem ipsum dolor sit amet consectetur. Eu netus etiam lectus fames pulvinar ut arcu."
          time="2 min ago"
          isLast={true}
        />
      </div>
    </div>
  );
}

interface NotificationItemProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  time: string;
  isLast?: boolean;
}

function NotificationItem({
  icon,
  iconBg,
  title,
  description,
  time,
  isLast = false,
}: NotificationItemProps) {
  return (
    <div
      className={`flex items-start p-4 ${
        !isLast ? "border-b border-gray-200" : ""
      }`}
    >
      <div className={`${iconBg} rounded-full p-2 mr-4 flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
      <div className="text-gray-500 text-sm ml-4 flex-shrink-0">{time}</div>
    </div>
  );
}

// Custom VK icon component to match the design
function VKIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <span className="font-bold">VK</span>
    </div>
  );
}
