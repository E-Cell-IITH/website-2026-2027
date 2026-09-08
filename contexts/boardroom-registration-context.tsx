"use client";

import { createContext, useContext } from "react";

import {
  useBoardroomRegistrationForm,
  type BoardroomRegistrationFormData,
} from "@/hooks/use-boardroom-registration-form";

type BoardroomRegistrationContextValue = {
  formData: BoardroomRegistrationFormData;

  updateField: (
    field: keyof BoardroomRegistrationFormData,
    value: string
  ) => void;

  resetForm: () => void;
};

const BoardroomRegistrationContext =
  createContext<BoardroomRegistrationContextValue | null>(null);

export function BoardroomRegistrationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const registration = useBoardroomRegistrationForm();

  return (
    <BoardroomRegistrationContext.Provider value={registration}>
      {children}
    </BoardroomRegistrationContext.Provider>
  );
}

export function useBoardroomRegistration() {
  const context = useContext(BoardroomRegistrationContext);

  if (!context) {
    throw new Error(
      "useBoardroomRegistration must be used inside BoardroomRegistrationProvider"
    );
  }

  return context;
}