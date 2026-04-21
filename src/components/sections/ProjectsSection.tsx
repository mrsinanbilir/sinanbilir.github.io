import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import neojanImg from "@/assets/projects/neojan.png";
import pneumoniaImg from "@/assets/projects/pneumonia.jpg";
import emissionsImg from "@/assets/projects/emissions.png";
import secureImg from "@/assets/projects/secure.png";
import baImg from "@/assets/projects/ba.png";
import floydsImg from "@/assets/projects/floyds.png";

interface Project {
  title: string;
  badge: string;
  image: string;
  imageContain?: boolean;
  paragraphs: string[];
  tags: string[];
  github: string;
  meta?: { label: string; value: string }[];
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "NeoJan · Multi-Omics Machine Learning for Neonatal Jaundice Risk Prediction",
    badge: "Featured · Healthcare AI",
    image: neojanImg,
    imageContain: true,
    featured: true,
    paragraphs: [
      "NeoJan represents the most advanced and research-intensive project within my portfolio, designed at the intersection of healthcare AI, biomedical data science, and clinical decision support. The project addressed the challenge of early neonatal jaundice risk prediction by integrating heterogeneous data sources, including clinical indicators, gene-related variables, and metabolomic features, within a unified machine learning framework.",
      "Beyond model development, the work extended into the design and implementation of an interactive Streamlit-based platform capable of structured data ingestion, preprocessing, probabilistic risk prediction, threshold adjustment, and visual analytics. Particular emphasis was placed on interpretability, calibration, and usability so that the system could function as an explainable decision-support environment rather than a purely experimental model.",
      "In this respect, NeoJan reflects not only my machine learning capability, but also my ability to translate complex biomedical modelling into a structured, user-oriented software solution aligned with real clinical workflows.",
    ],
    meta: [
      { label: "Focus", value: "Clinical prediction, explainability, multi-omics integration, deployment usability" },
      { label: "Core Stack", value: "Python, XGBoost, TensorFlow, SHAP, Streamlit, MLflow" },
    ],
    tags: ["Healthcare AI", "Multi-Omics", "Streamlit", "SHAP", "MLflow"],
    github: "https://github.com/mrsinanbilir/JaundiceProject",
  },
  {
    title: "Pneumonia Detection Using Convolutional Neural Networks",
    badge: "Computer Vision",
    image: pneumoniaImg,
    paragraphs: [
      "This project was undertaken within the context of AI-assisted medical imaging, with the objective of classifying chest X-ray images as either normal or pneumonia-positive through deep learning methodologies. The work explored several modelling strategies, including class-weighted convolutional neural networks, k-fold cross-validation with a hold-out test set, and transfer learning through a ResNet-based architecture.",
      "The broader significance of the project lay in addressing key methodological challenges that are central to healthcare AI, particularly class imbalance, overfitting, model stability, and generalisation performance. Considerable attention was also given to evaluation design, with recall and overall robustness treated as especially important due to the clinical sensitivity of false negatives.",
      "As a result, the project demonstrates my ability to apply deep learning in a medically relevant setting while maintaining a disciplined approach to validation and performance assessment.",
    ],
    tags: ["CNN", "TensorFlow", "Transfer Learning", "Grad-CAM", "SHAP"],
    github:
      "https://github.com/mrsinanbilir/DEEP-LEARNING-CNN-MODEL-TO-DETECT-PNEUMONIA-DECEASES-FROM-MEDICAL-IMAGES",
  },
  {
    title: "Applying Machine Learning to Predict London's Pollution Problem",
    badge: "Environmental ML",
    image: emissionsImg,
    paragraphs: [
      "This project was situated within the field of environmental analytics and focused on modelling air pollution patterns across London using emissions, transport, and concentration data. The analysis centred on key pollutants such as nitrogen oxides and particulate matter, with particular attention to road transport as a major contributing source.",
      "To address the problem, the work involved substantial data preparation, feature engineering, and model construction using methods such as Random Forest Regression, Linear Regression, Logistic Regression, and Principal Component Analysis.",
      "The wider purpose of the project was to support more informed understanding of urban pollution dynamics and to provide insight relevant to public health, traffic planning, and environmental policy.",
    ],
    tags: ["Environmental ML", "Regression", "XGBoost", "PCA", "GeoPandas"],
    github:
      "https://github.com/mrsinanbilir/Predicting-Atmospheric-Emissions-Using-Machine-Learning-Models",
  },
  {
    title: "Secure Client–Server Communication System",
    badge: "Secure Systems",
    image: secureImg,
    paragraphs: [
      "This project was carried out within a software engineering and systems design context, focusing on the implementation of secure client–server communication in Python. The work covered the design of a modular architecture in which user data could be collected on the client side, serialised into multiple formats, encrypted using symmetric cryptography, transmitted securely, and then decrypted and processed on the server side.",
      "In addition to the communication workflow itself, the project incorporated unit testing across the major components in order to assess reliability and correctness. The significance of the project lies in its combination of networking principles, secure programming practice, and maintainable software structure.",
      "It demonstrates that my technical background extends beyond data modelling into the broader engineering disciplines required to build robust and security-aware systems.",
    ],
    tags: ["Python", "Encryption", "JSON/XML", "Client-Server", "Secure Systems"],
    github: "https://github.com/mrsinanbilir/Secure-Client-Server-Communication-System",
  },
  {
    title: "British Airways Booking Prediction",
    badge: "Commercial Analytics",
    image: baImg,
    paragraphs: [
      "This project was completed within a commercial analytics context, with the aim of predicting booking completion behaviour using structured airline customer and itinerary data. The work involved exploratory data analysis, feature engineering, and supervised modelling in order to identify the key drivers of successful bookings.",
      "Particular attention was given to interpreting the operational relevance of model outputs, including the influence of features such as purchase lead time, length of stay, flight hour, and trip characteristics. The project demonstrates the translation of predictive modelling into business-facing insight by connecting statistical performance with decision-making value.",
      "It therefore reflects my ability to apply machine learning in a commercial environment where model interpretation, performance trade-offs, and stakeholder relevance are all important.",
    ],
    tags: ["Random Forest", "EDA", "Feature Engineering", "Commercial Analytics", "Classification"],
    github: "https://github.com/mrsinanbilir/BritishAirways_DataScience_CustomerSegmentation.md",
  },
  {
    title: "ShortestPathGenerator · Floyd's Algorithm",
    badge: "Algorithms & Software Testing",
    image: floydsImg,
    imageContain: true,
    paragraphs: [
      "A shortest-path generation project centred on Floyd's Algorithm, combining weighted directed graph modelling, matrix-based path updates, and software testing to validate shortest-path computation across all node pairs. The implementation demonstrates how recursive and iterative coding strategies can be applied to the same optimisation problem while preserving algorithmic correctness and clear path reconstruction.",
      "The project presents the full analytical workflow visually and computationally, including the graph structure, the Floyd recurrence relation, intermediate iteration tables, a final shortest-path matrix, and an optimal-path trace from source to destination. This makes the project valuable not only as an algorithms exercise, but also as a software artefact that communicates internal logic, state transitions, and result verification in a transparent way.",
      "A benchmarking comparison between recursive and iterative implementations highlights the practical performance implications of design choice, with the iterative version substantially faster in the presented test. The overall work demonstrates algorithm design, benchmarking, structured output generation, and test-oriented software development for graph optimisation problems.",
    ],
    meta: [
      { label: "Focus", value: "Shortest-path optimisation, Floyd's Algorithm, graph processing, recursive versus iterative design, correctness testing" },
      { label: "Highlights", value: "Weighted directed graph, distance matrix updates, optimal path generation, benchmarking, software testing workflow" },
    ],
    tags: ["Floyd's Algorithm", "Shortest Path", "Graph Algorithms", "Benchmarking", "Software Testing"],
    github: "https://github.com/mrsinanbilir/ShortestPathGenerator_FloydsAlgorithm_SoftwareTests",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;
  return (
    <Reveal delay={index * 60}>
      <article
        className={`glass-panel overflow-hidden card-hover h-full flex flex-col ${
          isFeatured ? "lg:col-span-2" : ""
        }`}
      >
        <div
          className={`relative w-full bg-bg-deep border-b border-border overflow-hidden ${
            isFeatured ? "aspect-[16/8]" : "aspect-[16/10]"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={`absolute inset-0 w-full h-full transition-transform duration-700 hover:scale-[1.03] ${
              project.imageContain ? "object-contain p-4" : "object-cover"
            }`}
          />
          <div className="absolute top-3 left-3">
            <span className="chip backdrop-blur-md bg-background/60 border-border-strong text-foreground/90">
              {project.badge}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-7 flex flex-col flex-1">
          <h3 className="text-lg md:text-xl font-semibold leading-snug">{project.title}</h3>

          <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed text-justify-pretty">
            {project.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {project.meta && (
            <dl className="mt-5 space-y-2 text-sm">
              {project.meta.map((m) => (
                <div key={m.label} className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-semibold text-foreground shrink-0">{m.label}:</dt>
                  <dd className="text-muted-foreground">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-border">
            <a
              className="btn-base btn-outline w-full sm:w-auto"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub Repository
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-narrow">
        <SectionHeader
          kicker="Projects"
          title="Selected projects across healthcare AI, applied machine learning, secure systems, and data platforms."
          intro="The project portfolio below presents distinct implementations across clinical prediction, computer vision, geospatial modelling, secure software engineering, commercial analytics, algorithm design, and software systems."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
