import { Header } from "@/components/header";
import { SocialMedia } from "@/components/social-media";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Matheus Borges | Fulstack developer",
  description: "Matheus Borges Portfolio - Fulstack developer",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={poppins.className}>
        <Header language={locale} />
        {children}
        <SocialMedia />
      </body>
    </html>
  );
}
