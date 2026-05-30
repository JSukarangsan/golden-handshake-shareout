import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead, Rule } from "@/components/ui/typography";

export function ContextKitLearnMore() {
  return (
    <Section id="context-kit-learn-more" variant="alt" act="context" wrap="wide">
      <Eyebrow>Learn More</Eyebrow>
      <Display>
        <em>Adopting</em> context kits:<br />
        what the process<br />
        looks like.
      </Display>
      <Rule />
      <Lead className="!max-w-[680px]">
        Context kits don&apos;t start with tooling. They start with understanding
        where your team&apos;s knowledge lives today, what&apos;s hardest to find,
        and which deliverables suffer most from missing context. The kit is the
        output. The real work is the mapping.
      </Lead>

      {/* Three phase cards */}
      <div className="grid grid-cols-3 gap-[1px] mt-14" style={{ background: "var(--border)" }}>
        {/* Phase 1: Map */}
        <div className="bg-bg p-[40px_36px_48px] flex flex-col">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-green mb-4">
            Phase 01
          </div>
          <div className="font-serif text-[22px] font-bold text-text leading-[1.25] mb-3">
            Map
          </div>
          <div className="font-serif text-[14px] text-text-muted leading-[1.7] mb-8">
            Audit your team&apos;s information landscape. Where does critical
            knowledge live? What do PMs spend the most time assembling before
            an AI session or a deliverable? What context is hardest to find,
            most frequently re-created, or most likely to go stale?
          </div>

          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-text/40 mb-3 mt-auto">
            What this looks like in practice
          </div>
          <ul className="flex flex-col gap-2.5">
            {[
              "Interview PMs on their most common deliverables and what inputs they require",
              "Identify the highest-friction information: scattered across Slack, Docs, Jira, and people's heads",
              "Map which systems of record already exist vs. what's tribal knowledge",
              "Prioritize context by impact: what, if pre-loaded, would save the most time or improve the most outputs",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-green/50" />
                <span className="font-serif text-[13px] text-text-muted leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phase 2: Build */}
        <div className="bg-bg p-[40px_36px_48px] flex flex-col">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-green mb-4">
            Phase 02
          </div>
          <div className="font-serif text-[22px] font-bold text-text leading-[1.25] mb-3">
            Build
          </div>
          <div className="font-serif text-[14px] text-text-muted leading-[1.7] mb-8">
            Structure the context into markdown files that load automatically
            at session start. Decisions log, stakeholder map, design system
            reference, team norms, distilled research. Each file is written
            for AI consumption, not human browsing.
          </div>

          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-text/40 mb-3 mt-auto">
            What this looks like in practice
          </div>
          <ul className="flex flex-col gap-2.5">
            {[
              "Set up a GitHub repository with structured context files per project",
              "Write context in markdown optimized for AI tools, not traditional documentation",
              "Configure Claude Code with CLAUDE.md and bundled skills tailored to your workflows",
              "Assign a context owner (usually the PM) responsible for the kit's accuracy",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-green/50" />
                <span className="font-serif text-[13px] text-text-muted leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phase 3: Sustain */}
        <div className="bg-bg p-[40px_36px_48px] flex flex-col">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-green mb-4">
            Phase 03
          </div>
          <div className="font-serif text-[22px] font-bold text-text leading-[1.25] mb-3">
            Sustain
          </div>
          <div className="font-serif text-[14px] text-text-muted leading-[1.7] mb-8">
            A context kit is only valuable if it stays current. Weekly syncs
            pull from meeting transcripts and propose updates for human review.
            Skills are shared across the team. The kit compounds in value as
            the project evolves.
          </div>

          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-text/40 mb-3 mt-auto">
            What this looks like in practice
          </div>
          <ul className="flex flex-col gap-2.5">
            {[
              "Run a weekly sync-context skill that proposes kit updates from recent meetings",
              "Review and approve changes before they land, keeping the PM as the source of truth",
              "Share useful skills across the team and build a shared skill library",
              "Retire or archive context that's gone stale so the kit stays lean and accurate",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-green/50" />
                <span className="font-serif text-[13px] text-text-muted leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Prerequisites bar */}
      <div className="mt-[1px] bg-bg p-[36px_40px] flex flex-col gap-4" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-green">
          Ideal for teams that are comfortable with
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            {
              title: "GitHub for collaboration",
              desc: "Context files live in a repo. The team shares and versions context the same way engineers share code.",
            },
            {
              title: "Claude Code as a daily tool",
              desc: "The kit is built for Claude Code's CLAUDE.md system. PMs use it as their primary AI interface, not a side channel.",
            },
            {
              title: "Markdown as a format",
              desc: "Context files are .md, not Google Docs. Writing for AI consumption is a learnable skill, but the format shift is real.",
            },
            {
              title: "A new ownership model",
              desc: "Someone on the team owns the kit. Context maintenance becomes part of the PM workflow, not a one-time setup.",
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="font-sans text-[12px] font-bold text-text mb-1">{item.title}</div>
              <div className="font-serif text-[13px] italic text-text-muted leading-[1.6]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
