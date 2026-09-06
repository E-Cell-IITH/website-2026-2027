"use client";

import { createContext, useContext, type ReactNode } from "react";
import {
  useRegistrationForm,
  type RegistrationFormData,
} from "@/hooks/use-registration-form";

interface RegistrationContextValue {
  formData: RegistrationFormData;
  updateField: (field: keyof RegistrationFormData, value: string) => void;
  resetForm: () => void;
}

const RegistrationContext = createContext<RegistrationContextValue | null>(null);

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const { formData, updateField, resetForm } = useRegistrationForm();

  return (
    <RegistrationContext.Provider value={{ formData, updateField, resetForm }}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const ctx = useContext(RegistrationContext);
  if (!ctx) {
    throw new Error("useRegistration must be used inside a RegistrationProvider");
  }
  return ctx;
}