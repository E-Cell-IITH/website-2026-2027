"use client";

import type { FormEvent, ReactNode } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

import type { RegistrationFormData } from "@/hooks/use-registration-form";

const AMOUNT_BASE = 1200;
const GST_RATE = 0.18;
const AMOUNT_TOTAL = Math.round(
  AMOUNT_BASE * (1 + GST_RATE)
);

// Strips anything non-numeric and caps length,
// so the field can never hold more than a 10-digit number.
const sanitizePhone = (value: string) =>
  value.replace(/\D/g, "").slice(0, 10);

interface RegistrationFormProps {
  formData: RegistrationFormData;

  onFieldChange: (
    field: keyof RegistrationFormData,
    value: string
  ) => void;

  onSubmit: (
    e: FormEvent<HTMLFormElement>
  ) => void | Promise<void>;

  isSubmitting: boolean;

  submissionStatus: "idle" | "success" | "error";

  submissionError: string;
}

export function RegistrationForm({
  formData,
  onFieldChange,
  onSubmit,
  isSubmitting,
  submissionStatus,
  submissionError,
}: RegistrationFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Student Name */}
        <Field label="Name of student" id="studentName">
          <Input
            id="studentName"
            required
            value={formData.studentName}
            onChange={(e) =>
              onFieldChange(
                "studentName",
                e.target.value
              )
            }
            placeholder="Full name"
          />
        </Field>

        {/* Student Phone */}
        <Field
          label="Phone number of student"
          id="studentPhone"
        >
          <Input
            id="studentPhone"
            type="tel"
            required
            inputMode="numeric"
            pattern="\d{10}"
            maxLength={10}
            title="Enter a 10-digit phone number"
            value={formData.studentPhone}
            onChange={(e) =>
              onFieldChange(
                "studentPhone",
                sanitizePhone(e.target.value)
              )
            }
            placeholder="10-digit mobile number"
          />
        </Field>

        {/* Student Email */}
        <Field
          label="Email of student"
          id="studentEmail"
        >
          <Input
            id="studentEmail"
            type="email"
            required
            value={formData.studentEmail}
            onChange={(e) =>
              onFieldChange(
                "studentEmail",
                e.target.value
              )
            }
            placeholder="student@email.com"
          />
        </Field>

        {/* Class */}
        <Field label="Class" id="studentClass">
          <select
            id="studentClass"
            required
            value={formData.studentClass}
            onChange={(e) =>
              onFieldChange(
                "studentClass",
                e.target.value
              )
            }
            className="flex h-10 w-full rounded-md border border-white/70 bg-[#0a0a0a] px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-0"
          >
            <option
              value=""
              disabled
              className="bg-[#0a0a0a] text-zinc-500"
            >
              Select your class
            </option>

            <option
              value="9"
              className="bg-[#0a0a0a] text-white"
            >
              9
            </option>

            <option
              value="10"
              className="bg-[#0a0a0a] text-white"
            >
              10
            </option>

            <option
              value="11"
              className="bg-[#0a0a0a] text-white"
            >
              11
            </option>

            <option
              value="12"
              className="bg-[#0a0a0a] text-white"
            >
              12
            </option>
          </select>
        </Field>

        {/* School */}
        <Field
          label="School"
          id="schoolName"
          className="sm:col-span-2"
        >
          <Input
            id="schoolName"
            required
            value={formData.schoolName}
            onChange={(e) =>
              onFieldChange(
                "schoolName",
                e.target.value
              )
            }
            placeholder="School name"
          />
        </Field>

        {/* School Address */}
        <Field
          label="Address of school"
          id="schoolAddress"
          className="sm:col-span-2"
        >
          <Textarea
            id="schoolAddress"
            required
            rows={2}
            value={formData.schoolAddress}
            onChange={(e) =>
              onFieldChange(
                "schoolAddress",
                e.target.value
              )
            }
            placeholder="Full school address"
          />
        </Field>

        {/* Mother's Name */}
        <Field
          label="Mother's name"
          id="motherName"
        >
          <Input
            id="motherName"
            required
            value={formData.motherName}
            onChange={(e) =>
              onFieldChange(
                "motherName",
                e.target.value
              )
            }
          />
        </Field>

        {/* Mother's Phone */}
        <Field
          label="Mother's phone number"
          id="motherPhone"
        >
          <Input
            id="motherPhone"
            type="tel"
            required
            inputMode="numeric"
            pattern="\d{10}"
            maxLength={10}
            title="Enter a 10-digit phone number"
            value={formData.motherPhone}
            onChange={(e) =>
              onFieldChange(
                "motherPhone",
                sanitizePhone(e.target.value)
              )
            }
          />
        </Field>

        {/* Father's Name */}
        <Field
          label="Father's name"
          id="fatherName"
        >
          <Input
            id="fatherName"
            required
            value={formData.fatherName}
            onChange={(e) =>
              onFieldChange(
                "fatherName",
                e.target.value
              )
            }
          />
        </Field>

        {/* Father's Phone */}
        <Field
          label="Father's phone number"
          id="fatherPhone"
        >
          <Input
            id="fatherPhone"
            type="tel"
            required
            inputMode="numeric"
            pattern="\d{10}"
            maxLength={10}
            title="Enter a 10-digit phone number"
            value={formData.fatherPhone}
            onChange={(e) =>
              onFieldChange(
                "fatherPhone",
                sanitizePhone(e.target.value)
              )
            }
          />
        </Field>

        {/* Parent Email */}
        <Field
          label="Parent's email"
          id="parentEmail"
          className="sm:col-span-2"
        >
          <Input
            id="parentEmail"
            type="email"
            required
            value={formData.parentEmail}
            onChange={(e) =>
              onFieldChange(
                "parentEmail",
                e.target.value
              )
            }
          />
        </Field>
      </div>

      {/* =====================================================
          PAYMENT
          ===================================================== */}

      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
        <p className="mb-3 text-sm font-medium text-white">
          Payment — ₹
          {AMOUNT_TOTAL.toLocaleString("en-IN")}{" "}
          <span className="font-normal text-zinc-400">
            (₹
            {AMOUNT_BASE.toLocaleString("en-IN")} + 18%
            GST)
          </span>
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <img
            src="/startup-senate/payment-qr.png"
            alt="Payment QR code"
            className="h-40 w-40 rounded-md border border-zinc-800 bg-white object-contain p-2"
          />

          <div className="w-full flex-1">
            <Field
              label="UTR number of payment"
              id="utrNumber"
            >
              <Input
                id="utrNumber"
                required
                value={formData.utrNumber}
                onChange={(e) =>
                  onFieldChange(
                    "utrNumber",
                    e.target.value
                  )
                }
                placeholder="12-digit UTR"
                maxLength={12}
                minLength={12}
                inputMode="numeric"
                pattern="[0-9]{12}"
              />
            </Field>
          </div>
        </div>
      </div>

      {/* =====================================================
          SUBMISSION STATUS
          ===================================================== */}

      {submissionStatus === "success" && (
        <div
          role="status"
          className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300"
        >
          <p className="font-medium">
            Registration successful!
          </p>

          <p className="mt-1 text-green-300/80">
            Your application has been submitted
            successfully and is currently under review. A
            confirmation email has been sent to your
            registered email address.
          </p>
        </div>
      )}

      {submissionStatus === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
        >
          <p className="font-medium">
            Registration could not be submitted.
          </p>

          <p className="mt-1 text-red-300/80">
            {submissionError ||
              "Something went wrong. Please try again."}
          </p>
        </div>
      )}

      {/* =====================================================
          SUBMIT
          ===================================================== */}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full rounded-full py-3 text-base font-medium text-black transition-colors",
          isSubmitting
            ? "cursor-not-allowed bg-orange-500/50"
            : "bg-orange-500 hover:bg-orange-400"
        )}
      >
        {isSubmitting
          ? "Submitting your registration..."
          : "Submit registration"}
      </button>
    </form>
  );
}

/* ============================================================
   FIELD COMPONENT
   ============================================================ */

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
      <Label
        htmlFor={id}
        className="text-sm text-zinc-300"
      >
        {label}
      </Label>

      {children}
    </div>
  );
}