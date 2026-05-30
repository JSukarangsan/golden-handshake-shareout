import { Section } from "@/components/ui/section";
import { Eyebrow, Display } from "@/components/ui/typography";

const findings = [
  {
    n: "01",
    title:
      "Context compounds \u2014 every session starts further ahead than the last.",
    body: "The first session with structured project memory produces noticeably better output. By the fifth, the kit contains enough accumulated decisions, constraints, and stakeholder context that first drafts require minimal editing. When a second project starts in the same mission, it inherits mission-level context automatically. Each new project is cheaper to set up than the last.",
  },
  {
    n: "02",
    title:
      "Adoption isn\u2019t uniform \u2014 design for real skill tiers, not a mythical average.",
    body: "The NAPP and News pilots started from completely different places. The NAPP team had engineering allies, self-taught workflows, and months of experience. The News designers had never touched code-adjacent tools. These aren\u2019t outliers \u2014 they\u2019re the real distribution inside any role. Effective enablement designs for distinct cohorts: accessible enough for someone starting from scratch, extensible enough that the advanced user isn\u2019t constrained.",
  },
  {
    n: "03",
    title: "Prototypes are communication tools \u2014 and that should change how we work.",
    body: "The biggest shift wasn\u2019t speed \u2014 it was when in the process prototypes showed up. When a designer drops a live URL in Slack early in the project, the PM doesn\u2019t need to narrate over static comps. The engineer can ask feasibility questions against something real. The stakeholder reacts to a product, not a deck slide. A prototype doesn\u2019t have to be production-ready. It just has to communicate clearly enough for the team to make a decision.",
  },
  {
    n: "04",
    title: "AI-driven handoffs replace coordination meetings.",
    body: 'The \u201cGolden Handshake\u201d problem \u2014 decisions and context lost between every handoff \u2014 is exactly what these pilots addressed. Designer\u2192PM: live URL replaces alignment meeting. Designer\u2192Engineer: code branch replaces Figma specs. PM\u2192Stakeholder: working prototype replaces deck presentation. PM\u2192PM: context kit loads full project memory on day one. The coordination tax drops because the artifacts speak for themselves.',
  },
  {
    n: "05",
    title: "Scaling requires permission to work across traditional roles.",
    body: "AI makes it possible for a designer to ship code, a PM to build a prototype, an engineer to shape product direction upstream. But the tool isn\u2019t the bottleneck \u2014 the culture is. How far this goes depends on whether the organization gives people permission to pick up a minor alongside their core craft.",
  },
];

const quantifiedMetrics = [
  {
    title: "Design\u2192Prototype: flat Figma \u2192 stakeholder-ready in 12 minutes",
    desc: "Fully configurable variations across user states in 1\u20132 hours. Previously took a week or more with engineering involved.",
  },
  {
    title: "Context assembly: 45\u201390 min \u2192 zero",
    desc: "Kit auto-loads at session start",
  },
];

const qualitativeMetrics = [
  {
    title: "PMs stopped re-uploading docs every session",
    desc: "Context loads automatically; the manual assembly step disappeared",
  },
  {
    title: "Stakeholders reacted to working prototypes, not slide decks",
    desc: "Design reviews shifted from narration to interaction",
  },
  {
    title: "AI outputs got meaningfully richer with structured context",
    desc: "One PM built a more thorough golden dataset than she would have on her own, moving through seven rounds of prompt refinement in a single session",
  },
  {
    title: "The kit forced PMs to make project assumptions explicit",
    desc: "Structured intake surfaced gaps in project thinking before AI was even involved  -  an unexpected benefit of the setup process itself",
  },
];

const stillToMeasure = [
  {
    title: "Cost savings from reduced engineering prototype support",
    desc: "Directionally clear; needs H2 data across more missions",
  },
  {
    title: "Product review cycle time impact org-wide",
    desc: "Demonstrated in pilots; needs measurement across 8 missions",
  },
  {
    title: "Context kit ROI across missions",
    desc: "Proven for Cooking; scaling economics need validation at 5+ missions",
  },
];

export function Learnings() {
  return (
    <Section id="learnings" variant="dark" act="synth" wrap="wide">
      <Eyebrow className="!text-[#4A5568]">Cross-Pilot Synthesis</Eyebrow>
      <Display className="text-text-light">
        What we learned,
        <br />
        what we measured,
        <br />
        and what&apos;s <em>still ahead.</em>
      </Display>

      {/* What We Learned */}
      <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] mt-12 mb-3" style={{ color: "rgba(240,237,231,0.50)" }}>
        Key Themes
      </div>

      <div className="flex flex-col divide-y divide-white/[.07] mt-2">
        {findings.map((f) => (
          <div key={f.n} className="flex items-start gap-5 py-6 first:pt-0">
            <div className="font-sans text-[11px] font-bold text-text-light/25 tabular-nums shrink-0 pt-1">
              {f.n}
            </div>
            <div>
              <div className="font-serif text-[1.05rem] font-bold text-text-light leading-[1.35] mb-1.5">
                {f.title}
              </div>
              <div className="font-serif text-[13px] italic text-text-light/50 leading-[1.7] max-w-[600px]">
                {f.body}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* What We Measured */}
      <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] mt-14 mb-3" style={{ color: "rgba(240,237,231,0.50)" }}>
        What We Measured
      </div>

      <div className="grid grid-cols-2 bg-border-dark" style={{ gap: "1px" }}>
        {/* Quantified */}
        <div className="bg-bg-dark p-9">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] mb-[18px]" style={{ color: "rgba(240,237,231,0.50)" }}>
            Quantified
          </div>
          <div className="flex flex-col gap-[18px]">
            {quantifiedMetrics.map((m) => (
              <div key={m.title}>
                <div className="font-serif text-[15px] font-bold text-text-light">
                  {m.title}
                </div>
                <div className="font-serif text-[13px] italic text-text-light/65 mt-1">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] mt-[28px] mb-[18px]" style={{ color: "rgba(240,237,231,0.50)" }}>
            Observed
          </div>
          <div className="flex flex-col gap-[18px]">
            {qualitativeMetrics.map((m) => (
              <div key={m.title}>
                <div className="font-serif text-[15px] font-bold text-text-light">
                  {m.title}
                </div>
                <div className="font-serif text-[13px] italic text-text-light/65 mt-1">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still to Measure */}
        <div className="bg-bg-dark p-9">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] mb-[18px]" style={{ color: "rgba(240,237,231,0.50)" }}>
            Still to Measure at Scale
          </div>
          <div className="flex flex-col gap-[18px]">
            {stillToMeasure.map((m) => (
              <div key={m.title}>
                <div className="font-serif text-[15px] font-bold text-text-light">
                  {m.title}
                </div>
                <div className="font-serif text-[13px] italic text-text-light/65 mt-1">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
