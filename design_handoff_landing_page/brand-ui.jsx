// brand-ui.jsx — shared Puente brand components (Palette A · Sol).
// Exports to window: Logo, Skyline, CreditCard, SendWidget, AppBadges, PhoneApp.

function Logo({ className = "", style }) {
  return (
    <span className={"brand " + className} style={style}>
      <span className="arch" aria-hidden="true"></span>
      <span>Puente</span>
    </span>
  );
}

// favela roofline band. palette A colors.
const ROOFS = ["#0FB1AC","#FFD23D","#2C79C2","#F0703F","#0FB1AC","#FFD23D","#0E4D49","#2C79C2","#F0703F","#FFD23D","#0FB1AC","#2C79C2","#FFD23D","#F0703F","#0FB1AC","#2C79C2"];
function Skyline({ n = 16 }) {
  return (
    <div className="skyband" aria-hidden="true">
      {Array.from({ length: n }).map((_, i) => {
        const h = 40 + ((i * 53) % 48);
        return <i key={i} style={{ height: h + "px", background: ROOFS[i % ROOFS.length] }}></i>;
      })}
    </div>
  );
}

function Contactless() {
  return <span className="contactless" aria-hidden="true"><i></i><i></i><i></i></span>;
}
function NetMark() {
  return <span className="netmark" aria-hidden="true"><i></i><i></i></span>;
}

// variant: "sol" | "mar" | "ink" ; face: "front" | "back"
function CreditCard({ variant = "sol", face = "front", name = "MARÍA G. SANTOS", last4 = "4827", tier = "Crédito", style }) {
  if (face === "back") {
    return (
      <div className={"ccard ccard--" + variant + " ccard--back"} style={style}>
        <div className="cc-stripe"></div>
        <div className="cc-sigwrap">
          <div className="cc-sig">
            <div className="cc-sigbar"></div>
            <div className="cc-cvv">{"•".repeat(3)}</div>
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <Logo />
            <NetMark />
          </div>
          <p className="cc-fine">Puente Financial, Inc. Use of this card is subject to the cardholder agreement.<br/>Lost or stolen? puente.com/help · +1 (888) 000-0000. Member FDIC.</p>
        </div>
      </div>
    );
  }
  return (
    <div className={"ccard ccard--" + variant} style={style}>
      <div className="cc-top">
        <Logo />
        <span className="cc-tier">{tier}</span>
      </div>
      <div className="cc-mid">
        <span className="chip"></span>
        <Contactless />
      </div>
      <div className="cc-num">5418&nbsp;&nbsp;••••&nbsp;&nbsp;••••&nbsp;&nbsp;{last4}</div>
      <div className="cc-bottom">
        <div>
          <span className="cc-label">Titular</span>
          <span className="cc-name">{name}</span>
        </div>
        <div style={{ display:"flex", alignItems:"flex-end", gap:18 }}>
          <div>
            <span className="cc-label">Vence</span>
            <span className="cc-exp">08/29</span>
          </div>
          <NetMark />
        </div>
      </div>
      <div className="cc-roofs" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => <i key={i} style={{ height: (10 + (i*37)%24) + "px" }}></i>)}
      </div>
    </div>
  );
}

function SendWidget() {
  return (
    <div className="sendcard">
      <div className="sc-head">
        <span className="h3">Send money home</span>
        <span className="sc-flag">MX · Banorte</span>
      </div>
      <div className="sc-amt">
        <span className="lab">You send</span>
        <span className="val">$200.00 <small>USD</small></span>
      </div>
      <div className="sc-mid">
        <span className="ln"></span>
        <span>1 USD = 17.20 MXN</span>
        <span className="ln"></span>
      </div>
      <div className="sc-amt" style={{ background: "rgba(15,177,172,.10)" }}>
        <span className="lab">They receive</span>
        <span className="val">$3,440.00 <small>MXN</small></span>
      </div>
      <div className="sc-foot">
        <span>Fee <b>$5.00</b></span>
        <span>Arrives <b>in seconds</b></span>
      </div>
    </div>
  );
}

function AppBadges({ light }) {
  return (
    <div className="appbadges">
      <span className="appbadge"><span className="glyph"></span><span><small>Download on the</small><b>App Store</b></span></span>
      <span className="appbadge"><span className="glyph">▶</span><span><small>Get it on</small><b>Google Play</b></span></span>
    </div>
  );
}

