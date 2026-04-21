import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}

export function SectionHeader({ kicker, title, intro, align = "center" }: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div className={`mb-10 md:mb-14 max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className={`eyebrow ${isCenter ? "justify-center" : ""}`}>{kicker}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.6rem] font-semibold leading-[1.15] tracking-tight">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p
            className={`mt-4 text-base md:text-lg text-muted-foreground leading-relaxed ${
              isCenter ? "text-justify-pretty sm:text-center" : ""
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
