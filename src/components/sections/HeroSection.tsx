import { Reveal } from "../Reveal";
import portraitImg from "@/assets/sinan_image.png";

export function HeroSection() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 items-start">
          {/* Left — copy */}
          <div className="glass-panel-strong p-7 md:p-10">
            <Reveal>
              <span className="eyebrow">London · Healthcare AI · NLP · MLOps</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Data &amp; Artificial Intelligence{" "}
                <span className="text-gradient-brand">Scientist</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Machine Learning · Deep Learning · Neural Networks · Multi-Omics in Healthcare ·
                Business Intelligence · Data Engineering · MLOps · Cloud Computing
              </p>
            </Reveal>

            <div className="mt-6 space-y-5 text-[0.97rem] leading-[1.75] text-foreground/90 text-justify-pretty">
              <Reveal delay={220}>
                <p>
                  A Data Scientist and Machine Learning Engineer specialising in the design and
                  deployment of end-to-end AI systems, with a strong emphasis on multi-modal data
                  integration and real-world decision support. Current work focuses on the
                  development of a neonatal jaundice risk prediction platform (NeoJan), integrating
                  clinical, gene expression, and metabolomics data into a unified predictive
                  pipeline. Expertise spans data preprocessing, feature engineering, model
                  optimisation, and explainability, with practical implementation using Python,
                  scikit-learn, and modern ML frameworks.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p>
                  Demonstrated capability in translating complex datasets into actionable insights
                  through statistical modelling, ensemble learning, and deep learning approaches.
                  Experienced in handling high-dimensional biomedical data, applying techniques such
                  as PCA, clustering, and feature selection to enhance model robustness and
                  interpretability. Strong emphasis is placed on reproducibility, scalable
                  architecture, and deployment through interactive applications, including
                  Streamlit-based clinical decision tools.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <p>
                  Academic background in Data Science and Artificial Intelligence, combined with
                  applied research in healthcare AI, supports a rigorous and methodical approach to
                  problem solving. The overarching objective is to build intelligent, reliable, and
                  ethically grounded AI systems that bridge the gap between advanced analytics and
                  practical application in high-impact domains.
                </p>
              </Reveal>
            </div>

            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="btn-base btn-primary"
                  href="/docs/SinanBilir_Resume.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
                <a
                  className="btn-base btn-accent"
                  href="/docs/SinanBilir_PORTFOLIO_Dec2024.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  Download Portfolio
                </a>
                <a
                  className="btn-base btn-outline"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Selected Projects →
                </a>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {[
                  { title: "8+ Years", desc: "Across analytics, BI, data science, and AI-led delivery." },
                  { title: "Healthcare AI", desc: "Clinical prediction, explainability, and deployment-oriented research." },
                  { title: "Production Focus", desc: "MLOps, cloud workflows, decision support, and stakeholder usability." },
                ].map((m) => (
                  <div key={m.title} className="rounded-xl border border-border bg-white/[0.03] p-4 hover:border-brand/40 transition-colors">
                    <div className="text-sm font-semibold text-gradient-brand">{m.title}</div>
                    <div className="mt-2 text-xs text-muted-foreground leading-relaxed">{m.desc}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — profile card */}
          <Reveal delay={120} className="lg:sticky lg:top-28">
            <aside className="glass-panel-strong p-6 md:p-7 space-y-6" aria-label="Profile summary">
              <div className="relative aspect-square w-full max-w-xs mx-auto rounded-2xl overflow-hidden border border-border-strong group">
                <div
                  className="absolute -inset-1 rounded-2xl opacity-40 blur-xl group-hover:opacity-60 transition-opacity"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-hidden="true"
                />
                <img
                  src={portraitImg}
                  alt="Portrait of Sinan Bilir"
                  className="relative w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "PR AUC 1.0", k: "NeoJan multi-omics neonatal risk prediction outcome" },
                  { v: "97.6%", k: "Pneumonia detection accuracy (CNN deep learning)" },
                  { v: "UK & TR", k: "Based in London, full work rights in UK and Türkiye" },
                  { v: "Stakeholder-Ready", k: "Research, analytics, and business-facing reporting" },
                ].map((s) => (
                  <div key={s.v} className="rounded-lg bg-white/[0.04] border border-border p-3">
                    <div className="text-xs font-semibold text-gradient-brand">{s.v}</div>
                    <div className="mt-1 text-[0.7rem] text-muted-foreground leading-snug">{s.k}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-white/[0.04] border border-border p-4">
                <h3 className="text-sm font-semibold mb-3">Recruiter Snapshot</h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="text-foreground font-semibold">Some Target Roles</div>
                    <div className="text-muted-foreground mt-1 leading-relaxed">
                      Machine Learning Engineer, AI Engineer, NLP / GenAI, Healthcare AI, Analytics
                      Engineering
                    </div>
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">Location</div>
                    <div className="text-muted-foreground mt-1 leading-relaxed">
                      London-based, hybrid-ready, open to applied AI opportunities
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
