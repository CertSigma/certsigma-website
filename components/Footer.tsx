export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <a href="#top" className="brand">
              <img src="/CertSigmaFull_Logo.svg" alt="CertSigma" />
            </a>
            <p>The audit and certification arm of an India-native compliance ecosystem. Implementation by Relynt.</p>
          </div>
          <div>
            <h5>Frameworks</h5>
            <ul>
              <li><a href="#frameworks">SOC 2</a></li>
              <li><a href="#frameworks">ISO 27001</a></li>
              <li><a href="#frameworks">ISO 42001</a></li>
              <li><a href="#frameworks">HIPAA</a></li>
              <li><a href="#frameworks">GDPR</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#platform">What we do</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#plans">Plans</a></li>
              <li><a href="#ecosystem">Relynt</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="#"><span className="flag">address TBD</span></a></li>
              <li><a href="#"><span className="flag">email TBD</span></a></li>
              <li><a href="#"><span className="flag">phone TBD</span></a></li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>© 2026 CertSigma</span>
          <span className="flag">DRAFT 2 — not for production</span>
        </div>
      </div>
    </footer>
  );
}
