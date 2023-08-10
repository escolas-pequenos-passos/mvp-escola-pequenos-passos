import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <main className="max-h-screen">{children}</main>;
}
