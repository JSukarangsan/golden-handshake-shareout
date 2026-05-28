import { Section } from "@/components/ui/section";
import { Eyebrow, Display } from "@/components/ui/typography";

const nextCards = [
  {
    n: "Next 01",
    title: "Prototyping Playground",
    body: "A shared Next.js environment  -  pre-loaded with TPL components, Figma token sync, and context kit integration  -  that any product team can use to spin up a prototype in a single session. The infrastructure for this already exists across the three pilots; it needs to be consolidated into a single, maintained environment that doesn't require a new setup for every team.",
  },
  {
    n: "Next 02",
    title: "Context Kit Scaling",
    body: "Cooking proved the pattern. The next step is scaling it across the full product org  -  starting with missions that have the highest AI adoption and the most to gain from compounding context. That means defining a context kit standard, a maintenance playbook, and a lightweight training program for context owners. The work is replicable; it just needs a dedicated run.",
  },
  {
    n: "Next 03",
    title: "The Remaining Opportunities",
    body: "Four of the seven Discovery opportunities  -  Product Reviews, Research as Product, PM Co-pilot Agent, and the Coordination Tax  -  were not the focus of any pilot. The foundation is in place. The context kit infrastructure, the handoff patterns, and the AI fluency baseline developed during the pilots make these the natural next tranche of work.",
  },
];

export function NextSteps() {
  return (
    <Section id="next-steps" variant="dark2" act="synth" wrap="wide">
      <Eyebrow className="!text-accent/72">What&apos;s Next</Eyebrow>
      <Display className="text-text-light">
        H2 opportunity:
        <br />
        scaling what&apos;s
        <br />
        already <em>working.</em>
      </Display>

      {/* Next cards */}
      <div
        className="grid grid-cols-3 bg-border-dark mt-14"
        style={{ gap: "1px" }}
      >
        {nextCards.map((card) => (
          <div key={card.n} className="bg-bg-dark-alt" style={{ padding: "48px" }}>
            <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-text-light/35 mb-5">
              {card.n}
            </div>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-light)",
                lineHeight: 1.35,
                marginBottom: "14px",
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "13.5px",
                fontStyle: "italic",
                color: "var(--text-ghost)",
                lineHeight: 1.7,
              }}
            >
              {card.body}
            </div>
          </div>
        ))}
      </div>

      {/* Close line */}
      <div
        className="mt-14 pt-9 border-t border-border-dark"
      >
        <p
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            color: "color-mix(in srgb, var(--text-light) 35%, transparent)",
            lineHeight: 1.75,
            marginBottom: "2rem",
          }}
        >
          An honest caveat: the pilots ran in focused, coached conditions. The
          teams we worked with were self-selected for curiosity and openness.
          Scaling to the full org will surface resistance, skill gaps, and
          workflow constraints we haven&apos;t encountered yet. The patterns
          are proven. The rollout is still a design problem.
        </p>
        <p
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            color: "color-mix(in srgb, var(--text-light) 35%, transparent)",
            lineHeight: 1.75,
          }}
        >
          The pilots proved the patterns work. The context kit compounds.
          The handoff artifacts communicate. The prototypes unlock alignment.
          What&apos;s left is the organizational work of making this the default
           -  and that&apos;s a solvable problem with the right support structure
          in place.
        </p>
      </div>
    </Section>
  );
}
