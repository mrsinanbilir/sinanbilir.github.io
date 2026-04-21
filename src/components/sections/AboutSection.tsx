import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const HIGHLIGHTS = [
  {
    title: "Applied AI with Measurable Outcomes",
    body: "Delivered work across healthcare prediction, forecasting, customer analytics, business intelligence, and commercial decision support.",
  },
  {
    title: "Research-Grade Rigour with Deployment Awareness",
    body: "Combines explainable modelling, data governance awareness, reproducibility, and clinician or stakeholder-facing usability.",
  },
  {
    title: "Commercial Fluency Beyond Modelling",
    body: "Strong experience translating data outputs into business action through dashboards, reporting, experimentation, and operations support.",
  },
];

const PILLARS = [
  {
    title: "Applied AI",
    body: "End-to-end model development across healthcare, forecasting, environmental analytics, customer behaviour, and recruitment intelligence.",
    tags: ["Random Forest", "XGBoost", "TensorFlow", "SHAP"],
  },
  {
    title: "NLP & Generative AI",
    body: "Experience with transformer-based NLP, text classification, semantic similarity, prompt engineering, and information extraction pipelines.",
    tags: ["BERT", "Transformers", "Prompt Engineering", "Semantic Similarity"],
  },
  {
    title: "MLOps & Deployment",
    body: "Delivery of auditable ML systems through Docker, experiment tracking, CI/CD, cloud workflows, and user-facing deployment layers.",
    tags: ["Docker", "MLflow", "Azure ML", "CI/CD"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-narrow">
        <SectionHeader
          kicker="About"
          title="Technical depth across AI, data science, and real-world deployment."
          intro="The portfolio reflects applied expertise in machine learning, healthcare AI, and data engineering, spanning end-to-end pipelines from raw data to production-ready systems. Core technologies include Python, SQL, TensorFlow, XGBoost, Streamlit, Docker, MLflow, and Power BI, with a focus on building scalable, interpretable, and impact-driven solutions."
        />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
          <Reveal>
            <article className="glass-panel p-7 md:p-8 h-full card-hover">
              <h3 className="text-xl font-semibold mb-6">What stands out</h3>
              <ul className="space-y-5">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.title} className="flex gap-4">
                    <span
                      className="mt-2 h-2 w-2 rounded-full shrink-0"
                      style={{ background: "var(--gradient-brand)" }}
                      aria-hidden="true"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{h.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground leading-relaxed text-justify-pretty">{h.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <div className="grid gap-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="glass-panel p-6 card-hover">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify-pretty">{p.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
