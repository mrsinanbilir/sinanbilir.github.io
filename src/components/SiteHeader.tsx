import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#academic-foundation", label: "Academic" },
  { href: "#references", label: "References" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("about");
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-bg-deep/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          onClick={(e) => handleNav(e, "#top")}
          className="flex items-center gap-3 group"
          aria-label="Go to top"
        >
          <span className="grid place-items-center w-10 h-10 rounded-xl text-sm font-bold text-brand-foreground shadow-md transition-transform group-hover:scale-105"
            style={{ background: "var(--gradient-brand)" }}>
            SB
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold">Sinan Bilir</span>
            <span className="text-[0.7rem] text-muted-foreground">AI &amp; Data Scientist</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="nav-link"
              data-active={activeId === link.href.slice(1)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="/docs/SinanBilir_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="btn-base btn-primary text-xs px-3 py-2"
          >
            CV
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-border bg-white/5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-t border-border ${
          menuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-narrow py-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="nav-link block"
              data-active={activeId === link.href.slice(1)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/docs/SinanBilir_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="btn-base btn-primary mt-3 self-start"
          >
            Download CV
          </a>
        </nav>
      </div>

      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-[width] duration-150"
        style={{ width: `${progress}%`, background: "var(--gradient-brand)" }}
        aria-hidden="true"
      />
    </header>
  );
}
