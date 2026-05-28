"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function NewsHud() {
  const [systemOpen, setSystemOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [phoneTheme, setPhoneTheme] = useState<"light" | "dark">("light");
  const [platform, setPlatform] = useState<"iOS" | "Android">("iOS");
  const [userType, setUserType] = useState<"Returning" | "New">("Returning");
  const [feedState, setFeedState] = useState<"Default" | "Personalized">("Default");
  const [calloutVisible, setCalloutVisible] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  const anyPanelOpen = systemOpen || optionsOpen;

  function closeAll() {
    setSystemOpen(false);
    setOptionsOpen(false);
  }

  function dismissCallout() {
    if (calloutVisible) setCalloutVisible(false);
  }

  // Dismiss callout on any interaction
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const handler = () => dismissCallout();
    el.addEventListener("click", handler);
    el.addEventListener("scroll", handler, true);
    return () => {
      el.removeEventListener("click", handler);
      el.removeEventListener("scroll", handler, true);
    };
  });

  const isDark = phoneTheme === "dark";

  return (
    <section
      id="news-hud"
      className="section-alt act-design w-full relative overflow-hidden"
      style={{ minHeight: "auto", padding: "64px 0" }}
    >
      <div className="px-20 w-full" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <span className="eyebrow block mb-5 font-sans text-[10px] font-bold uppercase tracking-[0.20em] text-accent-sf">
          Letting Stakeholders Experience the Product
        </span>
        <p className="font-serif text-[clamp(1rem,1.3vw,1.18rem)] font-normal leading-[1.78] text-text-muted max-w-[720px] mb-10">
          Every prototype ships with two heads-up displays that let stakeholders
          toggle between user states and scenarios — first-time vs. returning,
          default vs. personalized feed, light vs. dark, iOS vs. Android. No more
          creating multiple versions of the same prototype, or only being able to
          show the happy path. Share a URL that defaults to a specific state, and
          the reviewer sees exactly what you intend.
        </p>

        {/* Interactive playground embed */}
        <div
          ref={wrapRef}
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            minHeight: 740,
            background: "#E8E5DE",
            borderRadius: 12,
          }}
        >
          {/* Nav HUD pill (top-left) */}
          <div
            className="absolute top-4 left-4 z-20 inline-flex items-center gap-1 bg-white border border-[#D9D5CC] rounded-full p-1"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
          >
            <button className="w-7 h-7 rounded-full flex items-center justify-center text-[#6A6660] opacity-30 cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <div className="w-px h-5 bg-[#D9D5CC] mx-0.5" />
            <span className="px-2 font-sans text-xs font-semibold text-[#111]">Listen tab</span>
            <div className="w-px h-5 bg-[#D9D5CC] mx-0.5" />
            <button className="w-7 h-7 rounded-full flex items-center justify-center text-[#6A6660] opacity-30 cursor-default text-sm">&#8722;</button>
          </div>

          {/* Try it callout */}
          <div
            className={`absolute z-30 left-4 bottom-[88px] flex items-center transition-all duration-500 pointer-events-none ${
              calloutVisible ? "opacity-100" : "opacity-0 translate-y-2.5"
            }`}
          >
            <div
              className="flex items-center gap-2.5 bg-[#FFF8E1] border-2 border-[#F9D54A] rounded-[14px] px-[18px] py-3.5 font-sans text-[13px] font-bold text-[#111] whitespace-nowrap"
              style={{ boxShadow: "0 6px 28px rgba(0,0,0,0.12)" }}
            >
              <span className="text-[40px] leading-none animate-[pgPoint_1.2s_ease-in-out_infinite]">
                &#x1F447;
              </span>
              <span className="flex flex-col">
                Try the Playground UI
                <span className="font-normal text-[11.5px] text-[#6A6660]">
                  Scroll, toggle options, open panels
                </span>
              </span>
            </div>
          </div>

          {/* System chip (bottom-left) */}
          <div
            className="absolute bottom-6 left-6 z-20 flex flex-col gap-1.5 items-start transition-opacity"
            style={{ opacity: systemOpen ? 0 : 1 }}
          >
            <span className="font-sans text-[9px] font-bold tracking-[0.16em] uppercase text-[#9A958E] pl-1.5">System</span>
            <div
              className="inline-flex items-center gap-2.5 bg-white border border-[#D9D5CC] rounded-xl px-3.5 py-2.5 cursor-pointer transition-shadow hover:border-[#B5B0A8]"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)", maxWidth: 220 }}
              onClick={() => { setSystemOpen(true); setOptionsOpen(false); }}
            >
              <span className="text-base shrink-0">{isDark ? "\u263E" : "\u263C"}</span>
              <span className="flex flex-col gap-0.5 min-w-0">
                <span className="font-sans text-[12.5px] font-semibold text-[#111] whitespace-nowrap">{platform}</span>
                <span className="inline-block font-sans text-[10px] font-semibold px-2 py-0.5 bg-[#F5F4F0] rounded-full text-[#6A6660] whitespace-nowrap mt-0.5">
                  {isDark ? "Dark mode" : "Light mode"}
                </span>
              </span>
            </div>
          </div>

          {/* Options chip (bottom-right) */}
          <div
            className="absolute bottom-6 right-6 z-20 flex flex-col gap-1.5 items-end transition-opacity"
            style={{ opacity: optionsOpen ? 0 : 1 }}
          >
            <span className="font-sans text-[9px] font-bold tracking-[0.16em] uppercase text-[#9A958E]">Options</span>
            <div
              className="inline-flex items-center gap-2.5 bg-white border border-[#D9D5CC] rounded-xl px-3.5 py-2.5 cursor-pointer transition-shadow hover:border-[#B5B0A8]"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)", maxWidth: 220 }}
              onClick={() => { setOptionsOpen(true); setSystemOpen(false); }}
            >
              <span className="text-base shrink-0">&#9881;</span>
              <span className="flex flex-col gap-0.5 min-w-0">
                <span className="font-sans text-[12.5px] font-semibold text-[#111] whitespace-nowrap">{userType}</span>
                <span className="font-sans text-[11px] text-[#6A6660] whitespace-nowrap">First-time UX</span>
                <span className="inline-block font-sans text-[10px] font-semibold px-2 py-0.5 bg-[#F5F4F0] rounded-full text-[#6A6660] whitespace-nowrap mt-0.5">
                  4 more options
                </span>
              </span>
            </div>
          </div>

          {/* Backdrop */}
          <div
            className={`absolute inset-0 z-[150] rounded-xl transition-opacity ${
              anyPanelOpen ? "bg-black/[.08] opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={closeAll}
          />

          {/* System slide panel (left) */}
          <div
            className={`absolute top-0 left-0 w-[300px] h-full bg-white z-[200] flex flex-col overflow-y-auto transition-transform duration-300 ${
              systemOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ boxShadow: systemOpen ? "0 0 60px rgba(0,0,0,0.15)" : "none", scrollbarWidth: "none" }}
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-[#D9D5CC] sticky top-0 bg-white z-10">
              <span className="font-sans text-sm font-bold text-[#111]">System status</span>
              <button className="text-[#6A6660] hover:text-[#111] text-base p-1 cursor-pointer bg-transparent border-0" onClick={closeAll}>&#10005;</button>
            </div>
            <div className="p-5 flex flex-col gap-5">
              <div>
                <div className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#6A6660] mb-2">Appearance</div>
                <HudRow label="Theme">
                  <SegControl options={["Light", "Dark"]} value={isDark ? "Dark" : "Light"} onChange={(v) => setPhoneTheme(v === "Dark" ? "dark" : "light")} />
                </HudRow>
                <HudRow label="Platform">
                  <SegControl options={["iOS", "Android"]} value={platform} onChange={(v) => setPlatform(v as "iOS" | "Android")} />
                </HudRow>
              </div>
              <div className="opacity-35 pointer-events-none">
                <HudRow label="Reduced motion"><FakeToggle /></HudRow>
              </div>
              <div className="opacity-35 pointer-events-none">
                <div className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#6A6660] mb-2">State overrides</div>
                <HudRow label="Loading"><FakeToggle /></HudRow>
                <HudRow label="Error"><FakeToggle /></HudRow>
                <HudRow label="Empty"><FakeToggle /></HudRow>
              </div>
              <div className="opacity-35 pointer-events-none">
                <div className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#6A6660] mb-2">Network</div>
                <HudRow label="Offline"><FakeToggle /></HudRow>
              </div>
              <div className="opacity-35 pointer-events-none">
                <div className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#6A6660] mb-2">Engineering</div>
                <div className="flex items-center justify-between gap-3 min-h-8">
                  <div>
                    <span className="font-sans text-[13px] text-[#111] font-medium">Inspect</span>
                    <br />
                    <span className="font-sans text-[11.5px] text-[#6A6660]">9 notes</span>
                  </div>
                  <FakeToggle />
                </div>
              </div>
              <p className="font-sans text-[11.5px] leading-[1.5] text-[#9A958E]">
                Anything you set here is in the URL — share the link to share the setup.
              </p>
            </div>
          </div>

          {/* Options slide panel (right) */}
          <div
            className={`absolute top-0 right-0 w-[300px] h-full bg-white z-[200] flex flex-col overflow-y-auto transition-transform duration-300 ${
              optionsOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ boxShadow: optionsOpen ? "0 0 60px rgba(0,0,0,0.15)" : "none", scrollbarWidth: "none" }}
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-[#D9D5CC] sticky top-0 bg-white z-10">
              <span className="font-sans text-sm font-bold text-[#111]">Options</span>
              <button className="text-[#6A6660] hover:text-[#111] text-base p-1 cursor-pointer bg-transparent border-0" onClick={closeAll}>&#10005;</button>
            </div>
            <div className="p-5 flex flex-col gap-5">
              <p className="font-sans text-[12.5px] leading-[1.55] text-[#6A6660]">
                Per-prototype controls declared by the designer. Configurations are URL-encoded so links are shareable.
              </p>
              <div>
                <div className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#6A6660] mb-2">First-time UX</div>
                <p className="font-sans text-[11.5px] leading-[1.45] text-[#9A958E] mb-1">Use &apos;New&apos; to front onboarding before the tab feed.</p>
                <RadioList options={["Returning", "New"]} value={userType} onChange={(v) => setUserType(v as "Returning" | "New")} />
              </div>
              <div>
                <div className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#6A6660] mb-2">Feed state</div>
                <p className="font-sans text-[11.5px] leading-[1.45] text-[#9A958E] mb-1">Default means no follows; personalized means follows + listening history.</p>
                <RadioList options={["Default feed", "Personalized feed"]} value={feedState === "Default" ? "Default feed" : "Personalized feed"} onChange={(v) => setFeedState(v.startsWith("Default") ? "Default" : "Personalized")} />
              </div>
              <div className="opacity-35 pointer-events-none">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#6A6660] mb-1">Pinned item</div>
                    <p className="font-sans text-[11.5px] leading-[1.45] text-[#9A958E]">Top-of-feed promo module.</p>
                  </div>
                  <FakeToggle on />
                </div>
              </div>
              <div className="opacity-35 pointer-events-none">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#6A6660] mb-1">Shows carousel</div>
                    <p className="font-sans text-[11.5px] leading-[1.45] text-[#9A958E]">Colorful vertical-clip rail.</p>
                  </div>
                  <FakeToggle on />
                </div>
              </div>
              <div className="opacity-35 pointer-events-none">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-[#6A6660] mb-1">Audio-only carousel</div>
                    <p className="font-sans text-[11.5px] leading-[1.45] text-[#9A958E]">Package for shows without video.</p>
                  </div>
                  <FakeToggle />
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="shrink-0 relative z-[2]">
            <div
              className={`overflow-hidden relative ${isDark ? "pg-dark" : ""}`}
              style={{
                width: 375,
                height: 780,
                borderRadius: 48,
                border: "10px solid #1a1a1a",
                boxShadow: "0 16px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.10)",
                background: isDark ? "#1a1a1a" : "#fff",
              }}
            >
              {/* Dynamic Island */}
              <div
                className="absolute top-3.5 left-1/2 -translate-x-1/2 z-10"
                style={{ width: 120, height: 34, background: "#000", borderRadius: 20 }}
              />

              {/* Screen */}
              <div
                className="w-full h-full overflow-y-auto overflow-x-hidden"
                style={{ background: isDark ? "#1a1a1a" : "#fff", scrollbarWidth: "none" }}
              >
                {/* Status bar */}
                <div
                  className="sticky top-0 z-[5] flex items-center justify-between px-6 pt-3.5 pb-2.5 font-[-apple-system,sans-serif] text-sm font-semibold"
                  style={{ background: isDark ? "#1a1a1a" : "#fff", color: isDark ? "#E8E4DC" : "inherit" }}
                >
                  <span>9:41</span>
                  <div className="flex gap-1.5 items-center" style={{ color: isDark ? "#E8E4DC" : "inherit" }}>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="0.5" /><rect x="4.5" y="5" width="3" height="7" rx="0.5" /><rect x="9" y="2" width="3" height="10" rx="0.5" /><rect x="13.5" y="0" width="2.5" height="12" rx="0.5" /></svg>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M1 8.5C3.5 5 6.5 3 8 3s4.5 2 7 5.5" /><path d="M3.5 8.5c1.5-2 3-3 4.5-3s3 1 4.5 3" /><circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" /></svg>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="currentColor"><rect x="0" y="1" width="19" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1" /><rect x="19.5" y="4" width="2" height="4" rx="0.5" /><rect x="1.5" y="2.5" width="16" height="7" rx="1" /></svg>
                  </div>
                </div>

                {/* Onboarding overlay */}
                {userType === "New" && (
                  <div
                    className="absolute inset-0 z-[15] flex flex-col items-center justify-center px-8 py-12 text-center"
                    style={{ background: isDark ? "#1a1a1a" : "#fff", borderRadius: 38, color: isDark ? "#E8E4DC" : "inherit" }}
                  >
                    <div
                      className="flex items-center justify-center mb-6 text-[28px]"
                      style={{ width: 64, height: 64, borderRadius: 16, background: isDark ? "#2a2a2a" : "#F5F4F0" }}
                    >
                      &#127911;
                    </div>
                    <h3 className="font-serif text-2xl font-bold leading-[1.2] mb-3">Welcome to<br />NYT Audio</h3>
                    <p className="font-serif text-sm leading-[1.55] mb-8" style={{ color: isDark ? "#787470" : "#6A6660" }}>
                      Follow your favorite shows to build a personalized feed. We&apos;ll surface new episodes the moment they drop.
                    </p>
                    <div
                      className="font-sans text-sm font-semibold px-8 py-3 rounded-full"
                      style={{ background: isDark ? "#E8E4DC" : "#111", color: isDark ? "#1a1a1a" : "#fff" }}
                    >
                      Choose your shows
                    </div>
                    <div className="font-sans text-xs font-medium mt-4" style={{ color: "#6A6660" }}>
                      Skip for now
                    </div>
                  </div>
                )}

                {/* Roster */}
                <div className="py-3.5 pb-4" style={{ borderBottom: `1px solid ${isDark ? "#333" : "#E5E2DB"}` }}>
                  <div className="flex gap-2.5 px-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                    {[
                      { src: "/ezra.png", alt: "The Ezra Klein Show", following: true },
                      { src: "/popcast.png", alt: "Popcast", following: true },
                      { src: "/hard-fork.png", alt: "Hard Fork", following: false },
                      { src: "/the-interview.png", alt: "The Interview", following: false },
                      { src: "/interesting-times.png", alt: "Interesting Times", following: false },
                      { src: "/the-opinions.png", alt: "The Opinions", following: false },
                    ].map((show) => (
                      <div key={show.alt} className="relative shrink-0">
                        <Image src={show.src} alt={show.alt} width={64} height={64} className="rounded object-cover bg-[#E8E5DE]" style={{ width: 64, height: 64 }} />
                        {feedState === "Personalized" && show.following && (
                          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 font-sans text-[8px] font-bold uppercase tracking-[0.05em] text-[#6A6660] whitespace-nowrap">
                            Following
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* For You header */}
                {feedState === "Personalized" && (
                  <div className="px-4 pt-3.5 font-sans text-[10px] font-bold tracking-[0.12em] uppercase" style={{ color: isDark ? "#787470" : "#6A6660" }}>
                    Curated for you
                  </div>
                )}

                {/* Pinned Item */}
                <div className="overflow-hidden" style={{ maxHeight: 500 }}>
                  <Image src="/ezra.jpg" alt="Inside the Five Days That Remade the Supreme Court" width={375} height={211} className="w-full block" style={{ aspectRatio: "16/9", objectFit: "cover" }} />
                  <div className="relative -mt-[180px] px-4 pb-3.5 pt-[60px] text-white" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 60%, transparent)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/ezra.png" alt="The Daily" width={28} height={28} className="rounded-[3px] object-cover" style={{ width: 28, height: 28 }} />
                      <div>
                        <div className="font-serif text-sm font-bold text-white">The Daily <span className="text-white/50">&#8250;</span></div>
                        <div className="font-sans text-[10px] font-medium tracking-[0.08em] uppercase text-white/60">New episode today</div>
                      </div>
                    </div>
                    <div className="font-serif text-xl font-bold leading-[1.2] text-white mb-2">Inside the Five Days That Remade the Supreme Court</div>
                    <div className="font-serif text-[13px] leading-[1.5] text-white/75 mb-2.5">Secret memos obtained by The New York Times illuminate the origins of the court&apos;s now-routine shadow docket rulings.</div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[9px] font-bold tracking-[0.1em] uppercase text-white/50">&#128204; Pinned</span>
                      <span className="text-white/40 text-lg tracking-widest">&middot;&middot;&middot;</span>
                    </div>
                  </div>
                </div>

                {/* Show: Ezra Klein */}
                <div style={{ borderBottom: `1px solid ${isDark ? "#333" : "#E5E2DB"}` }}>
                  <div className="flex items-center gap-3 px-5 pt-4 pb-3">
                    <Image src="/ezra.png" alt="The Ezra Klein Show" width={38} height={38} className="rounded-[3px] object-cover shrink-0" style={{ width: 38, height: 38, background: "#F5F4F0" }} />
                    <div>
                      <div className="font-serif text-lg font-bold leading-[1.15]" style={{ color: isDark ? "#E8E4DC" : "#111" }}>
                        The Ezra Klein Show <span style={{ fontWeight: 400, color: "#6A6660" }}>&#8250;</span>
                      </div>
                      <div className="font-sans text-[11px] font-medium tracking-[0.08em] uppercase" style={{ color: isDark ? "#787470" : "#6A6660", marginTop: 2 }}>New episode today</div>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="rounded-md overflow-hidden mb-3" style={{ aspectRatio: "16/9" }}>
                      <Image src="/ezra.jpg" alt="Reckoning With Israel's One-State Reality" width={375} height={211} className="w-full h-full object-cover block" />
                    </div>
                    <div className="font-serif text-lg font-bold leading-[1.25] mb-1.5" style={{ color: isDark ? "#E8E4DC" : "#111" }}>
                      Reckoning With Israel&apos;s &apos;One-State Reality&apos;
                    </div>
                    <div className="font-serif text-[13px] leading-[1.55] mb-2.5" style={{ color: isDark ? "#787470" : "#6A6660" }}>
                      The political scientists Shibley Telhami and Marc Lynch discuss Israel&apos;s continued expansion into the West Bank, Gaza and Lebanon.
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: isDark ? "#787470" : "#6A6660" }}>1 HR 30 MIN</span>
                      <span style={{ color: "#6A6660", fontSize: 16, letterSpacing: 2, cursor: "pointer" }}>&middot;&middot;&middot;</span>
                    </div>
                  </div>
                </div>

                {/* Show: Popcast */}
                <div style={{ borderBottom: `1px solid ${isDark ? "#333" : "#E5E2DB"}` }}>
                  <div className="flex items-center gap-3 px-5 pt-4 pb-3">
                    <Image src="/popcast.png" alt="Popcast" width={38} height={38} className="rounded-[3px] object-cover shrink-0" style={{ width: 38, height: 38, background: "#F5F4F0" }} />
                    <div>
                      <div className="font-serif text-lg font-bold leading-[1.15]" style={{ color: isDark ? "#E8E4DC" : "#111" }}>
                        Popcast <span style={{ fontWeight: 400, color: "#6A6660" }}>&#8250;</span>
                      </div>
                      <div className="font-sans text-[11px] font-medium tracking-[0.08em] uppercase" style={{ color: isDark ? "#787470" : "#6A6660", marginTop: 2 }}>New episode today</div>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="rounded-md overflow-hidden mb-3" style={{ aspectRatio: "16/9" }}>
                      <Image src="/popcast.jpg" alt="When the Album Cycle Becomes the Show" width={375} height={211} className="w-full h-full object-cover block" />
                    </div>
                    <div className="font-serif text-lg font-bold leading-[1.25] mb-1.5" style={{ color: isDark ? "#E8E4DC" : "#111" }}>
                      When the Album Cycle Becomes the Show
                    </div>
                    <div className="font-serif text-[13px] leading-[1.55] mb-2.5" style={{ color: isDark ? "#787470" : "#6A6660" }}>
                      Jon Caramanica and the team on the new pop-star playbook — drops, residencies, documentaries, and the increasingly thin line between releasing music and living the album.
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: isDark ? "#787470" : "#6A6660" }}>1 HR 2 MIN</span>
                      <span style={{ color: "#6A6660", fontSize: 16, letterSpacing: 2, cursor: "pointer" }}>&middot;&middot;&middot;</span>
                    </div>
                  </div>
                </div>

                <div style={{ height: 80 }} />

                {/* Bottom nav — iOS */}
                {platform === "iOS" && (
                  <div
                    className="sticky bottom-3.5 mx-4 h-[60px] px-2 flex items-stretch justify-around z-10 border rounded-full"
                    style={{
                      background: isDark ? "rgba(30,30,30,0.85)" : "rgba(255,255,255,0.80)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      borderColor: isDark ? "#333" : "#E5E2DB",
                    }}
                  >
                    <NavTab label="Home" icon={<span className="font-serif italic font-bold text-base leading-none">T</span>} isDark={isDark} />
                    <NavTab label="Watch" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 9l5 3-5 3z" fill="currentColor" /></svg>} isDark={isDark} />
                    <NavTab label="Shows" active icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6l-6.1 3.4 1.5-6.8L2.2 9.5l6.9-.7z" /></svg>} isDark={isDark} />
                    <NavTab label="You" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>} isDark={isDark} />
                  </div>
                )}

                {/* Bottom nav — Android */}
                {platform === "Android" && (
                  <div
                    className="sticky bottom-0 h-16 flex items-stretch justify-around z-10 border-t"
                    style={{
                      background: isDark ? "#1a1a1a" : "#fff",
                      borderColor: isDark ? "#333" : "#E5E2DB",
                    }}
                  >
                    <NavTab label="Home" icon={<span className="font-serif italic font-bold text-base leading-none">T</span>} isDark={isDark} android />
                    <NavTab label="Watch" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 9l5 3-5 3z" fill="currentColor" /></svg>} isDark={isDark} android />
                    <NavTab label="Shows" active icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6l-6.1 3.4 1.5-6.8L2.2 9.5l6.9-.7z" /></svg>} isDark={isDark} android />
                    <NavTab label="You" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>} isDark={isDark} android />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Live site callout */}
        <div className="mt-6 flex items-center gap-4 p-5 rounded-lg border border-[#D9D5CC] bg-[#F6F4EF]">
          <div className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "rgba(179,115,34,0.10)", color: "#B37322" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <p className="font-serif text-[13.5px] leading-[1.6] text-text-muted flex-1">
            This is a partial demo of the Prototyping Playground — the HUD controls and a simplified feed. To view the full live prototype,{" "}
            <a href="https://summerfriday.co/nyt-mobile-playground" target="_blank" rel="noopener noreferrer" className="font-semibold text-text underline underline-offset-2 hover:text-accent-sf transition-colors">
              visit the live site →
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pgPoint {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(6px) rotate(0deg); }
        }
      `}</style>
    </section>
  );
}

