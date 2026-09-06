"use client";

import { useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useRegistration } from "@/contexts/registration-context";
import { RegistrationForm } from "./registration-form";

const ctaClass =
  "h-14 rounded-full bg-orange-500 px-9 text-base text-black hover:bg-orange-400";

export function RegisterCTA({ className = "" }: { className?: string }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
  const { formData, updateField, resetForm } = useRegistration();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Google Sheets / Apps Script submission wires in here later.
    console.log("Registration submitted:", formData);
    resetForm();
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(buttonVariants({ size: "lg" }), ctaClass, className)}
        >
          Apply now
        </button>

        <DialogContent className="max-h-[85vh] overflow-y-auto border-zinc-800 bg-[#0a0a0a] text-white sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl italic tracking-tight">
              Register for Startup Senate
            </DialogTitle>
            <DialogDescription className="text-zinc-400">
              Your progress is saved automatically — close this anytime and
              pick up where you left off.
            </DialogDescription>
          </DialogHeader>

          <RegistrationForm
            formData={formData}
            onFieldChange={updateField}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <a
      href="#register"
      className={cn(buttonVariants({ size: "lg" }), ctaClass, className)}
    >
      Apply now
    </a>
  );
}