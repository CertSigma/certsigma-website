export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <a href="#top" className="brand">
              <img src="/CertSigmaFull_Logo.svg" alt="CertSigma" />
            </a>
            <p>The audit and certification arm of an Global compliance ecosystem.</p>
          </div>
          <div>
            <h5>Frameworks</h5>
            <ul>
              <li><a href="#frameworks">SOC 2</a></li>
              <li><a href="#frameworks">ISO 27001 (Ongoing)</a></li>
              <li><a href="#frameworks">ISO 42001</a></li>
              <li><a href="#frameworks">HIPAA</a></li>
              <li><a href="#frameworks">GDPR (Ongoing)</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#platform">What we do</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="#">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span>Dubai address ( Ajman FZE, Ajman, United Arab Emirates License No. 2621016687888)</span>
                </a>
              </li>
              <li>
                <a href="mailto:shak@certsigma.com">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  <span>shak@certsigma.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919585254515" target="_blank" rel="noopener noreferrer">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  <span>+91 95852 54515</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>© 2026 CertSigma</span>
          <div className="fbot-compliance">
            <div className="fbot-compliance-item">
              <div style={{height: '44px', display: 'flex', alignItems: 'center'}}>
                <img src="/services_logo/aicpa.png" alt="AICPA SOC" />
              </div>
              <span style={{color: '#22c55e', fontSize: '9px', fontWeight: 600, textTransform: 'uppercase', lineHeight: 1, marginTop: '2px'}}>Compliant</span>
            </div>
            <div style={{width: '1px', height: '60px', background: '#ffffff', opacity: 0.3, margin: '0 8px'}}></div>
            <div className="fbot-compliance-item" style={{paddingBottom: '16px'}}>
              <div style={{height: '44px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <img src="/services_logo/iso.png" alt="ISO" />
                <img src="/services_logo/gdpr.png" alt="GDPR" />
              </div>
              <span style={{position: 'absolute', bottom: '0px', left: '50%', transform: 'translateX(-50%)', color: '#60a5fa', fontSize: '9px', fontWeight: 600, textTransform: 'uppercase', lineHeight: 1}}>Ongoing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
