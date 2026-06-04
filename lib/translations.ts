export type Lang = 'en' | 'es'

export type Translations = {
  announce: { pre: string; link: string }
  nav: { remit: string; card: string; cta: string }
  hero: {
    eyebrow: string
    h1: [string, string][]
    sub: string
    cta1: string
    cta2: string
    elig: string
    notes: string[]
  }
  remit: {
    eyebrow: string
    h2: string
    sub: string
    calc: {
      to: string
      you: string; they: string
      rate: string; fee: string; flat: string
      total: string; note: string; cta: string
    }
  }
  card: {
    eyebrow: string
    h2: [string, string][]
    sub: string
    bullets: string[]
    needTitle: string
    need: string
    cta: string
  }
  wl: {
    eyebrow: string
    h2: string
    sub: string
    points: string[]
    f: { name: string; phone: string; email: string; country: string; amount: string; provider: string; knowsScore: string; scoreRange: string }
    scoreOptions: string[]
    amounts: string[]
    providers: string[]
    ph: { name: string; phone: string; email: string }
    select: string
    submit: string
    fine: string
    success: {
      title: string; body: string; refLabel: string
      copy: string; copied: string; wa: string; waText: string
    }
    steps: { h: string }[]
    next: string
    back: string
  }
  footer: { tagline: string; rights: string; note: string }
}

const en: Translations = {
  announce: { pre: 'Early access is open.', link: 'Sign up' },
  nav: { remit: 'Remittances', card: 'Card', cta: 'Sign up' },
  hero: {
    eyebrow: 'Credit card + remittances',
    h1: [['Send', 'money.'], ['Build', 'credit.'], ['Earn', 'rewards.']],
    sub: "Every remittance you send through Puente counts toward your U.S. credit history. Most cards don't do that. Ours does.",
    cta1: 'Sign up',
    cta2: 'See how it works',
    elig: 'No SSN required — start with your passport or government ID.',
    notes: ['$5 flat fee', 'Real exchange rate'],
  },
  remit: {
    eyebrow: 'Remittances',
    h2: 'Money home, the moment you tap send.',
    sub: 'One flat $5 fee. The real exchange rate, no hidden markup. Every transfer you send also builds your U.S. credit — automatically.',
    calc: {
      to: 'Sending to',
      you: 'You send', they: 'They receive',
      rate: '1 USD = 17.20 MXN', fee: 'Fee', flat: '$5.00 flat',
      total: 'Total to pay', note: 'Real mid-market rate · no markup',
      cta: 'Sign up',
    },
  },
  card: {
    eyebrow: 'The card',
    h2: [['Feels like ', 'debit.'], ['Works like ', 'credit.']],
    sub: 'Every transfer you send through Puente builds your credit history in the US. Your responsibility to your family becomes a tool to build a better future.',
    bullets: [
      'Build U.S. credit history — your remittances count toward it, not just everyday spending.',
      'Cash-secured: no credit check, and no debt to fall into.',
      'Earn rewards on the things you buy every day.',
    ],
    needTitle: "What you'll need",
    need: 'A passport or government ID and a U.S. address. No SSN required to start.',
    cta: 'Sign up',
  },
  wl: {
    eyebrow: 'Waitlist',
    h2: 'Sign Up Today',
    sub: 'Sign up and start turning your remittances into a stronger financial future in the US.',
    points: ['A spot the day we launch', 'Founding-member perks', 'Help shape the product'],
    f: { name: 'Full name', phone: 'Phone number', email: 'Email', country: 'Country you send to', amount: 'How much do you send each month?', provider: 'Current remittance provider', knowsScore: 'Do you know your US credit score?', scoreRange: 'What is your credit score range?' },
    scoreOptions: ['Below 580', '580–669', '670–739', '740–799', '800+'],
    amounts: ['Less than $200', '$200–$500', '$500–$1,000', 'More than $1,000', "I don't send yet"],
    providers: ['Western Union', 'Remitly', 'Félix', 'MoneyGram', 'Bank transfer', "I don't send yet", 'Other'],
    ph: { name: 'María Santos', phone: '(555) 123-4567', email: 'you@email.com' },
    select: 'Select…',
    submit: 'Sign up',
    fine: 'Puente is in early validation and not yet available. Joining adds you to the early-access list.',
    success: {
      title: "You're on the list!",
      body: "We'll reach out the moment Puente is ready. Want to move up the line?",
      refLabel: 'Share your invite link and skip ahead',
      copy: 'Copy', copied: 'Copied!',
      wa: 'Share on WhatsApp',
      waText: 'I just joined the Puente waitlist — send money home for a $5 flat fee and build credit. Join me:',
    },
    steps: [
      { h: 'Tell us about yourself' },
      { h: 'About your remittances' },
      { h: 'Your credit picture' },
    ],
    next: 'Next',
    back: 'Back',
  },
  footer: {
    tagline: 'Send money. Build credit. Earn rewards. One card, built for our community.',
    rights: '© 2026 Puente Financial, Inc.',
    note: 'Concept in validation — not yet available.',
  },
}

