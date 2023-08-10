import { Ubuntu, Bebas_Neue } from "next/font/google";
import { AuthContextProvider } from "@/contexts/AuthContextProvider";
import "./styles/globals.css";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  display: "auto",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const bebas = Bebas_Neue({
  weight: ["400"],
  display: "auto",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${ubuntu.variable} ${bebas.variable}`}>
      <body className="w-full">
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
