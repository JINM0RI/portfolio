"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "your@email.com"; // ← replace with your real email

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact">
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
        <p className="section-label" style={{ textAlign: "center" }}>// get in touch</p>
        <h2 className="section-title" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          LET&apos;S CONNECT<span style={{ color: "var(--cyan)" }}>_</span>
        </h2>

        <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "3.5rem", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
          Looking for a data analyst who can also build the app around the data? 
          Or a developer who understands the story behind the numbers? Let&apos;s talk.
        </p>

        {/* Email block */}
        <div className="cyber-card" style={{
          padding: "2.5rem",
          maxWidth: "600px",
          margin: "0 auto 2.5rem",
          textAlign: "left",
        }}>
          <p style={{ fontFamily: "'Share Tech Mono'", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>
            PRIMARY CHANNEL
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
            <span style={{ fontFamily: "'Orbitron'", fontSize: "1.1rem", color: "var(--cyan)" }}>
              {email}
            </span>
            <button
              onClick={copyEmail}
              className="btn-neon"
              style={{ fontSize: "0.65rem", padding: "0.5rem 1rem", whiteSpace: "nowrap" }}
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <a
            href="https://github.com/JINM0RI"
            target="_blank"
            rel="noreferrer"
            className="btn-neon"
          >
            ↗ GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="btn-neon btn-neon-mag"
          >
            ↗ LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="btn-neon"
            style={{ color: "#b07fff", borderColor: "#b07fff" }}
          >
            ↗ Email Me
          </a>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "6rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{ fontFamily: "'Orbitron'", fontWeight: 800, fontSize: "0.9rem" }}>
            <span style={{ color: "var(--cyan)" }}>&lt;</span>
            DEV
            <span style={{ color: "var(--cyan)" }}>/&gt;</span>
          </span>
          <span style={{ fontFamily: "'Share Tech Mono'", fontSize: "0.7rem", color: "var(--muted)" }}>
            © 2025 — Built with Next.js + Three.js
          </span>
        </div>
      </div>
    </section>
  );
}
