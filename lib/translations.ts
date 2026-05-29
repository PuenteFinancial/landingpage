export type Lang = 'en' | 'es'

export type Translations = {
  nav: {
    brand: string
  }
  hero: {
    taglineEn: string
    taglineEs: string
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    trustBadges: string[]
  }
  problem: {
    headline: string
    copy: string
    tableTitle: string
    tableRows: Array<{ provider: string; fee: string; highlight?: boolean }>
    note: string
  }
  howItWorks: {
    headline: string
    steps: Array<{ number: string; title: string; description: string }>
    skepticHeadline: string
    skepticCopy: string
  }
  creditBuilding: {
    headline: string
    copy: string
    milestones: Array<{ timeframe: string; outcome: string }>
    comparison: string
  }
  employer: {
    headline: string
    copy: string
    partnerNote: string
  }
  founder: {
    headline: string
    copy: string
    founderName: string
    founderTitle: string
  }
  faq: {
    headline: string
    items: Array<{ q: string; a: string }>
  }
  waitlistCTA: {
    headline: string
    subheadline: string
    trustLine: string
  }
  form: {
    firstName: string
    firstNamePlaceholder: string
    whatsapp: string
    whatsappPlaceholder: string
    monthlyAmount: string
    monthlyAmountOptions: Array<{ value: string; label: string }>
    destination: string
    destinationOptions: Array<{ value: string; label: string }>
    submit: string
    submitting: string
    successTitle: string
    successMessage: string
    errorMessage: string
    selectPlaceholder: string
  }
  footer: {
    tagline: string
    privacy: string
    terms: string
    disclaimer: string
    copyright: string
  }
}

