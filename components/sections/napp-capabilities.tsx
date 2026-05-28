"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { VideoCallout } from "@/components/ui/video-callout";

const DURATION = 6000;

const capabilities = [
  {
    num: "Capability 01",
    title: "Designing in Code",
    desc: "Designers go from Figma frame to interactive prototype using Claude Code \u2014 no engineering support needed. A brief, a screenshot, or a text prompt becomes a working app in hours.",
    image: "/Screenshot-2026-05-12-at-2.18.39PM.png",
    alt: "Interactive prototype with options panel",
  },
  {
    num: "Capability 02",
    title: "Design System Alignment",
    desc: "Storybook integration validates every prototype against TPL tokens. The first compatibility report showed 16 of 25 exact matches \u2014 designers see where they align and where they don\u2019t before engineering is involved.",
    image: "/Screenshot-2026-05-12-at-2.18.46PM.png",
    alt: "System status panel with design system controls",
  },
  {
    num: "Capability 03",
    title: "One-Click Deploy",
    desc: "Prototypes go from a designer\u2019s laptop to a shareable URL in one click. No Git knowledge, no engineering support. Stakeholders open a link and interact with the real thing.",
    image: "/Screenshot-2026-05-12-at-2.19.13PM.png",
    alt: "Playground explore page with shareable prototypes",
  },
];

export function NappCapabilities() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  function startCycle(idx: number) {
    if (timerRef.current) clearInterval(timerRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    setActive(idx);
    setProgress(0);
    startTimeRef.current = Date.now();

    function tick() {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
      if (elapsed < DURATION) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);

    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % capabilities.length;
        startTimeRef.current = Date.now();
        setProgress(0);
        function tick2() {
          const elapsed = Date.now() - startTimeRef.current;
          setProgress(Math.min((elapsed / DURATION) * 100, 100));
          if (elapsed < DURATION) {
            rafRef.current = requestAnimationFrame(tick2);
          }
        }
        rafRef.current = requestAnimationFrame(tick2);
        return next;
      });
    }, DURATION);
  }

  useEffect(() => {
    startCycle(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelect(idx: number) {
    startCycle(idx);
  }

  return (
    <section
      id="napp-capabilities"
      className="act-design w-full relative overflow-hidden"
      style={{ background: "var(--bg-dark-alt)", padding: "80px 0" }}
    >
      <div className="px-20 w-full">
        <span className="block mb-5 font-sans text-[10px] font-bold uppercase tracking-[0.20em]" style={{ color: "rgba(208,2,27,0.75)" }}>
          What We Built
        </span>
        <h2
          className="font-serif font-bold leading-[1.14] tracking-tight text-text-light mb-12"
          style={{ fontSize: "clamp(2rem, 3.8vw, 4.4rem)" }}
        >
          New capabilities<br />to close the <em className="italic" style={{ color: "var(--accent-sf)" }}>gap.</em>
        </h2>

        <div className="grid gap-0 items-start" style={{ gridTemplateColumns: "340px 1fr" }}>
          {/* Left: stacked capability items */}
          <div className="flex flex-col">
            {capabilities.map((cap, idx) => {
              const isActive = active === idx;
              return (
                <div
                  key={idx}
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => handleSelect(idx)}
                  style={{
                    padding: "28px 24px",
                    borderLeft: `3px solid ${isActive ? "#D4943A" : "transparent"}`,
                    opacity: isActive ? 1 : 0.45,
                    background: isActive ? "rgba(255,255,255,0.03)" : "transparent",
                  }}
                >
                  <div
                    className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] mb-2"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {cap.num}
                  </div>
                  <div
                    className="font-serif font-bold text-text-light leading-[1.2] mb-2.5"
                    style={{ fontSize: "1.15rem" }}
                  >
                    {cap.title}
                  </div>
                  {isActive && (
                    <>
                      <div
                        className="font-serif text-[13.5px] text-text-light/65 leading-[1.65]"
                      >
                        {cap.desc}
                      </div>
                      {/* Progress bar */}
                      <div
                        className="mt-3.5 rounded-sm overflow-hidden"
                        style={{ height: 2, background: "rgba(255,255,255,0.08)" }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${progress}%`,
                            background: "#D4943A",
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: cycling image */}
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ minHeight: 420, background: "rgba(255,255,255,0.03)" }}
          >
            {capabilities.map((cap, idx) => (
              <Image
                key={idx}
                src={cap.image}
                alt={cap.alt}
                width={1200}
                height={800}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{
                  objectPosition: "top left",
                  opacity: active === idx ? 1 : 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Video callout  -  TJ */}
        <VideoCallout
          src="https://www.loom.com/embed/814b8ea99e364be78ead93c0021c8eff"
          paddingBottom="56.669650850492395%"
          eyebrow="Watch the Walkthrough"
          title="Prototyping with AI end-to-end framework"
          description="Design system alignment, one-click deploy, and how prototypes become code branches engineers can work with."
        />
      </div>
    </section>
  );
}
