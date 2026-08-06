import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Gabrielle Ferreira | Cirurgiã-dentista em Ribeirão Preto",
  description: "Atendimento odontológico personalizado em Ribeirão Preto. Limpeza, restaurações, alinhadores invisíveis e próteses.",
  icons: {
    icon: "/images/logo-gabrielle.png",
    shortcut: "/images/logo-gabrielle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       {children}

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-9DK3HJYMQT"
  strategy="afterInteractive"
/>

<Script id="google-tag" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-9DK3HJYMQT');
  `}
</Script>
</body>
</html>
);
}
