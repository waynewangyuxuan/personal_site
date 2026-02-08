"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ============================================
// DESIGN TOKENS
// ============================================
const easings = {
  smooth: [0.16, 1, 0.3, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  gentle: [0.4, 0, 0.2, 1],
};

const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
};

// ============================================
// ANIMATED CARD - Base interactive card
// ============================================
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
  expandable?: boolean;
  expandedContent?: ReactNode;
  hoverEffect?: "lift" | "glow" | "slide" | "none";
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  onClick,
  expandable = false,
  expandedContent,
  hoverEffect = "slide",
}: AnimatedCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hoverVariants: Record<string, Variants> = {
    lift: {
      rest: { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
      hover: { y: -4, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)" },
    },
    glow: {
      rest: { backgroundColor: "transparent" },
      hover: { backgroundColor: "var(--gray-100)" },
    },
    slide: {
      rest: { x: 0 },
      hover: { x: 6 },
    },
    none: {
      rest: {},
      hover: {},
    },
  };

  const handleClick = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
    onClick?.();
  };

  return (
    <motion.div
      className={`group ${expandable || onClick ? "cursor-pointer" : ""} ${className}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={hoverVariants[hoverEffect]}
      transition={{ duration: durations.slow, delay, ease: easings.smooth }}
      onClick={handleClick}
    >
      {children}

      {/* Expandable content */}
      <AnimatePresence>
        {expandable && isExpanded && expandedContent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: durations.normal, ease: easings.smooth }}
          >
            {expandedContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================
// TIMELINE ITEM - For experience entries
// ============================================
interface TimelineItemProps {
  period: string;
  title: string;
  subtitle: string;
  description?: string;
  index: number;
  isLast?: boolean;
  defaultExpanded?: boolean;
}

export function TimelineItem({
  period,
  title,
  subtitle,
  description,
  index,
  isLast = false,
  defaultExpanded = false,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <motion.div
      className="relative pl-8 cursor-pointer group"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: durations.slow, delay: 0.1 * index, ease: easings.smooth }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Timeline dot with pulse effect */}
      <motion.div
        className="absolute left-0 top-[6px] w-2.5 h-2.5 rounded-full border-2 border-[var(--gray-300)] bg-[var(--background)] group-hover:border-[var(--foreground)] transition-colors z-10"
        animate={{
          scale: isExpanded ? 1.2 : 1,
          borderColor: isExpanded ? "var(--foreground)" : undefined,
        }}
        transition={{ duration: durations.fast }}
      />

      {/* Pulse ring on hover */}
      <motion.div
        className="absolute left-[-3px] top-[3px] w-4 h-4 rounded-full border border-[var(--gray-200)] opacity-0 group-hover:opacity-100"
        animate={isExpanded ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] } : {}}
        transition={{ duration: 1.5, repeat: isExpanded ? Infinity : 0 }}
      />

      {/* Timeline line */}
      {!isLast && (
        <motion.div
          className="absolute left-[4px] top-5 w-[2px] bg-[var(--gray-200)]"
          initial={{ height: 0 }}
          animate={{ height: "calc(100% + 8px)" }}
          transition={{ duration: durations.slow, delay: 0.2 + 0.1 * index }}
        />
      )}

      {/* Content */}
      <div className="pb-6">
        {/* Header row */}
        <div className="flex items-baseline justify-between gap-4 mb-1">
          <motion.h4
            className="text-base font-medium group-hover:text-[var(--foreground)] transition-colors"
            whileHover={{ x: 2 }}
          >
            {title}
          </motion.h4>
          <span className="mono text-xs text-[var(--gray-400)] shrink-0">
            {period}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-[var(--muted)] mb-1">{subtitle}</p>

        {/* Expandable description */}
        <AnimatePresence>
          {isExpanded && description && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: durations.normal, ease: easings.smooth }}
            >
              <p className="text-sm text-[var(--foreground)] mt-3 leading-relaxed border-l-2 border-[var(--gray-200)] pl-3">
                {description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand indicator */}
        {description && (
          <motion.span
            className="inline-block text-xs text-[var(--gray-400)] mt-2"
            animate={{ opacity: isExpanded ? 0 : 1 }}
          >
            + more
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}

// ============================================
// BROWSER PREVIEW - Website preview mockup
// ============================================
interface BrowserPreviewProps {
  url: string;
  previewImage?: string;
  isHovered?: boolean;
}

export function BrowserPreview({ url, previewImage, isHovered = false }: BrowserPreviewProps) {
  const domain = new URL(url).hostname.replace('www.', '');

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative group/browser"
      animate={{
        y: isHovered ? -8 : 0,
        rotateY: isHovered ? -5 : 0,
        rotateX: isHovered ? 5 : 0,
      }}
      transition={{ duration: durations.normal, ease: easings.smooth }}
      style={{ perspective: 1000 }}
    >
      {/* Browser frame */}
      <div className="relative bg-[var(--gray-100)] rounded-xl overflow-hidden shadow-lg group-hover/browser:shadow-2xl transition-shadow duration-300">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[var(--gray-200)] border-b border-[var(--gray-300)]">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          {/* URL bar */}
          <div className="flex-1 mx-4">
            <div className="bg-[var(--background)] rounded-md px-3 py-1.5 text-xs text-[var(--muted)] mono flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              {domain}
            </div>
          </div>
        </div>

        {/* Preview area */}
        <div className="relative aspect-[16/10] bg-[var(--background)] overflow-hidden">
          {previewImage ? (
            <motion.img
              src={previewImage}
              alt={`${domain} preview`}
              className="w-full h-full object-cover object-top"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: durations.slow }}
            />
          ) : (
            /* Placeholder with live iframe preview attempt */
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--gray-100)] to-[var(--gray-200)]">
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--gray-300)] flex items-center justify-center"
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: durations.fast }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </motion.div>
                <p className="text-sm text-[var(--muted)] mono">{domain}</p>
              </div>
            </div>
          )}

          {/* Hover overlay with "Visit" prompt */}
          <motion.div
            className="absolute inset-0 bg-[var(--foreground)] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.9 : 0 }}
            transition={{ duration: durations.fast }}
          >
            <motion.div
              className="text-[var(--background)] flex items-center gap-3"
              animate={{ y: isHovered ? 0 : 10 }}
              transition={{ duration: durations.fast, delay: 0.05 }}
            >
              <span className="text-lg font-medium">Visit Site</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Reflection/shadow effect */}
      <motion.div
        className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-b from-[var(--gray-200)] to-transparent opacity-30 blur-sm rounded-full"
        animate={{ opacity: isHovered ? 0.5 : 0.3, scaleX: isHovered ? 1.05 : 1 }}
        transition={{ duration: durations.normal }}
      />
    </motion.a>
  );
}

// ============================================
// PROJECT CARD - Chapter-style project display
// ============================================
interface ProjectCardProps {
  chapter: number;
  name: string;
  question: string;
  description: string;
  tech: string[];
  url: string;
  previewImage?: string;
  index: number;
}

export function ProjectCard({
  chapter,
  name,
  question,
  description,
  tech,
  url,
  previewImage,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative py-12 px-8 -mx-8 rounded-2xl transition-colors duration-300 hover:bg-[var(--gray-50)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: durations.slow, delay: 0.1 * index, ease: easings.smooth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main layout: Content left, Preview right */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left side: Number + Content */}
        <div className="flex gap-8 md:gap-12 flex-1">
          {/* Large chapter number */}
          <motion.div
            className="hidden md:flex flex-col items-center shrink-0"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: durations.normal }}
          >
            <motion.span
              className="text-[80px] md:text-[100px] font-bold leading-none select-none"
              style={{
                fontFamily: "var(--font-display)",
                color: isHovered ? "var(--gray-300)" : "var(--gray-200)",
                transition: "color 0.3s ease"
              }}
            >
              {String(chapter).padStart(2, "0")}
            </motion.span>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            {/* Mobile chapter indicator */}
            <motion.p
              className="md:hidden chapter-label mb-4"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: durations.fast }}
            >
              {String(chapter).padStart(2, "0")}
            </motion.p>

            {/* Project name with underline effect */}
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4 relative inline-block"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: durations.fast, delay: 0.02 }}
            >
              {name}
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-[var(--foreground)]"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : 0 }}
                transition={{ duration: durations.normal, ease: easings.smooth }}
              />
            </motion.h3>

            {/* Question */}
            <motion.p
              className="text-base md:text-lg italic text-[var(--muted)] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: durations.fast, delay: 0.04 }}
            >
              &ldquo;{question}&rdquo;
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-[var(--foreground)] mb-5 leading-relaxed text-sm md:text-base"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: durations.fast, delay: 0.06 }}
            >
              {description}
            </motion.p>

            {/* Tech stack - pill style */}
            <motion.div
              className="flex flex-wrap gap-2"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: durations.fast, delay: 0.08 }}
            >
              {tech.map((t, i) => (
                <motion.span
                  key={t}
                  className="mono text-xs px-3 py-1 border border-[var(--gray-200)] text-[var(--muted)] rounded-full"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  whileHover={{
                    borderColor: "var(--foreground)",
                    color: "var(--foreground)",
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right side: Browser Preview */}
        <motion.div
          className="w-full lg:w-[340px] shrink-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, delay: 0.2 + 0.1 * index }}
        >
          <BrowserPreview
            url={url}
            previewImage={previewImage}
            isHovered={isHovered}
          />
        </motion.div>
      </div>
    </motion.article>
  );
}

// ============================================
// STAGGERED LIST - For any list of items
// ============================================
interface StaggeredListProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggeredList({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggeredListProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: durations.slow,
            delay: staggerDelay * i,
            ease: easings.smooth,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// REVEAL TEXT - Character by character reveal
// ============================================
interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  return (
    <motion.span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.02,
            ease: easings.smooth,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// ============================================
// SIGNATURE DIVIDER - Animated ——·——
// ============================================
interface SignatureDividerProps {
  className?: string;
}

export function SignatureDivider({ className = "" }: SignatureDividerProps) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-3 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: durations.slow, ease: easings.smooth }}
    >
      <motion.div
        className="w-10 h-[1px] bg-[var(--gray-300)]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: durations.normal, delay: 0.2 }}
        style={{ transformOrigin: "right" }}
      />
      <motion.span
        className="text-[var(--gray-300)] text-xs"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: durations.fast, delay: 0.4 }}
      >
        ·
      </motion.span>
      <motion.div
        className="w-10 h-[1px] bg-[var(--gray-300)]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: durations.normal, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}
