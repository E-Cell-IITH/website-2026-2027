"use client";

import { useEffect, useState } from "react";

export type BoardroomRegistrationFormData = {
  collegeName: string;
  city: string;
  state: string;
  teamName: string;
  teamSize: string;

  member1Name: string;
  member1Phone: string;
  member1Email: string;

  member2Name: string;
  member2Phone: string;
  member2Email: string;

  member3Name: string;
  member3Phone: string;
  member3Email: string;

  member4Name: string;
  member4Phone: string;
  member4Email: string;

  member5Name: string;
  member5Phone: string;
  member5Email: string;

  accommodationRequired: string;
  utrNumber: string;
};

const STORAGE_KEY = "boardroom-registration-draft";

const initialFormData: BoardroomRegistrationFormData = {
  collegeName: "",
  city: "",
  state: "",
  teamName: "",
  teamSize: "",

  member1Name: "",
  member1Phone: "",
  member1Email: "",

  member2Name: "",
  member2Phone: "",
  member2Email: "",

  member3Name: "",
  member3Phone: "",
  member3Email: "",

  member4Name: "",
  member4Phone: "",
  member4Email: "",

  member5Name: "",
  member5Phone: "",
  member5Email: "",

  accommodationRequired: "",
  utrNumber: "",
};

export function useBoardroomRegistrationForm() {
  const [formData, setFormData] =
    useState<BoardroomRegistrationFormData>(
      initialFormData
    );

  useEffect(() => {
    try {
      const savedData =
        localStorage.getItem(STORAGE_KEY);

      if (!savedData) return;

      const parsedData = JSON.parse(savedData);

      setFormData({
        ...initialFormData,
        ...parsedData,
      });
    } catch (error) {
      console.error(
        "Failed to load Boardroom registration draft:",
        error
      );
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(formData)
      );
    } catch (error) {
      console.error(
        "Failed to save Boardroom registration draft:",
        error
      );
    }
  }, [formData]);

  const updateField = (
    field: keyof BoardroomRegistrationFormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error(
        "Failed to clear Boardroom registration draft:",
        error
      );
    }
  };

  return {
    formData,
    updateField,
    resetForm,
  };
}