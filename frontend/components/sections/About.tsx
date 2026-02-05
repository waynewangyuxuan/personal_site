"use client";

import { useI18n } from "@/lib/i18n";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const experience = [
  {
    company: "ByteDance",
    role: { en: "Software Engineer Intern", zh: "软件工程师实习" },
    period: "Jun – Sep 2025",
  },
  {
    company: "NYU Research",
    role: { en: "Research Assistant", zh: "研究助理" },
    period: "Jun 2024 – May 2025",
  },
  {
    company: "CITIC Poly Fund",
    role: { en: "Data Intern", zh: "数据实习" },
    period: "Jun – Aug 2023",
  },
];

const education = [
  {
    school: "UC San Diego",
    degree: { en: "MS Computer Science", zh: "计算机科学硕士" },
    period: "2025 – 2027",
    current: true,
  },
  {
    school: "NYU Tandon",
    degree: { en: "BS Computer Science, Math Minor", zh: "计算机科学学士，数学辅修" },
    period: "2021 – 2025",
    current: false,
  },
];

export function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="section page-container">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <p className="section-label mb-12">{t("about.title")}</p>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal className="mb-16">
          <p className="chapter-label mb-6">{t("about.previously")}</p>
          <StaggerContainer className="space-y-6">
            {experience.map((exp) => (
              <StaggerItem key={exp.company}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-medium">{exp.company}</h3>
                    <p
                      className="text-sm text-[var(--muted)]"
                      style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
                    >
                      {exp.role[lang]}
                    </p>
                  </div>
                  <p className="mono text-xs text-[var(--gray-400)] shrink-0">
                    {exp.period}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <p className="chapter-label mb-6">{t("about.education")}</p>
          <StaggerContainer className="space-y-6">
            {education.map((edu) => (
              <StaggerItem key={edu.school}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-medium">
                      {edu.school}
                      {edu.current && (
                        <span className="text-[var(--gray-400)] text-sm ml-2">
                          ←
                        </span>
                      )}
                    </h3>
                    <p
                      className="text-sm text-[var(--muted)]"
                      style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
                    >
                      {edu.degree[lang]}
                    </p>
                  </div>
                  <p className="mono text-xs text-[var(--gray-400)] shrink-0">
                    {edu.period}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </section>
  );
}
