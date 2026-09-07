"use client";

import type { FormEvent } from "react";
import { useRegistration } from "@/contexts/registration-context";
import { RegistrationForm } from "./registration-form";

export function RegistrationSection() {
  const { formData, updateField, resetForm } = useRegistration();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Google Sheets / Apps Script submission wires in here later.
    console.log("Registration submitted:", formData);
    resetForm();
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
        />
      </div>
    </section>
  );
}