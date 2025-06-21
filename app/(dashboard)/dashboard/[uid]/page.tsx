import { auth } from "@/auth";
import SpecificDashboardComponent from "@/components/specific-dashboard-component";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ uid: string }> }) => {
  const { uid: fileId } = await params;

  const userSession = await auth();

  if (!userSession?.user) {
    redirect("/login");
  }

  const userId = userSession.user.id;

  const doc = await db.document.findUnique({
    where: { id: fileId },
  });

  if (!doc) {
    redirect("/dashboard");
  }

  return (
    <div>
      <SpecificDashboardComponent
        userId={userId!}
        documentId={fileId}
        initialDoc={doc}
      />
    </div>
  );
};

export default page;
