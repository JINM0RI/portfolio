"use client";
import { useEffect, useRef } from "react";

const facts = [
  { label: "ROLE", value: "Data Analyst & Full Stack Dev" },
  { label: "FOCUS", value: "Data-driven web applications" },
  { label: "TOOLS", value: "Python • SQL • React • Next.js" },
  { label: "STATUS", value: "Open to opportunities" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = ref.current?.querySelectorAll(".fade-in");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="grid-bg" ref={ref}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1rem" }}>
        <style>{`
          .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
          .fade-in.visible { opacity: 1; transform: translateY(0); }
          .fade-in:nth-child(2) { transition-delay: 0.1s; }
          .fade-in:nth-child(3) { transition-delay: 0.2s; }
          .fade-in:nth-child(4) { transition-delay: 0.3s; }
        `}</style>

        <div className="fade-in">
          <p className="section-label">// about me</p>
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>
            WHO AM I<span style={{ color: "var(--cyan)" }}>_</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left — bio */}
          <div>
            <div className="fade-in" style={{ marginBottom: "2rem" }}>
              <p style={{ lineHeight: "1.9", color: "var(--text)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                I operate at the intersection of{" "}
                <span style={{ color: "var(--cyan)" }}>data intelligence</span> and{" "}
                <span style={{ color: "var(--magenta)" }}>software engineering</span>. 
                I extract meaning from complex datasets and transform those insights into 
                full-stack applications that people actually use.
              </p>
              <p style={{ lineHeight: "1.9", color: "var(--text)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Recently leveled up into full-stack development — bridging the gap 
                between backend data pipelines and the interfaces that make data 
                accessible, visual, and actionable.
              </p>
              <p style={{ lineHeight: "1.9", color: "var(--muted)", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--cyan)" }}>&gt;</span> Currently building: data-powered web apps<br />
                <span style={{ color: "var(--cyan)" }}>&gt;</span> Learning: system design + cloud architecture<br />
                <span style={{ color: "var(--cyan)" }}>&gt;</span> Interests: ML pipelines, real-time dashboards
              </p>
            </div>

            <div className="fade-in">
              <a
                href="https://github.com/JINM0RI"
                target="_blank"
                rel="noreferrer"
                className="btn-neon"
              >
                ↗ GitHub Profile
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div className="fade-in">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="cyber-card"
                  style={{ padding: "1rem 1.5rem", display: "flex", gap: "1.5rem", alignItems: "center" }}
                >
                  <span style={{
                    fontFamily: "'Share Tech Mono'",
                    fontSize: "0.65rem",
                    color: "var(--cyan)",
                    letterSpacing: "0.2em",
                    minWidth: "80px"
                  }}>
                    {f.label}
                  </span>
                  <span style={{ color: "#fff", fontSize: "0.9rem" }}>{f.value}</span>
                </div>
              ))}
            </div>

            {/* Decorative terminal block */}
            <div className="cyber-card" style={{ padding: "1.5rem", marginTop: "1.5rem" }}>
              <p style={{ fontFamily: "'Share Tech Mono'", fontSize: "0.75rem", lineHeight: "1.8" }}>
                <span style={{ color: "var(--magenta)" }}>const</span>{" "}
                <span style={{ color: "var(--cyan)" }}>developer</span>{" "}
                <span style={{ color: "#fff" }}>=</span>{" "}
                <span style={{ color: "#fff" }}>{`{`}</span>
                <br />
                <span style={{ color: "var(--muted)", paddingLeft: "1.5rem" }}>
                  passion: <span style={{ color: "#b5e853" }}>"data + code"</span>,
                </span>
                <br />
                <span style={{ color: "var(--muted)", paddingLeft: "1.5rem" }}>
                  mode: <span style={{ color: "#b5e853" }}>"always building"</span>,
                </span>
                <br />
                <span style={{ color: "var(--muted)", paddingLeft: "1.5rem" }}>
                  coffee: <span style={{ color: "#ff9d45" }}>Infinity</span>
                </span>
                <br />
                <span style={{ color: "#fff" }}>{`}`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
