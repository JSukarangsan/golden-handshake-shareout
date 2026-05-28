"use client";

import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  num: string;
  act: "case" | "design" | "context" | "synth";
}

interface NavGroup {
  label: string;
  color: string;
  items: NavItem[];
}

const NAV: NavGroup[] = [
  {
    label: "The Case",
    color: "",
    items: [
      { id: "hero", label: "Intro", num: "01", act: "case" },
      { id: "overview", label: "The Engagement", num: "02", act: "case" },
      { id: "numbers", label: "The Numbers", num: "03", act: "case" },
      { id: "diagnosis", label: "The Diagnosis", num: "04", act: "case" },
      { id: "three-bets", label: "Three Bets", num: "05", act: "case" },
    ],
  },
  {
    label: "Design Pilots",
    color: "#B37322",
    items: [
      { id: "design-pilot-intro", label: "Prototyping Pilots", num: "07", act: "design" },
      { id: "prototype-types", label: "Create / Make / Ship", num: "08", act: "design" },
      { id: "news-detail", label: "The Playground", num: "09", act: "design" },
      { id: "news-hud", label: "HUD Demo", num: "10", act: "design" },
      { id: "news-inside", label: "Inside", num: "11", act: "design" },
      { id: "napp-detail", label: "NAPP", num: "12", act: "design" },
      { id: "napp-capabilities", label: "New Capabilities", num: "13", act: "design" },
      { id: "napp-outcomes", label: "Native Code Bridge", num: "14", act: "design" },
      { id: "design-process", label: "Before & After", num: "15", act: "design" },
    ],
  },
  {
    label: "Context Kits",
    color: "#1A7B6A",
    items: [
      { id: "context-kit-intro", label: "Context as Infrastructure", num: "15", act: "context" },
      { id: "context-kit-how", label: "How It Works", num: "16", act: "context" },
      { id: "context-kit-skills", label: "Skills for PMs", num: "16b", act: "context" },
      { id: "context-kit-compare", label: "Before & After", num: "16c", act: "context" },
      { id: "context-kit-results", label: "Results", num: "17", act: "context" },
    ],
  },
  {
    label: "Synthesis",
    color: "#4A5568",
    items: [
      { id: "learnings", label: "Learnings + Metrics", num: "18", act: "synth" },
      { id: "opportunities", label: "What\u2019s Next", num: "19", act: "synth" },
    ],
  },
  {
    label: "Resources",
    color: "#4A5568",
    items: [
      { id: "resources", label: "All Resources", num: "20", act: "synth" },
    ],
  },
];

const ACT_COLORS: Record<string, string> = {
  case: "#D0021B",
  design: "#B37322",
  context: "#1A7B6A",
  synth: "#4A5568",
};

export function Sidebar() {
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const allItems = NAV.flatMap((g) => g.items);
    function handleKey(e: KeyboardEvent) {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();
      const idx = allItems.findIndex((item) => item.id === active);
      if (idx === -1) return;
      const next = e.key === "ArrowDown" ? allItems[idx + 1] : allItems[idx - 1];
      if (!next) return;
      document.getElementById(next.id)?.scrollIntoView({ behavior: "smooth" });
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  function switchTheme(t: string) {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }

  return (
    <aside className="fixed top-0 left-0 w-[196px] h-screen bg-sidebar-bg border-r border-sidebar-border z-50 flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="px-[22px] pt-7 pb-[22px] border-b border-sidebar-border">
        <div className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-accent mb-1.5">
          Engagement Recap
        </div>
        <div className="font-serif text-[13px] font-bold leading-tight text-text mb-0.5">
          Closing the Context Gap
        </div>
        <div className="font-sans text-[10px] text-text-muted tracking-wide">
          NYT × Summer Friday
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-5">
        {NAV.map((group) => (
          <div key={group.label}>
            <div
              className="px-[22px] pt-[18px] pb-2 font-sans text-[8px] font-bold uppercase tracking-[0.22em] text-text-muted/50 border-t border-sidebar-border mt-1.5 first:border-0 first:mt-0"
              style={group.color ? { color: group.color } : undefined}
            >
              {group.label}
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center gap-2.5 px-[22px] py-[9px] no-underline font-sans text-[10.5px] font-medium uppercase tracking-[0.09em] text-text-muted transition-colors hover:text-text ${
                      active === item.id ? "!text-text" : ""
                    }`}
                  >
                    <span
                      className={`w-[5px] h-[5px] rounded-full bg-border shrink-0 transition-all ${
                        active === item.id ? "scale-150" : ""
                      }`}
                      style={
                        active === item.id
                          ? { background: ACT_COLORS[item.act] || group.color }
                          : undefined
                      }
                    />
                    {item.label}
                    <span className="ml-auto text-[9px] text-text-muted/45">
                      {item.num}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

    </aside>
  );
}
