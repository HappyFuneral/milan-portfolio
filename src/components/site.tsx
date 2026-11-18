import Link from "next/link";
import { copy, skills, type Locale } from "@/lib/content";
import { ProjectList } from "@/components/project-list";

export function Header({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const paths = [
    `/${locale}`,
    `/${locale}#projects`,
    `/${locale}#about`,
    `/${locale}#contact`,
  ];
  return (
    <header className="topbar">
      <Link className="brand" href={`/${locale}`}>
        <span className="brand-mark">M</span> MAROEVICH MILÁN
      </Link>
      <nav>
        {c.nav.map((n, i) => (
          <Link key={n} href={paths[i]}>
            {n}
          </Link>
        ))}
      </nav>
      <div className="lang">
        <Link className={locale === "hu" ? "active" : ""} href="/hu">
          HU
        </Link>
        <span>/</span>
        <Link className={locale === "en" ? "active" : ""} href="/en">
          EN
        </Link>
      </div>
    </header>
  );
}
export function Home({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <>
      <Header locale={locale} />
      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" /> {c.eyebrow}
            </p>
            <h1>
              {c.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="lead">{c.intro}</p>
            <div className="actions">
              <Link className="button primary" href={`/${locale}#projects`}>
                {c.projects} <span>↗</span>
              </Link>
              <Link className="button secondary" href={`/${locale}#contact`}>
                {c.contact}
              </Link>
            </div>
            <div className="hero-meta">
              <span>01 / BACKEND</span>
              <span>02 / FULL-STACK</span>
              <span>03 / INFRASTRUCTURE</span>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src="/images/profile-placeholder.jpg"
                alt="Milán Maroevich portréja"
                className="portrait"
              />
              <div className="portrait-placeholder">
                MM<span>PROFILE PHOTO</span>
              </div>
            </div>
            <div className="portrait-note">
              Budapest, Hungary <span>↗</span>
            </div>
          </div>
          <div className="hero-orbit" />
        </section>
        <section className="section wrap" id="projects">
          <div className="section-head">
            <div>
              <p className="eyebrow">SELECTED WORK / 2024—2026</p>
              <h2>
                {c.projects}
                <span className="accent">.</span>
              </h2>
            </div>
            <span className="count">04 PROJECTS</span>
          </div>

          <ProjectList locale={locale} />
        </section>
        <section className="section about-section" id="about">
          <div className="wrap about-grid">
            <div>
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>
                {c.about}
                <span className="accent">.</span>
              </h2>
            </div>
            <div>
              <p className="about-copy">{c.aboutText}</p>
              <div className="timeline">
                <div>
                  <span>2024—2025</span>
                  <strong>Óbuda University</strong>
                  <small>Engineering Informatics studies</small>
                </div>
                <div>
                  <span>2019—2024</span>
                  <strong>Bláthy Ottó Titusz Technical School</strong>
                  <small>Software Development and Testing Technician</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section wrap" id="skills">
          <div className="section-head">
            <div>
              <p className="eyebrow">TOOLS I WORK WITH</p>
              <h2>
                {c.skills}
                <span className="accent">.</span>
              </h2>
            </div>
          </div>
          <div className="skill-cloud">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <div className="infra-note">
            <span className="infra-icon">⌘</span>
            <div>
              <strong>Self-hosted infrastructure</strong>
              <p>Linux · Docker · Docker Compose · NGINX · Cloudflare Tunnel</p>
            </div>
            <span className="infra-status">
              <i /> RUNNING
            </span>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="wrap contact-inner">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>
              {c.contact}
              <span className="accent">.</span>
            </h2>
            <p>{c.contactText}</p>
            <a
              className="contact-email"
              href="mailto:milan.maroevich@gmail.com"
            >
              milan.maroevich@gmail.com ↗
            </a>
            <div className="contact-bottom">
              <div className="socials">
                <a
                  href="https://github.com/HappyFuneral"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://maroevichmilan.hu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website ↗
                </a>
              </div>
              <Link href={`/${locale}/cv`}>{c.cv} ↗</Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} MAROEVICH MILÁN</span>
        <span>{c.footer}</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
