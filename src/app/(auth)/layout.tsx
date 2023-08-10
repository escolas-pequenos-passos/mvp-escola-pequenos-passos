import { ReactNode } from "react";

import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <div className="bg-light-gray w-full overflow-y-auto">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
