// landing-web.jsx — Puente waitlist landing (bilingual EN/ES).
// Sections: Hero · Remittances (live calculator) · Card · Waitlist form.
// Reuses brand-ui (Logo, CreditCard, PhoneApp) + COPY (landing-copy.jsx).

const { useState, useEffect, useRef } = React;
const RATE = 17.20;   // MXN per USD — illustrative mid-market rate
const FEE = 5;        // flat USD fee
const mxn = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const usd = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* ───────────────── interactive remittance calculator ───────────────── */
function Calculator({ t, lang }) {
  const [amt, setAmt] = useState(200);
  const chips = [100, 200, 500, 1000];
  const receive = Math.round((Number(amt) || 0) * RATE);
  const total = (Number(amt) || 0) + FEE;
  const c = t.calc;

  return (
    <div className="calc">
      <div className="calc-to">
        <span className="flagdot"><i></i><i></i><i></i></span>
        <span>{c.country}</span>
        <span className="lab">{c.to}</span>
      </div>

      <div className="calc-amt">
        <div style={{ flex: 1 }}>
          <span className="lab">{c.you}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 30, fontWeight: 700 }}>$</span>
            <input className="calc-input" type="number" inputMode="numeric" min="0"
              value={amt}
              onChange={(e) => setAmt(e.target.value === "" ? "" : Math.max(0, Math.min(50000, Number(e.target.value))))}
              aria-label={c.you} />
          </div>
        </div>
        <span className="calc-cur"><span className="pip" style={{ background: "var(--cielo)" }}></span>USD</span>
      </div>

      <input className="calc-slider" type="range" min="20" max="2000" step="10"
        value={Math.min(2000, Number(amt) || 0)}
        onChange={(e) => setAmt(Number(e.target.value))} aria-label={c.you} />

      <div className="chips">
        {chips.map((v) => (
          <button key={v} className={"chip-amt" + (Number(amt) === v ? " is-active" : "")}
            onClick={() => setAmt(v)}>${v}</button>
        ))}
      </div>

      <div className="calc-rate">
        <span className="ln"></span><span>{c.rate}</span><span className="ln"></span>
      </div>

      <div className="calc-amt calc-amt--rcv">
        <div>
          <span className="lab">{c.they}</span>
          <span className="calc-out">${mxn.format(receive)}</span>
        </div>
        <span className="calc-cur"><span className="pip" style={{ background: "var(--mar)" }}></span>MXN</span>
      </div>

      <div className="calc-foot">
        <span>{c.fee} <b>{c.flat}</b></span>
        <span>{c.total} <b>${usd.format(total)}</b></span>
      </div>
      <div className="calc-note"><span className="pip"></span>{c.note}</div>

      <a className="btn btn--sol" href="#waitlist">{c.cta}</a>
    </div>
  );
}

