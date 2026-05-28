import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead } from "@/components/ui/typography";

const skills = [
  {
    command: "/sync-context",
    name: "Sync Context",
    desc: "Pulls from the last week of meetings, Slack threads, and email — distills them into proposed kit updates. The PM reviews and approves. Nothing enters the kit without human confirmation.",
    tag: "Weekly maintenance",
  },
  {
    command: "/status-report",
    name: "Status Report",
    desc: "Generates a complete weekly status update by reading the kit, connecting to Google Drive, Figma, and Jira, then producing a formatted report. What used to take 45\u201390 minutes happens in seconds.",
    tag: "Recurring output",
  },
  {
    command: "/exec-preflight",
    name: "Exec Preflight",
    desc: "Prepares a PM for a leadership review by pulling project context, surfacing risks, and structuring talking points into multiple strategic frameworks. One command replaces an hour of prep.",
    tag: "Meeting prep",
  },
  {
    command: "/feature-brief",
    name: "Feature Brief",
    desc: "Generates a structured feature brief grounded in the project\u2019s actual constraints, stakeholders, and design system \u2014 not a generic template. The brief knows who the approvers are and what the eng constraints look like.",
    tag: "Artifact generation",
  },
  {
    command: "/project-digest",
    name: "Project Digest",
    desc: "Produces a digest of everything that happened on a project in the last week \u2014 decisions made, action items, risks surfaced, open questions. Pulls from Granola meetings and email, scoped by project stakeholders.",
    tag: "Situational awareness",
  },
  {
    command: "/project-intake",
    name: "Project Intake",
    desc: "Bootstraps a new project kit from raw source materials \u2014 meeting transcripts, briefs, decks, emails. Generates 6 foundational artifacts: manifest, requirements, phase plan, stakeholder map, risk register, and document index.",
    tag: "Kit setup",
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
