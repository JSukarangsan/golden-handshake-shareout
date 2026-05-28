import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead } from "@/components/ui/typography";

type Opportunity = {
  name: string;
  desc: string;
  theme: "context" | "design";
  color: string;
  roi: string;
  roiLabel: string;
  icon: React.ReactNode;
};

const opportunities: Opportunity[] = [
  {
    theme: "context",
    color: "#1A7B6A",
    name: "Scale context kits to more missions",
    desc: "Cooking proved the pattern. News, Games, and Growth are natural next candidates. The kit tooling is built  -  the remaining work is mission-specific setup and a lightweight onboarding flow for new context owners. GitHub alignment on repo structure is a prerequisite for cross-mission sharing.",
    roi: "Every session starts ahead",
    roiLabel: "Compounding across missions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
        <path d="M12 7v4M12 11l-5 6M12 11l5 6"/>
      </svg>
    ),
  },
  {
    theme: "context",
    color: "#1A7B6A",
    name: "Build measurement and instrumentation",
    desc: "The sync-context skill logs every run to Airtable. Scaling this into a real measurement framework  -  acceptance rates, context freshness, output quality  -  gives leadership visibility into ROI across missions.",
    roi: "Leadership ROI visibility",
    roiLabel: "Org-wide dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    theme: "context",
    color: "#1A7B6A",
    name: "Define mission-level context ownership",
    desc: "Who owns mission context? How often does it update? The Cooking pilot had one context owner updating weekly. Scaling to 8 missions needs a defined role, cadence, and escalation path when context goes stale.",
    roi: "Context freshness at scale",
    roiLabel: "Across all missions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    theme: "design",
    color: "#B37322",
    name: "Scale the Playground to more teams",
    desc: "The playground needs internal hosting, CI/CD, permissions, and team-specific configuration. Phase 1: a second team adopts. Phase 2: org-wide availability with self-serve setup. Phase 3: mature platform with cross-team pattern library.",
    roi: "Weeks → hours",
    roiLabel: "Design-to-prototype cycle",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    theme: "design",
    color: "#B37322",
    name: "Connect design system tokens officially",
    desc: "The playground is designed with interchangeable design system adapters  -  swap in any team's token set without rebuilding. The recommended next step is publishing the adapter as an npm package so any mission can install and configure it. Details and setup instructions are in the repo.",
    roi: "100% TPL compliance",
    roiLabel: "Without manual audits",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    theme: "design",
    color: "#B37322",
    name: "Upskill designers on AI-assisted prototyping",
    desc: "NAPP designers had months of self-taught experience. News designers were starting from scratch. Scaling requires tiered enablement: accessible on-ramps for new-to-code designers, and extensible workflows for power users already pushing boundaries.",
    roi: "Any designer, any mission",
    roiLabel: "No eng dependency",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h.01M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/>
      </svg>
    ),
  },
];

export function Opportunities() {
  return (
    <Section id="opportunities" variant="alt" act="synth" wrap="wide">
      <Eyebrow>What&apos;s Next</Eyebrow>
      <Display>
        Six opportunities<br />
        to <em>scale.</em>
      </Display>
      <Lead className="mt-5">
        The pilots proved the patterns. The next phase is scaling them across
        the product org  -  and that means different work: alignment,
        tooling consolidation, measurement, and enablement.
      </Lead>

      <div className="mt-14 flex flex-col divide-y divide-border">
        {opportunities.map((opp, i) => (
          <div key={opp.name} className="flex items-start gap-6 py-8 first:pt-0 last:pb-0">
            {/* Number + icon */}
            <div className="flex flex-col items-center gap-2 shrink-0 w-10 pt-1">
              <span className="font-sans text-[10px] font-bold text-text-muted/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${opp.color}14`, color: opp.color }}
              >
                {opp.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Theme tag */}
              <span
                className="inline-block font-sans text-[9px] font-bold uppercase tracking-[0.16em] mb-2"
                style={{ color: opp.color }}
              >
                {opp.theme === "context" ? "Context Kits" : "Prototyping"}
              </span>
              <h3 className="font-serif text-[1.15rem] font-bold text-text leading-[1.3] mb-2">
                {opp.name}
              </h3>
              <p className="font-serif text-[14.5px] italic text-text-muted leading-[1.75] max-w-[600px]">
                {opp.desc}
              </p>
            </div>

            {/* ROI panel */}
            <div
              className="shrink-0 w-[168px] rounded-lg p-4 text-right"
              style={{
                background: `${opp.color}0d`,
                border: `1px solid ${opp.color}20`,
              }}
            >
              <div
                className="font-serif text-[1.05rem] font-bold leading-tight mb-1"
                style={{ color: opp.color }}
              >
                {opp.roi}
              </div>
              <div className="font-sans text-[9.5px] font-medium uppercase tracking-[0.12em] text-text-muted/60">
                {opp.roiLabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