const es: Translations = {
  announce: { pre: 'El acceso anticipado ya está abierto.', link: 'Regístrate' },
  nav: { remit: 'Remesas', card: 'Tarjeta', cta: 'Regístrate' },
  hero: {
    eyebrow: 'Tarjeta de crédito + Remesas',
    h1: [['Envía', 'dinero.'], ['Crea', 'crédito.'], ['Gana', 'recompensas.']],
    sub: 'Cada remesa que envías a través de Puente cuenta para tu historial crediticio en EE. UU. La mayoría de las tarjetas no hacen eso. La nuestra sí.',
    cta1: 'Regístrate',
    cta2: 'Mira cómo funciona',
    elig: 'Sin SSN — empieza con tu pasaporte o identificación oficial.',
    notes: ['Tarifa fija de $5', 'Tipo de cambio real'],
  },
  remit: {
    eyebrow: 'Remesas',
    h2: 'Dinero a casa, en el momento en que tocas enviar.',
    sub: 'Una tarifa fija de $5. El tipo de cambio real, sin sobreprecio. Y cada transferencia que envías también construye tu historial crediticio en EE. UU.',
    calc: {
      to: 'Enviar a',
      you: 'Tú envías', they: 'Ellos reciben',
      rate: '1 USD = 17.20 MXN', fee: 'Tarifa', flat: '$5.00 fija',
      total: 'Total a pagar', note: 'Tipo de cambio real · sin sobreprecio',
      cta: 'Regístrate',
    },
  },
  card: {
    eyebrow: 'La tarjeta',
    h2: [['Se siente como ', 'débito.'], ['Funciona como ', 'crédito.']],
    sub: 'Cada transferencia que envías a través de Puente construye tu historial crediticio en EE. UU. Tu responsabilidad con tu familia se convierte en una herramienta para construir un mejor futuro.',
    bullets: [
      'Crea historial de crédito en EE. UU. — tus remesas cuentan, no solo tus compras diarias.',
      'Asegurada con efectivo: sin revisión de crédito y sin deudas.',
      'Gana recompensas en lo que compras todos los días.',
    ],
    needTitle: 'Lo que necesitas',
    need: 'Un pasaporte o identificación oficial y una dirección en EE. UU. Sin SSN para empezar.',
    cta: 'Regístrate',
  },
  wl: {
    eyebrow: 'Lista de espera',
    h2: 'Regístrate hoy',
    sub: 'Regístrate y empieza a convertir tus remesas en un futuro financiero más sólido en EE. UU.',
    points: ['Un lugar el día del lanzamiento', 'Beneficios de miembro fundador', 'Ayuda a dar forma al producto'],
    f: { name: 'Nombre completo', phone: 'Teléfono', email: 'Correo electrónico', country: 'País al que envías', amount: '¿Cuánto envías cada mes?', provider: 'Proveedor de remesas actual', knowsScore: '¿Conoces tu puntaje de crédito en EE. UU.?', scoreRange: '¿Cuál es tu rango de puntaje?' },
    scoreOptions: ['Below 580', '580–669', '670–739', '740–799', '800+'],
    amounts: ['Menos de $200', '$200–$500', '$500–$1,000', 'Más de $1,000', 'Aún no envío'],
    providers: ['Western Union', 'Remitly', 'Félix', 'MoneyGram', 'Transferencia bancaria', 'Aún no envío', 'Otro'],
    ph: { name: 'María Santos', phone: '(555) 123-4567', email: 'tu@correo.com' },
    select: 'Selecciona…',
    submit: 'Regístrate',
    fine: 'Puente está en validación temprana y aún no está disponible. Al unirte entras a la lista de acceso anticipado.',
    success: {
      title: '¡Estás en la lista!',
      body: 'Te avisaremos en cuanto Puente esté listo. ¿Quieres adelantarte en la fila?',
      refLabel: 'Comparte tu enlace de invitación y avanza',
      copy: 'Copiar', copied: '¡Copiado!',
      wa: 'Compartir por WhatsApp',
      waText: 'Me uní a la lista de Puente — envía dinero a casa con tarifa fija de $5 y crea crédito. Únete:',
    },
    steps: [
      { h: 'Cuéntanos sobre ti' },
      { h: 'Sobre tus remesas' },
      { h: 'Tu historial de crédito' },
    ],
    next: 'Siguiente',
    back: 'Atrás',
  },
  footer: {
    tagline: 'Envía dinero. Crea crédito. Gana recompensas. Una tarjeta, hecha para nuestra comunidad.',
    rights: '© 2026 Puente Financial, Inc.',
    note: 'Concepto en validación — aún no disponible.',
  },
}

export const translations: Record<Lang, Translations> = { en, es }
