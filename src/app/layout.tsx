import { Menu } from "@/components/Menu";
import { TopMenu } from "@/components/TopMenu";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex">
        <Menu />
        <div className="bg-light-gray w-full">
          <TopMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
