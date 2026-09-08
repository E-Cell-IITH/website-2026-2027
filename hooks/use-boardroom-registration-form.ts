"use client";

import { useEffect, useState } from "react";

export type BoardroomRegistrationFormData = {
  collegeName: string;
  city: string;
  state: string;

  teamName: string;
  teamSize: string;

  primaryPocName: string;
  primaryPocPhone: string;
  primaryPocEmail: string;

  secondaryPocName: string;
  secondaryPocPhone: string;
  secondaryPocEmail: string;

  accommodationRequired: string;

  utrNumber: string;
};

const STORAGE_KEY = "boardroom-registration-draft";

const initialFormData: BoardroomRegistrationFormData = {
  collegeName: "",
  city: "",
  state: "",

  teamName: "",
  teamSize: "3",

  primaryPocName: "",
  primaryPocPhone: "",
  primaryPocEmail: "",

  secondaryPocName: "",
  secondaryPocPhone: "",
  secondaryPocEmail: "",

  accommodationRequired: "",

  utrNumber: "",
};

export function useBoardroomRegistrationForm() {
  const [formData, setFormData] =
    useState<BoardroomRegistrationFormData>(initialFormData);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        setFormData({
          ...initialFormData,
          ...JSON.parse(saved),
        });
      }
    } catch {
      // Ignore malformed local storage data.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // Ignore local storage failures.
    }
  }, [formData]);

  const updateField = (
    field: keyof BoardroomRegistrationFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    formData,
    updateField,
    resetForm,
  };
}