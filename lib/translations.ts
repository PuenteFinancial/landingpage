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
    f: { name: string; phone: string; email: string; country: string; amount: string; provider: string }
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
  }
  footer: { tagline: string; rights: string; note: string }
}

const en: Translations = {
  announce: { pre: 'Early access is open.', link: 'Join the waitlist' },
  nav: { remit: 'Remittances', card: 'Card', cta: 'Join waitlist' },
  hero: {
    eyebrow: 'Credit card + remittances',
    h1: [['Send', 'money.'], ['Build', 'credit.'], ['Earn', 'rewards.']],
    sub: 'Send money to Mexico at our best price, and earn rewards on everyday spending — all from one card built for you.',
    cta1: 'Join the waitlist',
    cta2: 'See how it works',
    elig: 'No SSN required — start with your passport or government ID.',
    notes: ['$5 flat fee', 'Real exchange rate', 'Built for newcomers'],
  },
  remit: {
    eyebrow: 'Remittances',
    h2: 'Money home, the moment you tap send.',
    sub: 'One flat $5 fee. The real exchange rate, with no hidden markup. Try it — see exactly what your family receives.',
    calc: {
      to: 'Sending to',
      you: 'You send', they: 'They receive',
      rate: '1 USD = 17.20 MXN', fee: 'Fee', flat: '$5.00 flat',
      total: 'Total to pay', note: 'Real mid-market rate · no markup',
      cta: 'Join the waitlist',
    },
  },
  card: {
    eyebrow: 'The card',
    h2: [['Feels like ', 'debit.'], ['Works like ', 'credit.']],
    sub: 'A cash-secured card that builds your U.S. credit history while you spend like normal.',
    bullets: [
      'Build U.S. credit history — your everyday spending counts toward it.',
      'Cash-secured: no credit check, and no debt to fall into.',
      'Earn rewards on the things you buy every day.',
    ],
    needTitle: "What you'll need",
    need: 'A passport or government ID and a U.S. address. No SSN required to start.',
    cta: 'Join the waitlist',
  },
  wl: {
    eyebrow: 'Waitlist',
    h2: 'Be first in line.',
    sub: "Join the waitlist and we'll reach out the moment Puente is ready for you. No spam, ever.",
    points: ['A spot the day we launch', 'Founding-member perks', 'Help shape the product'],
    f: { name: 'Full name', phone: 'Phone number', email: 'Email', country: 'Country you send to', amount: 'How much do you send each month?', provider: 'Current remittance provider' },
    amounts: ['Less than $200', '$200–$500', '$500–$1,000', 'More than $1,000', "I don't send yet"],
    providers: ['Western Union', 'Remitly', 'Félix', 'MoneyGram', 'Bank transfer', "I don't send yet", 'Other'],
    ph: { name: 'María Santos', phone: '(555) 123-4567', email: 'you@email.com' },
    select: 'Select…',
    submit: 'Join the waitlist',
    fine: 'Puente is in early validation and not yet available. Joining adds you to the early-access list.',
    success: {
      title: "You're on the list!",
      body: "We'll reach out the moment Puente is ready. Want to move up the line?",
      refLabel: 'Share your invite link and skip ahead',
      copy: 'Copy', copied: 'Copied!',
      wa: 'Share on WhatsApp',
      waText: 'I just joined the Puente waitlist — send money home for a $5 flat fee and build credit. Join me:',
    },
  },
  footer: {
    tagline: 'Send money. Build credit. Earn rewards. One card, built for our community.',
    rights: '© 2026 Puente Financial, Inc.',
    note: 'Concept in validation — not yet available.',
  },
}

