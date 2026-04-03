"use client";
import { useState, useEffect } from "react";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(2, 3, 9, 0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,245,255,0.1)" : "none",
      }}
    >
      {/* Logo */}
      <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#fff", cursor: "none" }}>
        <span style={{ color: "var(--cyan)" }}>&lt;</span>
        DEV
        <span style={{ color: "var(--cyan)" }}>/&gt;</span>
      </div>

      {/* Links */}
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: active === link ? "var(--cyan)" : "var(--muted)",
                cursor: "none",
                transition: "color 0.2s ease",
                padding: "0.25rem 0",
                borderBottom: active === link ? "1px solid var(--cyan)" : "1px solid transparent",
              }}
            >
              {active === link && <span style={{ color: "var(--magenta)", marginRight: "0.3rem" }}>{">"}</span>}
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
