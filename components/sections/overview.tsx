import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Rule } from "@/components/ui/typography";

export function Overview() {
  return (
    <Section
      id="overview"
      variant="alt"
      wrap="wide"
      className="!min-h-0 !py-20"
    >
      <Eyebrow>The Engagement</Eyebrow>
      <Display>
        Working with teams
        <br />
        at every stage of their
        <br />
        <em>AI journey.</em>
      </Display>
      <Rule />

      {/* Three-up grid */}
      <div
        className="three-up bg-border mt-0"
        style={{ marginTop: 0 }}
      >
        {/* Col 1: What This Was */}
        <div className="bg-bg" style={{ padding: "36px 32px" }}>
          <div className="font-sans text-[10px] font-bold uppercase tracking-[0.20em] text-accent mb-5">
            What This Was
          </div>
          <p className="font-serif text-[14.5px] leading-[1.75] text-text-muted mb-5">
            NYT Product engaged Summer Friday &amp; Partners — a boutique AI
            consultancy — to design and run AI workflow pilots across three
            mission areas, each at a different stage of their AI maturity.
            News, NAPP, and Cooking were chosen deliberately: one team with
            months of self-taught practice, one starting from scratch, one
            building context infrastructure from the ground up.
          </p>
          <p className="font-serif text-[14.5px] leading-[1.75] text-text-muted">
            The goal was not to evaluate AI tools in isolation, but to
            demonstrate what changes when AI is wired into the actual workflow:
            the handoffs, the artifacts, and the moments where context is lost
            between disciplines.
          </p>
        </div>

        {/* Col 2: How It Was Structured */}
        <div className="bg-bg" style={{ padding: "36px 32px" }}>
          <div className="font-sans text-[10px] font-bold uppercase tracking-[0.20em] text-accent mb-5">
            How It Was Structured
          </div>
          <div className="flex flex-col gap-7">
            {[
              {
                title: "Discovery",
                date: "Jan 2026",
                desc: "Stakeholder interviews, workflow mapping, and a Navigator Assessment to identify the highest-leverage intervention points.",
              },
              {
                title: "Design",
                date: "Feb 2026",
                desc: "Pilot design, context kit architecture, and prototype methodology — built around real NYT features in active development.",
              },
              {
                title: "Pilots",
                date: "Mar – May 2026",
                desc: "Three parallel pilots running live workflow experiments with actual teams, features, and handoff moments.",
              },
            ].map((phase) => (
              <div key={phase.title}>
                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="font-sans text-[12px] font-bold text-text">
                    {phase.title}
                  </span>
                  <span className="font-sans text-[10px] text-text-muted">
                    {phase.date}
                  </span>
                </div>
                <p className="font-serif text-[13.5px] leading-[1.68] text-text-muted">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: The Three Pilots */}
        <div className="bg-bg" style={{ padding: "36px 32px" }}>
          <div className="font-sans text-[10px] font-bold uppercase tracking-[0.20em] text-accent mb-5">
            The Three Pilots
          </div>
          <div className="flex flex-col gap-7">
            {[
              {
                name: "NAPP",
                desc: "AI-assisted prototyping for the NYT Audio Player redesign. Design → prototype velocity using Figma Make and component scaffolding.",
              },
              {
                name: "News",
                desc: 'Design → code handoff for the Shows Forward "Listen Tab" feature. Measuring cycle time and developer-usable code generation.',
              },
              {
                name: "Cooking",
                desc: "Context kit infrastructure for the Cooking PM team. Reducing session-start friction and measuring compounding knowledge value.",
              },
            ].map((pilot) => (
              <div
                key={pilot.name}
                className="border-l-[3px] border-accent pl-4"
              >
                <div className="font-sans text-[12px] font-bold text-text mb-1">
                  {pilot.name}
                </div>
                <p className="font-serif text-[13.5px] leading-[1.68] text-text-muted">
                  {pilot.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summer Friday Team */}
      <div className="mt-[1px] bg-bg border border-border" style={{ padding: "36px 32px" }}>
        <div className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-text-muted/50 mb-5">
          Summer Friday Team
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              src: "/headshot-jon.jpeg",
              name: "Jon Sukarangsan",
              role: "Engagement Lead, PM workflow coaching, synthesis",
            },
            {
              src: "/headshot-tj.avif",
              name: "TJ Pitre",
              role: "Design Engineering Lead, tool assessment, code review",
            },
            {
              src: "/headshot-paul.avif",
              name: "Paul Best",
              role: "Product Design Lead, design system integration, Figma workflows",
            },
          ].map((person) => (
            <div key={person.name} className="flex items-center gap-4">
              <Image
                src={person.src}
                alt={person.name}
                width={112}
                height={112}
                className="rounded-full object-cover shrink-0"
                style={{ width: 56, height: 56 }}
              />
              <div>
                <div className="font-sans text-[13px] font-bold text-text">
                  {person.name}
                </div>
                <div className="font-serif text-[12.5px] leading-[1.5] text-text-muted mt-0.5">
                  {person.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
