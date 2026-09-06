"use client";

import type { FormEvent, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { RegistrationFormData } from "@/hooks/use-registration-form";

const AMOUNT_BASE = 1200;
const GST_RATE = 0.18;
const AMOUNT_TOTAL = Math.round(AMOUNT_BASE * (1 + GST_RATE));

interface RegistrationFormProps {
  formData: RegistrationFormData;
  onFieldChange: (field: keyof RegistrationFormData, value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function RegistrationForm({
  formData,
  onFieldChange,
  onSubmit,
}: RegistrationFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name of student" id="studentName">
          <Input
            id="studentName"
            required
            value={formData.studentName}
            onChange={(e) => onFieldChange("studentName", e.target.value)}
            placeholder="Full name"
          />
        </Field>

        <Field label="Phone number of student" id="studentPhone">
          <Input
            id="studentPhone"
            type="tel"
            required
            value={formData.studentPhone}
            onChange={(e) => onFieldChange("studentPhone", e.target.value)}
            placeholder="10-digit mobile number"
          />
        </Field>

        <Field label="Email of student" id="studentEmail">
          <Input
            id="studentEmail"
            type="email"
            required
            value={formData.studentEmail}
            onChange={(e) => onFieldChange("studentEmail", e.target.value)}
            placeholder="student@email.com"
          />
        </Field>

        <Field label="Class" id="studentClass">
          <Input
            id="studentClass"
            required
            value={formData.studentClass}
            onChange={(e) => onFieldChange("studentClass", e.target.value)}
            placeholder="e.g. 11"
          />
        </Field>

        <Field label="School" id="schoolName" className="sm:col-span-2">
          <Input
            id="schoolName"
            required
            value={formData.schoolName}
            onChange={(e) => onFieldChange("schoolName", e.target.value)}
            placeholder="School name"
          />
        </Field>

        <Field label="Address of school" id="schoolAddress" className="sm:col-span-2">
          <Textarea
            id="schoolAddress"
            required
            rows={2}
            value={formData.schoolAddress}
            onChange={(e) => onFieldChange("schoolAddress", e.target.value)}
            placeholder="Full school address"
          />
        </Field>

        <Field label="Mother's name" id="motherName">
          <Input
            id="motherName"
            required
            value={formData.motherName}
            onChange={(e) => onFieldChange("motherName", e.target.value)}
          />
        </Field>

        <Field label="Father's name" id="fatherName">
          <Input
            id="fatherName"
            required
            value={formData.fatherName}
            onChange={(e) => onFieldChange("fatherName", e.target.value)}
          />
        </Field>

        <Field label="Parent's phone number" id="parentPhone">
          <Input
            id="parentPhone"
            type="tel"
            required
            value={formData.parentPhone}
            onChange={(e) => onFieldChange("parentPhone", e.target.value)}
          />
        </Field>

        <Field label="Parent's email" id="parentEmail">
          <Input
            id="parentEmail"
            type="email"
            required
            value={formData.parentEmail}
            onChange={(e) => onFieldChange("parentEmail", e.target.value)}
          />
        </Field>
      </div>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
        <p className="mb-3 text-sm font-medium text-white">
          Payment — ₹{AMOUNT_TOTAL.toLocaleString("en-IN")}{" "}
          <span className="font-normal text-zinc-400">
            (₹{AMOUNT_BASE.toLocaleString("en-IN")} + 18% GST)
          </span>
        </p>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <img
            src="/startup-senate/payment-qr.png"
            alt="Payment QR code"
            className="h-40 w-40 rounded-md border border-zinc-800 bg-white object-contain p-2"
          />
          <div className="w-full flex-1">
            <Field label="UTR number of payment" id="utrNumber">
              <Input
                id="utrNumber"
                required
                value={formData.utrNumber}
                onChange={(e) => onFieldChange("utrNumber", e.target.value)}
                placeholder="12-digit UTR"
              />
            </Field>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-orange-500 py-3 text-base font-medium text-black transition-colors hover:bg-orange-400"
      >
        Submit registration
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  children,
  className = "",
}: {
  label: string;
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor={id} className="text-sm text-zinc-300">
        {label}
      </Label>
      {children}
    </div>
  );
}