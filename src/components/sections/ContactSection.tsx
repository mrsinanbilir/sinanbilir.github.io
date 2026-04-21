import { Reveal } from "../Reveal";

const CONTACT_ITEMS = [
  { label: "Email", value: "mrsinanbilir@gmail.com", href: "mailto:mrsinanbilir@gmail.com" },
  { label: "Mobile", value: "+44 7376 964768", href: "tel:+447376964768" },
  { label: "Location", value: "Tottenham, Greater London, United Kingdom" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sinanbilir",
    href: "https://linkedin.com/in/sinanbilir",
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <Reveal>
            <article
              className="glass-panel-strong p-7 md:p-10 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.24 0.05 260 / 0.92), oklch(0.86 0.15 175 / 0.06))",
              }}
            >
              <div
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: "var(--gradient-brand)" }}
                aria-hidden="true"
              />
              <span className="eyebrow relative">Contact</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight relative">
                Open to London-based, hybrid, and applied AI roles.
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-justify-pretty relative">
                The profile aligns particularly well with machine learning engineering, NLP,
                generative AI, healthcare AI, analytics engineering, and decision-support product
                roles.
              </p>

              <ul className="mt-7 grid sm:grid-cols-2 gap-3 relative">
                {CONTACT_ITEMS.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-xl bg-white/[0.04] border border-border p-4 hover:border-brand/50 transition-colors"
                  >
                    <div className="text-xs uppercase tracking-wider text-gradient-brand font-semibold">
                      {item.label}
                    </div>
                    <div className="mt-1.5 text-sm font-medium break-words">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="hover:text-brand transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-xl border border-brand/30 bg-brand/[0.06] p-4 relative">
                <div className="text-xs uppercase tracking-wider font-semibold text-gradient-brand mb-1">
                  Best Fit
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed text-justify-pretty">
                  Roles where applied modelling, deployment awareness, explainability, stakeholder
                  communication, and product-minded AI delivery all matter.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <aside className="glass-panel p-7 md:p-8 h-full">
              <h3 className="text-lg font-semibold">Links &amp; Availability</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify-pretty">
                Public links and downloadable documents are available through the current site asset
                structure.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  className="btn-base btn-primary flex-1 min-w-[120px]"
                  href="https://www.linkedin.com/in/sinanbilir/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn-base btn-outline flex-1 min-w-[120px]"
                  href="https://github.com/mrsinanbilir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn-base btn-outline flex-1 min-w-[120px]"
                  href="mailto:mrsinanbilir@gmail.com"
                >
                  Email
                </a>
              </div>

              <div className="mt-7 space-y-4">
                <div className="rounded-lg bg-white/[0.04] border border-border p-4">
                  <div className="text-xs uppercase tracking-wider font-semibold text-gradient-brand">
                    Notice Period
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Immediate / 1 week depending on application context
                  </p>
                </div>
                <div className="rounded-lg bg-white/[0.04] border border-border p-4">
                  <div className="text-xs uppercase tracking-wider font-semibold text-gradient-brand">
                    Work Status
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Based in Greater London with current UK work eligibility details available in
                    personal documents
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 mt-10">
      <div className="container-narrow text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sinan Bilir. Designed for recruiter readability, static
        deployment, and straightforward sharing.
      </div>
    </footer>
  );
}