const en: Translations = {
  nav: {
    brand: 'Puente Financial',
  },
  hero: {
    taglineEn: 'The money you send home should bring you home.',
    taglineEs: 'El dinero que mandas a casa, te trae a casa.',
    headline: 'Send money home free.\nBuild your credit automatically.',
    subheadline:
      'The only card that turns your remittances into credit history. Zero fees. Zero catch.',
    ctaPrimary: 'Join the waitlist',
    ctaSecondary: 'See how it works',
    trustBadges: ['FDIC Insured*', 'Visa Network*', 'No SSN Required*', 'No Credit Score Required*'],
  },
  problem: {
    headline: "You're paying to take care of your family.",
    copy:
      'The average person sending money home pays $150–$400 a year in fees. Western Union. Remitly. Bank wires. Every transfer costs you. We think that\'s wrong.',
    tableTitle: 'Cost to send $300 home',
    tableRows: [
      { provider: 'Western Union', fee: '$8–$15' },
      { provider: 'Remitly', fee: '$3–$6' },
      { provider: 'Bank wire', fee: '$15–$25' },
      { provider: 'Puente Financial', fee: '$0', highlight: true },
    ],
    note: 'Average based on published transfer fees as of 2024.',
  },
  howItWorks: {
    headline: "Here's what makes us different.",
    steps: [
      {
        number: '01',
        title: 'Send money home',
        description:
          'Tap send in the app. $300 arrives to your family in minutes. Fee: zero.*',
      },
      {
        number: '02',
        title: 'Your credit builds automatically',
        description:
          'Every transfer posts as a purchase on your card. Every month you pay, we plan to report to Equifax, Experian, and TransUnion. No extra steps. No separate product.',
      },
      {
        number: '03',
        title: 'Earn points toward your flight home',
        description:
          'Earn rewards on every transfer — redeemable for flights home. Turn the money you were already sending into a path back to your family.',
      },
    ],
    skepticHeadline: 'Why is this different from other cards?',
    skepticCopy:
      "Other cards treat remittances as cash advances — fees from day one, no points, no grace period. We're designing our card differently. Your transfers are purchases. That changes everything.",
  },
  creditBuilding: {
    headline: 'Your financial life in America starts here.',
    copy:
      "Most credit cards report one thing: whether you paid your bill. We're building a card that reports your entire financial picture. Because 12 years of sending $300 home every month should tell lenders something about who you are.",
    milestones: [
      {
        timeframe: 'Month 6',
        outcome: 'Your credit score appears or improves*',
      },
      {
        timeframe: 'Year 1',
        outcome: 'You may qualify for better loan rates*',
      },
      {
        timeframe: 'Year 2–3',
        outcome: "You're positioned for a car loan or mortgage*",
      },
    ],
    comparison:
      'No deposit required. No SSN required. Just your paycheck and your history.',
  },
  employer: {
    headline: 'We come to you.',
    copy:
      "We plan to partner with employers across Utah to bring this card directly to workers. No ads. No app store. Your HR team introduces us, we show up with lunch, and we help you get started in person. In your language.",
    partnerNote: 'Employer partnerships launching in Utah. More coming soon.',
  },
  founder: {
    headline: 'Built by people who lived this.',
    copy:
      "I'm Venezuelan. My co-founder's family is Mexican. We've watched our communities pay hundreds of dollars a year just to take care of the people they love. We built the card we wish existed. One that treats you like the financially responsible, hardworking person you are — not like a risk to be managed.",
    founderName: 'Joshua Phelps',
    founderTitle: 'Co-founder, Puente Financial',
  },
  faq: {
    headline: 'Your questions, answered.',
    items: [
      {
        q: 'Do I need a Social Security Number?',
        a: 'No. A government-issued ID and proof of US address is what we plan to require to apply.',
      },
      {
        q: 'Do I need a credit score to get approved?',
        a: "No. We plan to look at your income and banking history, not your credit score.",
      },
      {
        q: "How is this actually free? What's the catch?",
        a: "No catch. We plan to make money the same way Visa does — a small fee that merchants pay every time you swipe, not you. That's how we cover the cost of your free transfers.",
      },
      {
        q: "What happens if I can't pay my bill?",
        a: "We plan to only extend credit you can afford. We'll verify your income before approving you and set limits that make sense for your situation. If something changes, call us. We're real people.",
      },
      {
        q: 'Is my money safe?',
        a: 'We are designing this product to be FDIC insured up to $250,000 and to operate on the Visa network. Final partnerships are pending.',
      },
      {
        q: 'How fast does the money arrive?',
        a: "Same day in most cases.* We'll always show you the exact arrival time before you confirm.",
      },
      {
        q: 'Does this really build my credit?',
        a: 'Yes — that is the core design of this product. Every month you pay your bill, we plan to report to Equifax, Experian, and TransUnion. Most members should see their score appear or improve within 6 months.*',
      },
    ],
  },
  waitlistCTA: {
    headline: "You've been paying too much for too long.",
    subheadline: "Join the waitlist. Be first when we launch.",
    trustLine: 'No credit card required. No commitment. Just your spot in line.',
  },
  form: {
    firstName: 'First name',
    firstNamePlaceholder: 'Maria',
    whatsapp: 'WhatsApp number',
    whatsappPlaceholder: '+1 (801) 555-0123',
    monthlyAmount: 'How much do you send home per month?',
    monthlyAmountOptions: [
      { value: '', label: 'Select an amount' },
      { value: 'under_100', label: 'Under $100' },
      { value: '100_300', label: '$100–$300' },
      { value: '300_500', label: '$300–$500' },
      { value: 'over_500', label: 'Over $500' },
    ],
    destination: 'Where do you send?',
    destinationOptions: [
      { value: '', label: 'Select a country' },
      { value: 'mexico', label: 'Mexico' },
      { value: 'philippines', label: 'Philippines' },
      { value: 'central_america', label: 'Central America' },
      { value: 'venezuela', label: 'Venezuela' },
      { value: 'other', label: 'Other' },
    ],
    submit: 'Join the waitlist — it\'s free',
    submitting: 'Joining...',
    successTitle: "You're on the list.",
    successMessage:
      "We'll WhatsApp you the moment we launch. Tell your friends — the more people who join, the faster we get there.",
    errorMessage:
      'Something went wrong. Please try again or message us on WhatsApp.',
    selectPlaceholder: 'Select...',
  },
  footer: {
    tagline: 'The money you send home should bring you home.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    disclaimer:
      'Puente Financial is a financial product currently in development. Joining this waitlist does not constitute an application for credit or financial services. All features, rates, timelines, and terms described on this page are intended and subject to change. Credit products will be subject to eligibility requirements and approval. FDIC insurance and Visa network partnership are planned and pending final agreements. Points estimates are illustrative only.',
    copyright: '© 2025 Puente Financial. All rights reserved.',
  },
}

