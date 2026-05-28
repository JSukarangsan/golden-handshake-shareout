import { Sidebar } from "@/components/ui/sidebar";
import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { Numbers } from "@/components/sections/numbers";
import { Diagnosis } from "@/components/sections/diagnosis";
import { ThreeBets } from "@/components/sections/three-bets";
import { DesignPilotIntro } from "@/components/sections/design-pilot-intro";
import { PrototypeTypes } from "@/components/sections/prototype-types";
import { NewsDetail } from "@/components/sections/news-detail";
import { NewsHud } from "@/components/sections/news-hud";
import { NewsInside } from "@/components/sections/news-inside";
import { NappDetail } from "@/components/sections/napp-detail";
import { NappCapabilities } from "@/components/sections/napp-capabilities";
import { NappOutcomes } from "@/components/sections/napp-outcomes";
import { DesignProcess } from "@/components/sections/design-process";
import { Section } from "@/components/ui/section";
import { Eyebrow, Display, DisplayMd, Lead, Rule } from "@/components/ui/typography";
import { ContextKitSkills } from "@/components/sections/context-kit-skills";
import { BeforeAfter } from "@/components/sections/before-after";
import { QuoteCard } from "@/components/ui/quote-card";
import { Learnings } from "@/components/sections/learnings";
import { Opportunities } from "@/components/sections/opportunities";
import { Close } from "@/components/sections/close";
import { Resources } from "@/components/sections/resources";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="ml-[196px]">
        {/* ── The Case ── */}
        <Hero />
        <Overview />
        <Numbers />
        <Diagnosis />
        <ThreeBets />

        {/* ── Design Pilots ── */}
        <DesignPilotIntro />
        <PrototypeTypes />
        <NewsDetail />
        <NewsHud />
        <NewsInside />
        <NappDetail />
        <NappCapabilities />
        <NappOutcomes />
        <DesignProcess />

        {/* ── Context Kits ── */}
        <Section
          id="context-kit-intro"
          variant="custom"
          act="context"
          style={{ background: "#1A7B6A" }}
        >
          <Eyebrow className="!text-white/55">Pilot 02 — Context Kits</Eyebrow>
          <Display className="!text-white">
            Context is<br />infrastructure —<br />and it&apos;s where your<br />
            advantage <em className="!text-[#A8E6CF]">compounds.</em>
          </Display>
          <Rule className="!bg-white/20" />
          <Lead className="!text-white/80">
            The competitive advantage isn&apos;t which AI tool you use — it&apos;s
            how your organization structures its context and teaches AI what good
            looks like. When tools know nothing about your design system, project
            decisions, or team conventions, every output is generic. Context
            isn&apos;t a prompt trick. It&apos;s infrastructure that makes every
            tool in the stack more effective.
          </Lead>
          <Lead className="mt-6 !text-white/80">
            Discovery surfaced the cost: 77% of PMs manually uploading documents
            before every AI session — 45 to 90 minutes of dead time, then the AI
            forgot everything for the next one. We built a context kit for the
            Cooking team: structured project files that load automatically at
            session start. Team roster, design system reference, decisions log,
            stakeholder map, distilled research — maintained by a context owner,
            updated weekly via a sync-context skill that proposes changes from
            meeting transcripts for human review.
          </Lead>

          {/* Video callout — Jon on context as infrastructure */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 flex items-center gap-6 p-6 rounded-lg border border-white/[.15] bg-white/[.05] no-underline group hover:border-white/[.25] transition-colors cursor-pointer"
          >
            <div className="w-[200px] h-[112px] rounded-md bg-white/[.08] shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div>
              <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-[#A8E6CF] mb-2">
                Watch the Walkthrough
              </div>
              <div className="font-serif text-[17px] font-bold text-white leading-[1.3] mb-1.5 group-hover:text-white transition-colors">
                Context as Infrastructure
              </div>
              <div className="font-serif text-[13px] text-white/50 leading-[1.55]">
                Why the competitive advantage isn&apos;t which AI tool you use — it&apos;s how your organization structures its context.
              </div>
            </div>
          </a>
        </Section>

        <Section id="context-kit-how" variant="alt" act="context" wrap="wide">
          <Eyebrow>The Architecture</Eyebrow>
          <DisplayMd>
            How Context Kits work:<br />
            from sources to every <em>tool.</em>
          </DisplayMd>
          <div className="mt-12 overflow-x-auto">
            <svg viewBox="0 0 1400 650" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", minWidth: 900 }}>
              <style>{`
                .cf-box{fill:var(--bg,#F6F4EF);stroke:var(--text,#111);stroke-opacity:.12;stroke-width:1.8}
                .cf-kit{fill:#1A7B6A;stroke:#147A63;stroke-width:2.5}
                .cf-gh{fill:var(--bg,#F6F4EF);stroke:var(--text,#111);stroke-opacity:.18;stroke-width:1.8}
                .cf-tile{fill:rgba(26,123,106,0.20);stroke:rgba(44,180,155,0.45);stroke-width:1.5}
                .cf-boxtitle{font-family:'Libre Franklin',sans-serif;font-weight:700;fill:var(--text,#111)}
                .cf-kittitle{font-family:'Libre Franklin',sans-serif;font-weight:700;fill:#fff}
                .cf-tile-t{font-family:'Libre Franklin',sans-serif;font-size:14px;font-weight:600;fill:#A8E6DA}
                .cf-tile-s{display:none}
                .cf-arrow{fill:none;stroke:var(--text,#111);stroke-opacity:.22;stroke-width:1.8;stroke-dasharray:6 4}
                .cf-albl{font-family:'Libre Franklin',sans-serif;font-size:11px;font-weight:600;fill:var(--text,#111);opacity:.5;letter-spacing:.03em}
                .cf-icon{fill:none;stroke:var(--text,#111);stroke-opacity:.35;stroke-width:1.8}
                .cf-tool{fill:var(--bg-alt,#EDEBE5);stroke:var(--text,#111);stroke-opacity:.1;stroke-width:1.2}
                .cf-tool-t{font-family:'Libre Franklin',sans-serif;font-size:9.5px;font-weight:600;fill:var(--text-muted,#6A6660)}
                .cf-role{font-family:'Libre Franklin',sans-serif;font-weight:700;fill:var(--text,#111)}
                .cf-ghbr{font-family:'Courier New',Courier,monospace;fill:var(--text,#111);opacity:.08}
                .cf-ghtitle{font-family:'Libre Franklin',sans-serif;font-weight:700;fill:var(--text,#111)}
              `}</style>
              <defs>
                <marker id="cfah" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
                  <polygon points="0 0,10 3.5,0 7" fill="var(--text,#111)" opacity=".2"/>
                </marker>
                <filter id="dotglow" x="-150%" y="-150%" width="400%" height="400%">
                  <feGaussianBlur stdDeviation="4" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
<path id="pa" d="M158 355 L225 355"/>
                <path id="pb" d="M625 110 C680 110,710 170,720 220"/>
                <path id="pc" d="M625 405 C680 405,710 320,720 280"/>
                <path id="pd" d="M980 245 L1060 245"/>
                <path id="pe" d="M850 375 L850 430"/>
                <path id="pf" d="M838 430 L838 375"/>
                <path id="pg" d="M980 505 L1055 505"/>
              </defs>

              {/* Mission Leads */}
              <rect x="5" y="240" width="155" height="230" className="cf-box" rx="4"/>
              <text x="82" y="274" textAnchor="middle" className="cf-boxtitle" style={{ fontSize: 14 }}>Mission Leads</text>
              <g className="cf-icon"><circle cx="82" cy="316" r="10"/><rect x="68" y="329" width="28" height="16" rx="6"/></g>
              <g className="cf-icon"><circle cx="82" cy="366" r="10"/><rect x="68" y="379" width="28" height="16" rx="6"/></g>
              <g className="cf-icon"><circle cx="82" cy="416" r="10"/><rect x="68" y="429" width="28" height="16" rx="6"/></g>

              {/* Systems of Record */}
              <rect x="225" y="5" width="400" height="210" className="cf-box" rx="4"/>
              <text x="425" y="38" textAnchor="middle" className="cf-boxtitle" style={{ fontSize: 15 }}>Systems of Record</text>
              <rect x="248" y="52" width="168" height="70" className="cf-tile" rx="5"/>
              <text x="332" y="92" textAnchor="middle" className="cf-tile-t">Glean</text>
              <rect x="428" y="52" width="168" height="70" className="cf-tile" rx="5"/>
              <text x="512" y="92" textAnchor="middle" className="cf-tile-t">Slack</text>
              <rect x="248" y="134" width="168" height="70" className="cf-tile" rx="5"/>
              <text x="332" y="174" textAnchor="middle" className="cf-tile-t">Jira</text>
              <rect x="428" y="134" width="168" height="70" className="cf-tile" rx="5"/>
              <text x="512" y="174" textAnchor="middle" className="cf-tile-t">Google Workspace</text>

              {/* Mission-level Context */}
              <rect x="225" y="262" width="400" height="300" className="cf-box" rx="4"/>
              <text x="425" y="296" textAnchor="middle" className="cf-boxtitle" style={{ fontSize: 15 }}>Mission-level Context</text>
              <rect x="248" y="314" width="168" height="56" className="cf-tile" rx="5"/>
              <text x="332" y="347" textAnchor="middle" className="cf-tile-t">How we work</text>
              <rect x="428" y="314" width="168" height="56" className="cf-tile" rx="5"/>
              <text x="512" y="347" textAnchor="middle" className="cf-tile-t">{"Goals & Strategy"}</text>
              <rect x="248" y="382" width="168" height="56" className="cf-tile" rx="5"/>
              <text x="332" y="415" textAnchor="middle" className="cf-tile-t">Eng Constraints</text>
              <rect x="428" y="382" width="168" height="56" className="cf-tile" rx="5"/>
              <text x="512" y="415" textAnchor="middle" className="cf-tile-t">{"People & Process"}</text>
              <rect x="248" y="450" width="168" height="56" className="cf-tile" rx="5"/>
              <text x="332" y="483" textAnchor="middle" className="cf-tile-t">Design Refs</text>
              <rect x="428" y="450" width="168" height="56" className="cf-tile" rx="5"/>
              <text x="512" y="483" textAnchor="middle" className="cf-tile-t">Evergreen Research</text>

              {/* Project Context Kit */}
              <rect x="720" y="105" width="260" height="270" className="cf-kit" rx="6"/>
              <text x="850" y="228" textAnchor="middle" className="cf-kittitle" style={{ fontSize: 26 }}>Project</text>
              <text x="850" y="262" textAnchor="middle" className="cf-kittitle" style={{ fontSize: 26 }}>Context Kit</text>

              {/* GitHub Repository */}
              <rect x="720" y="430" width="260" height="155" className="cf-gh" rx="4"/>
              <text x="740" y="528" className="cf-ghbr" style={{ fontSize: 50 }}>{"{"}</text>
              <text x="955" y="528" textAnchor="end" className="cf-ghbr" style={{ fontSize: 50 }}>{"}"}</text>
              <text x="850" y="500" textAnchor="middle" className="cf-ghtitle" style={{ fontSize: 16 }}>GitHub</text>
              <text x="850" y="522" textAnchor="middle" className="cf-ghtitle" style={{ fontSize: 16 }}>Repository</text>

              {/* PM */}
              <g className="cf-icon" transform="translate(1105,220)" style={{ strokeOpacity: .45, strokeWidth: 2 }}>
                <circle cx="0" cy="-16" r="12"/><rect x="-15" y="-1" width="30" height="18" rx="7"/>
              </g>
              <text x="1105" y="242" textAnchor="middle" className="cf-role" style={{ fontSize: 18 }}>PM</text>
              <image href="/claude.png" x="1150" y="193" width="36" height="36"/>

              {/* Project Team */}
              <rect x="1055" y="340" width="338" height="300" className="cf-box" rx="4"/>
              <text x="1224" y="374" textAnchor="middle" className="cf-boxtitle" style={{ fontSize: 16 }}>Project Team</text>
              {/* Eng */}
              <g className="cf-icon" transform="translate(1110,425)" style={{ strokeOpacity: .4, strokeWidth: 1.8 }}>
                <circle cx="0" cy="-10" r="9"/><rect x="-12" y="2" width="24" height="14" rx="5"/>
              </g>
              <text x="1148" y="432" className="cf-role" style={{ fontSize: 15 }}>Eng</text>
              <image href="/claude.png" x="1210" y="408" width="36" height="36"/>
              {/* Design */}
              <g className="cf-icon" transform="translate(1110,495)" style={{ strokeOpacity: .4, strokeWidth: 1.8 }}>
                <circle cx="0" cy="-10" r="9"/><rect x="-12" y="2" width="24" height="14" rx="5"/>
              </g>
              <text x="1148" y="502" className="cf-role" style={{ fontSize: 15 }}>Design</text>
              <image href="/figma.png" x="1213" y="477" width="20" height="30"/>
              <image href="/cursor.png" x="1300" y="477" width="36" height="36"/>
              {/* Analyst */}
              <g className="cf-icon" transform="translate(1110,565)" style={{ strokeOpacity: .4, strokeWidth: 1.8 }}>
                <circle cx="0" cy="-10" r="9"/><rect x="-12" y="2" width="24" height="14" rx="5"/>
              </g>
              <text x="1148" y="572" className="cf-role" style={{ fontSize: 15 }}>Analyst</text>
              <image href="/google.png" x="1210" y="547" width="36" height="36"/>
              <image href="/hex.png" x="1300" y="547" width="36" height="36"/>

              {/* Arrows */}
              <line x1="160" y1="355" x2="225" y2="355" className="cf-arrow" markerEnd="url(#cfah)"/>
              <text x="192" y="343" textAnchor="middle" className="cf-albl">Maintains</text>
              <path d="M625 110 C680 110,710 170,720 220" className="cf-arrow" markerEnd="url(#cfah)"/>
              <path d="M625 405 C680 405,710 320,720 280" className="cf-arrow" markerEnd="url(#cfah)"/>
              <line x1="980" y1="245" x2="1060" y2="245" className="cf-arrow" markerEnd="url(#cfah)"/>
              <text x="1020" y="233" textAnchor="middle" className="cf-albl">Owned by</text>
              <line x1="850" y1="375" x2="850" y2="430" className="cf-arrow" markerEnd="url(#cfah)"/>
              <line x1="838" y1="430" x2="838" y2="375" className="cf-arrow" markerEnd="url(#cfah)"/>
              <text x="875" y="408" className="cf-albl">Synched</text>
              <line x1="980" y1="505" x2="1055" y2="505" className="cf-arrow" markerEnd="url(#cfah)"/>
              <text x="1018" y="493" textAnchor="middle" className="cf-albl">Shared with</text>

              {/* Animated dots */}
              <circle r="3.5" fill="#1A7B6A" filter="url(#dotglow)" opacity=".75"><animateMotion dur="2.2s" repeatCount="indefinite" begin="0s"><mpath href="#pa"/></animateMotion></circle>
              <circle r="2.5" fill="#2ECC9B" filter="url(#dotglow)" opacity=".6"><animateMotion dur="2.2s" repeatCount="indefinite" begin="1.1s"><mpath href="#pa"/></animateMotion></circle>
              <circle r="3.5" fill="#1A7B6A" filter="url(#dotglow)" opacity=".75"><animateMotion dur="3.4s" repeatCount="indefinite" begin="0s"><mpath href="#pb"/></animateMotion></circle>
              <circle r="2.5" fill="#2ECC9B" filter="url(#dotglow)" opacity=".55"><animateMotion dur="3.4s" repeatCount="indefinite" begin="1.1s"><mpath href="#pb"/></animateMotion></circle>
              <circle r="3" fill="#1A7B6A" filter="url(#dotglow)" opacity=".65"><animateMotion dur="3.4s" repeatCount="indefinite" begin="2.2s"><mpath href="#pb"/></animateMotion></circle>
              <circle r="3.5" fill="#1A7B6A" filter="url(#dotglow)" opacity=".7"><animateMotion dur="3.2s" repeatCount="indefinite" begin="0.4s"><mpath href="#pc"/></animateMotion></circle>
              <circle r="2.5" fill="#2ECC9B" filter="url(#dotglow)" opacity=".55"><animateMotion dur="3.2s" repeatCount="indefinite" begin="1.5s"><mpath href="#pc"/></animateMotion></circle>
              <circle r="3" fill="#1A7B6A" filter="url(#dotglow)" opacity=".65"><animateMotion dur="3.2s" repeatCount="indefinite" begin="2.6s"><mpath href="#pc"/></animateMotion></circle>
              <circle r="3.5" fill="#1A7B6A" filter="url(#dotglow)" opacity=".75"><animateMotion dur="2.6s" repeatCount="indefinite" begin="0.3s"><mpath href="#pd"/></animateMotion></circle>
              <circle r="2.5" fill="#2ECC9B" filter="url(#dotglow)" opacity=".6"><animateMotion dur="2.6s" repeatCount="indefinite" begin="1.6s"><mpath href="#pd"/></animateMotion></circle>
              <circle r="3" fill="#1A7B6A" filter="url(#dotglow)" opacity=".7"><animateMotion dur="2.2s" repeatCount="indefinite" begin="0s"><mpath href="#pe"/></animateMotion></circle>
              <circle r="2.5" fill="#2ECC9B" filter="url(#dotglow)" opacity=".55"><animateMotion dur="2.2s" repeatCount="indefinite" begin="1.1s"><mpath href="#pe"/></animateMotion></circle>
              <circle r="3" fill="#1A7B6A" filter="url(#dotglow)" opacity=".7"><animateMotion dur="2.2s" repeatCount="indefinite" begin="0.5s"><mpath href="#pf"/></animateMotion></circle>
              <circle r="2.5" fill="#2ECC9B" filter="url(#dotglow)" opacity=".55"><animateMotion dur="2.2s" repeatCount="indefinite" begin="1.6s"><mpath href="#pf"/></animateMotion></circle>
              <circle r="3.5" fill="#1A7B6A" filter="url(#dotglow)" opacity=".75"><animateMotion dur="2.4s" repeatCount="indefinite" begin="0.2s"><mpath href="#pg"/></animateMotion></circle>
              <circle r="2.5" fill="#2ECC9B" filter="url(#dotglow)" opacity=".6"><animateMotion dur="2.4s" repeatCount="indefinite" begin="1.4s"><mpath href="#pg"/></animateMotion></circle>
            </svg>
          </div>

          {/* 3-up: how it works */}
          <div className="mt-12 grid grid-cols-3 gap-[1px] bg-border">
            <div className="bg-bg p-[36px_32px]">
              <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-green mb-3">
                01 — Sources
              </div>
              <div className="font-serif text-[15px] font-bold text-text mb-2">
                Context flows from systems of record
              </div>
              <div className="font-serif text-[13.5px] italic text-text-muted leading-[1.65]">
                Glean, Slack, Jira, Google Workspace — plus mission-level knowledge like team norms, engineering constraints, and evergreen research. The PM doesn&apos;t assemble this manually. It&apos;s already structured.
              </div>
            </div>
            <div className="bg-bg p-[36px_32px]">
              <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-green mb-3">
                02 — The Kit
              </div>
              <div className="font-serif text-[15px] font-bold text-text mb-2">
                A project kit owned by the PM
              </div>
              <div className="font-serif text-[13.5px] italic text-text-muted leading-[1.65]">
                The kit lives in GitHub and syncs automatically. It contains the project&apos;s decisions log, stakeholder map, design system reference, and distilled research — maintained by a context owner, updated weekly.
              </div>
            </div>
            <div className="bg-bg p-[36px_32px]">
              <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-green mb-3">
                03 — Every Tool
              </div>
              <div className="font-serif text-[15px] font-bold text-text mb-2">
                Context reaches every role through their preferred tools
              </div>
              <div className="font-serif text-[13.5px] italic text-text-muted leading-[1.65]">
                PMs use Claude Code. Designers use Figma and Cursor. Engineers use Claude. Analysts use Google and Hex. The kit feeds all of them — no one re-uploads context at session start.
              </div>
            </div>
          </div>

          {/* Video callout — Jon walks through the context kit */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 flex items-center gap-6 p-6 rounded-lg border border-border bg-bg no-underline group hover:border-text-muted/30 transition-colors cursor-pointer"
          >
            <div className="w-[200px] h-[112px] rounded-md bg-bg-alt shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center group-hover:bg-accent-green/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent-green)"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div>
              <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-green mb-2">
                Watch the Walkthrough
              </div>
              <div className="font-serif text-[17px] font-bold text-text leading-[1.3] mb-1.5 group-hover:text-accent-green transition-colors">
                Context as Infrastructure
              </div>
              <div className="font-serif text-[13px] text-text-muted leading-[1.55]">
                How the kit is structured, how it syncs, and what changes when a PM starts a session with full project context loaded automatically.
              </div>
            </div>
          </a>
        </Section>

        <ContextKitSkills />

        <BeforeAfter />

        <Section id="context-kit-results" variant="light" act="context" wrap="wide">
          <Eyebrow>Early Signals from the Cooking Team</Eyebrow>
          <Display>
            What&apos;s clicking —<br />and where teams still<br />need <em>support.</em>
          </Display>
          <Lead className="mt-5">
            After one week with context kits, PMs shared unfiltered feedback in Slack. The pattern: immediate value in structure and speed, but a real mindset shift still underway — context for AI isn&apos;t the same as your working documents.
          </Lead>

          <div className="grid grid-cols-2 gap-12 mt-14">
            {/* What's clicking */}
            <div>
              <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-accent-green mb-8">
                What&apos;s Clicking
              </div>

              {/* Signals */}
              <div className="flex flex-col gap-4 mb-10">
                {[
                  {
                    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
                    title: "Structure forces clarity",
                    desc: "The kit questionnaire makes implicit decisions explicit — PMs report it surfaces assumptions they would otherwise skip.",
                  },
                  {
                    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                    title: "Time savings are immediate",
                    desc: "Context assembly that used to take 45–90 minutes dropped to near-zero. PMs pulled strategy docs and identified partners significantly faster.",
                  },
                  {
                    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                    title: "Bundled skills unlock new workflows",
                    desc: "Exec preflight and status report skills were immediately useful. PMs want a shared skill library — the appetite to share across teams is real.",
                  },
                ].map((signal) => (
                  <div key={signal.title} className="flex items-start gap-3">
                    <div className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center mt-0.5" style={{ background: "rgba(26,123,106,0.10)", color: "#1A7B6A" }}>
                      {signal.icon}
                    </div>
                    <div>
                      <div className="font-sans text-[12px] font-bold text-text mb-0.5">{signal.title}</div>
                      <div className="font-serif text-[13px] italic text-text-muted leading-[1.6]">{signal.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quotes */}
              <div className="flex flex-col gap-5">
                <QuoteCard
                  name="Nick Fabrizio"
                  quote="The standardized kit questionnaire forced clarity on stuff that I usually leave out or leave implicit. Bundled skills are great! I could see a future in which we are all sharing skills and announcing them to one another."
                />
                <QuoteCard
                  name="Gaelle Sharma"
                  quote="I now always start in the project folder when I'm working on something. Using the project I set up via the context kit helped me create a golden dataset that is more thorough and covers more test cases than what I would have created on my own."
                />
                <QuoteCard
                  name="Abby Reisner"
                  quote="Exec preflight skill felt useful and salient. I liked how it grouped the thinking into different frameworks. Filling in gaps: overall felt like I was nudged in reasonable directions."
                />
              </div>
            </div>

            {/* Where teams still need support */}
            <div>
              <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-accent-sf mb-8">
                Where Teams Still Need Support
              </div>

              {/* Signals */}
              <div className="flex flex-col gap-4 mb-10">
                {[
                  {
                    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
                    title: "A new mental model for working with documents",
                    desc: "Writing for AI consumption is a different skill than writing for yourself. Context files live in the file system, not in a doc — and that shift in how PMs relate to their own project knowledge takes time to internalize.",
                  },
                  {
                    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
                    title: "Claude is open-ended by design",
                    desc: "There's no single right way to configure Claude Code — and that flexibility, while powerful, is unfamiliar territory for PMs used to structured tools. The freedom requires new judgment about what to configure and how.",
                  },
                  {
                    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                    title: "Alignment needed on context management",
                    desc: "Who owns the kit, how often it updates, and what counts as stale context — these questions need org-level answers before the pattern scales reliably across missions.",
                  },
                ].map((signal) => (
                  <div key={signal.title} className="flex items-start gap-3">
                    <div className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center mt-0.5" style={{ background: "rgba(179,115,34,0.10)", color: "#B37322" }}>
                      {signal.icon}
                    </div>
                    <div>
                      <div className="font-sans text-[12px] font-bold text-text mb-0.5">{signal.title}</div>
                      <div className="font-serif text-[13px] italic text-text-muted leading-[1.6]">{signal.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quotes */}
              <div className="flex flex-col gap-5">
                <QuoteCard
                  name="Susannah Church"
                  variant="concern"
                  quote="I'm curious whether the intended use of these documents are for us, or for Claude to have context, or both — if it's for us, I found some of these docs to be very heavy for my specific project needs."
                />
                <QuoteCard
                  name="Nick Fabrizio"
                  variant="concern"
                  quote="It was confusing to know how to use this with my existing PM-OS that I have already built. The decision log is tricky to get right — the idea of reviewing all of my decisions to promote a shareable source of truth is seeming like a herculean task."
                />
                <QuoteCard
                  name="Eli Bovarnick"
                  variant="concern"
                  quote="It's maybe too good since it generated so much information I need to double-check. Echoing what others have said about maintenance — there's so much information that my concern would be confusing others."
                />
              </div>
            </div>
          </div>

        </Section>

        {/* ── Synthesis ── */}
        <Learnings />
        <Opportunities />
        <Resources />
        <Close />
      </main>
    </>
  );
}
