import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex">
        <Sidebar />
        <div className="bg-light-gray w-full overflow-y-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
