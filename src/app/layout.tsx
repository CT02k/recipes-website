import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Receitas",
  description:
    "Descubra um universo de sabores e aprenda a preparar pratos incríveis, desde receitas simples do dia a dia até criações mais elaboradas para impressionar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
