"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

// Dynamically import 3D hero (no SSR)
const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursor.current) {
        cursor.current.style.left = e.clientX + "px";
        cursor.current.style.top = e.clientY + "px";
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + "px";
        ring.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor" ref={cursor} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* 3D Canvas */}
      <Hero3D />

      {/* Gradient overlays */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 30% 50%, rgba(123,47,255,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "200px",
        background: "linear-gradient(transparent, var(--bg))",
        pointerEvents: "none",
        zIndex: 2,
      }} />

      {/* Hero text */}
      <div style={{ position: "relative", zIndex: 3, maxWidth: "700px" }}>
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease 0.2s",
        }}>
          <p style={{
            fontFamily: "'Share Tech Mono'",
            fontSize: "0.8rem",
            color: "var(--cyan)",
            letterSpacing: "0.3em",
            marginBottom: "1.5rem",
          }}>
            <span style={{ color: "var(--magenta)" }}>{">"}</span>{" "}
            INITIALIZING PORTFOLIO_
            <span style={{ animation: "flicker 1s infinite" }}>|</span>
          </p>
        </div>

        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease 0.4s",
        }}>
          <h1
            className="glitch-text"
            data-text="DEVELOPER"
            style={{
              fontFamily: "'Orbitron'",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 900,
              lineHeight: 1,
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: "0.25rem",
            }}
          >
            DEVELOPER
          </h1>
          <h1 style={{
            fontFamily: "'Orbitron'",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            fontWeight: 900,
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px var(--cyan)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}>
            + ANALYST
          </h1>
        </div>

        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease 0.6s",
        }}>
          <p style={{
            fontFamily: "'Share Tech Mono'",
            color: "var(--muted)",
            fontSize: "0.9rem",
            lineHeight: "1.8",
            maxWidth: "500px",
            marginBottom: "2.5rem",
          }}>
            Data analyst and full stack developer — turning raw data 
            into intelligent applications. From SQL pipelines to 
            React frontends, I build the full picture.
          </p>
        </div>

        <div style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease 0.8s",
        }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-neon"
          >
            View Projects ↓
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-neon btn-neon-mag"
          >
            Let&apos;s Connect →
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        opacity: 0.5,
      }}>
        <span style={{ fontFamily: "'Share Tech Mono'", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--cyan)" }}>
          SCROLL
        </span>
        <div style={{
          width: "1px",
          height: "50px",
          background: "linear-gradient(var(--cyan), transparent)",
          animation: "float 2s ease-in-out infinite",
        }} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Ambient overlays */}
      <div className="noise" />
      <div className="scanlines" />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
