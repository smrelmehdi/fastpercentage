import { ReactNode } from "react";

interface CalculatorShellProps {
  children: ReactNode;
}

export default function CalculatorShell({ children }: CalculatorShellProps) {
  return (
    <main className="mx-auto max-w-225 px-4 py-10 sm:py-16">
      {children}
    </main>
  );
}
