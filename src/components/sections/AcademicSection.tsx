import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function AcademicSection() {
  return (
    <section id="academic-foundation" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-narrow">
        <SectionHeader
          kicker="Education & Publications"
          title="Academic Foundation"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <article className="glass-panel p-7 md:p-8 h-full card-hover">
              <h3 className="text-lg font-semibold mb-5">Education</h3>
              <ul className="space-y-6">
                <li>
                  <div className="font-semibold text-foreground">
                    Master of Science (MSc), Data Science &amp; Artificial Intelligence
                  </div>
                  <div className="text-sm text-gradient-brand mt-1">
                    University of Liverpool · 10/2023–04/2026 · First Class Grade
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-justify-pretty">
                    Relevant study areas include Machine Learning in Practice, Deep Learning,
                    Software Development in Practice, Databases and IT Systems, Mathematics and
                    Statistics for AI &amp; Data Science, and Cloud Computing.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify-pretty">
                    Dissertation:{" "}
                    <em className="text-foreground/90">
                      Development of a Machine Learning Model &amp; Software Platform for
                      Multi-Omics-Based Prediction of Neonatal Jaundice Risk
                    </em>
                    .
                  </p>
                </li>
                <li className="pt-6 border-t border-border">
                  <div className="font-semibold text-foreground">
                    Bachelor of Science (BSc), Industrial Engineering
                  </div>
                  <div className="text-sm text-gradient-brand mt-1">
                    Dokuz Eylul University · 09/2011–08/2016 · Upper Second Class Grade
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-justify-pretty">
                    Relevant study areas include Operations Research, Production Systems, Statistics,
                    Manufacturing Processes, Quality Planning and Control, Simulation, Optimisation,
                    Logistics, Supply Chain Management, Project Management, and Information Systems.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify-pretty">
                    Thesis:{" "}
                    <em className="text-foreground/90">
                      Transition to Just-in-Time Production and Kanban Board Implementation in an
                      Automotive Supplier Firm
                    </em>
                    .
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify-pretty">
                    Leadership: Regional Manager at ESTIEM, leading international projects focused on
                    business process optimisation and supply chain management.
                  </p>
                </li>
              </ul>
              <p className="mt-6 pt-5 border-t border-border text-sm text-muted-foreground leading-relaxed text-justify-pretty">
                Academic training reflects a strong interdisciplinary foundation spanning artificial
                intelligence, machine learning, statistical modelling, software development, industrial
                systems, optimisation, and operational decision-making across both healthcare and
                engineering domains.
              </p>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="glass-panel p-7 md:p-8 h-full card-hover">
              <h3 className="text-lg font-semibold mb-5">Research &amp; Publications</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed text-justify-pretty">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: "var(--gradient-brand)" }}
                    aria-hidden="true"
                  />
                  <span>
                    "Development of a Machine Learning Model and Software Platform for
                    Multi-Omics-Based Prediction of Neonatal Jaundice Risk." Target journal:{" "}
                    <em className="text-foreground/90">Frontiers in AI – Healthcare Informatics</em>.
                  </span>
                </li>
                <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed text-justify-pretty">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: "var(--gradient-brand)" }}
                    aria-hidden="true"
                  />
                  <span>
                    Industrial Engineering dissertation on kanban implementation, lean production,
                    and pull-system design.
                  </span>
                </li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