const es: Translations = {
  nav: {
    brand: 'Puente Financial',
  },
  hero: {
    taglineEn: 'The money you send home should bring you home.',
    taglineEs: 'El dinero que mandas a casa, te trae a casa.',
    headline: 'Envía dinero a casa gratis.\nConstruye tu crédito automáticamente.',
    subheadline:
      'La única tarjeta que convierte tus remesas en historial crediticio. Sin comisiones. Sin trampas.',
    ctaPrimary: 'Únete a la lista',
    ctaSecondary: 'Cómo funciona',
    trustBadges: ['Seguro FDIC*', 'Red Visa*', 'Sin SSN*', 'Sin puntaje crediticio*'],
  },
  problem: {
    headline: 'Estás pagando por cuidar a tu familia.',
    copy:
      'En promedio, quien envía dinero a casa paga entre $150 y $400 al año en comisiones. Western Union. Remitly. Transferencias bancarias. Cada envío te cuesta. Creemos que eso está mal.',
    tableTitle: 'Costo de enviar $300 a casa',
    tableRows: [
      { provider: 'Western Union', fee: '$8–$15' },
      { provider: 'Remitly', fee: '$3–$6' },
      { provider: 'Transferencia bancaria', fee: '$15–$25' },
      { provider: 'Puente Financial', fee: '$0', highlight: true },
    ],
    note: 'Promedio basado en tarifas publicadas al 2024.',
  },
  howItWorks: {
    headline: 'Esto es lo que nos hace diferentes.',
    steps: [
      {
        number: '01',
        title: 'Envía dinero a casa',
        description:
          'Toca enviar en la app. $300 llegan a tu familia en minutos. Comisión: cero.*',
      },
      {
        number: '02',
        title: 'Tu crédito se construye solo',
        description:
          'Cada envío se registra como una compra en tu tarjeta. Cada mes que pagas, planeamos reportar a Equifax, Experian y TransUnion. Sin pasos extra. Sin producto separado.',
      },
      {
        number: '03',
        title: 'Gana puntos para tu vuelo a casa',
        description:
          'Gana recompensas en cada envío — canjeables por vuelos a casa. Convierte el dinero que ya ibas a mandar en una forma de regresar con tu familia.',
      },
    ],
    skepticHeadline: '¿Por qué es diferente a otras tarjetas?',
    skepticCopy:
      'Otras tarjetas tratan las remesas como adelantos de efectivo — comisiones desde el primer día, sin puntos, sin período de gracia. Estamos diseñando nuestra tarjeta diferente. Tus envíos son compras. Eso cambia todo.',
  },
  creditBuilding: {
    headline: 'Tu vida financiera en América empieza aquí.',
    copy:
      'La mayoría de tarjetas reporta una sola cosa: si pagaste tu factura. Estamos construyendo una tarjeta que reporta tu panorama financiero completo. Porque 12 años enviando $300 a casa cada mes debería decirles algo a los prestamistas sobre quién eres.',
    milestones: [
      {
        timeframe: 'Mes 6',
        outcome: 'Tu puntaje crediticio aparece o mejora*',
      },
      {
        timeframe: 'Año 1',
        outcome: 'Podrías calificar para mejores tasas de préstamo*',
      },
      {
        timeframe: 'Años 2–3',
        outcome: 'Estás posicionado para un préstamo de auto o hipoteca*',
      },
    ],
    comparison:
      'Sin depósito. Sin SSN. Solo tu sueldo y tu historial.',
  },
  employer: {
    headline: 'Nosotros vamos a ti.',
    copy:
      'Planeamos asociarnos con empleadores en Utah para llevar esta tarjeta directamente a los trabajadores. Sin anuncios. Sin descargas. Tu equipo de recursos humanos nos presenta, llegamos con almuerzo y te ayudamos a comenzar en persona. En tu idioma.',
    partnerNote: 'Alianzas con empleadores lanzando en Utah. Más próximamente.',
  },
  founder: {
    headline: 'Construido por personas que lo vivieron.',
    copy:
      'Soy venezolano. La familia de mi cofundador es mexicana. Hemos visto a nuestras comunidades pagar cientos de dólares al año solo por cuidar a las personas que aman. Construimos la tarjeta que hubiéramos querido tener. Una que te trata como la persona responsable y trabajadora que eres — no como un riesgo a gestionar.',
    founderName: 'Joshua Phelps',
    founderTitle: 'Cofundador, Puente Financial',
  },
  faq: {
    headline: 'Tus preguntas, respondidas.',
    items: [
      {
        q: '¿Necesito número de Seguro Social?',
        a: 'No. Planeamos requerir solo una identificación oficial y comprobante de domicilio en EE.UU.',
      },
      {
        q: '¿Necesito puntaje crediticio para ser aprobado?',
        a: 'No. Planeamos revisar tus ingresos e historial bancario, no tu puntaje.',
      },
      {
        q: '¿Cómo es gratis? ¿Cuál es la trampa?',
        a: 'No hay trampa. Planeamos ganar dinero igual que Visa — una pequeña comisión que pagan los comercios cada vez que usas tu tarjeta, no tú. Así cubrimos el costo de tus envíos gratis.',
      },
      {
        q: '¿Qué pasa si no puedo pagar mi factura?',
        a: 'Planeamos solo otorgar crédito que puedas pagar. Verificaremos tus ingresos antes de aprobarte y estableceremos límites que tengan sentido para tu situación. Si algo cambia, llámanos. Somos personas reales.',
      },
      {
        q: '¿Mi dinero está seguro?',
        a: 'Estamos diseñando este producto para estar asegurado por la FDIC hasta $250,000 y operar en la red Visa. Las asociaciones finales están pendientes.',
      },
      {
        q: '¿Qué tan rápido llega el dinero?',
        a: 'El mismo día en la mayoría de los casos.* Siempre te mostraremos el tiempo exacto de llegada antes de confirmar.',
      },
      {
        q: '¿Realmente construye mi crédito?',
        a: 'Sí — ese es el diseño central de este producto. Cada mes que pagas tu factura, planeamos reportar a Equifax, Experian y TransUnion. La mayoría de miembros debería ver aparecer o mejorar su puntaje en 6 meses.*',
      },
    ],
  },
  waitlistCTA: {
    headline: 'Llevas demasiado tiempo pagando de más.',
    subheadline: 'Únete a la lista. Sé el primero cuando lancemos.',
    trustLine: 'Sin tarjeta de crédito. Sin compromiso. Solo tu lugar en la fila.',
  },
  form: {
    firstName: 'Nombre',
    firstNamePlaceholder: 'María',
    whatsapp: 'Número de WhatsApp',
    whatsappPlaceholder: '+1 (801) 555-0123',
    monthlyAmount: '¿Cuánto envías a casa por mes?',
    monthlyAmountOptions: [
      { value: '', label: 'Selecciona un monto' },
      { value: 'under_100', label: 'Menos de $100' },
      { value: '100_300', label: '$100–$300' },
      { value: '300_500', label: '$300–$500' },
      { value: 'over_500', label: 'Más de $500' },
    ],
    destination: '¿A dónde envías?',
    destinationOptions: [
      { value: '', label: 'Selecciona un país' },
      { value: 'mexico', label: 'México' },
      { value: 'philippines', label: 'Filipinas' },
      { value: 'central_america', label: 'Centroamérica' },
      { value: 'venezuela', label: 'Venezuela' },
      { value: 'other', label: 'Otro' },
    ],
    submit: 'Únete a la lista — es gratis',
    submitting: 'Uniéndote...',
    successTitle: 'Ya estás en la lista.',
    successMessage:
      'Te avisaremos por WhatsApp en el momento que lancemos. Díselo a tus amigos — entre más personas se unan, más rápido llegamos.',
    errorMessage:
      'Algo salió mal. Por favor intenta de nuevo o escríbenos por WhatsApp.',
    selectPlaceholder: 'Seleccionar...',
  },
  footer: {
    tagline: 'El dinero que mandas a casa, te trae a casa.',
    privacy: 'Política de privacidad',
    terms: 'Términos de uso',
    disclaimer:
      'Puente Financial es un producto financiero actualmente en desarrollo. Unirse a esta lista de espera no constituye una solicitud de crédito ni servicios financieros. Todas las características, tasas, plazos y términos descritos en esta página son intencionales y están sujetos a cambios. Los productos de crédito estarán sujetos a requisitos de elegibilidad y aprobación. El seguro FDIC y la asociación con la red Visa están planificados y pendientes de acuerdos finales. Las estimaciones de puntos son únicamente ilustrativas.',
    copyright: '© 2025 Puente Financial. Todos los derechos reservados.',
  },
}

export const translations: Record<Lang, Translations> = { en, es }