/* ── Sub-components ── */

function NavTab({ label, icon, active, isDark, android }: { label: string; icon: React.ReactNode; active?: boolean; isDark: boolean; android?: boolean }) {
  const color = active ? (isDark ? "#E8E4DC" : "#111") : (isDark ? "#787470" : "#6A6660");
  return (
    <button
      className="bg-transparent border-0 px-2 flex flex-col items-center justify-center gap-0.5 flex-1 relative cursor-default"
      style={{ color }}
    >
      {active && (
        <span
          className="absolute rounded-full z-[-1]"
          style={android
            ? { top: 8, left: "50%", transform: "translateX(-50%)", width: 56, height: 28, background: isDark ? "#2a2a2a" : "#E8E5DE", borderRadius: 999 }
            : { inset: "6px 0", background: isDark ? "#2a2a2a" : "#F5F4F0", borderRadius: 999 }
          }
        />
      )}
      {icon}
      <span className="font-sans text-[10px] font-semibold">{label}</span>
    </button>
  );
}

function HudRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 min-h-8 mb-2">
      <span className="font-sans text-[13px] text-[#111] font-medium">{label}</span>
      {children}
    </div>
  );
}

function SegControl({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="inline-flex border border-[#D9D5CC] rounded-md overflow-hidden">
      {options.map((opt) => (
        <button
          key={opt}
          className={`px-3.5 py-1.5 font-sans text-[11.5px] font-semibold border-0 cursor-pointer transition-colors ${
            value === opt ? "bg-[#111] text-white" : "bg-transparent text-[#6A6660] hover:bg-[#F5F4F0]"
          }`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function RadioList({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-1">
      {options.map((opt) => (
        <div
          key={opt}
          className={`flex items-center gap-2.5 px-3.5 py-2 border rounded-md cursor-pointer font-sans text-[13px] font-medium text-[#111] transition-colors ${
            value === opt ? "bg-[#F5F4F0] border-[#B5B0A8] font-semibold" : "bg-white border-[#D9D5CC] hover:bg-[#F5F4F0] hover:border-[#B5B0A8]"
          }`}
          onClick={() => onChange(opt)}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{
              border: `1.5px solid ${value === opt ? "#111" : "#B5B0A8"}`,
              background: value === opt ? "#111" : "transparent",
            }}
          />
          {opt}
        </div>
      ))}
    </div>
  );
}

function FakeToggle({ on }: { on?: boolean }) {
  return (
    <div
      className="shrink-0 relative"
      style={{
        width: 40, height: 24, borderRadius: 999,
        background: on ? "#34C759" : "#D5D0C8",
      }}
    >
      <div
        className="absolute top-0.5 rounded-full bg-white"
        style={{
          width: 20, height: 20,
          left: on ? 18 : 2,
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}
