"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

// SVG path data for different approximation orders
const paths = {
  target: "M 20,80 Q 60,10 100,50 T 180,80 Q 220,110 260,60 T 340,80",
  first: "M 20,80 L 340,80", // Linear
  second: "M 20,80 Q 180,20 340,80", // Quadratic
  higher: "M 20,80 Q 60,15 100,50 T 180,75 Q 220,105 260,65 T 340,80", // Close to target
};

interface StageProps {
  active: boolean;
  label: string;
  sublabel: string;
}

function Stage({ active, label, sublabel }: StageProps) {
  return (
    <div className={`text-center transition-opacity duration-500 ${active ? "opacity-100" : "opacity-30"}`}>
      <div
        className={`w-3 h-3 rounded-full mx-auto mb-2 transition-colors duration-500 ${
          active ? "bg-[var(--foreground)]" : "bg-[var(--gray-300)]"
        }`}
      />
      <p className="mono text-xs mb-1">{label}</p>
      <p className="text-xs text-[var(--muted)]">{sublabel}</p>
    </div>
  );
}

export function TaylorExpansion() {
  const { t } = useI18n();
  const [currentStage, setCurrentStage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Auto-advance through stages when in view
  useEffect(() => {
    if (!isInView) {
      setCurrentStage(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, [isInView]);

  const getCurrentPath = () => {
    switch (currentStage) {
      case 0:
        return paths.first;
      case 1:
        return paths.first;
      case 2:
        return paths.second;
      case 3:
        return paths.higher;
      default:
        return paths.first;
    }
  };

  const stages = [
    { label: t("taylor.firstOrder"), sublabel: t("taylor.promptEng") },
    { label: t("taylor.firstOrder"), sublabel: t("taylor.promptEng") },
    { label: t("taylor.secondOrder"), sublabel: t("taylor.rlReasoning") },
    { label: t("taylor.higherOrder"), sublabel: t("taylor.mentalModels") },
  ];

  return (
    <div ref={ref} className="py-12">
      {/* Title */}
      <p className="mono text-xs text-[var(--muted)] text-center mb-8 tracking-wider">
        {t("taylor.title")}
      </p>

      {/* SVG Animation */}
      <div className="relative max-w-md mx-auto mb-10">
        <svg
          viewBox="0 0 360 120"
          className="w-full h-auto"
          style={{ overflow: "visible" }}
        >
          {/* Target curve (dashed) */}
          <motion.path
            d={paths.target}
            fill="none"
            stroke="var(--gray-300)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Approximation curve (solid, animated) */}
          <motion.path
            d={getCurrentPath()}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={currentStage}
          />

          {/* Labels */}
          <text
            x="350"
            y="85"
            fill="var(--gray-400)"
            fontSize="10"
            fontFamily="var(--font-mono)"
          >
            target
          </text>
        </svg>

        {/* Equation */}
        <p className="mono text-sm text-center mt-4 text-[var(--muted)]">
          f(x) ≈ a₀{currentStage >= 2 && " + a₁x"}{currentStage >= 3 && " + a₂x² + ..."}
        </p>
      </div>

      {/* Stage indicators */}
      <div className="flex justify-center gap-12 md:gap-16">
        <Stage
          active={currentStage === 1}
          label={t("taylor.firstOrder")}
          sublabel={t("taylor.promptEng")}
        />
        <Stage
          active={currentStage === 2}
          label={t("taylor.secondOrder")}
          sublabel={t("taylor.rlReasoning")}
        />
        <Stage
          active={currentStage === 3}
          label={t("taylor.higherOrder")}
          sublabel={t("taylor.mentalModels")}
        />
      </div>
    </div>
  );
}
