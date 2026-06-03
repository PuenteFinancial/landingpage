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
        <span>1 USD = 18.20 MXN</span>
        <span className="ln"></span>
      </div>
      <div className="sc-amt" style={{ background: "rgba(15,177,172,.10)" }}>
        <span className="lab">They receive</span>
        <span className="val">$3,640.00 <small>MXN</small></span>
      </div>
      <div className="sc-foot">
        <span>Fee <b>$1.99</b></span>
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
            <div className="send-tile"><div className="ic" style={{ background:"rgba(44,121,194,.14)", color:"#2C79C2" }}>▤</div>Tarjeta</div>
          </div>
          <div style={{ fontFamily:"var(--mono)", fontSize:"11px", letterSpacing:".12em", textTransform:"uppercase", color:"var(--muted)", marginTop:"4px" }}>Actividad</div>
          <div className="txn">
            <div className="ti" style={{ background:"rgba(15,177,172,.14)", color:"#0B8C88" }}>↗</div>
            <div className="tt">Para Rosa Santos<small>Remesa · Banorte</small></div>
            <div className="tv">−$200</div>
          </div>
          <div className="txn">
            <div className="ti" style={{ background:"rgba(240,112,63,.14)", color:"#F0703F" }}>$</div>
            <div className="tt">Mercado Latino<small>Tarjeta · 2% cashback</small></div>
            <div className="tv">−$48.20</div>
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

Object.assign(window, { Logo, Skyline, CreditCard, SendWidget, AppBadges, PhoneApp });
