import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const SKILLS = [
  {
    title: "Programming, Core Tools & Languages",
    items:
      "Python · SQL · Bash · R · Git · GitHub · GitLab · Jupyter Notebook · Kaggle · PyCharm · Terminal · Anaconda · Terraform · Agile · LaTeX · Turkish: Native · English: Professionally Fluent (C2)",
  },
  {
    title: "Machine Learning & AI Architectures",
    items:
      "Scikit-learn · XGBoost · LightGBM · Random Forest · TensorFlow · Keras · PyTorch · CNNs · RNNs · LSTMs · GANs · Autoencoders · Transfer Learning · SHAP · LIME · Reinforcement Learning · Federated Learning · Cluster Analysis · Deep Learning · Convolutional Neural Networks",
  },
  {
    title: "Natural Language Processing (NLP)",
    items:
      "SpaCy · NLTK · Hugging Face Transformers · BERT · GPT-based architectures · Text Classification · Semantic Similarity · Topic Modelling · Information Extraction Pipelines · Prompt Engineering",
  },
  {
    title: "Cloud, MLOps & Deployment",
    items:
      "Azure ML · Microsoft Azure · AWS (S3, EC2, Lambda, SageMaker) · GCP (BigQuery, Vertex AI) · Docker · Kubernetes · MLflow · Airflow · TensorFlow Serving · CI/CD (GitHub Actions, Jenkins) · Model Versioning · Monitoring · Retraining Pipelines · Flask · FastAPI · REST APIs · Application Programming Interfaces · Software Deployment",
  },
  {
    title: "Data Engineering, Databases & Platforms",
    items:
      "Apache Spark · Hadoop · Databricks · MySQL · PostgreSQL · MongoDB · SQLite · Microsoft SQL Server · Amazon Redshift · SAP ERP (SD Module) · Feature Engineering · Orchestration · Genomics-oriented Data Processing · Multi-omics Integration · Synthetic Clinical Data · Database Management · Data Science",
  },
  {
    title: "Analytics, Visualization, BI & Commercial Delivery",
    items:
      "Pandas · NumPy · Matplotlib · Seaborn · Plotly · Power BI · Tableau · Looker · Streamlit · Dash · Zoho CRM · Zoho Analytics BI · Google Analytics · A/B Testing · Statistical Analysis · Statistical Data Analysis · Data Visualization · Data Analytics · Business Analysis · Business Intelligence · Sales Engineering · Sales Operations · Marketing Intelligence · Customer Retention · Management Information Systems (MIS) · Microsoft Excel · Microsoft Office 365 · Digital Marketing · Content Management & Content Marketing · Analytical Skills · Problem Solving · Project Management · Leadership",
  },
  {
    title: "Evaluation & Performance Metrics",
    items:
      "ROC AUC · PR AUC · Precision-Recall · F1 Score · Brier Score · Calibration Analysis · Model Explainability · Cross-Validation Strategies",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 scroll-mt-24 bg-bg-deep/40">
      <div className="container-narrow">
        <SectionHeader
          kicker="Skills"
          title="Technical capability across machine learning, NLP, MLOps, analytics, and commercial data delivery."
          intro="The skills profile below combines core technical strengths from academic projects, production-oriented AI work, healthcare modelling, business intelligence delivery, and commercial analytics roles."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="glass-panel p-6 md:p-7 h-full card-hover">
                <h3 className="text-base md:text-lg font-semibold text-gradient-brand">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.85]">{s.items}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
