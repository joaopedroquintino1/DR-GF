// Rastreamento de conversão — Meta Pixel + Google Analytics 4.
// Os scripts base ficam em app/layout.tsx.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

// Best effort: se um bloqueador de anúncios derrubar um dos scripts,
// o clique não pode falhar por causa disso.
const safe = (fn: () => void) => {
  try {
    fn();
  } catch {
    // ignorado de propósito — rastreamento nunca bloqueia a navegação
  }
};

/** Conversão de clique no WhatsApp, na ordem: Meta → Google → navegação. */
export const trackWhatsApp = (origem: string) => {
  // 1. Meta Pixel
  safe(() => {
    window.fbq?.("track", "Contact", {
      content_name: "Clique WhatsApp",
      content_category: origem,
    });
  });

  // 2. Google Analytics 4
  safe(() => {
    window.gtag?.("event", "contato_whatsapp", {
      origem,
      event_category: "engajamento",
      event_label: origem,
    });
  });

  // 3. a navegação acontece no próprio <a target="_blank">: a aba atual não é
  //    descarregada, então as requisições acima têm tempo de sair.
};
