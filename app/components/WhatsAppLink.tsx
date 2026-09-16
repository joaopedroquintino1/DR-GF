"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackWhatsApp } from "../lib/tracking";

export const WHATSAPP_URL =
  "https://wa.me/5516997655116?text=Ol%C3%A1%2C%20Dra.%20Gabrielle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Identifica a seção do clique no Meta e no GA4. */
  origem: string;
  children: ReactNode;
};

/** Link de WhatsApp com rastreamento de conversão embutido. */
export default function WhatsAppLink({ origem, onClick, children, ...rest }: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => {
        trackWhatsApp(origem); // 1. fbq Contact  2. gtag contato_whatsapp
        onClick?.(e); // 3. o href abre o WhatsApp
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
