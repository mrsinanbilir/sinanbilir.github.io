import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const REFERENCES = [
  {
    quote:
      "His ability to combine AI-driven insights with strategic decision-making makes him an ideal candidate for roles involving data analytics, predictive modelling, or AI-powered business optimisation.",
    name: "Dr. Hüseyin Ukuşlu",
    role: "Accounting & Finance Manager, M&G Group",
  },
  {
    quote:
      "He has successfully applied predictive modelling, deep learning, and statistical analysis to complex datasets, delivering real-world impact.",
    name: "Ozan Altıntaş",
    role: "Coordinator, Data Analytics Expert",
  },
  {
    quote:
      "His work in healthcare AI and environmental analytics demonstrates both technical competence and the ability to address real-world challenges.",
    name: "Dr Tom Angier",
    role: "Lecturer, University of Cape Town",
  },
];

export function ReferencesSection() {
  return (
    <section id="references" className="py-20 md:py-28 scroll-mt-24 bg-bg-deep/40">
      <div className="container-narrow">
        <SectionHeader
          kicker="References"
          title="External validation from academic and professional contacts."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {REFERENCES.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <figure className="glass-panel p-6 md:p-7 h-full card-hover flex flex-col">
                <svg
                  className="w-7 h-7 mb-4 opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "oklch(0.86 0.15 175)" }}
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c1 0 1 1 1 2v1c0 1-1 2-2 2H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c1 0 1 1 1 2v1c0 1-1 2-2 2h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Z" />
                </svg>
                <blockquote className="text-sm md:text-[0.95rem] text-foreground/90 leading-relaxed flex-1 text-justify-pretty">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-border">
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{r.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
