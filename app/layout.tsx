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

<Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2497323520743716');
    fbq('track', 'PageView');
  `}
</Script>

<noscript>
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img
    height="1"
    width="1"
    style={{ display: "none" }}
    src="https://www.facebook.com/tr?id=2497323520743716&ev=PageView&noscript=1"
    alt=""
  />
</noscript>
</body>
</html>
);
}
