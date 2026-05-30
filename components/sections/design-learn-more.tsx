import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead, Rule } from "@/components/ui/typography";

export function DesignLearnMore() {
  return (
    <Section id="design-learn-more" variant="alt" act="design" wrap="wide">
      <Eyebrow>Learn More</Eyebrow>
      <Display>
        Which prototyping method<br />
        fits your <em>team?</em>
      </Display>
      <Rule />
      <Lead className="!max-w-[680px]">
        Want to adopt AI-assisted prototyping and understand which approach may
        benefit your team? The right method depends on your design system
        maturity, how your designers and engineers already collaborate, and what
        you're trying to communicate.
      </Lead>

      {/* Three approach cards */}
      <div className="grid grid-cols-3 gap-[1px] mt-14" style={{ background: "var(--border)" }}>
        {/* Playground */}
        <div className="bg-bg p-[40px_36px_48px] flex flex-col">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-sf mb-4">
            Approach 01
          </div>
          <div className="font-serif text-[22px] font-bold text-text leading-[1.25] mb-3">
            Playground
          </div>
          <div className="font-serif text-[14px] text-text-muted leading-[1.7] mb-8">
            Fast, disposable prototypes built from prompts, briefs, or Figma
            frames. No component library required. Ideal for communicating
            ideas early and testing directions before committing.
          </div>

          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-text/40 mb-3 mt-auto">
            This may be right for your team if
          </div>
          <ul className="flex flex-col gap-2.5">
            {[
              "You want to explore multiple directions simultaneously",
              "Your team doesn't have a mature, tokenized component library yet",
              "Designers need to communicate intent to stakeholders before engineering is involved",
              "Speed of exploration matters more than pixel-perfect fidelity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-sf/50" />
                <span className="font-serif text-[13px] text-text-muted leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-text/40 mb-2">
              Can be customized for
            </div>
            <div className="font-serif text-[13px] italic text-text-muted leading-[1.65]">
              Stakeholder alignment sessions, early research input, rapid concept testing, cross-functional reviews where interactivity beats static comps.
            </div>
          </div>
        </div>

        {/* Storybook */}
        <div className="bg-bg p-[40px_36px_48px] flex flex-col">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-sf mb-4">
            Approach 02
          </div>
          <div className="font-serif text-[22px] font-bold text-text leading-[1.25] mb-3">
            Storybook
          </div>
          <div className="font-serif text-[14px] text-text-muted leading-[1.7] mb-8">
            Production-grade prototypes built on your existing component
            library. Designers and engineers already collaborate on
            values, props, and tokens. The prototype speaks the same language
            as the codebase.
          </div>

          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-text/40 mb-3 mt-auto">
            This may be right for your team if
          </div>
          <ul className="flex flex-col gap-2.5">
            {[
              "You have a mature, well-documented component library (like TPL)",
              "Designers already collaborate with engineers on component values and props",
              "Design system compliance and token matching matter for your workflow",
              "You want prototypes that translate directly to production code",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-sf/50" />
                <span className="font-serif text-[13px] text-text-muted leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-text/40 mb-2">
              Can be customized for
            </div>
            <div className="font-serif text-[13px] italic text-text-muted leading-[1.65]">
              Engineering handoff, design system audits, component-level iteration, teams where design-to-code fidelity is the primary bottleneck.
            </div>
          </div>
        </div>

        {/* Mixed */}
        <div className="bg-bg p-[40px_36px_48px] flex flex-col">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-accent-sf mb-4">
            Approach 03
          </div>
          <div className="font-serif text-[22px] font-bold text-text leading-[1.25] mb-3">
            Mixed
          </div>
          <div className="font-serif text-[14px] text-text-muted leading-[1.7] mb-8">
            Use elements from both approaches depending on the stage.
            Start with playground-style exploration to find the direction,
            then shift to storybook-based prototypes as the design
            converges and engineering gets involved.
          </div>

          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-text/40 mb-3 mt-auto">
            This may be right for your team if
          </div>
          <ul className="flex flex-col gap-2.5">
            {[
              "Your projects move through distinct explore-then-converge phases",
              "Some team members are design-system fluent while others aren't yet",
              "You want fast early exploration but need production fidelity at handoff",
              "Your component library is growing but not yet comprehensive",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-sf/50" />
                <span className="font-serif text-[13px] text-text-muted leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-text/40 mb-2">
              Can be customized for
            </div>
            <div className="font-serif text-[13px] italic text-text-muted leading-[1.65]">
              Teams in transition, missions with varying design system adoption, projects that start broad and need to land precisely.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