const es: Translations = {
  announce: { pre: 'El acceso anticipado ya está abierto.', link: 'Únete a la lista' },
  nav: { remit: 'Remesas', card: 'Tarjeta', cta: 'Unirme a la lista' },
  hero: {
    eyebrow: 'Tarjeta de crédito + Remesas',
    h1: [['Envía', 'dinero.'], ['Crea', 'crédito.'], ['Gana', 'recompensas.']],
    sub: 'Envía dinero a México al mejor precio y gana recompensas en tus compras diarias — todo con una tarjeta hecha para ti.',
    cta1: 'Unirme a la lista',
    cta2: 'Mira cómo funciona',
    elig: 'Sin SSN — empieza con tu pasaporte o identificación oficial.',
    notes: ['Tarifa fija de $5', 'Tipo de cambio real', 'Hecha para ti'],
  },
  remit: {
    eyebrow: 'Remesas',
    h2: 'Dinero a casa, en el momento en que tocas enviar.',
    sub: 'Una tarifa fija de $5. El tipo de cambio real, sin sobreprecio. Pruébalo — mira exactamente cuánto recibe tu familia.',
    calc: {
      to: 'Enviar a',
      you: 'Tú envías', they: 'Ellos reciben',
      rate: '1 USD = 17.20 MXN', fee: 'Tarifa', flat: '$5.00 fija',
      total: 'Total a pagar', note: 'Tipo de cambio real · sin sobreprecio',
      cta: 'Unirme a la lista',
    },
  },
  card: {
    eyebrow: 'La tarjeta',
    h2: [['Se siente como ', 'débito.'], ['Funciona como ', 'crédito.']],
    sub: 'Una tarjeta asegurada con efectivo que crea tu historial de crédito en EE. UU. mientras gastas como siempre.',
    bullets: [
      'Crea historial de crédito en EE. UU. — tus compras diarias cuentan.',
      'Asegurada con efectivo: sin revisión de crédito y sin deudas.',
      'Gana recompensas en lo que compras todos los días.',
    ],
    needTitle: 'Lo que necesitas',
    need: 'Un pasaporte o identificación oficial y una dirección en EE. UU. Sin SSN para empezar.',
    cta: 'Unirme a la lista',
  },
  wl: {
    eyebrow: 'Lista de espera',
    h2: 'Sé el primero en la fila.',
    sub: 'Únete a la lista y te avisaremos en cuanto Puente esté listo para ti. Sin spam, nunca.',
    points: ['Un lugar el día del lanzamiento', 'Beneficios de miembro fundador', 'Ayuda a dar forma al producto'],
    f: { name: 'Nombre completo', phone: 'Teléfono', email: 'Correo electrónico', country: 'País al que envías', amount: '¿Cuánto envías cada mes?', provider: 'Proveedor de remesas actual' },
    amounts: ['Menos de $200', '$200–$500', '$500–$1,000', 'Más de $1,000', 'Aún no envío'],
    providers: ['Western Union', 'Remitly', 'Félix', 'MoneyGram', 'Transferencia bancaria', 'Aún no envío', 'Otro'],
    ph: { name: 'María Santos', phone: '(555) 123-4567', email: 'tu@correo.com' },
    select: 'Selecciona…',
    submit: 'Unirme a la lista',
    fine: 'Puente está en validación temprana y aún no está disponible. Al unirte entras a la lista de acceso anticipado.',
    success: {
      title: '¡Estás en la lista!',
      body: 'Te avisaremos en cuanto Puente esté listo. ¿Quieres adelantarte en la fila?',
      refLabel: 'Comparte tu enlace de invitación y avanza',
      copy: 'Copiar', copied: '¡Copiado!',
      wa: 'Compartir por WhatsApp',
      waText: 'Me uní a la lista de Puente — envía dinero a casa con tarifa fija de $5 y crea crédito. Únete:',
    },
  },
  footer: {
    tagline: 'Envía dinero. Crea crédito. Gana recompensas. Una tarjeta, hecha para nuestra comunidad.',
    rights: '© 2026 Puente Financial, Inc.',
    note: 'Concepto en validación — aún no disponible.',
  },
}

export const translations: Record<Lang, Translations> = { en, es }
