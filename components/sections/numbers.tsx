"use client";

import { useEffect, useRef } from "react";

const STATS = [
  {
    num: 89.4,
    suffix: "%",
    label: "of the org used AI tools",
    context:
      "High adoption, but only 6.4% reported positive sentiment. 64.6% neutral, 28.9% actively frustrated. People were using AI  -  just not getting value from it.",
  },
  {
    num: 34.7,
    suffix: "%",
    label: "cited handoff pain as the #1 barrier",
    context:
      "393 separate mentions across survey responses. The top blocker wasn\u2019t tool quality  -  it was coordination between functions.",
  },
  {
    num: 77,
    suffix: "%",
    label: "of PMs manually uploaded docs before every AI session",
    context:
      "Meeting transcripts, project briefs, past decisions, stakeholder lists  -  assembled from scratch at the start of each conversation, then gone.",
  },
  {
    num: 4.5,
    suffix: "/10",
    label: "Design AI quality score  -  lowest of any function",
    context:
      "Without design system context (TPL tokens, components, brand rules), AI tools produced generic React output that required complete rebuilding.",
  },
  {
    num: 67,
    suffix: "%",
    label: "of PMs say context gets lost in handoffs",
    context:
      'The \u201cwhy\u201d behind decisions disappeared between every handoff. 32% \u201cHighly Agree.\u201d Researchers found insights, PMs made decisions  -  but neither carried forward to the next step.',
  },
];

function countUp(
  el: HTMLElement,
  target: number,
  suffix: string,
  duration = 1400
) {
  const start = performance.now();
  const isDecimal = target % 1 !== 0;

  function tick(now: number) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const current = target * ease;

    if (isDecimal) {
      el.textContent = current.toFixed(1) + suffix;
    } else {
      el.textContent = Math.round(current) + suffix;
    }

    if (p < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

export function Numbers() {
  const gridRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const nums =
            gridRef.current?.querySelectorAll<HTMLElement>(
              ".stat-num[data-target]"
            );
          nums?.forEach((el, i) => {
            const target = parseFloat(el.dataset.target ?? "0");
            const suffix = el.dataset.suffix ?? "";
            setTimeout(() => countUp(el, target, suffix), i * 80);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="numbers" className="section-dark w-full block">
      <div ref={gridRef} className="stats-grid">
        {/* Full-width intro cell */}
        <div
          className="stat-cell"
          style={{
            gridColumn: "1 / -1",
            background: "var(--bg-dark-alt)",
            padding: "40px 48px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            justifyContent: "center",
            borderRight: "none",
          }}
        >
          <span className="block mb-5 font-sans text-[10px] font-bold uppercase tracking-[0.20em] text-accent">
            Discovery Survey
          </span>
          <h2
            className="font-serif font-bold leading-[1.14] tracking-tight text-text-light"
            style={{ fontSize: "clamp(2rem, 3.8vw, 4.4rem)", marginBottom: 20 }}
          >
            By the <em className="italic text-accent">Numbers.</em>
          </h2>
          <p
            className="font-serif text-[14.5px] leading-[1.75]"
            style={{
              color: "rgba(240,237,231,0.70)",
              maxWidth: 680,
            }}
          >
            These numbers come from the org-wide Discovery survey (January 2026)
            across all XFun product functions  -  PMs, designers, engineers,
            researchers, and program managers.
          </p>
        </div>

        {/* Stat cells */}
        {STATS.map((stat) => (
          <div key={stat.label} className="stat-cell">
            <div
              className="stat-num"
              data-target={stat.num}
              data-suffix={stat.suffix}
            >
              {stat.num}
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-context">{stat.context}</div>
          </div>
        ))}

        {/* 6th cell  -  survey dashboard CTA */}
        <a
          href="/survey/app.html"
          target="_blank"
          rel="noopener noreferrer"
          className="stat-cell group no-underline"
          style={{ cursor: "pointer" }}
          title="View the full Discovery survey results"
        >
          {/* Survey dashboard thumbnail */}
          <div className="mb-5 rounded overflow-hidden">
            <img
              src="/survey-dashboard-thumb.png"
              alt="Survey dashboard preview"
              className="w-full h-auto opacity-85 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="stat-label group-hover:!text-accent transition-colors">
            Explore the full survey results →
          </div>
          <div className="stat-context">
            Interactive dashboard with donut charts, role breakdowns, and verbatim quotes from 47 respondents across all XFun functions.
          </div>
        </a>
      </div>
    </section>
  );
}
