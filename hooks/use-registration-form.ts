"use client";

import { useCallback, useEffect, useState } from "react";

export type RegistrationFormData = {
  studentName: string;
  studentPhone: string;
  studentEmail: string;
  studentClass: string;
  schoolName: string;
  schoolAddress: string;
  motherName: string;
  fatherName: string;
  motherPhone: string;
  fatherPhone: string;
  parentEmail: string;
  utrNumber: string;
};

const STORAGE_KEY = "startup-senate-registration-draft";

const emptyForm: RegistrationFormData = {
  studentName: "",
  studentPhone: "",
  studentEmail: "",
  studentClass: "",
  schoolName: "",
  schoolAddress: "",
  motherName: "",
  fatherName: "",
  motherPhone: "",
  fatherPhone: "",
  parentEmail: "",
  utrNumber: "",
};

export function useRegistrationForm() {
  const [formData, setFormData] = useState<RegistrationFormData>(emptyForm);
  const [hydrated, setHydrated] = useState(false);

  // Load any saved draft once, on first mount.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setFormData({ ...emptyForm, ...JSON.parse(saved) });
      }
    } catch {
      // Corrupt or inaccessible storage — fall back to a blank form.
    }
    setHydrated(true);
  }, []);

  // Persist on every change, once past the initial load.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // Private browsing / quota exceeded — ignore, form still works in-session.
    }
  }, [formData, hydrated]);

  const updateField = useCallback(
    (field: keyof RegistrationFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(emptyForm);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return { formData, updateField, resetForm };
}