"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "DATA & ANALYTICS",
    color: "var(--cyan)",
    skills: [
      { name: "Python / Pandas / NumPy", level: 85 },
      { name: "SQL (PostgreSQL / MySQL)", level: 88 },
      { name: "Tableau / Power BI", level: 80 },
      { name: "Data Visualization", level: 82 },
      { name: "Statistical Analysis", level: 75 },
    ],
  },
  {
    category: "FULL STACK DEV",
    color: "var(--magenta)",
    skills: [
      { name: "React / Next.js", level: 72 },
      { name: "TypeScript / JavaScript", level: 70 },
      { name: "HTML / CSS / Tailwind", level: 78 },
      { name: "Node.js / REST APIs", level: 65 },
      { name: "Git / Version Control", level: 80 },
    ],
  },
];

const tools = [
  "Python", "SQL", "Pandas", "NumPy", "Tableau", "Power BI",
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Git", "VS Code", "Jupyter", "Excel", "Linux",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && fillRef.current) {
            setTimeout(() => {
              if (fillRef.current) {
                fillRef.current.style.width = `${level}%`;
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} style={{ marginBottom: "1.2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
        <span style={{ fontFamily: "'Share Tech Mono'", fontSize: "0.8rem", color: "var(--text)" }}>{name}</span>
        <span style={{ fontFamily: "'Share Tech Mono'", fontSize: "0.75rem", color }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: "4px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "2px",
        overflow: "hidden",
        position: "relative",
      }}>
        <div
          ref={fillRef}
          style={{
            height: "100%",
            width: "0%",
            background: `linear-gradient(90deg, ${color}, rgba(255,255,255,0.3))`,
            borderRadius: "2px",
            transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1)`,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="grid-bg">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1rem" }}>
        <p className="section-label">// capabilities</p>
        <h2 className="section-title" style={{ marginBottom: "3.5rem" }}>
          SKILL SET<span style={{ color: "var(--purple)" }}>_</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "4rem" }}>
          {skillGroups.map((group) => (
            <div key={group.category} className="cyber-card" style={{ padding: "2rem" }}>
              <h3 style={{
                fontFamily: "'Orbitron'",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: group.color,
                marginBottom: "2rem",
                borderBottom: `1px solid ${group.color}33`,
                paddingBottom: "0.75rem",
              }}>
                {group.category}
              </h3>
              {group.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={i * 100}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tools belt */}
        <div>
          <p style={{ fontFamily: "'Share Tech Mono'", fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>
            TOOLS & TECHNOLOGIES
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {tools.map((tool, i) => (
              <span
                key={tool}
                className="tag"
                style={{
                  color: i % 3 === 0 ? "var(--cyan)" : i % 3 === 1 ? "var(--magenta)" : "#b07fff",
                  borderColor: i % 3 === 0 ? "rgba(0,245,255,0.3)" : i % 3 === 1 ? "rgba(255,0,170,0.3)" : "rgba(123,47,255,0.3)",
                  padding: "0.4rem 0.9rem",
                  fontSize: "0.75rem",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
