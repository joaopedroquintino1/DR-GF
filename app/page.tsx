"use client";

import { useEffect, useState } from "react";

const whatsapp = "https://wa.me/5516997655116?text=Ol%C3%A1%2C%20Dra.%20Gabrielle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";
const maps = "https://www.google.com/maps/@-21.1834223,-47.8062145,3a,75y,207.58h,90t/data=!3m7!1e1!3m5!1sDz-xW6W_l7OEipwp7gkIgA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DDz-xW6W_l7OEipwp7gkIgA%26yaw%3D207.58!7i16384!8i8192?entry=ttu";

const treatments = [
  { icon: "✦", title: "Limpeza", text: "Remove placa bacteriana e tártaro, ajuda a prevenir gengivite, cáries e mau hálito e mantém a saúde bucal em dia." },
  { icon: "◒", title: "Restaurações", text: "Recuperam dentes afetados por cárie ou pequenas fraturas, devolvendo função, proteção e aparência natural ao sorriso." },
  { icon: "◇", title: "Alinhadores invisíveis", text: "Uma alternativa discreta e removível para alinhar os dentes, com planejamento individualizado e acompanhamento profissional." },
  { icon: "◉", title: "Próteses", text: "Soluções pensadas para recuperar dentes ausentes ou comprometidos, melhorando mastigação, conforto e harmonia do sorriso." },
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const halo = document.querySelector<HTMLElement>(".cursor-halo");
    const move = (e: MouseEvent) => {
      if (!halo) return;
      halo.style.transform = `translate3d(${e.clientX - 5}px,${e.clientY - 5}px,0)`;
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); observer.disconnect(); };
  }, []);

  return (
    <main>
      <div className="cursor-halo" aria-hidden="true" />
      <header className="nav-wrap">
        <a className="brand" href="#inicio" aria-label="Início">
          <img className="brand-logo" src="/images/logo-gabrielle.png" alt="Logo da Dra. Gabrielle Ferreira"/><span><strong>Dra. Gabrielle Ferreira</strong><small>Cirurgiã-dentista • CRO-SP 179093</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Abrir menu">{menu ? "×" : "☰"}</button>
        <nav className={menu ? "open" : ""}>
          <a href="#sobre" onClick={() => setMenu(false)}>Sobre</a><a href="#tratamentos" onClick={() => setMenu(false)}>Tratamentos</a><a href="#resultados" onClick={() => setMenu(false)}>Resultados</a><a href="#contato" onClick={() => setMenu(false)}>Contato</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy reveal visible">
          <p className="eyebrow">Odontologia personalizada em Ribeirão Preto</p>
          <h1>Seu sorriso,<br/><em>cuidado com</em><br/>excelência.</h1>
          <p className="lead">Cuidado próximo, planejamento individual e atenção a cada detalhe para transformar sua experiência no consultório.</p>
          <div className="hero-actions">
            <a className="button primary magnetic" href={whatsapp} target="_blank" rel="noreferrer">◉ Agendar pelo WhatsApp</a>
            <a className="button secondary" href="#tratamentos">Conhecer tratamentos <span>→</span></a>
          </div>
          <div className="trust-row">
            <span><b>◎</b> Atendimento<br/>personalizado</span><span><b>✦</b> Técnica e<br/>precisão</span><span><b>♡</b> Cuidado em<br/>cada detalhe</span>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/gabrielle-consultorio.jpg" alt="Dra. Gabrielle Ferreira em seu consultório" />
          <div className="glass-card card-one"><b>◇</b><span>Atenção<br/>individual</span></div>
          <div className="glass-card card-two"><b>✓</b><span>Segurança em<br/>cada etapa</span></div>
        </div>
      </section>

      <section id="sobre" className="about section-pad">
        <div className="about-images reveal">
          <img className="image-main" src="/images/gabrielle-clinica.jpg" alt="Dra. Gabrielle durante o atendimento clínico" />
          <img className="image-detail" src="/images/consultorio-claro.jpg" alt="Consultório odontológico" />
          <span className="gold-ring" />
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow">Sobre mim</p>
          <h2>Odontologia feita com escuta, cuidado e propósito.</h2>
          <p>Sou Gabrielle Ferreira, cirurgiã-dentista, e acredito que um atendimento de qualidade começa antes mesmo de qualquer procedimento: começa ao ouvir você.</p>
          <p>Meu trabalho é guiado por uma avaliação cuidadosa, explicações claras e um plano pensado para as necessidades de cada paciente. Quero que você se sinta acolhido, seguro e confiante em todas as etapas do seu cuidado.</p>
          <div className="signature">Gabrielle Ferreira <small>CRO-SP 179093</small></div>
        </div>
      </section>

      <section id="tratamentos" className="treatments section-pad">
        <div className="section-heading reveal"><p className="eyebrow">Áreas de atuação</p><h2>Cuidado completo para o seu sorriso.</h2><p>Cada indicação começa por uma avaliação individual. Conheça algumas das possibilidades de cuidado.</p></div>
        <div className="treatment-grid">
          {treatments.map((item, i) => <article className="treatment-card reveal" key={item.title} style={{transitionDelay:`${i*80}ms`}}><span className="number">0{i+1}</span><b className="treatment-icon">{item.icon}</b><h3>{item.title}</h3><p>{item.text}</p><a href={whatsapp} target="_blank" rel="noreferrer">Quero saber mais →</a></article>)}
        </div>
        <p className="clinical-note">A indicação de cada tratamento depende de avaliação clínica individual.</p>
      </section>

      <section className="journey section-pad">
        <div className="section-heading reveal"><p className="eyebrow">Sua experiência</p><h2>Cuidado claro, do primeiro contato ao acompanhamento.</h2></div>
        <div className="steps reveal"><div><b>01</b><h3>Primeiro contato</h3><p>Converse diretamente pelo WhatsApp e conte o que você precisa.</p></div><div><b>02</b><h3>Avaliação</h3><p>Entendemos sua saúde bucal, suas expectativas e prioridades.</p></div><div><b>03</b><h3>Planejamento</h3><p>Você recebe orientações claras e um plano de cuidado individual.</p></div><div><b>04</b><h3>Acompanhamento</h3><p>Cada etapa é conduzida com atenção, segurança e proximidade.</p></div></div>
      </section>

      <section id="resultados" className="results section-pad">
        <div className="section-heading light reveal"><p className="eyebrow">Resultados reais</p><h2>Detalhes que fazem diferença.</h2><p>Registros clínicos realizados pela Dra. Gabrielle. Cada resultado é individual e depende das condições de cada paciente.</p></div>
        <div className="result-layout reveal">
          <div className="before-after"><figure><img src="/images/limpeza-antes.jpg" alt="Antes da limpeza odontológica"/><figcaption>Antes</figcaption></figure><figure><img src="/images/limpeza-depois.jpg" alt="Depois da limpeza odontológica"/><figcaption>Depois</figcaption></figure></div>
          <div className="result-copy"><span>Limpeza profissional</span><h3>Saúde que também aparece no sorriso.</h3><p>A limpeza profissional auxilia na remoção de placa e tártaro em regiões que a escovação diária pode não alcançar.</p><a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">Agendar uma avaliação</a></div>
        </div>
        <div className="smile-strip reveal"><img src="/images/sorriso-resultado.jpg" alt="Sorriso acompanhado pela Dra. Gabrielle"/><div><span>Cuidado preventivo</span><h3>Um sorriso saudável começa com acompanhamento regular.</h3></div></div>
      </section>

      <section className="space section-pad">
        <div className="section-heading reveal"><p className="eyebrow">O consultório</p><h2>Um espaço preparado para acolher você.</h2></div>
        <div className="gallery reveal"><img src="/images/consultorio-ambiente.jpg" alt="Ambiente do consultório"/><img src="/images/procedimento.jpg" alt="Atendimento odontológico"/><img src="/images/materiais.jpg" alt="Materiais odontológicos"/></div>
      </section>

      <section id="contato" className="contact section-pad">
        <div className="contact-card reveal">
          <p className="eyebrow">Vamos cuidar do seu sorriso?</p><h2>Seu atendimento começa com uma conversa.</h2><p>Chame pelo WhatsApp para tirar dúvidas e encontrar o melhor momento para sua avaliação.</p>
          <a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">◉ Conversar no WhatsApp</a>
        </div>
        <div className="address-card reveal"><span className="map-pin">⌖</span><p>Atendimento em</p><h3>Rua Prudente de Morais, 1186</h3><p>Ribeirão Preto — SP</p><a href={maps} target="_blank" rel="noreferrer">Ver localização no Google Maps →</a><hr/><p><b>Instagram</b><br/><a href="https://instagram.com/gabrielleferreira.dra" target="_blank" rel="noreferrer">@gabrielleferreira.dra</a></p></div>
      </section>

      <footer><div className="brand"><img className="brand-logo" src="/images/logo-gabrielle.png" alt="Logo da Dra. Gabrielle Ferreira"/><span><strong>Dra. Gabrielle Ferreira</strong><small>Cirurgiã-dentista • CRO-SP 179093</small></span></div><p>© 2026 • Ribeirão Preto, SP</p></footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">◉<span>Agendar</span></a>
    </main>
  );
}
