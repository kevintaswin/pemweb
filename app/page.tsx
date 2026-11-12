import Navbar from "./components/Navbar";
import logo from "./logo.png";
import heroImg from "./hero-billboard.jpg";

const services = [
  {
    no: "01 — ADVERTISING",
    title: ["Outdoor", "Advertising"],
    desc: "Dukungan kebutuhan outdoor advertising dan pengelolaan reklame untuk berbagai kebutuhan bisnis.",
  },
  {
    no: "02 — MANAGEMENT",
    title: ["Pajak", "Reklame"],
    desc: "Layanan pengurusan dan perpanjangan pajak reklame di berbagai wilayah Indonesia.",
  },
  {
    no: "03 — PRODUCTION",
    title: ["Digital", "Printing"],
    desc: "Produksi banner, sticker, cutting dan kebutuhan visual advertising lainnya untuk internal maupun umum.",
  },
];

const capabilities = [
  "Outdoor Advertising",
  "Reklame Administration",
  "Digital Printing",
  "Banner & Sticker",
  "Cutting & Signage Support",
];

const showcases = [
  { cls: "large one", kicker: "Outdoor Advertising", title: "Reklame & Brand Visibility" },
  { cls: "two", kicker: "Production", title: "Banner & Printing" },
  { cls: "three", kicker: "Production", title: "Sticker & Cutting" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Your Partner in Advertising &amp; Production</div>

              <h1>
                Primatama
                <br />
                <span>Promotion</span>
              </h1>

              <p className="hero-copy">
                CV Primatama Promotion menyediakan layanan pengurusan perpanjangan
                pajak reklame dengan jangkauan seluruh Indonesia serta layanan
                digital printing untuk berbagai kebutuhan advertising dan
                promosi. Kami hadir sebagai mitra bisnis yang mendukung
                pengelolaan reklame dan kebutuhan produksi media promosi secara
                profesional.
              </p>

              <div className="hero-actions">
                <a href="#services" className="btn btn-dark">
                  Explore Services ↗
                </a>
                <a href="#work" className="btn btn-light">
                  View Our Work
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card main-board">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroImg.src}
                  alt="Billboard Primatama Promotion"
                  className="board-img"
                />
              </div>

              <div className="visual-card floating-card">
                <div className="number">Seluruh Indonesia</div>
                <p>Kami melayani perpanjangan pajak reklame seluruh Indonesia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">01 / About</div>
                <h2>
                  More than
                  <br />
                  just advertising.
                </h2>
              </div>
              <p className="section-intro">
                Primatama Promotion menggabungkan layanan outdoor advertising
                dengan kemampuan produksi untuk mendukung kebutuhan advertising
                dari sisi pengelolaan hingga material.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-big">
                We help businesses stay <span>visible, consistent,</span> and
                ready for the next campaign.
              </div>

              <div className="about-text">
                <p>
                  CV Primatama Promotion bergerak di bidang outdoor advertising,
                  termasuk pengelolaan kebutuhan reklame dan layanan
                  perpanjangan pajak reklame di berbagai wilayah Indonesia.
                </p>
                <p>
                  Untuk mendukung kebutuhan tersebut, Primatama juga memiliki
                  unit digital printing yang menangani produksi material
                  advertising sekaligus melayani kebutuhan pelanggan umum.
                </p>

                <div className="mini-stats">
                  <div className="mini-stat">
                    <strong>1K+</strong>
                    <span>Banner orders</span>
                  </div>
                  <div className="mini-stat">
                    <strong>200+</strong>
                    <span>Sticker orders</span>
                  </div>
                  <div className="mini-stat">
                    <strong>ID</strong>
                    <span>Multi-area service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">02 / Services</div>
                <h2>What we do.</h2>
              </div>
              <p className="section-intro">
                Fokus pada kebutuhan utama advertising dan production support
                yang dapat dikerjakan secara terintegrasi.
              </p>
            </div>

            <div className="services-grid">
              {services.map((s) => (
                <article className="service" key={s.no}>
                  <div className="service-no">{s.no}</div>
                  <div>
                    <h3>
                      {s.title[0]}
                      <br />
                      {s.title[1]}
                    </h3>
                    <p>{s.desc}</p>
                  </div>
                  <div className="service-arrow">↗</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="dark-section" id="capabilities">
          <div className="container cap-grid">
            <div>
              <div className="section-kicker">03 / Capability</div>
              <div className="cap-copy">
                From advertising needs <span>to the production behind them.</span>
              </div>
            </div>

            <div className="cap-list">
              {capabilities.map((c, i) => (
                <div className="cap-item" key={c}>
                  <strong>{c}</strong>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section id="work">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">04 / Showcase</div>
                <h2>
                  Work that gets
                  <br />
                  noticed.
                </h2>
              </div>
              <p className="section-intro">
                Placeholder visual untuk sekarang. Nanti tinggal diganti dengan
                foto pekerjaan asli Primatama agar website terasa jauh lebih
                credible.
              </p>
            </div>

            <div className="showcase-grid">
              {showcases.map((s) => (
                <div className={`showcase ${s.cls}`} key={s.title}>
                  <div className="showcase-content">
                    <small>{s.kicker}</small>
                    <h3>{s.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" id="contact">
          <div className="container">
            <div className="cta-box">
              <div>
                <div className="section-kicker">05 / Contact</div>
                <h2>Have an advertising project in mind?</h2>
                <p>
                  Let&apos;s discuss your advertising, production, or reklame
                  needs with Primatama Promotion.
                </p>
              </div>

              <a href="https://wa.me/" className="btn btn-dark">
                Talk to Us ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div>
              <a href="#" className="brand-full" aria-label="Primatama Promotion">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt="Primatama Promotion — Out Door ADV & Digital Printing" />
              </a>
              <p className="footer-desc">
                Outdoor advertising and advertising production support for
                businesses across Indonesia.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-col">
                <strong>Navigation</strong>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#work">Our Work</a>
              </div>

              <div className="footer-col">
                <strong>Contact</strong>
                <span>WhatsApp</span>
                <span>Email</span>
                <span>Instagram</span>
                <span>Shopee</span>
              </div>
            </div>
          </div>

          <div className="copyright">
            <span>© 2026 CV Primatama Promotion. All rights reserved.</span>
            <span>Outdoor Advertising • Production</span>
          </div>
        </div>
      </footer>
    </>
  );
}