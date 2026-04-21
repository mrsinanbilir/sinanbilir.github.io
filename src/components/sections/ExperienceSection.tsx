import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const EXPERIENCE = [
  {
    title: "Machine Learning & AI Systems Multi-Omics Integration Lead Researcher",
    org: "University of Liverpool",
    date: "December 2024 – Present",
    location: "Liverpool",
    summary:
      "Leading a pioneering biomedical AI project integrating multi-omics data and synthetic neonatal clinical datasets for neonatal jaundice risk prediction within the MSc in Data Science & AI programme.",
    bullets: [
      "Designed and implemented a full-stack machine learning pipeline tailored to healthcare data, including data ingestion, preprocessing, feature engineering, and model evaluation.",
      "Integrated multi-omics data with synthetic neonatal clinical records, creating a harmonized dataset for supervised learning and unsupervised discovery such as PCA and K-Means.",
      "Applied and fine-tuned Random Forest, XGBoost, and CNN models using cross-validation and SHAP for interpretability, achieving clinically relevant predictive performance.",
      "Built an interactive Streamlit application to support clinician-friendly deployment and visual exploration of prediction results.",
      "Collaborated with NHS Digital Health Units and the University of Liverpool School of Medicine to align outcomes with real-world clinical pathways.",
      "Utilized biomedical data platforms including PhysioNet to supplement and validate synthetic datasets in accordance with data governance and research ethics.",
      "Emphasized reproducibility and MLOps using GitHub for version control and modular Python and Jupyter codebases.",
    ],
    tools: "Python, Scikit-Learn, XGBoost, TensorFlow, Pandas, Streamlit, SHAP, PCA, GitHub, Jupyter, Synthea, NEST360, PhysioNet, Power BI.",
  },
  {
    title: "Data Scientist",
    org: "MGL Licensing",
    date: "February 2024 – June 2024",
    location: "Remote",
    bullets: [
      "Conducted customer segmentation using K-Means clustering on e-commerce transaction data, leading to personalized marketing strategies and a 20% increase in customer retention.",
      "Developed data visualization dashboards using Matplotlib and Seaborn to provide actionable insights to stakeholders and support real-time decision-making.",
      "Performed A/B testing to identify effective customer engagement strategies and improve marketing ROI.",
    ],
  },
  {
    title: "Data Scientist",
    org: "British Airways",
    date: "March 2024 – May 2024",
    location: "Remote",
    bullets: [
      "Worked on predictive analysis to forecast customer bookings based on features such as sales channel, trip type, route, and booking origin.",
      "Performed exploratory data analysis, feature engineering, and trained a Random Forest Classifier model.",
      "Developed a machine learning model to predict booking completion for British Airways customers.",
      "Conducted exploratory data analysis to identify patterns and trends in customer behaviour.",
      "Engineered features from existing data, including new origin and destination airport variables.",
      "Achieved 85% accuracy on the test set using the Random Forest Classifier.",
      "Presented findings and insights to stakeholders, contributing to data-driven decision-making.",
    ],
    tools: "Python, Pandas, Scikit-learn, Random Forest, Data Analysis, Data Visualization.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 scroll-mt-24 bg-bg-deep/40">
      <div className="container-narrow">
        <SectionHeader
          kicker="Experience"
          title="Work experience updated from LinkedIn profile content."
          intro="This section reflects the role titles, dates, locations, and responsibilities from the uploaded LinkedIn profile."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--border-strong) 8%, var(--border-strong) 92%, transparent)",
            }}
            aria-hidden="true"
          />

          <ol className="space-y-6">
            {EXPERIENCE.map((role, idx) => (
              <Reveal key={role.title + role.org} delay={idx * 100}>
                <li className="relative pl-12 md:pl-16">
                  <span
                    className="absolute left-2.5 md:left-4.5 top-7 h-4 w-4 rounded-full border-2 border-background"
                    style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
                    aria-hidden="true"
                  />
                  <article className="glass-panel p-6 md:p-7 card-hover">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold leading-snug">
                          {role.title}
                        </h3>
                        <div className="mt-1 text-sm text-gradient-brand font-semibold">
                          {role.org}
                        </div>
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground shrink-0 md:text-right">
                        <div>{role.date}</div>
                        <div className="opacity-80">{role.location}</div>
                      </div>
                    </div>

                    {role.summary && (
                      <p className="mt-4 text-sm md:text-[0.95rem] text-foreground/85 leading-relaxed text-justify-pretty">
                        {role.summary}
                      </p>
                    )}

                    <ul className="mt-4 space-y-2.5">
                      {role.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 h-1 w-1 rounded-full bg-brand shrink-0" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {role.tools && (
                      <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Key tools: </span>
                        {role.tools}
                      </div>
                    )}
                  </article>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
