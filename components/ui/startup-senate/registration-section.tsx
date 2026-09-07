"use client";

import { useState, type FormEvent } from "react";

import { useRegistration } from "@/contexts/registration-context";
import { submitStartupSenateRegistration } from "@/lib/startup-senate";

import { RegistrationForm } from "./registration-form";

export function RegistrationSection() {
  const {
    formData,
    updateField,
    resetForm,
  } = useRegistration();

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submissionStatus, setSubmissionStatus] =
    useState<"idle" | "success" | "error">("idle");

  const [submissionError, setSubmissionError] =
    useState("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setSubmissionError("");

    try {
      await submitStartupSenateRegistration(formData);

      resetForm();

      setSubmissionStatus("success");
    } catch (error) {
      console.error(
        "Registration submission failed:",
        error
      );

      setSubmissionStatus("error");

      if (error instanceof Error) {
        setSubmissionError(error.message);
      } else {
        setSubmissionError(
          "We couldn't submit your registration. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      className="w-full bg-[#0a0a0a] px-6 py-16 text-white md:py-24"
    >
      <div className="mx-auto mb-8 max-w-lg space-y-2 text-center md:mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Register
        </span>

        <h2 className="font-serif text-3xl italic tracking-tight text-white md:text-5xl">
          Apply for Startup Senate
        </h2>
      </div>

      <div className="mx-auto max-w-lg">
        <RegistrationForm
          formData={formData}
          onFieldChange={updateField}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submissionStatus={submissionStatus}
          submissionError={submissionError}
        />
      </div>
    </section>
  );
}