"use client";

import React, { ChangeEvent, FormEvent } from "react";
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

  submissionStatus:
    | "idle"
    | "success"
    | "error";

  submissionError: string;
}

/* ============================================================
   SECTION HEADER
   ============================================================ */

function SectionHeader({
  title,
}: {
  title: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
        {title}
      </h2>

      <div className="mt-4 h-px w-16 bg-white/40" />
    </div>
  );
}

/* ============================================================
   FIELD
   ============================================================ */

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

  required?: boolean;
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = true,
}: FieldProps) {
  const isPhone =
    id === "member1Phone" ||
    id === "member2Phone" ||
    id === "member3Phone" ||
    id === "member4Phone" ||
    id === "member5Phone";

  const isEmail =
    id === "member1Email" ||
    id === "member2Email" ||
    id === "member3Email" ||
    id === "member4Email" ||
    id === "member5Email";

  const isUTR = id === "utrNumber";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    let nextValue = e.target.value;

    if (isPhone) {
      nextValue = nextValue
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    if (isUTR) {
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
        required={required}
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

/* ============================================================
   TEAM MEMBER FIELDS
   ============================================================ */

interface TeamMemberFieldsProps {
  memberNumber: 1 | 2 | 3 | 4 | 5;

  formData: BoardroomRegistrationFormData;

  onFieldChange: (
    field: keyof BoardroomRegistrationFormData,
    value: string
  ) => void;

  required: boolean;
}

function TeamMemberFields({
  memberNumber,
  formData,
  onFieldChange,
  required,
}: TeamMemberFieldsProps) {
  const nameField =
    `member${memberNumber}Name` as keyof BoardroomRegistrationFormData;

  const phoneField =
    `member${memberNumber}Phone` as keyof BoardroomRegistrationFormData;

  const emailField =
    `member${memberNumber}Email` as keyof BoardroomRegistrationFormData;

  return (
    <div
      className={cn(
        "border-t border-white/10 pt-8",
        memberNumber === 1 &&
          "border-t-0 pt-0"
      )}
    >
      <h3 className="mb-6 text-lg font-medium text-white">
        Member {memberNumber}

        {memberNumber === 1 && (
          <span className="ml-2 text-sm font-normal text-zinc-500">
            Primary Contact
          </span>
        )}
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Field
          id={nameField}
          label="Name"
          value={formData[nameField]}
          onChange={onFieldChange}
          placeholder="Full name"
          required={required}
        />

        <Field
          id={phoneField}
          label="Phone Number"
          value={formData[phoneField]}
          onChange={onFieldChange}
          placeholder="10-digit phone number"
          type="tel"
          required={required}
        />

        <Field
          id={emailField}
          label="Email Address"
          value={formData[emailField]}
          onChange={onFieldChange}
          placeholder="you@example.com"
          type="email"
          required={required}
        />
      </div>
    </div>
  );
}

/* ============================================================
   MAIN REGISTRATION FORM
   ============================================================ */

export function BoardroomRegistrationForm({
  formData,
  onFieldChange,
  onSubmit,
  isSubmitting,
  submissionStatus,
  submissionError,
}: RegistrationFormProps) {
  const teamSize =
    Number(formData.teamSize) || 0;

  /*
   * Boardroom registration pricing
   *
   * Early Bird:
   * ₹799 per head
   *
   * Original price:
   * ₹1199 per head
   */

  const PRICE_PER_HEAD = 799;
  const ORIGINAL_PRICE_PER_HEAD = 1199;

  const totalAmount =
    teamSize * PRICE_PER_HEAD;

  return (
    <form
      onSubmit={onSubmit}
      className="w-full"
    >
      <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-10">

        {/* =====================================================
            TEAM DETAILS
            ===================================================== */}

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

        <div className="my-12 h-px bg-white/10" />

        {/* =====================================================
            TEAM MEMBERS
            ===================================================== */}

        <section>
          <SectionHeader title="Team Member Details" />

          <p className="mb-8 text-sm leading-relaxed text-zinc-500">
            Enter the details of every member of your
            team. Member 1 will be treated as the
            primary point of contact.
          </p>

          <div className="space-y-8">
            {teamSize >= 1 && (
              <TeamMemberFields
                memberNumber={1}
                formData={formData}
                onFieldChange={onFieldChange}
                required
              />
            )}

            {teamSize >= 2 && (
              <TeamMemberFields
                memberNumber={2}
                formData={formData}
                onFieldChange={onFieldChange}
                required
              />
            )}

            {teamSize >= 3 && (
              <TeamMemberFields
                memberNumber={3}
                formData={formData}
                onFieldChange={onFieldChange}
                required
              />
            )}

            {teamSize >= 4 && (
              <TeamMemberFields
                memberNumber={4}
                formData={formData}
                onFieldChange={onFieldChange}
                required
              />
            )}

            {teamSize >= 5 && (
              <TeamMemberFields
                memberNumber={5}
                formData={formData}
                onFieldChange={onFieldChange}
                required
              />
            )}
          </div>
        </section>

        <div className="my-12 h-px bg-white/10" />

        {/* =====================================================
            ADDITIONAL DETAILS
            ===================================================== */}

        <section>
          <SectionHeader title="Additional Details" />

          <div className="flex justify-center">
            <div className="w-full max-w-xl text-center">
              <Label className="text-lg font-normal text-zinc-300">
                Do you require accommodation?
              </Label>

              <div className="mt-6 flex justify-center gap-4">
                {/* YES */}
                <label
                  className={cn(
                    "flex min-w-32 cursor-pointer items-center justify-center gap-3 rounded-full border px-6 py-3 transition-all",
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
                    className="h-4 w-4 accent-orange-500"
                  />

                  <span className="text-base">
                    Yes
                  </span>
                </label>

                {/* NO */}
                <label
                  className={cn(
                    "flex min-w-32 cursor-pointer items-center justify-center gap-3 rounded-full border px-6 py-3 transition-all",
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
                    className="h-4 w-4 accent-orange-500"
                  />

                  <span className="text-base">
                    No
                  </span>
                </label>
              </div>

              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-zinc-500">
                If you select Yes, the coordinators
                will circulate a separate
                accommodation form later.
              </p>
            </div>
          </div>
        </section>

        <div className="my-12 h-px bg-white/10" />

        {/* =====================================================
            PAYMENT
            ===================================================== */}

        <section>
          <SectionHeader title="Payment" />

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

            {/* QR CODE */}

            <div className="flex flex-col items-center">
              <p className="mb-5 text-center text-sm text-zinc-400">
                Scan the QR code below to complete
                your registration payment.
              </p>

              <div className="rounded-xl border border-white/10 bg-white p-3">
                <img
                  src="/startup-senate/payment-qr.png"
                  alt="QR Code for payment"
                  className="h-64 w-64 rounded-lg object-contain"
                />
              </div>
            </div>

            {/* PAYMENT DETAILS */}

            <div className="flex flex-col justify-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Registration Fee
                </p>

                {teamSize > 0 ? (
                  <>
                    {/* TOTAL TEAM FEE */}

                    <div className="mt-3">
                      <span className="font-serif text-5xl italic tracking-tight text-white">
                        ₹{totalAmount.toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* PRICE BREAKDOWN */}

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="text-xl font-medium text-zinc-500 line-through">
                        ₹{ORIGINAL_PRICE_PER_HEAD}
                      </span>

                      <span className="text-xl font-medium text-zinc-300">
                        ₹{PRICE_PER_HEAD}
                      </span>

                      <span className="text-sm font-medium text-zinc-400">
                        per head
                      </span>

                      <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                        Early Bird Offer
                      </span>
                    </div>

                    {/* CALCULATION */}

                    <p className="mt-3 text-xs text-zinc-500">
                      ₹{PRICE_PER_HEAD} per head ×{" "}
                      {teamSize}{" "}
                      {teamSize === 1
                        ? "member"
                        : "members"}
                    </p>

                    {/* PAYMENT INSTRUCTION */}

                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                      Pay ₹
                      {totalAmount.toLocaleString(
                        "en-IN"
                      )}{" "}
                      for your {teamSize}-member
                      team using the QR code and
                      enter the UTR transaction
                      number below.
                    </p>
                  </>
                ) : (
                  <>
                    {/* DEFAULT PER-HEAD PRICE */}

                    <div className="mt-3 flex items-baseline gap-3">
                      <span className="font-serif text-5xl italic tracking-tight text-white">
                        ₹799
                      </span>

                      <span className="text-sm font-medium text-zinc-400">
                        per head
                      </span>
                    </div>

                    {/* EARLY BIRD PRICE */}

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="text-xl font-medium text-zinc-500 line-through">
                        ₹1199
                      </span>

                      <span className="text-xl font-medium text-zinc-300">
                        ₹799
                      </span>

                      <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                        Early Bird Offer
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                      ₹799 per head. Select your team
                      size above to see the total
                      registration fee.
                    </p>
                  </>
                )}
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
                  Enter the 12-digit UTR generated
                  after completing the payment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATUS
            ===================================================== */}

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

        {/* =====================================================
            SUBMIT
            ===================================================== */}

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