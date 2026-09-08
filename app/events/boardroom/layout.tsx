import type { ReactNode } from "react";

import { BoardroomRegistrationProvider } from "@/contexts/boardroom-registration-context";

export default function BoardroomLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <BoardroomRegistrationProvider>
      {children}
    </BoardroomRegistrationProvider>
  );
}