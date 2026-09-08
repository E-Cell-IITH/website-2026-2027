"use client";

import type { ChangeEvent, FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import type { BoardroomRegistrationFormData } from "@/hooks/use-boardroom-registration-form";

interface RegistrationFormProps {
  formData: BoardroomRegistrationFormData;
  onFieldChange: (
    field: keyof BoardroomRegistrationFormData,
    value: string
  ) => void;
  onSubmit: (
    e: FormEvent<HTMLFormElement>
  ) => void | Promise<void>;
  isSubmitting: boolean;
  submissionStatus: "idle" | "success" | "error";
  submissionError: string;
}

/* -------------------------------------------------------------------------- */
/* Section Header                                                             */
/* -------------------------------------------------------------------------- */

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
        {title}
      </h2>

      <div className="mt-4 h-px w-16 bg-white/40" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Input Field                                                                */
/* -------------------------------------------------------------------------- */

interface FieldProps {
  id: keyof BoardroomRegistrationFormData;
  label: string;
  value: string;
  onChange: (
    field: keyof BoardroomRegistrationFormData,
    value: string
  ) => void;
  placeholder?: string;
  type?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: FieldProps) {
  const isPhone =
    id === "primaryPocPhone" ||
    id === "secondaryPocPhone";

  const isEmail =
    id === "primaryPocEmail" ||
    id === "secondaryPocEmail";

  const isUTR = id === "utrNumber";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    let nextValue = e.target.value;

    /* -------------------------------------------------------------- */
    /* Phone number                                                    */
    /* -------------------------------------------------------------- */
    if (isPhone) {
      // Only numbers.
      // Maximum 10 digits.
      // NO 6-9 restriction.
      nextValue = nextValue
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    /* -------------------------------------------------------------- */
    /* UTR number                                                      */
    /* -------------------------------------------------------------- */
    if (isUTR) {
      // Only numbers.
      // Maximum 12 digits.
      nextValue = nextValue
        .replace(/\D/g, "")
        .slice(0, 12);
    }

    onChange(id, nextValue);
  };

  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-base font-normal text-zinc-400"
      >
        {label}
      </Label>

      <Input
        id={id}
        name={id}
        type={
          isEmail
            ? "email"
            : isPhone || isUTR
              ? "text"
              : type
        }
        inputMode={
          isPhone || isUTR
            ? "numeric"
            : isEmail
              ? "email"
              : undefined
        }
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
        maxLength={
          isPhone
            ? 10
            : isUTR
              ? 12
              : undefined
        }
        minLength={
          isPhone
            ? 10
            : isUTR
              ? 12
              : undefined
        }
        className="h-12 rounded-lg border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-0"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main Registration Form                                                     */
/* -------------------------------------------------------------------------- */

export function BoardroomRegistrationForm({
  formData,
  onFieldChange,
  onSubmit,
  isSubmitting,
  submissionStatus,
  submissionError,
}: RegistrationFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full"
    >
      {/* ================================================================== */}
      {/* ONE SINGLE FORM CONTAINER                                         */}
      {/* ================================================================== */}

      <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-10">

        {/* ================================================================ */}
        {/* TEAM DETAILS                                                      */}
        {/* ================================================================ */}

        <section>
          <SectionHeader title="Team Details" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field
              id="collegeName"
              label="College Name"
              value={formData.collegeName}
              onChange={onFieldChange}
              placeholder="Your college / institution"
            />

            <Field
              id="teamName"
              label="Team Name"
              value={formData.teamName}
              onChange={onFieldChange}
              placeholder="Your team name"
            />

            <Field
              id="city"
              label="City"
              value={formData.city}
              onChange={onFieldChange}
              placeholder="Your city"
            />

            <Field
              id="state"
              label="State"
              value={formData.state}
              onChange={onFieldChange}
              placeholder="Your state"
            />

            {/* Team Size */}
            <div className="space-y-2 md:max-w-sm">
              <Label
                htmlFor="teamSize"
                className="text-base font-normal text-zinc-400"
              >
                Team Size
              </Label>

              <select
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={(e) =>
                  onFieldChange(
                    "teamSize",
                    e.target.value
                  )
                }
                required
                className="h-12 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-white outline-none transition-colors focus:border-white"
              >
                <option value="">
                  Select team size
                </option>

                <option value="3">
                  3 members
                </option>

                <option value="4">
                  4 members
                </option>

                <option value="5">
                  5 members
                </option>
              </select>

              <p className="text-xs text-zinc-600">
                Teams must have 3–5 members.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* DIVIDER                                                            */}
        {/* ================================================================== */}

        <div className="my-12 h-px bg-white/10" />

        {/* ================================================================ */}
        {/* POINT OF CONTACT DETAILS                                         */}
        {/* ================================================================ */}

        <section>
          <SectionHeader title="Point of Contact Details" />

          <div className="space-y-10">

            {/* ------------------------------------------------------------ */}
            {/* Primary POC                                                   */}
            {/* ------------------------------------------------------------ */}

            <div>
              <h3 className="mb-6 text-lg font-medium text-white">
                Primary POC
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Field
                  id="primaryPocName"
                  label="Name"
                  value={formData.primaryPocName}
                  onChange={onFieldChange}
                  placeholder="Full name"
                />

                <Field
                  id="primaryPocPhone"
                  label="Phone Number"
                  value={formData.primaryPocPhone}
                  onChange={onFieldChange}
                  placeholder="10-digit phone number"
                  type="tel"
                />

                <Field
                  id="primaryPocEmail"
                  label="Email Address"
                  value={formData.primaryPocEmail}
                  onChange={onFieldChange}
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* Secondary POC                                                 */}
            {/* ------------------------------------------------------------ */}

            <div className="border-t border-white/10 pt-10">
              <h3 className="mb-6 text-lg font-medium text-white">
                Secondary POC
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Field
                  id="secondaryPocName"
                  label="Name"
                  value={formData.secondaryPocName}
                  onChange={onFieldChange}
                  placeholder="Full name"
                />

                <Field
                  id="secondaryPocPhone"
                  label="Phone Number"
                  value={formData.secondaryPocPhone}
                  onChange={onFieldChange}
                  placeholder="10-digit phone number"
                  type="tel"
                />

                <Field
                  id="secondaryPocEmail"
                  label="Email Address"
                  value={formData.secondaryPocEmail}
                  onChange={onFieldChange}
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================================================================== */}
        {/* DIVIDER                                                            */}
        {/* ================================================================== */}

        <div className="my-12 h-px bg-white/10" />

        {/* ================================================================ */}
        {/* ADDITIONAL DETAILS                                                */}
        {/* ================================================================ */}

        <section>
          <SectionHeader title="Additional Details" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {/* ------------------------------------------------------------ */}
            {/* Accommodation                                                */}
            {/* ------------------------------------------------------------ */}

            <div className="space-y-4">
              <Label className="text-base font-normal text-zinc-400">
                Do you require accommodation?
              </Label>

              <div className="flex flex-wrap gap-3">

                {/* YES */}
                <label
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-lg border px-5 py-3 transition-colors",
                    formData.accommodationRequired ===
                      "yes"
                      ? "border-orange-500 bg-orange-500/10 text-white"
                      : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-600"
                  )}
                >
                  <input
                    type="radio"
                    name="accommodationRequired"
                    value="yes"
                    checked={
                      formData.accommodationRequired ===
                      "yes"
                    }
                    onChange={(e) =>
                      onFieldChange(
                        "accommodationRequired",
                        e.target.value
                      )
                    }
                    required
                    className="accent-orange-500"
                  />

                  <span>Yes</span>
                </label>

                {/* NO */}
                <label
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-lg border px-5 py-3 transition-colors",
                    formData.accommodationRequired ===
                      "no"
                      ? "border-orange-500 bg-orange-500/10 text-white"
                      : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-600"
                  )}
                >
                  <input
                    type="radio"
                    name="accommodationRequired"
                    value="no"
                    checked={
                      formData.accommodationRequired ===
                      "no"
                    }
                    onChange={(e) =>
                      onFieldChange(
                        "accommodationRequired",
                        e.target.value
                      )
                    }
                    required
                    className="accent-orange-500"
                  />

                  <span>No</span>
                </label>

              </div>
            </div>

          </div>
        </section>

        {/* ================================================================== */}
        {/* DIVIDER                                                            */}
        {/* ================================================================== */}

        <div className="my-12 h-px bg-white/10" />

        {/* ================================================================ */}
        {/* PAYMENT                                                           */}
        {/* ================================================================ */}

        <section>
          <SectionHeader title="Payment" />

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

            {/* ------------------------------------------------------------ */}
            {/* QR CODE                                                       */}
            {/* ------------------------------------------------------------ */}

            <div className="flex flex-col items-center">
              <p className="mb-5 text-center text-sm text-zinc-400">
                Scan the QR code below to complete your
                registration payment.
              </p>

              <div className="rounded-xl border border-white/10 bg-white p-3">
                <img
                  src="/startup-senate/payment-qr.png"
                  alt="QR Code for payment"
                  className="h-64 w-64 rounded-lg object-contain"
                />
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* PAYMENT INFORMATION + UTR                                    */}
            {/* ------------------------------------------------------------ */}

            <div className="flex flex-col justify-center">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Registration Fee
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {/* ORIGINAL PRICE */}
                  <span className="text-2xl font-medium text-zinc-500 line-through">
                    ₹1199
                  </span>

                  {/* EARLY BIRD PRICE */}
                  <span className="font-serif text-5xl italic tracking-tight text-white">
                    ₹799
                  </span>

                  {/* BADGE */}
                  <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                    Early Bird Offer
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                  Pay ₹799 using the QR code and enter
                  the UTR transaction number below.
                </p>
              </div>

              {/* UTR */}
              <div className="mt-8">
                <Field
                  id="utrNumber"
                  label="UTR Transaction Number"
                  value={formData.utrNumber}
                  onChange={onFieldChange}
                  placeholder="Enter your 12-digit UTR number"
                />

                <p className="mt-2 text-xs text-zinc-600">
                  Enter the 12-digit UTR generated after
                  completing the payment.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* STATUS                                                              */}
        {/* ================================================================== */}

        {submissionStatus === "success" && (
          <div className="mt-10 rounded-lg border border-green-500/20 bg-green-500/10 px-5 py-4 text-center text-sm text-green-400">
            Registration submitted successfully.
            Please check your email for confirmation.
          </div>
        )}

        {submissionStatus === "error" && (
          <div className="mt-10 rounded-lg border border-red-500/20 bg-red-500/10 px-5 py-4 text-center text-sm text-red-400">
            {submissionError ||
              "Something went wrong while submitting your registration."}
          </div>
        )}

        {/* ================================================================== */}
        {/* SUBMIT                                                              */}
        {/* ================================================================== */}

        <div className="mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full rounded-full py-4 text-base font-medium text-black transition-colors",
              isSubmitting
                ? "cursor-not-allowed bg-orange-500/40"
                : "bg-orange-500 hover:bg-orange-400"
            )}
          >
            {isSubmitting
              ? "Submitting your registration..."
              : "Submit registration"}
          </button>
        </div>

      </div>
    </form>
  );
}