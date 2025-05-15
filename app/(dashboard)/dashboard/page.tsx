import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUpload } from "@/components/file-upload";
import { SampleFiles } from "@/components/sample-files";
import DashboardHeader from "@/components/dashboard-header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const userSession = await auth();

  if (!userSession) {
    redirect("/sign-in");
  }

  const userId = userSession.user?.id;

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader title="Welcome, Raunak" showRunButton={true} />

      <div className="flex-1 p-4 md:p-6">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium mt-4">
              Upload file
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <FileUpload userId={userId!} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Sample files
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SampleFiles />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
