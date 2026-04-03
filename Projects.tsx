"use client";

const projects = [
  {
    id: "01",
    title: "Portfolio Site",
    description: "This very site — a 3D cyberpunk portfolio built with Next.js, React Three Fiber, and TypeScript. Deployed on Vercel.",
    tags: ["Next.js", "Three.js", "TypeScript", "Vercel"],
    tagColors: ["cyan", "mag", "purple", "cyan"],
    link: "https://github.com/JINM0RI/portfolio",
    live: "https://www.jinmori.me",
    type: "FULL STACK",
  },
  {
    id: "02",
    title: "Data Dashboard",
    description: "Interactive analytics dashboard with real-time charts, filters, and drill-down views. Placeholder — replace with your real project.",
    tags: ["Python", "Pandas", "React", "SQL"],
    tagColors: ["cyan", "purple", "mag", "cyan"],
    link: "https://github.com/JINM0RI",
    live: null,
    type: "DATA VIZ",
  },
  {
    id: "03",
    title: "ML Pipeline",
    description: "End-to-end machine learning pipeline with data ingestion, feature engineering, model training, and prediction API. Placeholder — replace with your real project.",
    tags: ["Python", "scikit-learn", "SQL", "FastAPI"],
    tagColors: ["purple", "cyan", "mag", "purple"],
    link: "https://github.com/JINM0RI",
    live: null,
    type: "ML / DATA",
  },
  {
    id: "04",
    title: "Full Stack App",
    description: "A full-stack web application with auth, database, and REST API. Placeholder — replace with your real project once it's live.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Node.js"],
    tagColors: ["cyan", "mag", "purple", "cyan"],
    link: "https://github.com/JINM0RI",
    live: null,
    type: "FULL STACK",
  },
];

const tagColorMap: Record<string, string> = {
  cyan: "tag-cyan",
  mag: "tag-mag",
  purple: "tag-purple",
};

export default function Projects() {
  return (
    <section id="projects">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1rem" }}>
        <p className="section-label">// my work</p>
        <h2 className="section-title" style={{ marginBottom: "1rem" }}>
          PROJECTS<span style={{ color: "var(--magenta)" }}>_</span>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "3.5rem", letterSpacing: "0.05em" }}>
          ↳ Real work lives at{" "}
          <a href="https://github.com/JINM0RI" target="_blank" rel="noreferrer"
            style={{ color: "var(--cyan)", textDecoration: "none" }}>
            github.com/JINM0RI
          </a>
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p) => (
            <article
              key={p.id}
              className="cyber-card"
              style={{ padding: "2rem", position: "relative" }}
            >
              {/* Top bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <span style={{
                  fontFamily: "'Orbitron'",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "rgba(0,245,255,0.07)",
                  lineHeight: 1,
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                }}>
                  {p.id}
                </span>
                <span className="tag tag-mag">{p.type}</span>
              </div>

              <h3 style={{
                fontFamily: "'Orbitron'",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "0.75rem",
                letterSpacing: "0.05em",
              }}>
                {p.title}
              </h3>

              <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                {p.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {p.tags.map((tag, i) => (
                  <span key={tag} className={`tag ${tagColorMap[p.tagColors[i]]}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href={p.link} target="_blank" rel="noreferrer" className="btn-neon"
                  style={{ fontSize: "0.7rem", padding: "0.5rem 1rem" }}>
                  ↗ Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-neon btn-neon-mag"
                    style={{ fontSize: "0.7rem", padding: "0.5rem 1rem" }}>
                    ↗ Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
