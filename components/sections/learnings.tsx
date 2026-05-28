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
    body: "The NAPP and News pilots started from completely different places. Lindsey had engineering allies, self-taught workflows, and months of experience. The News designers had never touched code-adjacent tools. These aren\u2019t outliers \u2014 they\u2019re the real distribution inside any role. Effective enablement designs for distinct cohorts: accessible enough for someone starting from scratch, extensible enough that the advanced user isn\u2019t constrained.",
  },
  {
    n: "03",
    title: "Prototypes are communication tools, not production artifacts.",
    body: "The biggest shift wasn\u2019t speed \u2014 it was when in the process prototypes showed up. When a designer drops a live URL in Slack early in the project, the PM doesn\u2019t need to narrate over static comps. The engineer can ask feasibility questions against something real. The stakeholder reacts to a product, not a deck slide. A prototype doesn\u2019t have to be production-ready. It just has to communicate clearly enough for the team to make a decision.",
  },
  {
    n: "04",
    title: "AI-driven handoffs replace coordination meetings.",
    body: 'The \u201cGolden Handshake\u201d problem \u2014 decisions and context lost between every handoff \u2014 is exactly what these pilots addressed. Designer\u2192PM: live URL replaces alignment meeting. Designer\u2192Engineer: code branch replaces Figma specs. PM\u2192Stakeholder: working prototype replaces deck presentation. PM\u2192PM: context kit loads full project memory on day one. The coordination tax drops because the artifacts speak for themselves.',
  },
];

const quantifiedMetrics = [
  {
    title: "Design\u2192Prototype: weeks \u2192 hours",
    desc: "Designer-only, no engineering support required",
  },
  {
    title: "Context assembly: 45\u201390 min \u2192 zero",
    desc: "Kit auto-loads at session start",
  },
  {
    title: "Review meetings: multiple rounds \u2192 decisions in room",
    desc: "Stakeholders interact with prototype, not a narration",
  },
  {
    title: "Teams with named AI workflow: 0 \u2192 3",
    desc: "NAPP, News, Cooking \u2014 each with documented, repeatable process",
  },
];

const stillToMeasure = [
  {
    title: "% of AI-generated code reaching production",
    desc: "Prototype branches are engineer-refinable, but production tracking not yet in place",
  },
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
        What We Learned
      </div>

      <div className="findings-grid">
        {findings.map((f) => (
          <div key={f.n} className="finding-card">
            <div className="finding-n">{f.n}</div>
            <div className="finding-title">{f.title}</div>
            <div className="finding-body">{f.body}</div>
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
