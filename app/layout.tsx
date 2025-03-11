import type { Metadata } from "next";
// import { Outfit } from "next/font/google";
import "./globals.css";
import ToastNotification from "@/components/ui/ToastNotification";

// const outfit = Outfit({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "ACPR - Home",
  description: "Pagina inicial de la asociacion cubana de reconocimiento de patrones",
  icons: {
    icon: "/acrp-icon.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>

      <body
        // className={outfit.className
        // }
      >
        {children}
        {<ToastNotification/>}
      </body>
    </html>
  );
}
