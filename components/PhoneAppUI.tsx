export default function PhoneAppUI() {
  return (
    <div className="phone">
      <div className="phone__notch" />
      <div className="phone__screen">
        <div className="statusbar">
          <span>9:41</span>
          <span>5G ▪ 100%</span>
        </div>
        <div className="app">
          <div className="app-top">
            <div className="app-hi">
              Buenas, <b>María</b>
            </div>
            <div className="avatar">M</div>
          </div>
          <div className="balance">
            <small>Saldo disponible</small>
            <div className="amt">$1,284.50</div>
            <div className="rooflet">
              {['#FFD23D', '#0FB1AC', '#F0703F', '#2C79C2', '#FFD23D'].map((c, i) => (
                <i key={i} style={{ height: (10 + i * 4) + 'px', background: c }} />
              ))}
            </div>
          </div>
          <div className="send-row">
            <div className="send-tile">
              <div className="ic" style={{ background: 'rgba(15,177,172,.14)', color: '#0B8C88' }}>↗</div>
              Enviar
            </div>
            <div className="send-tile">
              <div className="ic" style={{ background: 'rgba(255,210,61,.20)', color: '#9a7a00' }}>＋</div>
              Recargar
            </div>
            <div className="send-tile">
              <div className="ic" style={{ background: 'rgba(44,121,194,.14)', color: '#2C79C2' }}>▤</div>
              Tarjeta
            </div>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '4px' }}>
            Actividad
          </div>
          <div className="txn">
            <div className="ti" style={{ background: 'rgba(15,177,172,.14)', color: '#0B8C88' }}>↗</div>
            <div className="tt">Para Rosa Santos<small>Remesa · Banorte</small></div>
            <div className="tv">−$200</div>
          </div>
          <div className="txn">
            <div className="ti" style={{ background: 'rgba(240,112,63,.14)', color: '#F0703F' }}>$</div>
            <div className="tt">Mercado Latino<small>Tarjeta · 2% cashback</small></div>
            <div className="tv">−$48.20</div>
          </div>
          <div className="txn">
            <div className="ti" style={{ background: 'rgba(255,210,61,.22)', color: '#9a7a00' }}>↓</div>
            <div className="tt">Depósito de nómina<small>ACME Corp</small></div>
            <div className="tv" style={{ color: '#0B8C88' }}>+$1,420</div>
          </div>
        </div>
      </div>
    </div>
  )
}
