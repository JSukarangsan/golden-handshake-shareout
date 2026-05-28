import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead, Rule } from "@/components/ui/typography";
import { VideoCallout } from "@/components/ui/video-callout";

export function NappOutcomes() {
  return (
    <Section id="napp-outcomes" variant="dark" act="design" wrap="wide">
      <Eyebrow className="!text-accent-sf/75">Engineering Bridge</Eyebrow>
      <Display className="!text-text-light">
        From design frame<br />
        to native code —<br />
        without <em>rebuilding.</em>
      </Display>
      <Rule className="!bg-white/10" />
      <Lead className="mt-4 !text-white/72 !max-w-[620px]">
        The biggest cost in design-to-engineering handoff isn&apos;t the prototype — it&apos;s the translation. Engineers receive a Figma file and rebuild it from scratch using production components. The Native Handoff Pipeline eliminates that step.
      </Lead>

      {/* Pipeline flow diagram */}
      <div className="mt-14 grid items-center" style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 20 }}>
        <div className="p-[24px_28px] rounded-md border border-white/[.08] bg-white/[.03] text-center">
          <div className="font-serif text-[18px] font-bold text-text-light">Figma</div>
          <div className="font-serif text-[12px] text-text-light/65 mt-1.5">Design frame</div>
        </div>
        <div className="text-[1.4rem] text-text-light/65/40">→</div>
        <div className="p-[24px_28px] rounded-md border border-white/[.08] bg-white/[.03] text-center">
          <div className="font-serif text-[18px] font-bold text-text-light">React + TPL</div>
          <div className="font-serif text-[12px] text-text-light/65 mt-1.5">Tokens &amp; components</div>
        </div>
        <div className="text-[1.4rem] text-text-light/65/40">→</div>
        <div className="p-[24px_28px] rounded-md border border-accent-sf/20 bg-accent-sf/[.04] text-center">
          <div className="font-serif text-[18px] font-bold text-text-light">Swift UI</div>
          <div className="font-serif text-[12px] text-accent-sf/70 mt-1.5">iOS TPL equivalents</div>
        </div>
      </div>

      {/* How it works — 3 steps */}
      <div className="mt-14 grid grid-cols-3 gap-[1px]" style={{ background: "var(--border-dark)" }}>
        <div className="bg-bg-dark p-[36px_32px]">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-accent-sf/70 mb-3">
            Step 1 — Read
          </div>
          <div className="font-serif text-[15px] font-bold text-text-light mb-2">
            Figma MCP extracts structure
          </div>
          <div className="font-serif text-[13.5px] italic text-text-light/65 leading-[1.65]">
            The Figma MCP reads actual layer structure, spacing, and typography from design frames — not screenshots, not exports. Real structural data.
          </div>
        </div>
        <div className="bg-bg-dark p-[36px_32px]">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-accent-sf/70 mb-3">
            Step 2 — Map
          </div>
          <div className="font-serif text-[15px] font-bold text-text-light mb-2">
            Claude Code maps to native tokens
          </div>
          <div className="font-serif text-[13.5px] italic text-text-light/65 leading-[1.65]">
            A Claude Code skill maps web TPL components to their iOS equivalents. Web color tokens become Swift UI color assets. Spacing scales translate to native layout constraints.
          </div>
        </div>
        <div className="bg-bg-dark p-[36px_32px]">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-accent-sf/70 mb-3">
            Step 3 — Hand Off
          </div>
          <div className="font-serif text-[15px] font-bold text-text-light mb-2">
            Engineers receive structured code
          </div>
          <div className="font-serif text-[13.5px] italic text-text-light/65 leading-[1.65]">
            Engineers receive structured native code with correct tokens — not a Figma file to interpret and rebuild manually. The conversation shifts from &ldquo;here are the specs&rdquo; to &ldquo;is this feasible?&rdquo;
          </div>
        </div>
      </div>

      <div className="mt-10 p-[26px_30px] border-l-[3px] border-accent-sf bg-white/[.02]">
        <p className="font-serif italic text-[1.05rem] leading-[1.65] text-text-light/65">
          This pipeline is in active development. The first proof-of-concept successfully mapped a Listen Tab prototype from web React to Swift UI with correct TPL token equivalents. <em className="not-italic font-bold text-text-light">In progress.</em>
        </p>
      </div>

      {/* Video callout — Native Bridge */}
      <VideoCallout
        src="https://www.loom.com/embed/a74cd8bed0334e80873537b43f123043"
        paddingBottom="56.25%"
        eyebrow="Watch the Demo"
        title="The Native Code Bridge in action"
        description="From Figma design frame to Swift UI with correct TPL token equivalents — no manual translation."
      />
    </Section>
  );
}
