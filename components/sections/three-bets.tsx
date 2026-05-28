import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Rule } from "@/components/ui/typography";

const BETS = [
  {
    title: "The Context Bet",
    subtitle: "Better grounding, not smarter tools.",
    desc: "The highest-leverage change in any AI workflow isn't the model — it's what the model knows before the session starts. Teams that structure their project knowledge as loadable context get compounding returns: each session builds on the last, and new team members ramp faster.",
    pilot: "Pilot: Cooking",
  },
  {
    title: "The Prototyping Bet",
    subtitle: "Working prototypes, not flat deliverables.",
    desc: "When AI can scaffold a functional component from a design spec, the design review becomes a code review. Engineers see something real earlier, alignment happens faster, and the artifact that comes out of the design phase is already partially shippable.",
    pilot: "Pilots: NAPP and News",
  },
  {
    title: "The Compounding Bet",
    subtitle: "Many patterns working together, deliberately.",
    desc: "Any one of these changes produces incremental gains. All three together — context kit feeding a prototype workflow feeding a developer handoff — produce something qualitatively different: a pipeline where AI is doing coordination work, not just task work.",
    pilot: "All Three Pilots",
  },
];

export function ThreeBets() {
  return (
    <Section
      id="three-bets"
      variant="light"
      wrap="wide"
      className="!min-h-0 !py-24"
    >
      <Eyebrow>Background</Eyebrow>
      <Display>
        Three <em>bets.</em>
      </Display>
      <Rule className="mb-12" />

      {/* Three-up grid */}
      <div className="three-up bg-border" style={{ marginTop: 0, gap: "1px" }}>
        {BETS.map((bet) => (
          <div key={bet.title} className="bg-bg" style={{ padding: "44px 36px" }}>
            {/* Card title */}
            <div
              className="font-sans font-bold text-text mb-2"
              style={{ fontSize: "12px", letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              {bet.title}
            </div>

            {/* Subtitle */}
            <div
              className="font-serif font-bold text-text mb-5"
              style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)", lineHeight: 1.25 }}
            >
              {bet.subtitle}
            </div>

            {/* Description */}
            <p
              className="font-serif text-text-muted"
              style={{ fontSize: "14.5px", lineHeight: 1.75, marginBottom: 28 }}
            >
              {bet.desc}
            </p>

            {/* Pilot tag */}
            <div
              className="font-sans font-bold text-accent"
              style={{
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderTop: "1px solid var(--border)",
                paddingTop: 16,
              }}
            >
              {bet.pilot}
            </div>
          </div>
        ))}
      </div>

      {/* Section transition — Design Pilots */}
      <a href="#design-pilot-intro" className="section-next mt-16">
        <span className="section-next-label">Design Pilots</span>
        <svg className="section-next-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </a>
      <div className="h-24" />
    </Section>
  );
}
