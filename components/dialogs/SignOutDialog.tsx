"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "../ui/button";

const SignOutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-sm cursor-pointer text-center">
        Sign Out
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Sign Out</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignOutDialog;
