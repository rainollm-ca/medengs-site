const services = [
  ['On-site & in-house repairs', 'Prompt clinic visits for common issues, with complex equipment serviced at our facility and targeted 48-hour turnaround.'],
  ['Pickup & delivery', 'Safe, convenient equipment transport so your team can stay focused on patients.'],
  ['Loaner equipment', 'Loaner devices during eligible repair windows to keep operations moving.'],
  ['Dental clinic equipment support', 'Handpieces, sterilizers, dental chairs, instrument washers, X-ray units, scalers, lights, suctions, compressors, and more.'],
  ['Same-day repairs', 'Rapid service for eligible failures when every appointment hour matters.'],
  ['MDEL-backed support', 'Licensed medical device activities covering Class I manufacturing and Class II–IV importing/distribution.'],
];

const equipment = ['Sterilizers', 'Dental Chairs', 'Handpieces', 'Instrument Washers', 'X-Ray Units', 'Ultrasonic Scalers', 'Dental Lights', 'Dental Suctions', 'Air Compressors'];

const stats = [
  ['48h', 'target complex repair turnaround'],
  ['24/7', 'request intake'],
  ['I–IV', 'MDEL device classes'],
  ['GTA', 'pickup, delivery, and service coverage'],
];

export default function Home() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';
  return (
    <main>
      <div className="scroll-progress" />
      <header className="nav glass">
        <a className="brand" href="#top" aria-label="MedEngs home">
          <img src="/medengs-logo.svg" alt="MedEngs" />
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#equipment">Equipment</a>
          <a href="#why">Why MedEngs</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="tel:+14374273585">Call (437) 427-3585</a>
      </header>

      <section id="top" className="hero section snap">
        <div className="hero-bg" />
        <div className="hero-copy reveal">
          <div className="eyebrow">Dental & Medical Equipment Experts</div>
          <h1>Clinical equipment support that keeps your practice moving.</h1>
          <p>
            MedEngs provides fast repairs, preventive support, pickup and delivery, loaner equipment, and MDEL-backed medical device servicing for dental and medical clinics.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Request service</a>
            <a className="btn secondary" href="mailto:info@medengs.com">info@medengs.com</a>
          </div>
        </div>
        <div className="hero-card glass reveal delay-1">
          <div className="pulse-dot" />
          <h2>Service-first engineering</h2>
          <p>On-site response, in-house repair capability, practical loaners, and transparent support for busy clinics.</p>
          <div className="mini-grid">
            <span>Repairs</span><span>Delivery</span><span>Loaners</span><span>MDEL</span>
          </div>
        </div>
      </section>

      <section className="section stats snap" aria-label="MedEngs highlights">
        {stats.map(([value, label], index) => (
          <div className="stat reveal" style={{ '--i': index } as React.CSSProperties} key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="services" className="section services snap">
        <div className="section-heading reveal">
          <span className="eyebrow">What we offer</span>
          <h2>Everything clinics need from a medical engineering partner.</h2>
          <p>All existing MedEngs service details are preserved and reorganized into a cleaner, faster-scanning experience.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, text], index) => (
            <article className="service-card reveal" style={{ '--i': index } as React.CSSProperties} key={title}>
              <div className="service-index">{String(index + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="equipment" className="section equipment snap">
        <div className="section-heading reveal">
          <span className="eyebrow">Supported equipment</span>
          <h2>Built around real dental clinic workflows.</h2>
        </div>
        <div className="equipment-orbit reveal">
          <div className="center-chip">MedEngs</div>
          {equipment.map((item, index) => <span key={item} style={{ '--i': index } as React.CSSProperties}>{item}</span>)}
        </div>
      </section>

      <section id="why" className="section why snap">
        <div className="why-panel glass reveal">
          <span className="eyebrow">Why choose MedEngs?</span>
          <h2>Expert medical engineers, practical clinic logistics, and affordable support.</h2>
          <p>
            MedEngs specializes in engineering support for dental and medical devices, helping equipment operate at peak performance with reliable repair pathways, member priorities, and practical delivery options.
          </p>
          <div className="license-card">
            <strong>MDEL #28466</strong>
            <span>Company ID 184159 · Classes I, II, III, IV · Manufacturer, importer, and distributor activities.</span>
          </div>
        </div>
        <div className="timeline reveal delay-1">
          <div><b>1</b><span>Send a request with equipment, issue, and urgency.</span></div>
          <div><b>2</b><span>MedEngs triages on-site vs. pickup/in-house repair.</span></div>
          <div><b>3</b><span>Repair, loaner, delivery, and follow-up are coordinated.</span></div>
        </div>
      </section>

      <section id="contact" className="section contact snap">
        <div className="contact-copy reveal">
          <span className="eyebrow">Get in touch</span>
          <h2>Request fast, reliable support.</h2>
          <p>We’re here to help with dental and medical device needs. Submit the form or contact MedEngs directly.</p>
          <div className="contact-cards">
            <a href="tel:+14374273585">(437) 427-3585</a>
            <a href="mailto:info@medengs.com">info@medengs.com</a>
            <span>424 Commonwealth Circle, Mississauga, ON L5B 3V6</span>
          </div>
        </div>
        <form className="contact-form glass reveal delay-1" action="/api/contact" method="post">
          <div className="form-grid">
            <label>Name*<input required name="name" autoComplete="name" /></label>
            <label>Clinic<input name="clinic" autoComplete="organization" /></label>
            <label>Email*<input required name="email" type="email" autoComplete="email" /></label>
            <label>Phone*<input required name="phone" type="tel" autoComplete="tel" /></label>
          </div>
          <label>Equipment type<input name="equipment" placeholder="Sterilizer, handpiece, chair, X-ray…" /></label>
          <label>Urgency<select name="urgency" defaultValue="">
            <option value="" disabled>Select urgency</option>
            <option>Same-day if possible</option>
            <option>Within 48 hours</option>
            <option>Preventive maintenance</option>
            <option>Membership / priority delivery</option>
          </select></label>
          <label>Message*<textarea required name="message" rows={5} placeholder="Tell us what happened, model/brand if available, and where the equipment is located." /></label>
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-callback="onTurnstileSuccess" />
          <input type="hidden" name="token" id="turnstile-token" />
          <button className="btn primary" type="submit">Send service request</button>
          <p className="form-note">Protected by Cloudflare Turnstile captcha. No spam, no friction.</p>
        </form>
      </section>

      <footer className="footer">
        <img src="/medengs-logo-light.svg" alt="MedEngs" />
        <p>Medical Engineering Solutions · Dental & Medical Equipment Experts</p>
        <p>© {new Date().getFullYear()} MedEngs. All rights reserved.</p>
      </footer>
      <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <script dangerouslySetInnerHTML={{ __html: `
        window.onTurnstileSuccess = function(token){ var el = document.getElementById('turnstile-token'); if(el) el.value = token; };
        document.addEventListener('submit', async function(event){
          const form = event.target.closest('.contact-form'); if(!form) return;
          event.preventDefault();
          const button = form.querySelector('button'); const note = form.querySelector('.form-note');
          button.disabled = true; button.textContent = 'Sending…';
          const data = Object.fromEntries(new FormData(form).entries());
          try {
            const res = await fetch('/api/contact', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(data) });
            const json = await res.json();
            note.textContent = json.message || json.error || 'Done.';
            note.className = 'form-note ' + (json.ok ? 'success' : 'error');
            if(json.ok) form.reset();
          } catch(e) { note.textContent = 'Could not send. Please call or email MedEngs directly.'; note.className = 'form-note error'; }
          button.disabled = false; button.textContent = 'Send service request';
        });
      ` }} />
    </main>
  );
}
