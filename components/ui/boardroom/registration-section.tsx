"use client";

import { useState, type FormEvent } from "react";

import { useBoardroomRegistration } from "@/contexts/boardroom-registration-context";
import { submitBoardroomRegistration } from "@/lib/boardroom";

import { BoardroomRegistrationForm } from "./registration-form";

export function BoardroomRegistrationSection() {
  const {
    formData,
    updateField,
    resetForm,
  } = useBoardroomRegistration();

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

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setSubmissionError("");

    try {
      await submitBoardroomRegistration(formData);

      resetForm();

      setSubmissionStatus("success");
    } catch (error) {
      console.error(
        "Boardroom registration failed:",
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
      <div className="mx-auto mb-10 max-w-lg space-y-2 text-center md:mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Register
        </span>

        <h2 className="font-serif text-3xl italic tracking-tight text-white md:text-5xl">
          Register for The Boardroom
        </h2>

        <p className="pt-2 text-sm leading-relaxed text-zinc-400">
          Assemble your team and take your place in the
          boardroom.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <BoardroomRegistrationForm
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