/* ───────────────── waitlist form + success/referral ───────────────── */
function WaitlistForm({ t }) {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);
  const s = t.success;

  const slug = (name.trim().split(/\s+/)[0] || "amigo").toLowerCase().replace(/[^a-z0-9]/g, "") || "amigo";
  const link = "puente.com/r/" + slug;
  const waHref = "https://wa.me/?text=" + encodeURIComponent(s.waText + " https://" + link);

  const copy = () => {
    navigator.clipboard?.writeText("https://" + link).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  if (done) {
    return (
      <div className="wl-card">
        <div className="wl-success">
          <div className="wl-check">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <div className="wl-ref">
            <span className="rl">{s.refLabel}</span>
            <div className="wl-reflink">
              <input readOnly value={link} onFocus={(e) => e.target.select()} />
              <button className="btn btn--ink btn--sm" onClick={copy}>{copied ? s.copied : s.copy}</button>
            </div>
            <div className="wl-share">
              <a className="btn btn--sm wl-wa" href={waHref} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.3.2.5.2.5.4.1.2.1.8-.2 1.5Z" /></svg>
                {s.wa}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wl-card">
      <form className="wl-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
        <div className="field">
          <label>{t.f.name}</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={t.ph.name} />
        </div>
        <div className="field-row">
          <div className="field">
            <label>{t.f.phone}</label>
            <input required type="tel" placeholder={t.ph.phone} />
          </div>
          <div className="field">
            <label>{t.f.email}</label>
            <input required type="email" placeholder={t.ph.email} />
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <label>{t.f.country}</label>
            <select defaultValue={t.countries[0]} required>
              {t.countries.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="field">
            <label>{t.f.amount}</label>
            <select defaultValue="" required>
              <option value="" disabled>{t.select}</option>
              {t.amounts.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div className="field">
          <label>{t.f.provider}</label>
          <select defaultValue="" required>
            <option value="" disabled>{t.select}</option>
            {t.providers.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <button className="btn btn--sol" type="submit">{t.submit}</button>
        <p className="wl-fine">{t.fine}</p>
      </form>
    </div>
  );
}

/* ───────────────── page ───────────────── */
function WebLanding() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("puente-lang") || "en"; } catch { return "en"; }
  });
  useEffect(() => { try { localStorage.setItem("puente-lang", lang); } catch {} }, [lang]);
  const t = COPY[lang];
  const h1Colors = ["var(--mar-700)", "var(--coral)"];
  const stepColors = [
    { bg: "var(--sol)", fg: "var(--sol-ink)" },
    { bg: "var(--mar)", fg: "#fff" },
    { bg: "var(--coral)", fg: "#fff" },
  ];

  return (
    <div>
      {/* ANNOUNCE */}
      <div className="announce">
        <span>{t.announce.pre}</span>
        <a href="#waitlist">{t.announce.link}
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6.5h8M7 3l3.5 3.5L7 10" /></svg>
        </a>
      </div>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <Logo />
          <div className="nav-links">
            <a href="#remittances">{t.nav.remit}</a>
            <a href="#how">{t.nav.how}</a>
          </div>
          <div className="nav-right">
            <span className="lang">
              <button className={lang === "es" ? "is-active" : ""} onClick={() => setLang("es")}>ES</button>
              <button className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
            </span>
            <a className="btn btn--sol btn--sm" href="#waitlist">{t.nav.cta}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1 className="h1">
              {t.hero.h1.map((pair, i) => (
                <span key={i} style={{ display: "block" }}>{pair[0]} <span style={{ color: h1Colors[i] }}>{pair[1]}</span></span>
              ))}
            </h1>
            <p className="lede">{t.hero.sub}</p>
            <div className="hero-cta">
              <a className="btn btn--sol" href="#waitlist">{t.hero.cta1}</a>
              <a className="btn btn--ghost" href="#remittances">{t.hero.cta2} →</a>
            </div>
            <span className="hero-elig"><span className="idot">ID</span>{t.hero.elig}</span>
            <div className="hero-note">
              <span><span className="dot"></span>{t.hero.notes[0]}</span>
              <span><span className="dot dot--cielo"></span>{t.hero.notes[1]}</span>
              <span><span className="dot dot--coral"></span>{t.hero.notes[2]}</span>
            </div>
          </div>
          <div className="hero-visual">
            <span className="blob blob--1"></span>
            <span className="blob blob--2"></span>
            <CreditPhone t={t.phone} />
          </div>
        </div>
      </header>

      {/* REMITTANCES — interactive */}
      <section id="remittances" className="section section--mist">
        <div className="section-inner">
          <div className="feature">
            <div className="feature-copy">
              <span className="eyebrow">{t.remit.eyebrow}</span>
              <h2 className="h2">{t.remit.h2}</h2>
              <p className="lede">{t.remit.sub}</p>
            </div>
            <div className="feature-media" style={{ display: "flex", justifyContent: "center" }}>
              <Calculator t={t.remit} lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section section--cream">
        <div className="section-inner">
          <div className="how-head">
            <span className="eyebrow">{t.how.eyebrow}</span>
            <h2 className="h2">
              {t.how.h2.map((pair, i) => (
                <span key={i}>{pair[0]}<span style={{ color: "var(--mar-700)" }}>{pair[1]}</span></span>
              ))}
            </h2>
            <p className="lede">{t.how.sub}</p>
          </div>
          <div className="how-steps">
            {t.how.steps.map((s, i) => (
              <div className="how-step" key={i}>
                <span className="how-num" style={{ background: stepColors[i].bg, color: stepColors[i].fg }}>{i + 1}</span>
                <h3 className="h3">{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="how-foot">
            <div className="how-privacy">
              <span className="hp-ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
              </span>
              <span className="hp-txt"><b>{t.how.privacyTitle}</b>{t.how.privacy}</span>
            </div>
            <div className="how-side">
              <div className="need">
                <span className="nic">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /></svg>
                </span>
                <span className="ntxt"><b>{t.how.eligTitle}</b>{t.how.elig}</span>
              </div>
              <a className="btn btn--sol" href="#waitlist">{t.how.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* SIGN UP */}
      <section id="waitlist" className="waitlist">
        <div className="wl-inner" style={{ gridTemplateColumns: "1fr", justifyItems: "center", textAlign: "center" }}>
          <div className="wl-copy" style={{ alignItems: "center", maxWidth: 560 }}>
            <span className="eyebrow">{t.wl.eyebrow}</span>
            <h2 className="h2">{t.wl.h2}</h2>
            <p className="lede">{t.wl.sub}</p>
            <ul className="wl-trustline" style={{ alignItems: "flex-start" }}>
              {t.wl.points.map((p, i) => (
                <li key={i}><span className="tick">✓</span><span>{p}</span></li>
              ))}
            </ul>
            <div style={{ marginTop: 10 }}>
              <a className="btn btn--sol" href="#waitlist">{t.wl.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner" style={{ gridTemplateColumns: "1.4fr 1fr", alignItems: "start" }}>
          <div>
            <Logo />
            <p style={{ marginTop: 16, fontSize: 14, maxWidth: 320, color: "#9aa4a1" }}>{t.footer.tagline}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            <span className="lang">
              <button className={lang === "es" ? "is-active" : ""} onClick={() => setLang("es")}>ES</button>
              <button className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
            </span>
            <a className="btn btn--sol btn--sm" href="#waitlist">{t.nav.cta}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.rights} · {t.footer.note}</span>
          <span>{lang === "es" ? "Español" : "English"}</span>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { WebLanding });