// the in-phone app screen used in hero + mobile preview
function PhoneApp() {
  return (
    <div className="phone">
      <div className="phone__notch"></div>
      <div className="phone__screen">
        <div className="statusbar"><span>9:41</span><span>5G ▪ 100%</span></div>
        <div className="app">
          <div className="app-top">
            <div className="app-hi">Buenas, <b>María</b></div>
            <div className="avatar">M</div>
          </div>
          <div className="balance">
            <small>Saldo disponible</small>
            <div className="amt">$1,284.50</div>
            <div className="rooflet">
              {["#FFD23D","#0FB1AC","#F0703F","#2C79C2","#FFD23D"].map((c,i)=>(
                <i key={i} style={{ height:(10+i*4)+"px", background:c }}></i>
              ))}
            </div>
          </div>
          <div className="send-row">
            <div className="send-tile"><div className="ic" style={{ background:"rgba(15,177,172,.14)", color:"#0B8C88" }}>↗</div>Enviar</div>
            <div className="send-tile"><div className="ic" style={{ background:"rgba(255,210,61,.20)", color:"#9a7a00" }}>＋</div>Recargar</div>
            <div className="send-tile"><div className="ic" style={{ background:"rgba(44,121,194,.14)", color:"#2C79C2" }}>↗</div>Crédito</div>
          </div>
          <div style={{ fontFamily:"var(--mono)", fontSize:"11px", letterSpacing:".12em", textTransform:"uppercase", color:"var(--muted)", marginTop:"4px" }}>Actividad</div>
          <div className="txn">
            <div className="ti" style={{ background:"rgba(15,177,172,.14)", color:"#0B8C88" }}>↗</div>
            <div className="tt">Para Rosa Santos<small>Remesa · Banorte</small></div>
            <div className="tv">−$200</div>
          </div>
          <div className="txn">
            <div className="ti" style={{ background:"rgba(44,121,194,.14)", color:"#2C79C2" }}>↑</div>
            <div className="tt">Crédito reportado<small>Pago a tiempo · buró</small></div>
            <div className="tv" style={{ color:"#0B8C88" }}>✓</div>
          </div>
          <div className="txn">
            <div className="ti" style={{ background:"rgba(255,210,61,.22)", color:"#9a7a00" }}>↓</div>
            <div className="tt">Depósito de nómina<small>ACME Corp</small></div>
            <div className="tv" style={{ color:"#0B8C88" }}>+$1,420</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hero credit-phone: rising credit-score graph + remittances being sent.
// Bilingual via `t` (see COPY[lang].phone). Score is an illustrative example.
function CreditPhone({ t }) {
  const pts = [[8, 72], [55, 63], [102, 54], [149, 43], [196, 34], [243, 24], [286, 13]];
  const line = pts.map((p) => p.join(",")).join(" ");
  const area = `M${pts[0][0]},88 L` + line + ` L${pts[6][0]},88 Z`;
  return (
    <div className="cphone">
      <div className="cphone-notch"></div>
      <div className="cphone-screen">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 20px 4px" }}>
          <div style={{ fontWeight: 600, fontSize: 15 }}>{t.greeting} <b>{t.name}</b></div>
          <div className="avatar">M</div>
        </div>

        <div style={{ margin: "12px 16px 0", background: "var(--mar-900)", color: "#eafffd", borderRadius: 20, padding: "16px 16px 8px", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: ".14em", textTransform: "uppercase", opacity: .75 }}>{t.scoreLabel}</div>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-.02em", marginTop: 2 }}>712</div>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--mono)", fontWeight: 700, fontSize: 13, color: "var(--sol)", background: "rgba(255,210,61,.14)", borderRadius: 999, padding: "5px 9px" }}>{t.delta}</span>
          </div>
          <svg viewBox="0 0 300 92" width="100%" height="84" style={{ display: "block", marginTop: 4 }}>
            <defs>
              <linearGradient id="cpFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFD23D" stopOpacity=".30" />
                <stop offset="100%" stopColor="#FFD23D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#cpFill)" />
            <polyline points={line} fill="none" stroke="var(--sol)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={pts[6][0]} cy={pts[6][1]} r="6.5" fill="var(--sol)" stroke="#0E4D49" strokeWidth="2.5" />
          </svg>
        </div>

        <div style={{ padding: "16px 20px 0", flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)" }}>{t.remitLabel}</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--mar-700)", fontWeight: 700 }}>{t.remitNote}</span>
          </div>
          {t.sends.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, padding: "9px 0", borderBottom: i === 0 ? "1px solid var(--line-2)" : "none" }}>
              <span style={{ width: 32, height: 32, borderRadius: 10, flex: "none", background: "rgba(15,177,172,.14)", color: "#0B8C88", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>↗</span>
              <div style={{ lineHeight: 1.3, flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{s.who}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--muted)" }}>{t.reported}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--mono)", fontWeight: 700, fontSize: 13 }}>{s.amt}</div>
                <div style={{ fontSize: 10.5, color: "#0B8C88", fontWeight: 600, whiteSpace: "nowrap" }}>{t.onTime}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "8px 16px 18px" }}>
          <div style={{ background: "var(--sol)", color: "var(--sol-ink)", borderRadius: 999, padding: "13px", textAlign: "center", fontWeight: 600, boxShadow: "0 8px 20px rgba(255,210,61,.45)" }}>{t.cta}</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Logo, Skyline, CreditCard, SendWidget, AppBadges, PhoneApp, CreditPhone });
