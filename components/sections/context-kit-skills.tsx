import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead } from "@/components/ui/typography";

const skills = [
  {
    command: "/pm-project-intake",
    name: "PM Project Intake",
    desc: "Full project setup for PMs. Runs a guided interview, loads mission context, queries Glean for related research and roadmaps, and generates the foundational project kit \u2014 manifest, stakeholder map, phase plan, risk register, and document index.",
    tag: "Kit setup",
  },
  {
    command: "/update-context",
    name: "Update Context",
    desc: "Keeps the project kit current mid-project. Takes any input \u2014 meeting notes, Slack thread, email, Google Doc paste, voice memo transcript \u2014 and routes updates to the right files. The PM reviews and approves before anything changes.",
    tag: "Weekly maintenance",
  },
  {
    command: "/exec-preflight",
    name: "Exec Preflight",
    desc: "Stress-tests a brief, PRD, or deck outline before an exec review. Reviews from three perspectives \u2014 Mission VP, Engineering Lead, Editorial/Business \u2014 and surfaces gaps before the meeting happens.",
    tag: "Meeting prep",
  },
  {
    command: "/feature-brief",
    name: "Feature Brief",
    desc: "Writes a feature brief or PRD grounded in project context. Reads the project manifest for problem framing, goals, and constraints \u2014 the brief knows who the approvers are and what the eng constraints look like.",
    tag: "Artifact generation",
  },
  {
    command: "/log-decision",
    name: "Log Decision",
    desc: "Logs a decision to the decision log with minimal friction. State the decision directly or paste raw context \u2014 meeting notes, a Slack thread \u2014 and it extracts and structures the decision with rationale and stakeholders.",
    tag: "Decision tracking",
  },
  {
    command: "/discovery-synthesis",
    name: "Discovery Synthesis",
    desc: "Synthesizes raw research into actionable insights and recommendations. Accepts interview transcripts, survey responses, usability test notes, and produces structured findings grounded in the project\u2019s actual goals and constraints.",
    tag: "Research",
  },
];

export function ContextKitSkills() {
  return (
    <Section id="context-kit-skills" variant="dark" act="context" wrap="wide">
      <Eyebrow className="!text-accent-green/70">Bundled Skills</Eyebrow>
      <Display className="!text-text-light">
        Every kit ships with<br />
        skills that do <em className="!text-accent-green-light">real work.</em>
      </Display>
      <Lead className="mt-5 !text-text-light/70">
        Skills are slash commands that encode repeatable PM workflows. They read
        from the kit, connect to external tools, and produce artifacts &mdash;
        status reports, briefs, digests &mdash; grounded in actual project
        context. PMs type one command instead of assembling information from
        scratch.
      </Lead>

      <div className="mt-14 grid grid-cols-2 gap-[1px]" style={{ background: "var(--border-dark)" }}>
        {skills.map((skill) => (
          <div key={skill.command} className="bg-bg-dark p-[36px_32px]">
            <div className="flex items-center gap-3 mb-3">
              <code
                className="font-mono text-[13px] font-bold px-2.5 py-1 rounded"
                style={{ background: "rgba(26,123,106,0.12)", color: "#2ECC9B" }}
              >
                {skill.command}
              </code>
              <span
                className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,237,231,0.35)" }}
              >
                {skill.tag}
              </span>
            </div>
            <div className="font-serif text-[15px] font-bold text-text-light mb-2">
              {skill.name}
            </div>
            <div className="font-serif text-[13.5px] italic text-text-light/65 leading-[1.65]">
              {skill.desc}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
